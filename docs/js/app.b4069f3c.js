(function(t){function e(e){for(var a,n,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)n=s[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0101":function(t,e,r){t.exports=r.p+"img/ruby.514befa7.svg"},"0dcb":function(t,e,r){t.exports=r.p+"img/vue.22efb7c2.svg"},"15f7":function(t,e,r){t.exports=r.p+"img/python.51c2eab2.svg"},"1c8a":function(t,e,r){t.exports=r.p+"img/steam.d6c20b04.jpeg"},"1cf3":function(t,e,r){},2458:function(t,e,r){t.exports=r.p+"img/javascript.87711407.svg"},"2bd1":function(t,e,r){t.exports=r.p+"img/azure-icon.5e14ad7b.svg"},"2db4":function(t,e,r){t.exports=r.p+"img/debi.7e9fc181.jpg"},"31a0":function(t,e,r){t.exports=r.p+"img/java.a732a6e5.svg"},"43ac":function(t,e,r){},"458a":function(t,e,r){t.exports=r.p+"img/azure_toeic.51679295.png"},"476a":function(t,e,r){"use strict";r("56b5")},"4d81":function(t,e,r){},"56b5":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background}},[r("head-bar"),r("v-main",[r("router-view")],1),r("v-footer",{attrs:{color:"primary","clipped-left":""}},[r("v-col",{staticClass:"primary py-4 text-center ",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Teru's Portfolio")])])],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"white"}},[a("v-app-bar",{attrs:{app:"",color:"primary","shrink-on-scroll":"",src:r("6b2a"),"fade-img-on-scroll":"",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{"align-with-title":"",grow:"",centered:"",dark:"",color:"white"}},[a("v-tabs-slider",{attrs:{color:"yellow"}}),a("v-tab",{attrs:{to:"/"}},[t._v("TOP")]),a("v-tab",{attrs:{to:"products"}},[t._v("PRODUCTS")]),a("v-tab",{attrs:{to:"enterprise"}},[t._v("Skills")])],1)]},proxy:!0}])},[a("v-toolbar-title",{staticClass:"h1"},[t._v("Teru's Portfolio")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",href:"https://twitter.com/teruto_725"}},[a("v-icon",{attrs:{color:"twitter"}},[t._v("mdi-twitter")])],1),a("v-btn",{attrs:{icon:"",href:"https://github.com/teruto725"}},[a("v-icon",{attrs:{color:"github"}},[t._v("mdi-github")])],1),a("v-btn",{attrs:{icon:"",href:"https://qiita.com/teruto725"}},[a("v-icon",{attrs:{color:"qiita"}},[t._v("mdi-alpha-q-circle")])],1),a("v-btn",{attrs:{icon:"",href:"https://terublog.hatenablog.com/"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-fountain-pen-tip")])],1)],1)],1)},s=[],c={name:"Header",data:function(){return{drawer:null,bar_icons:[{icon:"mdi-vuetify",link:"/consulting-and-support"},{icon:"mdi-discord",link:"/discord-community"},{icon:"mdi-bug",link:"/report-a-bug"},{icon:"mdi-github-face",link:"/guthub-issue-board"}]}}},l=c,u=r("2877"),p=r("6544"),f=r.n(p),d=r("40dc"),v=r("8336"),g=r("b0af"),b=r("132d"),m=r("2fa4"),h=r("71a3"),x=r("fe57"),y=r("9a96"),w=r("2a7f"),_=Object(u["a"])(l,n,s,!1,null,null,null),C=_.exports;f()(_,{VAppBar:d["a"],VBtn:v["a"],VCard:g["a"],VIcon:b["a"],VSpacer:m["a"],VTab:h["a"],VTabs:x["a"],VTabsSlider:y["a"],VToolbarTitle:w["a"]});var j={name:"App",components:{"head-bar":C},data:function(){return{}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}},T=j,k=r("7496"),V=r("62ad"),S=r("553a"),O=r("f6c4"),P=Object(u["a"])(T,i,o,!1,null,null,null),E=P.exports;f()(P,{VApp:k["a"],VCol:V["a"],VFooter:S["a"],VMain:O["a"]});var I=r("f309");a["a"].use(I["a"]);var A=new I["a"]({theme:{themes:{light:{primary:"#BEA28C",secondary:"#E8B499",thirdary:"#95CBCC",error:"#ffeb3b",warning:"#ffc107",info:"#ff5722",success:"#795548",background:"#E7D8A9",github:"#211F1F",facebook:"#3B5998",twitter:"#1DA1F2",qiita:"#4cb10d"}}}}),L=r("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("bar-title",{attrs:{title:"Welcome to my portfolio."}}),a("top-picture"),a("bar-title",{attrs:{title:"My name is Akihito Ihara."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"",src:r("c6d2"),title:"",text:"いい感じの写真これしか無いから<br>プロフィール写真いつもこれ..."}}),a("v-col",{attrs:{md:"auto"}},[a("v-row",[a("v-col",[a("v-card",{staticClass:"mx-auto",attrs:{height:"150",width:"310"}},[a("v-card-title",[t._v("Basic Profile")]),a("v-list",[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-human")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 22 years old")])],1)],1),a("v-list-item",{attrs:{href:"http://www.naist.jp/"}},[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-school")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 奈良先端大 情報科学領域 １年")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-map-marker-radius-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Nara ")])],1)],1),a("v-list-item",{attrs:{href:"https://twitter.com/teruto_725"}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"twitter"}},[t._v(" mdi-twitter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" @teruto_725 ")])],1)],1)],1)],1)],1)],1)],1)],1),a("bar-title",{attrs:{title:"I love them so much."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"https://www.youtube.com/channel/UCtHqD5chQk_SrMa9hnyWS8g",src:r("7693"),title:"映秀",text:"この子に憧れてギターを始めた<br>東京散歩って曲が一番好き<br>最近1stアルバム出た"}}),a("picture-card",{attrs:{href:"https://www.youtube.com/channel/UCjlmCrq4TP1I4xguOtJ-31w",src:r("2db4"),title:"でびでびでびる",text:"日々の癒やし、行動の活力<br>ときおり見せる優しい一面が好き"}}),a("picture-card",{attrs:{href:"https://www.youtube.com/channel/UCfBkUgaJ6eqYA9_TX2cmq9A",src:r("5705"),title:"理芽",text:"V-singer<br>儚い歌声が素敵<br> 楽曲がダークな感じでさらに素敵"}})],1),a("bar-title",{attrs:{title:"I'm usually doing them in my freetime."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"",src:r("1c8a"),title:"PCゲーム",text:"毎晩友達とゲームしてる<br>戦略とか考えるゲームが好き<br>最近のイチオシはSatisfactory"}}),a("picture-card",{attrs:{href:"",src:r("8a4a"),title:"ギター",text:"初めてもうすぐ２年<br>コードしか弾かないので全然上達しない<br>誰か教えて..."}}),a("picture-card",{attrs:{href:"",src:r("7c83"),title:"ボードゲーム",text:"研究室の教授の影響でハマりだした<br>研究室に残って20時くらいまで遊んでた<br> お気に入りはFate Grail War"}})],1),a("bar-title",{attrs:{title:"I love making products too."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("v-col",[a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"https://github.com/teruto725/ai_review_char",src:r("e301"),title:"かきかた先生",text:"小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"}}),a("picture-card",{attrs:{href:"https://terublog.hatenablog.com/entry/2019/04/16/160412",src:r("fb5d"),title:"ブラウザ英単語帳",text:"高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ90人突破してるのが自慢"}}),a("picture-card",{attrs:{href:"https://qiita.com/teruto725/items/4fb91aee55fbb6a37189",src:r("9fc1"),title:"TangoBot",text:"MS Teams上で動く単語帳bot<br>Azureで画像認識とかもしてくれる<br>ふざけた機能もいっぱいつけた"}})],1),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("v-col",{attrs:{md:"auto"}},[a("v-btn",{attrs:{elevation:"2","x-large":"",color:"thirdary"}},[t._v(" LOOK MORE")])],1)],1)],1)],1),a("bar-title",{attrs:{title:"Please visit other pages to get more infomation!."}}),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}}),a("v-row",{attrs:{height:"100"}})],1)},B=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"8"}},[a("v-img",{attrs:{src:r("dd0d"),contain:""}})],1)],1)},$=[],q={name:"TopPicture"},H=q,R=r("adda"),z=r("0fd9"),F=Object(u["a"])(H,D,$,!1,null,null,null),U=F.exports;f()(F,{VCol:V["a"],VImg:R["a"],VRow:z["a"]});var J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-row",[r("div",{staticClass:"title-text"},[t._v(" "+t._s(t.getTitle)+" ")])])],1)],1)},N=[],G={name:"BarTitle",props:{title:{type:String}},data:function(){return{getTitle:this.title}}},W=G,Y=(r("c8df"),Object(u["a"])(W,J,N,!1,null,null,null)),K=Y.exports;f()(Y,{VCol:V["a"],VRow:z["a"]});var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{md:"auto"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[r("v-card",{staticClass:"picture-card",attrs:{height:"400",width:"300",elevation:a?12:3,color:"secondary",href:t.getHref}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"300",width:"300",src:t.getSrc}},[r("v-card-title",{staticClass:"font-weight-black thirdary--text"},[t._v(" "+t._s(t.getTitle)+" ")])],1),r("v-card-text",{domProps:{innerHTML:t._s(t.getText)}})],1)]}}])})],1)},X=[],Z={name:"PicutureCard",props:{src:{type:Object},text:{type:String},href:{type:String},title:{type:String}},data:function(){return{getSrc:this.src,getText:this.text,getHref:this.href,getTitle:this.title}}},tt=Z,et=(r("a60f"),r("99d9")),rt=r("ce87"),at=Object(u["a"])(tt,Q,X,!1,null,null,null),it=at.exports;f()(at,{VCard:g["a"],VCardText:et["b"],VCardTitle:et["c"],VCol:V["a"],VHover:rt["a"],VImg:R["a"]});var ot={name:"App",components:{"top-picture":U,"bar-title":K,"picture-card":it},data:function(){return{}}},nt=ot,st=(r("73fc"),r("a523")),ct=r("8860"),lt=r("da13"),ut=r("5d23"),pt=r("34c3"),ft=Object(u["a"])(nt,M,B,!1,null,"18a64479",null),dt=ft.exports;f()(ft,{VBtn:v["a"],VCard:g["a"],VCardTitle:et["c"],VCol:V["a"],VContainer:st["a"],VIcon:b["a"],VList:ct["a"],VListItem:lt["a"],VListItemContent:ut["a"],VListItemIcon:pt["a"],VListItemTitle:ut["b"],VRow:z["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("v-row",[a("v-col",[a("v-spacer")],1)],1),a("v-row",{staticClass:"content-area",attrs:{justify:"center"}},[a("picture-card",{attrs:{href:"https://github.com/teruto725/ai_review_char",src:r("e301"),title:"かきかた先生",text:"小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"}}),a("picture-card",{attrs:{href:"https://github.com/teruto725/kingyo_learn",src:r("6383"),title:"金魚認識システム",text:"金魚の個体識別アプリ<br>CNNとTrackingを組み合わせて作った<br>残念なことに実際の環境では試せてない..."}}),a("picture-card",{attrs:{href:"https://qiita.com/teruto725/items/4fb91aee55fbb6a37189",src:r("9fc1"),title:"TangoBot",text:"MS Teams上で動く単語帳bot<br>Azureで画像認識とかもしてくれる<br>ふざけた機能もいっぱいつけた"}}),a("picture-card",{attrs:{href:"https://terublog.hatenablog.com/entry/2019/04/16/160412",src:r("fb5d"),title:"ブラウザ英単語帳",text:"高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ90人突破してるのが自慢"}}),a("picture-card",{attrs:{href:"https://terublog.hatenablog.com/entry/2019/02/08/154553",src:r("7c91"),title:"SSTimer",text:"技の時間を管理するタイマーアプリ<br>一瞬でめんどくさくなって使わなくなったのは内緒笑"}}),a("picture-card",{attrs:{href:"https://github.com/teruto725/hopers",src:r("a273"),title:"Hopers",text:"友達に頼まれて無料で作ったLP<br>結局チーム解散しちゃったらしくて悲しい..."}}),a("picture-card",{attrs:{href:"https://github.com/teruto725/python-online-game",src:r("f654"),title:"BoardCoder",text:"オンラインボードゲームシミュレータ<br>AIをプログラミングして対決する!<br>GUI完成したらみんなで遊びたい！"}}),a("picture-card",{attrs:{href:"https://terublog.hatenablog.com/entry/2019/02/08/154553",src:r("7b57"),title:"GameLog",text:"ゲームのレビューサイト<br>起業目指してる友達に相談されて作ったのに空中分解しちゃった..."}}),a("picture-card",{attrs:{href:"https://qiita.com/teruto725/items/2ebbac15637a11d9271d",src:r("458a"),title:"Azure-for-TOEIC",text:"TOEICの写真を撮ったら中の英単語抜き出してくれたりその他便利な機能いっぱい!<br>Azureの精度がもうちょっと良ければ..."}})],1),a("v-row",[a("v-col",[a("v-spacer")],1)],1)],1)},gt=[],bt={name:"App",components:{"picture-card":it},data:function(){return{}}},mt=bt,ht=(r("7243"),Object(u["a"])(mt,vt,gt,!1,null,"1473b916",null)),xt=ht.exports;f()(ht,{VCol:V["a"],VRow:z["a"],VSpacer:m["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("v-row",[a("div",{staticClass:"title-text"},[t._v(" I use these programming languages. ")])])],1)],1),a("v-row",{attrs:{justify:"center"}},t._l(t.skills,(function(e){return a("skill-card",{key:e.title,ref:"skillCards",refInFor:!0,attrs:{position:t.position,title:e.title,src:r("67f7")("./"+e.src),stars:e.stars,text:e.text}})})),1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("v-row",[a("div",{staticClass:"title-text"},[t._v(" My strength is Practical ML skill. ")])]),a("v-row",{attrs:{justify:"center"}},t._l(t.mlbuttons,(function(t){return a("dialog-button",{key:t.title,attrs:{title:t.title,text:t.text}})})),1)],1)],1)],1)},wt=[],_t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[r("v-card",{staticClass:"skill-card white--text opacity : 0 ma-8",attrs:{id:"card-"+t.getTitle,width:"200",height:"200",elevation:"0",align:"center"}},[r("v-expand-transition",[a||t.openDescription?r("v-card",{staticClass:" transition-fast-in-fast-out orange darken-2 v-card--reveal  white--text",staticStyle:{height:"100%"}},[r("v-card-title",{attrs:{align:"center"}},[t._v(t._s(t.getTitle))]),r("v-card-text",{staticClass:"white--text",domProps:{innerHTML:t._s(t.getText)}})],1):t._e()],1),r("v-img",{staticClass:"white--text ma-2",attrs:{height:"150",width:"150",src:t.getSrc}}),r("v-rating",{attrs:{"background-color":"glay lighten-3",color:"orange",value:t.getStars,readonly:""}})],1)]}}])})},Ct=[],jt=(r("a9e3"),{name:"SkillCard",props:{src:{type:String},title:{type:String},stars:{type:Number},text:{type:String},position:{type:Number}},data:function(){return{getSrc:this.src,getTitle:this.title,getStars:this.stars,getText:this.text,getPosition:this.position,cardTop:0}},watch:{position:function(t){this.getPosition=t}},computed:{openDescription:function(){return this.getPosition+200>this.cardTop||!1}},mounted:function(){this.cardTop=document.getElementById("card-".concat(this.getTitle)).getBoundingClientRect().top+window.pageYOffset}}),Tt=jt,kt=(r("476a"),r("0789")),Vt=r("1d4d"),St=Object(u["a"])(Tt,_t,Ct,!1,null,"7d433f5c",null),Ot=St.exports;f()(St,{VCard:g["a"],VCardText:et["b"],VCardTitle:et["c"],VExpandTransition:kt["a"],VHover:rt["a"],VImg:R["a"],VRating:Vt["a"]});var Pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{justify:"center",align:"center"}},[r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{color:"black",height:"200",width:"200",outlined:"",tile:"",text:""}},"v-btn",i,!1),a),[r("div",{staticClass:"btn-text"},[t._v(" "+t._s(t.getTitle)+" ")])])]}},{key:"default",fn:function(e){return[r("v-card",[r("v-toolbar",{staticClass:"text-h6",attrs:{color:"primary",dark:""}},[t._v(t._s(t.getTitle))]),r("v-card-text",[r("div",{staticClass:"text-body1 pa-12 "},[t._v(t._s(t.getText))])]),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{attrs:{text:""},on:{click:function(t){e.value=!1}}},[t._v("Close")])],1)],1)]}}])})],1)},Et=[],It={name:"DialogButton",props:{title:{type:String},text:{type:String}},data:function(){return{getTitle:this.title,getText:this.text}}},At=It,Lt=r("169a"),Mt=r("71d9"),Bt=Object(u["a"])(At,Pt,Et,!1,null,null,null),Dt=Bt.exports;f()(Bt,{VBtn:v["a"],VCard:g["a"],VCardActions:et["a"],VCardText:et["b"],VCol:V["a"],VDialog:Lt["a"],VToolbar:Mt["a"]});var $t={components:{"skill-card":Ot,"dialog-button":Dt},data:function(){return{position:0,skills:[{title:"Python",src:"python.svg",stars:5,text:"競技プログラミングや研究、インターン等で日常的に使う。基本、応用文法はもちろん、一般的なライブラリは大体使ったことある。"},{title:"Java",src:"java.svg",stars:4,text:"高専時代はメインで使用していた。基礎は完璧で、Swing等のライブラリも使えるので、学習すれば知らないライブラリでも対応できる。"},{title:"JavaScript",src:"javascript.svg",stars:3,text:"GASやWeb等で使用頻度が高い言語、調べながらなら全然かける。"},{title:"C#",src:"c-sharp.svg",stars:3,text:"これもちょくちょく書く言語、Javaと類似しているので基本的にサクサク書ける。"},{title:"Ruby",src:"ruby.svg",stars:2,text:"Railsを使う際に使用する。体系的に一回勉強すれば一週間程度で使えるようになる。"}],mlbuttons:[{title:"Data\n Analyzing",text:"インターンで1年近くMLOps業務を行っています。また研究も高専5年生から3年間以上取り組んでいます。これらの経験からビックデータを与えられたときに、そのデータを整形し、可視化し、読み手に有益な価値提供を高いレベルで行うことが出来ます。"},{title:"Project\nfrom Zero",text:"プログラミングコンテストではブルーオーシャンで勝負することになるため、データセットすらない状態からプロジェクトがスタートします。そんなコンテストをくぐり抜けてきた経験から、ゼロからMLプロジェクトを遂行する力があります。"},{title:"Modeling",text:"機械学習コンペに複数回参加経験があります。コンテストやインターンを通して画像認識、自然言語処理を中心にモデル作成経験が豊富にあります。これらの経験から適切に素早くモデルを作成する事ができます。"}]}},mounted:function(){window.addEventListener("scroll",this.scrollEvent),this.scrollEvent()},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollEvent)},methods:{scrollEvent:function(){this.position=document.documentElement.scrollTop||document.body.scrollTop}}},qt=$t,Ht=(r("cf6b"),Object(u["a"])(qt,yt,wt,!1,null,"7264663c",null)),Rt=Ht.exports;f()(Ht,{VCol:V["a"],VRow:z["a"]}),a["a"].use(L["a"]);var zt=new L["a"]({mode:"history",base:"/portfolio/",routes:[{path:"/",name:"home",component:dt},{path:"/products",name:"products",component:xt},{path:"/enterprise",name:"enterprise",component:Rt}]});a["a"].config.productionTip=!1,new a["a"]({vuetify:A,router:zt,render:function(t){return t(E)}}).$mount("#app")},5705:function(t,e,r){t.exports=r.p+"img/rime.9cf5aa71.jpeg"},"5cb1":function(t,e,r){t.exports=r.p+"img/pytorch.f93ae9fa.svg"},6383:function(t,e,r){t.exports=r.p+"img/kingyo.c1110afc.png"},"67f7":function(t,e,r){var a={"./azure-icon.svg":"2bd1","./c-sharp.svg":"bd36","./django.svg":"d031","./flask.svg":"bde8","./html-5.svg":"98b0","./java.svg":"31a0","./javascript.svg":"2458","./numpy.svg":"f1c4","./opencv.svg":"84cc","./python.svg":"15f7","./pytorch.svg":"5cb1","./ruby.svg":"0101","./vue.svg":"0dcb","./vuetifyjs.svg":"b536"};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="67f7"},"6b2a":function(t,e,r){t.exports=r.p+"img/header.f28dce7a.jpg"},"6e24":function(t,e,r){},7243:function(t,e,r){"use strict";r("43ac")},"73fc":function(t,e,r){"use strict";r("6e24")},7693:function(t,e,r){t.exports=r.p+"img/eisyu.5f15b43c.jpeg"},"7b57":function(t,e,r){t.exports=r.p+"img/gamelog.7ca89da6.png"},"7c83":function(t,e,r){t.exports=r.p+"img/boardgame.92721723.jpg"},"7c91":function(t,e,r){t.exports=r.p+"img/lol.c8197bd8.png"},"84cc":function(t,e,r){t.exports=r.p+"img/opencv.95689ea1.svg"},"8a4a":function(t,e,r){t.exports=r.p+"img/guitor.be91ad8a.jpg"},"98b0":function(t,e,r){t.exports=r.p+"img/html-5.24845c5c.svg"},"9fc1":function(t,e,r){t.exports=r.p+"img/tango_bot.32638de7.png"},a273:function(t,e,r){t.exports=r.p+"img/hoper.c3c3f721.png"},a60f:function(t,e,r){"use strict";r("4d81")},ab76:function(t,e,r){},b536:function(t,e,r){t.exports=r.p+"img/vuetifyjs.a1d6f016.svg"},bd36:function(t,e,r){t.exports=r.p+"img/c-sharp.bdaccca2.svg"},bde8:function(t,e,r){t.exports=r.p+"img/flask.318d58cb.svg"},c6d2:function(t,e,r){t.exports=r.p+"img/my_picture.2dd1b462.jpg"},c8df:function(t,e,r){"use strict";r("1cf3")},cf6b:function(t,e,r){"use strict";r("ab76")},d031:function(t,e,r){t.exports=r.p+"img/django.ee0526fa.svg"},dd0d:function(t,e,r){t.exports=r.p+"img/top_pic.d8b31594.png"},e301:function(t,e,r){t.exports=r.p+"img/kakikata.b6c72730.png"},f1c4:function(t,e,r){t.exports=r.p+"img/numpy.fb8cd346.svg"},f654:function(t,e,r){t.exports=r.p+"img/geschenkt-top.9a087c91.jpeg"},fb5d:function(t,e,r){t.exports=r.p+"img/wordbook.680881c1.png"}});
//# sourceMappingURL=app.b4069f3c.js.map