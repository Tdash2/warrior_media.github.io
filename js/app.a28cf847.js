(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],h=0,u=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"4ee7":function(t,e,n){"use strict";var a=n("6874"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("router-view")],1)},o=[],s={name:"app",data:function(){return{}},mounted:function(){},methods:{}},c=s,r=(n("034f"),n("2877")),l=Object(r["a"])(c,i,o,!1,null,null,null),d=l.exports,h=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4 col-md-3 col-lg-2"},[n("ChannelNav")],1),n("div",{staticClass:"col-sm-8 col-md-9 col-lg-10"},[t.loading&&0==t.broadcasts.length?n("b-alert",{attrs:{variant:"info",show:""}},[t._v("Loading Broadcasts...")]):t._e(),t.loading||0!=t.broadcasts.length?t._e():n("b-alert",{attrs:{variant:"info",show:""}},[t._v(" There are no broadcasts in the selected channel. ")]),t.listView?t._e():n("div",{staticClass:"row"},t._l(t.broadcasts,(function(e){return n("div",{key:e.id,staticClass:"col-sm-6 col-md-4 col-lg-3"},[n("BroadcastCard",{attrs:{broadcast:e,channelId:t.channelIdForBroadcastLink}})],1)})),0),t.listView?n("div",t._l(t.broadcasts,(function(e){return n("BroadcastRow",{key:e.id,attrs:{broadcast:e,channelId:t.channelIdForBroadcastLink}})})),1):t._e(),t.pagination.next?n("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px"}},[n("div",{staticClass:"col-sm-12"},[n("button",{staticClass:"btn btn-lg btn-secondary btn-block",attrs:{disabled:t.loading},on:{click:function(e){return t.getBroadcasts(!1,{p:t.pagination.next})}}},[t.loading?n("span",[t._v("Loading...")]):t._e(),t.loading?t._e():n("span",[t._v("Load More")])])])]):t._e()],1)])},g=[],f=(n("99af"),n("b0c0"),n("5530")),m=(n("4de4"),n("c975"),n("d3b7"),n("498a"),n("d4ec")),b=n("bee2"),v=n("ade3"),p={accountId:"qdzrlg9iq44wlzbz9nvf",channelId:"wy4ibizlyc6pzzercwzc",channelFilter:function(t){return!0}},C=window.boxcast;C||alert("BoxCast JavaScript library not found. Application will not function."),p&&p.accountId&&p.channelId||alert("BoxCast application portal not configured. Please ensure you have added your config.js");var _="https://api.boxcast.com";function w(t){return t.json()}var y=function(){function t(){Object(m["a"])(this,t),Object(v["a"])(this,"_data",{})}return Object(b["a"])(t,[{key:"set",value:function(t,e){this._data[t]=e}},{key:"get",value:function(t){return this._data[t]}}]),t}(),I=new y,x={getAccountChannelId:function(){return p.channelId},getAccount:function(){var t="account:".concat(p.accountId);return I.get(t)?Promise.resolve(I.get(t)):C.utils.fetch("".concat(_,"/accounts")).then(w).then((function(e){return I.set(t,e),e}))},getChannels:function(){var t="channels:".concat(p.accountId);return I.get(t)?Promise.resolve(I.get(t)):C.utils.fetch("".concat(_,"/accounts/").concat(p.accountId,"/channels")).then(w).then((function(t){return p.channelFilter?t.filter(p.channelFilter):t})).then((function(e){return I.set(t,e),e}))},getChannelById:function(t){var e="channel:".concat(t);return I.get(e)?Promise.resolve(I.get(e)):C.utils.fetch("".concat(_,"/channels/").concat(t)).then(w).then((function(t){return I.set(e,t),t}))},getChannelBroadcasts:function(t,e){var n={},a=e?"?".concat(C.utils.Util.qsFromObj(e)):"";return C.utils.fetch("".concat(_,"/channels/").concat(t,"/broadcasts").concat(a)).then((function(t){return n=JSON.parse(t.headers.get("X-Pagination")),t})).then(w).then((function(t){return{broadcasts:t,pagination:n}}))},getChannelHighlights:function(t,e){var n={},a=e?"?".concat(C.utils.Util.qsFromObj(e)):"";return C.utils.fetch("".concat(_,"/channels/").concat(t,"/highlights").concat(a)).then((function(t){return n=JSON.parse(t.headers.get("X-Pagination")),t})).then(w).then((function(t){return{highlights:t,pagination:n}}))},utils:{timeframe:function(t){return C.utils.broadcast.timeframe(t)},formatDuration:function(t){return C.utils.broadcast.duration(t)},formatRelative:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=C.utils.Clock.formatRelative(new Date(t));return a.indexOf("/")>-1?a:"".concat(e," ").concat(a," ").concat(n).trim()}}},k={name:"ChannelListView",data:function(){return{accountChannelId:p.channelId,listView:!!p.useListView,loading:!1,broadcasts:[],pagination:{},channelId:null,channelIdForBroadcastLink:null}},mounted:function(){this.initChannelId(),this.getBroadcasts()},watch:{$route:function(t,e){this.initChannelId(),this.getBroadcasts(),window.scrollTo(0,0)}},methods:{bgStyle:function(t){return{"background-image":'url("'.concat(t.preview,'")'),"background-size":"contain","background-repeat":"no-repeat","background-position":"50% 50%"}},initChannelId:function(){switch(this.$route&&"ChannelListView"===this.$route.name&&this.$route.params?this.channelId=this.$route.params.id:this.channelId=this.accountChannelId,this.channelIdForBroadcastLink=this.channelId,this.$route&&this.$route.name){case"LiveAndRecentListView":this.channelIdForBroadcastLink="live_recent";break;case"UpcomingListView":this.channelIdForBroadcastLink="upcoming";break}},getBroadcasts:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.channelId){var a="-starts_at",i="timeframe:relevant",o=20;switch(this.$route.name){case"LiveAndRecentListView":i="timeframe:current timeframe:past";break;case"UpcomingListView":i="timeframe:current timeframe:future",a="starts_at";break}n=Object(f["a"])({s:a,q:i,l:o},n),e&&(this.broadcasts=[]),this.loading=!0,x.getChannelBroadcasts(this.channelId,n).then((function(e){console.log(e),t.broadcasts=t.broadcasts.concat(e.broadcasts),t.pagination=e.pagination,t.loading=!1})).catch((function(t){console.error(t)}))}else console.warn("No channel ID provided for route")}}},L=k,S=Object(r["a"])(L,u,g,!1,null,"e2b8eba6",null),$=S.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4 col-md-3 col-lg-2"},[n("ChannelNav")],1),n("div",{staticClass:"col-sm-8 col-md-9 col-lg-10"},[t.loading&&0==t.highlights.length?n("b-alert",{attrs:{variant:"info",show:""}},[t._v("Loading Highlights...")]):t._e(),t.loading||0!=t.highlights.length?t._e():n("b-alert",{attrs:{variant:"info",show:""}},[t._v(" There are no highlights. ")]),n("div",{staticClass:"row"},t._l(t.highlights,(function(e){return n("div",{key:e.id,staticClass:"col-sm-6 col-md-4 col-lg-3"},[n("BroadcastCard",{attrs:{broadcast:e,channelId:t.channelIdForBroadcastLink}})],1)})),0),t.pagination.next?n("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px"}},[n("div",{staticClass:"col-sm-12"},[n("button",{staticClass:"btn btn-lg btn-secondary btn-block",attrs:{disabled:t.loading},on:{click:function(e){return t.getHighlights(!1,{p:t.pagination.next})}}},[t.loading?n("span",[t._v("Loading...")]):t._e(),t.loading?t._e():n("span",[t._v("Load More")])])])]):t._e()],1)])},O=[],j={name:"ChannelListView",data:function(){return{accountChannelId:x.getAccountChannelId(),loading:!1,highlights:[],pagination:{},channelId:x.getAccountChannelId(),channelIdForBroadcastLink:"highlights"}},mounted:function(){this.getHighlights()},watch:{$route:function(t,e){this.getHighlights(),window.scrollTo(0,0)}},methods:{getHighlights:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.channelId){var a="-streamed_at",i=20;n=Object(f["a"])({s:a,l:i},n),e&&(this.highlights=[]),this.loading=!0,x.getChannelHighlights(this.channelId,n).then((function(e){console.log(e),t.highlights=t.highlights.concat(e.highlights),t.pagination=e.pagination,t.loading=!1})).catch((function(t){console.error(t)}))}else console.warn("No channel ID provided for route")}}},V=j,E=Object(r["a"])(V,B,O,!1,null,"766e5837",null),R=E.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 text-left",staticStyle:{"margin-bottom":"15px"}},[t._v(" "+t._s(t.channelName)+" ")]),n("div",{class:(t.showChannelSelector,"col-sm-4 col-md-3 col-lg-2")},[n("ChannelNav")],1),n("div",{class:(t.showChannelSelector,"col-sm-8 col-md-9 col-lg-10")},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-9"},[t.loading?n("b-alert",{attrs:{variant:"info",show:""}},[t._v("Loading Broadcast...")]):t._e(),n("div",{ref:"boxcastContainerEl",attrs:{id:"boxcast-container"}})],1),n("div",{staticClass:"col-sm-3"})])])])},N=[],P={name:"ChannelListView",data:function(){return{accountChannelId:x.getAccountChannelId(),loading:!1,showChannelSelector:!1,relatedBroadcasts:[],broadcast:{},channelName:""}},mounted:function(){this.$refs.boxcastContainerEl?(this.context=boxcast("#".concat(this.$refs.boxcastContainerEl.id)),this.initChannelId(),this.getBroadcast()):console.warn("Unable to find ref to boxcastContainerEl",this.$refs)},destroyed:function(){this.context.unload()},watch:{$route:function(t,e){this.initChannelId(),this.getBroadcast(),window.scrollTo(0,0)}},methods:{toggleChannelSelector:function(){this.showChannelSelector=!this.showChannelSelector},initChannelId:function(){this.$route&&this.$route.query&&this.$route.query.channel_id?this.channelId=this.$route.query.channel_id:this.channelId=""},getBroadcast:function(){var t=this;this.broadcast={};var e=this.channelId;e&&"live_recent"!==e&&"upcoming"!==e||(console.log("Coercing special channel to account-level query",e),e=this.accountChannelId),this.context.loadChannel(e,{disableRedirectRulesOnLoad:!0,selectedBroadcastId:this.$route.params.broadcast_id,onLoadBroadcast:function(e){t.broadcast=e,t.loading=!1,t.relatedBroadcasts=boxcast.model.PlaylistStore.broadcasts.filter((function(e){return e.id!==t.broadcast.id})),t.channelName=boxcast.model.CurrentChannelStore.name},showTitle:!0,showDescription:!0,showRelated:!1})}}},A=P,F=Object(r["a"])(A,H,N,!1,null,null,null),q=F.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 text-left",staticStyle:{"margin-bottom":"15px"}},[t.showChannelSelector?t._e():n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{title:"Show Channel Selector"},on:{click:t.toggleChannelSelector}},[t._v(" > ")]),t.showChannelSelector?n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{title:"Hide Channel Selector"},on:{click:t.toggleChannelSelector}},[t._v(" < ")]):t._e(),t._v(" "+t._s(t.channelName)+" ")]),n("div",{class:t.showChannelSelector?"col-sm-4 col-md-3 col-lg-2":"col-sm-0"},[n("ChannelNav")],1),n("div",{class:t.showChannelSelector?"col-sm-8 col-md-9 col-lg-10":"col-sm-12"},[t.loading?n("b-alert",{attrs:{variant:"info",show:""}},[t._v("Loading Highlight ...")]):t._e(),n("h3",[t._v(t._s(t.highlight.name))]),n("div",{ref:"boxcastContainerEl",attrs:{id:"boxcast-container"}})],1)])},z=[],T={name:"ChannelListView",data:function(){return{accountChannelId:x.getAccountChannelId(),loading:!1,showChannelSelector:!0,highlight:{},channelName:""}},mounted:function(){this.$refs.boxcastContainerEl?(this.context=boxcast("#".concat(this.$refs.boxcastContainerEl.id)),this.getHighlight()):console.warn("Unable to find ref to boxcastContainerEl",this.$refs)},destroyed:function(){this.context.unload()},watch:{$route:function(t,e){this.getHighlight(),window.scrollTo(0,0)}},methods:{toggleChannelSelector:function(){this.showChannelSelector=!this.showChannelSelector},getHighlight:function(){var t=this;this.highlight={},this.context.loadHighlight(this.$route.params.highlight_id,{disableRedirectRulesOnLoad:!0,onLoadHighlight:function(e){console.log(e),t.highlight=e,t.loading=!1}})}}},M=T,D=Object(r["a"])(M,U,z,!1,null,null,null),J=D.exports;a["default"].use(h["a"]);var X=new h["a"]({routes:[{path:"/",name:"LiveAndRecentListView",component:$},{path:"/upcoming",name:"UpcomingListView",component:$},{path:"/highlights",name:"HighlightsListView",component:R},{path:"/channels/:id",name:"ChannelListView",component:$},{path:"/broadcasts/:broadcast_id",name:"BroadcastView",component:q},{path:"/highlights/:highlight_id",name:"HighlightView",component:J}]}),G=n("5f5b"),K=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",[n("b-list-group-item",{attrs:{href:"#/upcoming",active:"upcoming"==t.$route.query.channel_id||"UpcomingListView"==t.$route.name}},[t._v("Upcoming Broadcasts")]),n("b-list-group-item",{attrs:{href:"#/",active:"live_recent"==t.$route.query.channel_id||"LiveAndRecentListView"==t.$route.name}},[t._v("Live Broadcasts")]),t.loading?n("b-list-group-item",{attrs:{disabled:""}},[t._v("Loading Channels...")]):t._e(),t._l(t.channels,(function(e){return n("b-list-group-item",{key:e.id,attrs:{active:t.$route.query.channel_id==e.id||t.$route.params.id==e.id,href:"#/channels/"+e.id}},[t._v(t._s(e.name))])}))],2)}),Q=[],W={name:"ChannelNav",data:function(){return{loading:!1,channels:[]}},mounted:function(){this.getChannels()},methods:{getChannels:function(){var t=this;this.loading=!0,x.getChannels().then((function(e){t.channels=e,t.loading=!1})).catch((function(t){console.error(t)}))}}},Y=W,Z=(n("ae2b"),Object(r["a"])(Y,K,Q,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"card mb-4",attrs:{href:t.link,target:"_self"}},[n("div",{staticClass:"card-img-top"},[n("div",{staticClass:"fixed-16-9"},[t.broadcast.preview?n("div",{style:t.bgStyle},["current"==t.timeframe?n("div",{staticClass:"timeframe badge badge-danger"},[t._v(" LIVE ")]):t._e(),"future"==t.timeframe?n("div",{staticClass:"timeframe badge badge-warning"},[t._v(" Upcoming ")]):t._e(),"past"==t.timeframe||"recently-ended"==t.timeframe?n("div",{staticClass:"timeframe badge badge-secondary"},[t._v(" Recorded ")]):t._e()]):t._e(),t.broadcast.preview?t._e():n("div",{staticClass:"no-preview"},[t._v(" Preview not available "),"current"==t.timeframe?n("div",{staticClass:"timeframe badge badge-danger"},[t._v(" LIVE ")]):t._e(),"future"==t.timeframe?n("div",{staticClass:"timeframe badge badge-warning"},[t._v(" Upcoming ")]):t._e(),"past"==t.timeframe||"recently-ended"==t.timeframe?n("div",{staticClass:"timeframe badge badge-secondary"},[t._v(" Recorded ")]):t._e()])])]),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.broadcast.name))]),n("p",{staticClass:"card-text ellipse"},[n("small",[t._v(t._s(t.description))])])])])},nt=[],at=(n("a4d3"),n("e01a"),{name:"BroadcastCard",props:["broadcast","channelId"],data:function(){return{}},mounted:function(){},computed:{link:function(){return"highlights"===this.channelId?"#/highlights/".concat(this.broadcast.id):"#/broadcasts/".concat(this.broadcast.id,"?channel_id=").concat(this.channelId)},bgStyle:function(){return{"background-image":'url("'.concat(this.broadcast.preview,'")'),"background-size":"contain","background-repeat":"no-repeat","background-position":"50% 50%"}},timeframe:function(){return x.utils.timeframe(this.broadcast)},description:function(){var t="";switch(this.timeframe){case"future":t="Starts ".concat(x.utils.formatRelative(this.broadcast.starts_at,""));break;case"current":break;case"recently-ended":case"past":t="Ended ".concat(x.utils.formatRelative(this.broadcast.stops_at,"",""));break}return t&&this.broadcast.description?"".concat(t," - ").concat(this.broadcast.description):t||this.broadcast.description}},methods:{}}),it=at,ot=(n("b964"),Object(r["a"])(it,et,nt,!1,null,"7ac8a602",null)),st=ot.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"col-sm-2"},[n("a",{attrs:{href:t.link,target:"_self"}},[n("div",{staticClass:"fixed-16-9"},[t.broadcast.preview?n("div",{style:t.bgStyle}):t._e(),t.broadcast.preview?t._e():n("div",{staticClass:"no-preview"},[t._v("Preview not available")])])])]),n("div",{staticClass:"col-sm-8"},[n("h4",{staticClass:"card-title"},[n("a",{attrs:{href:t.link,target:"_self"}},[t._v(" "+t._s(t.broadcast.name)+" ")])]),n("p",{staticClass:"card-text ellipse"},[n("small",[t._v(t._s(t.description))])])]),n("div",{staticClass:"col-sm-2"},["current"==t.timeframe?n("div",{staticClass:"timeframe badge badge-danger"},[t._v(" LIVE ")]):t._e(),"future"==t.timeframe?n("div",{staticClass:"timeframe badge badge-warning"},[t._v(" Upcoming ")]):t._e(),"past"==t.timeframe||"recently-ended"==t.timeframe?n("div",{staticClass:"timeframe badge badge-secondary"},[t._v(" Recorded ")]):t._e()])])},rt=[],lt={name:"BroadcastRow",props:["broadcast","channelId"],data:function(){return{}},mounted:function(){},computed:{link:function(){return"highlights"===this.channelId?"#/highlights/".concat(this.broadcast.id):"#/broadcasts/".concat(this.broadcast.id,"?channel_id=").concat(this.channelId)},bgStyle:function(){return{"background-image":'url("'.concat(this.broadcast.preview,'")'),"background-size":"contain","background-repeat":"no-repeat","background-position":"50% 50%"}},timeframe:function(){return x.utils.timeframe(this.broadcast)},description:function(){var t="";switch(this.timeframe){case"future":t="Starts ".concat(x.utils.formatRelative(this.broadcast.starts_at,""));break;case"current":break;case"recently-ended":case"past":t="Ended ".concat(x.utils.formatRelative(this.broadcast.stops_at,"",""));break}return t&&this.broadcast.description?"".concat(t," - ").concat(this.broadcast.description):t||this.broadcast.description}},methods:{}},dt=lt,ht=(n("4ee7"),Object(r["a"])(dt,ct,rt,!1,null,"4559d9dd",null)),ut=ht.exports;a["default"].use(G["a"]),a["default"].component("ChannelNav",tt),a["default"].component("BroadcastCard",st),a["default"].component("BroadcastRow",ut),a["default"].config.productionTip=!1,new a["default"]({router:X,template:"<App/>",components:{App:d,ChannelNav:tt},render:function(t){return t(d)}}).$mount("#app")},6874:function(t,e,n){},"85ec":function(t,e,n){},ae2b:function(t,e,n){"use strict";var a=n("b444"),i=n.n(a);i.a},b444:function(t,e,n){},b964:function(t,e,n){"use strict";var a=n("f565"),i=n.n(a);i.a},f565:function(t,e,n){}});
//# sourceMappingURL=app.a28cf847.js.map