"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[20077],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var o=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),h=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=h(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=h(a),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||n;return a?o.createElement(g,l(l({ref:t},s),{},{components:a})):o.createElement(g,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var h=2;h<n;h++)l[h]=a[h];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var o=a(58168),r=(a(96540),a(15680));const n={title:"HertzBeat v1.4.0 released, cluster is coming!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},l=void 0,i={permalink:"/blog/2023/08/14/hertzbeat-v1.4.0",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2023-08-14-hertzbeat-v1.4.0.md",source:"@site/blog/2023-08-14-hertzbeat-v1.4.0.md",title:"HertzBeat v1.4.0 released, cluster is coming!",description:"hertzBeat",date:"2023-08-14T00:00:00.000Z",formattedDate:"August 14, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:10.005,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat v1.4.0 released, cluster is coming!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},prevItem:{title:"Welcome to HertzBeat Community Committer!",permalink:"/blog/2023/08/28/new-committer"},nextItem:{title:"Open source monitoring HertzBeat v1.3.2 released, Easier to use",permalink:"/blog/2023/07/05/hertzbeat-v1.3.2"}},p={authorsImageUrls:[void 0]},h=[{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:3},{value:"Features",id:"features",level:3},{value:"The cluster version is coming",id:"the-cluster-version-is-coming",level:3},{value:"High performance cluster",id:"high-performance-cluster",level:4},{value:"Cloud Edge Collaboration",id:"cloud-edge-collaboration",level:4},{value:"Why open source cluster version?",id:"why-open-source-cluster-version",level:3},{value:"Install quickly via docker",id:"install-quickly-via-docker",level:3},{value:"What&#39;s Changed",id:"whats-changed",level:3},{value:"\u26c4 Supported",id:"-supported",level:2}],s={toc:h};function u(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,o.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"hertzBeat",src:a(56850).A,width:"4064",height:"2166"})),(0,r.yg)("h3",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"HertzBeat")," is an open source, real-time monitoring system with custom monitoring, high performance cluster and agentless capabilities."),(0,r.yg)("h3",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Combines ",(0,r.yg)("strong",{parentName:"li"},"monitoring, alarm, and notification")," features into one platform, and supports monitoring for web service, program, database, cache, os, webserver, middleware, bigdata, cloud-native, network, custom and more."),(0,r.yg)("li",{parentName:"ul"},"Easy to use and agentless, offering full web-based operations for monitoring and alerting with just a few clicks, all at zero learning cost."),(0,r.yg)("li",{parentName:"ul"},"Makes protocols such as ",(0,r.yg)("inlineCode",{parentName:"li"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," configurable, allowing you to collect any metrics by simply configuring the template ",(0,r.yg)("inlineCode",{parentName:"li"},"YML")," file online. Imagine being able to quickly adapt to a new monitoring type like K8s or Docker simply by configuring online with HertzBeat."),(0,r.yg)("li",{parentName:"ul"},"High performance, supports horizontal expansion of multi-collector clusters, multi-isolated network monitoring and cloud-edge collaboration."),(0,r.yg)("li",{parentName:"ul"},"Provides flexible alarm threshold rules and timely notifications delivered via  ",(0,r.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Email")," ",(0,r.yg)("inlineCode",{parentName:"li"},"DingDing")," ",(0,r.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,r.yg)("inlineCode",{parentName:"li"},"FeiShu")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Webhook")," ",(0,r.yg)("inlineCode",{parentName:"li"},"SMS"),".")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"HertzBeat's powerful customization, multi-type support, high performance, easy expansion, and low coupling, aims to help developers and teams quickly build their own monitoring system.      ")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"hertzBeat",src:a(72428).A,width:"2814",height:"1772"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Github: ",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Gitee: ",(0,r.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,r.yg)("h3",{id:"the-cluster-version-is-coming"},"The cluster version is coming"),(0,r.yg)("p",null,"Our previous hertzbeat has always been a stand-alone version. The component code is modular but does not support the independent deployment of the collector. The upper limit of the number of monitoring supported is naturally limited by a single node, and it cannot cope with the unified management of resources in multiple isolated networks.\nAfter more than a month of iterations, we rewrote the collection task scheduling, deployed the collectors independently, and designed the stand-alone version and the cluster version to use the same set of codes to facilitate subsequent maintenance and upgrades. The two modes of the stand-alone cluster can be switched without perception. In the end, I am very happy that the cluster version met with you as scheduled."),(0,r.yg)("p",null,"The cluster version not only brings us more powerful monitoring performance, but also has functions such as cloud-side collaboration that are full of imagination."),(0,r.yg)("h4",{id:"high-performance-cluster"},"High performance cluster"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Supports the deployment of collector clusters, multi-collector clusters scale horizontally, and exponentially improves the number of monitors and collection performance."),(0,r.yg)("li",{parentName:"ul"},"The monitoring task is self-scheduled in the collector cluster. A single collector hangs up and migrates the collection task without perceptual failure. Newly added collector nodes are automatically scheduled to share the collection pressure."),(0,r.yg)("li",{parentName:"ul"},"It is very convenient to switch between stand-alone mode and cluster mode and deploy without additional components.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"hertzbeat",src:a(99675).A,width:"2807",height:"911"})),(0,r.yg)("h4",{id:"cloud-edge-collaboration"},"Cloud Edge Collaboration"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Support the deployment of edge collector clusters, and cooperate with the main HertzBeat service cloud to improve collection capabilities.")),(0,r.yg)("p",null,"In the isolated network where multiple networks are not connected, in the previous solution, we needed to deploy a monitoring system on each network, which resulted in the incompatibility of data and inconvenient management, deployment and maintenance.\nHertzBeat provides cloud-edge collaboration capabilities. Edge collectors can be deployed on multiple isolated networks. When monitoring is added, collectors are specified. The collectors collect monitoring tasks within the isolated network, and report the collected data. The main HertzBeat service performs unified scheduling, management and display.\nThis is mostly used in unified monitoring scenarios of multiple isolated data centers or cloud resources and resources under the cloud of different vendors."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"hertzbeat",src:a(99675).A,width:"2807",height:"911"})),(0,r.yg)("h3",{id:"why-open-source-cluster-version"},"Why open source cluster version?"),(0,r.yg)("p",null,"Often, some strategies for making open source products that need to be commercialized will be to use the stand-alone version as a toy for the beginners of small players, and then use the cluster version as a closed-source product for paid players who need it. This model can be said to be very good and worthy of recognition, that is, to ensure that open source can also get benefits, and it is also applicable to the development strategy of many open source projects, and it may be more smooth on the business path.\nSome people on the Internet will sneer at such open source projects that are divided into stand-alone and cluster versions, thinking that they are pseudo-open source, and open source is a gimmick. They think that open source should be open source and free, and the open source team should contribute everything selflessly. . . . Very speechless people like this, there is only return for investment. When you use open source software for free and get value, should you think about what you have paid for open source software instead of just asking for it.\nSo back to the topic, why do we want an open source cluster version? Just because you love open source? If you say that we are still teenagers, you may believe this, but do you believe this when a person who is going to be 30 and has family responsibilities says this, I don\u2019t believe it myself\ud83d\ude02.\nFirst of all, let's take a look at what open source can bring, or why open source should be done. The idea of full-time open source at the beginning is very simple, to make your favorite open source product (realized), the programmer's dream can be deployed on thousands of servers (see the downloads have been realized), and then make money based on this open source product ( not crying yet)."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"User traffic. Open source projects are provided free of charge to users and developers, and have advantages in attracting users to use and promoting them."),(0,r.yg)("li",{parentName:"ul"},"User trust. Open source products are naturally easy to gain the trust and patience of users, or lower the threshold of trust for users."),(0,r.yg)("li",{parentName:"ul"},"Community collaboration. Open source products can attract top contributors to contribute together, receive user feedback issues, pr contributions, etc. Driven by the community, open source projects will become better and better, and more people will participate and use them after positive feedback. Community collaboration I think this is the meaning of open source, and this is not just the contribution code collaboration between programmers, users are all collaboration objects (for example, our project has a large number of operation and maintenance friends who contribute code and documents), if it is only code Open source without community collaboration, it is better to release an installation package for others to use and download for free."),(0,r.yg)("li",{parentName:"ul"},"Product ecology. This is required for some ecological products, such as hertzbeat, which need to support monitoring types that connect to various types of protocols, and a large number of monitoring templates. Only a good open source project ecology can attract other contributors to contribute and share, exchange what is needed in the ecology, and ultimately everyone will benefit from the ecology. This is difficult to do in closed source programs.")),(0,r.yg)("p",null,"The above points focus on community collaboration and product ecology. This is also the reason for the open source cluster version. Only open source products can be rolled into stronger product power. For example, the technical feature of cluster will naturally attract developers (and the cluster itself is The product of our community collaboration) will attract more users and contributors to use feedback and iterate together. The community drives and then positively promotes open source projects and satisfies user functional experience.\nAs for open source commercialization, the premise of open source commercialization is to have a really good, popular, and widely used open source product, and then do commercialization on this basis to make money."),(0,r.yg)("h3",{id:"install-quickly-via-docker"},"Install quickly via docker"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Just one command to get started:")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"or use quay.io (if dockerhub network connect timeout)")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Access ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:1157")," to start, default account: ",(0,r.yg)("inlineCode",{parentName:"p"},"admin/hertzbeat"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Deploy collector clusters"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker run -d -e IDENTITY=custom-collector-name -e MANAGER_IP=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector tancloud/hertzbeat-collector\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name")," : set the collector unique identity name."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-e MANAGER_IP=127.0.0.1")," : set the main hertzbeat server ip."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," : set the main hertzbeat server port, default 1158.")),(0,r.yg)("p",null,"Detailed config refer to ",(0,r.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Install HertzBeat via Docker")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"whats-changed"},"What's Changed"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Welcome to explore more new version updates, thanks to the hard work of the community partners, love \ud83d\udc97!")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[doc]"," add v1.3.2 publish doc by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1075"},"https://github.com/apache/hertzbeat/pull/1075")),(0,r.yg)("li",{parentName:"ul"},"remove elasticsearch unused param index by @Ceilzcx in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1080"},"https://github.com/apache/hertzbeat/pull/1080")),(0,r.yg)("li",{parentName:"ul"},"feature support monitoring apache airflow by @luoxuanzao in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1081"},"https://github.com/apache/hertzbeat/pull/1081")),(0,r.yg)("li",{parentName:"ul"},"add luoxuanzao as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1083"},"https://github.com/apache/hertzbeat/pull/1083")),(0,r.yg)("li",{parentName:"ul"},"[collector]"," bugfix sshd cannot use private key to connect by @gcdd1993 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1084"},"https://github.com/apache/hertzbeat/pull/1084")),(0,r.yg)("li",{parentName:"ul"},"bugfix update dashboard alerts cards height not consist by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1087"},"https://github.com/apache/hertzbeat/pull/1087")),(0,r.yg)("li",{parentName:"ul"},"Feature#serverchan by @zqr10159 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1092"},"https://github.com/apache/hertzbeat/pull/1092")),(0,r.yg)("li",{parentName:"ul"},"bugfix dm database monitoring connect error  by @lisongning in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1094"},"https://github.com/apache/hertzbeat/pull/1094")),(0,r.yg)("li",{parentName:"ul"},"add lisongning as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1096"},"https://github.com/apache/hertzbeat/pull/1096")),(0,r.yg)("li",{parentName:"ul"},'update alert rule operator display "<=" to ">=" by @Ceilzcx in ',(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1097"},"https://github.com/apache/hertzbeat/pull/1097")),(0,r.yg)("li",{parentName:"ul"},"[doc]","  add custom monitoring relate document by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1098"},"https://github.com/apache/hertzbeat/pull/1098")),(0,r.yg)("li",{parentName:"ul"},"add YutingNie as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1103"},"https://github.com/apache/hertzbeat/pull/1103")),(0,r.yg)("li",{parentName:"ul"},"Remove unreachable status by @YutingNie in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1102"},"https://github.com/apache/hertzbeat/pull/1102")),(0,r.yg)("li",{parentName:"ul"},"139 auto update alert status by @l646505418 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1104"},"https://github.com/apache/hertzbeat/pull/1104")),(0,r.yg)("li",{parentName:"ul"},"feat: aviator fn for str contains, exists & matches by @mikezzb in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1106"},"https://github.com/apache/hertzbeat/pull/1106")),(0,r.yg)("li",{parentName:"ul"},"add mikezzb as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1107"},"https://github.com/apache/hertzbeat/pull/1107")),(0,r.yg)("li",{parentName:"ul"},"bugfix common alarm do not need monitorId tag existed by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1108"},"https://github.com/apache/hertzbeat/pull/1108")),(0,r.yg)("li",{parentName:"ul"},"bugfix extern alert do not have labels mapping inner monitor by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1111"},"https://github.com/apache/hertzbeat/pull/1111")),(0,r.yg)("li",{parentName:"ul"},"feature: support apache spark metrics monitoring by @a-little-fool in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1114"},"https://github.com/apache/hertzbeat/pull/1114")),(0,r.yg)("li",{parentName:"ul"},"add a-little-fool as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1116"},"https://github.com/apache/hertzbeat/pull/1116")),(0,r.yg)("li",{parentName:"ul"},"[Feature]","Add third report of TenCloud by @zqr10159 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1113"},"https://github.com/apache/hertzbeat/pull/1113")),(0,r.yg)("li",{parentName:"ul"},"[Feature]","Add third report of TenCloud (#1113) by @zqr10159 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1119"},"https://github.com/apache/hertzbeat/pull/1119")),(0,r.yg)("li",{parentName:"ul"},"[manager]"," fix: can query by tags when tagValue is null by @l646505418 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1118"},"https://github.com/apache/hertzbeat/pull/1118")),(0,r.yg)("li",{parentName:"ul"},"bugfix the notification template environment variable display error by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1120"},"https://github.com/apache/hertzbeat/pull/1120")),(0,r.yg)("li",{parentName:"ul"},"add littlezhongzer as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1127"},"https://github.com/apache/hertzbeat/pull/1127")),(0,r.yg)("li",{parentName:"ul"},"feature:monitor brearer token api, ignore letter case to comparison by @littlezhongzer in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1122"},"https://github.com/apache/hertzbeat/pull/1122")),(0,r.yg)("li",{parentName:"ul"},"docs: enhance README by @mikezzb in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1128"},"https://github.com/apache/hertzbeat/pull/1128")),(0,r.yg)("li",{parentName:"ul"},"Update app-oracle.yml by @ChenXiangxxxxx in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1129"},"https://github.com/apache/hertzbeat/pull/1129")),(0,r.yg)("li",{parentName:"ul"},"add ChenXiangxxxxx as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1130"},"https://github.com/apache/hertzbeat/pull/1130")),(0,r.yg)("li",{parentName:"ul"},"fix alarm silence strategy setting failed by @Ceilzcx in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1131"},"https://github.com/apache/hertzbeat/pull/1131")),(0,r.yg)("li",{parentName:"ul"},"support run sql script file in jdbc protocol config by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1117"},"https://github.com/apache/hertzbeat/pull/1117")),(0,r.yg)("li",{parentName:"ul"},"bugfix return old cache json file when upgrade version by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1137"},"https://github.com/apache/hertzbeat/pull/1137")),(0,r.yg)("li",{parentName:"ul"},"support ssh protocol config choose if reuse connection by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1136"},"https://github.com/apache/hertzbeat/pull/1136")),(0,r.yg)("li",{parentName:"ul"},"feat(web): alert threshold UI support matches & contains by @mikezzb in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1138"},"https://github.com/apache/hertzbeat/pull/1138")),(0,r.yg)("li",{parentName:"ul"},"support hertzbeat metrics collector cluster by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1101"},"https://github.com/apache/hertzbeat/pull/1101")),(0,r.yg)("li",{parentName:"ul"},"add collector card in dashboard by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1147"},"https://github.com/apache/hertzbeat/pull/1147")),(0,r.yg)("li",{parentName:"ul"},"bugfix: linux collect warning: bad syntax, perhaps a bogus '-' by @Mr-zhou315 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1151"},"https://github.com/apache/hertzbeat/pull/1151")),(0,r.yg)("li",{parentName:"ul"},"add Mr-zhou315 as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1157"},"https://github.com/apache/hertzbeat/pull/1157")),(0,r.yg)("li",{parentName:"ul"},"support config timezone locale language region on web ui by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1154"},"https://github.com/apache/hertzbeat/pull/1154")),(0,r.yg)("li",{parentName:"ul"},"bugfix monitoring template app name already exists by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1152"},"https://github.com/apache/hertzbeat/pull/1152")),(0,r.yg)("li",{parentName:"ul"},"bugfix can not startup when error monitoring template yml file by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1153"},"https://github.com/apache/hertzbeat/pull/1153")),(0,r.yg)("li",{parentName:"ul"},"tags also deleted when the monitor is deleted by @Ceilzcx in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1159"},"https://github.com/apache/hertzbeat/pull/1159")),(0,r.yg)("li",{parentName:"ul"},"monitoring param host with http head will not be error reported by @littlezhongzer in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1155"},"https://github.com/apache/hertzbeat/pull/1155")),(0,r.yg)("li",{parentName:"ul"},"[script]"," feature update build.sh and Dockerfile: detect app version a\u2026 by @XimfengYao in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1162"},"https://github.com/apache/hertzbeat/pull/1162")),(0,r.yg)("li",{parentName:"ul"},"add XimfengYao as a contributor for code by @allcontributors in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1163"},"https://github.com/apache/hertzbeat/pull/1163")),(0,r.yg)("li",{parentName:"ul"},"[doc]"," add collector clusters document by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1161"},"https://github.com/apache/hertzbeat/pull/1161")),(0,r.yg)("li",{parentName:"ul"},"[hertzbeat]"," release hertzbeat version v1.4.0 by @tomsun28 in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1168"},"https://github.com/apache/hertzbeat/pull/1168"))),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"-supported"},"\u26c4 Supported"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,r.yg)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,r.yg)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,r.yg)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,r.yg)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,r.yg)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,r.yg)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,r.yg)("li",{parentName:"ul"},"Notifications support ",(0,r.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Mail")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Pinning")," ",(0,r.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,r.yg)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,r.yg)("inlineCode",{parentName:"li"},"SMS")," ",(0,r.yg)("inlineCode",{parentName:"li"},"Webhook"),".")),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Github: ",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Gitee: ",(0,r.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))))}u.isMDXComponent=!0},99675:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/cluster-arch-d829b210ab749a048ff6bedef09260b9.png"},72428:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/hertzbeat-arch-758b3f08da56310b5f1fe1d1bfd99d82.png"},56850:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/0-e6b0a393f2a8e43af9bf271c436a823d.png"}}]);