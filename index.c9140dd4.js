var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r.register("krGWQ",(function(e,t){var o,r,n,i;o=e.exports,r="refs",n=function(){return c},Object.defineProperty(o,r,{get:n,set:i,enumerable:!0,configurable:!0});const c={maim:document.querySelector("main"),contentsList:document.querySelector(".gallery"),searchInput:document.querySelector(".search__input"),form:document.querySelector(".search"),errorText:document.querySelector(".search__text"),paginationList:document.querySelector(".pagination"),backdrop:document.querySelector(".backdrop"),modalWindow:document.querySelector(".modal"),btnModalClose:document.querySelector(".modal__close"),modalPopular:document.querySelector(".popularity"),modalTags:document.querySelector(".tags"),modalRaiting:document.querySelector(".vote_average"),modalTitle:document.querySelector(".original_title"),modalOverview:document.querySelector(".overview"),modalContainer:document.querySelector(".modal__container"),modalImgBox:document.querySelector(".left-box"),toggleThemeBtn:document.querySelector(".user-tools__btn--toggle"),scrollToTop:document.querySelector(".fix-wrapper"),btnListModal:document.querySelector(".modal__btn-list"),addWatch:document.querySelector(".modal__btn--to-watched"),addQueue:document.querySelector(".modal__btn--to-queue")}})),r.register("e2dBH",(function(e,t){var o=r("krGWQ");const n=o.refs.toggleThemeBtn,i=o.refs.maim;n.addEventListener("click",(e=>{localStorage.getItem("KEY_STORAGE_THEME")||(e.currentTarget.classList.toggle("sun"),e.currentTarget.classList.toggle("moon"),localStorage.setItem("darkTheme","Dark"),i.classList.toggle("dark-theme"))}))})),r.register("eHKZt",(function(e,t){var o=r("krGWQ");r("9OeKo");const n=new class{scrollBy(){const{height:e}=o.refs.contentsList.getBoundingClientRect();return window.scrollBy({top:2*e,behavior:"smooth"})}useScrollToTop(){const e=o.refs.contentsList;return window.scrollTo({top:e,behavior:"smooth"})}showScroll(){o.refs.scrollToTop.classList.remove("hidden")}hideScroll(){o.refs.scrollToTop.classList.add("hidden")}handleBtnScroll(){document.documentElement.scrollTop>.5?this.showScroll():this.hideScroll()}constructor(){}};o.refs.scrollToTop.addEventListener("click",(()=>{n.useScrollToTop()})),document.addEventListener("scroll",(()=>{n.handleBtnScroll()}))})),r.register("9OeKo",(function(t,o){var r="Expected a function",n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=a||s||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,o){var n,i,c,l,u,a,s=0,d=!1,f=!1,y=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var o=n,r=i;return n=i=void 0,s=t,l=e.apply(r,o)}function T(e){return s=e,u=setTimeout(q,t),d?S(e):l}function b(e){var o=e-a;return void 0===a||o>=t||o<0||f&&e-s>=c}function q(){var e=g();if(b(e))return w(e);u=setTimeout(q,function(e){var o=t-(e-a);return f?p(o,c-(e-s)):o}(e))}function w(e){return u=void 0,y&&n?S(e):(n=i=void 0,l)}function _(){var e=g(),o=b(e);if(n=arguments,i=this,a=e,o){if(void 0===u)return T(a);if(f)return u=setTimeout(q,t),S(a)}return void 0===u&&(u=setTimeout(q,t)),l}return t=h(t)||0,v(o)&&(d=!!o.leading,c=(f="maxWait"in o)?m(h(o.maxWait)||0,t):c,y="trailing"in o?!!o.trailing:y),_.cancel=function(){void 0!==u&&clearTimeout(u),s=0,n=a=i=u=void 0},_.flush=function(){return void 0===u?l:w(g())},_}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var o=c.test(e);return o||l.test(e)?u(e.slice(2),o?2:8):i.test(e)?NaN:+e}t.exports=function(e,t,o){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return v(o)&&(n="leading"in o?!!o.leading:n,i="trailing"in o?!!o.trailing:i),y(e,t,{leading:n,maxWait:t,trailing:i})}}));
//# sourceMappingURL=index.c9140dd4.js.map
