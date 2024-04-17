"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[56799],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>c});var r=a(96540);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=r.createContext({}),h=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=h(e.components);return r.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=h(a),c=p,s=u["".concat(o,".").concat(c)]||u[c]||g[c]||n;return a?r.createElement(s,l(l({ref:t},m),{},{components:a})):r.createElement(s,l({ref:t},m))}));function c(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var h=2;h<n;h++)l[h]=a[h];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var r=a(58168),p=(a(96540),a(15680));const n={title:"\u91cd\u78c5\u66f4\u65b0 \u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat v1.3.0 \u53d1\u5e03 \u5728\u7ebf\u81ea\u5b9a\u4e49\u6765\u4e86",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u544a\u8b66\u7cfb\u7edf","Linux\u76d1\u63a7"]},l=void 0,i={permalink:"/zh-cn/blog/2023/03/15/hertzbeat-v1.3.0",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2023-03-15-hertzbeat-v1.3.0.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-03-15-hertzbeat-v1.3.0.md",title:"\u91cd\u78c5\u66f4\u65b0 \u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat v1.3.0 \u53d1\u5e03 \u5728\u7ebf\u81ea\u5b9a\u4e49\u6765\u4e86",description:"\u5b98\u7f51: hertzbeat.com | tancloud.cn",date:"2023-03-15T00:00:00.000Z",formattedDate:"2023\u5e743\u670815\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"},{label:"practice",permalink:"/zh-cn/blog/tags/practice"}],readingTime:6.355,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u91cd\u78c5\u66f4\u65b0 \u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat v1.3.0 \u53d1\u5e03 \u5728\u7ebf\u81ea\u5b9a\u4e49\u6765\u4e86",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u544a\u8b66\u7cfb\u7edf","Linux\u76d1\u63a7"]},prevItem:{title:"\u4f7f\u7528 HertzBeat 5\u5206\u949f\u641e\u5b9a SpringBoot2 \u76d1\u63a7\u544a\u8b66",permalink:"/zh-cn/blog/2023/03/22/monitor-springboot2"},nextItem:{title:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u76d1\u63a7 Linux \u64cd\u4f5c\u7cfb\u7edf",permalink:"/zh-cn/blog/2023/02/15/monitor-linux"}},o={authorsImageUrls:[void 0]},h=[{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:3},{value:"v1.3.0 \u5927\u7248\u672c\u6765\u4e86",id:"v130-\u5927\u7248\u672c\u6765\u4e86",level:3},{value:"\u26c4 Supported",id:"-supported",level:2}],m={toc:h};function g(e){let{components:t,...a}=e;return(0,p.yg)("wrapper",(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.yg)("p",null,"\u5b98\u7f51: hertzbeat.com | tancloud.cn"),(0,p.yg)("p",null,(0,p.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9629ef5bb6e486cacddb899f1495c6e~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,p.yg)("h3",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,p.yg)("blockquote",null,(0,p.yg)("p",{parentName:"blockquote"},"HertzBeat\u8d6b\u5179\u8df3\u52a8 \u662f\u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u65e0\u9700 Agent \u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u5de5\u5177\u3002",(0,p.yg)("br",{parentName:"p"}),"\n","\u96c6 ",(0,p.yg)("strong",{parentName:"p"},"\u76d1\u63a7+\u544a\u8b66+\u901a\u77e5")," \u4e3a\u4e00\u4f53\uff0c\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u5e94\u7528\u7a0b\u5e8f\uff0c\u6570\u636e\u5e93\uff0c\u7f13\u5b58\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5927\u6570\u636e\uff0c\u4e2d\u95f4\u4ef6\uff0cWeb\u670d\u52a1\u5668\uff0c\u4e91\u539f\u751f\uff0c\u7f51\u7edc\uff0c\u81ea\u5b9a\u4e49\u7b49\u6307\u6807\u76d1\u63a7\uff0c\u9608\u503c\u544a\u8b66\u901a\u77e5\u4e00\u6b65\u5230\u4f4d\u3002",(0,p.yg)("br",{parentName:"p"}),"\n","\u652f\u6301\u66f4\u81ea\u7531\u5316\u7684\u9608\u503c\u89c4\u5219(\u8ba1\u7b97\u8868\u8fbe\u5f0f)\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"\u90ae\u4ef6")," ",(0,p.yg)("inlineCode",{parentName:"p"},"Discord")," ",(0,p.yg)("inlineCode",{parentName:"p"},"Slack")," ",(0,p.yg)("inlineCode",{parentName:"p"},"Telegram")," ",(0,p.yg)("inlineCode",{parentName:"p"},"\u9489\u9489")," ",(0,p.yg)("inlineCode",{parentName:"p"},"\u5fae\u4fe1")," ",(0,p.yg)("inlineCode",{parentName:"p"},"\u98de\u4e66")," ",(0,p.yg)("inlineCode",{parentName:"p"},"\u77ed\u4fe1")," ",(0,p.yg)("inlineCode",{parentName:"p"},"Webhook")," \u7b49\u65b9\u5f0f\u53ca\u65f6\u9001\u8fbe\u3002")),(0,p.yg)("blockquote",null,(0,p.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06",(0,p.yg)("inlineCode",{parentName:"p"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus"),"\u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u60a8\u53ea\u9700\u914d\u7f6e",(0,p.yg)("inlineCode",{parentName:"p"},"YML"),"\u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u4f55\u60a8\u60f3\u8981\u7684\u6307\u6807\u3002")),(0,p.yg)("blockquote",null,(0,p.yg)("p",{parentName:"blockquote"},"\u60a8\u76f8\u4fe1\u53ea\u9700\u5b9a\u4e49YML\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u6b3eK8s\u6216Docker\u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f")),(0,p.yg)("p",null,(0,p.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4236e748f5ac4352b7cf4bb65ccf97aa~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,p.yg)("p",null,(0,p.yg)("strong",{parentName:"p"},"Github: ",(0,p.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))),(0,p.yg)("p",null,(0,p.yg)("strong",{parentName:"p"},"Gitee: ",(0,p.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,p.yg)("h3",{id:"v130-\u5927\u7248\u672c\u6765\u4e86"},"v1.3.0 \u5927\u7248\u672c\u6765\u4e86"),(0,p.yg)("p",null,"\u7ecf\u8fc7\u4e00\u4e2a\u6708\u7684\u8fed\u4ee3\u66f4\u65b0\uff0cHertzBeat v1.3.0 \u5728\u4e0a\u5468\u672b\u6b63\u5f0f\u53d1\u5e03\u5566, ",(0,p.yg)("strong",{parentName:"p"},"\u63a8\u8350\u5347\u7ea7\u98df\u7528"),"\uff01"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("strong",{parentName:"li"},"\u652f\u6301\u5728\u6d4f\u89c8\u5668\u9875\u9762\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u3002hertzbeat\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u6211\u4eec\u6240\u6709\u7684\u5df2\u652f\u6301\u76d1\u63a7\u7c7b\u578b\u90fd\u6620\u5c04\u4e3a\u4e00\u4e2aYML\uff0c\u4e4b\u524d\u7528\u6237\u4f7f\u7528\u81ea\u5b9a\u4e49\u76d1\u63a7\u529f\u80fd\u9002\u914d\u6307\u6807\u9700\u8981\u5728\u540e\u53f0\u7f16\u5199YML\u6587\u4ef6\u5e76\u91cd\u542f\uff0c\u4f53\u9a8c\u6b20\u4f73\u4e14\u6ca1\u6709\u76f4\u89c2\u7684\u611f\u53d7\u3002\u8fd9\u6b21\u6211\u4eec\u5e26\u6765\u4e86\u81ea\u5b9a\u4e49\u76d1\u63a7\u9875\u9762\u5316\uff0c\u6b22\u8fce\u5927\u5bb6\u4f7f\u7528\u548c\u5206\u4eab\u8d21\u732e\u81ea\u5df1\u7684\u76d1\u63a7\u7c7b\u578b\u5b9a\u4e49\u3002")),(0,p.yg)("p",null,(0,p.yg)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5c9dd3e28c54c72b49a7470012a0c36~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},(0,p.yg)("strong",{parentName:"p"},"\u652f\u6301\u5bf9\u7f51\u7edc\u4ea4\u6362\u673a\u7684\u76d1\u63a7"),"\u3002hertzbeat\u5f88\u65e9\u4e4b\u524d\u5c31\u652f\u6301\u4e86snmp\u534f\u8bae\uff0cwindows\u76d1\u63a7\u5c31\u662f\u901a\u8fc7snmp\u534f\u8bae\u6765\u76d1\u63a7\u7684\uff0c\u8fd9\u4e2a\u7248\u672c\u6211\u4eec\u4e0d\u4ec5\u652f\u6301\u4e86\u66f4\u591awindows\u6027\u80fd\u6307\u6807\uff0c\u8fd8\u652f\u6301\u4e86snmp walk\uff0c\u9002\u914d\u4e86\u51e0\u6b3e\u5e38\u89c1\u7f51\u7edc\u4ea4\u6362\u673a\u7684\u76d1\u63a7\uff0c\u6b22\u8fce\u8d21\u732e\u66f4\u591a\u7c7b\u578b\u4e0e\u6307\u6807\u7ed9\u793e\u533a\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},(0,p.yg)("strong",{parentName:"p"},"\u652f\u6301redis\u96c6\u7fa4\u548c\u66f4\u591a\u6570\u636e\u5e93\u6307\u6807\u7684\u76d1\u63a7"),"\u3002\u793e\u533a\u8d21\u732e\u8005\u4eec\u8d21\u732e\u4e86\u5bf9redis\u96c6\u7fa4\u548c\u591a\u79cd\u6570\u636e\u5e93\u7684\u6269\u5c55\u6307\u6807\uff0c\u4e30\u5bcc\u4e86\u6027\u80fd\u6307\u6807\u6570\u636e\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},(0,p.yg)("strong",{parentName:"p"},"\u652f\u6301iotdb1.0\u5b58\u50a8\uff0c\u65e0\u4f9d\u8d56\u6a21\u5f0f"),"\u7b49\u66f4\u591a\u7684\u65b0\u529f\u80fd\u6b22\u8fce\u6765\u63a2\u7d22")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u82e5\u5e72BUG\uff0c\u66f4\u5b8c\u5584\u7684\u6587\u6863\uff0c\u91cd\u6784\u4e86\u4ee3\u7801\u3002"))),(0,p.yg)("hr",null),(0,p.yg)("p",null,"\u53ea\u9700\u8981\u4e00\u6761docker\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f53\u9a8cheartbeat"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,p.yg)("p",null,"\u611f\u8c22hertzbeat\u8d21\u732e\u8005\u4eec\u7684\u8d21\u732e\uff01\ud83d\udc4d\ud83d\udc4d"),(0,p.yg)("p",null,"\u6211\u4eec\u6025\u9700\u5bf9\u6d4b\u8bd5\u7528\u4f8b\uff0c\u65b0\u589e\u5e94\u7528\u76d1\u63a7\uff0c\u6587\u6863\u7b49\u5404\u65b9\u9762\u7684\u8d21\u732e\u8005\uff0c\u975e\u5e38\u6b22\u8fce\u52a0\u5165\u3002"),(0,p.yg)("p",null,"Feature\uff1a"),(0,p.yg)("ol",null,(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/619"},"[webapp,doc] monitor detail support basic panel hide #619")," @tomsun28"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/624"},"add alarm notification period #624")," @Ceilzcx"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/631"},"[manager] support more mysql monitoring metrics #631")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/635"},"[unit test] Add unit test cases for KeyPairUtil #635")," @Daydreamer-ia"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/638"},"[test]feature:add AlertDefineService test #638")," @hudongdong129"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/639"},"[unit test] Add unit test cases for AlertTemplateUtil #639")," @Daydreamer-ia"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/642"},"[test] add junit WarehouseWorkerPoolTest #642")," @TherChenYang"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/647"},"task #614 [Add monitoring parameters for Redis Cluster and Sentinel] #647")," @hudongdong129"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/648"},"A minor refactoring of the class WarehouseWorkerPoolTest #648")," @HattoriHenzo"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/665"},"[task]feature:Optimize Redis info [section] and Add Redis command statistics #665")," @hudongdong129"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/672"},"[document]add redis help document #672")," @hudongdong129"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/674"},"Jupiter dependency is explicitly declared in the main pom file #674")," @HattoriHenzo"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/675"},"refactor monitor define yml, update doc #675")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/676"},"[task]support more window metrics #676")," @hudongdong129"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/678"},"support config monitoring define yml in web ui #678")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/679"},"support delete monitoring define yml in web ui #679")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/683"},"[manager] add mysql, oracle, pg db more metrics #683")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/684"},"[warehouse] support jpa store metrics history data #684")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/685"},"[collect]Add redis cluster auto-discovery display metrics information #685")," @hudongdong129"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/686"},"Convert version into properties #686")," @HattoriHenzo"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/708"},"[webapp] change default monitor intervals 120s to 60s #708")," @xiaohe428"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/691"},"[warehouse] support jpa expired metrics data auto cleaner #691")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/699"},"snmp collect protocol support walk operation #699")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/702"},"support v1.0.+ iotdb #702")," @Ceilzcx"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/705"},"feature support monitor switch network metrics #705")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/706"},"[webapp] change alert define trigger times from max 10 to max 999 #706")," @Grass-Life"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/725"},"[doc] change default locale i18n from zh-cn to en #725"))),(0,p.yg)("p",null,"Bugfix."),(0,p.yg)("ol",null,(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/618"},"[collector] bugfix oracle query error: ORA-01000 happen #618")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/622"},"[manager]bugfix:update flink fields name, use _ replace - avoid alert_threshold_expr problem. #622")," @cuipiheqiuqiu"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/628"},"[webapp] fix rule days not change when edit old notice rule item #628")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/630"},"[webapp] update alert notice modal item span #630")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/654"},"Update issue.md #654")," @ycilry"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/657"},"The version of Spring Boot should be put in properties #657")," @HattoriHenzo"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/659"},"Bugfix: EdDSA provider not supported #659")," @caibenxiang"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/662"},"[script] auto heap dump when oom error #662")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/663"},"bugfix recurring tasks caused by priority processing exception #663")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/664"},"bugfix repetitive collect tasks, reduce init mem size #664")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/680"},"[manager] bugfix define yml file name and the app name are inconsistent #680")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/682"},"[collector] bugfix metrics has a lot of repetition fields #682")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/687"},"fix(sec): upgrade org.apache.kafka:kafka-clients to 3.4.0 #687")," @lifefloating"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/690"},"optimized code and add iotdb compose config #690")," @Ceilzcx"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/719"},"[script] modified the linux memory metrics specified script code #719")," @ByteIDance"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/715"},"Update kubernetes.md #715")," @xiaohe428"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/716"},"[home,i18n] Update kubernetes.md #716")," @baiban114"),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/693"},"[webapp] fix applist delete button display #693")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/697"},"[warehouse] bugfix metrics data not consume oom #697")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/701"},"[manager] bugfix npe when load old define yml in windows env #701")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/723"},"bugfix job metrics set concurrent modification exception #723")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/719"},"[script] modified the linux memory metrics specified script code #719")),(0,p.yg)("li",{parentName:"ol"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/724"},"[webapp] bugfix the cover of the big screen is too small #724"))),(0,p.yg)("hr",null),(0,p.yg)("p",null,"\u5347\u7ea7\u6ce8\u610f\u26a0\ufe0f."),(0,p.yg)("p",null,"\u5bf9\u4e8e\u4e4b\u524d\u4f7f\u7528iotdb\u6216\u8005tdengine\u6765\u5b58\u50a8\u6307\u6807\u6570\u636e\u7684\u7528\u6237\uff0c\u9700\u8981\u4fee\u6539 application.yml \u6765\u5173\u95edJPA\u5b58\u50a8 ",(0,p.yg)("inlineCode",{parentName:"p"},"warehouse.store.jpa.enabled")," \u5982\u4e0b:"),(0,p.yg)("p",null,"\u4fee\u6539 ",(0,p.yg)("inlineCode",{parentName:"p"},"application.yml")," \u5e76\u8bbe\u7f6e ",(0,p.yg)("inlineCode",{parentName:"p"},"warehouse.store.jpa.enabled")," \u53c2\u6570\u4e3a false"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre"},"warehouse:\n  store:\n    jpa:\n      enabled: false\n")),(0,p.yg)("p",null,"\u6267\u884cSQL\u811a\u672c"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre"},"ALTER table hzb_monitor modify job_id bigint default null;\nCOMMIT;\n")),(0,p.yg)("hr",null),(0,p.yg)("h2",{id:"-supported"},"\u26c4 Supported"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"\u7f51\u7ad9\u76d1\u63a7,\xa0\u7aef\u53e3\u53ef\u7528\u6027,\xa0Http Api,\xa0Ping\u8fde\u901a\u6027,\xa0Jvm,\xa0SiteMap\u5168\u7ad9,\xa0Ssl\u8bc1\u4e66,\xa0SpringBoot, FTP\u670d\u52a1\u5668"),(0,p.yg)("li",{parentName:"ul"},"Mysql,\xa0PostgreSQL,\xa0MariaDB,\xa0Redis,\xa0ElasticSearch,\xa0SqlServer,\xa0Oracle,\xa0MongoDB,\xa0\u8fbe\u68a6,\xa0OpenGauss,\xa0ClickHouse,\xa0IoTDB, Redis\u96c6\u7fa4"),(0,p.yg)("li",{parentName:"ul"},"Linux,\xa0Ubuntu,\xa0CentOS,\xa0Windows"),(0,p.yg)("li",{parentName:"ul"},"Tomcat,\xa0Nacos,\xa0Zookeeper,\xa0RabbitMQ,\xa0Flink,\xa0Kafka,\xa0ShenYu,\xa0DynamicTp,\xa0Jetty,\xa0ActiveMQ"),(0,p.yg)("li",{parentName:"ul"},"Kubernetes,\xa0Docker"),(0,p.yg)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,p.yg)("li",{parentName:"ul"},"\u548c\u66f4\u591a\u4f60\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u3002"),(0,p.yg)("li",{parentName:"ul"},"\u901a\u77e5\u652f\u6301\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"Discord"),"\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"Slack"),"\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"Telegram"),"\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"\u90ae\u4ef6"),"\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"\u9489\u9489"),"\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"\u5fae\u4fe1"),"\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"\u98de\u4e66"),"\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"\u77ed\u4fe1"),"\xa0",(0,p.yg)("inlineCode",{parentName:"li"},"Webhook"),"\u3002")),(0,p.yg)("hr",null),(0,p.yg)("p",null,(0,p.yg)("strong",{parentName:"p"},"Github: ",(0,p.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,p.yg)("br",{parentName:"p"}),"\n",(0,p.yg)("strong",{parentName:"p"},"Gitee: ",(0,p.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))))}g.isMDXComponent=!0}}]);