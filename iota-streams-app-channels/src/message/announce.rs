//! `Announce` message content. This is the initial message of the Channel application instance.
//!
//! It announces channel owner's public keys: Ed25519 signature key and corresponding X25519 key
//! exchange key (derived from Ed25519 public key). The `Announce` message is similar to
//! self-signed certificate in a conventional PKI.
//!
//! ```ddml
//! message Announce {
//!     absorb u8 ed25519pk[32];
//!     commit;
//!     squeeze external u8 tag[32];
//!     ed25519(tag) sig;
//! }
//! ```
//!
//! # Fields
//!
//! * `ed25519pk` -- channel owner's Ed25519 public key.
//!
//! * `tag` -- hash-value to be signed.
//!
//! * `sig` -- signature of `tag` field produced with the Ed25519 private key corresponding to ed25519pk`.

use core::convert::TryInto as _;

use iota_streams_core::Result;

use iota_streams_app::message;
use iota_streams_core::{
    key_exchange::x25519,
    signature::ed25519,
    sponge::prp::PRP,
    wrapped_err,
    Errors::KeyConversionFailure,
    WrappedError,
};
use iota_streams_ddml::{
    command::*,
    io,
    types::*,
};

pub struct ContentWrap<'a, F> {
    sig_sk: &'a ed25519::SecretKey,
    flags: Uint8,
    _phantom: core::marker::PhantomData<F>,
}

impl<'a, F> ContentWrap<'a, F> {
    pub fn new(sig_sk: &'a ed25519::SecretKey, flags: u8) -> Self {
        Self {
            sig_sk,
            flags: Uint8(flags),
            _phantom: core::marker::PhantomData,
        }
    }
}

impl<'a, F: PRP> message::ContentSizeof<F> for ContentWrap<'a, F> {
    fn sizeof<'c>(&self, ctx: &'c mut sizeof::Context<F>) -> Result<&'c mut sizeof::Context<F>> {
        ctx.absorb(&self.sig_sk.public_key())?;
        ctx.absorb(&self.flags)?;
        ctx.ed25519(self.sig_sk, HashSig)?;
        Ok(ctx)
    }
}

impl<'a, F: PRP, Store> message::ContentWrap<F, Store> for ContentWrap<'a, F> {
    fn wrap<'c, OS: io::OStream>(
        &self,
        _store: &Store,
        ctx: &'c mut wrap::Context<F, OS>,
    ) -> Result<&'c mut wrap::Context<F, OS>> {
        ctx.absorb(&self.sig_sk.public_key())?;
        ctx.absorb(&self.flags)?;
        ctx.ed25519(self.sig_sk, HashSig)?;
        Ok(ctx)
    }
}

pub struct ContentUnwrap<F> {
    pub(crate) sig_pk: ed25519::PublicKey,
    pub(crate) ke_pk: x25519::PublicKey,
    pub(crate) flags: Uint8,
    _phantom: core::marker::PhantomData<F>,
}

impl<F> Default for ContentUnwrap<F> {
    fn default() -> Self {
        let sig_pk = ed25519::PublicKey::try_from_bytes([0; 32]).unwrap();
        // No need to worry about unwrap since it's operating from default input
        let ke_pk = (&sig_pk).try_into().unwrap();
        let flags = Uint8(0);
        Self {
            sig_pk,
            ke_pk,
            flags,
            _phantom: core::marker::PhantomData,
        }
    }
}

impl<F, Store> message::ContentUnwrap<F, Store> for ContentUnwrap<F>
where
    F: PRP,
{
    fn unwrap<'c, IS: io::IStream>(
        &mut self,
        _store: &Store,
        ctx: &'c mut unwrap::Context<F, IS>,
    ) -> Result<&'c mut unwrap::Context<F, IS>> {
        ctx.absorb(&mut self.sig_pk)?;
        use core::convert::TryInto;
        self.ke_pk = (&self.sig_pk)
            .try_into()
            .map_err(|e| wrapped_err!(KeyConversionFailure, WrappedError(e)))?;
        ctx.absorb(&mut self.flags)?;
        ctx.ed25519(&self.sig_pk, HashSig)?;
        Ok(ctx)
    }
}
