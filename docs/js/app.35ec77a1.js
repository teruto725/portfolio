(function(t){function e(e){for(var a,n,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)n=c[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,c=1;c<r.length;c++){var s=r[c];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/portfolio/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1c8a":function(t,e,r){t.exports=r.p+"img/steam.d6c20b04.jpeg"},"1cf3":function(t,e,r){},"2db4":function(t,e,r){t.exports=r.p+"img/debi.7e9fc181.jpg"},"458a":function(t,e,r){t.exports=r.p+"img/azure_toeic.51679295.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background}},[r("head-bar"),r("v-main",[r("router-view")],1),r("v-footer",{attrs:{color:"primary","clipped-left":""}},[r("v-col",{staticClass:"primary py-4 text-center ",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Teru's Portfolio")])])],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"white"}},[a("v-app-bar",{attrs:{app:"",color:"primary","shrink-on-scroll":"",src:r("6b2a"),"fade-img-on-scroll":"",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{"align-with-title":"",grow:"",centered:"",dark:"",color:"white"}},[a("v-tabs-slider",{attrs:{color:"yellow"}}),a("v-tab",{attrs:{to:"/"}},[t._v("TOP")]),a("v-tab",{attrs:{to:"products"}},[t._v("PRODUCTS")]),a("v-tab",{attrs:{to:"enterprise"}},[t._v("Skills")])],1)]},proxy:!0}])},[a("v-toolbar-title",{staticClass:"h1"},[t._v("Teru's Portfolio")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",href:"https://twitter.com/teruto_725"}},[a("v-icon",{attrs:{color:"twitter"}},[t._v("mdi-twitter")])],1),a("v-btn",{attrs:{icon:"",href:"https://github.com/teruto725"}},[a("v-icon",{attrs:{color:"github"}},[t._v("mdi-github")])],1),a("v-btn",{attrs:{icon:"",href:"https://qiita.com/teruto725"}},[a("v-icon",{attrs:{color:"qiita"}},[t._v("mdi-alpha-q-circle")])],1),a("v-btn",{attrs:{icon:"",href:"https://terublog.hatenablog.com/"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-fountain-pen-tip")])],1)],1)],1)},c=[],s={name:"Header",data:function(){return{drawer:null,bar_icons:[{icon:"mdi-vuetify",link:"/consulting-and-support"},{icon:"mdi-discord",link:"/discord-community"},{icon:"mdi-bug",link:"/report-a-bug"},{icon:"mdi-github-face",link:"/guthub-issue-board"}]}}},l=s,u=r("2877"),p=r("6544"),f=r.n(p),d=r("40dc"),m=r("8336"),h=r("b0af"),v=r("132d"),b=r("2fa4"),g=r("71a3"),y=r("fe57"),w=r("9a96"),_=r("2a7f"),x=Object(u["a"])(l,n,c,!1,null,null,null),C=x.exports;f()(x,{VAppBar:d["a"],VBtn:m["a"],VCard:h["a"],VIcon:v["a"],VSpacer:b["a"],VTab:g["a"],VTabs:y["a"],VTabsSlider:w["a"],VToolbarTitle:_["a"]});var j={name:"App",components:{"head-bar":C},data:function(){return{}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}},V=j,T=r("7496"),k=r("62ad"),O=r("553a"),S=r("f6c4"),P=Object(u["a"])(V,i,o,!1,null,null,null),I=P.exports;f()(P,{VApp:T["a"],VCol:k["a"],VFooter:O["a"],VMain:S["a"]});var A=r("f309");a["a"].use(A["a"]);var E=new A["a"]({theme:{themes:{light:{primary:"#BEA28C",secondary:"#E8B499",thirdary:"#95CBCC",error:"#ffeb3b",warning:"#ffc107",info:"#ff5722",success:"#795548",background:"#E7D8A9",github:"#211F1F",facebook:"#3B5998",twitter:"#1DA1F2",qiita:"#4cb10d"}}}}),B=r("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("bar-title",{attrs:{title:"Welcome to my portfolio."}}),a("top-picture"),a("bar-title",{attrs:{title:"My name is Akihito Ihara."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"",src:r("c6d2"),title:"",text:"いい感じの写真これしか無いから<br>プロフィール写真いつもこれ..."}}),a("v-col",{attrs:{md:"auto"}},[a("v-row",[a("v-col",[a("v-card",{staticClass:"mx-auto",attrs:{height:"150",width:"310"}},[a("v-card-title",[t._v("Basic Profile")]),a("v-list",[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-human")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 22 years old")])],1)],1),a("v-list-item",{attrs:{href:"http://www.naist.jp/"}},[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-school")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 奈良先端大 情報科学領域 １年")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-map-marker-radius-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Nara ")])],1)],1),a("v-list-item",{attrs:{href:"https://twitter.com/teruto_725"}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"twitter"}},[t._v(" mdi-twitter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" @teruto_725 ")])],1)],1)],1)],1)],1)],1)],1)],1),a("bar-title",{attrs:{title:"I love them so much."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"https://www.youtube.com/channel/UCtHqD5chQk_SrMa9hnyWS8g",src:r("7693"),title:"映秀",text:"この子に憧れてギターを始めた<br>東京散歩って曲が一番好き<br>最近1stアルバム出た"}}),a("picture-card",{attrs:{href:"https://www.youtube.com/channel/UCjlmCrq4TP1I4xguOtJ-31w",src:r("2db4"),title:"でびでびでびる",text:"日々の癒やし、行動の活力<br>ときおり見せる優しい一面が好き"}}),a("picture-card",{attrs:{href:"https://www.youtube.com/channel/UCfBkUgaJ6eqYA9_TX2cmq9A",src:r("5705"),title:"理芽",text:"V-singer<br>儚い歌声が素敵<br> 楽曲がダークな感じでさらに素敵"}})],1),a("bar-title",{attrs:{title:"I'm usually doing them in my freetime."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"",src:r("1c8a"),title:"PCゲーム",text:"毎晩友達とゲームしてる<br>戦略とか考えるゲームが好き<br>最近のイチオシはSatisfactory"}}),a("picture-card",{attrs:{href:"",src:r("8a4a"),title:"ギター",text:"初めてもうすぐ２年<br>コードしか弾かないので全然上達しない<br>誰か教えて..."}}),a("picture-card",{attrs:{href:"",src:r("7c83"),title:"ボードゲーム",text:"研究室の教授の影響でハマりだした<br>研究室に残って20時くらいまで遊んでた<br> お気に入りはFate Grail War"}})],1),a("bar-title",{attrs:{title:"I love making products too."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("v-col",[a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"https://github.com/teruto725/ai_review_char",src:r("e301"),title:"かきかた先生",text:"小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"}}),a("picture-card",{attrs:{href:"https://terublog.hatenablog.com/entry/2019/04/16/160412",src:r("fb5d"),title:"ブラウザ英単語帳",text:"高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ90人突破してるのが自慢"}}),a("picture-card",{attrs:{href:"https://qiita.com/teruto725/items/4fb91aee55fbb6a37189",src:r("9fc1"),title:"TangoBot",text:"MS Teams上で動く単語帳bot<br>Azureで画像認識とかもしてくれる<br>ふざけた機能もいっぱいつけた"}})],1),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("v-col",{attrs:{md:"auto"}},[a("v-btn",{attrs:{elevation:"2","x-large":"",color:"thirdary"}},[t._v(" LOOK MORE")])],1)],1)],1)],1),a("bar-title",{attrs:{title:"Please visit other pages to get more infomation!."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}}),a("v-row",{attrs:{height:"100"}})],1)},q=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"8"}},[a("v-img",{attrs:{src:r("dd0d"),contain:""}})],1)],1)},M=[],H={name:"TopPicture"},D=H,F=r("adda"),R=r("0fd9"),U=Object(u["a"])(D,L,M,!1,null,null,null),z=U.exports;f()(U,{VCol:k["a"],VImg:F["a"],VRow:R["a"]});var J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-row",[r("div",{staticClass:"title-text"},[t._v(" "+t._s(t.getTitle)+" ")])])],1)],1)},G=[],N={name:"BarTitle",props:{title:{type:String}},data:function(){return{getTitle:this.title}}},W=N,Y=(r("c8df"),Object(u["a"])(W,J,G,!1,null,null,null)),K=Y.exports;f()(Y,{VCol:k["a"],VRow:R["a"]});var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{md:"auto"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[r("v-card",{staticClass:"picture-card",attrs:{height:"400",width:"300",elevation:a?12:3,color:"secondary",href:t.getHref}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"300",width:"300",src:t.getSrc}},[r("v-card-title",{staticClass:"font-weight-black thirdary--text"},[t._v(" "+t._s(t.getTitle)+" ")])],1),r("v-card-text",{domProps:{innerHTML:t._s(t.getText)}})],1)]}}])})],1)},X=[],Z={name:"PicutureCard",props:{src:{type:Object},text:{type:String},href:{type:String},title:{type:String}},data:function(){return{getSrc:this.src,getText:this.text,getHref:this.href,getTitle:this.title}}},tt=Z,et=r("99d9"),rt=r("ce87"),at=Object(u["a"])(tt,Q,X,!1,null,null,null),it=at.exports;f()(at,{VCard:h["a"],VCardText:et["a"],VCardTitle:et["b"],VCol:k["a"],VHover:rt["a"],VImg:F["a"]});var ot={name:"App",components:{"top-picture":z,"bar-title":K,"picture-card":it},data:function(){return{}}},nt=ot,ct=r("a523"),st=r("8860"),lt=r("da13"),ut=r("5d23"),pt=r("34c3"),ft=Object(u["a"])(nt,$,q,!1,null,null,null),dt=ft.exports;f()(ft,{VBtn:m["a"],VCard:h["a"],VCardTitle:et["b"],VCol:k["a"],VContainer:ct["a"],VIcon:v["a"],VList:st["a"],VListItem:lt["a"],VListItemContent:ut["a"],VListItemIcon:pt["a"],VListItemTitle:ut["b"],VRow:R["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("v-row",[a("v-col",[a("v-spacer")],1)],1),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"https://github.com/teruto725/ai_review_char",src:r("e301"),title:"かきかた先生",text:"小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"}}),a("picture-card",{attrs:{href:"https://github.com/teruto725/kingyo_learn",src:r("6383"),title:"金魚認識システム",text:"金魚の個体識別アプリ<br>CNNとTrackingを組み合わせて作った<br>残念なことに実際の環境では試せてない..."}}),a("picture-card",{attrs:{href:"https://qiita.com/teruto725/items/4fb91aee55fbb6a37189",src:r("9fc1"),title:"TangoBot",text:"MS Teams上で動く単語帳bot<br>Azureで画像認識とかもしてくれる<br>ふざけた機能もいっぱいつけた"}})],1),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"https://terublog.hatenablog.com/entry/2019/04/16/160412",src:r("fb5d"),title:"ブラウザ英単語帳",text:"高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ90人突破してるのが自慢"}}),a("picture-card",{attrs:{href:"https://terublog.hatenablog.com/entry/2019/02/08/154553",src:r("7c91"),title:"SSTimer",text:"技の時間を管理するタイマーアプリ<br>一瞬でめんどくさくなって使わなくなったのは内緒笑"}}),a("picture-card",{attrs:{href:"https://github.com/teruto725/hopers",src:r("a273"),title:"Hopers",text:"友達に頼まれて無料で作ったLP<br>結局チーム解散しちゃったらしくて悲しい..."}})],1),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"https://github.com/teruto725/python-online-game",src:r("f654"),title:"BoardCoder",text:"オンラインボードゲームシミュレータ<br>AIをプログラミングして対決する!<br>GUI完成したらみんなで遊びたい！"}}),a("picture-card",{attrs:{href:"https://terublog.hatenablog.com/entry/2019/02/08/154553",src:r("7b57"),title:"GameLog",text:"ゲームのレビューサイト<br>起業目指してる友達に相談されて作ったのに空中分解しちゃった..."}}),a("picture-card",{attrs:{href:"https://qiita.com/teruto725/items/2ebbac15637a11d9271d",src:r("458a"),title:"Azure-for-TOEIC",text:"TOEICの写真を撮ったら中の英単語抜き出してくれたりその他便利な機能いっぱい!<br>Azureの精度がもうちょっと良ければ..."}})],1),a("v-row",[a("v-col",[a("v-spacer")],1)],1)],1)},ht=[],vt={name:"App",components:{"picture-card":it},data:function(){return{}}},bt=vt,gt=Object(u["a"])(bt,mt,ht,!1,null,null,null),yt=gt.exports;f()(gt,{VCol:k["a"],VRow:R["a"],VSpacer:b["a"]});var wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("実装中...")])])}],xt={},Ct=Object(u["a"])(xt,wt,_t,!1,null,null,null),jt=Ct.exports;a["a"].use(B["a"]);var Vt=new B["a"]({mode:"history",base:"/portfolio/",routes:[{path:"/",name:"home",component:dt},{path:"/products",name:"products",component:yt},{path:"/enterprise",name:"enterprise",component:jt}]});a["a"].config.productionTip=!1,new a["a"]({vuetify:E,router:Vt,render:function(t){return t(I)}}).$mount("#app")},5705:function(t,e,r){t.exports=r.p+"img/rime.9cf5aa71.jpeg"},6383:function(t,e,r){t.exports=r.p+"img/kingyo.c1110afc.png"},"6b2a":function(t,e,r){t.exports=r.p+"img/header.f28dce7a.jpg"},7693:function(t,e,r){t.exports=r.p+"img/eisyu.5f15b43c.jpeg"},"7b57":function(t,e,r){t.exports=r.p+"img/gamelog.7ca89da6.png"},"7c83":function(t,e,r){t.exports=r.p+"img/boardgame.92721723.jpg"},"7c91":function(t,e,r){t.exports=r.p+"img/lol.c8197bd8.png"},"8a4a":function(t,e,r){t.exports=r.p+"img/guitor.be91ad8a.jpg"},"9fc1":function(t,e,r){t.exports=r.p+"img/tango_bot.32638de7.png"},a273:function(t,e,r){t.exports=r.p+"img/hoper.c3c3f721.png"},c6d2:function(t,e,r){t.exports=r.p+"img/my_picture.2dd1b462.jpg"},c8df:function(t,e,r){"use strict";r("1cf3")},dd0d:function(t,e,r){t.exports=r.p+"img/top_pic.d8b31594.png"},e301:function(t,e,r){t.exports=r.p+"img/kakikata.b6c72730.png"},f654:function(t,e,r){t.exports=r.p+"img/geschenkt-top.9a087c91.jpeg"},fb5d:function(t,e,r){t.exports=r.p+"img/wordbook.680881c1.png"}});
//# sourceMappingURL=app.35ec77a1.js.map