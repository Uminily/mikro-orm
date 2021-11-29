"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[598],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2372:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],p={id:"core.countoptions",title:"Interface: CountOptions<T>",sidebar_label:"CountOptions",custom_edit_url:null,hide_title:!0},c="Interface: CountOptions<T>",s={unversionedId:"api/interfaces/core.countoptions",id:"version-4.5/api/interfaces/core.countoptions",isDocsHomePage:!1,title:"Interface: CountOptions<T>",description:"core.CountOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/core.countoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.countoptions",permalink:"/docs/api/interfaces/core.countoptions",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Daniel",lastUpdatedAt:1638177487,formattedLastUpdatedAt:"11/29/2021",frontMatter:{id:"core.countoptions",title:"Interface: CountOptions<T>",sidebar_label:"CountOptions",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"ConnectionOptions",permalink:"/docs/api/interfaces/core.connectionoptions"},next:{title:"DeleteOptions",permalink:"/docs/api/interfaces/core.deleteoptions"}},l=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[],level:3},{value:"filters",id:"filters",children:[],level:3},{value:"groupBy",id:"groupby",children:[],level:3},{value:"having",id:"having",children:[],level:3},{value:"schema",id:"schema",children:[],level:3}],level:2}],m={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-countoptionst"},"Interface: CountOptions<T",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".CountOptions"),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"cache"},"cache"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"cache"),": ",(0,o.kt)("em",{parentName:"p"},"number")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"boolean")," ","|"," ","[",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("em",{parentName:"p"},"number"),"]"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L114"},"packages/core/src/drivers/IDatabaseDriver.ts:114")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"filters"},"filters"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"filters"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"string"),"[] ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,o.kt)("em",{parentName:"a"},"Dictionary")),"<boolean ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,o.kt)("em",{parentName:"a"},"Dictionary")),"<any",">",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L110"},"packages/core/src/drivers/IDatabaseDriver.ts:110")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"groupby"},"groupBy"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"groupBy"),": ",(0,o.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L112"},"packages/core/src/drivers/IDatabaseDriver.ts:112")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"having"},"having"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"having"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#filterquery"},(0,o.kt)("em",{parentName:"a"},"FilterQuery")),"<T",">"," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#filterquery"},(0,o.kt)("em",{parentName:"a"},"FilterQuery")),"<T",">"," & ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,o.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L113"},"packages/core/src/drivers/IDatabaseDriver.ts:113")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"schema"},"schema"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"schema"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/drivers/IDatabaseDriver.ts#L111"},"packages/core/src/drivers/IDatabaseDriver.ts:111")))}u.isMDXComponent=!0}}]);