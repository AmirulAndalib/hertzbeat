"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[20986],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var h=r.createContext({}),o=function(e){var t=r.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(h.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,h=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(a),m=l,b=c["".concat(h,".").concat(m)]||c[m]||g[m]||n;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=c;var p={};for(var h in t)hasOwnProperty.call(t,h)&&(p[h]=t[h]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},94436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>g,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var r=a(58168),l=(a(96540),a(15680));const n={title:"\u91cd\u78c5\u66f4\u65b0\uff0cHertzBeat \u96c6\u7fa4\u7248\u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},i=void 0,p={permalink:"/zh-cn/blog/2023/08/14/hertzbeat-v1.4.0",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2023-08-14-hertzbeat-v1.4.0.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-08-14-hertzbeat-v1.4.0.md",title:"\u91cd\u78c5\u66f4\u65b0\uff0cHertzBeat \u96c6\u7fa4\u7248\u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf!",description:"hertzBeat",date:"2023-08-14T00:00:00.000Z",formattedDate:"2023\u5e748\u670814\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"},{label:"practice",permalink:"/zh-cn/blog/tags/practice"}],readingTime:14.265,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u91cd\u78c5\u66f4\u65b0\uff0cHertzBeat \u96c6\u7fa4\u7248\u53d1\u5e03\uff0c\u6613\u7528\u53cb\u597d\u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},prevItem:{title:"\u70ed\u70c8\u6b22\u8fce HertzBeat \u5c0f\u4f19\u4f34\u65b0\u664b\u793e\u533a Committer!",permalink:"/zh-cn/blog/2023/08/28/new-committer"},nextItem:{title:"\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat v1.3.2 \u53d1\u5e03, \u66f4\u7a33\u5b9a\u66f4\u6613\u7528",permalink:"/zh-cn/blog/2023/07/05/hertzbeat-v1.3.2"}},h={authorsImageUrls:[void 0]},o=[{value:"\u4ec0\u4e48\u662f HertzBeat?",id:"\u4ec0\u4e48\u662f-hertzbeat",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"\u96c6\u7fa4\u7248\u6765\u5566",id:"\u96c6\u7fa4\u7248\u6765\u5566",level:3},{value:"\u9ad8\u6027\u80fd\u96c6\u7fa4",id:"\u9ad8\u6027\u80fd\u96c6\u7fa4",level:4},{value:"\u4e91\u8fb9\u534f\u540c",id:"\u4e91\u8fb9\u534f\u540c",level:4},{value:"\u4e3a\u4ec0\u4e48\u8981\u5f00\u6e90\u96c6\u7fa4\u7248?",id:"\u4e3a\u4ec0\u4e48\u8981\u5f00\u6e90\u96c6\u7fa4\u7248",level:3},{value:"\u5c1d\u8bd5\u90e8\u7f72\u96c6\u7fa4\u7248",id:"\u5c1d\u8bd5\u90e8\u7f72\u96c6\u7fa4\u7248",level:3},{value:"\u66f4\u591a\u7684 v1.4.0 \u7248\u672c\u66f4\u65b0",id:"\u66f4\u591a\u7684-v140-\u7248\u672c\u66f4\u65b0",level:3},{value:"\u26c4 \u5df2\u652f\u6301",id:"-\u5df2\u652f\u6301",level:2}],u={toc:o};function g(e){let{components:t,...n}=e;return(0,l.yg)("wrapper",(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"hertzBeat",src:a(56850).A,width:"4064",height:"2166"})),(0,l.yg)("h3",{id:"\u4ec0\u4e48\u662f-hertzbeat"},"\u4ec0\u4e48\u662f HertzBeat?"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"HertzBeat \u8d6b\u5179\u8df3\u52a8")," \u662f\u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u9ad8\u6027\u80fd\u96c6\u7fa4\uff0c\u65e0\u9700 Agent \u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf\u3002"),(0,l.yg)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u96c6 ",(0,l.yg)("strong",{parentName:"li"},"\u76d1\u63a7+\u544a\u8b66+\u901a\u77e5")," \u4e3a\u4e00\u4f53\uff0c\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u5e94\u7528\u7a0b\u5e8f\uff0c\u6570\u636e\u5e93\uff0c\u7f13\u5b58\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5927\u6570\u636e\uff0c\u4e2d\u95f4\u4ef6\uff0cWeb\u670d\u52a1\u5668\uff0c\u4e91\u539f\u751f\uff0c\u7f51\u7edc\uff0c\u81ea\u5b9a\u4e49\u7b49\u76d1\u63a7\u9608\u503c\u544a\u8b66\u901a\u77e5\u4e00\u6b65\u5230\u4f4d\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u6613\u7528\u53cb\u597d\uff0c\u65e0\u9700 ",(0,l.yg)("inlineCode",{parentName:"li"},"Agent"),"\uff0c\u5168 ",(0,l.yg)("inlineCode",{parentName:"li"},"WEB")," \u9875\u9762\u64cd\u4f5c\uff0c\u9f20\u6807\u70b9\u4e00\u70b9\u5c31\u80fd\u76d1\u63a7\u544a\u8b66\uff0c\u96f6\u4e0a\u624b\u5b66\u4e60\u6210\u672c\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5c06 ",(0,l.yg)("inlineCode",{parentName:"li"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," \u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u53ea\u9700\u5728\u6d4f\u89c8\u5668\u914d\u7f6e\u76d1\u63a7\u6a21\u7248 ",(0,l.yg)("inlineCode",{parentName:"li"},"YML")," \u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u60f3\u8981\u7684\u6307\u6807\u3002\u60a8\u76f8\u4fe1\u53ea\u9700\u914d\u7f6e\u4e0b\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u6b3e ",(0,l.yg)("inlineCode",{parentName:"li"},"K8s")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"li"},"Docker")," \u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f"),(0,l.yg)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff0c\u652f\u6301\u591a\u91c7\u96c6\u5668\u96c6\u7fa4\u6a2a\u5411\u6269\u5c55\uff0c\u652f\u6301\u591a\u9694\u79bb\u7f51\u7edc\u76d1\u63a7\uff0c\u4e91\u8fb9\u534f\u540c\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u81ea\u7531\u7684\u544a\u8b66\u9608\u503c\u89c4\u5219\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"\u90ae\u4ef6")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u9489\u9489")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u5fae\u4fe1")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u98de\u4e66")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u77ed\u4fe1")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Webhook")," \u7b49\u65b9\u5f0f\u6d88\u606f\u53ca\u65f6\u9001\u8fbe\u3002")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("inlineCode",{parentName:"p"},"HertzBeat"),"\u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u9ad8\u6027\u80fd\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002    ")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"hertzBeat",src:a(72428).A,width:"2814",height:"1772"})," "),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Github: ",(0,l.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Gitee: ",(0,l.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,l.yg)("h3",{id:"\u96c6\u7fa4\u7248\u6765\u5566"},"\u96c6\u7fa4\u7248\u6765\u5566"),(0,l.yg)("p",null,"\u6211\u4eec\u4e4b\u524d\u7684hertzbeat\u4e00\u76f4\u662f\u5355\u673a\u7248\u672c\uff0c\u7ec4\u4ef6\u4ee3\u7801\u6a21\u5757\u5316\u4f46\u4e0d\u652f\u6301\u91c7\u96c6\u5668\u72ec\u7acb\u90e8\u7f72\uff0c\u6240\u652f\u6301\u7684\u76d1\u63a7\u6570\u91cf\u4e0a\u9650\u53d7\u5230\u4e86\u5355\u8282\u70b9\u7684\u5929\u7136\u9650\u5236\uff0c\u4e14\u65e0\u6cd5\u5e94\u5bf9\u591a\u4e2a\u9694\u79bb\u7f51\u7edc\u7684\u8d44\u6e90\u7684\u7edf\u4e00\u7eb3\u7ba1\u3002",(0,l.yg)("br",{parentName:"p"}),"\n","\u7ecf\u8fc7\u4e00\u4e2a\u591a\u6708\u7684\u8fed\u4ee3\uff0c\u6211\u4eec\u91cd\u5199\u4e86\u91c7\u96c6\u4efb\u52a1\u8c03\u5ea6\uff0c\u91c7\u96c6\u5668\u72ec\u7acb\u90e8\u7f72\uff0c\u8bbe\u8ba1\u5355\u673a\u7248\u548c\u96c6\u7fa4\u7248\u7528\u540c\u4e00\u5957\u4ee3\u7801\u65b9\u4fbf\u540e\u7eed\u7684\u7ef4\u62a4\u5347\u7ea7\uff0c\u5355\u673a\u96c6\u7fa4\u4e24\u79cd\u6a21\u5f0f\u53ef\u76f8\u4e92\u5207\u6362\u65e0\u611f\u77e5\u3002\u6700\u7ec8\u5f88\u9ad8\u5174\uff0c\u96c6\u7fa4\u7248\u5982\u671f\u4e0e\u5927\u5bb6\u89c1\u9762\u4e86\u3002  "),(0,l.yg)("p",null,"\u96c6\u7fa4\u7248\u4e0d\u4ec5\u4ec5\u7ed9\u6211\u4eec\u5e26\u6765\u4e86\u66f4\u5f3a\u5927\u7684\u76d1\u63a7\u6027\u80fd\uff0c\u66f4\u6709\u4e91\u8fb9\u534f\u540c\u7b49\u529f\u80fd\u8ba9\u4eba\u5145\u6ee1\u60f3\u8c61\u3002  "),(0,l.yg)("h4",{id:"\u9ad8\u6027\u80fd\u96c6\u7fa4"},"\u9ad8\u6027\u80fd\u96c6\u7fa4"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301\u90e8\u7f72\u91c7\u96c6\u5668\u96c6\u7fa4\uff0c\u591a\u91c7\u96c6\u5668\u96c6\u7fa4\u6a2a\u5411\u6269\u5c55\uff0c\u6307\u6570\u7ea7\u63d0\u9ad8\u53ef\u76d1\u63a7\u6570\u91cf\u4e0e\u91c7\u96c6\u6027\u80fd\u3002    "),(0,l.yg)("li",{parentName:"ul"},"\u76d1\u63a7\u4efb\u52a1\u5728\u91c7\u96c6\u5668\u96c6\u7fa4\u4e2d\u81ea\u8c03\u5ea6\uff0c\u5355\u91c7\u96c6\u5668\u6302\u6389\u65e0\u611f\u77e5\u6545\u969c\u8fc1\u79fb\u91c7\u96c6\u4efb\u52a1\uff0c\u65b0\u52a0\u5165\u91c7\u96c6\u5668\u8282\u70b9\u81ea\u52a8\u8c03\u5ea6\u5206\u62c5\u91c7\u96c6\u538b\u529b\u3002     "),(0,l.yg)("li",{parentName:"ul"},"\u5355\u673a\u6a21\u5f0f\u4e0e\u96c6\u7fa4\u6a21\u5f0f\u76f8\u4e92\u5207\u6362\u90e8\u7f72\u975e\u5e38\u65b9\u4fbf\uff0c\u65e0\u9700\u989d\u5916\u7ec4\u4ef6\u90e8\u7f72\u3002")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"hertzbeat",src:a(99675).A,width:"2807",height:"911"})),(0,l.yg)("h4",{id:"\u4e91\u8fb9\u534f\u540c"},"\u4e91\u8fb9\u534f\u540c"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u652f\u6301\u90e8\u7f72\u8fb9\u7f18\u91c7\u96c6\u5668\u96c6\u7fa4\uff0c\u4e0e\u4e3b HertzBeat \u670d\u52a1\u4e91\u8fb9\u534f\u540c\u63d0\u5347\u91c7\u96c6\u80fd\u529b\u3002")),(0,l.yg)("p",null,"\u5728\u591a\u4e2a\u7f51\u7edc\u4e0d\u76f8\u901a\u7684\u9694\u79bb\u7f51\u7edc\u4e2d\uff0c\u5728\u4ee5\u5f80\u7684\u65b9\u6848\u4e2d\u6211\u4eec\u9700\u8981\u5728\u6bcf\u4e2a\u7f51\u7edc\u90fd\u90e8\u7f72\u4e00\u5957\u76d1\u63a7\u7cfb\u7edf\uff0c\u8fd9\u5bfc\u81f4\u6570\u636e\u4e0d\u4e92\u901a\uff0c\u7ba1\u7406\u90e8\u7f72\u7ef4\u62a4\u90fd\u4e0d\u65b9\u4fbf\u3002",(0,l.yg)("br",{parentName:"p"}),"\n","HertzBeat \u63d0\u4f9b\u4e91\u8fb9\u534f\u540c\u80fd\u529b\uff0c\u53ef\u4ee5\u5728\u591a\u4e2a\u9694\u79bb\u7f51\u7edc\u90e8\u7f72\u8fb9\u7f18\u91c7\u96c6\u5668\uff0c\u6dfb\u52a0\u76d1\u63a7\u65f6\u6307\u5b9a\u91c7\u96c6\u5668\uff0c\u91c7\u96c6\u5668\u5728\u9694\u79bb\u7f51\u7edc\u5185\u90e8\u8fdb\u884c\u76d1\u63a7\u4efb\u52a1\u91c7\u96c6\uff0c\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\uff0c\u7531\u4e3b HertzBeat \u670d\u52a1\u7edf\u4e00\u8c03\u5ea6\u7ba1\u7406\u5c55\u793a\u3002",(0,l.yg)("br",{parentName:"p"}),"\n","\u8fd9\u591a\u7528\u4e8e\u591a\u4e2a\u9694\u79bb\u6570\u636e\u4e2d\u5fc3\u6216\u4e0d\u540c\u5382\u5546\u4e91\u8d44\u6e90\u548c\u4e91\u4e0b\u8d44\u6e90\u7684\u7edf\u4e00\u76d1\u63a7\u573a\u666f\u3002   "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"hertzbeat",src:a(99675).A,width:"2807",height:"911"})),(0,l.yg)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u5f00\u6e90\u96c6\u7fa4\u7248"},"\u4e3a\u4ec0\u4e48\u8981\u5f00\u6e90\u96c6\u7fa4\u7248?"),(0,l.yg)("p",null,"\u5f80\u5f80\u4e00\u4e9b\u505a\u9700\u8981\u5546\u4e1a\u5316\u7684\u5f00\u6e90\u4ea7\u54c1\u7684\u7b56\u7565\u4f1a\u662f\u5355\u673a\u7248\u4f5c\u4e3a\u73a9\u5177\u7ed9\u5c0f\u73a9\u5bb6\u4eec\u7684\u5165\u95e8\u4f7f\u7528\uff0c\u7136\u540e\u96c6\u7fa4\u7248\u4f5c\u4e3a\u95ed\u6e90\u4ea7\u54c1\u7ed9\u6709\u9700\u6c42\u7684\u6c2a\u91d1\u73a9\u5bb6\u4ed8\u8d39\u4f7f\u7528\u3002\u8fd9\u6837\u7684\u6a21\u5f0f\u662f\u53ef\u4ee5\u8bf4\u975e\u5e38\u4e0d\u9519\u7684\u4e14\u503c\u5f97\u80af\u5b9a\u7684\uff0c\u5373\u4fdd\u8bc1\u5f00\u6e90\u4e5f\u5f97\u5230\u4e86\u6536\u76ca\uff0c\u4e5f\u9002\u7528\u4e8e\u5f88\u591a\u5f00\u6e90\u9879\u76ee\u7684\u53d1\u5c55\u7b56\u7565\uff0c\u53ef\u80fd\u4f1a\u5728\u5546\u4e1a\u8def\u5f84\u4e0a\u8d70\u5f97\u66f4\u901a\u987a\u70b9\u3002",(0,l.yg)("br",{parentName:"p"}),"\n","\u7f51\u7edc\u4e0a\u6709\u4e9b\u4eba\u4f1a\u5bf9\u8fd9\u6837\u7684\u5206\u5355\u673a\u548c\u96c6\u7fa4\u7248\u7684\u5f00\u6e90\u9879\u76ee\u55e4\u4e4b\u4ee5\u9f3b\uff0c\u89c9\u5f97\u5b83\u4eec\u662f\u4f2a\u5f00\u6e90\uff0c\u5f00\u6e90\u662f\u5671\u5934\uff0c\u4ed6\u4eec\u89c9\u5f97\u5f00\u6e90\u5e94\u8be5\u4ec0\u4e48\u90fd\u5f00\u6e90\u514d\u8d39\u51fa\u6765\uff0c\u5f00\u6e90\u56e2\u961f\u4ec0\u4e48\u90fd\u5e94\u8be5\u65e0\u79c1\u5949\u732e\u51fa\u6765\u3002\u3002\u3002\u3002\u5f88\u65e0\u8bed\u8fd9\u7c7b\u4eba\uff0c\u6709\u6295\u5165\u624d\u6709\u56de\u62a5\uff0c\u5f53\u4f60\u514d\u8d39\u4f7f\u7528\u7740\u5f00\u6e90\u8f6f\u4ef6\u5e76\u5f97\u5230\u4ef7\u503c\u7684\u65f6\u5019\uff0c\u662f\u5426\u5e94\u8be5\u60f3\u4e00\u60f3\u4f60\u4ed8\u51fa\u7ed9\u5f00\u6e90\u8f6f\u4ef6\u4e86\u4ec0\u4e48\u800c\u4e0d\u662f\u4e00\u5473\u7684\u7d22\u53d6\u3002",(0,l.yg)("br",{parentName:"p"}),"\n","\u90a3\u56de\u5230\u6b63\u9898\uff0c\u6211\u4eec\u53c8\u4e3a\u4ec0\u4e48\u8981\u5f00\u6e90\u96c6\u7fa4\u7248\uff1f\u4ec5\u56e0\u4e3a\u70ed\u7231\u5f00\u6e90\uff1f\u5982\u679c\u8bf4\u6211\u4eec\u8fd8\u5728\u5c11\u5e74\u53ef\u80fd\u8fd9\u8bdd\u4f60\u4fe1\uff0c\u4f46\u4e00\u4e2a\u5feb\u595430\u8fd8\u6709\u5bb6\u5ead\u8d23\u4efb\u7684\u4eba\u8bf4\u51fa\u8fd9\u8bdd\u4f60\u4fe1\u5417\uff0c\u6211\u81ea\u5df1\u90fd\u4e0d\u4fe1\ud83d\ude02\u3002",(0,l.yg)("br",{parentName:"p"}),"\n","\u9996\u5148\u6211\u4eec\u6765\u770b\u770b\u5f00\u6e90\u80fd\u5e26\u6765\u4ec0\u4e48\uff0c\u6216\u8005\u4e3a\u4ec0\u4e48\u8981\u505a\u5f00\u6e90\u3002\u6700\u5f00\u59cb\u5168\u804c\u5f00\u6e90\u7684\u60f3\u6cd5\u5f88\u7b80\u5355\uff0c\u505a\u81ea\u5df1\u559c\u6b22\u7684\u5f00\u6e90\u4ea7\u54c1(\u5df2\u5b9e\u73b0)\uff0c\u7a0b\u5e8f\u5458\u7684\u68a6\u60f3\u80fd\u90e8\u7f72\u5728\u6210\u5343\u4e0a\u4e07\u7684\u670d\u52a1\u5668\u4e0a(\u770b\u4e0b\u8f7d\u91cf\u5df2\u5b9e\u73b0)\uff0c\u7136\u540e\u57fa\u4e8e\u6b64\u5f00\u6e90\u4ea7\u54c1\u6323\u94b1(\u6682\u672a\u54ed)\u3002   "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7528\u6237\u6d41\u91cf\u3002\u5f00\u6e90\u9879\u76ee\u514d\u8d39\u63d0\u4f9b\u7ed9\u7528\u6237\u548c\u5f00\u53d1\u8005\uff0c\u5438\u5f15\u7528\u6237\u4f7f\u7528\uff0c\u5ba3\u4f20\u7b49\u65b9\u9762\u90fd\u6709\u4f18\u52bf\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u7528\u6237\u4fe1\u4efb\u3002\u5f00\u6e90\u7684\u4ea7\u54c1\u5929\u751f\u5bb9\u6613\u83b7\u53d6\u7528\u6237\u7684\u4fe1\u4efb\u548c\u4f7f\u7528\u8010\u5fc3\uff0c\u6216\u8005\u8bf4\u964d\u4f4e\u7528\u6237\u7684\u4fe1\u4efb\u95e8\u69db\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u793e\u533a\u534f\u4f5c\u3002\u5f00\u6e90\u7684\u4ea7\u54c1\u53ef\u4ee5\u5438\u5f15\u5230\u9876\u7ea7\u8d21\u732e\u8005\u4e00\u8d77\u8d21\u732e\uff0c\u63a5\u6536\u7528\u6237\u7684\u53cd\u9988issue\uff0cpr\u8d21\u732e\u7b49\uff0c\u5728\u793e\u533a\u7684\u9a71\u52a8\u4e0b\u4f7f\u5f00\u6e90\u9879\u76ee\u8d8a\u6765\u8d8a\u597d\uff0c\u6b63\u5411\u53cd\u9988\u540e\u4e5f\u4f1a\u6709\u66f4\u591a\u4eba\u53c2\u4e0e\u548c\u4f7f\u7528\u3002\u793e\u533a\u534f\u4f5c\u6211\u89c9\u5f97\u8fd9\u662f\u5f00\u6e90\u7684\u610f\u4e49\uff0c\u800c\u4e14\u8fd9\u6837\u4e0d\u4ec5\u4ec5\u53ea\u662f\u7a0b\u5e8f\u5458\u4e4b\u95f4\u7684\u8d21\u732e\u4ee3\u7801\u534f\u4f5c\uff0c\u7528\u6237\u90fd\u662f\u534f\u4f5c\u5bf9\u8c61(\u6bd4\u5982\u6211\u4eec\u8fd9\u4e2a\u9879\u76ee\u6709\u5927\u91cf\u7684\u8fd0\u7ef4\u670b\u53cb\u8d21\u732e\u4ee3\u7801\u548c\u6587\u6863)\uff0c\u5982\u679c\u662f\u4ec5\u4ec5\u4ee3\u7801\u5f00\u6e90\u800c\u4e0d\u793e\u533a\u534f\u4f5c\uff0c\u90a3\u8fd8\u4e0d\u5982\u653e\u4e2a\u5b89\u88c5\u5305\u7ed9\u522b\u4eba\u514d\u8d39\u4f7f\u7528\u4e0b\u8f7d\u5c31\u597d\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4ea7\u54c1\u751f\u6001\u3002\u8fd9\u5bf9\u4e00\u4e9b\u9700\u8981\u751f\u6001\u7684\u4ea7\u54c1\u662f\u9700\u8981\u7684\uff0c\u6bd4\u5982hertzbeat\uff0c\u9700\u8981\u652f\u6301\u5bf9\u63a5\u5404\u79cd\u7c7b\u578b\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\uff0c\u5927\u91cf\u7684\u76d1\u63a7\u6a21\u7248\u3002\u4e00\u4e2a\u597d\u7684\u5f00\u6e90\u9879\u76ee\u751f\u6001\u624d\u80fd\u5438\u5f15\u5230\u5176\u5b83\u8d21\u732e\u8005\u8d21\u732e\u548c\u5206\u4eab\uff0c\u5728\u751f\u6001\u4e2d\u4e92\u901a\u6709\u65e0\uff0c\u6700\u7ec8\u5927\u5bb6\u5728\u751f\u6001\u4e2d\u90fd\u53d7\u76ca\u3002\u8fd9\u5728\u95ed\u6e90\u7a0b\u5e8f\u4e2d\u662f\u5f88\u96be\u505a\u5230\u7684\u3002 ")),(0,l.yg)("p",null,"\u4e0a\u9762\u51e0\u70b9\uff0c\u91cd\u5728\u793e\u533a\u534f\u4f5c\u548c\u4ea7\u54c1\u751f\u6001\uff0c\u8fd9\u4e5f\u662f\u5f00\u6e90\u96c6\u7fa4\u7248\u7684\u539f\u56e0\uff0c\u53ea\u6709\u5377\u5f00\u6e90\u4ea7\u54c1\u5377\u81ea\u5df1\u5230\u66f4\u5f3a\u7684\u4ea7\u54c1\u529b\uff0c\u6bd4\u5982\u96c6\u7fa4\u8fd9\u4e00\u6280\u672f\u7279\u6027\u5929\u751f\u4f1a\u5438\u5f15\u5230\u5f00\u53d1\u8005(\u800c\u4e14\u96c6\u7fa4\u672c\u8eab\u5c31\u662f\u6211\u4eec\u793e\u533a\u534f\u4f5c\u7684\u4ea7\u7269)\uff0c\u4f1a\u5438\u5f15\u5230\u66f4\u591a\u7684\u7528\u6237\u548c\u8d21\u732e\u8005\u4f7f\u7528\u53cd\u9988\u5927\u5bb6\u4e00\u8d77\u8fed\u4ee3\uff0c\u793e\u533a\u9a71\u52a8\u8fdb\u800c\u6b63\u5411\u4fc3\u8fdb\u5f00\u6e90\u9879\u76ee\u548c\u6ee1\u8db3\u7528\u6237\u529f\u80fd\u4f53\u9a8c\u3002",(0,l.yg)("br",{parentName:"p"}),"\n","\u800c\u5bf9\u4e8e\u5f00\u6e90\u5546\u4e1a\u5316\uff0c\u5f00\u6e90\u5546\u4e1a\u5316\u7684\u524d\u63d0\u662f\u5f97\u6709\u4e2a\u771f\u6b63\u597d\u7684\uff0c\u53d7\u6b22\u8fce\uff0c\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u5f00\u6e90\u4ea7\u54c1\uff0c\u7136\u540e\u5728\u6b64\u57fa\u7840\u4e0a\u505a\u5546\u4e1a\u5316\u6323\u94b1\u3002   "),(0,l.yg)("p",null,"\u5bf9\u4e86\u8fd9\u91cc\u518d\u8bf4\u4e0b\u5f00\u6e90\u4e0d\u7b49\u540c\u4e8e\u514d\u8d39\uff0c\u57fa\u4e8eHertzBeat\u4e8c\u6b21\u5f00\u53d1\u9700\u4fdd\u7559logo\uff0c\u540d\u79f0\uff0c\u9875\u9762\u811a\u6ce8\uff0c\u7248\u6743\u7b49\u3002\n\u514d\u8d39\u4f7f\u7528\u4e0d\u662f\u767d\u5ad6\uff0c\u8fd9\u79cd\u7834\u574f\u5f00\u6e90\u534f\u8bae\u7684\u624d\u662f\uff0c\u76ee\u524d\u53d1\u73b0\u5927\u91cf\u767d\u5ad6\u602a\uff0c\u5c0f\u5fc3\u70b9\u54c8\u4f60\u4eec\u3002\u6211\u6bcf\u5e74\u6b63\u6708\u521d\u4e03\u90fd\u4f1a\u795d\u4f60\u4eec\u7528\u8fd9\u4e9b\u94b1\u5403\u7684\u5b89\u5fc3\uff0c\u4f4f\u7684\u653e\u5fc3\uff0c\u73a9\u7684\u5f00\u5fc3\u54c8\u3002(\u4ec5\u4e2a\u4eba\u8a00\u8bba\u4e0d\u4ee3\u8868\u793e\u533a)"),(0,l.yg)("h3",{id:"\u5c1d\u8bd5\u90e8\u7f72\u96c6\u7fa4\u7248"},"\u5c1d\u8bd5\u90e8\u7f72\u96c6\u7fa4\u7248"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"docker")," \u73af\u5883\u4ec5\u9700\u4e00\u6761\u547d\u4ee4\u5373\u53ef\u5f00\u59cb")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"\u6216\u8005\u4f7f\u7528 quay.io (\u82e5 dockerhub \u7f51\u7edc\u94fe\u63a5\u8d85\u65f6)")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,l.yg)("inlineCode",{parentName:"p"},"http://localhost:1157")," \u5373\u53ef\u5f00\u59cb\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 ",(0,l.yg)("inlineCode",{parentName:"p"},"admin/hertzbeat"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u90e8\u7f72\u91c7\u96c6\u5668\u96c6\u7fa4"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_IP=1158 --name hertzbeat-collector tancloud/hertzbeat-collector\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name")," : \u914d\u7f6e\u6b64\u91c7\u96c6\u5668\u7684\u552f\u4e00\u6027\u6807\u8bc6\u7b26\u540d\u79f0\uff0c\u591a\u4e2a\u91c7\u96c6\u5668\u540d\u79f0\u4e0d\u80fd\u76f8\u540c\uff0c\u5efa\u8bae\u81ea\u5b9a\u4e49\u82f1\u6587\u540d\u79f0\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-e MANAGER_IP=127.0.0.1")," : \u914d\u7f6e\u8fde\u63a5\u4e3bHertzBeat\u670d\u52a1\u7684\u5bf9\u5916IP\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," : \u914d\u7f6e\u8fde\u63a5\u4e3bHertzBeat\u670d\u52a1\u7684\u5bf9\u5916\u7aef\u53e3\uff0c\u9ed8\u8ba41158\u3002")),(0,l.yg)("p",null,"\u66f4\u591a\u914d\u7f6e\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"\u66f4\u591a\u7684-v140-\u7248\u672c\u66f4\u65b0"},"\u66f4\u591a\u7684 v1.4.0 \u7248\u672c\u66f4\u65b0"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u66f4\u591a\u7248\u672c\u65b0\u529f\u80fd\u66f4\u65b0\u6b22\u8fce\u63a2\u7d22\uff0c\u611f\u8c22\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u8f9b\u82e6\u8d21\u732e\uff0c\u7231\u5fc3\ud83d\udc97!  ")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[doc]"," add v1.3.2 publish doc by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1075"},"https://github.com/apache/hertzbeat/pull/1075")),(0,l.yg)("li",{parentName:"ul"},"remove elasticsearch unused param index by @Ceilzcx in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1080"},"https://github.com/apache/hertzbeat/pull/1080")),(0,l.yg)("li",{parentName:"ul"},"feature support monitoring apache airflow by @luoxuanzao in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1081"},"https://github.com/apache/hertzbeat/pull/1081")),(0,l.yg)("li",{parentName:"ul"},"add luoxuanzao as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1083"},"https://github.com/apache/hertzbeat/pull/1083")),(0,l.yg)("li",{parentName:"ul"},"[collector]"," bugfix sshd cannot use private key to connect by @gcdd1993 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1084"},"https://github.com/apache/hertzbeat/pull/1084")),(0,l.yg)("li",{parentName:"ul"},"bugfix update dashboard alerts cards height not consist by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1087"},"https://github.com/apache/hertzbeat/pull/1087")),(0,l.yg)("li",{parentName:"ul"},"Feature#serverchan by @zqr10159 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1092"},"https://github.com/apache/hertzbeat/pull/1092")),(0,l.yg)("li",{parentName:"ul"},"bugfix dm database monitoring connect error  by @lisongning in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1094"},"https://github.com/apache/hertzbeat/pull/1094")),(0,l.yg)("li",{parentName:"ul"},"add lisongning as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1096"},"https://github.com/apache/hertzbeat/pull/1096")),(0,l.yg)("li",{parentName:"ul"},'update alert rule operator display "<=" to ">=" by @Ceilzcx in ',(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1097"},"https://github.com/apache/hertzbeat/pull/1097")),(0,l.yg)("li",{parentName:"ul"},"[doc]","  add custom monitoring relate document by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1098"},"https://github.com/apache/hertzbeat/pull/1098")),(0,l.yg)("li",{parentName:"ul"},"add YutingNie as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1103"},"https://github.com/apache/hertzbeat/pull/1103")),(0,l.yg)("li",{parentName:"ul"},"Remove unreachable status by @YutingNie in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1102"},"https://github.com/apache/hertzbeat/pull/1102")),(0,l.yg)("li",{parentName:"ul"},"139 auto update alert status by @l646505418 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1104"},"https://github.com/apache/hertzbeat/pull/1104")),(0,l.yg)("li",{parentName:"ul"},"feat: aviator fn for str contains, exists & matches by @mikezzb in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1106"},"https://github.com/apache/hertzbeat/pull/1106")),(0,l.yg)("li",{parentName:"ul"},"add mikezzb as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1107"},"https://github.com/apache/hertzbeat/pull/1107")),(0,l.yg)("li",{parentName:"ul"},"bugfix common alarm do not need monitorId tag existed by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1108"},"https://github.com/apache/hertzbeat/pull/1108")),(0,l.yg)("li",{parentName:"ul"},"bugfix extern alert do not have labels mapping inner monitor by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1111"},"https://github.com/apache/hertzbeat/pull/1111")),(0,l.yg)("li",{parentName:"ul"},"feature: support apache spark metrics monitoring by @a-little-fool in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1114"},"https://github.com/apache/hertzbeat/pull/1114")),(0,l.yg)("li",{parentName:"ul"},"add a-little-fool as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1116"},"https://github.com/apache/hertzbeat/pull/1116")),(0,l.yg)("li",{parentName:"ul"},"[Feature]","Add third report of TenCloud by @zqr10159 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1113"},"https://github.com/apache/hertzbeat/pull/1113")),(0,l.yg)("li",{parentName:"ul"},"[Feature]","Add third report of TenCloud (#1113) by @zqr10159 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1119"},"https://github.com/apache/hertzbeat/pull/1119")),(0,l.yg)("li",{parentName:"ul"},"[manager]"," fix: can query by tags when tagValue is null by @l646505418 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1118"},"https://github.com/apache/hertzbeat/pull/1118")),(0,l.yg)("li",{parentName:"ul"},"bugfix the notification template environment variable display error by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1120"},"https://github.com/apache/hertzbeat/pull/1120")),(0,l.yg)("li",{parentName:"ul"},"add littlezhongzer as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1127"},"https://github.com/apache/hertzbeat/pull/1127")),(0,l.yg)("li",{parentName:"ul"},"feature:monitor brearer token api, ignore letter case to comparison by @littlezhongzer in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1122"},"https://github.com/apache/hertzbeat/pull/1122")),(0,l.yg)("li",{parentName:"ul"},"docs: enhance README by @mikezzb in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1128"},"https://github.com/apache/hertzbeat/pull/1128")),(0,l.yg)("li",{parentName:"ul"},"Update app-oracle.yml by @ChenXiangxxxxx in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1129"},"https://github.com/apache/hertzbeat/pull/1129")),(0,l.yg)("li",{parentName:"ul"},"add ChenXiangxxxxx as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1130"},"https://github.com/apache/hertzbeat/pull/1130")),(0,l.yg)("li",{parentName:"ul"},"fix alarm silence strategy setting failed by @Ceilzcx in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1131"},"https://github.com/apache/hertzbeat/pull/1131")),(0,l.yg)("li",{parentName:"ul"},"support run sql script file in jdbc protocol config by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1117"},"https://github.com/apache/hertzbeat/pull/1117")),(0,l.yg)("li",{parentName:"ul"},"bugfix return old cache json file when upgrade version by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1137"},"https://github.com/apache/hertzbeat/pull/1137")),(0,l.yg)("li",{parentName:"ul"},"support ssh protocol config choose if reuse connection by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1136"},"https://github.com/apache/hertzbeat/pull/1136")),(0,l.yg)("li",{parentName:"ul"},"feat(web): alert threshold UI support matches & contains by @mikezzb in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1138"},"https://github.com/apache/hertzbeat/pull/1138")),(0,l.yg)("li",{parentName:"ul"},"support hertzbeat metrics collector cluster by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1101"},"https://github.com/apache/hertzbeat/pull/1101")),(0,l.yg)("li",{parentName:"ul"},"add collector card in dashboard by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1147"},"https://github.com/apache/hertzbeat/pull/1147")),(0,l.yg)("li",{parentName:"ul"},"bugfix: linux collect warning: bad syntax, perhaps a bogus '-' by @Mr-zhou315 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1151"},"https://github.com/apache/hertzbeat/pull/1151")),(0,l.yg)("li",{parentName:"ul"},"add Mr-zhou315 as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1157"},"https://github.com/apache/hertzbeat/pull/1157")),(0,l.yg)("li",{parentName:"ul"},"support config timezone locale language region on web ui by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1154"},"https://github.com/apache/hertzbeat/pull/1154")),(0,l.yg)("li",{parentName:"ul"},"bugfix monitoring template app name already exists by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1152"},"https://github.com/apache/hertzbeat/pull/1152")),(0,l.yg)("li",{parentName:"ul"},"bugfix can not startup when error monitoring template yml file by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1153"},"https://github.com/apache/hertzbeat/pull/1153")),(0,l.yg)("li",{parentName:"ul"},"tags also deleted when the monitor is deleted by @Ceilzcx in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1159"},"https://github.com/apache/hertzbeat/pull/1159")),(0,l.yg)("li",{parentName:"ul"},"monitoring param host with http head will not be error reported by @littlezhongzer in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1155"},"https://github.com/apache/hertzbeat/pull/1155")),(0,l.yg)("li",{parentName:"ul"},"[script]"," feature update build.sh and Dockerfile: detect app version a\u2026 by @XimfengYao in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1162"},"https://github.com/apache/hertzbeat/pull/1162")),(0,l.yg)("li",{parentName:"ul"},"add XimfengYao as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1163"},"https://github.com/apache/hertzbeat/pull/1163")),(0,l.yg)("li",{parentName:"ul"},"[doc]"," add collector clusters document by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1161"},"https://github.com/apache/hertzbeat/pull/1161")),(0,l.yg)("li",{parentName:"ul"},"[hertzbeat]"," release hertzbeat version v1.4.0 by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1168"},"https://github.com/apache/hertzbeat/pull/1168"))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"-\u5df2\u652f\u6301"},"\u26c4 \u5df2\u652f\u6301"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06\u76d1\u63a7\u91c7\u96c6\u7c7b\u578b(mysql,jvm,k8s)\u90fd\u5b9a\u4e49\u4e3ayml\u76d1\u63a7\u6a21\u7248\uff0c\u7528\u6237\u53ef\u4ee5\u5bfc\u5165\u8fd9\u4e9b\u6a21\u7248\u6765\u652f\u6301\u5bf9\u5e94\u7c7b\u578b\u7684\u76d1\u63a7!",(0,l.yg)("br",{parentName:"p"}),"\n","\u6b22\u8fce\u5927\u5bb6\u4e00\u8d77\u8d21\u732e\u4f60\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u81ea\u5b9a\u4e49\u7684\u901a\u7528\u76d1\u63a7\u7c7b\u578b\u76d1\u63a7\u6a21\u7248\u3002")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,l.yg)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,l.yg)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,l.yg)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,l.yg)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,l.yg)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,l.yg)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,l.yg)("li",{parentName:"ul"},"Notifications support ",(0,l.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Mail")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Pinning")," ",(0,l.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,l.yg)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,l.yg)("inlineCode",{parentName:"li"},"SMS")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Webhook"),"."),(0,l.yg)("li",{parentName:"ul"},"\u548c\u66f4\u591a\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u901a\u77e5\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u90ae\u4ef6")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u9489\u9489")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u5fae\u4fe1")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u98de\u4e66")," ",(0,l.yg)("inlineCode",{parentName:"li"},"\u77ed\u4fe1")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Webhook"),"\u3002")),(0,l.yg)("hr",null),(0,l.yg)("p",null,"\u6b22\u8fcestar\u4e00\u6ce2\u6765\u652f\u6301\u6211\u4eec\u54e6\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Github: ",(0,l.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("strong",{parentName:"p"},"Gitee: ",(0,l.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))))}g.isMDXComponent=!0},99675:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/cluster-arch-d829b210ab749a048ff6bedef09260b9.png"},72428:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/hertzbeat-arch-758b3f08da56310b5f1fe1d1bfd99d82.png"},56850:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/0-e6b0a393f2a8e43af9bf271c436a823d.png"}}]);