(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},o={app:0},n=[];function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"00dd":function(t,e,r){t.exports=r.p+"img/eisyu.5f15b43c.jpeg"},"0101":function(t,e,r){t.exports=r.p+"img/ruby.514befa7.svg"},"0686":function(t,e,r){"use strict";r("a6ff")},"0dcb":function(t,e,r){t.exports=r.p+"img/vue.22efb7c2.svg"},"15f7":function(t,e,r){t.exports=r.p+"img/python.51c2eab2.svg"},1661:function(t,e,r){var i={"./boardgame.jpg":"39c3","./debi.jpg":"abff","./eisyu.jpeg":"00dd","./guitor.jpg":"ac35","./rime.jpeg":"4ed4","./steam.jpeg":"7152"};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id="1661"},"1c68":function(t,e,r){t.exports=r.p+"img/majan.5947c0c2.jpeg"},"1cf3":function(t,e,r){},2456:function(t,e,r){t.exports=r.p+"img/atcoder.af4d67f9.jpeg"},2458:function(t,e,r){t.exports=r.p+"img/javascript.87711407.svg"},"28bc":function(t,e,r){t.exports=r.p+"img/icon_040623.d11fa778.svg"},"2bd1":function(t,e,r){t.exports=r.p+"img/azure-icon.5e14ad7b.svg"},"2f62":function(t,e,r){t.exports=r.p+"img/stock.ddf68951.svg"},"31a0":function(t,e,r){t.exports=r.p+"img/java.a732a6e5.svg"},3296:function(t,e,r){var i={"./azure_toeic.png":"cd50","./codeparty.png":"935d","./connecter.png":"a6f0","./gamelog.png":"52c3","./geschenkt-top.jpeg":"7766","./hoper.png":"c183","./kakikata.png":"6828","./kanji.gif":"b196","./kingyo.png":"3517","./lol.png":"7401","./majan.jpeg":"1c68","./tango_bot.png":"e944","./wordbook.png":"75b6","./wordbook2.png":"6e3c"};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id="3296"},3517:function(t,e,r){t.exports=r.p+"img/kingyo.c1110afc.png"},"39c3":function(t,e,r){t.exports=r.p+"img/boardgame.92721723.jpg"},4042:function(t,e,r){t.exports=r.p+"img/cv.0285adcd.svg"},"414b":function(t,e,r){},"4d81":function(t,e,r){},"4ed4":function(t,e,r){t.exports=r.p+"img/rime.9cf5aa71.jpeg"},"52c3":function(t,e,r){t.exports=r.p+"img/gamelog.7ca89da6.png"},"53fb":function(t,e,r){t.exports=r.p+"img/logo_bk.fff4f73e.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background}},[r("head-bar"),r("v-main",[r("router-view")],1),r("v-footer",{attrs:{color:"primary","clipped-left":""}},[r("v-col",{staticClass:"primary py-4 text-center ",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Teru's Portfolio")])])],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{color:"white"}},[i("v-app-bar",{attrs:{app:"",color:"primary","shrink-on-scroll":"",src:r("6b2a"),"fade-img-on-scroll":"",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[i("v-tabs",{attrs:{"align-with-title":"",grow:"",centered:"",dark:"",color:"white"}},[i("v-tabs-slider",{attrs:{color:"white"}}),i("v-tab",{attrs:{to:"/"}},[t._v("TOP")]),i("v-tab",{attrs:{to:"products"}},[t._v("PRODUCTS")]),i("v-tab",{attrs:{to:"skills"}},[t._v("Skills")]),i("v-tab",{attrs:{to:"experiences"}},[t._v("experiences")])],1)]},proxy:!0}])},[i("v-toolbar-title",{staticClass:"h1"},[t._v("Teru's Portfolio")]),i("v-spacer"),i("v-btn",{attrs:{icon:"",href:"https://twitter.com/teruto_725"}},[i("v-icon",{attrs:{color:"twitter"}},[t._v("mdi-twitter")])],1),i("v-btn",{attrs:{icon:"",href:"https://github.com/teruto725"}},[i("v-icon",{attrs:{color:"github"}},[t._v("mdi-github")])],1),i("v-btn",{attrs:{icon:"",href:"https://qiita.com/teruto725"}},[i("v-icon",{attrs:{color:"qiita"}},[t._v("mdi-alpha-q-circle")])],1),i("v-btn",{attrs:{icon:"",href:"https://terublog.hatenablog.com/"}},[i("v-icon",{attrs:{color:"black"}},[t._v("mdi-fountain-pen-tip")])],1)],1)],1)},s=[],c={name:"Header",data:function(){return{drawer:null,bar_icons:[{icon:"mdi-vuetify",link:"/consulting-and-support"},{icon:"mdi-discord",link:"/discord-community"},{icon:"mdi-bug",link:"/report-a-bug"},{icon:"mdi-github-face",link:"/guthub-issue-board"}]}}},l=c,u=r("2877"),p=r("6544"),f=r.n(p),d=r("40dc"),g=r("8336"),v=r("b0af"),m=r("132d"),h=r("2fa4"),b=r("71a3"),x=r("fe57"),y=r("9a96"),w=r("2a7f"),_=Object(u["a"])(l,a,s,!1,null,null,null),k=_.exports;f()(_,{VAppBar:d["a"],VBtn:g["a"],VCard:v["a"],VIcon:m["a"],VSpacer:h["a"],VTab:b["a"],VTabs:x["a"],VTabsSlider:y["a"],VToolbarTitle:w["a"]});var j={name:"App",components:{"head-bar":k},data:function(){return{}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}},C=j,V=r("7496"),T=r("62ad"),S=r("553a"),O=r("f6c4"),I=Object(u["a"])(C,o,n,!1,null,null,null),P=I.exports;f()(I,{VApp:V["a"],VCol:T["a"],VFooter:S["a"],VMain:O["a"]});var E=r("f309");i["a"].use(E["a"]);var L=new E["a"]({theme:{themes:{light:{primary:"#BEA28C",secondary:"#E8B499",thirdary:"#95CBCC",error:"#ffeb3b",warning:"#ffc107",info:"#ff5722",success:"#795548",background:"#E7D8A9",github:"#211F1F",facebook:"#3B5998",twitter:"#1DA1F2",qiita:"#4cb10d"}}}}),M=r("8c4f"),D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("bar-title",{attrs:{title:"Welcome to my portfolio."}}),i("bar-title",{attrs:{title:"My name is Akihito Ihara."}}),i("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[i("picture-card",{attrs:{href:"",src:r("c6d2"),title:"プロフィール画像",text:"いい感じの写真これしか無いから<br>プロフィール写真いつもこれ..."}}),i("v-card",{staticClass:"ma-5",attrs:{height:"300",width:"300"}},[i("v-card-title",[t._v("Basic Profile")]),i("v-list",[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v(" mdi-human")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" 22 years old")])],1)],1),i("v-list-item",{attrs:{href:"http://www.naist.jp/"}},[i("v-list-item-icon",[i("v-icon",[t._v(" mdi-school")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" 奈良先端大 M1")])],1)],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v(" mdi-map-marker-radius-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" Nara ")])],1)],1),i("v-list-item",{attrs:{href:"https://twitter.com/teruto_725"}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:"twitter"}},[t._v(" mdi-twitter")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" @teruto_725 ")])],1)],1)],1)],1)],1),i("bar-title",{attrs:{title:"I love them so much."}}),i("v-row",{staticClass:"content-area",attrs:{justify:"center"}},t._l(t.card_loves,(function(t){return i("picture-card",{key:t.title,attrs:{src:r("1661")("./"+t.src),title:t.title,href:t.href,text:t.text}})})),1),i("bar-title",{attrs:{title:"I'm usually doing them in my freetime."}}),i("v-row",{staticClass:"content-area",attrs:{justify:"center"}},t._l(t.card_hobbys,(function(t){return i("picture-card",{key:t.title,attrs:{src:r("1661")("./"+t.src),title:t.title,href:t.href,text:t.text}})})),1),i("bar-title",{attrs:{title:"I love making products too."}}),i("v-row",{staticClass:"content-area",attrs:{justify:"center"}},t._l(t.card_products,(function(t){return i("picture-card",{key:t.title,attrs:{src:r("3296")("./"+t.src),title:t.title,href:t.href,text:t.text}})})),1),i("bar-title",{attrs:{title:"If you're interested me, check out the other pages!"}}),i("v-row",{staticClass:"content-area",attrs:{justify:"center"}}),i("v-row",{attrs:{height:"200"}})],1)},B=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-row",[r("div",{staticClass:"title-text"},[t._v(" "+t._s(t.getTitle)+" ")])])],1)],1)},R=[],N={name:"BarTitle",props:{title:{type:String}},data:function(){return{getTitle:this.title}}},F=N,H=(r("c8df"),r("0fd9")),U=Object(u["a"])(F,A,R,!1,null,null,null),$=U.exports;f()(U,{VCol:T["a"],VRow:H["a"]});var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[r("v-card",{staticClass:"picture-card ma-5",attrs:{height:"300",width:"300",elevation:i&&""!=t.href?12:3,color:"secondary",href:t.getHref}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:300,width:"300",src:t.getSrc}},[r("v-card-title",{staticClass:"font-weight-black white--text card-title"},[r("v-row",[r("div",{staticClass:"card-title-text"},[t._v(" "+t._s(t.getTitle)+" ")]),r("v-spacer"),r("v-icon",{staticClass:"card-icon",attrs:{medium:"",color:"white"}},[t._v(" "+t._s(i?"mdi-arrow-down-bold-box-outline":"mdi-arrow-up-bold-box-outline")+" ")])],1)],1),r("v-expand-transition",[i?r("div",[r("v-card-text",{staticClass:"card-text",domProps:{innerHTML:t._s(t.getText)}})],1):t._e()])],1)],1)]}}])})},z=[],J={name:"PicutureCard",props:{src:{type:String},text:{type:String},href:{type:String},title:{type:String}},data:function(){return{getSrc:this.src,getText:this.text,getHref:this.href,getTitle:this.title}}},G=J,Y=(r("a60f"),r("99d9")),W=r("0789"),K=r("ce87"),Q=r("adda"),X=Object(u["a"])(G,q,z,!1,null,null,null),Z=X.exports;f()(X,{VCard:v["a"],VCardText:Y["b"],VCardTitle:Y["c"],VExpandTransition:W["a"],VHover:K["a"],VIcon:m["a"],VImg:Q["a"],VRow:H["a"],VSpacer:h["a"]});var tt={name:"App",components:{"bar-title":$,"picture-card":Z},data:function(){return{card_loves:[{title:"映秀",src:"eisyu.jpeg",href:"https://www.youtube.com/channel/UCtHqD5chQk_SrMa9hnyWS8g",text:"この子に憧れてギターを始めた<br>東京散歩って曲が一番好き<br>最近1stアルバム出た"},{title:"でびでびでびる",src:"debi.jpg",href:"https://www.youtube.com/channel/UCjlmCrq4TP1I4xguOtJ-31w",text:"日々の癒やし、行動の活力<br>ときおり見せる優しい一面が好き"},{title:"理芽",src:"rime.jpeg",href:"https://www.youtube.com/channel/UCfBkUgaJ6eqYA9_TX2cmq9A",text:"V-singer<br>儚い歌声が素敵<br> 楽曲がダークな感じでさらに素敵"}],card_hobbys:[{title:"PCゲーム",src:"steam.jpeg",href:"",text:"毎晩友達とゲームしてる<br>戦略とか考えるゲームが好き<br>最近のイチオシはSatisfactory"},{title:"ギター",src:"guitor.jpg",href:"",text:"初めてもうすぐ２年<br>コードしか弾かないので全然上達しない<br>誰か教えて..."},{title:"ボードゲーム",src:"boardgame.jpg",href:"",text:"研究室の教授の影響でハマりだした<br>研究室に残って20時くらいまで遊んでた<br> お気に入りはFate Grail War"}],card_products:[{title:"かきかた先生",src:"kakikata.png",href:"https://github.com/teruto725/ai_review_char",text:"小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"},{title:"ブラウザ英単語帳",src:"wordbook.png",href:"https://terublog.hatenablog.com/entry/2019/04/16/160412",text:"高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ100人突破してるのが自慢"}],card_skills:[{}]}}},et=tt,rt=(r("c064"),r("a523")),it=r("8860"),ot=r("da13"),nt=r("5d23"),at=r("34c3"),st=Object(u["a"])(et,D,B,!1,null,"6e7b1439",null),ct=st.exports;f()(st,{VCard:v["a"],VCardTitle:Y["c"],VContainer:rt["a"],VIcon:m["a"],VList:it["a"],VListItem:ot["a"],VListItemContent:nt["a"],VListItemIcon:at["a"],VListItemTitle:nt["b"],VRow:H["a"]});var lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("v-row",[i("v-col",[i("v-spacer")],1)],1),i("v-row",{staticClass:"content-area",attrs:{justify:"center"}},t._l(t.card_products,(function(t){return i("picture-card",{key:t.title,attrs:{src:r("3296")("./"+t.src),title:t.title,href:t.href,text:t.text}})})),1),i("v-row",[i("v-col",[i("v-spacer")],1)],1)],1)},ut=[],pt={name:"App",components:{"picture-card":Z},data:function(){return{card_products:[{title:"どこでも麻雀卓",src:"majan.jpeg",href:"https://github.com/jphacks/B_2106",text:"JPHacksというコンテストのプロダクト<br>優勝した！！！"},{title:"Codeparty",src:"codeparty.png",href:"https://github.com/teruto725/codeparty-front",text:"対戦型オンラインプログラミングコンテスト<br>チームで絶賛開発中"},{title:"連絡帳アプリ",src:"connecter.png",href:"https://github.com/teruto725/connecter-front",text:"5daysインターンシップで制作した。<br>フロントエンドを担当した。<br>自分的にうまく作れた！"},{title:"ブラウザ英単語帳v2",src:"wordbook2.png",href:"https://github.com/teruto725/wordbook-front",text:"VueとRailsの勉強で制作した！RailsのResqueとか新しい学びもあった。"},{title:"かきかた先生",src:"kakikata.png",href:"https://github.com/teruto725/ai_review_char",text:"小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"},{title:"金魚認識システム",src:"kingyo.png",href:"https://github.com/teruto725/kingyo_learn",text:"金魚の個体識別アプリ<br>CNNとTrackingを組み合わせて作った<br>残念なことに実際の環境では試せてない..."},{title:"かきかた先生",src:"kakikata.png",href:"https://github.com/teruto725/ai_review_char",text:"小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"},{title:"TangoBot",src:"tango_bot.png",href:"https://qiita.com/teruto725/items/4fb91aee55fbb6a37189",text:"MS Teams上で動く単語帳bot<br>Azureで画像認識とかもしてくれる<br>ふざけた機能もいっぱいつけた"},{title:"ブラウザ英単語帳",src:"wordbook.png",href:"https://github.com/teruto725/browser-wordbook",text:"高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ90人突破してるのが自慢"},{title:"SSTimer",src:"lol.png",href:"https://terublog.hatenablog.com/entry/2019/02/08/154553",text:"スキルの時間を管理するタイマーアプリ<br>一瞬でめんどくさくなって使わなくなったのは内緒笑"},{title:"Hopers",src:"hoper.png",href:"https://github.com/teruto725/hopers",text:"友達に頼まれて無料で作ったLP<br>結局チーム解散しちゃったらしくて悲しい..."},{title:"BoardCoder",src:"geschenkt-top.jpeg",href:"https://github.com/teruto725/python-online-game",text:"オンラインボードゲームシミュレータ<br>AIをプログラミングして対決する!<br>GUI完成したらみんなで遊びたい！"},{title:"GameLog",src:"gamelog.png",href:"https://terublog.hatenablog.com/entry/2019/02/08/154553",text:"ゲームのレビューサイト<br>起業目指してる友達に相談されて作ったのに空中分解しちゃった..."},{title:"Azure-for-TOEIC",src:"azure_toeic.png",href:"https://qiita.com/teruto725/items/2ebbac15637a11d9271d",text:"TOEICの写真を撮ったら中の英単語抜き出してくれたりその他便利な機能いっぱい!<br>Azureの精度がもうちょっと良ければ..."}]}}},ft=pt,dt=(r("649a"),Object(u["a"])(ft,lt,ut,!1,null,"2367c927",null)),gt=dt.exports;f()(dt,{VCol:T["a"],VRow:H["a"],VSpacer:h["a"]});var vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",[i("div",{staticClass:"title-text"},[t._v(" I use these programming languages. ")])])],1)],1),i("v-row",{attrs:{justify:"center"}},t._l(t.skills,(function(e){return i("skill-card",{key:e.title,ref:"skillCards",refInFor:!0,attrs:{position:t.position,title:e.title,src:r("67f7")("./"+e.src),stars:e.stars,text:e.text}})})),1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",[i("div",{staticClass:"title-text"},[t._v(" My strength is Practical ML skill. ")])]),i("v-row",{attrs:{justify:"center"}},t._l(t.mlbuttons,(function(t){return i("dialog-button",{key:t.title,attrs:{title:t.title,text:t.text}})})),1)],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",[i("div",{staticClass:"title-text"},[t._v(" I have knowledge of these ML fields. ")])]),i("v-row",{attrs:{justify:"center"}},t._l(t.mlfields,(function(e){return i("skill-card",{key:e.title,ref:"skillCards",refInFor:!0,attrs:{position:t.position,title:e.title,src:r("67f7")("./"+e.src),stars:e.stars,text:e.text}})})),1)],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",[i("div",{staticClass:"title-text"},[t._v(" I have a knowledge of web application too. ")])]),i("v-row",{attrs:{justify:"center"}},t._l(t.skills_web,(function(e){return i("skill-card",{key:e.title,ref:"skillCards",refInFor:!0,attrs:{position:t.position,title:e.title,src:r("67f7")("./"+e.src),stars:e.stars,text:e.text}})})),1)],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",[i("div",{staticClass:"title-text"},[t._v(" Other Skills ")])]),i("v-row",{attrs:{justify:"center"}},t._l(t.otherskills,(function(e){return i("skill-card",{key:e.title,ref:"skillCards",refInFor:!0,attrs:{position:t.position,title:e.title,src:r("67f7")("./"+e.src),stars:e.stars,text:e.text}})})),1)],1)],1)],1)},mt=[],ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[r("v-card",{staticClass:"skill-card white--text opacity : 0 ma-8",attrs:{id:"card-"+t.getTitle,width:"200",height:"200",elevation:"0",align:"center"}},[r("v-expand-transition",[i||t.openDescription?r("v-card",{staticClass:" transition-fast-in-fast-out orange darken-2 v-card--reveal  white--text",staticStyle:{height:"100%"}},[r("v-card-title",{attrs:{align:"center"}},[t._v(t._s(t.getTitle))]),r("v-card-text",{staticClass:"white--text",domProps:{innerHTML:t._s(t.getText)}})],1):t._e()],1),r("v-img",{staticClass:"white--text ma-2",attrs:{height:"150",width:"150",src:t.getSrc,contain:""}}),r("v-rating",{attrs:{"background-color":"glay lighten-3",color:"orange",value:t.getStars,readonly:""}})],1)]}}])})},bt=[],xt=(r("a9e3"),{name:"SkillCard",props:{src:{type:String},title:{type:String},stars:{type:Number},text:{type:String},position:{type:Number}},data:function(){return{getSrc:this.src,getTitle:this.title,getStars:this.stars,getText:this.text,getPosition:this.position,cardTop:0}},watch:{position:function(t){this.getPosition=t}},computed:{openDescription:function(){return this.getPosition+200>this.cardTop||!1}},mounted:function(){this.cardTop=document.getElementById("card-".concat(this.getTitle)).getBoundingClientRect().top+window.pageYOffset}}),yt=xt,wt=(r("9732"),r("1d4d")),_t=Object(u["a"])(yt,ht,bt,!1,null,"700c7712",null),kt=_t.exports;f()(_t,{VCard:v["a"],VCardText:Y["b"],VCardTitle:Y["c"],VExpandTransition:W["a"],VHover:K["a"],VImg:Q["a"],VRating:wt["a"]});var jt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{justify:"center",align:"center"}},[r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{color:"black",height:"200",width:"200",outlined:"",tile:"",text:""}},"v-btn",o,!1),i),[r("div",{staticClass:"btn-text"},[t._v(" "+t._s(t.getTitle)+" ")])])]}},{key:"default",fn:function(e){return[r("v-card",[r("v-toolbar",{staticClass:"text-h6",attrs:{color:"primary",dark:""}},[t._v(t._s(t.getTitle))]),r("v-card-text",[r("div",{staticClass:"text-body1 pa-12 "},[t._v(t._s(t.getText))])]),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{attrs:{text:""},on:{click:function(t){e.value=!1}}},[t._v("Close")])],1)],1)]}}])})],1)},Ct=[],Vt={name:"DialogButton",props:{title:{type:String},text:{type:String}},data:function(){return{getTitle:this.title,getText:this.text}}},Tt=Vt,St=r("169a"),Ot=r("71d9"),It=Object(u["a"])(Tt,jt,Ct,!1,null,null,null),Pt=It.exports;f()(It,{VBtn:g["a"],VCard:v["a"],VCardActions:Y["a"],VCardText:Y["b"],VCol:T["a"],VDialog:St["a"],VToolbar:Ot["a"]});var Et={components:{"skill-card":kt,"dialog-button":Pt},data:function(){return{position:0,skills:[{title:"Python",src:"python.svg",stars:5,text:"競技プログラミングや研究、インターン等で日常的に使う。基本、応用文法はもちろん、一般的なライブラリは大体使ったことある。"},{title:"Java",src:"java.svg",stars:4,text:"高専時代はメインで使用していた。基礎は完璧で、Swing等のライブラリも使えるので、学習すれば知らないライブラリでも対応できる。"},{title:"JavaScript",src:"javascript.svg",stars:4,text:"調べながらなら全然かける。"},{title:"C#",src:"c-sharp.svg",stars:3,text:"これもちょくちょく書く言語、Javaと類似しているので基本的にサクサク書ける。"},{title:"Ruby",src:"ruby.svg",stars:2,text:"Railsを使う際に使用する。体系的に一回勉強すれば一週間程度で使えるようになる。"}],skills_web:[{title:"Flask",src:"flask.svg",stars:3,text:"割と頻繁に使う。基礎は復習しながらかける。"},{title:"Django",src:"django.svg",stars:3,text:"何回かコンテストで書いた経験がある。基礎は復習しながらかける。"},{title:"Vue",src:"vue.svg",stars:4,text:"一通りサクサク使えます。Vue-routerやVuexも大丈夫です。"},{title:"Ruby on Rails",src:"rails.svg",stars:4,text:"サーバーサイドを書くときは基本これ。"}],mlbuttons:[{title:"Data\n Analyzing",text:"インターンで1年近くMLOps業務を行っています。また研究も高専5年生から3年間以上取り組んでいます。これらの経験からビックデータを与えられたときに、そのデータを整形し、可視化し、読み手に有益な価値提供を高いレベルで行うことが出来ます。"},{title:"Project\nfrom Zero",text:"プログラミングコンテストではブルーオーシャンで勝負することになるため、データセットすらない状態からプロジェクトがスタートします。そんなコンテストをくぐり抜けてきた経験から、ゼロからMLプロジェクトを遂行する力があります。"},{title:"Modeling",text:"機械学習コンペに複数回参加経験があります。コンテストやインターンを通して画像認識、自然言語処理を中心にモデル作成経験が豊富にあります。これらの経験から適切に素早くモデルを作成する事ができます。"}],mlfields:[{title:"自然言語処理",src:"nlp.svg",stars:5,text:"研究で使用したためかなり知見がある。前処理からBERTくらいまで使える。"},{title:"画像処理",src:"cv.svg",stars:4,text:"コンテストでガッツリ書いた。OpenCVの基本ができて、CNNを用いた学習ができる。"},{title:"時系列処理",src:"stock.svg",stars:4,text:"インターンのタスクが時系列分析だったので、ノウハウがある。"}],otherskills:[{title:"競技プログラミング",src:"atcoder.jpeg",stars:3,text:"Rating: 840、 緑　（上位30%くらい)、アルゴリズム問題は大体解けるくらい。"},{title:"TOEIC",src:"toeic.jpeg",stars:3,text:"L&Rスコア780点、海外短期留学で1ヶ月間シンガポールのNYPに行った。"},{title:"オブジェクト指向",src:"ooj.png",stars:4,text:"研究で触れてきた。基本的なクラス設計が得意で保守性の高いコードを設計、コーディングできる。"}]}},mounted:function(){window.addEventListener("scroll",this.scrollEvent),this.scrollEvent()},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollEvent)},methods:{scrollEvent:function(){this.position=document.documentElement.scrollTop||document.body.scrollTop}}},Lt=Et,Mt=(r("0686"),Object(u["a"])(Lt,vt,mt,!1,null,"1e9b3291",null)),Dt=Mt.exports;f()(Mt,{VCol:T["a"],VRow:H["a"]});var Bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("bar-title",{attrs:{title:"These are my Experiences."}}),r("v-timeline",{attrs:{dense:""}},t._l(t.years,(function(e){return r("v-timeline-item",{key:e},[r("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(e.year))]),r("v-card",{staticClass:"elevation-2"},[r("v-card-title",{staticClass:"text-h5 card-title white--text font-weight-black"},[t._v(" "+t._s(e.title)+" ")]),r("v-banner",[t._v(t._s(e.overview))]),r("v-card-text",t._l(e.contents,(function(e){return r("v-list-item",{key:e,attrs:{href:e.url}},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"item-text",domProps:{textContent:t._s(e.text)}})],1),r("v-chip-group",t._l(e.tags,(function(e){return r("v-chip",{key:e,attrs:{outlined:"",small:"",left:""}},[t._v(" "+t._s(e)+" ")])})),1),e.url?r("v-btn",{attrs:{icon:"",href:e.url}},[r("v-icon",[t._v(" mdi-link ")])],1):t._e()],1)})),1)],1)],1)})),1)],1)],1)],1)},At=[],Rt={components:{"bar-title":$},data:function(){return{years:[{year:"2014~2019",title:"奈良高専 情報工学科",overview:"部活と課題とテスト勉強、バイトの日々でした。",contents:[{url:"",icon:"mdi-basketball",text:"剣道部 副キャプテン",tags:[]},{url:"",icon:"mdi-school",text:"卒業研究",tags:["研究"]}]},{year:"2019~2021",title:"奈良高専 専攻科 情報システムコース",overview:"プログラミング・コンテストにのめり込んだ２年間でした。",contents:[{url:"https://terublog.hatenablog.com/entry/2020/11/10/215131",icon:"mdi-crown",text:"高専プロコン2020",tags:["プロコン"]},{url:"",icon:"mdi-crown",text:"朝日新聞自然言語処理コンペ",tags:["MLコンペ"]},{url:"",icon:"mdi-crown",text:"Peakers Twitterコンペ",tags:["MLコンペ"]},{url:"https://terublog.hatenablog.com/entry/2021/02/14/174806",icon:"mdi-crown",text:"高専DCON2021",tags:["プロコン"]},{url:"",icon:"mdi-briefcase",text:"ダイナミックプライシングテクノロジー",tags:["エンジニアバイト"]},{url:"https://terublog.hatenablog.com/entry/2021/02/16/235502",icon:"mdi-crown",text:"BranCo!2021",tags:["ビジコン"]},{url:"https://terublog.hatenablog.com/entry/2020/10/08/181656",icon:"mdi-earth",text:"Nanyang Polytechnic",tags:["短期留学"]},{url:"",icon:"mdi-briefcase",text:"高専キャリア",tags:["エンジニアバイト"]},{url:"",icon:"mdi-crown",text:"RPAビジネスプランコンテスト",tags:["ビジコン"]},{url:"",icon:"mdi-school",text:"卒業研究",tags:["研究"]}]},{year:"2021~2023",title:"奈良先端科学技術大学院大学 情報科学領域",overview:"研究と就活を頑張る！",contents:[{url:"",icon:"mdi-school",text:"ソフトウェアシンポジウム2021",tags:["学会"]},{url:"",icon:"mdi-briefcase",text:"株式会社カラビナテクノロジー",tags:["エンジニアバイト"]},{url:"",icon:"mdi-crown",text:"Geiot",tags:["ハッカソン","ビジコン"]},{url:"",icon:"mdi-briefcase",text:"株式会社Datafluct",tags:["エンジニアバイト","機械学習エンジニア"]},{url:"",icon:"mdi-briefcase",text:"日本ユニシス株式会社",tags:["短期インターン"]},{url:"https://terublog.hatenablog.com/entry/2021/09/18/163034",icon:"mdi-briefcase",text:"freee株式会社",tags:["長期インターン"]},{url:"",icon:"mdi-briefcase",text:"株式会社d-tosh",tags:["エンジニアバイト","フロントエンドエンジニア"]},{url:"",icon:"mdi-school",text:"SS2021",tags:["学会"]},{url:"https://terublog.hatenablog.com/entry/2022/01/01/023841",icon:"mdi-briefcase",text:"ヤフー株式会社",tags:["インターン","バックエンドエンジニア"]},{url:"",icon:"mdi-crown",text:"立命館大学 学生ベンチャーコンテスト",tags:["ビジコン"]},{url:"https://terublog.hatenablog.com/entry/2021/12/24/032526",icon:"mdi-crown",text:"JPHACKS2021:Best Hack Award受賞",tags:["ハッカソン"]},{url:"",icon:"mdi-school",text:"SIGSS 2022",tags:["学会"]},{url:"",icon:"mdi-briefcase",text:"楽天グループ株式会社",tags:["長期インターン","Perlエンジニア"]}]}]}}},Nt=Rt,Ft=(r("799e"),r("e4e5")),Ht=r("cc20"),Ut=r("ef9a"),$t=r("8414"),qt=r("1e06"),zt=Object(u["a"])(Nt,Bt,At,!1,null,null,null),Jt=zt.exports;f()(zt,{VBanner:Ft["a"],VBtn:g["a"],VCard:v["a"],VCardText:Y["b"],VCardTitle:Y["c"],VChip:Ht["a"],VChipGroup:Ut["a"],VCol:T["a"],VContainer:rt["a"],VIcon:m["a"],VListItem:ot["a"],VListItemContent:nt["a"],VListItemIcon:at["a"],VListItemTitle:nt["b"],VRow:H["a"],VTimeline:$t["a"],VTimelineItem:qt["a"]}),i["a"].use(M["a"]);var Gt=new M["a"]({mode:"hash",base:"/portfolio/",routes:[{path:"/",name:"home",component:ct},{path:"/products",name:"products",component:gt},{path:"/skills",name:"skills",component:Dt},{path:"/experiences",name:"experiences",component:Jt},{path:"*",name:"top",component:ct}]});i["a"].config.productionTip=!1,new i["a"]({vuetify:L,router:Gt,render:function(t){return t(P)}}).$mount("#app")},"5c08":function(t,e,r){t.exports=r.p+"img/icon_042963.ddf68951.svg"},"5cb1":function(t,e,r){t.exports=r.p+"img/pytorch.f93ae9fa.svg"},"649a":function(t,e,r){"use strict";r("7cd4")},"67f7":function(t,e,r){var i={"./atcoder.jpeg":"2456","./azure-icon.svg":"2bd1","./c-sharp.svg":"bd36","./cv.svg":"4042","./django.svg":"d031","./flask.svg":"bde8","./html-5.svg":"98b0","./icon-rainbow.zip":"9b95","./icon_040623.svg":"28bc","./icon_042963.svg":"5c08","./icooon-mono.zip":"b530","./java.svg":"31a0","./javascript.svg":"2458","./logo_bk.svg":"53fb","./nlp.svg":"7c3f","./numpy.svg":"f1c4","./ooj.png":"97ec","./opencv.svg":"84cc","./python.svg":"15f7","./pytorch.svg":"5cb1","./rails.svg":"7f10","./ruby.svg":"0101","./stock.svg":"2f62","./toeic.jpeg":"c4a0","./vue.svg":"0dcb","./vuetifyjs.svg":"b536"};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id="67f7"},6828:function(t,e,r){t.exports=r.p+"img/kakikata.b6c72730.png"},"6b2a":function(t,e,r){t.exports=r.p+"img/header.f28dce7a.jpg"},"6e3c":function(t,e,r){t.exports=r.p+"img/wordbook2.6cbd4220.png"},7152:function(t,e,r){t.exports=r.p+"img/steam.d6c20b04.jpeg"},7401:function(t,e,r){t.exports=r.p+"img/lol.c8197bd8.png"},"75b6":function(t,e,r){t.exports=r.p+"img/wordbook.680881c1.png"},7766:function(t,e,r){t.exports=r.p+"img/geschenkt-top.9a087c91.jpeg"},"799e":function(t,e,r){"use strict";r("bd8d")},"7c3f":function(t,e,r){t.exports=r.p+"img/nlp.a9d031f8.svg"},"7cd4":function(t,e,r){},"7f10":function(t,e,r){t.exports=r.p+"img/rails.2db29782.svg"},"84cc":function(t,e,r){t.exports=r.p+"img/opencv.95689ea1.svg"},"935d":function(t,e,r){t.exports=r.p+"img/codeparty.24f45234.png"},9732:function(t,e,r){"use strict";r("414b")},"97ec":function(t,e,r){t.exports=r.p+"img/ooj.23e831ec.png"},"98b0":function(t,e,r){t.exports=r.p+"img/html-5.24845c5c.svg"},"9b95":function(t,e){throw new Error("Module parse failed: Unexpected character '' (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},a60f:function(t,e,r){"use strict";r("4d81")},a6f0:function(t,e,r){t.exports=r.p+"img/connecter.dbb987cc.png"},a6ff:function(t,e,r){},abff:function(t,e,r){t.exports=r.p+"img/debi.7e9fc181.jpg"},ac35:function(t,e,r){t.exports=r.p+"img/guitor.be91ad8a.jpg"},b196:function(t,e,r){t.exports=r.p+"img/kanji.961b32c6.gif"},b530:function(t,e){throw new Error("Module parse failed: Unexpected character '' (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},b536:function(t,e,r){t.exports=r.p+"img/vuetifyjs.a1d6f016.svg"},bd36:function(t,e,r){t.exports=r.p+"img/c-sharp.bdaccca2.svg"},bd8d:function(t,e,r){},bde8:function(t,e,r){t.exports=r.p+"img/flask.318d58cb.svg"},c064:function(t,e,r){"use strict";r("ef30")},c183:function(t,e,r){t.exports=r.p+"img/hoper.c3c3f721.png"},c4a0:function(t,e,r){t.exports=r.p+"img/toeic.24cf39ec.jpeg"},c6d2:function(t,e,r){t.exports=r.p+"img/my_picture.2dd1b462.jpg"},c8df:function(t,e,r){"use strict";r("1cf3")},cd50:function(t,e,r){t.exports=r.p+"img/azure_toeic.51679295.png"},d031:function(t,e,r){t.exports=r.p+"img/django.ee0526fa.svg"},e944:function(t,e,r){t.exports=r.p+"img/tango_bot.32638de7.png"},ef30:function(t,e,r){},f1c4:function(t,e,r){t.exports=r.p+"img/numpy.fb8cd346.svg"}});
//# sourceMappingURL=app.a129fefc.js.map