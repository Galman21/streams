//! Customize Author with default implementation for use over the Tangle.

use anyhow::{
    Result,
};
use core::{
    fmt,
    cell::RefCell,
};

use super::*;
use crate::{
    api::{
        tangle::{
            User,
            user::{
                UserInstance,
            },
            MsgInfo,
            MessageReturn,
        },
    },
};

use iota_streams_core::{
    prelude::{Vec, Rc},
    prng,
};
use iota_streams_core_edsig::signature::ed25519;

/// Author type.
pub struct Author<T: Transport> {
    user: User<T>,
}

impl<T: Transport> Author<T>
where
    T::RecvOptions: Copy + Default,
    T::SendOptions: Copy + Default,
{
    /// Create a new Author instance, generate new MSS keypair and optionally NTRU keypair.
    pub fn new(
        seed: &str,
        encoding: &str,
        payload_length: usize,
        multi_branching: bool,
        transport: Rc<RefCell<T>>,
    ) -> Self {
        let nonce = "TANGLEAUTHORNONCE".as_bytes().to_vec();
        let mut user = UserInstance::gen(
            prng::dbg_init_str(seed),
            nonce,
            if multi_branching { 1 } else { 0 },
            encoding.as_bytes().to_vec(),
            payload_length,
        );
        let channel_idx = 0_u64;
        let _ = user.create_channel(channel_idx);
        Self { user: User { user, transport } }
    }

    /// Announce creation of a new Channel.
    pub fn send_announce(&mut self) -> Result<Address> {
        self.user.send_announce()
    }
    /// Create a new keyload for a list of subscribers.
    pub fn send_keyload(
        &mut self,
        link_to: &Address,
        psk_ids: &PskIds,
        ke_pks: &Vec<ed25519::PublicKey>,
    ) -> Result<(Address, Option<Address>)> {
        self.user.send_keyload(link_to, psk_ids, ke_pks)
    }

    /// Create keyload for all subscribed subscribers.
    pub fn send_keyload_for_everyone(&mut self, link_to: &Address) -> Result<(Address, Option<Address>)> {
        self.user.send_keyload_for_everyone(link_to)
    }

    /// Subscribe a new subscriber.
     pub fn receive_subscribe(&mut self, link: &Address) -> Result<()> {
        self.user.receive_subscribe(link)
    }

    // Unsubscribe a subscriber
    // pub pub fn receive_unsubscribe(&mut self, link: Address) -> Result<()> {
    // self.user.handle_unsubscribe(link, MsgInfo::Unsubscribe)
    // }

    /// Channel app instance.
    pub fn channel_address(&self) -> Option<&ChannelAddress> {
        self.user.channel_address()
    }

    pub fn get_pk(&self) -> &ed25519::PublicKey {
        self.user.get_pk()
    }

    pub fn commit_message(&mut self, msg: WrappedMessage, info: MsgInfo) -> Result<Address> {
        self.user.commit_message(msg, info)
    }

    /// Create a signed packet.
    pub fn send_signed_packet(
        &mut self,
        link_to: &Address,
        public_payload: &Bytes,
        masked_payload: &Bytes,
    ) -> Result<(Address, Option<Address>)> {
        self.user.send_signed_packet(link_to, public_payload, masked_payload)
    }

    /// Create a tagged packet.
    pub fn send_tagged_packet(
        &mut self,
        link_to: &Address,
        public_payload: &Bytes,
        masked_payload: &Bytes,
    ) -> Result<(Address, Option<Address>)> {
        self.user.send_tagged_packet(link_to, public_payload, masked_payload)
    }

    /// Unwrap tagged packet.
    pub fn receive_tagged_packet(&mut self, link: &Address) -> Result<(Bytes, Bytes)> {
        self.user.receive_tagged_packet(link)
    }

    /// Unwrap and verify signed packet.
    pub fn receive_signed_packet(&mut self, link: &Address) -> Result<(ed25519::PublicKey, Bytes, Bytes)> {
        self.user.receive_signed_packet(link)
    }

    pub fn receive_sequence(&mut self, link: &Address) -> Result<Address> {
        self.user.receive_sequence(link)
    }

    pub fn is_multi_branching(&self) -> bool {
        self.user.is_multi_branching()
    }

    pub fn gen_next_msg_ids(&mut self, branching: bool) -> Vec<(ed25519::PublicKey, SequencingState<Address>)> {
        self.user.gen_next_msg_ids(branching)
    }

    pub fn store_state(&mut self, pk: ed25519::PublicKey, link: &Address) {
        self.user.store_state(pk, link)
    }

    pub fn store_state_for_all(&mut self, link: &Address, seq_num: u64) {
        self.user.store_state_for_all(link, seq_num)
    }

    pub fn fetch_next_msgs(&mut self) -> Vec<MessageReturn> {
        self.user.fetch_next_msgs()
    }

    pub fn receive_msg(&mut self, msg: Message, pk: Option<ed25519::PublicKey>) -> Result<MessageReturn> {
        self.user.handle_message(msg, pk)
    }

}

impl<T: Transport> fmt::Display for Author<T> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "<{}>\n{}",
            hex::encode(self.user.user.sig_kp.public.as_bytes()),
            self.user.user.pk_store
        )
    }
}
