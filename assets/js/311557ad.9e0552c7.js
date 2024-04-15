"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[42546],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>y});var o=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(r),y=a,g=s["".concat(c,".").concat(y)]||s[y]||u[y]||n;return r?o.createElement(g,i(i({ref:t},m),{},{components:r})):o.createElement(g,i({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},63037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(58168),a=(r(96540),r(15680));const n={id:"submit_code",title:"Submit Code",sidebar_position:2},i=void 0,l={unversionedId:"community/submit_code",id:"community/submit_code",title:"Submit Code",description:"\x3c!--",source:"@site/docs/community/submit-code.md",sourceDirName:"community",slug:"/community/submit_code",permalink:"/docs/community/submit_code",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/community/submit-code.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"submit_code",title:"Submit Code",sidebar_position:2},sidebar:"docs",previous:{title:"Documentation Notice",permalink:"/docs/community/document"},next:{title:"Code style and quality guide",permalink:"/docs/community/code_style_and_quality_guide"}},c={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,o.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"First from the remote repository ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat.git"},"https://github.com/apache/hertzbeat.git")," fork a copy of the code into your own repository")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The remote dev and merge branch is ",(0,a.yg)("inlineCode",{parentName:"p"},"master"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Clone your repository to your local"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"    git clone git@github.com:<Your Github ID>/hertzbeat.git\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add remote repository address, named upstream")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"  git remote add upstream git@github.com:apache/hertzbeat.git\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"View repository")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"  git remote -v\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"At this time, there will be two repositories: origin (your own repository) and upstream (remote repository)")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Get/Update remote repository code"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"git fetch upstream\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Synchronize remote repository code to local repository"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"git checkout origin/dev\ngit merge --no-ff upstream/dev\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u26a0\ufe0fNote that you must create a new branch to develop features ",(0,a.yg)("inlineCode",{parentName:"strong"},"git checkout -b feature-xxx"),". It is not recommended to use the master branch for direct development"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"After modifying the code locally, submit it to your own repository:\n",(0,a.yg)("strong",{parentName:"p"},"Note that the submission information does not contain special characters")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"git commit -m 'commit content'\ngit push\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Submit changes to the remote repository, you can see a green button "Compare & pull request" on your repository page, click it.')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Select the modified local branch and the branch you want to merge with the past, you need input the message carefully, describe doc is important as code, click "Create pull request".')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Then the community Committers will do CodeReview, and then he will discuss some details (design, implementation, performance, etc.) with you, afterward you can directly update the code in this branch according to the suggestions (no need to create a new PR). When this pr is approved, the commit will be merged into the master branch")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Finally, congratulations, you have become an official contributor to HertzBeat ! You will be added to the contributor wall, you can contact the community to obtain a contributor certificate."))),(0,a.yg)("p",null,"This doc refer from ",(0,a.yg)("a",{parentName:"p",href:"https://streampark.apache.org/"},"Apache StreamPark")))}u.isMDXComponent=!0}}]);