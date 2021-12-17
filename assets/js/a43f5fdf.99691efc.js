"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8350],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,y=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_label:"Writing Data",sidebar_position:1.4},l="How to write data to the key-value store of an ERC725Account",s={unversionedId:"tools/erc725js/writing-data",id:"tools/erc725js/writing-data",isDocsHomePage:!1,title:"How to write data to the key-value store of an ERC725Account",description:"This package is not capable of writing or relaying data to the blockchain. However it\u2019s utility methods can be used to prepare data for writing to the blockchain. This will provide information that may provide guidance for doing so.",source:"@site/docs/tools/erc725js/writing-data.md",sourceDirName:"tools/erc725js",slug:"/tools/erc725js/writing-data",permalink:"/tools/erc725js/writing-data",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/erc725js/writing-data.md",tags:[],version:"current",sidebarPosition:1.4,frontMatter:{sidebar_label:"Writing Data",sidebar_position:1.4},sidebar:"toolsSidebar",previous:{title:"Providers",permalink:"/tools/erc725js/providers"},next:{title:"Getting Started",permalink:"/tools/lsp-factoryjs/introduction/getting-started"}},d=[{value:"Example",id:"example",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-write-data-to-the-key-value-store-of-an-erc725account"},"How to write data to the key-value store of an ERC725Account"),(0,o.kt)("p",null,"This package is not capable of writing or relaying data to the blockchain. However it\u2019s utility methods can be used to prepare data for writing to the blockchain. This will provide information that may provide guidance for doing so."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Encode data using ",(0,o.kt)("inlineCode",{parentName:"li"},"encodeData")),(0,o.kt)("li",{parentName:"ol"},"Flatten encoded data using ",(0,o.kt)("inlineCode",{parentName:"li"},"flattenEncodedData")),(0,o.kt)("li",{parentName:"ol"},"Get a reference to the desired contract, you will need the ABI (jsonInterface)"),(0,o.kt)("li",{parentName:"ol"},"Iterate on flattenedData and call ",(0,o.kt)("inlineCode",{parentName:"li"},"setData"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Instantiation omitted for brevity, click here to show it"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Instantiation"',title:'"Instantiation"'},"import Web3 from 'web3';\nimport { ERC725 } from '@erc725/erc725.js';\n\nexport const schema = [\n  {\n    name: 'SupportedStandards:LSP3UniversalProfile',\n    key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6',\n    keyType: 'Mapping',\n    valueContent: '0xabe425d6',\n    valueType: 'bytes',\n  },\n  {\n    name: 'LSP3Profile',\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',\n    keyType: 'Singleton',\n    valueContent: 'JSONURL',\n    valueType: 'bytes',\n  },\n  {\n    name: 'LSP1UniversalReceiverDelegate',\n    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',\n    keyType: 'Singleton',\n    valueContent: 'Address',\n    valueType: 'address',\n  },\n  {\n    name: 'LSP3IssuedAssets[]',\n    key: '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',\n    keyType: 'Array',\n    valueContent: 'Address',\n    valueType: 'address',\n  },\n];\n\nconst address = '0x0c03fba782b07bcf810deb3b7f0595024a444f4e';\nconst provider = new Web3.providers.HttpProvider(\n  'https://rpc.l14.lukso.network',\n);\nconst config = {\n  ipfsGateway: 'https://ipfs.lukso.network/ipfs/',\n};\n\nconst myERC725 = new ERC725(schema, address, provider, config);\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 1. Encode data using `encodeData`\nconst encodedData = myERC725.encodeData({\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    hash: '0x820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361',\n    url: 'ifps://QmYr1VJLwerg6pEoscdhVGugo39pa6rycEZLjtRPDfW84UAx',\n  },\n  'LSP3IssuedAssets[]': [\n    '0xD94353D9B005B3c0A9Da169b768a31C57844e490',\n    '0xDaea594E385Fc724449E3118B2Db7E86dFBa1826',\n  ],\n  LSP1UniversalReceiverDelegate: '0x1183790f29BE3cDfD0A102862fEA1a4a30b3AdAb',\n});\n\n// 2. Flatten encoded data using `flattenEncodedData`\nconst dataToSaveOnChain = flattenEncodedData(encodedDataManyKeys);\n\n// 3. Get a reference to the desired contract\nconst erc725Contract = new web3.eth.Contract(\n  [\n    // NOTE: We are not loading the full contract ABI, only the function we need\n    {\n      inputs: [\n        {\n          internalType: 'bytes32',\n          name: '_key',\n          type: 'bytes32',\n        },\n        {\n          internalType: 'bytes',\n          name: '_value',\n          type: 'bytes',\n        },\n      ],\n      name: 'setData',\n      outputs: [],\n      stateMutability: 'nonpayable',\n      type: 'function',\n    },\n  ],\n  ERC725_ADDRESS, // replace this with the desired value\n);\n\n// 4. Iterate on flattenedData and call `setData`\nawait Promise.all(\n  dataToSaveOnChain.map(async ({ key, value }) => {\n    return erc725Contract.methods.setData(key, value).send();\n  }),\n);\n")))}p.isMDXComponent=!0}}]);