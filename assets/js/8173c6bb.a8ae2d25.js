"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[680],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return d}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?t.createElement(m,a(a({ref:r},u),{},{components:n})):t.createElement(m,a({ref:r},u))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57109:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var t=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={title:"Organizations"},s=void 0,l={unversionedId:"reference/organizations",id:"reference/organizations",title:"Organizations",description:"Ref | Organizations",source:"@site/cremini/docs/reference/organizations.md",sourceDirName:"reference",slug:"/reference/organizations",permalink:"/cremini/reference/organizations",draft:!1,tags:[],version:"current",frontMatter:{title:"Organizations"},sidebar:"reference",previous:{title:"Keys",permalink:"/cremini/reference/keys"},next:{title:"Products",permalink:"/cremini/reference/products"}},u={},f=[{value:"User Access",id:"user-access",level:2}],p={toc:f};function d(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Ref | Organizations")),(0,o.kt)("p",null,"An Organization is a container for your resources. You create and manage your resources in an Organization, and the Organization provides administrative capabilities for access and billing."),(0,o.kt)("p",null,"Using multiple Organizations is a best practice for scaling your environment, as it provides a natural billing boundary for costs, isolates resources for security, gives flexibility or individuals and teams, in addition to being adaptable for new business processes."),(0,o.kt)("h2",{id:"user-access"},"User Access"),(0,o.kt)("p",null,"Users within an organization with a role of ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," are able to invite other users to that organization. As part of this process the inviter will choose a role level for the invited which will dictate their access level to the organization in general."))}d.isMDXComponent=!0}}]);