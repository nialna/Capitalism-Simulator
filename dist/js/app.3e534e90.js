(function(e){function t(t){for(var n,s,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"111c":function(e,t,a){},1851:function(e,t,a){"use strict";var n=a("33d7"),r=a.n(n);r.a},2832:function(e,t,a){},"2ac2":function(e,t,a){},"33d7":function(e,t,a){},"3e9d":function(e,t,a){"use strict";var n=a("ded2"),r=a.n(n);r.a},"4a70":function(e,t,a){"use strict";var n=a("db03"),r=a.n(n);r.a},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"64a4":function(e,t,a){"use strict";var n=a("d662"),r=a.n(n);r.a},"6b80":function(e,t,a){"use strict";var n=a("2832"),r=a.n(n);r.a},"745c":function(e,t,a){},9299:function(e,t,a){},"92c8":function(e,t,a){"use strict";var n=a("a60f"),r=a.n(n);r.a},"9c0c":function(e,t,a){},a60f:function(e,t,a){},bddb:function(e,t,a){"use strict";var n=a("f952"),r=a.n(n);r.a},be0d:function(e,t,a){"use strict";var n=a("2ac2"),r=a.n(n);r.a},c284:function(e,t,a){"use strict";var n=a("745c"),r=a.n(n);r.a},c762:function(e,t,a){},c8f0:function(e,t,a){"use strict";var n=a("111c"),r=a.n(n);r.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("game-topbar"),a("div",{staticClass:"game-screen"},[a("game")],1),a("debug-buttons",{on:{reset:e.resetGame}}),a("notification-toast"),a("game-bottom-bar"),e._l(e.modals,(function(e){return a("modal-container",{key:e.uuid,attrs:{modal:e}})}))],2)},i=[],s=a("d4ec"),o=a("bee2"),c=a("262e"),u=a("2caf"),l=a("9ab4"),d=a("60a3"),f=new n["a"]({data:{time:0,lastUpdate:Date.now()/1e3}}),m=1;function v(e){m=e}function b(){return f.time}function p(e){f.time=e,f.lastUpdate=Date.now()/1e3}function g(){var e=Date.now()/1e3,t=e-f.lastUpdate,a=t*m;f.time+=a,f.lastUpdate=e}a("4de4"),a("7db0"),a("4160"),a("d81d"),a("13d5"),a("b0c0"),a("159b");var h=a("fb46"),y=Object(h["getStoreBuilder"])(),_=function e(){Object(s["a"])(this,e),this.lastUpdate={time:f.time,money:10}},k=y.module("money",new _),T=k.read((function(e){return S(e)}),"currentMoney"),j=k.read((function(e){return e.lastUpdate}),"moneySave"),M={get currentMoney(){return T()},get moneySave(){return j()}};function O(e,t){C(e,-1*t)}function C(e,t){var a=S(e);e.lastUpdate.money=a+t,e.lastUpdate.time=f.time}function w(e,t){e.lastUpdate.money=t,e.lastUpdate.time=f.time}function x(e,t){e.lastUpdate.money=t.money,e.lastUpdate.time=t.time}var P={setMoney:k.commit(w),spendMoney:k.commit(O),addMoney:k.commit(C),loadSave:k.commit(x)};function S(e){return e.lastUpdate.money}a("c740"),a("99af"),a("a434");var I=function e(){Object(s["a"])(this,e),this.notificationsToShow=[]},U=y.module("notifications",new I);function L(e,t){e.notificationsToShow.push({content:t,id:"".concat(Math.floor(1e4*Math.random()),"-").concat(Date.now())}),setTimeout((function(){e.notificationsToShow.splice(0,1)}),2e3)}var E={addNotification:U.commit(L)};function B(e,t,a){var n=t-e;return(a-e)/n}var N=function(){function e(t){Object(s["a"])(this,e),this.hasManager=!1,this.running=!1,this.profitMultiplier=1,this.data=t,this.owned=0,this.lastTick=f.time,this.timeToTick=t.baseTimeToTick,this.upgradeLevel=0}return Object(o["a"])(e,[{key:"generateSave",value:function(){return{owned:this.owned,lastTick:this.lastTick,hasManager:this.hasManager,running:this.running}}},{key:"loadSave",value:function(e){this.owned=e.owned,this.lastTick=e.lastTick,this.hasManager=e.hasManager,this.running=e.running,this.upgradeLevel=R(this,this.owned),this.timeToTick=D(this)}},{key:"costOfMultipleUpgrades",value:function(e){return A(this,e)}},{key:"amountUpgradeable",get:function(){var e=M.currentMoney,t=0,a=!0;while(a){var n=A(this,t+1);e-n>=0?t++:a=!1}return t}},{key:"revenuePerTick",get:function(){return this.data.baseMoneyPerTick*this.owned*this.profitMultiplier}},{key:"revenuePerSecond",get:function(){return this.revenuePerTick/this.timeToTick}},{key:"levelForNextUpgrade",get:function(){var e=this;return this.data.upgradeLevels.find((function(t){return t>e.owned}))}},{key:"progress",get:function(){if(!this.owned)return 0;if(!this.running)return 0;if(this.timeToTick>=1){var e=B(0,this.timeToTick,f.time-this.lastTick);return e*=100,e}}}]),e}();function A(e,t){for(var a=0,n=1;n<=t;n++)a+=F(e,e.owned+t);return a}function $(e,t){return A(e,t)<=M.currentMoney}function z(e){var t=e.upgradeLevel,a=R(e,e.owned);a!==t&&(E.addNotification("Factory ".concat(e.data.name," upgraded! Now 2x faster.")),e.upgradeLevel=a,e.timeToTick=D(e))}function F(e,t){return G(e.data.baseCost,e.data.costIncreasePercent/100,t-1)}function G(e,t,a){return e*Math.pow(1+t,a)}function D(e){var t=1;return e.upgradeLevel>=1&&(t=2*e.upgradeLevel),e.data.baseTimeToTick/t}function R(e,t){var a=0,n=e.data.upgradeLevels.findIndex((function(e){return e>t}));return n&&(a=n-1),a}var J=[{id:"ice_cream",name:"Ice Cream Truck",baseCost:8,baseMoneyPerTick:11,costIncreasePercent:25,upgradeLevels:[0,10,25,50,75,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseTimeToTick:1,manager:{name:"Harry Burt",cost:1e3}},{id:"corner_shop",name:"Convenience Store",baseCost:125,costIncreasePercent:25,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:145,baseTimeToTick:5,manager:{name:"Mrs Tyrese Lesser",cost:1e4}},{id:"car_wash",name:"Car Wash Station",baseCost:1130,costIncreasePercent:25,upgradeLevels:[0,10,50,100,150,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:575,baseTimeToTick:10,manager:{name:"Addy Ammonite",cost:1e5}},{id:"restaurant",name:"Restaurant",baseCost:12900,costIncreasePercent:20,upgradeLevels:[0,10,100,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:9870,baseTimeToTick:30,manager:{name:"Martha Birch",cost:1e6}},{id:"marketing_agency",name:"Marketing Agency",baseCost:135e3,costIncreasePercent:10,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:325e3,baseTimeToTick:60,manager:{name:"Lady Hazel Selanmere",cost:1e7}},{id:"manufacturing_outsourcing",name:"Manufacturing Outsourcing Agency",baseCost:856700,costIncreasePercent:10,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:125e4,baseTimeToTick:300,manager:{name:"Sylvia Bullen",cost:1e8}},{id:"pharmaceutical",name:"Pharmaceutical Company",baseCost:3526e3,costIncreasePercent:50,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:7476e3,baseTimeToTick:1200,manager:{name:"Jessie Corleone",cost:1e9}},{id:"money_laundering",name:"Money Laundering Front",baseCost:25639e3,costIncreasePercent:100,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:51256e3,baseTimeToTick:3600,manager:{name:"Dr Annabel Umbridge",cost:1e10}},{id:"lobbying",name:"Lobbying Agency",baseCost:2551e5,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:318552e3,baseTimeToTick:7200,manager:{name:"Thomas Cade",cost:1e11}},{id:"bribing",name:"Gifts to the elite",baseCost:34895e5,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:156789e5,baseTimeToTick:18e3,manager:{name:"Anita Noble",cost:1e12}},{id:"ai_research",name:"AI Research",baseCost:781234e5,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:45602867e4,baseTimeToTick:86400,manager:{name:"Leon Mercia",cost:1e13}},{id:"asteroid",name:"Asteroid Mining",baseCost:13451234e5,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:6800400400300,baseTimeToTick:10,manager:{name:"Miss Rosario Canmore",cost:1e14}},{id:"mars_colonies",name:"Mars colonies",baseCost:50500500500500,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:0x72245cc06014,baseTimeToTick:100,manager:{name:"Dr Arkis Medina",cost:1e15}},{id:"space_probes",name:"Space Probes",baseCost:999999500500500,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:0xddb7c0ac75014,baseTimeToTick:1e3,manager:{name:"John Thomas",cost:1e16}},{id:"dyson_sphere",name:"Dyson Spheres",baseCost:0x598772e719d814,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:0x567249196407000,baseTimeToTick:3600,manager:{name:"Morton Montague",cost:1e17}},{id:"singularity_accelerator",name:"Singularity Accelerators",baseCost:0xbcc8493eacc5800,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:0x25158feca78f5800,baseTimeToTick:3600,manager:{name:"Dr Hela Castillo",cost:1e18}},{id:"multiverse_exploitation",name:"Multiverse Exploitation",baseCost:1e19,costIncreasePercent:5,upgradeLevels:[0,10,25,50,100,125,150,175,200,250,300,400,500,600,700,800,1e3,1e4,1e5],baseMoneyPerTick:1e21,baseTimeToTick:86400,manager:{name:"Mardian Whitmore",cost:1e19}}],W=function e(){var t=this;Object(s["a"])(this,e),this.factories=[],this.buyMode="single",J.forEach((function(e){t.factories.push(new N(e))}))},H=y.module("factories",new W),Y=H.read((function(e){var t=[];return e.factories.forEach((function(e){t.push(e.generateSave())})),t}),"factorySave"),q=H.read((function(e){var t=M.currentMoney;return e.factories.filter((function(e){return!e.hasManager})).map((function(e){return{cost:e.data.manager.cost,name:e.data.manager.name,factoryId:e.data.id,factoryName:e.data.name,canAfford:t>=e.data.manager.cost}}))}),"availableManagers"),K=H.read((function(e){return e.factories}),"factories"),Q={get factorySave(){return Y()},get factories(){return K()},get availableManagers(){return q()}};function V(e,t){var a=t.amount,n=se(e,t.factoryId),r=A(n,a);$(n,a)&&(0===n.owned&&(n.lastTick=f.time),n.owned+=a,z(n),P.spendMoney(r))}function X(e,t){var a=se(e,t),n=a.data.manager.cost,r=M.currentMoney;r>=n&&(a.hasManager=!0,a.running||(a.running=!0,a.lastTick=f.time),P.spendMoney(n))}function Z(e,t){var a=se(e,t);a.running||(a.lastTick=f.time,a.running=!0)}function ee(e,t){var a=t.target,n=[];"all"===a?n=e.factories:n.push(se(e,a)),n.forEach((function(e){e.profitMultiplier*=t.amount}))}function te(e,t){e.buyMode=t}function ae(e){var t=e.factories.reduce((function(e,t){var a=ie(t);return e+a}),0);P.addMoney(t)}function ne(e,t){e.factories.forEach((function(e,a){t.length>a&&e.loadSave(t[a])}))}var re={updateFactoriesProduction:H.commit(ae),runFactory:H.commit(Z),buyFactory:H.commit(V),multiplyRevenue:H.commit(ee),buyManager:H.commit(X),loadSave:H.commit(ne),setBuyMode:H.commit(te)};function ie(e){if(!e.hasManager&&!e.running)return 0;var t=f.time-e.lastTick,a=Math.floor(t/e.timeToTick),n=a*e.timeToTick,r=e.revenuePerTick*a,i=e.lastTick+n;return e.hasManager&&(e.lastTick=i),!e.hasManager&&a>0&&(e.running=!1),r}function se(e,t){var a=e.factories.find((function(e){return e.data.id===t}));if(!a)throw new Error("Factory type ".concat(t," doesn't exist in the state."));return a}var oe=function e(){Object(s["a"])(this,e),this.modals={}},ce=y.module("modals",new oe),ue=ce.read((function(e){return e.modals}),"modal"),le={get modals(){return ue()}};function de(e,t){var a="".concat(Date.now(),"-").concat(1e3*Math.random()),r=Object.assign({uuid:a,addedAt:Date.now()},t);n["a"].set(e.modals,a,r)}function fe(e,t){n["a"].delete(e.modals,t)}var me={addModal:ce.commit(de),deleteModal:ce.commit(fe)},ve=[{id:"ice_cream_boost_1",name:"New ice cooler model",cost:5e3,effect:{type:"multiply-revenue",options:{target:"ice_cream",amount:3}}},{id:"corner_shop_boost_1",name:"Self service checkout",cost:2e4,effect:{type:"multiply-revenue",options:{target:"corner_shop",amount:3}}},{id:"car_wash_boost_1",name:"Automatic car wash",cost:55e3,effect:{type:"multiply-revenue",options:{target:"car_wash",amount:3}}},{id:"all_boost_1",name:"New investment strategy",cost:21e4,effect:{type:"multiply-revenue",options:{target:"all",amount:3}}}],be=function(){function e(t){Object(s["a"])(this,e),this.owned=!1,this.data=t}return Object(o["a"])(e,[{key:"loadSave",value:function(e){e.owned&&this.enable()}},{key:"enable",value:function(){this.owned=!0,this.applyEffect()}},{key:"applyEffect",value:function(){switch(this.data.effect.type){case"multiply-revenue":this.boostRevenue(this.data.effect.options);break}}},{key:"boostRevenue",value:function(e){re.multiplyRevenue(e)}},{key:"upgradeText",get:function(){switch(this.data.effect.type){case"multiply-revenue":var e="",t=this.data.effect.options.target;return e="all"===t?"everything":J.find((function(e){return e.id===t})).name,"Boosts revenue of ".concat(e," by x").concat(this.data.effect.options.amount)}}},{key:"canAfford",get:function(){var e=M.currentMoney;return e>=this.data.cost}}]),e}(),pe=function e(){var t=this;Object(s["a"])(this,e),this.upgrades=[],ve.forEach((function(e){t.upgrades.push(new be(e))}))},ge=y.module("upgrades",new pe),he=ge.read((function(e){return e.upgrades}),"upgrades"),ye=ge.read((function(e){return e.upgrades.filter((function(e){return!e.owned}))}),"availableUpgrades"),_e=ge.read((function(e){return e.upgrades.map((function(e){return{owned:e.owned}}))}),"upgradesSave"),ke={get upgrades(){return he()},get availableUpgrades(){return ye()},get upgradesSave(){return _e()}};function Te(e,t){var a=Oe(e,t),n=a.data.cost,r=M.currentMoney;r>=n&&(a.enable(),P.spendMoney(n))}function je(e,t){e.upgrades.forEach((function(e,a){t.length>a&&e.loadSave(t[a])}))}var Me={buyUpgrade:ge.commit(Te),loadSave:ge.commit(je)};function Oe(e,t){var a=e.upgrades.find((function(e){return e.data.id===t}));if(!a)throw new Error("Upgrade ".concat(t," doesn't exist in the state."));return a}var Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game"},[a("factories-container")],1)},we=[],xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},Pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),e._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],Se=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(d["c"]);Object(l["a"])([Object(d["b"])()],Se.prototype,"msg",void 0),Se=Object(l["a"])([d["a"]],Se);var Ie=Se,Ue=Ie,Le=(a("6b80"),a("2877")),Ee=Object(Le["a"])(Ue,xe,Pe,!1,null,"5c1e25ac",null),Be=Ee.exports,Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-topbar"},[a("div",{staticClass:"game-title is-flex"},[e._m(0),a("div",{staticClass:"game-name-right"},[a("button",{staticClass:"can-buy buy-mode-button is-rounded is-size-5",on:{click:e.changeBuyMode}},[e._v(e._s(e.buyModeText))])])]),a("span",{staticClass:"is-size-4 is-bold"},[e._v("You have "+e._s(e._f("formatCurrency")(e.money)))])])},Ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-name-left"},[a("span",{staticClass:"is-size-4 is-bold"},[e._v("Capitalism Simulator")])])}],$e=["single","ten","next","max"],ze=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.buyModeIndex=0,e.buyMode="single",e}return Object(o["a"])(a,[{key:"changeBuyMode",value:function(){this.buyModeIndex++,this.buyModeIndex>=$e.length&&(this.buyModeIndex=0),this.buyMode=$e[this.buyModeIndex],re.setBuyMode(this.buyMode)}},{key:"buyModeText",get:function(){switch($e[this.buyModeIndex]){case"single":return"x1";case"ten":return"x10";case"next":return"Next";case"max":return"Max"}}},{key:"money",get:function(){return M.currentMoney}}]),a}(d["c"]);ze=Object(l["a"])([d["a"]],ze);var Fe=ze,Ge=Fe,De=(a("1851"),Object(Le["a"])(Ge,Ne,Ae,!1,null,"52d46eda",null)),Re=De.exports,Je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"factories-container"},e._l(e.visibleFactories,(function(e){return a("factory-widget",{key:e.data.id,attrs:{factoryId:e.data.id}})})),1)},We=[],He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"columns is-mobile is-vcentered"},[a("div",{staticClass:"column is-3"},[a("div",{staticClass:"factory-info-box is-rounded"},[a("h3",[e._v("Running")]),a("p",[e._v("Owned: "+e._s(e._f("formatNumber")(e.factory.owned)))]),a("p",[e._v("Upgrade at "+e._s(e._f("formatNumber")(e.factory.levelForNextUpgrade)))])])]),a("div",{staticClass:"column"},[a("transition",{attrs:{name:"fade"}},[e.factory.owned?a("div",{staticClass:"factory-buttons is-rounded"},[a("div",{staticClass:"factory-title-box is-rounded has-shadow",class:e.titleBoxClass,on:{click:e.run}},[a("div",{staticClass:"is-size-4 little-margin"},[a("span",{staticClass:"is-bold"},[e._v(e._s(e.factory.data.name))])]),e.factory.running?a("progress",{staticClass:"progress is-primary factory-production-bar",attrs:{max:"100"},domProps:{value:e.progress}},[e._v(e._s(e.progress)+"%")]):a("span",{staticClass:"is-bold"},[e._v("Not Running"),a("br")]),a("span",{staticClass:"little-margin"},[e._v("Revenue: "+e._s(e.revenue))])]),a("div",{staticClass:"columns is-mobile is-vcentered"},[a("div",{staticClass:"column is-8"},[a("button",{staticClass:"big-button box is-full-width",class:e.buyButtonClass,attrs:{disabled:!e.canBuy},on:{click:e.buy}},[a("div",{staticClass:"is-flex is-mobile is-size-5 buy-button-content"},[a("div",{staticClass:"has-text-left"},[a("span",[e._v("Buy")]),a("br"),a("span",[e._v("x "+e._s(e._f("formatNumber")(e.amountToBuy)))])]),a("div",{staticClass:"has-text-right"},[a("span",[e._v(e._s(e._f("formatCurrency")(e.cost)))])])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"tiny-box time-box is-rounded has-shadow is-size-5"},[a("span",[e._v(e._s(e._f("formatTime")(e.timeLeft)))])])])])]):a("div",{staticClass:"factory-buttons"},[a("button",{staticClass:"big-button box is-full-width",class:e.buyButtonClass,attrs:{disabled:!e.canBuy},on:{click:e.buy}},[a("p",{staticClass:"is-size-4"},[e._v("Buy "+e._s(e.factory.data.name))]),a("p",{staticClass:"is-size-5"},[e._v(e._s(e._f("formatCurrency")(e.cost)))])])])])],1)])])},Ye=[],qe=a("6612"),Ke=a.n(qe),Qe="$";function Ve(e){var t=Ze(e,!0);return Ke()(Math.floor(e)).format(t)}function Xe(e){var t=Ze(e,!1);return Ke()(Math.floor(e)).format(t)}function Ze(e,t){var a="".concat(Qe," ");t||(a="");var n="(".concat(a," 0 a)");return e>1e3&&(n="(".concat(a," 0.00 a)")),e>1e12&&(n="0.000e+0"),n}function et(e){var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),n=e-3600*t-60*a,r=tt(t),i=tt(a),s=tt(n),o="";return t>0&&(o+="".concat(r,":")),a>0&&(o+="".concat(i,":")),o+=s,o}function tt(e){return e>=10?String(e):"0".concat(e)}var at=a("2f62");n["a"].use(at["default"]);var nt=y.vuexStore(),rt=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"created",value:function(){this.factory=se(nt.state.factories,this.factoryId)}},{key:"buy",value:function(){re.buyFactory({factoryId:this.factoryId,amount:this.amountToBuy})}},{key:"run",value:function(){this.factory.running||re.runFactory(this.factoryId)}},{key:"canBuy",get:function(){var e=this.amountToBuy;return 0!==e&&e<=this.amountAvailable}},{key:"cost",get:function(){return this.factory.costOfMultipleUpgrades(this.amountToBuy)}},{key:"amountToBuy",get:function(){var e=1;if(!this.factory.owned)return e;switch(this.buyMode){case"ten":e=10;break;case"next":e=this.nextUpgrade-this.factory.owned;break;case"max":e=this.amountAvailable,0===e&&(e=1);break}return e}},{key:"amountAvailable",get:function(){return this.factory.amountUpgradeable}},{key:"nextUpgrade",get:function(){return this.factory.levelForNextUpgrade}},{key:"money",get:function(){return M.currentMoney}},{key:"buyMode",get:function(){return nt.state.factories.buyMode}},{key:"revenue",get:function(){return this.factory.timeToTick>=1?"".concat(Ve(this.factory.revenuePerTick)):"".concat(Ve(this.factory.revenuePerSecond)," /s")}},{key:"timeLeft",get:function(){return this.factory.running?Math.floor(this.factory.timeToTick-(f.time-this.factory.lastTick)):this.factory.timeToTick}},{key:"buyButtonClass",get:function(){return this.canBuy?"can-buy":"cant-buy"}},{key:"progress",get:function(){return this.factory.progress}},{key:"titleBoxClass",get:function(){return this.factory.running?"factory-title-running":"factory-title-can-run"}}]),a}(d["c"]);Object(l["a"])([Object(d["b"])(String)],rt.prototype,"factoryId",void 0),rt=Object(l["a"])([d["a"]],rt);var it=rt,st=it,ot=(a("c284"),Object(Le["a"])(st,He,Ye,!1,null,"6b008a38",null)),ct=ot.exports,ut=5,lt=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"factories",get:function(){return nt.state.factories.factories}},{key:"visibleFactories",get:function(){var e=this;return this.factories.filter((function(t,a){return a<ut||e.factories[a-ut].owned}))}}]),a}(d["c"]);lt=Object(l["a"])([Object(d["a"])({components:{FactoryWidget:ct}})],lt);var dt=lt,ft=dt,mt=(a("be0d"),Object(Le["a"])(ft,Je,We,!1,null,"623eda08",null)),vt=mt.exports,bt={name:"Game",components:{HelloWorld:Be,GameTopbar:Re,FactoriesContainer:vt}},pt=bt,gt=Object(Le["a"])(pt,Ce,we,!1,null,"cfd1e048",null),ht=gt.exports,yt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"debug-buttons"},[a("button",{staticClass:"is-warn",on:{click:function(t){return e.$emit("reset")}}},[e._v("Reset")]),a("button",{staticClass:"is-success",on:{click:e.cheat}},[e._v("Speed x"+e._s(e.speedCheat))])])},_t=[],kt=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.speedCheat=1,e}return Object(o["a"])(a,[{key:"cheat",value:function(){this.speedCheat*=10,this.speedCheat>100&&(this.speedCheat=1),v(this.speedCheat)}}]),a}(d["c"]);kt=Object(l["a"])([d["a"]],kt);var Tt=kt,jt=Tt,Mt=(a("bddb"),Object(Le["a"])(jt,yt,_t,!1,null,"472b1012",null)),Ot=Mt.exports,Ct=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notifications-container"},[a("transition-group",{attrs:{name:"fade",tag:"div"}},e._l(e.state.notificationsToShow,(function(t){return a("div",{key:t.id,staticClass:"notification has-shadow is-rounded"},[a("p",{staticClass:"is-bold is-size-4"},[e._v(e._s(t.content))])])})),0)],1)},wt=[],xt=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"state",get:function(){return nt.state.notifications}}]),a}(d["c"]);xt=Object(l["a"])([d["a"]],xt);var Pt=xt,St=Pt,It=(a("f64e"),Object(Le["a"])(St,Ct,wt,!1,null,"5526a8b8",null)),Ut=It.exports,Lt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-bottom-bar"},[a("div",{staticClass:"bottom-button"},[a("button",{staticClass:"accent is-rounded is-size-5",on:{click:e.showManagers}},[e._v("Managers")]),a("transition",{attrs:{name:"fade"}},[e.managersPurchasable>0?a("notification-badge",{attrs:{amount:e.managersPurchasable}}):e._e()],1)],1),a("div",{staticClass:"bottom-button"},[a("button",{staticClass:"accent is-rounded is-size-5",on:{click:e.showUpgrades}},[e._v("Upgrades")]),a("transition",{attrs:{name:"fade"}},[e.upgradesPurchasable>0?a("notification-badge",{attrs:{amount:e.upgradesPurchasable}}):e._e()],1)],1)])},Et=[],Bt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notification-badge"},[a("span",{staticClass:"notification-amount"},[e._v(e._s(e.amount))])])},Nt=[],At=(a("a9e3"),function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(d["c"]));Object(l["a"])([Object(d["b"])(Number)],At.prototype,"amount",void 0),At=Object(l["a"])([d["a"]],At);var $t=At,zt=$t,Ft=(a("64a4"),Object(Le["a"])(zt,Bt,Nt,!1,null,"e497fb7a",null)),Gt=Ft.exports,Dt=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"showManagers",value:function(){me.addModal({name:"managers-modal",title:"Managers",options:{}})}},{key:"showUpgrades",value:function(){me.addModal({name:"upgrades-modal",title:"Upgrades",options:{}})}},{key:"availableManagers",get:function(){return Q.availableManagers}},{key:"availableUpgrades",get:function(){return ke.availableUpgrades}},{key:"upgradesPurchasable",get:function(){return this.availableUpgrades.filter((function(e){return e.canAfford})).length}},{key:"managersPurchasable",get:function(){return this.availableManagers.filter((function(e){return e.canAfford})).length}}]),a}(d["c"]);Dt=Object(l["a"])([Object(d["a"])({components:{NotificationBadge:Gt}})],Dt);var Rt=Dt,Jt=Rt,Wt=(a("92c8"),Object(Le["a"])(Jt,Lt,Et,!1,null,"104a48f4",null)),Ht=Wt.exports,Yt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"modal is-active is-clipped"},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"container-box"},[a("div",{staticClass:"modal-title-area"},[a("span",{staticClass:"is-bold is-size-4"},[e._v(e._s(e.modal.title))]),a("button",{staticClass:"is-large",attrs:{"aria-label":"close"},on:{click:e.close}},[e._v("x")])]),a(e.modal.name,e._b({tag:"component"},"component",e.modal,!1))],1)])])])])},qt=[],Kt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"managers-modal"},[a("p",[e._v("Managers will take care of your factories and run them automatically for you!")]),a("transition-group",{attrs:{el:"div",name:"fade"}},e._l(e.availableManagers,(function(t){return a("div",{key:t.factoryId,staticClass:"box manager-box"},[a("div",{staticClass:"manager-info"},[a("span",{staticClass:"is-size-4 is-bold"},[e._v(e._s(t.name))]),a("span",{staticClass:"is-size-6"},[e._v("Manages "+e._s(t.factoryName))])]),a("button",{staticClass:"button",attrs:{disabled:!t.canAfford},on:{click:function(a){return e.buyManager(t)}}},[e._v(" "+e._s(e._f("formatCurrency")(t.cost))+" ")])])})),0)],1)},Qt=[],Vt=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"close",value:function(){me.deleteModal(this.uuid)}}]),a}(d["c"]);Object(l["a"])([Object(d["b"])(String)],Vt.prototype,"uuid",void 0),Object(l["a"])([Object(d["b"])(String)],Vt.prototype,"name",void 0),Object(l["a"])([Object(d["b"])(Object)],Vt.prototype,"options",void 0);var Xt=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"buyManager",value:function(e){re.buyManager(e.factoryId)}},{key:"availableManagers",get:function(){return Q.availableManagers}}]),a}(Vt);Xt=Object(l["a"])([d["a"]],Xt);var Zt=Xt,ea=Zt,ta=(a("c8f0"),Object(Le["a"])(ea,Kt,Qt,!1,null,"334c5062",null)),aa=ta.exports,na=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upgrades-modal"},[a("p",[e._v("Invest in upgrades to maximise profits!")]),e.availableUpgrades.length>0?a("transition-group",{attrs:{el:"div",name:"fade"}},e._l(e.availableUpgrades,(function(t){return a("div",{key:t.data.id,staticClass:"box upgrade-box"},[a("div",{staticClass:"manager-info"},[a("span",{staticClass:"is-size-4 is-bold"},[e._v(e._s(t.data.name))]),a("span",{staticClass:"is-size-6"},[e._v(e._s(t.upgradeText))])]),a("button",{staticClass:"button",attrs:{disabled:!t.canAfford},on:{click:function(a){return e.buyUpgrade(t)}}},[e._v(" "+e._s(e._f("formatCurrency")(t.data.cost))+" ")])])})),0):a("p",[e._v("Wow, you bought all upgrades!")])],1)},ra=[],ia=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"buyUpgrade",value:function(e){Me.buyUpgrade(e.data.id)}},{key:"availableUpgrades",get:function(){return ke.availableUpgrades}}]),a}(Vt);ia=Object(l["a"])([d["a"]],ia);var sa=ia,oa=sa,ca=(a("4a70"),Object(Le["a"])(oa,na,ra,!1,null,"6eded4bc",null)),ua=ca.exports,la=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"created",value:function(){Object.assign(this.modal,this.modal.options)}},{key:"close",value:function(){me.deleteModal(this.modal.uuid)}}]),a}(d["c"]);Object(l["a"])([Object(d["b"])()],la.prototype,"modal",void 0),la=Object(l["a"])([Object(d["a"])({components:{ManagersModal:aa,UpgradesModal:ua}})],la);var da=la,fa=da,ma=(a("3e9d"),Object(Le["a"])(fa,Yt,qt,!1,null,null,null)),va=ma.exports,ba="game-save",pa=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"created",value:function(){var e=this;this.loadGame(),this.gameTicker=setInterval((function(){re.updateFactoriesProduction(),g(),e.saveGame()}),50)}},{key:"resetGame",value:function(){window.clearInterval(this.gameTicker),localStorage.clear(),window.location.reload()}},{key:"saveGame",value:function(){var e=Q.factorySave,t=M.moneySave,a=ke.upgradesSave,n={factories:e,money:t,time:b(),upgrades:a};localStorage.setItem(ba,JSON.stringify(n))}},{key:"loadGame",value:function(){var e=localStorage.getItem(ba);if(null!==e){var t=JSON.parse(e);return p(t.time),re.loadSave(t.factories),Me.loadSave(t.upgrades),P.loadSave(t.money),!0}return!1}},{key:"modals",get:function(){return le.modals}}]),a}(d["c"]);pa=Object(l["a"])([Object(d["a"])({components:{Game:ht,DebugButtons:Ot,NotificationToast:Ut,GameTopbar:Re,GameBottomBar:Ht,ModalContainer:va}})],pa);var ga=pa,ha=ga,ya=(a("5c0b"),Object(Le["a"])(ha,r,i,!1,null,null,null)),_a=ya.exports,ka=a("8c4f");n["a"].use(ka["a"]);var Ta=[{path:"/",name:"Game",component:ht}],ja=new ka["a"]({mode:"history",base:"/",routes:Ta}),Ma=ja;d["c"].directive("disabled",{update:function(e,t){!0===t.value?e.classList.add("disabled"):e.classList.remove("disabled")}}),n["a"].filter("formatCurrency",Ve),n["a"].filter("formatNumber",Xe),n["a"].filter("formatTime",et),n["a"].config.productionTip=!1,a("9299"),new n["a"]({router:Ma,store:nt,render:function(e){return e(_a)}}).$mount("#app")},d662:function(e,t,a){},db03:function(e,t,a){},ded2:function(e,t,a){},f64e:function(e,t,a){"use strict";var n=a("c762"),r=a.n(n);r.a},f952:function(e,t,a){}});
//# sourceMappingURL=app.3e534e90.js.map