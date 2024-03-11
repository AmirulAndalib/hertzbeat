"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[46800],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12214:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(58168),o=(a(96540),a(15680));const r={id:"iotdb-init",title:"Use Time Series Database IoTDB to Store Metrics Data (Optional)",sidebar_label:"Use IoTDB Store Metrics"},i=void 0,l={unversionedId:"start/iotdb-init",id:"version-v1.4.x/start/iotdb-init",title:"Use Time Series Database IoTDB to Store Metrics Data (Optional)",description:"HertzBeat's historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)",source:"@site/versioned_docs/version-v1.4.x/start/iotdb-init.md",sourceDirName:"start",slug:"/start/iotdb-init",permalink:"/docs/v1.4.x/start/iotdb-init",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/start/iotdb-init.md",tags:[],version:"v1.4.x",frontMatter:{id:"iotdb-init",title:"Use Time Series Database IoTDB to Store Metrics Data (Optional)",sidebar_label:"Use IoTDB Store Metrics"},sidebar:"docs",previous:{title:"Use VictoriaMetrics Store Metrics",permalink:"/docs/v1.4.x/start/victoria-metrics-init"},next:{title:"Use TDengine Store Metrics",permalink:"/docs/v1.4.x/start/tdengine-init"}},s={},c=[{value:"Install IoTDB via Docker",id:"install-iotdb-via-docker",level:3},{value:"FAQ",id:"faq",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.yg)("wrapper",(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"HertzBeat's historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)\nWe recommend VictoriaMetrics for long term support."),(0,o.yg)("p",null,"Apache IoTDB is a software system that integrates the collection, storage, management and analysis of time series data of the Internet of Things. We use it to store and analyze the historical data of monitoring metrics collected. Support V0.13+ version and V1.0.+ version.  "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Time series database is optional, but production environment configuration is strongly recommended to provide more complete historical chart functions and high performance"),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("strong",{parentName:"p"},"\u26a0\ufe0f If you do not configure a time series database, only the last hour of historical data is retained."),"  "),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"If you already have an IoTDB environment, you can skip directly to the YML configuration step.  ")),(0,o.yg)("h3",{id:"install-iotdb-via-docker"},"Install IoTDB via Docker"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Refer to the official website ",(0,o.yg)("a",{parentName:"p",href:"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"},"installation tutorial")),(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},"Download and install Docker environment",(0,o.yg)("br",{parentName:"li"}),"Docker tools download refer to ",(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker official document"),".\nAfter the installation you can check if the Docker version normally output at the terminal.",(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,o.yg)("li",{parentName:"ol"},"Install IoTDB via Docker  "))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 6667:6667 -p 31999:31999 -p 8181:8181 \\\n    -v /opt/iotdb/data:/iotdb/data \\ \n    --name iotdb \\\n    apache/iotdb:0.13.3-node\n")),(0,o.yg)("p",null,"   ",(0,o.yg)("inlineCode",{parentName:"p"},"-v /opt/iotdb/data:/iotdb/data")," is local persistent mount of IotDB data directory.",(0,o.yg)("inlineCode",{parentName:"p"},"/iotdb/data")," should be replaced with the actual local directory.\nuse",(0,o.yg)("inlineCode",{parentName:"p"},"$ docker ps")," to check if the database started successfully"),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure the database connection in hertzbeat ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"configuration file "),(0,o.yg)("p",{parentName:"li"},"Modify ",(0,o.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," configuration file",(0,o.yg)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0fThe docker container way need to mount application.yml file locally, while you can use installation package way to unzip and modify ",(0,o.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml"),(0,o.yg)("br",{parentName:"p"}),"\n","Config the ",(0,o.yg)("inlineCode",{parentName:"p"},"warehouse.store.jpa.enabled")," ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),". Replace ",(0,o.yg)("inlineCode",{parentName:"p"},"warehouse.store.iot-db")," data source parameters, HOST account and password.  "))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"warehouse:\n  store:\n    # disable JPA\n    jpa:\n      enabled: false\n    # enable iot-db\n    iot-db:\n      enabled: true\n      host: 127.0.0.1\n      rpc-port: 6667\n      username: root\n      password: root\n      # org.dromara.hertzbeat.warehouse.config.IotDbVersion: V_0_13 || V_1_0\n      version: V_0_13\n      query-timeout-in-ms: -1\n      # default '7776000000'\uff0890days,unit:ms,-1:no-expire\uff09\n      expire-time: '7776000000'\n")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Restart HertzBeat   ")),(0,o.yg)("h3",{id:"faq"},"FAQ"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Do both the time series databases IoTDB and TDengine need to be configured? Can they both be used?"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"You don't need to configure all of them, you can choose one of them. Use the enable parameter to control whether it is used or not. You can also install and configure neither, which only affects the historical chart data."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The historical chart of the monitoring page is not displayed, and pops up ","[Unable to provide historical chart data, please configure to rely on the time series database]"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"As shown in the pop-up window, the premise of displaying the history chart is to install and configure the dependent services of hertzbeat - IotDB database or TDengine database"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The TDengine database is installed and configured, but the page still displays a pop-up ","[Unable to provide historical chart data, please configure the dependent time series database]"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"Please check if the configuration parameters are correct",(0,o.yg)("br",{parentName:"p"}),"\n","Is td-engine enable set to true",(0,o.yg)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0fIf both hertzbeat and TDengine are started under the same host for docker containers, 127.0.0.1 cannot be used for communication between containers by default, and the host IP is changed",(0,o.yg)("br",{parentName:"p"}),"\n","You can check the startup logs according to the logs directory")))))}d.isMDXComponent=!0}}]);