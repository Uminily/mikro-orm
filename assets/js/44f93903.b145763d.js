"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31632],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=m(a),c=n,u=k["".concat(o,".").concat(c)]||k[c]||d[c]||p;return a?r.createElement(u,l(l({ref:t},s),{},{components:a})):r.createElement(u,l({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<p;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},98753:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var r=a(83117),n=a(80102),p=(a(67294),a(3905)),l=["components"],i={id:"core.identitymap",title:"Class: IdentityMap",sidebar_label:"IdentityMap",custom_edit_url:null,hide_title:!0},o="Class: IdentityMap",m={unversionedId:"api/classes/core.identitymap",id:"version-4.5/api/classes/core.identitymap",isDocsHomePage:!1,title:"Class: IdentityMap",description:"core.IdentityMap",source:"@site/versioned_docs/version-4.5/api/classes/core.identitymap.md",sourceDirName:"api/classes",slug:"/api/classes/core.identitymap",permalink:"/docs/api/classes/core.identitymap",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1638816975,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"core.identitymap",title:"Class: IdentityMap",sidebar_label:"IdentityMap",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Hydrator",permalink:"/docs/api/classes/core.hydrator"},next:{title:"InvalidFieldNameException",permalink:"/docs/api/classes/core.invalidfieldnameexception"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"registry",id:"registry",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"Symbol.iterator",id:"symboliterator",children:[],level:3},{value:"clear",id:"clear",children:[],level:3},{value:"delete",id:"delete",children:[{value:"Type parameters:",id:"type-parameters",children:[],level:4},{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"get",id:"get",children:[{value:"Type parameters:",id:"type-parameters-1",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"getByHash",id:"getbyhash",children:[{value:"Type parameters:",id:"type-parameters-2",children:[],level:4},{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"getStore",id:"getstore",children:[{value:"Type parameters:",id:"type-parameters-3",children:[],level:4},{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"keys",id:"keys",children:[],level:3},{value:"store",id:"store",children:[{value:"Type parameters:",id:"type-parameters-4",children:[],level:4},{value:"Parameters:",id:"parameters-4",children:[],level:4}],level:3},{value:"values",id:"values",children:[],level:3}],level:2}],d={toc:s};function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"class-identitymap"},"Class: IdentityMap"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".IdentityMap"),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new IdentityMap"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.identitymap"},(0,p.kt)("em",{parentName:"a"},"IdentityMap"))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.identitymap"},(0,p.kt)("em",{parentName:"a"},"IdentityMap"))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"registry"},"registry"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"registry"),": ",(0,p.kt)("em",{parentName:"p"},"Map"),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#constructor"},(0,p.kt)("em",{parentName:"a"},"Constructor")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">",", Map<string, ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L5"},"packages/core/src/unit-of-work/IdentityMap.ts:5")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"symboliterator"},"[Symbol.iterator]"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"[Symbol.iterator]"),"(): ",(0,p.kt)("em",{parentName:"p"},"IterableIterator"),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"IterableIterator"),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L47"},"packages/core/src/unit-of-work/IdentityMap.ts:47")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"clear"},"clear"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L33"},"packages/core/src/unit-of-work/IdentityMap.ts:33")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"delete"},"delete"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"delete"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"item"),": T): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"item")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L11"},"packages/core/src/unit-of-work/IdentityMap.ts:11")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"get"},"get"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"get"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"hash"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," T"),(0,p.kt)("p",null,"For back compatibility only."),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T"))))),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"hash")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," T"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L68"},"packages/core/src/unit-of-work/IdentityMap.ts:68")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getbyhash"},"getByHash"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getByHash"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"hash"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," T"),(0,p.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T"))))),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"meta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"hash")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," T"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L15"},"packages/core/src/unit-of-work/IdentityMap.ts:15")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getstore"},"getStore"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getStore"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"Map"),"<string, T",">"),(0,p.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"meta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Map"),"<string, T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L20"},"packages/core/src/unit-of-work/IdentityMap.ts:20")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"keys"},"keys"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"keys"),"(): ",(0,p.kt)("em",{parentName:"p"},"string"),"[]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"string"),"[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L55"},"packages/core/src/unit-of-work/IdentityMap.ts:55")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"store"},"store"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"store"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"item"),": T): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"type-parameters-4"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"item")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L7"},"packages/core/src/unit-of-work/IdentityMap.ts:7")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"values"},"values"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"values"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">","[]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">","[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/IdentityMap.ts#L37"},"packages/core/src/unit-of-work/IdentityMap.ts:37")))}k.isMDXComponent=!0}}]);