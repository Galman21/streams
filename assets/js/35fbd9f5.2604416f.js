"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[954],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9515:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={},s="Getting Started",c={unversionedId:"libraries/wasm/getting_started",id:"libraries/wasm/getting_started",isDocsHomePage:!1,title:"Getting Started",description:"The WASM bindings allow for you to build a Streams API for web applications and nodejs.",source:"@site/docs/libraries/wasm/getting_started.md",sourceDirName:"libraries/wasm",slug:"/libraries/wasm/getting_started",permalink:"/docs/libraries/wasm/getting_started",editUrl:"https://github.com/iotaledger/streams/tree/dev/documentation/docs/libraries/wasm/getting_started.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Examples",permalink:"/docs/libraries/wasm/examples"},next:{title:"API Reference",permalink:"/docs/libraries/wasm/api_reference"}},u=[{value:"Starting a Channel",id:"starting-a-channel",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The WASM bindings allow for you to build a Streams API for web applications and nodejs.\nThe streams instance underlying the bindings is built with the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm-client")," flag to\nensure a compatible client interface using the ",(0,i.kt)("inlineCode",{parentName:"p"},"iota.rs iota-client")," crate. "),(0,i.kt)("p",null,"Before building anything you'll need to make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," installed on your\nmachine."),(0,i.kt)("p",null,"To build the library, first make sure you're in the wasm directory:\n",(0,i.kt)("inlineCode",{parentName:"p"},"cd bindings/wasm")," and run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," to sync up your dependencies. "),(0,i.kt)("p",null,"For building the nodejs compatible api, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:node  <- Builds to node/iota_streams_wasm\n")),(0,i.kt)("p",null,"And for building the web compatible api, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:web  <- Builds to web/iota_streams_wasm\n")),(0,i.kt)("h3",{id:"starting-a-channel"},"Starting a Channel"),(0,i.kt)("p",null,"Once the package has been built, you can pull it into a script file like so: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const streams = require("./node/iota_streams_wasm");\n\nlet node = "https://chrysalis-nodes.iota.org/";\n// Options include: (node-url, depth, local pow, # of threads)\nlet options = new streams.SendOptions(node, 3, true, 1);\n\n// Author generated with: (Seed, Options, Multi-branching flag)\nlet auth = new streams.Author("Unique Seed Here", options, false);\n\n// Response formatting: { link, sequence link, msg }\nlet response = await auth.clone().send_announce();\nlet ann_link = response.get_link();\nconsole.log("Channel Announcement at: ", ann_link.to_string());\n')))}d.isMDXComponent=!0}}]);