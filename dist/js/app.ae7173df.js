(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0089":function(t,e,i){},"2be9":function(t,e,i){t.exports=i.p+"img/Netflix-Logo.3483cbba.png"},"51ae":function(t,e,i){"use strict";i("60f2")},5249:function(t,e,i){"use strict";i("0089")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("7b17"),i("ab8b");var n=i("ecee"),a=i("c074"),r=i("ad3d"),s=i("2b0e"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid",attrs:{id:"app"}},[i("Header",{attrs:{navList:t.navList},on:{search:t.searchFilm}}),i("Main",{attrs:{films:t.filteredFilm}}),t._v(" "+t._s(t.apiRequest)+" ")],1)},o=[],l=(i("4de4"),i("caad"),i("2532"),i("ac1f"),i("1276"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"row align-items-center"},[t._m(0),i("nav",{staticClass:"col"},[i("ul",t._l(t.navList,(function(e){return i("li",{key:e.id},[t._v(t._s(e.text))])})),0)]),i("div",{staticClass:"search-bar col-4"},[i("div",{staticClass:"search-inner"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputSearch,expression:"inputSearch"}],attrs:{type:"text"},domProps:{value:t.inputSearch},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("search",t.inputSearch)},input:function(e){e.target.composing||(t.inputSearch=e.target.value)}}}),i("font-awesome-icon",{staticClass:"search-icon",attrs:{icon:"search"},on:{clik:function(e){return t.$emit("search",t.inputSearch)}}}),i("div",{staticClass:"user-profile"},[t._v("BAMBINI")]),i("font-awesome-icon",{staticClass:"notice-icon",attrs:{icon:"bell"}}),i("div",{staticClass:"user-img"}),i("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:"sort-down"}})],1)])])}),u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-container col-1"},[n("img",{attrs:{src:i("2be9"),alt:"Logo Netflix"}})])}],f={name:"Header",props:{navList:Array},data:function(){return{inputSearch:""}}},p=f,d=(i("51ae"),i("2877")),v=Object(d["a"])(p,l,u,!1,null,"118ca9c0",null),m=v.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"row"},t._l(t.films,(function(t){return i("Film",{key:t.id,staticClass:"col-2",attrs:{imgURL:"https://image.tmdb.org/t/p/w500"+t.poster_path,title:t.title,originalTitle:t.original_title,vote:t.vote_average,language:t.original_language}})})),1)},h=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"film-container"},[i("div",{staticClass:"film-inner"},[i("img",{attrs:{src:t.imgURL,alt:"copertina di "+t.title}}),i("div",{staticClass:"opacity"}),i("div",{staticClass:"info-container"},[i("div",{staticClass:"info-inner row"},[i("div",{staticClass:"title-film col-12"},[t._v(t._s(t.title))]),i("div",{staticClass:"original-title-film col-7"},[t._v(t._s(t.originalTitle))]),i("div",{staticClass:"preferences col-3"},[i("div",{staticClass:"vote-film"},[t._v(t._s(t.vote))]),i("div",{staticClass:"lang-film"},[t._v(t._s(t.language))])])])])])])},_=[],y=(i("a9e3"),{name:"Film",props:{imgURL:String,title:String,originalTitle:String,vote:Number,language:String}}),C=y,x=(i("8ea4"),Object(d["a"])(C,b,_,!1,null,"4f676ac7",null)),w=x.exports,S={name:"Main",components:{Film:w},props:{films:Array}},O=S,k=(i("5249"),Object(d["a"])(O,g,h,!1,null,"b1196714",null)),j=k.exports,L=i("bc3a"),F=i.n(L),M={name:"App",components:{Header:m,Main:j},created:function(){var t=this;F.a.get("https://api.themoviedb.org/3/search/movie?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b&query=ritorno+al+futuro").then((function(e){t.films=e.data.results}))},computed:{filteredFilm:function(){var t=this;return this.films.filter((function(e){return e.title.includes(t.searchString)}))},apiRequest:function(){var t=this.searchString.toLowerCase().split(" "),e="";return console.log(this.searchString.split(" ")),t.forEach((function(t,i){0===i?e=t:e+="+".concat(t)})),console.log("https://api.themoviedb.org/3/search/movie?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b&query=".concat(e)),"https://api.themoviedb.org/3/search/movie?api_key=f10ccd72e0d02b50384e2e5f35ea0e3b&query=".concat(e)}},data:function(){return{films:[],searchString:"",navList:[{id:0,text:"Home",visible:!1},{id:1,text:"Serie Tv",visible:!1},{id:2,text:"Film",visible:!1},{id:3,text:"Originali",visible:!1},{id:4,text:"Aggiunti di recente",visible:!1},{id:5,text:"La mia lista",visible:!1}]}},methods:{searchFilm:function(t){this.searchString=t}}},P=M,$=(i("5c0b"),Object(d["a"])(P,c,o,!1,null,null,null)),E=$.exports;n["c"].add(a["d"],a["b"],a["a"],a["c"]),s["a"].component("font-awesome-icon",r["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"60f2":function(t,e,i){},"8ea4":function(t,e,i){"use strict";i("c414")},"9c0c":function(t,e,i){},c414:function(t,e,i){}});
//# sourceMappingURL=app.ae7173df.js.map