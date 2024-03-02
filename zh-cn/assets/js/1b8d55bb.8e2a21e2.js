"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[89872],{15680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),u=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=u(r),g=n,s=c["".concat(m,".").concat(g)]||c[g]||h[g]||o;return r?a.createElement(s,l(l({ref:t},i),{},{components:r})):a.createElement(s,l({ref:t},i))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},71860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=r(58168),n=(r(96540),r(15680));const o={title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.1 \u53d1\u5e03\uff01",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},l=void 0,p={permalink:"/zh-cn/blog/2022/07/10/hertzbeat-v1.1.1",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2022-07-10-hertzbeat-v1.1.1.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2022-07-10-hertzbeat-v1.1.1.md",title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.1 \u53d1\u5e03\uff01",description:"HertzBeat \u8d6b\u5179\u8df3\u52a8 \u662f\u7531 Dromara \u5b75\u5316\uff0cTanCloud \u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u5168\u7ad9\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5 (\u90ae\u7bb1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002",date:"2022-07-10T00:00:00.000Z",formattedDate:"2022\u5e747\u670810\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"}],readingTime:4.29,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.1 \u53d1\u5e03\uff01",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.3 \u53d1\u5e03\uff01",permalink:"/zh-cn/blog/2022/09/04/hertzbeat-v1.1.3"},nextItem:{title:"\u4e91\u76d1\u63a7\u7cfb\u7edf HertzBeat v1.1.0 \u53d1\u5e03\uff01\u4e00\u6761\u547d\u4ee4\u5373\u53ef\u5f00\u542f\u76d1\u63a7\u4e4b\u65c5\uff01",permalink:"/zh-cn/blog/2022/06/22/one-step-up"}},m={authorsImageUrls:[void 0]},u=[],i={toc:u};function h(e){let{components:t,...r}=e;return(0,n.yg)("wrapper",(0,a.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat \u8d6b\u5179\u8df3\u52a8")," \u662f\u7531 ",(0,n.yg)("a",{parentName:"p",href:"https://dromara.org"},"Dromara")," \u5b75\u5316\uff0c",(0,n.yg)("a",{parentName:"p",href:"https://tancloud.cn"},"TanCloud")," \u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u5168\u7ad9\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u652f\u6301\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5 (\u90ae\u7bb1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba)\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002  "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u5b98\u7f51: ",(0,n.yg)("a",{parentName:"strong",href:"https://hertzbeat.com"},"hertzbeat.com")," | ",(0,n.yg)("a",{parentName:"strong",href:"https://tancloud.cn"},"tancloud.cn")),"  "),(0,n.yg)("p",null,"\u5927\u5bb6\u597d\uff0cHertzBeat v1.1.1 \u53d1\u5e03\u5566\uff01\u8fd9\u4e2a\u7248\u672c\u5e26\u6765\u4e86\u81ea\u5b9a\u4e49\u76d1\u63a7\u589e\u5f3a\uff0c\u91c7\u96c6\u6307\u6807\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u53d8\u91cf\u8d4b\u503c\u7ed9\u4e0b\u4e00\u4e2a\u91c7\u96c6\u3002\u4fee\u590d\u4e86\u82e5\u5e72bug\uff0c\u63d0\u5347\u6574\u4f53\u7a33\u5b9a\u6027\u3002"),(0,n.yg)("p",null,"\u53ea\u9700\u8981\u4e00\u6761docker\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f53\u9a8chertzbeat \uff1a\n",(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,n.yg)("p",null,"\u611f\u8c22hertzbeat\u8d21\u732e\u8005\u4eec\u7684\u8d21\u732e\uff01\ud83d\udc4d\ud83d\udc4d"),(0,n.yg)("p",null,"Feature\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/205"},"[script] feature \u5347\u7ea7docker\u7684\u57fa\u7840\u955c\u50cf\u4e3a openjdk:11.0.15-jre-slim #205")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/206"},"[monitor] \u652f\u6301\u524d\u7f6e\u91c7\u96c6\u6307\u6807\u6570\u636e\u4f5c\u4e3a\u53d8\u91cf\u8d4b\u503c\u7ed9\u4e0b\u4e00\u91c7\u96c6\u6d41\u7a0b #206"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/212"},"[collector] \u4f7f\u7528\u57fa\u672c\u7684http headers\u5934\u5b9e\u73b0basic auth\u66ff\u6362\u524d\u7f6e\u6a21\u5f0f #212")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/213"},"[manager,alerter] \u652f\u6301\u544a\u8b66\u901a\u77e5\u8bbe\u7f6e\u4e01\u4e01\u5fae\u4fe1\u98de\u4e66\u81ea\u5b9a\u4e49 webhook url  #213")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/217"},"[monitor] feature \u66f4\u65b0\u6570\u503c\u6307\u6807\u6570\u636e\u4e0d\u5e26\u672b\u5c3e\u4e3a0\u7684\u5c0f\u6570\u70b9 #217")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/218"},"[web-app]feature:toggle [enable and cancel] button #218")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/221"},'[manager] \u66f4\u65b0\u76d1\u63a7define yml\u6587\u4ef6\u524d\u7f00\u540d\u79f0 "app" or "param"\uff0c\u4fbf\u4e8e\u81ea\u5b9a\u4e49\u76d1\u63a7\u533a\u522b #221'))),(0,n.yg)("p",null,"Bugfix."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/198"},"[update] docker-compose \u6dfb\u52a0jpa\u81ea\u52a8\u6267\u884c\u811a\u672c,\u5220\u9664sql\u811a\u672c #198")," contribute by @DevilX5  ."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/199"},"\u4fee\u590d\u81ea\u5b9a\u4e49\u76d1\u63a7\u63cf\u8ff0\u6587\u6863 #199")," contribute by @DevilX5"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/201"},"[manager] bugfix oracle performance \u6307\u6807\u91c7\u96c6\u5f02\u5e38\u95ee\u9898 #201"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/203"},"[common] bugfix \u544a\u8b66\u72b6\u6001\u65e0\u6cd5\u9875\u9762\u624b\u52a8\u66f4\u65b0\u95ee\u9898 #203")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/204"},"[manager] bugfix windows\u76d1\u63a7\u7c7b\u578b\u540d\u79f0\u9519\u8bef\u95ee\u9898 #204")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/210"},"fix time zone todo issue #210")," contribute by @djzeng"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/211"},"[common] bugfix \u96ea\u82b1\u7b97\u6cd5\u751f\u6210ID\u5927\u5c0f\u8d85\u51fa 0x1FFFFFFFFFFFFFF \u5bfc\u81f4\u524d\u7aef\u4e0d\u8bc6\u522b\u95ee\u9898 #211")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/215"},"[manager] \u4fee\u6539\u76d1\u63a7\u9875\u9762\u53d6\u6d88\u76d1\u63a7\u529f\u80fd\u518d\u542f\u52a8\u76d1\u63a7\u5bfc\u81f4\u591a\u751f\u6210jobId\uff0c\u539f\u6709\u76d1\u63a7\u9879\u76ee\u5e76\u6ca1\u6709\u771f\u5b9e\u53d6\u6d88 #215")," contribute by @yangshihui"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/220"},"[warehouse] \u4fee\u590dtdengine\u5bf9\u7279\u6b8a\u5b57\u6bb5\u5efa\u8868\u5931\u8d25\u5bfc\u81f4\u6570\u636e\u65e0\u6cd5\u5165\u5e93\u95ee\u9898 #220"))),(0,n.yg)("p",null,"Online ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),"."),(0,n.yg)("p",null,"Have Fun!"),(0,n.yg)("hr",null),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat\u8d6b\u5179\u8df3\u52a8")," \u662f\u7531 ",(0,n.yg)("a",{parentName:"p",href:"https://dromara.org"},"Dromara")," \u5b75\u5316\uff0c",(0,n.yg)("a",{parentName:"p",href:"https://tancloud.cn"},"TanCloud"),"\u5f00\u6e90\u7684\u4e00\u4e2a\u652f\u6301\u7f51\u7ad9\uff0cAPI\uff0cPING\uff0c\u7aef\u53e3\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\u7b49\u76d1\u63a7\u7c7b\u578b\uff0c\u62e5\u6709\u6613\u7528\u53cb\u597d\u7684\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\u7684\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u9879\u76ee\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"SAAS\u4e91\u76d1\u63a7\u7248\u672c"),"\uff0c\u4e2d\u5c0f\u56e2\u961f\u548c\u4e2a\u4eba\u65e0\u9700\u518d\u4e3a\u4e86\u76d1\u63a7\u81ea\u5df1\u7684\u7f51\u7ad9\u8d44\u6e90\uff0c\u800c\u53bb\u90e8\u7f72\u4e00\u5957\u7e41\u7410\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"\u767b\u5f55\u5373\u53ef\u514d\u8d39\u5f00\u59cb"),"\u76d1\u63a7\u4e4b\u65c5\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat \u652f\u6301\u81ea\u5b9a\u4e49\u76d1\u63a7\uff0c\u53ea\u7528\u901a\u8fc7\u914d\u7f6eYML\u6587\u4ef6\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9700\u8981\u7684\u76d1\u63a7\u7c7b\u578b\u548c\u6307\u6807\uff0c\u6765\u6ee1\u8db3\u5e38\u89c1\u7684\u4e2a\u6027\u5316\u9700\u6c42\u3002\nHertzBeat \u6a21\u5757\u5316\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"manager, collector, scheduler, warehouse, alerter")," \u5404\u4e2a\u6a21\u5757\u89e3\u8026\u5408\uff0c\u65b9\u4fbf\u7406\u89e3\u4e0e\u5b9a\u5236\u5f00\u53d1\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","HertzBeat \u652f\u6301\u66f4\u81ea\u7531\u5316\u7684\u544a\u8b66\u914d\u7f6e(\u8ba1\u7b97\u8868\u8fbe\u5f0f)\uff0c\u652f\u6301\u544a\u8b66\u901a\u77e5\uff0c\u544a\u8b66\u6a21\u7248\uff0c\u90ae\u4ef6\u9489\u9489\u5fae\u4fe1\u98de\u4e66\u7b49\u53ca\u65f6\u901a\u77e5\u9001\u8fbe",(0,n.yg)("br",{parentName:"p"}),"\n","\u6b22\u8fce\u767b\u5f55 HertzBeat \u7684 ",(0,n.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"\u4e91\u73af\u5883TanCloud")," \u8bd5\u7528\u53d1\u73b0\u66f4\u591a\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u6211\u4eec\u6b63\u5728\u5feb\u901f\u8fed\u4ee3\u4e2d\uff0c\u6b22\u8fce\u53c2\u4e0e\u52a0\u5165\u5171\u5efa\u9879\u76ee\u5f00\u6e90\u751f\u6001\u3002")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"HertzBeat")," \u7684\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002")),(0,n.yg)("p",null,"\u8001\u94c1\u4eec\u53ef\u4ee5\u901a\u8fc7\u6f14\u793a\u89c6\u9891\u6765\u76f4\u89c2\u4e86\u89e3\u529f\u80fd\uff1a ",(0,n.yg)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1DY4y1i7ts"},"https://www.bilibili.com/video/BV1DY4y1i7ts")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u4ed3\u5e93\u5730\u5740")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"Github")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"Gitee")," ",(0,n.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat")))}h.isMDXComponent=!0}}]);