"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2464],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},202:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Overview",sidebar_position:1},l="Overview",c={unversionedId:"standards/smart-contracts/overview",id:"standards/smart-contracts/overview",title:"Overview",description:"Implementation of LUKSO Standard Proposal where most of the contracts are related directly to UniversalProfile and NFT 2.0 subject. These 2 sections falls into sub-category where:",source:"@site/docs/standards/smart-contracts/01-overview.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/overview",permalink:"/standards/smart-contracts/overview",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"standardsSidebar",previous:{title:"LSP8 - Identifiable Digital Asset",permalink:"/standards/nft-2.0/LSP8-Identifiable-Digital-Asset"},next:{title:"LSP0 - ERC725Account",permalink:"/standards/smart-contracts/lsp0-erc725-account"}},p=[{value:"UniversalProfile",id:"universalprofile",children:[],level:4},{value:"NFT 2.0",id:"nft-20",children:[],level:4},{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Learn More",id:"learn-more",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Implementation of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/standards/introduction"},"LUKSO Standard Proposal"))," where most of the contracts are related directly to ",(0,o.kt)("strong",{parentName:"p"},"UniversalProfile")," and ",(0,o.kt)("strong",{parentName:"p"},"NFT 2.0")," subject. These 2 sections falls into sub-category where:"),(0,o.kt)("h4",{id:"universalprofile"},"UniversalProfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"./lsp0-erc725-account"},"LSP0-ERC725Account"))," contract implementation which forms the ",(0,o.kt)("strong",{parentName:"li"},"UniversalProfiles")," when ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md"},"LSP3-UniversalProfile-Metadata"))," is combined with."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate"))," contract implementation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp6-key-manager"},"LSP6-KeyManager"))," contract implementation.")),(0,o.kt)("h4",{id:"nft-20"},"NFT 2.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp7-digital-asset"},"LSP7-DigitalAsset"))," contract implementation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp8-identifiable-digital-asset"},"LSP8-IdentifiableDigitalAsset"))," contract implementation.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lukso/universalprofile-smart-contracts\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"Solidity:")),(0,o.kt)("p",null,"Once installed, you can use the contracts by importing them:"),(0,o.kt)("p",null,"Create your own ",(0,o.kt)("strong",{parentName:"p"},"UniversalProfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// MyUP.sol\n// SPDX-License-Identifier: MIT\n\nimport "@lukso/universalprofile-smart-contracts/contracts/UniversalProfile.sol";\n\npragma solidity ^0.8.0;\n\ncontract MyUP is UniversalProfile {\n\n    constructor() UniversalProfile(msg.sender) {\n        // ..\n    }\n}\n')),(0,o.kt)("p",null,"Create your own ",(0,o.kt)("strong",{parentName:"p"},"Fungible token"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// MyToken.sol\n// SPDX-License-Identifier: MIT\n\nimport "@lukso/universalprofile-smart-contracts/contracts/LSP7DigitalAsset/LSP7DigitalAsset.sol";\n\npragma solidity ^0.8.0;\n\ncontract MyToken is LSP7DigitalAsset {\n    // 4th argument (false) marks that this contract serves as a Fungible Token and not as a NFT.\n    constructor() LSP7("MyToken","MTKN",msg.sender,false) {\n        // ..\n    }\n\n    function mint() public {\n        _mint(...);\n    }\n}\n')),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts"},"Current Implementation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md"},"LSP0-ERC725Account Standard"))," forms the main piece that ",(0,o.kt)("strong",{parentName:"li"},"UniversalProfiles")," are build on.")))}m.isMDXComponent=!0}}]);