"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[245],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9378:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},s="Getting Started",c={unversionedId:"libraries/c/getting_started",id:"libraries/c/getting_started",isDocsHomePage:!1,title:"Getting Started",description:"The C bindings allow for you to build a Streams API which can be pulled into other languages.",source:"@site/docs/libraries/c/getting_started.md",sourceDirName:"libraries/c",slug:"/libraries/c/getting_started",permalink:"/docs/libraries/c/getting_started",editUrl:"https://github.com/iotaledger/streams/tree/dev/documentation/docs/libraries/c/getting_started.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Examples",permalink:"/docs/libraries/c/examples"},next:{title:"Iota Streams C Bindings API Reference",permalink:"/docs/libraries/c/api_reference"}},u=[{value:"Starting a Channel",id:"starting-a-channel",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"The C bindings allow for you to build a Streams API which can be pulled into other languages.\nThe streams instance underlying the bindings is built with the ",(0,a.kt)("inlineCode",{parentName:"p"},"sync-client")," flag to\nensure a compatible client interface using the ",(0,a.kt)("inlineCode",{parentName:"p"},"iota.rs iota-client")," crate. "),(0,a.kt)("p",null,"Before building anything you'll need to make sure you have ",(0,a.kt)("inlineCode",{parentName:"p"},"cmake")," installed on your\nmachine."),(0,a.kt)("p",null,"To build the library, first make sure you're in the c directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd bindings/c\n")),(0,a.kt)("p",null,"Update the flags in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," and run ",(0,a.kt)("inlineCode",{parentName:"p"},"cmake .")," to\nprepare the installation files. "),(0,a.kt)("h4",{id:"options-for-cmakelliststxt"},"Options for CMakeLlists.txt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NO_STD"),": Enable no_std build, without iota_client (when ON, ",(0,a.kt)("inlineCode",{parentName:"li"},"SYNC_CLIENT")," isnt supported)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SYNC_CLIENT"),": Enable sync transport via iota_client, otherwise it's going to be Bucket which can only be used for tests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"STATIC"),": Build static library when ON, otherwise dynamic library"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RELEASE"),": Build in release or debug mode (when ON, builds release, when OFF, build debug)")),(0,a.kt)("p",null,"To build the library run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,a.kt)("p",null,"This generates a binary library to be included into a project. This can be either: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iota_streams_c_static")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iota_streams_c.so")," (Unix)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iota_streams_c.dll")," (Windows)")),(0,a.kt)("p",null,"An example of the header file can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"include/channels.h"),"."),(0,a.kt)("h3",{id:"starting-a-channel"},"Starting a Channel"),(0,a.kt)("p",null,"Once the package has been built, you can pull it into a script file like so: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "iota_streams/channels.h"\n#include <stdio.h>\n\nint main()\n{\n uint8_t multi_branching = 0;\n char seed[] = "Some unique seed";\n char const encoding[] = "utf-8";\n const size_t size = 1024;\n char const *url = "https://chrysalis-nodes.iota.org";\n \n transport_t *tsp = tsp_client_new_from_url(url);\n // Author constructor requires: (seed, encoding, payload size, multi branching, transport client)\n author_t *auth = auth_new(seed, encoding, size, multi_branching, tsp);\n address_t const *ann_link = auth_send_announce(auth);\n printf("Announcement message sent");\n \n char const *ann_address_inst_str = get_address_inst_str(ann_link);\n char const *ann_address_id_str = get_address_id_str(ann_link);\n // Link used by subscribers to attach to instance\n printf("Link: %s:%s\\n", ann_address_inst_str, ann_address_id_str);\n \n // Clean up\n drop_str(ann_address_inst_str);\n drop_str(ann_address_id_str);\n drop_address(ann_link);\n auth_drop(auth);\n tsp_drop(tsp);\n}\n')))}p.isMDXComponent=!0}}]);