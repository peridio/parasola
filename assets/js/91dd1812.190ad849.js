"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[743],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3984:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],c={title:"Just in Time Registration"},s=void 0,l={unversionedId:"reference/just-in-time-registration",id:"reference/just-in-time-registration",title:"Just in Time Registration",description:"Ref | Just in Time Registration",source:"@site/cremini/docs/reference/just-in-time-registration.md",sourceDirName:"reference",slug:"/reference/just-in-time-registration",permalink:"/cremini/reference/just-in-time-registration",draft:!1,tags:[],version:"current",frontMatter:{title:"Just in Time Registration"},sidebar:"reference",previous:{title:"Firmware",permalink:"/cremini/reference/firmware"},next:{title:"Keys",permalink:"/cremini/reference/keys"}},u={},f=[{value:"Registration Flow",id:"registration-flow",level:2}],p={toc:f};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Ref | Just in Time Registration")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"ca-certificates#just-in-time-registration"},"Configuring just in time registration for a CA Certificate")," enables a ",(0,a.kt)("a",{parentName:"p",href:"devices"},"device")," whose ",(0,a.kt)("a",{parentName:"p",href:"device-certificates"},"certificate")," is signed by that CA certificate to reactively register itself at the moment of its first connection to the ",(0,a.kt)("a",{parentName:"p",href:"../device-api"},"Peridio Device API"),". This alleviates the burden of having to take any per device onboarding action."),(0,a.kt)("h2",{id:"registration-flow"},"Registration Flow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An unregistered device attempts to connect to Peridio Device API for the first time ever. Typically via the ",(0,a.kt)("a",{parentName:"li",href:"../device-api#tag/Devices/paths/~1device~1me/get"},"get device me")," endpoint, but any endpoint will do."),(0,a.kt)("li",{parentName:"ol"},"Peridio validates that the device's certificate is signed by a present and valid CA Certificate."),(0,a.kt)("li",{parentName:"ol"},"Peridio registers the device creating a record of the device as well as its certificate and automatically assigning the attributes configured against the relevant CA certificate.")))}m.isMDXComponent=!0}}]);