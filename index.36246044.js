!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("ikNsj",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8dTuY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gOtiv"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r.default(i,n.prototype),i}).apply(null,arguments)}})),a.register("417tI",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("lhF45",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("eSWTR"))&&n.__esModule?n:{default:n}}));var i=a("4SB5o");a("fkwS8"),a("f4zPK");var o=a("cs7FV"),s=a("ddam7"),u=a("ipOD1"),c=a("eZ7d6"),l=a("2TvXO"),f=a("awd45"),d=a("6JpON"),p=a("l1Gdk"),h=new(0,f.default),v={categories:document.querySelector(".js-category"),categoriesOthers:document.querySelector(".js-category-others"),othersTextInBtn:document.querySelector(".js-text-btn")};function m(){return g.apply(this,arguments)}function g(){return(g=e(c)(e(l).mark((function t(){return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getNewsCategoryList();case 3:k(t.sent.results),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),e(d).Notify.warning("No response category list from server. Please, try again later."),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function y(){v.categories.innerHTML="",v.categoriesOthers.innerHTML=""}function k(e){window.matchMedia("(min-width: 1280px)").matches?(y(),function(e){for(var t="",n=0;n<6;n++)t+='\n            <li class="category__item"><button class="category__btn" type="button">'.concat(e[n].display_name,"</button></li>\n            ");v.categories.insertAdjacentHTML("beforeend",t)}(e),function(e){v.othersTextInBtn.textContent="Others";for(var t="",n=6;n<50;n++)t+='\n          <li class="others__item">\n            <button class="others__item-button">'.concat(e[n].display_name,"</button>\n          </li>\n            ");v.categoriesOthers.insertAdjacentHTML("beforeend",t)}(e)):window.matchMedia("(min-width: 768px)").matches?(y(),function(e){for(var t="",n=0;n<4;n++)t+='\n            <li class="category__item"><button class="category__btn" type="button">'.concat(e[n].display_name,"</button></li>\n            ");v.categories.insertAdjacentHTML("beforeend",t)}(e),function(e){v.othersTextInBtn.textContent="Others";for(var t="",n=4;n<50;n++)t+='\n          <li class="others__item">\n            <button class="others__item-button">'.concat(e[n].display_name,"</button>\n          </li>\n            ");v.categoriesOthers.insertAdjacentHTML("beforeend",t)}(e)):(y(),function(e){v.othersTextInBtn.textContent="Categories";for(var t="",n=0;n<50;n++)t+='\n          <li class="others__item">\n            <button class="others__item-button">'.concat(e[n].display_name,"</button>\n          </li>\n            ");v.categoriesOthers.insertAdjacentHTML("beforeend",t)}(e))}window.addEventListener("resize",e(p)((function(e){m()}),300));var b=a("huWaY"),w=a("fkwS8"),x=a("b1ywh"),I=a("btiby"),_=a("4o2tl"),T={calendarInput:document.querySelector(".js-calendar-input"),modal:document.querySelector("[data-calendar-modal]"),iconCalendar:document.querySelector(".calendar__icon-calendar"),iconCalendarOpen:document.querySelector(".calendar__icon-opened"),iconCalendarClose:document.querySelector(".calendar__icon-closed"),clickToBackdrop:document.querySelector(".backdrop")};function S(){T.modal.classList.toggle("is-hidden"),T.calendarInput.classList.toggle("is-active"),T.iconCalendar.classList.toggle("change-color-icon"),T.iconCalendarOpen.classList.toggle("display-none"),T.iconCalendarClose.classList.toggle("display-active"),T.clickToBackdrop.classList.toggle("display-none")}function E(e){return String(e).padStart(2,"0")}T.calendarInput.addEventListener("click",S),T.clickToBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&S()})),document.querySelector("[data-calendar-days]").addEventListener("click",(function(e){if("LI"!==e.target.nodeName||e.target.classList.contains("inactive"))return;var t=e.target,n=e.currentTarget.children,r=t.textContent;T.calendarInput.value="".concat(E(r),"/").concat(E(D+1),"/").concat(N),S();var a="".concat(N).concat(E(D+1)).concat(E(r));t.classList.add("selected-date"),Array.from(n).map((function(e){e.classList.contains("selected-date")&&(e.classList.remove("selected-date"),t.classList.add("selected-date"))})),(0,w.getCalendarDateForSearch)(a),(0,_.getCalendarDatePopular)("".concat(r,"/").concat(D+1,"/").concat(N)),(0,I.getCalendarDateByCategory)("".concat(r,"/").concat(D+1,"/").concat(N)),(0,x.getCalendarDateBySearch)("".concat(r,"/").concat(D+1,"/").concat(N))}));var O=document.querySelector(".days"),C=document.querySelector(".current-month"),A=document.querySelectorAll(".calendar__btn-wrapper button"),R=new Date,N=R.getFullYear(),D=R.getMonth(),P=["January","February","March","April","May","June","July","August","September","October","November","December"],L=function(){for(var e=new Date(N,D,0).getDay(),t=new Date(N,D+1,0).getDate(),n=new Date(N,D,t).getDay(),r=new Date(N,D,0).getDate(),a="",i=e;i>0;i--)a+='<li class="inactive">'.concat(r-i+1,"</li>");for(var o=1;o<=t;o++){var s=o===R.getDate()&&D===(new Date).getMonth()&&N===(new Date).getFullYear()?"current":"";a+='<li class="active '.concat(s,'">').concat(o,"</li>")}for(var u=n;u<7;u++)a+='<li class="inactive">'.concat(u-n+1,"</li>");C.innerText="".concat(P[D]," ").concat(N),O.innerHTML=a};function M(){var t=T.calendarInput.value,n=Number.parseInt(t);(void 0===t?"undefined":e(b)(t))!==Number&&Array.from(O.children).map((function(e){+e.textContent===n&&e.classList.contains("active")&&(e.classList.add("selected-date"),t="",T.calendarInput.value="".concat(E(n),"/").concat(E(D+1),"/").concat(N))}))}L(),A.forEach((function(e){e.addEventListener("click",(function(){(D="prev"===e.id?D-1:D+1)<0||D>11?(R=new Date(N,D,(new Date).getDate()),N=R.getFullYear(),D=R.getMonth()):R=new Date,L(),M()}))})),document.querySelector(".icon-month-forward").addEventListener("click",(function(){N-=1,L(),M()})),a("b1ywh"),a("40EMy"),a("fMavV");u=a("ipOD1");var j={openOthersBtn:document.querySelector(".js-others-btn"),othersWrapper:document.querySelector(".js-others-wrapper")};j.openOthersBtn.addEventListener("click",(function(e){j.othersWrapper.classList.toggle("is-open")}));var U={categories:document.querySelector(".js-category"),otherCategories:document.querySelector(".js-category-others"),othersWrapper:document.querySelector(".js-others-wrapper"),searchFormInHeader:document.querySelector("#form-field")},F=null;function B(e){if("BUTTON"===e.nodeName){if(null!==F&&F.contains("category-active"))return F.remove("category-active"),e.classList.add("category-active"),void(F=e.classList);(F=e.classList).add("category-active")}}U.categories.addEventListener("click",(function(e){U.othersWrapper.classList.remove("is-open"),B(e.target)})),U.otherCategories.addEventListener("click",(function(e){U.othersWrapper.classList.remove("is-open"),B(e.target)})),U.searchFormInHeader.addEventListener("submit",(function(e){U.othersWrapper.classList.remove("is-open"),null!==F&&F.remove("category-active")}));p=a("l1Gdk");var V=a("kiL67"),z=document.querySelector(".js-list-new");window.addEventListener("resize",e(p)((function(e){!function(e){for(var t=0,n=0;n<z.children.length;n++)if(z.children[n].children[0].classList.contains("weather")){t=n;break}var r=z.children[t];switch(e){case 0:z.prepend(r);break;case 1:z.prepend(r),z.insertBefore(r,z.children[2]);break;case 2:z.insertBefore(r,z.children[3]);break;default:console.log("re-build position successed")}}((0,V.resize)())}),1e3));i=a("4SB5o");a("6JpON");a("3Bv92");c=a("eZ7d6");var H=a("ckB89"),q=a("4mzug"),W=a("ikNsj"),K=a("jiX0X"),G=(l=a("2TvXO"),c=a("eZ7d6"),H=a("ckB89"),q=a("4mzug"),a("8sKqN")),J=(K=a("jiX0X"),l=a("2TvXO"),a("7SURw")),X=(H=a("ckB89"),q=a("4mzug"),a("k8LMu")),$=(G=a("8sKqN"),K=a("jiX0X"),{});Object.defineProperty($,"__esModule",{value:!0}),$.default=function(e){return ne(e)};var Y=te(a("8dTuY")),Z=te(a("417tI")),Q=te(a("eSWTR")),ee=te(a("gOtiv"));function te(e){return e&&e.__esModule?e:{default:e}}function ne(e){var t="function"==typeof Map?new Map:void 0;return ne=function(e){if(null===e||!Z.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Y.default(e,arguments,Q.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ee.default(n,e)},ne(e)}var re,ae,ie,oe=a("brQQZ"),se=re={};function ue(){throw new Error("setTimeout has not been defined")}function ce(){throw new Error("clearTimeout has not been defined")}function le(e){if(ae===setTimeout)return setTimeout(e,0);if((ae===ue||!ae)&&setTimeout)return ae=setTimeout,setTimeout(e,0);try{return ae(e,0)}catch(t){try{return ae.call(null,e,0)}catch(t){return ae.call(this,e,0)}}}!function(){try{ae="function"==typeof setTimeout?setTimeout:ue}catch(e){ae=ue}try{ie="function"==typeof clearTimeout?clearTimeout:ce}catch(e){ie=ce}}();var fe,de=[],pe=!1,he=-1;function ve(){pe&&fe&&(pe=!1,fe.length?de=fe.concat(de):he=-1,de.length&&me())}function me(){if(!pe){var e=le(ve);pe=!0;for(var t=de.length;t;){for(fe=de,de=[];++he<t;)fe&&fe[he].run();he=-1,t=de.length}fe=null,pe=!1,function(e){if(ie===clearTimeout)return clearTimeout(e);if((ie===ce||!ie)&&clearTimeout)return ie=clearTimeout,clearTimeout(e);try{ie(e)}catch(t){try{return ie.call(null,e)}catch(t){return ie.call(this,e)}}}(e)}}function ge(e,t){this.fun=e,this.array=t}function ye(){}se.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];de.push(new ge(e,t)),1!==de.length||pe||le(me)},ge.prototype.run=function(){this.fun.apply(null,this.array)},se.title="browser",se.browser=!0,se.env={},se.argv=[],se.version="",se.versions={},se.on=ye,se.addListener=ye,se.once=ye,se.off=ye,se.removeListener=ye,se.removeAllListeners=ye,se.emit=ye,se.prependListener=ye,se.prependOnceListener=ye,se.listeners=function(e){return[]},se.binding=function(e){throw new Error("process.binding is not supported")},se.cwd=function(){return"/"},se.chdir=function(e){throw new Error("process.chdir is not supported")},se.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ke=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},be={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,s=o?e[a+1]:0,u=a+2<e.length,c=u?e[a+2]:0,l=i>>2,f=(3&i)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ke(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],a=0;a<e.length;){var i=n[e.charAt(a++)],o=a<e.length?n[e.charAt(a)]:0,s=++a<e.length?n[e.charAt(a)]:64,u=++a<e.length?n[e.charAt(a)]:64;if(++a,null==i||null==o||null==s||null==u)throw Error();var c=i<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},we=function(e){return function(e){var t=ke(e);return be.encodeByteArray(t,!0)}(e).replace(/\./g,"")},xe=function(e){try{return be.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ie=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},_e=function(){try{return Ie()||function(){if(void 0!==re&&void 0!==re.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&xe(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Te=function(e){var t,n;return null===(n=null===(t=_e())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Se=function(){var e;return null===(e=_e())||void 0===e?void 0:e.config},Ee=function(e){var t;return null===(t=_e())||void 0===t?void 0:t["_".concat(e)]},Oe=function(){"use strict";function t(){var n=this;e(H)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(q)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ce(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ae(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Re(){try{return"object"==typeof indexedDB}catch(e){return!1}}function Ne(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=function(){a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=function(){n=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function De(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(t,a,i){var o;return e(H)(this,r),(o=n.call(this,a)).code=t,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(e(J)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(J)(o),Le.prototype.create),o}return r}(e($)(Error)),Le=function(){"use strict";function t(n,r,a){e(H)(this,t),this.service=n,this.serviceName=r,this.errors=a}return e(q)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Me(o,a):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(i,")."),c=new Pe(i,u,a);return c}}]),t}();function Me(e,t){return e.replace(je,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var je=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fe(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(Be(l)&&Be(f)){if(!Fe(l,f))return!1}else if(l!==f)return!1}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function Be(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=function(t,r){var a=e(G)(r.value,2),i=a[0],o=a[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(i)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n.length?"&"+n.join("&"):""}function ze(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(G)(t.split("="),2),a=r[0],i=r[1];n[decodeURIComponent(a)]=decodeURIComponent(i)}})),n}function He(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe=function(){"use strict";function t(n,r){var a=this;e(H)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(a)})).catch((function(e){a.error(e)}))}return e(q)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,a=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=We),void 0===r.error&&(r.error=We),void 0===r.complete&&(r.complete=We);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{a.finalError?r.error(a.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function We(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ke=144e5;function Ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(Ke,r+a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(e){return e&&e._delegate?e._delegate:e}var Xe=function(){"use strict";function t(n,r,a){e(H)(this,t),this.name=n,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(q)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),$e="[DEFAULT]",Ye=function(){"use strict";function t(n,r){e(H)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(q)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Oe;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:$e})}catch(e){}var n=!0,r=!1,a=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=e(G)(i.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(K)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(K)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error("".concat(this.name,"(").concat(a,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:a,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(G)(c.value,2),d=f[0],p=f[1],h=this.normalizeInstanceIdentifier(d);a===h&&p.resolve(i)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);var i=this.instances.get(r);return i&&e(i,r),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,a=void 0===r?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===$e?void 0:t),options:a}),this.instances.set(n,i),this.instancesOptions.set(n,a),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return this.component?this.component.multipleInstances?e:$e:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Qe,et=function(){"use strict";function t(n){e(H)(this,t),this.name=n,this.providers=new Map}return e(q)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ye(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),tt=(H=a("ckB89"),q=a("4mzug"),W=a("ikNsj"),K=a("jiX0X"),[]);(Qe=Ze||(Ze={}))[Qe.DEBUG=0]="DEBUG",Qe[Qe.VERBOSE=1]="VERBOSE",Qe[Qe.INFO=2]="INFO",Qe[Qe.WARN=3]="WARN",Qe[Qe.ERROR=4]="ERROR",Qe[Qe.SILENT=5]="SILENT";var nt,rt={debug:Ze.DEBUG,verbose:Ze.VERBOSE,info:Ze.INFO,warn:Ze.WARN,error:Ze.ERROR,silent:Ze.SILENT},at=Ze.INFO,it=(nt={},e(W)(nt,Ze.DEBUG,"log"),e(W)(nt,Ze.VERBOSE,"log"),e(W)(nt,Ze.INFO,"info"),e(W)(nt,Ze.WARN,"warn"),e(W)(nt,Ze.ERROR,"error"),nt),ot=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=it[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(K)(a)))}},st=function(){"use strict";function t(n){e(H)(this,t),this.name=n,this._logLevel=at,this._logHandler=ot,this._userLogHandler=null,tt.push(this)}return e(q)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Ze))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?rt[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ze.DEBUG].concat(e(K)(n))),this._logHandler.apply(this,[this,Ze.DEBUG].concat(e(K)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ze.VERBOSE].concat(e(K)(n))),this._logHandler.apply(this,[this,Ze.VERBOSE].concat(e(K)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ze.INFO].concat(e(K)(n))),this._logHandler.apply(this,[this,Ze.INFO].concat(e(K)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ze.WARN].concat(e(K)(n))),this._logHandler.apply(this,[this,Ze.WARN].concat(e(K)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ze.ERROR].concat(e(K)(n))),this._logHandler.apply(this,[this,Ze.ERROR].concat(e(K)(n)))}}]),t}();c=a("eZ7d6");var ut={};Object.defineProperty(ut,"__esModule",{value:!0}),ut.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){lt.default(e,t,n[t])}))}return e};var ct,lt=(ct=a("ikNsj"))&&ct.__esModule?ct:{default:ct};var ft,dt;K=a("jiX0X"),l=a("2TvXO"),K=a("jiX0X");var pt=new WeakMap,ht=new WeakMap,vt=new WeakMap,mt=new WeakMap,gt=new WeakMap;var yt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ht.get(e);if("objectStoreNames"===t)return e.objectStoreNames||vt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function kt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(dt||(dt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(xt(this),n),wt(pt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return wt(t.apply(xt(this),n))}:function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[xt(this),n].concat(e(K)(a)));return vt.set(s,n.sort?n.sort():[n]),wt(s)}}function bt(e){return"function"==typeof e?kt(e):(e instanceof IDBTransaction&&function(e){if(!ht.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),r()},i=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));ht.set(e,t)}}(e),t=e,(ft||(ft=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,yt):e);var t}function wt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(wt(t.result)),r()},i=function(){n(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&pt.set(e,t)})).catch((function(){})),gt.set(n,t),n;var t,n;if(mt.has(e))return mt.get(e);var r=bt(e);return r!==e&&(mt.set(e,r),gt.set(r,e)),r}var xt=function(e){return gt.get(e)};function It(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,a=n.upgrade,i=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=wt(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(wt(s.result),e.oldVersion,e.newVersion,wt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}var _t=["get","getKey","getAll","getAllKeys","count"],Tt=["put","add","delete","clear"],St=new Map;function Et(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(St.get(n))return St.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,i=Tt.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(i||_t.includes(r))){var o,s=(o=e(c)(e(l).mark((function t(n){var o,s,u,c,f,d,p=arguments;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=p.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=p[u];return f=this.transaction(n,i?"readwrite":"readonly"),d=f.store,a&&(d=d.index(s.shift())),t.next=7,Promise.all([(c=d)[r].apply(c,e(K)(s)),i&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)});return St.set(n,s),s}}}yt=function(t){return e(ut)({},t,{get:function(e,n,r){return Et(e,n)||t.get(e,n,r)},has:function(e,n){return!!Et(e,n)||t.has(e,n)}})}(yt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ot=function(){"use strict";function t(n){e(H)(this,t),this.container=n}return e(q)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Ct,At,Rt="@firebase/app",Nt="0.9.3",Dt=new st("@firebase/app"),Pt="[DEFAULT]",Lt=(Ct={},e(W)(Ct,Rt,"fire-core"),e(W)(Ct,"@firebase/app-compat","fire-core-compat"),e(W)(Ct,"@firebase/analytics","fire-analytics"),e(W)(Ct,"@firebase/analytics-compat","fire-analytics-compat"),e(W)(Ct,"@firebase/app-check","fire-app-check"),e(W)(Ct,"@firebase/app-check-compat","fire-app-check-compat"),e(W)(Ct,"@firebase/auth","fire-auth"),e(W)(Ct,"@firebase/auth-compat","fire-auth-compat"),e(W)(Ct,"@firebase/database","fire-rtdb"),e(W)(Ct,"@firebase/database-compat","fire-rtdb-compat"),e(W)(Ct,"@firebase/functions","fire-fn"),e(W)(Ct,"@firebase/functions-compat","fire-fn-compat"),e(W)(Ct,"@firebase/installations","fire-iid"),e(W)(Ct,"@firebase/installations-compat","fire-iid-compat"),e(W)(Ct,"@firebase/messaging","fire-fcm"),e(W)(Ct,"@firebase/messaging-compat","fire-fcm-compat"),e(W)(Ct,"@firebase/performance","fire-perf"),e(W)(Ct,"@firebase/performance-compat","fire-perf-compat"),e(W)(Ct,"@firebase/remote-config","fire-rc"),e(W)(Ct,"@firebase/remote-config-compat","fire-rc-compat"),e(W)(Ct,"@firebase/storage","fire-gcs"),e(W)(Ct,"@firebase/storage-compat","fire-gcs-compat"),e(W)(Ct,"@firebase/firestore","fire-fst"),e(W)(Ct,"@firebase/firestore-compat","fire-fst-compat"),e(W)(Ct,"fire-js","fire-js"),e(W)(Ct,"firebase","fire-js-all"),Ct),Mt=new Map,jt=new Map;function Ut(e,t){try{e.container.addComponent(t)}catch(n){Dt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Ft(e){var t=e.name;if(jt.has(t))return Dt.debug("There were multiple attempts to register component ".concat(t,".")),!1;jt.set(t,e);var n=!0,r=!1,a=void 0;try{for(var i,o=Mt.values()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){Ut(i.value,e)}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!0}function Bt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vt=(At={},e(W)(At,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(W)(At,"bad-app-name","Illegal App name: '{$appName}"),e(W)(At,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(W)(At,"app-deleted","Firebase App named '{$appName}' already deleted"),e(W)(At,"no-options","Need to provide options, when not being deployed to hosting via source."),e(W)(At,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(W)(At,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(W)(At,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(W)(At,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(W)(At,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(W)(At,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),At),zt=new Le("app","Firebase",Vt),Ht=function(){"use strict";function t(n,r,a){var i=this;e(H)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Xe("app",(function(){return i}),"PUBLIC"))}return e(q)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}]),t}(),qt="9.17.1";function Wt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var a=Object.assign({name:Pt,automaticDataCollectionEnabled:!1},t),i=a.name;if("string"!=typeof i||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=Se()),!n)throw zt.create("no-options");var o=Mt.get(i);if(o){if(Fe(n,o.options)&&Fe(a,o.config))return o;throw zt.create("duplicate-app",{appName:i})}var s=new et(i),u=!0,c=!1,l=void 0;try{for(var f,d=jt.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=f.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var h=new Ht(n,a,s);return Mt.set(i,h),h}function Kt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=Mt.get(e);if(!t&&e===Pt)return Wt();if(!t)throw zt.create("no-app",{appName:e});return t}function Gt(e,t,n){var r,a=null!==(r=Lt[e])&&void 0!==r?r:e;n&&(a+="-".concat(n));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var s=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&s.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Dt.warn(s.join(" "))}Ft(new Xe("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jt="firebase-heartbeat-store",Xt=null;function $t(){return Xt||(Xt=It("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Jt)}}).catch((function(e){throw zt.create("idb-open",{originalErrorMessage:e.message})}))),Xt}function Yt(e){return Zt.apply(this,arguments)}function Zt(){return(Zt=e(c)(e(l).mark((function t(n){var r,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$t();case 3:return r=e.sent,e.abrupt("return",r.transaction(Jt).objectStore(Jt).get(tn(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Pe?Dt.warn(e.t0.message):(a=zt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Dt.warn(a.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Qt(e,t){return en.apply(this,arguments)}function en(){return(en=e(c)(e(l).mark((function t(n,r){var a,i,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$t();case 3:return a=e.sent,i=a.transaction(Jt,"readwrite"),o=i.objectStore(Jt),e.next=8,o.put(r,tn(n));case 8:return e.abrupt("return",i.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof Pe?Dt.warn(e.t0.message):(s=zt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Dt.warn(s.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function tn(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn=function(){"use strict";function t(n){var r=this;e(H)(this,t),this.container=n,this._heartbeatsCache=null;var a=this.container.getProvider("app").getImmediate();this._storage=new sn(a),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(q)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),a=r.getPlatformInfoString(),i=rn(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==i&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:i,agent:a});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r,a,i,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=rn(),a=an(t._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,o=a.unsentEntries,s=we(JSON.stringify({version:2,heartbeats:i})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function rn(){return(new Date).toISOString().substring(0,10)}function an(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),a=!0,i=!1,o=void 0;try{for(var s,u=function(e,a){var i=a.value,o=n.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),un(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:i.agent,dates:[i.date]}),un(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=u(c,s);if("break"===l)break}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var on,sn=function(){"use strict";function t(n){e(H)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(q)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Re()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",Ne().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Yt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return i=e.sent,e.abrupt("return",Qt(n.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return i=r.sent,r.abrupt("return",Qt(n.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:e(K)(i.heartbeats).concat(e(K)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function un(e){return we(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on="",Ft(new Xe("platform-logger",(function(e){return new Ot(e)}),"PRIVATE")),Ft(new Xe("heartbeat",(function(e){return new nn(e)}),"PRIVATE")),Gt(Rt,Nt,on),Gt(Rt,Nt,"esm2017"),Gt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Gt("firebase","9.17.1","app");c=a("eZ7d6"),H=a("ckB89"),q=a("4mzug"),W=a("ikNsj"),G=a("8sKqN"),l=a("2TvXO"),c=a("eZ7d6"),W=a("ikNsj"),K=a("jiX0X"),l=a("2TvXO");var cn,ln="@firebase/installations",fn="0.6.3",dn=1e4,pn="w:".concat(fn),hn="FIS_v2",vn=36e5,mn=(cn={},e(W)(cn,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(W)(cn,"not-registered","Firebase Installation is not registered."),e(W)(cn,"installation-not-found","Firebase Installation not found."),e(W)(cn,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(W)(cn,"app-offline","Could not process request. Application offline."),e(W)(cn,"delete-pending-registration","Can't delete installation while there is a pending registration request."),cn),gn=new Le("installations","Installations",mn);function yn(e){return e instanceof Pe&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function bn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function wn(e,t){return xn.apply(this,arguments)}function xn(){return(xn=e(c)(e(l).mark((function t(n,r){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return a=e.sent,i=a.error,e.abrupt("return",gn.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function In(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _n(e,t){var n=t.refreshToken,r=In(e);return r.append("Authorization",function(e){return"".concat(hn," ").concat(e)}(n)),r}function Tn(e){return Sn.apply(this,arguments)}function Sn(){return(Sn=e(c)(e(l).mark((function t(n){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function En(e,t){return On.apply(this,arguments)}function On(){return(On=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){var a,i,o,s,u,c,f,d,p,h,v,m;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.appConfig,i=n.heartbeatServiceProvider,o=r.fid,s=kn(a),u=In(a),!(c=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(f=e.sent)&&u.append("x-firebase-client",f);case 9:return d={fid:o,authVersion:hn,appId:a.appId,sdkVersion:pn},p={method:"POST",headers:u,body:JSON.stringify(d)},e.next=13,Tn((function(){return fetch(s,p)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return v=e.sent,m={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:bn(v.authToken)},e.abrupt("return",m);case 22:return e.next=24,wn("Create Installation",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var An=/^[cdef][\w-]{21}$/;function Rn(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(K)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return An.test(n)?n:""}catch(e){return""}}function Nn(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn=new Map;function Pn(e,t){var n=Nn(e);Ln(n,t),function(e,t){var n=jn();n&&n.postMessage({key:e,fid:t});Un()}(n,t)}function Ln(e,t){var n=Dn.get(e);if(n){var r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}}var Mn=null;function jn(){return!Mn&&"BroadcastChannel"in self&&((Mn=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Ln(e.data.key,e.data.fid)}),Mn}function Un(){0===Dn.size&&Mn&&(Mn.close(),Mn=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn="firebase-installations-store",Bn=null;function Vn(){return Bn||(Bn=It("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Fn)}})),Bn}function zn(e,t){return Hn.apply(this,arguments)}function Hn(){return(Hn=e(c)(e(l).mark((function t(n,r){var a,i,o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Nn(n),e.next=3,Vn();case 3:return i=e.sent,o=i.transaction(Fn,"readwrite"),s=o.objectStore(Fn),e.next=8,s.get(a);case 8:return u=e.sent,e.next=11,s.put(r,a);case 11:return e.next=13,o.done;case 13:return u&&u.fid===r.fid||Pn(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qn(e){return Wn.apply(this,arguments)}function Wn(){return(Wn=e(c)(e(l).mark((function t(n){var r,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Nn(n),e.next=3,Vn();case 3:return a=e.sent,i=a.transaction(Fn,"readwrite"),e.next=7,i.objectStore(Fn).delete(r);case 7:return e.next=9,i.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Kn(e,t){return Gn.apply(this,arguments)}function Gn(){return(Gn=e(c)(e(l).mark((function t(n,r){var a,i,o,s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Nn(n),e.next=3,Vn();case 3:return i=e.sent,o=i.transaction(Fn,"readwrite"),s=o.objectStore(Fn),e.next=8,s.get(a);case 8:if(u=e.sent,void 0!==(c=r(u))){e.next=15;break}return e.next=13,s.delete(a);case 13:e.next=17;break;case 15:return e.next=17,s.put(c,a);case 17:return e.next=19,o.done;case 19:return!c||u&&u.fid===c.fid||Pn(n,c.fid),e.abrupt("return",c);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Jn(e){return Xn.apply(this,arguments)}function Xn(){return(Xn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n){var r,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Kn(n.appConfig,(function(e){var t=$n(e),a=Yn(n,t);return r=a.registrationPromise,a.installationEntry}));case 3:if(""!==(a=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:a,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $n(e){return nr(e||{fid:Rn(),registrationStatus:0})}function Yn(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(gn.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return Zn.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Qn(e)}:{installationEntry:t}}function Zn(){return(Zn=e(c)(e(l).mark((function t(n,r){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,En(n,r);case 3:return a=e.sent,e.abrupt("return",zn(n.appConfig,a));case 7:if(e.prev=7,e.t0=e.catch(0),!yn(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,qn(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,zn(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Qn(e){return er.apply(this,arguments)}function er(){return(er=e(c)(e(l).mark((function t(n){var r,a,i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tr(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,Cn(100);case 6:return e.next=8,tr(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,Jn(n);case 14:if(a=e.sent,i=a.installationEntry,!(o=a.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",i);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function tr(e){return Kn(e,(function(e){if(!e)throw gn.create("installation-not-found");return nr(e)}))}function nr(e){return 1===(t=e).registrationStatus&&t.registrationTime+dn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function rr(e,t){return ar.apply(this,arguments)}function ar(){return(ar=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){var a,i,o,s,u,c,f,d,p,h,v;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.appConfig,i=n.heartbeatServiceProvider,o=ir(a,r),s=_n(a,r),!(u=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(c=e.sent)&&s.append("x-firebase-client",c);case 9:return f={installation:{sdkVersion:pn,appId:a.appId}},d={method:"POST",headers:s,body:JSON.stringify(f)},e.next=13,Tn((function(){return fetch(o,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return h=e.sent,v=bn(h),e.abrupt("return",v);case 22:return e.next=24,wn("Generate Auth Token",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ir(e,t){var n=t.fid;return"".concat(kn(e),"/").concat(n,"/authTokens:generate")}function or(e){return sr.apply(this,arguments)}function sr(){return sr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n){var r,a,i,o,s=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,Kn(n.appConfig,(function(e){if(!pr(e))throw gn.create("not-registered");var t=e.authToken;if(!r&&hr(t))return e;if(1===t.requestStatus)return a=ur(n,r),e;if(!navigator.onLine)throw gn.create("app-offline");var i=vr(e);return a=fr(n,i),i}));case 4:if(i=e.sent,!a){e.next=11;break}return e.next=8,a;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=i.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),sr.apply(this,arguments)}function ur(e,t){return cr.apply(this,arguments)}function cr(){return(cr=e(c)(e(l).mark((function t(n,r){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,lr(n.appConfig);case 2:a=e.sent;case 3:if(1!==a.authToken.requestStatus){e.next=11;break}return e.next=6,Cn(100);case 6:return e.next=8,lr(n.appConfig);case 8:a=e.sent,e.next=3;break;case 11:if(0!==(i=a.authToken).requestStatus){e.next=16;break}return e.abrupt("return",or(n,r));case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function lr(e){return Kn(e,(function(e){if(!pr(e))throw gn.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+dn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function fr(e,t){return dr.apply(this,arguments)}function dr(){return(dr=e(c)(e(l).mark((function t(n,r){var a,i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,rr(n,r);case 3:return a=e.sent,i=Object.assign(Object.assign({},r),{authToken:a}),e.next=7,zn(n.appConfig,i);case 7:return e.abrupt("return",a);case 10:if(e.prev=10,e.t0=e.catch(0),!yn(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,qn(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,zn(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function pr(e){return void 0!==e&&2===e.registrationStatus}function hr(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+vn}(e)}function vr(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function mr(){return(mr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n){var r,a,i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,Jn(r);case 3:return a=e.sent,i=a.installationEntry,(o=a.registrationPromise)?o.catch(console.error):or(r).catch(console.error),e.abrupt("return",i.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gr(){return gr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n){var r,a,i,o=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],a=n,e.next=4,yr(a);case 4:return e.next=6,or(a,r);case 6:return i=e.sent,e.abrupt("return",i.token);case 8:case"end":return e.stop()}}),t)}))),gr.apply(this,arguments)}function yr(e){return kr.apply(this,arguments)}function kr(){return(kr=e(c)(e(l).mark((function t(n){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Jn(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function br(e){return gn.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wr="installations",xr=function(e){var t=Bt(e.getProvider("app").getImmediate(),wr).getImmediate(),n={getId:function(){return function(e){return mr.apply(this,arguments)}(t)},getToken:function(e){return function(e){return gr.apply(this,arguments)}(t,e)}};return n};Ft(new Xe(wr,(function(e){var t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw br("App Configuration");if(!e.name)throw br("App Name");var t=!0,n=!1,r=void 0;try{for(var a,i=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;if(!e.options[o])throw br(o)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Bt(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),Ft(new Xe("installations-internal",xr,"PRIVATE")),Gt(ln,fn),Gt(ln,fn,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ir,_r="analytics",Tr=6e4,Sr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Er="https://www.googletagmanager.com/gtag/js",Or=new st("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cr(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function Ar(e,t){var n=document.createElement("script");n.src="".concat(Er,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function Rr(e,t,n,r,a,i){return Nr.apply(this,arguments)}function Nr(){return(Nr=e(c)(e(l).mark((function t(n,r,a,i,o,s){var u,c,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=i[o],e.prev=1,!u){e.next=7;break}return e.next=5,r[u];case 5:e.next=14;break;case 7:return e.next=9,Cr(a);case 9:if(c=e.sent,!(f=c.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[f.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),Or.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function Dr(e,t,n,r,a){return Pr.apply(this,arguments)}function Pr(){return(Pr=e(c)(e(l).mark((function t(n,r,a,i,o){var s,u,c,f,d,p,h,v,m,g,y;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,Cr(a);case 7:c=e.sent,f=!0,d=!1,p=void 0,e.prev=9,h=u[Symbol.iterator]();case 11:if(f=(v=h.next()).done){e.next=24;break}if(m=v.value,g=c.find((function(e){return e.measurementId===m})),!(y=g&&r[g.appId])){e.next=19;break}s.push(y),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:f=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),d=!0,p=e.t0;case 30:e.prev=30,e.prev=31,f||null==h.return||h.return();case 33:if(e.prev=33,!d){e.next=36;break}throw p;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",i,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),Or.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Lr(t,n,r,a,i){var o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[a].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=function(t,n,r,a){function i(){return(i=e(c)(e(l).mark((function i(o,s,u){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==o){e.next=6;break}return e.next=4,Dr(t,n,r,s,u);case 4:e.next=12;break;case 6:if("config"!==o){e.next=11;break}return e.next=9,Rr(t,n,r,a,s,u);case 9:e.next=12;break;case 11:"consent"===o?t("consent","update",u):t("set",s);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),Or.error(e.t0);case 17:case"end":return e.stop()}}),i,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return i.apply(this,arguments)}}(o,t,n,r),{gtagCore:o,wrappedGtag:window[i]}}function Mr(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,a=void 0;try{for(var i,o=Object.values(t)[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(s.src&&s.src.includes(Er)&&s.src.includes(e))return s}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jr=(Ir={},e(W)(Ir,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(W)(Ir,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(W)(Ir,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(W)(Ir,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(W)(Ir,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(W)(Ir,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(W)(Ir,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(W)(Ir,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(W)(Ir,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(W)(Ir,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Ir),Ur=new Le("analytics","Analytics",jr),Fr=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(H)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(q)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),Br=new Fr;function Vr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function zr(e){return Hr.apply(this,arguments)}function Hr(){return(Hr=e(c)(e(l).mark((function t(n){var r,a,i,o,s,u,c,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.appId,i=n.apiKey,o={method:"GET",headers:Vr(i)},s=Sr.replace("{app-id}",a),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return c="",e.prev=9,e.next=12,u.json();case 12:f=e.sent,(null===(r=f.error)||void 0===r?void 0:r.message)&&(c=f.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw Ur.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function qr(e){return Wr.apply(this,arguments)}function Wr(){return Wr=e(c)(e(l).mark((function t(n){var r,a,i,o,s,u,f,d,p=arguments;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:Br,a=p.length>2?p[2]:void 0,i=n.options,o=i.appId,s=i.apiKey,u=i.measurementId,o){t.next=4;break}throw Ur.create("no-app-id");case 4:if(s){t.next=8;break}if(!u){t.next=7;break}return t.abrupt("return",{measurementId:u,appId:o});case 7:throw Ur.create("no-api-key");case 8:return f=r.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new Zr,setTimeout(e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==a?a:Tr),t.abrupt("return",Kr({appId:o,apiKey:s,measurementId:u},f,d,r));case 12:case"end":return t.stop()}}),t)}))),Wr.apply(this,arguments)}function Kr(e,t,n){return Gr.apply(this,arguments)}function Gr(){return Gr=e(c)(e(l).mark((function t(n,r,a){var i,o,s,u,c,f,d,p,h,v,m=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.throttleEndTimeMillis,o=r.backoffCount,s=m.length>3&&void 0!==m[3]?m[3]:Br,c=n.appId,f=n.measurementId,e.prev=3,e.next=6,Jr(a,i);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return Or.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,"]")),e.abrupt("return",{appId:c,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,zr(n);case 17:return d=e.sent,s.deleteThrottleMetadata(c),e.abrupt("return",d);case 22:if(e.prev=22,e.t1=e.catch(14),Xr(p=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(c),!f){e.next=32;break}return Or.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==p?void 0:p.message,"]")),e.abrupt("return",{appId:c,measurementId:f});case 32:throw e.t1;case 33:return h=503===Number(null===(u=null==p?void 0:p.customData)||void 0===u?void 0:u.httpStatus)?Ge(o,s.intervalMillis,30):Ge(o,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+h,backoffCount:o+1},s.setThrottleMetadata(c,v),Or.debug("Calling attemptFetch again in ".concat(h," millis")),e.abrupt("return",Kr(n,v,a,s));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),Gr.apply(this,arguments)}function Jr(e,t){return new Promise((function(n,r){var a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener((function(){clearTimeout(i),r(Ur.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Xr(e){if(!(e instanceof Pe&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var $r,Yr,Zr=function(){"use strict";function t(){e(H)(this,t),this.listeners=[]}return e(q)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(){return(Qr=e(c)(e(l).mark((function t(n,r,a,i,o){var s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",a,i),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,u=Object.assign(Object.assign({},i),{send_to:s}),n("event",a,u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ea(e){Yr=e}function ta(e){$r=e}function na(){return ra.apply(this,arguments)}function ra(){return(ra=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Re()){e.next=5;break}return Or.warn(Ur.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,Ne();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),Or.warn(Ur.create("indexeddb-unavailable",{errorInfo:null===e.t0||void 0===e.t0?void 0:e.t0.toString()}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}function aa(){return(aa=e(c)(e(l).mark((function t(n,r,a,i,o,s,u){var c,f,d,p,h,v,m;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(f=qr(n)).then((function(e){a[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&Or.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return Or.error(e)})),r.push(f),d=na().then((function(e){return e?i.getId():void 0})),t.t0=e(G),t.next=8,Promise.all([f,d]);case 8:return t.t1=t.sent,p=(0,t.t0)(t.t1,2),h=p[0],v=p[1],Mr(s)||Ar(s,h.measurementId),Yr&&(o("consent","default",Yr),ea(void 0)),o("js",new Date),(m=null!==(c=null==u?void 0:u.config)&&void 0!==c?c:{}).origin="firebase",m.update=!0,null!=v&&(m.firebase_id=v),o("config",h.measurementId,m),$r&&(o("set",$r),ta(void 0)),t.abrupt("return",h.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ia,oa,sa=function(){"use strict";function t(n){e(H)(this,t),this.app=n}return e(q)(t,[{key:"_delete",value:function(){return delete ua[this.app.options.appId],Promise.resolve()}}]),t}(),ua={},ca=[],la={},fa="dataLayer",da="gtag",pa=!1;function ha(e,t,n){!function(){var e=[];if(Ae()&&e.push("This is a browser extension environment."),De()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=Ur.create("invalid-analytics-context",{errorInfo:t});Or.warn(n.message)}}();var r,a,i=e.options.appId;if(!i)throw Ur.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Ur.create("no-api-key");Or.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=ua[i])throw Ur.create("already-exists",{id:i});if(!pa){r=fa,a=[],Array.isArray(window[r])?a=window[r]:window[r]=a;var o=Lr(ua,ca,la,fa,da),s=o.wrappedGtag,u=o.gtagCore;oa=s,ia=u,pa=!0}return ua[i]=function(e,t,n,r,a,i,o){return aa.apply(this,arguments)}(e,ca,la,t,ia,fa,n),new sa(e)}function va(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Bt(e,_r);if(n.isInitialized()){var r=n.getImmediate();if(Fe(t,n.getOptions()))return r;throw Ur.create("already-initialized")}var a=n.initialize({options:t});return a}function ma(e,t,n,r){e=Je(e),function(e,t,n,r,a){return Qr.apply(this,arguments)}(oa,ua[e.app.options.appId],t,n,r).catch((function(e){return Or.error(e)}))}var ga="@firebase/analytics",ya="0.9.3";Ft(new Xe(_r,(function(e,t){var n=t.options;return ha(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),Ft(new Xe("analytics-internal",(function(e){try{var t=e.getProvider(_r).getImmediate();return{logEvent:function(e,n,r){return ma(t,e,n,r)}}}catch(e){throw Ur.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Gt(ga,ya),Gt(ga,ya,"esm2017");J=a("7SURw"),c=a("eZ7d6"),H=a("ckB89"),q=a("4mzug"),W=a("ikNsj");var ka={};Object.defineProperty(ka,"__esModule",{value:!0}),ka.default=function(e,t,n){return wa(e,t,n)};var ba=function(e){return e&&e.__esModule?e:{default:e}}(a("lhF45"));function wa(e,t,n){return(wa="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=ba.default(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}var xa=a("eSWTR");X=a("k8LMu"),G=a("8sKqN"),K=a("jiX0X"),oe=a("brQQZ"),l=a("2TvXO");function Ia(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}Object.create;Object.create;function _a(){return e(W)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Ta=_a,Sa=new Le("auth","Firebase",_a()),Ea=new st("@firebase/auth");function Oa(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i;Ea.logLevel<=Ze.ERROR&&(i=Ea).error.apply(i,["Auth (".concat(qt,"): ").concat(t)].concat(e(K)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];throw Na.apply(void 0,[t].concat(e(K)(r)))}function Aa(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Na.apply(void 0,[t].concat(e(K)(r)))}function Ra(t,n,r){var a=Object.assign(Object.assign({},Ta()),e(W)({},n,r));return new Le("auth","Firebase",a).create(n,{appName:t.name})}function Na(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i;if("string"!=typeof t){var o,s=r[0],u=e(K)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(K)(u)))}return(i=Sa).create.apply(i,[t].concat(e(K)(r)))}function Da(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];if(!t)throw Na.apply(void 0,[n].concat(e(K)(a)))}function Pa(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Oa(t),new Error(t)}function La(e,t){e||Pa(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ma=new Map;function ja(e){La(e instanceof Function,"Expected a class definition");var t=Ma.get(e);return t?(La(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ma.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e,t){var n=Bt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Fe(n.getOptions(),null!=t?t:{}))return r;Ca(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fa(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ba(){return"http:"===Va()||"https:"===Va()}function Va(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var za=function(){"use strict";function t(n,r){e(H)(this,t),this.shortDelay=n,this.longDelay=r,La(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(q)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ba()||Ae()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e,t){La(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qa,Wa=function(){"use strict";function t(){e(H)(this,t)}return e(q)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Pa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Pa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Pa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Ka=(qa={},e(W)(qa,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(W)(qa,"MISSING_CUSTOM_TOKEN","internal-error"),e(W)(qa,"INVALID_IDENTIFIER","invalid-email"),e(W)(qa,"MISSING_CONTINUE_URI","internal-error"),e(W)(qa,"INVALID_PASSWORD","wrong-password"),e(W)(qa,"MISSING_PASSWORD","internal-error"),e(W)(qa,"EMAIL_EXISTS","email-already-in-use"),e(W)(qa,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(W)(qa,"INVALID_IDP_RESPONSE","invalid-credential"),e(W)(qa,"INVALID_PENDING_TOKEN","invalid-credential"),e(W)(qa,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(W)(qa,"MISSING_REQ_TYPE","internal-error"),e(W)(qa,"EMAIL_NOT_FOUND","user-not-found"),e(W)(qa,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(W)(qa,"EXPIRED_OOB_CODE","expired-action-code"),e(W)(qa,"INVALID_OOB_CODE","invalid-action-code"),e(W)(qa,"MISSING_OOB_CODE","internal-error"),e(W)(qa,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(W)(qa,"INVALID_ID_TOKEN","invalid-user-token"),e(W)(qa,"TOKEN_EXPIRED","user-token-expired"),e(W)(qa,"USER_NOT_FOUND","user-token-expired"),e(W)(qa,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(W)(qa,"INVALID_CODE","invalid-verification-code"),e(W)(qa,"INVALID_SESSION_INFO","invalid-verification-id"),e(W)(qa,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(W)(qa,"MISSING_SESSION_INFO","missing-verification-id"),e(W)(qa,"SESSION_EXPIRED","code-expired"),e(W)(qa,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(W)(qa,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(W)(qa,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(W)(qa,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(W)(qa,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(W)(qa,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(W)(qa,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(W)(qa,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(W)(qa,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(W)(qa,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(W)(qa,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),qa),Ga=new za(3e4,6e4);function Ja(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Xa(e,t,n,r){return $a.apply(this,arguments)}function $a(){return $a=e(c)(e(l).mark((function t(n,r,a,i){var o,s=arguments;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},t.abrupt("return",Ya(n,o,e(c)(e(l).mark((function t(){var o,s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},i&&("GET"===r?s=i:o={body:JSON.stringify(i)}),u=Ve(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Wa.fetch()(ti(n,n.config.apiHost,a,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),$a.apply(this,arguments)}function Ya(e,t,n){return Za.apply(this,arguments)}function Za(){return(Za=e(c)(e(l).mark((function t(n,r,a){var i,o,s,u,c,f,d,p,h;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,i=Object.assign(Object.assign({},Ka),r),t.prev=2,o=new ni(n),t.next=6,Promise.race([a(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw ri(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,f=e(G)(c.split(" : "),2),d=f[0],p=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw ri(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw ri(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw ri(n,"user-disabled",u);case 29:if(h=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){t.next=34;break}throw Ra(n,h,p);case 34:Ca(n,h);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Pe)){t.next=41;break}throw t.t0;case 41:Ca(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Qa(e,t,n,r){return ei.apply(this,arguments)}function ei(){return ei=e(c)(e(l).mark((function t(n,r,a,i){var o,s,u=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Xa(n,r,a,i,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&Ca(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),ei.apply(this,arguments)}function ti(e,t,n,r){var a="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Ha(e.config,a):"".concat(e.config.apiScheme,"://").concat(a)}var ni=function(){"use strict";function t(n){var r=this;e(H)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Aa(n.auth,"network-request-failed"))}),Ga.get())}))}return e(q)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function ri(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var a=Aa(e,t,r);return a.customData._tokenResponse=n,a}function ai(e,t){return ii.apply(this,arguments)}function ii(){return(ii=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Xa(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function oi(e,t){return si.apply(this,arguments)}function si(){return(si=e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Xa(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return ci=e(c)(e(l).mark((function t(n){var r,a,i,o,s,u,c=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],a=Je(n),e.next=4,a.getIdToken(r);case 4:return i=e.sent,Da((o=fi(i))&&o.exp&&o.auth_time&&o.iat,a.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:i,authTime:ui(li(o.auth_time)),issuedAtTime:ui(li(o.iat)),expirationTime:ui(li(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),ci.apply(this,arguments)}function li(e){return 1e3*Number(e)}function fi(t){var n=e(G)(t.split("."),3),r=n[0],a=n[1],i=n[2];if(void 0===r||void 0===a||void 0===i)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{var o=xe(a);return o?JSON.parse(o):(Oa("Failed to decode base64 JWT payload"),null)}catch(e){return Oa("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function di(e,t){return pi.apply(this,arguments)}function pi(){return pi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){var a=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>2&&void 0!==a[2]&&a[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Pe&&hi(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),pi.apply(this,arguments)}function hi(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi=function(){"use strict";function t(n){e(H)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(q)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),mi=function(){"use strict";function t(n,r){e(H)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(q)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){return yi.apply(this,arguments)}function yi(){return(yi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n){var r,a,i,o,s,u,c,f,d,p,h;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.auth,e.next=4,n.getIdToken();case 4:return i=e.sent,e.next=7,di(n,oi(a,{idToken:i}));case 7:Da(null==(o=e.sent)?void 0:o.users.length,a,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?wi(s.providerUserInfo):[],c=bi(n.providerData,u),f=n.isAnonymous,d=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),p=!!f&&d,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new mi(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(n,h);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ki(){return(ki=e(c)(e(l).mark((function t(n){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Je(n),e.next=3,gi(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bi(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(K)(r).concat(e(K)(n))}function wi(e){return e.map((function(e){var t=e.providerId,n=Ia(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function xi(e,t){return Ii.apply(this,arguments)}function Ii(){return(Ii=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){var a;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ya(n,{},e(c)(e(l).mark((function t(){var a,i,o,s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ve({grant_type:"refresh_token",refresh_token:r}).slice(1),i=n.config,o=i.tokenApiHost,s=i.apiKey,u=ti(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Wa.fetch()(u,{method:"POST",headers:c,body:a}));case 8:case"end":return e.stop()}}),t)}))));case 2:return a=t.sent,t.abrupt("return",{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i=function(){"use strict";function t(){e(H)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(q)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Da(e.idToken,"internal-error"),Da(void 0!==e.idToken,"internal-error"),Da(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Da(n=fi(t),"internal-error"),Da(void 0!==n.exp,"internal-error"),Da(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Da(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),a)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(c)(e(l).mark((function a(){var i,o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xi(t,n);case 2:i=e.sent,o=i.accessToken,s=i.refreshToken,u=i.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),a)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Pa("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,a=n.accessToken,i=n.expirationTime,o=new t;return r&&(Da("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),a&&(Da("string"==typeof a,"internal-error",{appName:e}),o.accessToken=a),i&&(Da("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e,t){Da("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Si=function(){"use strict";function t(n){e(H)(this,t);var r=n.uid,a=n.auth,i=n.stsTokenManager,o=Ia(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=a,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(K)(o.providerData):[],this.metadata=new mi(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(q)(t,[{key:"getIdToken",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,di(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(Da(a=e.sent,n.auth,"internal-error"),n.accessToken===a){e.next=9;break}return n.accessToken=a,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ci.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ki.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Da(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Da(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(c)(e(l).mark((function a(){var i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),i=!0),!n){e.next=5;break}return e.next=5,gi(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:i&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),a)})))()}},{key:"delete",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,di(t,ai(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,a,i,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(a=n.email)&&void 0!==a?a:void 0,p=null!==(i=n.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,w=n.isAnonymous,x=n.providerData,I=n.stsTokenManager;Da(k&&I,e,"internal-error");var _=_i.fromJSON(this.name,I);Da("string"==typeof k,e,"internal-error"),Ti(f,e.name),Ti(d,e.name),Da("boolean"==typeof b,e,"internal-error"),Da("boolean"==typeof w,e,"internal-error"),Ti(p,e.name),Ti(h,e.name),Ti(v,e.name),Ti(m,e.name),Ti(g,e.name),Ti(y,e.name);var T=new t({uid:k,auth:e,email:d,emailVerified:b,displayName:f,isAnonymous:w,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:_,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(T.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(n,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(c)(e(l).mark((function i(){var o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new _i).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:a}),e.next=5,gi(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),i)})))()}}]),t}(),Ei=function(){"use strict";function t(){e(H)(this,t),this.type="NONE",this.storage={}}return e(q)(t,[{key:"_isAvailable",value:function(){return e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.storage[t],e.abrupt("return",void 0===a?null:a);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei.type="NONE";var Oi=Ei;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ai=function(){"use strict";function t(n,r,a){e(H)(this,t),this.persistence=n,this.auth=r,this.userKey=a;var i=this.auth,o=i.config,s=i.name;this.fullUserKey=Ci(this.userKey,o.apiKey,s),this.fullPersistenceKey=Ci("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(q)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Si._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return a=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!a){e.next=10;break}return e.abrupt("return",n.setCurrentUser(a));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(c)(e(l).mark((function i(){var o,s,u,f,d,p,h,v,m,g,y,k,b;return e(l).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r.length){i.next=2;break}return i.abrupt("return",new t(ja(Oi),n,a));case 2:return i.next=4,Promise.all(r.map(function(){var t=e(c)(e(l).mark((function t(n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=i.sent.filter((function(e){return e})),s=o[0]||ja(Oi),u=Ci(a,n.config.apiKey,n.name),f=null,d=!0,p=!1,h=void 0,i.prev=9,v=r[Symbol.iterator]();case 11:if(d=(m=v.next()).done){i.next=29;break}return g=m.value,i.prev=13,i.next=16,g._get(u);case 16:if(!(y=i.sent)){i.next=22;break}return k=Si._fromJSON(n,y),g!==s&&(f=k),s=g,i.abrupt("break",29);case 22:i.next=26;break;case 24:i.prev=24,i.t0=i.catch(13);case 26:d=!0,i.next=11;break;case 29:i.next=35;break;case 31:i.prev=31,i.t1=i.catch(9),p=!0,h=i.t1;case 35:i.prev=35,i.prev=36,d||null==v.return||v.return();case 38:if(i.prev=38,!p){i.next=41;break}throw h;case 41:return i.finish(38);case 42:return i.finish(35);case 43:if(b=o.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&b.length){i.next=46;break}return i.abrupt("return",new t(s,n,a));case 46:if(s=b[0],!f){i.next=50;break}return i.next=50,s._set(u,f.toJSON());case 50:return i.next=52,Promise.all(r.map(function(){var t=e(c)(e(l).mark((function t(n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===s){e.next=8;break}return e.prev=1,e.next=4,n._remove(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return i.abrupt("return",new t(s,n,a));case 53:case"end":return i.stop()}}),i,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Li(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ni(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ji(t))return"Blackberry";if(Ui(t))return"Webos";if(Di(t))return"Safari";if((t.includes("chrome/")||Pi(t))&&!t.includes("edge/"))return"Chrome";if(Mi(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ni(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return/firefox\//i.test(e)}function Di(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return/crios\//i.test(e)}function Li(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return/iemobile/i.test(e)}function Mi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return/android/i.test(e)}function ji(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return/blackberry/i.test(e)}function Ui(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return/webos/i.test(e)}function Fi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Bi(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return Fi(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Vi(){return((e=Ce()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function zi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce();return Fi(e)||Mi(e)||Ui(e)||ji(e)||/windows phone/i.test(e)||Li(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hi(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ri(Ce());break;case"Worker":t="".concat(Ri(Ce()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(qt,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qi=function(){"use strict";function t(n){e(H)(this,t),this.auth=n,this.queue=[]}return e(q)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var a=this.queue.length-1;return function(){n.queue[a]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i,o,s,u,c,f,d,p,h,v,m,g;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:a=[],e.prev=3,i=!0,o=!1,s=void 0,e.prev=5,u=n.queue[Symbol.iterator]();case 7:if(i=(c=u.next()).done){e.next=15;break}return f=c.value,e.next=11,f(t);case 11:f.onAbort&&a.push(f.onAbort);case 12:i=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,i||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),a.reverse(),d=!0,p=!1,h=void 0,e.prev=35,v=a[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){g=m.value;try{g()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),p=!0,h=e.t2;case 43:e.prev=43,e.prev=44,d||null==v.return||v.return();case 46:if(e.prev=46,!p){e.next=49;break}throw h;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),Wi=function(){"use strict";function t(n,r,a){e(H)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gi(this),this.idTokenSubscription=new Gi(this),this.beforeStateQueue=new qi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(q)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=ja(n));var r=this;return this._initializationPromise=this.queue(e(c)(e(l).mark((function a(){var i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Ai.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(i=r._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),a,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i,o,s,u,c,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(i=e.sent,o=i,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:f=e.sent,u&&u!==c||!(null==f?void 0:f.user)||(o=f.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=i,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return Da(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,gi(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t?Je(t):null)&&Da(a.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(a&&a._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!r._deleted){a.next=2;break}return a.abrupt("return");case 2:if(t&&Da(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){a.next=6;break}return a.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return a.abrupt("return",r.queue(e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return a.stop()}}),a)})))()}},{key:"signOut",value:function(){var t=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(ja(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Le("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(c)(e(l).mark((function a(){var i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return i=e.sent,e.abrupt("return",null===t?i.removeCurrentUser():i.setCurrentUser(t));case 4:case"end":return e.stop()}}),a)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return Da(a=t&&ja(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Ai.create(n,[ja(a._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(a=n._currentUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var a=this;if(this._deleted)return function(){};var i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Da(o,this,"internal-error"),o.then((function(){return i(a.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Da(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hi(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r,a,i;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e(W)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(a["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(i=n.sent)&&(a["X-Firebase-Client"]=i),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e){return Je(e)}var Gi=function(){"use strict";function t(n){var r,a,i=this;e(H)(this,t),this.auth=n,this.observer=null,this.addObserver=(a=new qe((function(e){return i.observer=e}),r)).subscribe.bind(a)}return e(q)(t,[{key:"next",get:function(){return Da(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function Ji(t,n,r){var a=Ki(t);Da(a._canInitEmulator,a,"emulator-config-failed"),Da(/^https?:\/\//.test(n),a,"invalid-emulator-scheme");var i=!!(null==r?void 0:r.disableWarnings),o=Xi(n),s=function(t){var n=Xi(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var a=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(a);if(i){var o=i[1];return{host:o,port:$i(a.substr(o.length+1))}}var s=e(G)(a.split(":"),2);return{host:s[0],port:$i(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);a.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Xi(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $i(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Yi=function(){"use strict";function t(n,r){e(H)(this,t),this.providerId=n,this.signInMethod=r}return e(q)(t,[{key:"toJSON",value:function(){return Pa("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Pa("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Pa("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Pa("not implemented")}}]),t}();function Zi(e,t){return Qi.apply(this,arguments)}function Qi(){return(Qi=e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Xa(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function eo(e,t){return to.apply(this,arguments)}function to(){return(to=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qa(n,"POST","/v1/accounts:signInWithPassword",Ja(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function no(e,t){return ro.apply(this,arguments)}function ro(){return(ro=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qa(n,"POST","/v1/accounts:signInWithEmailLink",Ja(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ao(e,t){return io.apply(this,arguments)}function io(){return(io=e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qa(n,"POST","/v1/accounts:signInWithEmailLink",Ja(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oo=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(t,a,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(H)(this,r),(o=n.call(this,"password",i))._email=t,o._password=a,o._tenantId=s,o}return e(q)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",eo(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",no(t,{email:n._email,oobCode:n._password}));case 5:Ca(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Zi(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",ao(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Ca(t,"internal-error");case 6:case"end":return e.stop()}}),a)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Yi);function so(e,t){return uo.apply(this,arguments)}function uo(){return(uo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qa(n,"POST","/v1/accounts:signInWithIdp",Ja(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var co=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(){var t;return e(H)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(q)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return so(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,so(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,so(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ve(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ca("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,a=t.signInMethod,i=Ia(t,["providerId","signInMethod"]);if(!n||!a)return null;var o=new r(n,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}}]),r}(Yi);function lo(e,t){return fo.apply(this,arguments)}function fo(){return(fo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Xa(n,"POST","/v1/accounts:sendVerificationCode",Ja(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function po(){return(po=e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qa(n,"POST","/v1/accounts:signInWithPhoneNumber",Ja(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ho(){return(ho=e(c)(e(l).mark((function t(n,r){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qa(n,"POST","/v1/accounts:signInWithPhoneNumber",Ja(n,r));case 2:if(!(a=e.sent).temporaryProof){e.next=5;break}throw ri(n,"account-exists-with-different-credential",a);case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var vo=e(W)({},"USER_NOT_FOUND","user-not-found");function mo(){return(mo=e(c)(e(l).mark((function t(n,r){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Qa(n,"POST","/v1/accounts:signInWithPhoneNumber",Ja(n,a),vo));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var go=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(t){var a;return e(H)(this,r),(a=n.call(this,"phone","phone")).params=t,a}return e(q)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return po.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ho.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return mo.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,a=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:a}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,a=e.phoneNumber,i=e.temporaryProof;return n||t||a||i?new r({verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:i}):null}}]),r}(Yi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yo=function(){"use strict";function t(n){var r,a,i,o,s,u;e(H)(this,t);var c=ze(He(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,f=null!==(a=c.oobCode)&&void 0!==a?a:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);Da(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(q)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=ze(He(e)).link,n=t?ze(He(t)).deep_link_id:null,r=ze(He(e)).deep_link_id;return(r?ze(He(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ko=function(){"use strict";function t(){e(H)(this,t),this.providerId=t.PROVIDER_ID}return e(q)(t,null,[{key:"credential",value:function(e,t){return oo._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=yo.parseLink(t);return Da(n,"argument-error"),oo._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();ko.PROVIDER_ID="password",ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bo=function(){"use strict";function t(n){e(H)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(q)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),wo=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(){var t;return e(H)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(q)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(K)(this.scopes)}}]),r}(bo),xo=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(){return e(H)(this,r),n.call(this,"facebook.com")}return e(q)(r,null,[{key:"credential",value:function(e){return co._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(wo);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xo.FACEBOOK_SIGN_IN_METHOD="facebook.com",xo.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Io=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(){var t;return e(H)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(q)(r,null,[{key:"credential",value:function(e,t){return co._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,a=t.oauthAccessToken;if(!n&&!a)return null;try{return r.credential(n,a)}catch(e){return null}}}]),r}(wo);Io.GOOGLE_SIGN_IN_METHOD="google.com",Io.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _o=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(){return e(H)(this,r),n.call(this,"github.com")}return e(q)(r,null,[{key:"credential",value:function(e){return co._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(wo);_o.GITHUB_SIGN_IN_METHOD="github.com",_o.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var To=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(){return e(H)(this,r),n.call(this,"twitter.com")}return e(q)(r,null,[{key:"credential",value:function(e,t){return co._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,a=t.oauthTokenSecret;if(!n||!a)return null;try{return r.credential(n,a)}catch(e){return null}}}]),r}(wo);function So(e,t){return Eo.apply(this,arguments)}function Eo(){return(Eo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Qa(n,"POST","/v1/accounts:signUp",Ja(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */To.TWITTER_SIGN_IN_METHOD="twitter.com",To.PROVIDER_ID="twitter.com";var Oo=function(){"use strict";function t(n){e(H)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(q)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,a){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(c)(e(l).mark((function o(){var s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Si._fromIdTokenResponse(n,a,i);case 2:return s=e.sent,u=Co(a),c=new t({user:s,providerId:u,_tokenResponse:a,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,a){return e(c)(e(l).mark((function i(){var o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(a,!0);case 2:return o=Co(a),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:a,operationType:r}));case 4:case"end":return e.stop()}}),i)})))()}}]),t}();function Co(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ao=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(t,a,i,o){var s,u;return e(H)(this,r),(s=n.call(this,a.code,a.message)).operationType=i,s.user=o,Object.setPrototypeOf(e(J)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:a.customData._serverResponse,operationType:i},s}return e(q)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,a){return new r(e,t,n,a)}}]),r}(Pe);function Ro(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Ao._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t){return Do.apply(this,arguments)}function Do(){return Do=e(c)(e(l).mark((function t(n,r){var a,i,o=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]&&o[2],e.t0=di,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=a,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return i=e.sent,e.abrupt("return",Oo._forOperation(n,"link",i));case 14:case"end":return e.stop()}}),t)}))),Do.apply(this,arguments)}function Po(e,t){return Lo.apply(this,arguments)}function Lo(){return Lo=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){var a,i,o,s,u,c,f=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>2&&void 0!==f[2]&&f[2],i=n.auth,o="reauthenticate",e.prev=3,e.next=6,di(n,Ro(i,o,r,n),a);case 6:return Da((s=e.sent).idToken,i,"internal-error"),Da(u=fi(s.idToken),i,"internal-error"),c=u.sub,Da(n.uid===c,i,"user-mismatch"),e.abrupt("return",Oo._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Ca(i,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Lo.apply(this,arguments)}function Mo(e,t){return jo.apply(this,arguments)}function jo(){return jo=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n,r){var a,i,o,s,u=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>2&&void 0!==u[2]&&u[2],i="signIn",e.next=4,Ro(n,i,r);case 4:return o=e.sent,e.next=7,Oo._fromIdTokenResponse(n,i,o);case 7:if(s=e.sent,a){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),jo.apply(this,arguments)}function Uo(e,t){return Fo.apply(this,arguments)}function Fo(){return(Fo=e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mo(Ki(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bo(e,t,n){return Vo.apply(this,arguments)}function Vo(){return(Vo=e(c)(e(l).mark((function t(n,r,a){var i,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ki(n),e.next=3,So(i,{returnSecureToken:!0,email:r,password:a});case 3:return o=e.sent,e.next=6,Oo._fromIdTokenResponse(i,"signIn",o);case 6:return s=e.sent,e.next=9,i._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zo(e,t,n){return Uo(Je(e),ko.credential(t,n))}function Ho(e,t,n,r){return Je(e).onIdTokenChanged(t,n,r)}function qo(e,t,n){return Je(e).beforeAuthStateChanged(t,n)}function Wo(e){return Je(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ko(e,t){return Xa(e,"POST","/v2/accounts/mfaEnrollment:start",Ja(e,t))}new WeakMap;var Go="__sak",Jo=function(){"use strict";function t(n,r){e(H)(this,t),this.storageRetriever=n,this.type=r}return e(q)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xo=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(){var t,a;return e(H)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Di(a=Ce())||Fi(a))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=zi(),t._shouldAllowMigration=!0,t}return e(q)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var a,i=Object.keys(this.listeners)[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var a=this.storage.getItem(r);if(e.newValue!==a)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var i=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Vi()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,a=!1,i=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var a=this,i=this;return e(c)(e(l).mark((function o(){return e(l).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(ka)(e(xa)(r.prototype),"_set",a).call(i,t,n);case 2:i.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,a=this;return e(c)(e(l).mark((function i(){var o;return e(l).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(ka)(e(xa)(r.prototype),"_get",n).call(a,t);case 2:return o=i.sent,a.localCache[t]=JSON.stringify(o),i.abrupt("return",o);case 5:case"end":return i.stop()}}),i)})))()}},{key:"_remove",value:function(t){var n=this,a=this;return e(c)(e(l).mark((function i(){return e(l).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(ka)(e(xa)(r.prototype),"_remove",n).call(a,t);case 2:delete a.localCache[t];case 3:case"end":return i.stop()}}),i)})))()}}]),r}(Jo);Xo.type="LOCAL";var $o=Xo,Yo=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(){return e(H)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(q)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Jo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yo.type="SESSION";var Zo=Yo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){return Promise.all(t.map((n=e(c)(e(l).mark((function t(n){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var es=function(){"use strict";function t(n){e(H)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(q)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i,o,s,u,f,d,p;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=(a=t).data,o=i.eventId,s=i.eventType,u=i.data,null==(f=n.handlersMap[s])?void 0:f.size){r.next=5;break}return r.abrupt("return");case 5:return a.ports[0].postMessage({status:"ack",eventId:o,eventType:s}),d=Array.from(f).map(function(){var t=e(c)(e(l).mark((function t(n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(a.origin,u));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,Qo(d);case 9:p=r.sent,a.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:p});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ts(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */es.receivers=[];var ns=function(){"use strict";function t(n){e(H)(this,t),this.target=n,this.handlers=new Set}return e(q)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,a=this;return e(c)(e(l).mark((function i(){var o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,i){var c=ts("",20);o.port1.start();var l=setTimeout((function(){i(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){i(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),i(new Error("invalid_response"))}}},a.handlers.add(u),o.port1.addEventListener("message",u.onMessage),a.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&a.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),i)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function as(){return void 0!==rs().WorkerGlobalScope&&"function"==typeof rs().importScripts}function is(){return os.apply(this,arguments)}function os(){return(os=e(c)(e(l).mark((function t(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ss="firebaseLocalStorageDb",us="firebaseLocalStorage",cs="fbase_key",ls=function(){"use strict";function t(n){e(H)(this,t),this.request=n}return e(q)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function fs(e,t){return e.transaction([us],t?"readwrite":"readonly").objectStore(us)}function ds(){var e=indexedDB.deleteDatabase(ss);return new ls(e).toPromise()}function ps(){var t=indexedDB.open(ss,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(us,{keyPath:cs})}catch(e){r(e)}})),t.addEventListener("success",e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t.result).objectStoreNames.contains(us)){e.next=12;break}return a.close(),e.next=5,ds();case 5:return e.t0=n,e.next=8,ps();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(a);case 13:case"end":return e.stop()}}),r)}))))}))}function hs(e,t,n){return vs.apply(this,arguments)}function vs(){return(vs=e(c)(e(l).mark((function t(n,r,a){var i,o;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=fs(n,!0).put((i={},e(W)(i,cs,r),e(W)(i,"value",a),i)),t.abrupt("return",new ls(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ms(e,t){return gs.apply(this,arguments)}function gs(){return(gs=e(c)(e(l).mark((function t(n,r){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=fs(n,!1).get(r),e.next=3,new ls(a).toPromise();case 3:return i=e.sent,e.abrupt("return",void 0===i?null:i.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ys(e,t){var n=fs(e,!0).delete(t);return new ls(n).toPromise()}var ks=function(){"use strict";function t(){e(H)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(q)(t,[{key:"_openDb",value:function(){var t=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,ps();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return i=e.sent,e.next=8,t(i);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(a++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",as()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=es._getInstance(as()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(c)(e(l).mark((function n(r,a){var i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return i=e.sent,e.abrupt("return",{keyProcessed:i.includes(a.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(c)(e(l).mark((function t(n,r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,is();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new ns(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(i=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=i[0])||void 0===r?void 0:r.fulfilled)&&(null===(a=i[0])||void 0===a?void 0:a.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(c)(e(l).mark((function t(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,ps();case 5:return n=e.sent,e.next=8,hs(n,Go,"1");case 8:return e.next=10,ys(n,Go);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",r._withPendingWrite(e(c)(e(l).mark((function a(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return hs(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),a)})))));case 1:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return ms(e,t)}));case 2:return a=e.sent,n.localCache[t]=a,e.abrupt("return",a);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return ys(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r,a,i,o,s,u,c,f,d,p,h,v,m,g,y,k,b;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=fs(e,!1).getAll();return new ls(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(a=[],i=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(o=(f=c.next()).done);o=!0)d=f.value,p=d.fbase_key,h=d.value,i.add(p),JSON.stringify(t.localCache[p])!==JSON.stringify(h)&&(t.notifyListeners(p,h),a.push(p));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,t.localCache[b]&&!i.has(b)&&(t.notifyListeners(b,null),a.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",a);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,a=!1,i=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();ks.type="LOCAL";var bs=ks;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(e,t){return Xa(e,"POST","/v2/accounts/mfaSignIn:start",Ja(e,t))}function xs(e){return new Promise((function(t,n){var r,a,i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=function(e){var t=Aa("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(a=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==a?a:document).appendChild(i)}))}function Is(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Is("rcb"),new za(3e4,6e4);var _s="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e,t,n){return Ss.apply(this,arguments)}function Ss(){return(Ss=e(c)(e(l).mark((function t(n,r,a){var i,o,s,u,c,f,d,p;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a.verify();case 3:if(o=e.sent,e.prev=4,Da("string"==typeof o,n,"argument-error"),Da(a.type===_s,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return Da("enroll"===u.type,n,"internal-error"),e.next=15,Ko(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return Da("signin"===u.type,n,"internal-error"),Da(f=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,ws(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,lo(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,a._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Es=function(){"use strict";function t(n){e(H)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Ki(n)}return e(q)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Ts(this.auth,e,Je(t))}}],[{key:"credential",value:function(e,t){return go._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?go._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Os(e,t){return t?ja(t):(Da(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Es.PROVIDER_ID="phone",Es.PHONE_SIGN_IN_METHOD="phone";var Cs=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(t){var a;return e(H)(this,r),(a=n.call(this,"custom","custom")).params=t,a}return e(q)(r,[{key:"_getIdTokenResponse",value:function(e){return so(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return so(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return so(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Yi);function As(e){return Mo(e.auth,new Cs(e),e.bypassAuthState)}function Rs(e){var t=e.auth,n=e.user;return Da(n,t,"internal-error"),Po(n,new Cs(e),e.bypassAuthState)}function Ns(e){return Ds.apply(this,arguments)}function Ds(){return(Ds=e(c)(e(l).mark((function t(n){var r,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,Da(a=n.user,r,"internal-error"),e.abrupt("return",No(a,new Cs(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ps=function(){"use strict";function t(n,r,a,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(H)(this,t),this.auth=n,this.resolver=a,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(q)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(c)(e(l).mark((function t(r,a){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:a},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i,o,s,u,c,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.urlResponse,i=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return f={auth:n.auth,requestUri:a,sessionId:i,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return As;case"linkViaPopup":case"linkViaRedirect":return Ns;case"reauthViaPopup":case"reauthViaRedirect":return Rs;default:Ca(this.auth,"internal-error")}}},{key:"resolve",value:function(e){La(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){La(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Ls=new za(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ms=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(t,a,i,o,s){var u;return e(H)(this,r),(u=n.call(this,t,a,o,s)).provider=i,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(J)(u),u}return e(q)(r,[{key:"executeNotNull",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return Da(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(c)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return La(1===t.filter.length,"Popup operations only handle one event"),r=ts(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Aa(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Aa(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var a=e;e.pollId=window.setTimeout((function(){a.pollId=null,a.reject(Aa(a.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Ls.get())};t()}}]),r}(Ps);Ms.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var js=new Map,Us=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(t,a){var i,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(H)(this,r),(i=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,o)).eventId=null,i}return e(q)(r,[{key:"execute",value:function(){var t=this,n=this;return e(c)(e(l).mark((function a(){var i,o;return e(l).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=js.get(n.auth._key())){a.next=21;break}return a.prev=2,a.next=5,Fs(n.resolver,n.auth);case 5:if(!a.sent){a.next=12;break}return a.next=9,e(ka)(e(xa)(r.prototype),"execute",t).call(n);case 9:a.t0=a.sent,a.next=13;break;case 12:a.t0=null;case 13:o=a.t0,i=function(){return Promise.resolve(o)},a.next=20;break;case 17:a.prev=17,a.t1=a.catch(2),i=function(){return Promise.reject(a.t1)};case 20:js.set(n.auth._key(),i);case 21:return n.bypassAuthState||js.set(n.auth._key(),(function(){return Promise.resolve(null)})),a.abrupt("return",i());case 23:case"end":return a.stop()}}),a,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,a=this,i=function(){return e(ka)(e(xa)(r.prototype),"onAuthEvent",n)};return e(c)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",i().call(a,t));case 4:if("unknown"!==t.type){e.next=7;break}return a.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,a.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return a.user=r,e.abrupt("return",i().call(a,t));case 16:a.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Ps);function Fs(e,t){return Bs.apply(this,arguments)}function Bs(){return(Bs=e(c)(e(l).mark((function t(n,r){var a,i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Hs(r),i=zs(n),e.next=4,i._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,i._get(a);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,i._remove(a);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vs(e,t){js.set(e._key(),t)}function zs(e){return ja(e._redirectPersistence)}function Hs(e){return Ci("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e,t){return Ws.apply(this,arguments)}function Ws(){return Ws=e(c)(e(l).mark((function t(n,r){var a,i,o,s,u,c=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]&&c[2],i=Ki(n),o=Os(i,r),s=new Us(i,o,a),e.next=6,s.execute();case 6:if(!(u=e.sent)||a){e.next=13;break}return delete u.user._redirectEventId,e.next=11,i._persistUserIfCurrent(u.user);case 11:return e.next=13,i._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),Ws.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ks=function(){"use strict";function t(n){e(H)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(q)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Js(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Js(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Aa(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gs(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Gs(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Gs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Js(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Xs(e){return $s.apply(this,arguments)}function $s(){return $s=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(c)(e(l).mark((function t(n){var r,a=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",Xa(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),$s.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ys=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zs=/^https?/;function Qs(){return(Qs=e(c)(e(l).mark((function t(n){var r,a,i,o,s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Xs(n);case 4:r=e.sent.authorizedDomains,a=!0,i=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(a=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!eu(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:a=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),i=!0,o=e.t1;case 26:e.prev=26,e.prev=27,a||null==s.return||s.return();case 29:if(e.prev=29,!i){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Ca(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function eu(e){var t=Fa(),n=new URL(t),r=n.protocol,a=n.hostname;if(e.startsWith("chrome-extension://")){var i=new URL(e);return""===i.hostname&&""===a?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===a}if(!Zs.test(r))return!1;if(Ys.test(e))return a===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tu=new za(3e4,6e4);function nu(){var t=rs().___jsl,n=!0,r=!1,a=void 0;if(null==t?void 0:t.H)try{for(var i,o=Object.keys(t.H)[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(K)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}var ru=null;function au(e){return ru=ru||function(e){return new Promise((function(t,n){var r,a,i;function o(){nu(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){nu(),n(Aa(e,"network-request-failed"))},timeout:tu.get()})}if(null===(a=null===(r=rs().gapi)||void 0===r?void 0:r.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=rs().gapi)||void 0===i?void 0:i.load)){var s=Is("iframefcb");return rs()[s]=function(){gapi.load?o():n(Aa(e,"network-request-failed"))},xs("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw ru=null,e}))}(e),ru}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var iu=new za(5e3,15e3),ou={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},su=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uu(e){var t=e.config;Da(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Ha(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:qt},a=su.get(e.config.apiHost);a&&(r.eid=a);var i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),"".concat(n,"?").concat(Ve(r).slice(1))}function cu(e){return lu.apply(this,arguments)}function lu(){return lu=e(c)(e(l).mark((function t(n){var r,a;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,au(n);case 2:return r=t.sent,Da(a=rs().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:uu(n),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ou,dontclear:!0},(function(t){return new Promise((r=e(c)(e(l).mark((function r(a,i){var o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){rs().clearTimeout(s),a(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=Aa(n,"network-request-failed"),s=rs().setTimeout((function(){i(o)}),iu.get()),t.ping(u).then(u,(function(){i(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),lu.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},du="_blank",pu="http://localhost",hu=function(){"use strict";function t(n){e(H)(this,t),this.window=n,this.associatedEvent=null}return e(q)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function vu(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString(),u="",c=Object.assign(Object.assign({},fu),{width:a.toString(),height:i.toString(),top:o,left:s}),l=Ce().toLowerCase();r&&(u=Pi(l)?du:r),Ni(l)&&(n=n||pu,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,n){var r=e(G)(n,2),a=r[0],i=r[1];return"".concat(t).concat(a,"=").concat(i,",")}),"");if(Bi(l)&&"_self"!==u)return mu(n||"",u),new hu(null);var d=window.open(n||"",u,f);Da(d,t,"popup-blocked");try{d.focus()}catch(e){}return new hu(d)}function mu(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gu="__/auth/handler",yu="emulator/auth/handler";function ku(t,n,r,a,i,o){Da(t.config.authDomain,t,"auth-domain-config-required"),Da(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:a,v:qt,eventId:i};if(n instanceof bo){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",Ue(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=e(G)(f.value,2),h=p[0],v=p[1];s[h]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(n instanceof wo){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,y,k=s,b=!0,w=!1,x=void 0;try{for(var I,_=Object.keys(k)[Symbol.iterator]();!(b=(I=_.next()).done);b=!0){var T=I.value;void 0===k[T]&&delete k[T]}}catch(e){w=!0,x=e}finally{try{b||null==_.return||_.return()}finally{if(w)throw x}}return"".concat((g=t,y=g.config,y.emulator?Ha(y,yu):"https://".concat(y.authDomain,"/").concat(gu)),"?").concat(Ve(k).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bu="webStorageSupport",wu=function(){"use strict";function t(){e(H)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zo,this._completeRedirectFn=qs,this._overrideRedirectResult=Vs}return e(q)(t,[{key:"_openPopup",value:function(t,n,r,a){var i=this;return e(c)(e(l).mark((function o(){var s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return La(null===(s=i.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=ku(t,n,r,Fa(),a),e.abrupt("return",vu(t,u,ts()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,a){var i=this;return e(c)(e(l).mark((function o(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i._originValidation(t);case 2:return o=ku(t,n,r,Fa(),a),rs().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],a=r.manager,i=r.promise;return a?Promise.resolve(a):(La(i,"If manager is not set, promise should be"),i)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,cu(t);case 2:return a=e.sent,i=new Ks(t),a.register("authEvent",(function(e){return Da(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:i},n.iframes[t._key()]=a,e.abrupt("return",i);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(bu,{type:bu},(function(n){var r,a=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==a&&t(!!a),Ca(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Qs.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return zi()||Di()||Fi()}}]),t}(),xu=wu,Iu=function(t){"use strict";e(X)(r,t);var n=e(oe)(r);function r(t){var a;return e(H)(this,r),(a=n.call(this,"phone")).credential=t,a}return e(q)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Xa(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ja(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Xa(e,"POST","/v2/accounts/mfaSignIn:finalize",Ja(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(H)(this,t),this.factorId=n}return e(q)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Pa("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(H)(this,t)}return e(q)(t,null,[{key:"assertion",value:function(e){return Iu._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var _u="@firebase/auth",Tu="0.21.3",Su=function(){"use strict";function t(n){e(H)(this,t),this.auth=n,this.internalListeners=new Map}return e(q)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(c)(e(l).mark((function r(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return a=e.sent,e.abrupt("return",{accessToken:a});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Da(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Eu,Ou=Ee("authIdTokenMaxAge")||300,Cu=null,Au=function(t){return n=e(c)(e(l).mark((function n(r){var a,i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(a=e.t0,!((i=a&&((new Date).getTime()-Date.parse(a.issuedAtTime))/1e3)&&i>Ou)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==a?void 0:a.token,Cu!==o){e.next=12;break}return e.abrupt("return");case 12:return Cu=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function Ru(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt(),t=Bt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Ua(e,{popupRedirectResolver:xu,persistence:[bs,$o,Zo]}),r=Ee("authTokenSyncURL");if(r){var a=Au(r);qo(n,a,(function(){return a(n.currentUser)})),Ho(n,(function(e){return a(e)}))}var i=Te("auth");return i&&Ji(n,"http://".concat(i)),n}Eu="Browser",Ft(new Xe("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),i=r.options,o=i.apiKey,s=i.authDomain;return function(e,t){Da(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Da(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Eu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hi(Eu)},a=new Wi(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ja);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,n),a}(r,a)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Ft(new Xe("auth-internal",(function(e){var t=Ki(e.getProvider("auth").getImmediate());return new Su(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(_u,Tu,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Eu)),Gt(_u,Tu,"esm2017");d=a("6JpON"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt(),t=Bt(e=Je(e),_r);t.isInitialized()?t.getImmediate():va(e)}(Wt({apiKey:"AIzaSyAkwUo6DbQZ45SKLYmVN-WMfwtEZwlR7sE",authDomain:"codeforge-eb6aa.firebaseapp.com",projectId:"codeforge-eb6aa",storageBucket:"codeforge-eb6aa.appspot.com",messagingSenderId:"735290516280",appId:"1:735290516280:web:72a30be1acfb9b6d32d7cd",measurementId:"G-QX1ZX7WVT2"}));var Nu,Du,Pu,Lu={formOfSignUp:document.querySelector(".form-sign-up"),formOfSignIn:document.querySelector(".form-sign-in"),btnOfSignOut:document.querySelector(".auth__btn-sign-out")},Mu="",ju="";function Uu(e){return String(e).padStart(2,"0")}Lu.formOfSignUp.addEventListener("submit",(function(e){e.preventDefault(),Mu=e.currentTarget.elements[0].value,ju=e.currentTarget.elements[1].value,console.log("Email: ",Mu),console.log("Password: ",ju),Bo(Ru(),Mu,ju).then((function(e){var t=e.user;console.log(t)})).catch((function(e){e.code;var t=e.message;d.Notify.failure(t)})),e.currentTarget.reset()})),Lu.formOfSignIn.addEventListener("submit",(function(e){e.preventDefault(),Mu=e.currentTarget.elements[0].value,ju=e.currentTarget.elements[1].value,console.log("Email: ",Mu),console.log("Password: ",ju),zo(Ru(),Mu,ju).then((function(e){var t=e.user;console.log(t)})).catch((function(e){e.code;var t=e.message;d.Notify.failure(t)})),e.currentTarget.reset()})),Lu.btnOfSignOut.addEventListener("click",(function(e){Wo(Ru()).then((function(){d.Notify.success("Sign Out Success!")})).catch((function(e){d.Notify.failure(errorMessage)}))})),m(),(0,u.default)(1),(0,o.default)(),(0,s.default)(),Nu=document.querySelector(".js-list-new"),Du="favorite",Pu=(0,i.load)(Du),Nu.addEventListener("click",(function(e){var t,n;e.target.classList.contains("js-to-fav")?(e.target.firstElementChild.textContent="Remove from favorites",e.target.lastElementChild.firstElementChild.setAttribute("fill","#4b48da"),e.target.lastElementChild.firstElementChild.setAttribute("style","fill: var(--color1, #4b48da)"),e.target.classList.remove("js-to-fav"),e.target.classList.add("js-from-fav"),t=e.target.parentNode.parentNode.id,n=e.target.parentNode.parentNode.parentNode,void 0===(0,i.load)(Du)&&(0,i.save)(Du,[]),Pu.find((function(e){return e.id===t}))||Pu.push({dataString:n.innerHTML,id:n.firstElementChild.getAttribute("id")}),(0,i.save)(Du,Pu)):e.target.classList.contains("js-from-fav")&&(e.target.firstElementChild.textContent="Add to favorites",e.target.lastElementChild.firstElementChild.setAttribute("fill","none"),e.target.lastElementChild.firstElementChild.setAttribute("style","stroke: var(--color1, #4440f7)"),function(e){void 0===(0,i.load)(Du)&&(0,i.save)(Du,[]),Pu.splice(function(e){return Pu.findIndex((function(t){return t.id===e}))}(e),1),(0,i.save)(Du,Pu)}(e.target.parentNode.parentNode.id),e.target.classList.remove("js-from-fav"),e.target.classList.add("js-to-fav"))}));var Fu=new Date,Bu="".concat(Uu(Fu.getDate()),"/").concat(Uu(Fu.getMonth()+1),"/").concat(Uu(Fu.getFullYear())),Vu=document.querySelector(".js-list-new"),zu="read";Vu.addEventListener("click",(function(e){if(e.target.classList.contains("news-card__news-link")){var t=e.target.parentNode.parentNode;console.log(t.firstElementChild.firstElementChild),t.firstElementChild.firstElementChild.classList.remove("visually-hidden"),t.style.opacity=.7,function(e){void 0===(0,i.load)(zu)&&(0,i.save)(zu,[]);var t=e.firstElementChild.getAttribute("id"),n={dataRead:Bu,dataString:'<li class="list-news__item">'.concat(e.innerHTML,"</li>"),id:t},r=(0,i.load)(zu);r.push(n),(0,i.save)(zu,r)}(t)}}));var Hu="favorite";void 0===(0,i.load)(Hu)&&(0,i.save)(Hu,[]),void 0===(0,i.load)(zu)&&(0,i.save)(zu,[])}();
//# sourceMappingURL=index.36246044.js.map
