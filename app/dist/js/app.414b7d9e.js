(function(t){function e(e){for(var s,r,o=e[0],c=e[1],u=e[2],f=0,d=[];f<o.length;f++)r=o[f],a[r]&&d.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00e2":function(t,e,n){},"0158":function(t,e,n){},"0728":function(t,e,n){},"0806":function(t,e,n){},"14cf":function(t,e,n){"use strict";var s=n("0158"),a=n.n(s);a.a},"244c":function(t,e,n){"use strict";var s=n("871c"),a=n.n(s);a.a},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return n(e)}function i(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(s)},a.resolve=i,t.exports=a,a.id="4678"},"483c":function(t,e,n){"use strict";var s=n("f34a"),a=n.n(s);a.a},"4cf8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("Navbar"),t.isKiyaku?n("Kiyaku"):t._e(),t.isLogin&&!t.isKiyaku?n("Postform"):t._e(),t.isLogin||t.isKiyaku?t._e():n("Login"),t.isLogin&&!t.isKiyaku?n("div",{staticClass:"view-wrapper"},[n("RouterView")],1):t._e()],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light mb-2",staticStyle:{"background-color":"#000000"}},[n("RouterLink",{staticClass:"navbar-brand mb-0 h1 font-weight-bolder text-danger",attrs:{to:"/"}},[t._v("まだ140字もつぶやいてんの？")]),t.isLogin?t._e():n("button",{staticClass:"btn btn-info btn-sm mb-2 float-sm-left",attrs:{type:"button"},on:{click:function(e){return t.kiyaku()}}},[n("small",[t._v("利用規約・プライバシーポリシー・お問い合わせ")])]),t.isLogin?n("div",{key:"login",staticClass:"float-sm-right"},[n("img",{attrs:{src:t.loginUser.photoURL,width:"40",height:"40",hspace:"10"}}),n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.logout()}}},[t._v("Logout")])]):t._e()],1)},o=[],c=n("3ac8"),u=n.n(c),l=n("2f62");s["default"].use(l["a"]);var f=new l["a"].Store({state:{user:{},isLogin:!1,isKiyaku:!1},mutations:{setUser:function(t,e){t.user=e},setLogin:function(t,e){t.isLogin=e},setKiyaku:function(t,e){t.isKiyaku=e}},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin},isKiyaku:function(t){return t.isKiyaku}}}),d={apiKey:"AIzaSyB-k_mUAK4rEgrrwKOU_-ib6eFknz3FfYM",authDomain:"not140but20-26af7.firebaseapp.com",databaseURL:"https://not140but20-26af7.firebaseio.com",projectId:"not140but20-26af7",storageBucket:"",messagingSenderId:"296640611784",appId:"1:296640611784:web:bc2dbcc76de66d8e"},h={init:function(){u.a.initializeApp(d),u.a.auth().setPersistence(u.a.auth.Auth.Persistence.SESSION)},logout:function(){u.a.auth().signOut()},onAuth:function(){u.a.auth().onAuthStateChanged(function(t){t=t||{},f.commit("setUser",t),f.commit("setLogin",!!t.uid)})},login:function(){f.commit("setUser",u.a.auth().currentUser),f.commit("setLogin",!0)},kiyaku:function(){f.commit("setKiyaku",!f.state.isKiyaku)}},b=n("3ac8"),v={name:"Logout",methods:{logout:function(){var t=this;b.auth().currentUser?b.auth().signOut().then(function(e){console.log("signOut",e),t.$router.go()}).catch(function(t){console.log(t)}):alert("ログインしてください。")},kiyaku:function(){h.kiyaku()}},computed:{isLogin:function(){return this.$store.getters.isLogin},loginUser:function(){return this.$store.getters.user}}},p=v,_=(n("de26"),n("2877")),m=Object(_["a"])(p,r,o,!1,null,"f89dc39a",null),j=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"alert alert-success",style:{display:t.post_success}},[t._v("SENT!")]),n("form",{staticClass:"m-1",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.sendPost(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:"text",id:"input",placeholder:"Shorter is Better!!!",maxlength:"20",minlength:"1",required:""},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),n("p",{staticClass:"help-block mb-1"},[t._v(t._s(t.csCount)+"/20")]),n("button",{staticClass:"btn btn-primary btn-block m-1 p-1",attrs:{type:"submit"}},[t._v("POST")])])])},k=[],y=n("5118"),w={name:"form-wrapper",data:function(){return{input:"",post_success:"none"}},methods:{sendPost:function(){var t=this;this.$store.getters.user.uid&&this.input.length>0&&this.input.length<36&&(u.a.firestore().collection("tifics").add({content:this.input,name:this.$store.getters.user.displayName,icon:this.$store.getters.user.photoURL,user_uid:this.$store.getters.user.uid,created_at:new Date}).then(this.post_success="block"),this.input="",Object(y["setTimeout"])(function(){t.post_success="none"},2e3))}},computed:{isLogin:function(){return this.$store.getters.isLogin},loginUser:function(){return this.$store.getters.user},csCount:function(){return this.input.length}}},L=w,C=(n("14cf"),Object(_["a"])(L,g,k,!1,null,"5ac9eda2",null)),O=C.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("\n    言葉だけは、\n    "),n("br"),t._v("短い方がよく刺さる。\n  ")]),n("h3",[t._v("\n    「まだ140字もつぶやいてんの？」は、\n    "),n("br"),t._v("1回につき20字までの投稿ができる\n    "),n("br"),t._v("Twitter風掲示板です。\n  ")]),n("div",{attrs:{id:"firebaseui-auth-container"}})])}],x=n("3ac8"),S=n("f799");n("30e8");var U={mounted:function(){var t=S.auth.AuthUI.getInstance()||new S.auth.AuthUI(x.auth());t.start("#firebaseui-auth-container",{signInOptions:[x.auth.TwitterAuthProvider.PROVIDER_ID]})}},K=U,P=(n("dbee"),Object(_["a"])(K,z,$,!1,null,"6f14ff44",null)),E=P.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("div",{staticClass:"wrap"},[n("h3",[t._v("利用規約")]),n("p",[t._v("この利用規約（以下、「本規約」といいます。）は、このWebサイトの管理者（以下、「管理者」といいます。）がこのWebサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスを利用される方（以下、「利用者」）は、本規約の内容をご承諾いただいたものとみなしますので、以下の規定を守って利用してください。なお、本規約の内容は、必要に応じて変更することがありますので、ご利用の際には最新の利用規約をご覧ください。")]),n("h5",[t._v("本サービス")]),n("ol",[n("li",[t._v("本サービスは、利用者が情報の発信、意見の表明もしくは交換またはこれらの共有等を行うための掲示板を提供するサービスです。")]),n("li",[t._v("本サービスは、利用者自らが所有する、Twitter（http://twitter.com）のアカウント（以下「Twitterアカウント」）の認証を利用します。")])]),n("h5",[t._v("本サービスの利用")]),n("p",[t._v("管理者は、事前に利用者の投稿内容を閲覧することはしません。従って、投稿の内容（真偽、正確性、第三者の権利を侵害していないこと等）やサービス利用の状態については一切保証しておりません。本サービスのご利用は、利用者ご自身の責任において行っていただきます。")]),n("h5",[t._v("免責事項")]),n("p",[t._v("利用者が当掲示板の利用により第三者の権利を侵害し、または第三者に対して損害を与えたことに関連して生じた全ての苦情や請求について、管理者は損害賠償その他の責任を負いません。")]),n("h5",[t._v("禁止行為")]),n("p",[t._v("本サービスでは以下の行為を禁止します。")]),n("ol",[n("li",[t._v("法令または公序良俗に違反する行為")]),n("li",[t._v("犯罪行為に関連する行為")]),n("li",[t._v("管理者、利用者、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為")]),n("li",[t._v("管理者のサービスの運営を妨害するおそれのある行為")]),n("li",[t._v("他の利用者に関する個人情報等を収集または蓄積する行為")]),n("li",[t._v("不正アクセスをし、またはこれを試みる行為")]),n("li",[t._v("他の利用者に成りすます行為")]),n("li",[t._v("管理者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為")]),n("li",[t._v("管理者、他の利用者または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為")]),n("li",[t._v("以下の表現を含み、または含むと管理者が判断する内容を本サービス上に投稿し、または送信する行為")]),n("ol",[n("li",[t._v("過度に暴力的な表現")]),n("li",[t._v("露骨な性的表現")]),n("li",[t._v("人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現")]),n("li",[t._v("自殺、自傷行為、薬物乱用を誘引または助長する表現")]),n("li",[t._v("その他反社会的な内容を含み他人に不快感を与える表現")])]),n("li",[t._v("以下を目的とし、または目的とすると管理者が判断する行為")]),n("ol",[n("li",[t._v("営業、宣伝、広告、勧誘、その他営利を目的とする行為（管理者の認めたものを除きます。）")]),n("li",[t._v("性行為やわいせつな行為を目的とする行為")]),n("li",[t._v("面識のない異性との出会いや交際を目的とする行為")]),n("li",[t._v("他の利用者に対する嫌がらせや誹謗中傷を目的とする行為")]),n("li",[t._v("管理者、他の利用者、または第三者に不利益、損害または不快感を与えることを目的とする行為")]),n("li",[t._v("その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為")]),n("li",[t._v("宗教活動または宗教団体への勧誘行為")]),n("li",[t._v("その他、管理者が不適切と判断する行為")])])]),n("h5",[t._v("利用制限および登録抹消")]),n("ol",[n("li",[t._v("管理者は、利用者が以下のいずれかに該当する場合には、事前の通知なく、投稿内容を削除し、利用者に対して本サービスの全部もしくは一部の利用を制限しまたは利用者としての登録を抹消することができるものとします。")]),n("ol",[n("li",[t._v("本規約のいずれかの条項に違反した場合")]),n("li",[t._v("本サービスについて、最終の利用から一定期間利用がない場合")]),n("li",[t._v("その他、管理者が本サービスの利用を適当でないと判断した場合")])]),n("li",[t._v("管理者は、本項に基づき、管理者が行った行為により利用者に生じた損害について、一切の責任を負いません。")])]),n("h5",[t._v("退会")]),n("p",[t._v("利用者は、管理者の定める退会手続により、本サービスから退会できるものとします。")]),n("h5",[t._v("サービス内容の変更等")]),n("p",[t._v("管理者は、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。")]),n("h5",[t._v("個人情報の取扱い")]),n("p",[t._v("管理者は、本サービスの利用によって取得する個人情報については、管理者「プライバシーポリシー」に従い適切に取り扱うものとします。")])]),n("div",{staticClass:"wrap"},[n("h3",[t._v("プライバシーポリシー")]),n("p",[t._v("本サービスでは以下のようにプライバシーポリシーを定めています。利用者は、本プライバシーポリシーの内容をご承諾いただいたものとみなします。")]),n("h5",[t._v("登録情報について")]),n("p",[t._v("本サービスでは、ログインに必要な利用者自らが所有するTwitter（http://twitter.com）のアカウント（以下、「Twitterアカウント」といいます。）に関する情報（アカウント名、アイコン画像URLなど）などの情報を保存しています。これらは本サービス利用の範囲内で管理者並びに管理者と契約関係にあるパートナー社（アクセス解析など）の間で利用されます。")]),n("p"),n("p",[t._v("また、お問い合わせの際に、メールアドレス等の個人情報をご登録いただく場合がございます。質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。")]),n("h5",[t._v("個人情報の第三者への開示")]),n("p",[t._v("本サービスでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。")]),n("ol",[n("li",[t._v("利用者ご本人のご了解がある場合")]),n("li",[t._v("法令等への協力のため、開示が必要となる場合")])]),n("h5",[t._v("個人情報の開示、訂正、追加、削除、利用停止")]),n("p",[t._v("利用者ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。")]),n("h5",[t._v("アクセス解析ツールについて")]),n("p",[t._v("本サービスでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。")]),n("p",[t._v("\n      このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは\n      "),n("a",{attrs:{href:"https://marketingplatform.google.com/about/analytics/terms/jp/"}},[t._v("ここをクリック")]),t._v("してください。\n    ")]),n("h5",[t._v("プライバシーポリシーの変更について")]),n("p",[t._v("本サービスは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。")]),n("p",[t._v("修正された最新のプライバシーポリシーは常に本ページにて開示されます。")])]),n("div",{staticClass:"wrap"},[n("iframe",{attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSf9Wit0dsJtUTf4J973qjsGkS20cQDxFCBGvIGAFzqweQpFBA/viewform?embedded=true",width:"640",height:"760",frameborder:"0",marginheight:"0",marginwidth:"0"}},[t._v("読み込んでいます…")])])])}],I=(n("a7ff"),{}),D=Object(_["a"])(I,T,A,!1,null,"7406fc92",null),N=D.exports,R={components:{Navbar:j,Postform:O,Login:E,Kiyaku:N},computed:{isLogin:function(){return this.$store.getters.isLogin},loginUser:function(){return this.$store.getters.user},isKiyaku:function(){return this.$store.getters.isKiyaku}}},B=R,G=(n("244c"),n("483c"),Object(_["a"])(B,a,i,!1,null,"0b29f8df",null)),F=G.exports,q=n("8c4f"),M=n("5f5b"),J=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pull-to",{attrs:{"top-load-method":t.refresh},on:{"top-state-change":t.stateChange,"infinite-scroll":t.loadmore},scopedSlots:t._u([{key:"top-block",fn:function(e){return[n("div",{staticClass:"top-load-wrapper"},[n("svg",{staticClass:"icon",class:{"icon-arrow":"trigger"===e.state,"icon-loading":"loading"===e.state},attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.iconLink}})]),t._v("\n      "+t._s(e.stateText)+"\n    ")])]}}])},[n("ul",{staticClass:"list"},t._l(t.posts,function(e){return n("li",{key:e.uid},[n("div",{staticClass:"li-body"},[n("div",{staticClass:"li-item"},[n("img",{attrs:{src:e.icon,width:"48",height:"48",hspace:"10"}})]),n("div",{staticClass:"li-item"},[n("div",{staticClass:"item-content"},[n("h6",[t._v(t._s(e.content))])]),n("a",{attrs:{href:"https://mobile.twitter.com/search?q="+e.name+"&f=user"},on:{click:function(t){t.stopPropagation()}}},[n("small",[t._v(t._s(e.name)+"   ")])]),n("small",[t._v(t._s(t._f("moment")(e.created_at)))])])])])}),0),n("div",{staticClass:"loading-bar"}),n("button",{staticClass:"btn btn-info btn-refresh",on:{click:t.refresh}},[t._v("Refresh!")])])}),Q=[],W=(n("7f7f"),n("ac6a"),n("c1df")),V=n.n(W),Y=n("897d"),H=n.n(Y),X={components:{PullTo:H.a},data:function(){return{posts:[],loading:!0,iconLink:"",start_date:null,end_date:null,counter:0}},created:function(){var t=this;u.a.firestore().collection("tifics").orderBy("created_at","desc").limit(10).get().then(function(e){t.loading=!1,t.counter=0,e.forEach(function(e){var n={content:e.data().content,icon:e.data().icon,name:e.data().name,created_at:V()(e.data().created_at.toDate())};t.posts.push(n),0==t.counter&&(t.start_date=e.data().created_at),t.counter=t.counter+1,t.end_date=e.data().created_at})})},computed:{isLogin:function(){return this.$store.getters.isLogin},loginUser:function(){return this.$store.getters.user}},methods:{loadmore:function(){var t=this;u.a.firestore().collection("tifics").where("created_at","<",this.end_date).orderBy("created_at","desc").limit(7).get().then(function(e){t.loading=!1,e.forEach(function(e){var n={content:e.data().content,icon:e.data().icon,name:e.data().name,created_at:V()(e.data().created_at.toDate())};t.posts.push(n),t.end_date=e.data().created_at})})},refresh:function(t){var e=this;u.a.firestore().collection("tifics").where("created_at",">",this.start_date).orderBy("created_at","asc").get().then(function(t){e.loading=!1,t.forEach(function(t){var n={content:t.data().content,icon:t.data().icon,name:t.data().name,created_at:V()(t.data().created_at.toDate())};e.posts.unshift(n),e.start_date=t.data().created_at})}),t("done")},stateChange:function(t){"pull"===t||"trigger"===t?this.iconLink="#icon-arrow-bottom":"loading"===t?this.iconLink="#icon-loading":"loaded-done"===t&&(this.iconLink="#icon-finish")}},filters:{moment:function(t){return V()(t).fromNow()}}},Z=X,tt=(n("711b"),Object(_["a"])(Z,J,Q,!1,null,"25ad5f95",null)),et=tt.exports;s["default"].use(q["a"]),s["default"].use(M["a"]);var nt=[{path:"/",component:et}],st=new q["a"]({mode:"history",base:"/",routes:nt}),at=st;h.init(),h.onAuth(),s["default"].config.productionTip=!1,new s["default"]({router:at,store:f,render:function(t){return t(F)}}).$mount("#app")},"711b":function(t,e,n){"use strict";var s=n("0728"),a=n.n(s);a.a},"871c":function(t,e,n){},a7ff:function(t,e,n){"use strict";var s=n("00e2"),a=n.n(s);a.a},dbee:function(t,e,n){"use strict";var s=n("4cf8"),a=n.n(s);a.a},de26:function(t,e,n){"use strict";var s=n("0806"),a=n.n(s);a.a},f34a:function(t,e,n){}});
//# sourceMappingURL=app.414b7d9e.js.map