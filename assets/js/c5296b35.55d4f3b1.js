"use strict";(self.webpackChunkitvdb=self.webpackChunkitvdb||[]).push([[980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6518:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=r(7462),a=r(7294),o=r(3905);const c=[{title:"Website",features:["E-mails","Websites","Webshops","Nieuwsbrieven","SEO optimalisatie","24/7 support"]},{title:"Software",features:["Development","Testing","SaaS","Analyses","24/7 support"]},{title:"Consultancy",features:["Projecten","Advies","(meer) Jaarcontracten","24/7 support"]},{title:"IT Infrastructuur",features:["Computers","Monitors","randapparatuur","Netwerk","Antivirus","Remote access","24/7 support"]}];function i(e){return a.createElement("div",{className:"card margin-top--md",style:{width:"inherit"}},a.createElement("div",{className:"card__header"},a.createElement("h2",null,e.title)),a.createElement("div",{className:"card__body"},a.createElement("ul",null,e.features.map((e=>a.createElement("li",null,e))))),a.createElement("div",{className:"card__footer"},a.createElement("a",{className:"button button--secondary button--block",href:"/contact"},"Neem contact op")))}function l(){return a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},c.map(((e,t)=>a.createElement("div",{className:"col col--6",style:{display:"flex",justifySelf:"stretch"}},a.createElement(i,(0,n.Z)({key:t},e)))))))}const s={},u="Diensten",p={type:"mdx",permalink:"/diensten",source:"@site/src/pages/diensten.mdx",title:"Diensten",description:"---",frontMatter:{}},m=[],f={toc:m};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"diensten"},"Diensten"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Ja, een IT bedrijf met IT Diensten!\nWij voorzien jou van het hoog nodige of ontzorgen je helemaal!"),(0,o.kt)(l,{mdxType:"ServiceFeatures"}))}d.isMDXComponent=!0}}]);