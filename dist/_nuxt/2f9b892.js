(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{281:function(t,n,e){var content=e(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("71d22ce1",content,!0,{sourceMap:!1})},284:function(t,n,e){var content=e(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("17218ffe",content,!0,{sourceMap:!1})},285:function(t,n,e){var map={"./1.jpg":286,"./10.jpg":287,"./11.jpg":288,"./12.jpg":289,"./13.jpg":290,"./14.jpg":291,"./15.jpg":292,"./2.jpg":293,"./3.jpg":294,"./4.jpg":295,"./5.jpg":296,"./6.jpg":297,"./7.jpg":298,"./8.jpg":299,"./9.jpg":300};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=285},286:function(t,n,e){t.exports=e.p+"img/1.b138746.jpg"},287:function(t,n,e){t.exports=e.p+"img/10.c454a24.jpg"},288:function(t,n,e){t.exports=e.p+"img/11.ae351c7.jpg"},289:function(t,n,e){t.exports=e.p+"img/12.98e76e9.jpg"},290:function(t,n,e){t.exports=e.p+"img/13.16a4ba5.jpg"},291:function(t,n,e){t.exports=e.p+"img/14.528ffbd.jpg"},292:function(t,n,e){t.exports=e.p+"img/15.4b9d808.jpg"},293:function(t,n,e){t.exports=e.p+"img/2.b624398.jpg"},294:function(t,n,e){t.exports=e.p+"img/3.2212e3c.jpg"},295:function(t,n,e){t.exports=e.p+"img/4.22f40c3.jpg"},296:function(t,n,e){t.exports=e.p+"img/5.8ddea22.jpg"},297:function(t,n,e){t.exports=e.p+"img/6.2b33c49.jpg"},298:function(t,n,e){t.exports=e.p+"img/7.3de3ca1.jpg"},299:function(t,n,e){t.exports=e.p+"img/8.632a8e7.jpg"},300:function(t,n,e){t.exports=e.p+"img/9.9dda01b.jpg"},301:function(t,n,e){"use strict";e(281)},302:function(t,n,e){var r=e(60)((function(i){return i[1]}));r.push([t.i,".team-card{animation:toggle .75s ease-in-out forwards;max-width:173px!important;min-width:173px!important;opacity:0}.team-card__visual{transition:filter .3s linear}.team-card__visual:hover{filter:brightness(1.2)}@keyframes toggle{to{opacity:1}}",""]),r.locals={},t.exports=r},303:function(t,n,e){"use strict";e.r(n);e(44);var r={props:{data:{type:[Object,Array],default:function(){}}}},o=(e(301),e(19)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("nuxt-link",{staticClass:"team-card",attrs:{to:"/team/lorem-ipsum"}},[n("div",{staticClass:"bg-light ratio ratio-3x4 mb-2 team-card__visual"},[n("div",{staticClass:"rounded",staticStyle:{"background-size":"cover","background-position":"center"},style:{backgroundImage:"url(".concat(e(285)("./"+t.data.visual+".jpg"))}})]),t._v(" "),n("span",{staticClass:"fw-regular"},[t._v(t._s(t.data.name))])])}),[],!1,null,null,null);n.default=component.exports},316:function(t){t.exports=JSON.parse('[{"name":"Lanna O\'Cahey","visual":1},{"name":"Susanna Wabb","visual":2},{"name":"Lydie Barden","visual":3},{"name":"Gerry Upham","visual":4},{"name":"Harriott Welham","visual":5},{"name":"Shoshana Filipiak","visual":6},{"name":"Chrisy Bedrosian","visual":7},{"name":"Theo Matevosian","visual":8},{"name":"Annmaria Dilon","visual":9},{"name":"Harry Skellen","visual":10},{"name":"Rianon Allworthy","visual":11},{"name":"Monro Zanioletti","visual":12},{"name":"Kincaid Lissandri","visual":13},{"name":"Ulises Northing","visual":14},{"name":"Marsha Croney","visual":15}]')},317:function(t,n,e){"use strict";e(284)},318:function(t,n,e){var r=e(60)((function(i){return i[1]}));r.push([t.i,".team-swiper[data-v-a40686dc]{overflow:hidden;width:auto}.team-swiper-wrapper[data-v-a40686dc]{max-width:100%;overflow-y:scroll;scrollbar-width:none}.team-swiper-wrapper[data-v-a40686dc]::-webkit-scrollbar{background:transparent;height:0!important;width:0!important}",""]),r.locals={},t.exports=r},321:function(t,n,e){"use strict";e.r(n);e(197);var r={team:e(316),data:function(){return{page:1}},props:{personsPerPage:{type:Number,default:3}},computed:{numPersons:function(){return this.$options.team.length},numPages:function(){return Math.ceil(this.numPersons/this.personsPerPage)}}},o=(e(317),e(19)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"team-swiper"},[n("div",{staticClass:"team-swiper-wrapper"},[n("div",{staticClass:"hstack gap-3"},t._l(t.$options.team,(function(t,i){return n("team-card",{key:i,attrs:{data:t}})})),1)]),t._v(" "),n("div",{staticClass:"pagination d-flex justify-content-end mt-3"},t._l(t.numPages,(function(p,i){return n("span",{key:i,staticClass:"pagination-item cursor-pointer",class:t.page===p&&"pagination-item--active",on:{click:function(n){t.page=p}}})})),0)])}),[],!1,null,"a40686dc",null);n.default=component.exports;installComponents(component,{TeamCard:e(303).default})}}]);