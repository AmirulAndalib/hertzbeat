"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[96936],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>s});var r=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),s=o,g=m["".concat(p,".").concat(s)]||m[s]||h[s]||n;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function s(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(58168),o=(a(96540),a(15680));const n={title:"HertzBeat v1.2.0 Released! Easy-to-use and friendly open source real-time monitoring tool",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},l=void 0,i={permalink:"/blog/2022/10/08/hertzbeat-v1.2.0",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2022-10-08-hertzbeat-v1.2.0.md",source:"@site/blog/2022-10-08-hertzbeat-v1.2.0.md",title:"HertzBeat v1.2.0 Released! Easy-to-use and friendly open source real-time monitoring tool",description:"v1.2.0",date:"2022-10-08T00:00:00.000Z",formattedDate:"October 8, 2022",tags:[{label:"opensource",permalink:"/blog/tags/opensource"}],readingTime:2.135,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat v1.2.0 Released! Easy-to-use and friendly open source real-time monitoring tool",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"HertzBeat v1.2.2\uff01Support K8S Monitor And More.",permalink:"/blog/2022/11/28/hertzbeat-v1.2.2"},nextItem:{title:"Best Practices for SSL Certificate Expiration Monitoring",permalink:"/blog/2022/09/10/ssl-practice"}},p={authorsImageUrls:[void 0]},c=[{value:"v1.2.0",id:"v120",level:2},{value:"Upgrade \u26a0\ufe0f",id:"upgrade-\ufe0f",level:3}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,o.yg)("wrapper",(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"v120"},"v1.2.0"),(0,o.yg)("p",null,"Home: hertzbeat.com | tancloud.cn"),(0,o.yg)("p",null,"Hi guys! HertzBeat v1.2.0 is coming. This version supports more powerful metrics collect jsonpath, upgrade springboot version to 2.7.4, support This version supports more powerful metrics collect jsonpath, upgrade springboot version to 2.7.4, support metrics unit convert display, and more. Fixed several bugs and improved the overall stable usability."),(0,o.yg)("p",null,"Only one docker command is needed to install and experience heartbeat:\n",(0,o.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,o.yg)("p",null,"Thanks to the contributors! \ud83d\udc4d\ud83d\udc4d @Ceilzcx @Privauto @VampireAchao @DreamGirl524 @CharlieXCL @emrys-he @SxLiuYu @tomsun28"),(0,o.yg)("p",null,"We urgently need contributors to test cases, new application monitoring, documentation, etc., and very welcome you to join. Come on! HertzBeat is so easy!"),(0,o.yg)("p",null,"Features. 1. [","[home,manager]","]"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/284"},"[home,manager]add practice learn doc and hertzbeat monitor yml #284")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/289"},"[webapp] auto redirect url when detect browser language #289")," contribute by @DreamGirl524"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/293"},"[home] update logo icon cdn url with fault tolerance #293")," contributed by @VampireAchao"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/295"},"[monitor] enable powerful jsonpath parser, add es metrics #295")," contributed by @Ceilzcx"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/296"},"[webapp] update ui theme #296")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/300"},"Feature change main pom artifactId #300")," contributed by @Privauto"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/302"},"[home,webapp] add users logo and update hertzbeat brand #302")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/305"},"[monitor] alerter notify test throw msg to front, optional spring.email config #305")," contributed by @Ceilzcx"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/306"},"[home]doc:update docker-deploy.md and tdengine-init.md #306")," contributed by @Privauto"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/320"},"[hertzbeat] refactor common collect metrics data and alert data queue #320")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/316"},"[hertzbeat] upgrade springboot version 2.4.13 to 2.7.4 #316")," contributed by @Privauto"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/322"},"[web-app] optimize the monitor detect feedback method #322")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/323"},"[github,webapp] add webapp ci action, fix eslint warning and upgrade codeql #323")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/324"},"[hertzbeat] add more unit test and test example #324")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/326"},"support metrics unit extract, convert and display #326")," contributed by @Ceilzcx"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/327"},"[common] optimize common aviator configuration #327"))),(0,o.yg)("p",null,"Bugfixes."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/283"},"[webapp,home] fix middle category icon and update home doc #283")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/286"},"[web-app] fix redirect when monitors app is null #286")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/297"},"[alerter] bugfix aviator expression match npe #297")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/294"},"[doc] fix project name error #294")," contributed by @CharlieXCL"),(0,o.yg)("li",{parentName:"ol"},"[","[common]",'feature:use "apache.http.conn.util" replace "sun.net.util" for upgrading java version #299](',(0,o.yg)("a",{parentName:"li",href:"https://github.com/dromara/"},"https://github.com/dromara/")," hertzbeat/pull/299) contributed by @Privauto"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/304"},"Update docker-deploy.md #304")," contributed by @emrys-he"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/313"},"fix(sec): upgrade snakeyaml to 1.31 #313")," contributed by @SxLiuYu"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/321"},"[script] add startup log and optimize port service judgment #321")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/325"},"[web-app] fix echarts y-axis value tip overflow #325")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/329"},"[webapp] fix interceptor http resp common error-msg when error #329"),"\nOnline ",(0,o.yg)("a",{parentName:"li",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),".")),(0,o.yg)("p",null,"Have Fun!"),(0,o.yg)("h3",{id:"upgrade-\ufe0f"},"Upgrade \u26a0\ufe0f"),(0,o.yg)("p",null,"Need Convert ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"spring.\n  resources: static-locations.\n    static-locations.\n      - classpath:/dist/\n      - classpath:... /dist/\n")),(0,o.yg)("p",null,"To\n``\nspring.\nweb.\nresources: static-locations.\nstatic-locations."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"classpath:/dist/"),(0,o.yg)("li",{parentName:"ul"},"classpath:... /dist/")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\n----\n")))}h.isMDXComponent=!0}}]);