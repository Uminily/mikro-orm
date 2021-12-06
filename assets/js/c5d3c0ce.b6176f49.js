"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19397],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,h=d["".concat(o,".").concat(k)]||d[k]||s[k]||p;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<p;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82659:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=a(83117),n=a(80102),p=(a(67294),a(3905)),l=["components"],i={id:"core.filecacheadapter",title:"Class: FileCacheAdapter",sidebar_label:"FileCacheAdapter",custom_edit_url:null,hide_title:!0},o="Class: FileCacheAdapter",c={unversionedId:"api/classes/core.filecacheadapter",id:"version-4.5/api/classes/core.filecacheadapter",isDocsHomePage:!1,title:"Class: FileCacheAdapter",description:"core.FileCacheAdapter",source:"@site/versioned_docs/version-4.5/api/classes/core.filecacheadapter.md",sourceDirName:"api/classes",slug:"/api/classes/core.filecacheadapter",permalink:"/docs/api/classes/core.filecacheadapter",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1638816975,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"core.filecacheadapter",title:"Class: FileCacheAdapter",sidebar_label:"FileCacheAdapter",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"ExceptionConverter",permalink:"/docs/api/classes/core.exceptionconverter"},next:{title:"ForeignKeyConstraintViolationException",permalink:"/docs/api/classes/core.foreignkeyconstraintviolationexception"}},m=[{value:"Implements",id:"implements",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"VERSION",id:"version",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[],level:3},{value:"get",id:"get",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"getHash",id:"gethash",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"path",id:"path",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"set",id:"set",children:[{value:"Parameters:",id:"parameters-4",children:[],level:4}],level:3}],level:2}],s={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"class-filecacheadapter"},"Class: FileCacheAdapter"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".FileCacheAdapter"),(0,p.kt)("h2",{id:"implements"},"Implements"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core.cacheadapter"},(0,p.kt)("em",{parentName:"a"},"CacheAdapter")))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new FileCacheAdapter"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"options"),": { ",(0,p.kt)("inlineCode",{parentName:"p"},"cacheDir"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"  }, ",(0,p.kt)("inlineCode",{parentName:"p"},"baseDir"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pretty?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.filecacheadapter"},(0,p.kt)("em",{parentName:"a"},"FileCacheAdapter"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"options")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"object")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"options.cacheDir")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"baseDir")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"pretty")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.filecacheadapter"},(0,p.kt)("em",{parentName:"a"},"FileCacheAdapter"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L9"},"packages/core/src/cache/FileCacheAdapter.ts:9")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"version"},"VERSION"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"VERSION"),": ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L9"},"packages/core/src/cache/FileCacheAdapter.ts:9")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"clear"},"clear"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Clears all items stored in the cache."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L51"},"packages/core/src/cache/FileCacheAdapter.ts:51")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"get"},"get"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"get"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,p.kt)("p",null,"Gets the items under ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," key from the cache."),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L18"},"packages/core/src/cache/FileCacheAdapter.ts:18")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"gethash"},"getHash"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"getHash"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"origin"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<",(0,p.kt)("em",{parentName:"p"},"null")," ","|"," string",">"),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"origin")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<",(0,p.kt)("em",{parentName:"p"},"null")," ","|"," string",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L62"},"packages/core/src/cache/FileCacheAdapter.ts:62")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"path"},"path"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private"),(0,p.kt)("strong",{parentName:"p"},"path"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L57"},"packages/core/src/cache/FileCacheAdapter.ts:57")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"set"},"set"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"set"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("em",{parentName:"p"},"any"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"origin"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Sets the item to the cache. ",(0,p.kt)("inlineCode",{parentName:"p"},"origin")," is used for cache invalidation and should reflect the change in data."),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"data")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"origin")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/FileCacheAdapter.ts#L38"},"packages/core/src/cache/FileCacheAdapter.ts:38")))}d.isMDXComponent=!0}}]);