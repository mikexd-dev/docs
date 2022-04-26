"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4284],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),s=n(3725),l=n(6010),i="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.UB)(),h=g.tabGroupChoices,P=g.setTabGroupChoices,w=(0,r.useState)(k),T=w[0],O=w[1],j=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=h[m];null!=E&&E!==T&&b.some((function(e){return e.value===E}))&&O(E)}var N=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==T&&(x(t),O(a),null!=m&&P(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=n(9877),l=n(8215),i=["components"],u={sidebar_label:"Create an LSP7 Digital Asset (Token)",sidebar_position:1},c="Create an LSP7 Digital Asset (Token)",d={unversionedId:"guides/assets/create-lsp7-digital-asset",id:"guides/assets/create-lsp7-digital-asset",title:"Create an LSP7 Digital Asset (Token)",description:"This guide will teach you how to create our token (LSP7 Digital Asset) and transfer it between Universal Profiles (UP).",source:"@site/docs/guides/assets/create-lsp7-digital-asset.md",sourceDirName:"guides/assets",slug:"/guides/assets/create-lsp7-digital-asset",permalink:"/guides/assets/create-lsp7-digital-asset",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/assets/create-lsp7-digital-asset.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Create an LSP7 Digital Asset (Token)",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Read Asset Data",permalink:"/guides/fetch-data/read-asset-data"}},p={},m=[{value:"Deploy an LSP7 Digital Asset contract",id:"deploy-an-lsp7-digital-asset-contract",level:2},{value:"Mint tokens for your Universal Profile",id:"mint-tokens-for-your-universal-profile",level:2},{value:"Transfer tokens to an other Universal Profile",id:"transfer-tokens-to-an-other-universal-profile",level:2}],f={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-an-lsp7-digital-asset-token"},"Create an LSP7 Digital Asset (Token)"),(0,o.kt)("p",null,"This guide will teach you how to create our token (",(0,o.kt)("a",{parentName:"p",href:"../../standards/nft-2.0/lsp7-digital-asset"},"LSP7 Digital Asset"),") and transfer it between Universal Profiles (UP)."),(0,o.kt)("h2",{id:"deploy-an-lsp7-digital-asset-contract"},"Deploy an LSP7 Digital Asset contract"),(0,o.kt)("p",null,"We will use a specific implementation of LSP7, called ",(0,o.kt)("inlineCode",{parentName:"p"},"LSP7Mintable"),". It allows the contract deployer to mint new tokens."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\n\nconst myEOA = '<address-of-up-owner>';\nconst tokenParams = [\n  'My LSP7 Token', // token name\n  'LSP7', // token symbol\n  myEOA, // new owner\n  false, // isNFT (make your token divisible or not)\n];\n\n// create an instance\nconst myToken = new web3.eth.Contract(LSP7Mintable.abi, {\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n\n// deploy the token contract\nawait myToken\n  .deploy({ data: LSP7Mintable.bytecode, arguments: tokenParams })\n  .send({\n    from: myEOA,\n  });\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/lsp-smart-contracts/artifacts/LSP7Mintable.json';\n\nconst myEOA = '<address-of-up-owner>';\nconst tokenParams = [\n  'My LSP7 Token', // token name\n  'LSP7', // token symbol\n  myEOA, // new owner\n  false, // isNFT (make your token divisible or not)\n];\n\n// deploy + create an instance of the token contract\nconst lsp7Factory = await ethers.getContractFactory('LSP7Mintable');\nconst myToken = await lsp7Factory.deploy(tokenParams);\n")))),(0,o.kt)("h2",{id:"mint-tokens-for-your-universal-profile"},"Mint tokens for your Universal Profile"),(0,o.kt)("p",null,"The code snippet below shows how to mint 100 tokens with your Universal Profile as a beneficiary."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await myToken.methods.mint('<up-address>', 100, false, '0x').send({\n  from: myEOA,\n});\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await myToken.connect(myEOA).mint('<up-address>', 100, false, '0x');\n")))),(0,o.kt)("h2",{id:"transfer-tokens-to-an-other-universal-profile"},"Transfer tokens to an other Universal Profile"),(0,o.kt)("p",null,"The following code snippet shows how to transfer 15 tokens from your UP to another UP called ",(0,o.kt)("inlineCode",{parentName:"p"},"bobUP"),"."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bobUP = '<bob-up-address>';\nconst amount = 15;\n\n// 1. generate the payload to transfer tokens\nconst tokenPayload = myToken.methods\n  .transfer('<up-address>', bobUP, amount, false, '0x')\n  .encodeABI();\n\n// 2. generate payload for Universal Profile to execute the token transfer on the token contract\nconst upPayload = myUniversalProfile.methods\n  .execute(0, myToken._address, 0, tokenPayload)\n  .encodeABI();\n\n// 3. execute via the KeyManager\nawait myKeyManager.methods.execute(upPayload).send({\n  from: myEOA,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bobUP = '<bob-up-address>';\nconst amount = 15;\n\n// 1. generate the payload to transfer tokens\nconst tokenPayload = myToken.interface.encodeFunctionData('transfer', [\n  '<up-address>',\n  bobUP,\n  amount,\n  false,\n  '0x',\n]);\n\n// 2. generate payload for Universal Profile to execute the token transfer on the token contract\nconst upPayload = myUniversalProfile.interface.encodeFunctionData('execute', [\n  0,\n  myToken._address,\n  0,\n  tokenPayload,\n]);\n\n// 3. execute via the KeyManager\nawait myKeyManager.connect(myEOA).execute(upPayload, ({\n  from: myEOA.address,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n")))))}y.isMDXComponent=!0}}]);