"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[73],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),y=i,d=f["".concat(u,".").concat(y)]||f[y]||l[y]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return l},default:function(){return y}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={title:"API Keys"},u=void 0,p={unversionedId:"reference/api-keys",id:"reference/api-keys",title:"API Keys",description:"Ref | API Keys",source:"@site/docs/reference/api-keys.md",sourceDirName:"reference",slug:"/reference/api-keys",permalink:"/reference/api-keys",tags:[],version:"current",frontMatter:{title:"API Keys"},sidebar:"reference",previous:{title:"Accounts",permalink:"/reference/accounts"},next:{title:"Authentication Identities",permalink:"/reference/authentication-identities"}},s={},l=[],f={toc:l};function y(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Ref | API Keys")),(0,a.kt)("p",null,"API keys are used to authenticate requests with the ",(0,a.kt)("a",{parentName:"p",href:"/cli/authentication"},"CLI")," and ",(0,a.kt)("a",{parentName:"p",href:"/api/0#tag/Authentication"},"API"),". They are strings matching this regex ",(0,a.kt)("inlineCode",{parentName:"p"},"/[A-Za-z0-9+/]{92}/g"),"."),(0,a.kt)("p",null,"When an API key is created it is associated with a new authentication identity. The new authentication identity is given the same authorization role as the authenticated identity that created it."))}y.isMDXComponent=!0}}]);