!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("ikNsj",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8dTuY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gOtiv"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r.default(i,n.prototype),i}).apply(null,arguments)}})),a.register("417tI",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("lhF45",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("eSWTR"))&&n.__esModule?n:{default:n}})),a("fkwS8"),a("f4zPK");var i=a("cs7FV"),o=a("ddam7"),s=a("ipOD1"),u=a("eZ7d6"),c=a("2TvXO"),l=a("awd45"),f=a("6JpON"),d=a("l1Gdk"),p=new(0,l.default),h={categories:document.querySelector(".js-category"),categoriesOthers:document.querySelector(".js-category-others"),othersTextInBtn:document.querySelector(".js-text-btn")};function v(){return m.apply(this,arguments)}function m(){return(m=e(u)(e(c).mark((function t(){return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.getNewsCategoryList();case 3:y(t.sent.results),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),e(f).Notify.warning("No response category list from server. Please, try again later."),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function g(){h.categories.innerHTML="",h.categoriesOthers.innerHTML=""}function y(e){window.matchMedia("(min-width: 1280px)").matches?(g(),function(e){for(var t="",n=0;n<6;n++)t+='\n            <li class="category__item"><button class="category__btn" type="button">'.concat(e[n].display_name,"</button></li>\n            ");h.categories.insertAdjacentHTML("beforeend",t)}(e),function(e){h.othersTextInBtn.textContent="Others";for(var t="",n=6;n<50;n++)t+='\n          <li class="others__item">\n            <button class="others__item-button">'.concat(e[n].display_name,"</button>\n          </li>\n            ");h.categoriesOthers.insertAdjacentHTML("beforeend",t)}(e)):window.matchMedia("(min-width: 768px)").matches?(g(),function(e){for(var t="",n=0;n<4;n++)t+='\n            <li class="category__item"><button class="category__btn" type="button">'.concat(e[n].display_name,"</button></li>\n            ");h.categories.insertAdjacentHTML("beforeend",t)}(e),function(e){h.othersTextInBtn.textContent="Others";for(var t="",n=4;n<50;n++)t+='\n          <li class="others__item">\n            <button class="others__item-button">'.concat(e[n].display_name,"</button>\n          </li>\n            ");h.categoriesOthers.insertAdjacentHTML("beforeend",t)}(e)):(g(),function(e){h.othersTextInBtn.textContent="Categories";for(var t="",n=0;n<50;n++)t+='\n          <li class="others__item">\n            <button class="others__item-button">'.concat(e[n].display_name,"</button>\n          </li>\n            ");h.categoriesOthers.insertAdjacentHTML("beforeend",t)}(e))}window.addEventListener("resize",e(d)((function(e){v()}),300));var k=a("huWaY"),b=a("fkwS8"),w=a("b1ywh"),x=a("btiby"),I=a("4o2tl"),_={calendarInput:document.querySelector(".js-calendar-input"),modal:document.querySelector("[data-calendar-modal]"),iconCalendar:document.querySelector(".calendar__icon-calendar"),iconCalendarOpen:document.querySelector(".calendar__icon-opened"),iconCalendarClose:document.querySelector(".calendar__icon-closed"),clickToBackdrop:document.querySelector(".backdrop")};function T(){_.modal.classList.toggle("is-hidden"),_.calendarInput.classList.toggle("is-active"),_.iconCalendar.classList.toggle("change-color-icon"),_.iconCalendarOpen.classList.toggle("display-none"),_.iconCalendarClose.classList.toggle("display-active"),_.clickToBackdrop.classList.toggle("display-none")}function S(e){return String(e).padStart(2,"0")}_.calendarInput.addEventListener("click",T),_.clickToBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&T()})),document.querySelector("[data-calendar-days]").addEventListener("click",(function(e){if("LI"!==e.target.nodeName||e.target.classList.contains("inactive"))return;var t=e.target,n=e.currentTarget.children,r=t.textContent;_.calendarInput.value="".concat(S(r),"/").concat(S(N+1),"/").concat(R),T();var a="".concat(R).concat(S(N+1)).concat(S(r));t.classList.add("selected-date"),Array.from(n).map((function(e){e.classList.contains("selected-date")&&(e.classList.remove("selected-date"),t.classList.add("selected-date"))})),(0,b.getCalendarDateForSearch)(a),(0,I.getCalendarDatePopular)("".concat(r,"/").concat(N+1,"/").concat(R)),(0,x.getCalendarDateByCategory)("".concat(r,"/").concat(N+1,"/").concat(R)),(0,w.getCalendarDateBySearch)("".concat(r,"/").concat(N+1,"/").concat(R))}));var E=document.querySelector(".days"),O=document.querySelector(".current-month"),C=document.querySelectorAll(".calendar__btn-wrapper button"),A=new Date,R=A.getFullYear(),N=A.getMonth(),D=["January","February","March","April","May","June","July","August","September","October","November","December"],P=function(){for(var e=new Date(R,N,0).getDay(),t=new Date(R,N+1,0).getDate(),n=new Date(R,N,t).getDay(),r=new Date(R,N,0).getDate(),a="",i=e;i>0;i--)a+='<li class="inactive">'.concat(r-i+1,"</li>");for(var o=1;o<=t;o++){var s=o===A.getDate()&&N===(new Date).getMonth()&&R===(new Date).getFullYear()?"current":"";a+='<li class="active '.concat(s,'">').concat(o,"</li>")}for(var u=n;u<7;u++)a+='<li class="inactive">'.concat(u-n+1,"</li>");O.innerText="".concat(D[N]," ").concat(R),E.innerHTML=a};function L(){var t=_.calendarInput.value,n=Number.parseInt(t);(void 0===t?"undefined":e(k)(t))!==Number&&Array.from(E.children).map((function(e){+e.textContent===n&&e.classList.contains("active")&&(e.classList.add("selected-date"),t="",_.calendarInput.value="".concat(S(n),"/").concat(S(N+1),"/").concat(R))}))}P(),C.forEach((function(e){e.addEventListener("click",(function(){(N="prev"===e.id?N-1:N+1)<0||N>11?(A=new Date(R,N,(new Date).getDate()),R=A.getFullYear(),N=A.getMonth()):A=new Date,P(),L()}))})),document.querySelector(".icon-month-forward").addEventListener("click",(function(){R-=1,P(),L()})),a("b1ywh"),a("40EMy"),a("fMavV");s=a("ipOD1");var M={openOthersBtn:document.querySelector(".js-others-btn"),othersWrapper:document.querySelector(".js-others-wrapper")};M.openOthersBtn.addEventListener("click",(function(e){M.othersWrapper.classList.toggle("is-open")}));var j={categories:document.querySelector(".js-category"),otherCategories:document.querySelector(".js-category-others"),othersWrapper:document.querySelector(".js-others-wrapper"),searchFormInHeader:document.querySelector("#form-field")},U=null;function F(e){if("BUTTON"===e.nodeName){if(null!==U&&U.contains("category-active"))return U.remove("category-active"),e.classList.add("category-active"),void(U=e.classList);(U=e.classList).add("category-active")}}j.categories.addEventListener("click",(function(e){j.othersWrapper.classList.remove("is-open"),F(e.target)})),j.otherCategories.addEventListener("click",(function(e){j.othersWrapper.classList.remove("is-open"),F(e.target)})),j.searchFormInHeader.addEventListener("submit",(function(e){j.othersWrapper.classList.remove("is-open"),null!==U&&U.remove("category-active")}));var B=a("4SB5o");function V(){var e=new Date;return"".concat(t(e.getDate()),"/").concat(t(e.getMonth()+1),"/").concat(t(e.getFullYear()));function t(e){return String(e).padStart(2,"0")}}var z=document.querySelector(".js-list-new"),H="read";z.addEventListener("click",(function(e){if(e.target.classList.contains("news-card__news-link")){var t=e.target.parentNode.parentNode;t.firstElementChild.firstElementChild.classList.remove("visually-hidden"),t.style.opacity=.7,function(e){void 0===(0,B.load)(H)&&(0,B.save)(H,[]);var t=e.firstElementChild.getAttribute("id"),n={dataRead:V(),dataString:'<li class="list-news__item">'.concat(e.innerHTML,"</li>"),id:t},r=(0,B.load)(H);r.push(n),(0,B.save)(H,r)}(t)}})),a("3zpOR");var q=a("hjSSI");a("3Bv92");u=a("eZ7d6");var W=a("ckB89"),K=a("4mzug"),G=a("ikNsj"),J=a("jiX0X"),X=(c=a("2TvXO"),u=a("eZ7d6"),W=a("ckB89"),K=a("4mzug"),a("8sKqN")),$=(J=a("jiX0X"),c=a("2TvXO"),a("7SURw")),Y=(W=a("ckB89"),K=a("4mzug"),a("k8LMu")),Z=(X=a("8sKqN"),J=a("jiX0X"),{});Object.defineProperty(Z,"__esModule",{value:!0}),Z.default=function(e){return ae(e)};var Q=re(a("8dTuY")),ee=re(a("417tI")),te=re(a("eSWTR")),ne=re(a("gOtiv"));function re(e){return e&&e.__esModule?e:{default:e}}function ae(e){var t="function"==typeof Map?new Map:void 0;return ae=function(e){if(null===e||!ee.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Q.default(e,arguments,te.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ne.default(n,e)},ae(e)}var ie,oe,se,ue=a("brQQZ"),ce=ie={};function le(){throw new Error("setTimeout has not been defined")}function fe(){throw new Error("clearTimeout has not been defined")}function de(e){if(oe===setTimeout)return setTimeout(e,0);if((oe===le||!oe)&&setTimeout)return oe=setTimeout,setTimeout(e,0);try{return oe(e,0)}catch(t){try{return oe.call(null,e,0)}catch(t){return oe.call(this,e,0)}}}!function(){try{oe="function"==typeof setTimeout?setTimeout:le}catch(e){oe=le}try{se="function"==typeof clearTimeout?clearTimeout:fe}catch(e){se=fe}}();var pe,he=[],ve=!1,me=-1;function ge(){ve&&pe&&(ve=!1,pe.length?he=pe.concat(he):me=-1,he.length&&ye())}function ye(){if(!ve){var e=de(ge);ve=!0;for(var t=he.length;t;){for(pe=he,he=[];++me<t;)pe&&pe[me].run();me=-1,t=he.length}pe=null,ve=!1,function(e){if(se===clearTimeout)return clearTimeout(e);if((se===fe||!se)&&clearTimeout)return se=clearTimeout,clearTimeout(e);try{se(e)}catch(t){try{return se.call(null,e)}catch(t){return se.call(this,e)}}}(e)}}function ke(e,t){this.fun=e,this.array=t}function be(){}ce.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];he.push(new ke(e,t)),1!==he.length||ve||de(ye)},ke.prototype.run=function(){this.fun.apply(null,this.array)},ce.title="browser",ce.browser=!0,ce.env={},ce.argv=[],ce.version="",ce.versions={},ce.on=be,ce.addListener=be,ce.once=be,ce.off=be,ce.removeListener=be,ce.removeAllListeners=be,ce.emit=be,ce.prependListener=be,ce.prependOnceListener=be,ce.listeners=function(e){return[]},ce.binding=function(e){throw new Error("process.binding is not supported")},ce.cwd=function(){return"/"},ce.chdir=function(e){throw new Error("process.chdir is not supported")},ce.umask=function(){return 0};
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
var we=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},xe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,s=o?e[a+1]:0,u=a+2<e.length,c=u?e[a+2]:0,l=i>>2,f=(3&i)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(we(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],a=0;a<e.length;){var i=n[e.charAt(a++)],o=a<e.length?n[e.charAt(a)]:0,s=++a<e.length?n[e.charAt(a)]:64,u=++a<e.length?n[e.charAt(a)]:64;if(++a,null==i||null==o||null==s||null==u)throw Error();var c=i<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ie=function(e){return function(e){var t=we(e);return xe.encodeByteArray(t,!0)}(e).replace(/\./g,"")},_e=function(e){try{return xe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
var Te=function(){
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
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},Se=function(){try{return Te()||function(){if(void 0!==ie&&void 0!==ie.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&_e(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Ee=function(e){var t,n;return null===(n=null===(t=Se())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Oe=function(){var e;return null===(e=Se())||void 0===e?void 0:e.config},Ce=function(e){var t;return null===(t=Se())||void 0===t?void 0:t["_".concat(e)]},Ae=function(){"use strict";function t(){var n=this;e(W)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(K)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function Re(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ne(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function De(){try{return"object"==typeof indexedDB}catch(e){return!1}}function Pe(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=function(){a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=function(){n=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function Le(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
 */var Me=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(t,a,i){var o;return e(W)(this,r),(o=n.call(this,a)).code=t,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(e($)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e($)(o),je.prototype.create),o}return r}(e(Z)(Error)),je=function(){"use strict";function t(n,r,a){e(W)(this,t),this.service=n,this.serviceName=r,this.errors=a}return e(K)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Ue(o,a):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(i,")."),c=new Me(i,u,a);return c}}]),t}();function Ue(e,t){return e.replace(Fe,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Fe=/\{\$([^}]+)}/g;
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
 */function Be(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ve(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(ze(l)&&ze(f)){if(!Ve(l,f))return!1}else if(l!==f)return!1}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function ze(e){return null!==e&&"object"==typeof e}
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
function He(t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=function(t,r){var a=e(X)(r.value,2),i=a[0],o=a[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(i)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n.length?"&"+n.join("&"):""}function qe(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(X)(t.split("="),2),a=r[0],i=r[1];n[decodeURIComponent(a)]=decodeURIComponent(i)}})),n}function We(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var Ke=function(){"use strict";function t(n,r){var a=this;e(W)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(a)})).catch((function(e){a.error(e)}))}return e(K)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,a=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Ge),void 0===r.error&&(r.error=Ge),void 0===r.complete&&(r.complete=Ge);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{a.finalError?r.error(a.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Ge(){}
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
var Je=144e5;function Xe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(Je,r+a)}
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
function $e(e){return e&&e._delegate?e._delegate:e}var Ye=function(){"use strict";function t(n,r,a){e(W)(this,t),this.name=n,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(K)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Ze="[DEFAULT]",Qe=function(){"use strict";function t(n,r){e(W)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(K)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Ae;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch(e){}var n=!0,r=!1,a=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=e(X)(i.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(J)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(J)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error("".concat(this.name,"(").concat(a,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:a,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(X)(c.value,2),d=f[0],p=f[1],h=this.normalizeInstanceIdentifier(d);a===h&&p.resolve(i)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);var i=this.instances.get(r);return i&&e(i,r),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,a=void 0===r?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ze?void 0:t),options:a}),this.instances.set(n,i),this.instancesOptions.set(n,a),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;return this.component?this.component.multipleInstances?e:Ze:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var et,tt,nt=function(){"use strict";function t(n){e(W)(this,t),this.name=n,this.providers=new Map}return e(K)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Qe(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),rt=(W=a("ckB89"),K=a("4mzug"),G=a("ikNsj"),J=a("jiX0X"),[]);(tt=et||(et={}))[tt.DEBUG=0]="DEBUG",tt[tt.VERBOSE=1]="VERBOSE",tt[tt.INFO=2]="INFO",tt[tt.WARN=3]="WARN",tt[tt.ERROR=4]="ERROR",tt[tt.SILENT=5]="SILENT";var at,it={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},ot=et.INFO,st=(at={},e(G)(at,et.DEBUG,"log"),e(G)(at,et.VERBOSE,"log"),e(G)(at,et.INFO,"info"),e(G)(at,et.WARN,"warn"),e(G)(at,et.ERROR,"error"),at),ut=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=st[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(J)(a)))}},ct=function(){"use strict";function t(n){e(W)(this,t),this.name=n,this._logLevel=ot,this._logHandler=ut,this._userLogHandler=null,rt.push(this)}return e(K)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in et))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?it[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.DEBUG].concat(e(J)(n))),this._logHandler.apply(this,[this,et.DEBUG].concat(e(J)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.VERBOSE].concat(e(J)(n))),this._logHandler.apply(this,[this,et.VERBOSE].concat(e(J)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.INFO].concat(e(J)(n))),this._logHandler.apply(this,[this,et.INFO].concat(e(J)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.WARN].concat(e(J)(n))),this._logHandler.apply(this,[this,et.WARN].concat(e(J)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,et.ERROR].concat(e(J)(n))),this._logHandler.apply(this,[this,et.ERROR].concat(e(J)(n)))}}]),t}();u=a("eZ7d6");var lt={};Object.defineProperty(lt,"__esModule",{value:!0}),lt.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){dt.default(e,t,n[t])}))}return e};var ft,dt=(ft=a("ikNsj"))&&ft.__esModule?ft:{default:ft};var pt,ht;J=a("jiX0X"),c=a("2TvXO"),J=a("jiX0X");var vt=new WeakMap,mt=new WeakMap,gt=new WeakMap,yt=new WeakMap,kt=new WeakMap;var bt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return mt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||gt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function wt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ht||(ht=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(_t(this),n),It(vt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return It(t.apply(_t(this),n))}:function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[_t(this),n].concat(e(J)(a)));return gt.set(s,n.sort?n.sort():[n]),It(s)}}function xt(e){return"function"==typeof e?wt(e):(e instanceof IDBTransaction&&function(e){if(!mt.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),r()},i=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));mt.set(e,t)}}(e),t=e,(pt||(pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,bt):e);var t}function It(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(It(t.result)),r()},i=function(){n(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&vt.set(e,t)})).catch((function(){})),kt.set(n,t),n;var t,n;if(yt.has(e))return yt.get(e);var r=xt(e);return r!==e&&(yt.set(e,r),kt.set(r,e)),r}var _t=function(e){return kt.get(e)};function Tt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,a=n.upgrade,i=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=It(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(It(s.result),e.oldVersion,e.newVersion,It(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}var St=["get","getKey","getAll","getAllKeys","count"],Et=["put","add","delete","clear"],Ot=new Map;function Ct(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Ot.get(n))return Ot.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,i=Et.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(i||St.includes(r))){var o,s=(o=e(u)(e(c).mark((function t(n){var o,s,u,l,f,d,p=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=p.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=p[u];return f=this.transaction(n,i?"readwrite":"readonly"),d=f.store,a&&(d=d.index(s.shift())),t.next=7,Promise.all([(l=d)[r].apply(l,e(J)(s)),i&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)});return Ot.set(n,s),s}}}bt=function(t){return e(lt)({},t,{get:function(e,n,r){return Ct(e,n)||t.get(e,n,r)},has:function(e,n){return!!Ct(e,n)||t.has(e,n)}})}(bt);
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
var At=function(){"use strict";function t(n){e(W)(this,t),this.container=n}return e(K)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Rt,Nt,Dt="@firebase/app",Pt="0.9.3",Lt=new ct("@firebase/app"),Mt="[DEFAULT]",jt=(Rt={},e(G)(Rt,Dt,"fire-core"),e(G)(Rt,"@firebase/app-compat","fire-core-compat"),e(G)(Rt,"@firebase/analytics","fire-analytics"),e(G)(Rt,"@firebase/analytics-compat","fire-analytics-compat"),e(G)(Rt,"@firebase/app-check","fire-app-check"),e(G)(Rt,"@firebase/app-check-compat","fire-app-check-compat"),e(G)(Rt,"@firebase/auth","fire-auth"),e(G)(Rt,"@firebase/auth-compat","fire-auth-compat"),e(G)(Rt,"@firebase/database","fire-rtdb"),e(G)(Rt,"@firebase/database-compat","fire-rtdb-compat"),e(G)(Rt,"@firebase/functions","fire-fn"),e(G)(Rt,"@firebase/functions-compat","fire-fn-compat"),e(G)(Rt,"@firebase/installations","fire-iid"),e(G)(Rt,"@firebase/installations-compat","fire-iid-compat"),e(G)(Rt,"@firebase/messaging","fire-fcm"),e(G)(Rt,"@firebase/messaging-compat","fire-fcm-compat"),e(G)(Rt,"@firebase/performance","fire-perf"),e(G)(Rt,"@firebase/performance-compat","fire-perf-compat"),e(G)(Rt,"@firebase/remote-config","fire-rc"),e(G)(Rt,"@firebase/remote-config-compat","fire-rc-compat"),e(G)(Rt,"@firebase/storage","fire-gcs"),e(G)(Rt,"@firebase/storage-compat","fire-gcs-compat"),e(G)(Rt,"@firebase/firestore","fire-fst"),e(G)(Rt,"@firebase/firestore-compat","fire-fst-compat"),e(G)(Rt,"fire-js","fire-js"),e(G)(Rt,"firebase","fire-js-all"),Rt),Ut=new Map,Ft=new Map;function Bt(e,t){try{e.container.addComponent(t)}catch(n){Lt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Vt(e){var t=e.name;if(Ft.has(t))return Lt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Ft.set(t,e);var n=!0,r=!1,a=void 0;try{for(var i,o=Ut.values()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){Bt(i.value,e)}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!0}function zt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var Ht=(Nt={},e(G)(Nt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(G)(Nt,"bad-app-name","Illegal App name: '{$appName}"),e(G)(Nt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(G)(Nt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(G)(Nt,"no-options","Need to provide options, when not being deployed to hosting via source."),e(G)(Nt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(G)(Nt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(G)(Nt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(G)(Nt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(G)(Nt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(G)(Nt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Nt),qt=new je("app","Firebase",Ht),Wt=function(){"use strict";function t(n,r,a){var i=this;e(W)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ye("app",(function(){return i}),"PUBLIC"))}return e(K)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}]),t}(),Kt="9.17.1";function Gt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var a=Object.assign({name:Mt,automaticDataCollectionEnabled:!1},t),i=a.name;if("string"!=typeof i||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=Oe()),!n)throw qt.create("no-options");var o=Ut.get(i);if(o){if(Ve(n,o.options)&&Ve(a,o.config))return o;throw qt.create("duplicate-app",{appName:i})}var s=new nt(i),u=!0,c=!1,l=void 0;try{for(var f,d=Ft.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=f.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var h=new Wt(n,a,s);return Ut.set(i,h),h}function Jt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=Ut.get(e);if(!t&&e===Mt)return Gt();if(!t)throw qt.create("no-app",{appName:e});return t}function Xt(e,t,n){var r,a=null!==(r=jt[e])&&void 0!==r?r:e;n&&(a+="-".concat(n));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var s=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&s.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Lt.warn(s.join(" "))}Vt(new Ye("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}
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
var $t="firebase-heartbeat-store",Yt=null;function Zt(){return Yt||(Yt=Tt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore($t)}}).catch((function(e){throw qt.create("idb-open",{originalErrorMessage:e.message})}))),Yt}function Qt(e){return en.apply(this,arguments)}function en(){return(en=e(u)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Zt();case 3:return r=e.sent,e.abrupt("return",r.transaction($t).objectStore($t).get(rn(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Me?Lt.warn(e.t0.message):(a=qt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Lt.warn(a.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function tn(e,t){return nn.apply(this,arguments)}function nn(){return(nn=e(u)(e(c).mark((function t(n,r){var a,i,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Zt();case 3:return a=e.sent,i=a.transaction($t,"readwrite"),o=i.objectStore($t),e.next=8,o.put(r,rn(n));case 8:return e.abrupt("return",i.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof Me?Lt.warn(e.t0.message):(s=qt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Lt.warn(s.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function rn(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var an=function(){"use strict";function t(n){var r=this;e(W)(this,t),this.container=n,this._heartbeatsCache=null;var a=this.container.getProvider("app").getImmediate();this._storage=new cn(a),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(K)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r,a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),a=r.getPlatformInfoString(),i=on(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==i&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:i,agent:a});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r,a,i,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=on(),a=sn(t._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,o=a.unsentEntries,s=Ie(JSON.stringify({version:2,heartbeats:i})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function on(){return(new Date).toISOString().substring(0,10)}function sn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),a=!0,i=!1,o=void 0;try{for(var s,u=function(e,a){var i=a.value,o=n.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),ln(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:i.agent,dates:[i.date]}),ln(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=u(c,s);if("break"===l)break}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var un,cn=function(){"use strict";function t(n){e(W)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(K)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(De()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",Pe().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Qt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return i=e.sent,e.abrupt("return",tn(n.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return i=r.sent,r.abrupt("return",tn(n.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:e(J)(i.heartbeats).concat(e(J)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function ln(e){return Ie(JSON.stringify({version:2,heartbeats:e})).length}
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
 */un="",Vt(new Ye("platform-logger",(function(e){return new At(e)}),"PRIVATE")),Vt(new Ye("heartbeat",(function(e){return new an(e)}),"PRIVATE")),Xt(Dt,Pt,un),Xt(Dt,Pt,"esm2017"),Xt("fire-js","");
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
Xt("firebase","9.17.1","app");u=a("eZ7d6"),W=a("ckB89"),K=a("4mzug"),G=a("ikNsj"),X=a("8sKqN"),c=a("2TvXO"),u=a("eZ7d6"),G=a("ikNsj"),J=a("jiX0X"),c=a("2TvXO");var fn,dn="@firebase/installations",pn="0.6.3",hn=1e4,vn="w:".concat(pn),mn="FIS_v2",gn=36e5,yn=(fn={},e(G)(fn,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(G)(fn,"not-registered","Firebase Installation is not registered."),e(G)(fn,"installation-not-found","Firebase Installation not found."),e(G)(fn,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(G)(fn,"app-offline","Could not process request. Application offline."),e(G)(fn,"delete-pending-registration","Can't delete installation while there is a pending registration request."),fn),kn=new je("installations","Installations",yn);function bn(e){return e instanceof Me&&e.code.includes("request-failed")}
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
 */function wn(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function xn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function In(e,t){return _n.apply(this,arguments)}function _n(){return(_n=e(u)(e(c).mark((function t(n,r){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return a=e.sent,i=a.error,e.abrupt("return",kn.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Tn(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Sn(e,t){var n=t.refreshToken,r=Tn(e);return r.append("Authorization",function(e){return"".concat(mn," ").concat(e)}(n)),r}function En(e){return On.apply(this,arguments)}function On(){return(On=e(u)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cn(e,t){return An.apply(this,arguments)}function An(){return(An=
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
e(u)(e(c).mark((function t(n,r){var a,i,o,s,u,l,f,d,p,h,v,m;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.appConfig,i=n.heartbeatServiceProvider,o=r.fid,s=wn(a),u=Tn(a),!(l=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(f=e.sent)&&u.append("x-firebase-client",f);case 9:return d={fid:o,authVersion:mn,appId:a.appId,sdkVersion:vn},p={method:"POST",headers:u,body:JSON.stringify(d)},e.next=13,En((function(){return fetch(s,p)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return v=e.sent,m={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:xn(v.authToken)},e.abrupt("return",m);case 22:return e.next=24,In("Create Installation",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function Rn(e){return new Promise((function(t){setTimeout(t,e)}))}
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
var Nn=/^[cdef][\w-]{21}$/;function Dn(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(J)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(t);return Nn.test(n)?n:""}catch(e){return""}}function Pn(e){return"".concat(e.appName,"!").concat(e.appId)}
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
 */var Ln=new Map;function Mn(e,t){var n=Pn(e);jn(n,t),function(e,t){var n=Fn();n&&n.postMessage({key:e,fid:t});Bn()}(n,t)}function jn(e,t){var n=Ln.get(e);if(n){var r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}}var Un=null;function Fn(){return!Un&&"BroadcastChannel"in self&&((Un=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){jn(e.data.key,e.data.fid)}),Un}function Bn(){0===Ln.size&&Un&&(Un.close(),Un=null)}
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
 */var Vn="firebase-installations-store",zn=null;function Hn(){return zn||(zn=Tt("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Vn)}})),zn}function qn(e,t){return Wn.apply(this,arguments)}function Wn(){return(Wn=e(u)(e(c).mark((function t(n,r){var a,i,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Pn(n),e.next=3,Hn();case 3:return i=e.sent,o=i.transaction(Vn,"readwrite"),s=o.objectStore(Vn),e.next=8,s.get(a);case 8:return u=e.sent,e.next=11,s.put(r,a);case 11:return e.next=13,o.done;case 13:return u&&u.fid===r.fid||Mn(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Kn(e){return Gn.apply(this,arguments)}function Gn(){return(Gn=e(u)(e(c).mark((function t(n){var r,a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Pn(n),e.next=3,Hn();case 3:return a=e.sent,i=a.transaction(Vn,"readwrite"),e.next=7,i.objectStore(Vn).delete(r);case 7:return e.next=9,i.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Jn(e,t){return Xn.apply(this,arguments)}function Xn(){return(Xn=e(u)(e(c).mark((function t(n,r){var a,i,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Pn(n),e.next=3,Hn();case 3:return i=e.sent,o=i.transaction(Vn,"readwrite"),s=o.objectStore(Vn),e.next=8,s.get(a);case 8:if(u=e.sent,void 0!==(l=r(u))){e.next=15;break}return e.next=13,s.delete(a);case 13:e.next=17;break;case 15:return e.next=17,s.put(l,a);case 17:return e.next=19,o.done;case 19:return!l||u&&u.fid===l.fid||Mn(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $n(e){return Yn.apply(this,arguments)}function Yn(){return(Yn=
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
e(u)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Jn(n.appConfig,(function(e){var t=Zn(e),a=Qn(n,t);return r=a.registrationPromise,a.installationEntry}));case 3:if(""!==(a=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:a,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Zn(e){return ar(e||{fid:Dn(),registrationStatus:0})}function Qn(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(kn.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return er.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:tr(e)}:{installationEntry:t}}function er(){return(er=e(u)(e(c).mark((function t(n,r){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Cn(n,r);case 3:return a=e.sent,e.abrupt("return",qn(n.appConfig,a));case 7:if(e.prev=7,e.t0=e.catch(0),!bn(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,Kn(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,qn(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function tr(e){return nr.apply(this,arguments)}function nr(){return(nr=e(u)(e(c).mark((function t(n){var r,a,i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,rr(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,Rn(100);case 6:return e.next=8,rr(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,$n(n);case 14:if(a=e.sent,i=a.installationEntry,!(o=a.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",i);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function rr(e){return Jn(e,(function(e){if(!e)throw kn.create("installation-not-found");return ar(e)}))}function ar(e){return 1===(t=e).registrationStatus&&t.registrationTime+hn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function ir(e,t){return or.apply(this,arguments)}function or(){return(or=
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
e(u)(e(c).mark((function t(n,r){var a,i,o,s,u,l,f,d,p,h,v;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.appConfig,i=n.heartbeatServiceProvider,o=sr(a,r),s=Sn(a,r),!(u=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(l=e.sent)&&s.append("x-firebase-client",l);case 9:return f={installation:{sdkVersion:vn,appId:a.appId}},d={method:"POST",headers:s,body:JSON.stringify(f)},e.next=13,En((function(){return fetch(o,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return h=e.sent,v=xn(h),e.abrupt("return",v);case 22:return e.next=24,In("Generate Auth Token",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function sr(e,t){var n=t.fid;return"".concat(wn(e),"/").concat(n,"/authTokens:generate")}function ur(e){return cr.apply(this,arguments)}function cr(){return cr=
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
e(u)(e(c).mark((function t(n){var r,a,i,o,s=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,Jn(n.appConfig,(function(e){if(!vr(e))throw kn.create("not-registered");var t=e.authToken;if(!r&&mr(t))return e;if(1===t.requestStatus)return a=lr(n,r),e;if(!navigator.onLine)throw kn.create("app-offline");var i=gr(e);return a=pr(n,i),i}));case 4:if(i=e.sent,!a){e.next=11;break}return e.next=8,a;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=i.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),cr.apply(this,arguments)}function lr(e,t){return fr.apply(this,arguments)}function fr(){return(fr=e(u)(e(c).mark((function t(n,r){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,dr(n.appConfig);case 2:a=e.sent;case 3:if(1!==a.authToken.requestStatus){e.next=11;break}return e.next=6,Rn(100);case 6:return e.next=8,dr(n.appConfig);case 8:a=e.sent,e.next=3;break;case 11:if(0!==(i=a.authToken).requestStatus){e.next=16;break}return e.abrupt("return",ur(n,r));case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function dr(e){return Jn(e,(function(e){if(!vr(e))throw kn.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+hn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function pr(e,t){return hr.apply(this,arguments)}function hr(){return(hr=e(u)(e(c).mark((function t(n,r){var a,i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ir(n,r);case 3:return a=e.sent,i=Object.assign(Object.assign({},r),{authToken:a}),e.next=7,qn(n.appConfig,i);case 7:return e.abrupt("return",a);case 10:if(e.prev=10,e.t0=e.catch(0),!bn(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,Kn(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,qn(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function vr(e){return void 0!==e&&2===e.registrationStatus}function mr(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+gn}(e)}function gr(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function yr(){return(yr=
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
e(u)(e(c).mark((function t(n){var r,a,i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,$n(r);case 3:return a=e.sent,i=a.installationEntry,(o=a.registrationPromise)?o.catch(console.error):ur(r).catch(console.error),e.abrupt("return",i.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kr(){return kr=
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
e(u)(e(c).mark((function t(n){var r,a,i,o=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],a=n,e.next=4,br(a);case 4:return e.next=6,ur(a,r);case 6:return i=e.sent,e.abrupt("return",i.token);case 8:case"end":return e.stop()}}),t)}))),kr.apply(this,arguments)}function br(e){return wr.apply(this,arguments)}function wr(){return(wr=e(u)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$n(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xr(e){return kn.create("missing-app-config-values",{valueName:e})}
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
 */var Ir="installations",_r=function(e){var t=zt(e.getProvider("app").getImmediate(),Ir).getImmediate(),n={getId:function(){return function(e){return yr.apply(this,arguments)}(t)},getToken:function(e){return function(e){return kr.apply(this,arguments)}(t,e)}};return n};Vt(new Ye(Ir,(function(e){var t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw xr("App Configuration");if(!e.name)throw xr("App Name");var t=!0,n=!1,r=void 0;try{for(var a,i=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;if(!e.options[o])throw xr(o)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:zt(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),Vt(new Ye("installations-internal",_r,"PRIVATE")),Xt(dn,pn),Xt(dn,pn,"esm2017");
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
var Tr,Sr="analytics",Er=6e4,Or="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cr="https://www.googletagmanager.com/gtag/js",Ar=new ct("@firebase/analytics");
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
function Rr(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function Nr(e,t){var n=document.createElement("script");n.src="".concat(Cr,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function Dr(e,t,n,r,a,i){return Pr.apply(this,arguments)}function Pr(){return(Pr=e(u)(e(c).mark((function t(n,r,a,i,o,s){var u,l,f;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=i[o],e.prev=1,!u){e.next=7;break}return e.next=5,r[u];case 5:e.next=14;break;case 7:return e.next=9,Rr(a);case 9:if(l=e.sent,!(f=l.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[f.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),Ar.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function Lr(e,t,n,r,a){return Mr.apply(this,arguments)}function Mr(){return(Mr=e(u)(e(c).mark((function t(n,r,a,i,o){var s,u,l,f,d,p,h,v,m,g,y;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,Rr(a);case 7:l=e.sent,f=!0,d=!1,p=void 0,e.prev=9,h=u[Symbol.iterator]();case 11:if(f=(v=h.next()).done){e.next=24;break}if(m=v.value,g=l.find((function(e){return e.measurementId===m})),!(y=g&&r[g.appId])){e.next=19;break}s.push(y),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:f=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),d=!0,p=e.t0;case 30:e.prev=30,e.prev=31,f||null==h.return||h.return();case 33:if(e.prev=33,!d){e.next=36;break}throw p;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",i,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),Ar.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function jr(t,n,r,a,i){var o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[a].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=function(t,n,r,a){function i(){return(i=e(u)(e(c).mark((function i(o,s,u){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==o){e.next=6;break}return e.next=4,Lr(t,n,r,s,u);case 4:e.next=12;break;case 6:if("config"!==o){e.next=11;break}return e.next=9,Dr(t,n,r,a,s,u);case 9:e.next=12;break;case 11:"consent"===o?t("consent","update",u):t("set",s);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),Ar.error(e.t0);case 17:case"end":return e.stop()}}),i,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return i.apply(this,arguments)}}(o,t,n,r),{gtagCore:o,wrappedGtag:window[i]}}function Ur(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,a=void 0;try{for(var i,o=Object.values(t)[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(s.src&&s.src.includes(Cr)&&s.src.includes(e))return s}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return null}
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
var Fr=(Tr={},e(G)(Tr,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(G)(Tr,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(G)(Tr,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(G)(Tr,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(G)(Tr,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(G)(Tr,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(G)(Tr,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(G)(Tr,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(G)(Tr,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(G)(Tr,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Tr),Br=new je("analytics","Analytics",Fr),Vr=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(W)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(K)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),zr=new Vr;function Hr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function qr(e){return Wr.apply(this,arguments)}function Wr(){return(Wr=e(u)(e(c).mark((function t(n){var r,a,i,o,s,u,l,f;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.appId,i=n.apiKey,o={method:"GET",headers:Hr(i)},s=Or.replace("{app-id}",a),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return l="",e.prev=9,e.next=12,u.json();case 12:f=e.sent,(null===(r=f.error)||void 0===r?void 0:r.message)&&(l=f.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw Br.create("config-fetch-failed",{httpStatus:u.status,responseMessage:l});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function Kr(e){return Gr.apply(this,arguments)}function Gr(){return Gr=e(u)(e(c).mark((function t(n){var r,a,i,o,s,l,f,d,p=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:zr,a=p.length>2?p[2]:void 0,i=n.options,o=i.appId,s=i.apiKey,l=i.measurementId,o){t.next=4;break}throw Br.create("no-app-id");case 4:if(s){t.next=8;break}if(!l){t.next=7;break}return t.abrupt("return",{measurementId:l,appId:o});case 7:throw Br.create("no-api-key");case 8:return f=r.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new ea,setTimeout(e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==a?a:Er),t.abrupt("return",Jr({appId:o,apiKey:s,measurementId:l},f,d,r));case 12:case"end":return t.stop()}}),t)}))),Gr.apply(this,arguments)}function Jr(e,t,n){return Xr.apply(this,arguments)}function Xr(){return Xr=e(u)(e(c).mark((function t(n,r,a){var i,o,s,u,l,f,d,p,h,v,m=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.throttleEndTimeMillis,o=r.backoffCount,s=m.length>3&&void 0!==m[3]?m[3]:zr,l=n.appId,f=n.measurementId,e.prev=3,e.next=6,$r(a,i);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return Ar.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,qr(n);case 17:return d=e.sent,s.deleteThrottleMetadata(l),e.abrupt("return",d);case 22:if(e.prev=22,e.t1=e.catch(14),Yr(p=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(l),!f){e.next=32;break}return Ar.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==p?void 0:p.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 32:throw e.t1;case 33:return h=503===Number(null===(u=null==p?void 0:p.customData)||void 0===u?void 0:u.httpStatus)?Xe(o,s.intervalMillis,30):Xe(o,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+h,backoffCount:o+1},s.setThrottleMetadata(l,v),Ar.debug("Calling attemptFetch again in ".concat(h," millis")),e.abrupt("return",Jr(n,v,a,s));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),Xr.apply(this,arguments)}function $r(e,t){return new Promise((function(n,r){var a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener((function(){clearTimeout(i),r(Br.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Yr(e){if(!(e instanceof Me&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var Zr,Qr,ea=function(){"use strict";function t(){e(W)(this,t),this.listeners=[]}return e(K)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
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
 */function ta(){return(ta=e(u)(e(c).mark((function t(n,r,a,i,o){var s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",a,i),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,u=Object.assign(Object.assign({},i),{send_to:s}),n("event",a,u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function na(e){Qr=e}function ra(e){Zr=e}function aa(){return ia.apply(this,arguments)}function ia(){return(ia=
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
e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(De()){e.next=5;break}return Ar.warn(Br.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,Pe();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),Ar.warn(Br.create("indexeddb-unavailable",{errorInfo:null===e.t0||void 0===e.t0?void 0:e.t0.toString()}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}function oa(){return(oa=e(u)(e(c).mark((function t(n,r,a,i,o,s,u){var l,f,d,p,h,v,m;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(f=Kr(n)).then((function(e){a[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&Ar.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return Ar.error(e)})),r.push(f),d=aa().then((function(e){return e?i.getId():void 0})),t.t0=e(X),t.next=8,Promise.all([f,d]);case 8:return t.t1=t.sent,p=(0,t.t0)(t.t1,2),h=p[0],v=p[1],Ur(s)||Nr(s,h.measurementId),Qr&&(o("consent","default",Qr),na(void 0)),o("js",new Date),(m=null!==(l=null==u?void 0:u.config)&&void 0!==l?l:{}).origin="firebase",m.update=!0,null!=v&&(m.firebase_id=v),o("config",h.measurementId,m),Zr&&(o("set",Zr),ra(void 0)),t.abrupt("return",h.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var sa,ua,ca=function(){"use strict";function t(n){e(W)(this,t),this.app=n}return e(K)(t,[{key:"_delete",value:function(){return delete la[this.app.options.appId],Promise.resolve()}}]),t}(),la={},fa=[],da={},pa="dataLayer",ha="gtag",va=!1;function ma(e,t,n){!function(){var e=[];if(Ne()&&e.push("This is a browser extension environment."),Le()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=Br.create("invalid-analytics-context",{errorInfo:t});Ar.warn(n.message)}}();var r,a,i=e.options.appId;if(!i)throw Br.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Br.create("no-api-key");Ar.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=la[i])throw Br.create("already-exists",{id:i});if(!va){r=pa,a=[],Array.isArray(window[r])?a=window[r]:window[r]=a;var o=jr(la,fa,da,pa,ha),s=o.wrappedGtag,u=o.gtagCore;ua=s,sa=u,va=!0}return la[i]=function(e,t,n,r,a,i,o){return oa.apply(this,arguments)}(e,fa,da,t,sa,pa,n),new ca(e)}function ga(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=zt(e,Sr);if(n.isInitialized()){var r=n.getImmediate();if(Ve(t,n.getOptions()))return r;throw Br.create("already-initialized")}var a=n.initialize({options:t});return a}function ya(e,t,n,r){e=$e(e),function(e,t,n,r,a){return ta.apply(this,arguments)}(ua,la[e.app.options.appId],t,n,r).catch((function(e){return Ar.error(e)}))}var ka="@firebase/analytics",ba="0.9.3";Vt(new Ye(Sr,(function(e,t){var n=t.options;return ma(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),Vt(new Ye("analytics-internal",(function(e){try{var t=e.getProvider(Sr).getImmediate();return{logEvent:function(e,n,r){return ya(t,e,n,r)}}}catch(e){throw Br.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Xt(ka,ba),Xt(ka,ba,"esm2017");$=a("7SURw"),u=a("eZ7d6"),W=a("ckB89"),K=a("4mzug"),G=a("ikNsj");var wa={};Object.defineProperty(wa,"__esModule",{value:!0}),wa.default=function(e,t,n){return Ia(e,t,n)};var xa=function(e){return e&&e.__esModule?e:{default:e}}(a("lhF45"));function Ia(e,t,n){return(Ia="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=xa.default(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}var _a=a("eSWTR");Y=a("k8LMu"),X=a("8sKqN"),J=a("jiX0X"),ue=a("brQQZ"),c=a("2TvXO");function Ta(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}Object.create;Object.create;function Sa(){return e(G)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Ea=Sa,Oa=new je("auth","Firebase",Sa()),Ca=new ct("@firebase/auth");function Aa(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i;Ca.logLevel<=et.ERROR&&(i=Ca).error.apply(i,["Auth (".concat(Kt,"): ").concat(t)].concat(e(J)(r)))}
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
 */function Ra(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];throw Pa.apply(void 0,[t].concat(e(J)(r)))}function Na(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Pa.apply(void 0,[t].concat(e(J)(r)))}function Da(t,n,r){var a=Object.assign(Object.assign({},Ea()),e(G)({},n,r));return new je("auth","Firebase",a).create(n,{appName:t.name})}function Pa(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i;if("string"!=typeof t){var o,s=r[0],u=e(J)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(J)(u)))}return(i=Oa).create.apply(i,[t].concat(e(J)(r)))}function La(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];if(!t)throw Pa.apply(void 0,[n].concat(e(J)(a)))}function Ma(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Aa(t),new Error(t)}function ja(e,t){e||Ma(t)}
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
 */var Ua=new Map;function Fa(e){ja(e instanceof Function,"Expected a class definition");var t=Ua.get(e);return t?(ja(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ua.set(e,t),t)}
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
 */function Ba(e,t){var n=zt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Ve(n.getOptions(),null!=t?t:{}))return r;Ra(r,"already-initialized")}return n.initialize({options:t})}
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
function Va(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function za(){return"http:"===Ha()||"https:"===Ha()}function Ha(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var qa=function(){"use strict";function t(n,r){e(W)(this,t),this.shortDelay=n,this.longDelay=r,ja(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(K)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(za()||Ne()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
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
 */function Wa(e,t){ja(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var Ka,Ga=function(){"use strict";function t(){e(W)(this,t)}return e(K)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ma("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ma("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ma("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Ja=(Ka={},e(G)(Ka,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(G)(Ka,"MISSING_CUSTOM_TOKEN","internal-error"),e(G)(Ka,"INVALID_IDENTIFIER","invalid-email"),e(G)(Ka,"MISSING_CONTINUE_URI","internal-error"),e(G)(Ka,"INVALID_PASSWORD","wrong-password"),e(G)(Ka,"MISSING_PASSWORD","internal-error"),e(G)(Ka,"EMAIL_EXISTS","email-already-in-use"),e(G)(Ka,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(G)(Ka,"INVALID_IDP_RESPONSE","invalid-credential"),e(G)(Ka,"INVALID_PENDING_TOKEN","invalid-credential"),e(G)(Ka,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(G)(Ka,"MISSING_REQ_TYPE","internal-error"),e(G)(Ka,"EMAIL_NOT_FOUND","user-not-found"),e(G)(Ka,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(G)(Ka,"EXPIRED_OOB_CODE","expired-action-code"),e(G)(Ka,"INVALID_OOB_CODE","invalid-action-code"),e(G)(Ka,"MISSING_OOB_CODE","internal-error"),e(G)(Ka,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(G)(Ka,"INVALID_ID_TOKEN","invalid-user-token"),e(G)(Ka,"TOKEN_EXPIRED","user-token-expired"),e(G)(Ka,"USER_NOT_FOUND","user-token-expired"),e(G)(Ka,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(G)(Ka,"INVALID_CODE","invalid-verification-code"),e(G)(Ka,"INVALID_SESSION_INFO","invalid-verification-id"),e(G)(Ka,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(G)(Ka,"MISSING_SESSION_INFO","missing-verification-id"),e(G)(Ka,"SESSION_EXPIRED","code-expired"),e(G)(Ka,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(G)(Ka,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(G)(Ka,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(G)(Ka,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(G)(Ka,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(G)(Ka,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(G)(Ka,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(G)(Ka,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(G)(Ka,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(G)(Ka,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(G)(Ka,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Ka),Xa=new qa(3e4,6e4);function $a(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Ya(e,t,n,r){return Za.apply(this,arguments)}function Za(){return Za=e(u)(e(c).mark((function t(n,r,a,i){var o,s=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},t.abrupt("return",Qa(n,o,e(u)(e(c).mark((function t(){var o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},i&&("GET"===r?s=i:o={body:JSON.stringify(i)}),u=He(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Ga.fetch()(ri(n,n.config.apiHost,a,u),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Za.apply(this,arguments)}function Qa(e,t,n){return ei.apply(this,arguments)}function ei(){return(ei=e(u)(e(c).mark((function t(n,r,a){var i,o,s,u,l,f,d,p,h;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,i=Object.assign(Object.assign({},Ja),r),t.prev=2,o=new ai(n),t.next=6,Promise.race([a(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw ii(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(l=s.ok?u.errorMessage:u.error.message,f=e(X)(l.split(" : "),2),d=f[0],p=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw ii(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw ii(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw ii(n,"user-disabled",u);case 29:if(h=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){t.next=34;break}throw Da(n,h,p);case 34:Ra(n,h);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Me)){t.next=41;break}throw t.t0;case 41:Ra(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function ti(e,t,n,r){return ni.apply(this,arguments)}function ni(){return ni=e(u)(e(c).mark((function t(n,r,a,i){var o,s,u=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Ya(n,r,a,i,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&Ra(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),ni.apply(this,arguments)}function ri(e,t,n,r){var a="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Wa(e.config,a):"".concat(e.config.apiScheme,"://").concat(a)}var ai=function(){"use strict";function t(n){var r=this;e(W)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Na(n.auth,"network-request-failed"))}),Xa.get())}))}return e(K)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function ii(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var a=Na(e,t,r);return a.customData._tokenResponse=n,a}function oi(e,t){return si.apply(this,arguments)}function si(){return(si=
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
e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ya(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ui(e,t){return ci.apply(this,arguments)}function ci(){return(ci=e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ya(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function li(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function fi(){return fi=e(u)(e(c).mark((function t(n){var r,a,i,o,s,u,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],a=$e(n),e.next=4,a.getIdToken(r);case 4:return i=e.sent,La((o=pi(i))&&o.exp&&o.auth_time&&o.iat,a.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:i,authTime:li(di(o.auth_time)),issuedAtTime:li(di(o.iat)),expirationTime:li(di(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),fi.apply(this,arguments)}function di(e){return 1e3*Number(e)}function pi(t){var n=e(X)(t.split("."),3),r=n[0],a=n[1],i=n[2];if(void 0===r||void 0===a||void 0===i)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{var o=_e(a);return o?JSON.parse(o):(Aa("Failed to decode base64 JWT payload"),null)}catch(e){return Aa("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function hi(e,t){return vi.apply(this,arguments)}function vi(){return vi=
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
e(u)(e(c).mark((function t(n,r){var a=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>2&&void 0!==a[2]&&a[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Me&&mi(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),vi.apply(this,arguments)}function mi(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var gi=function(){"use strict";function t(n){e(W)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(K)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),yi=function(){"use strict";function t(n,r){e(W)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(K)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function ki(e){return bi.apply(this,arguments)}function bi(){return(bi=
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
e(u)(e(c).mark((function t(n){var r,a,i,o,s,u,l,f,d,p,h;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.auth,e.next=4,n.getIdToken();case 4:return i=e.sent,e.next=7,hi(n,ui(a,{idToken:i}));case 7:La(null==(o=e.sent)?void 0:o.users.length,a,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?Ii(s.providerUserInfo):[],l=xi(n.providerData,u),f=n.isAnonymous,d=!(n.email&&s.passwordHash||(null==l?void 0:l.length)),p=!!f&&d,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new yi(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(n,h);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wi(){return(wi=e(u)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=$e(n),e.next=3,ki(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xi(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(J)(r).concat(e(J)(n))}function Ii(e){return e.map((function(e){var t=e.providerId,n=Ta(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function _i(e,t){return Ti.apply(this,arguments)}function Ti(){return(Ti=
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
e(u)(e(c).mark((function t(n,r){var a;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Qa(n,{},e(u)(e(c).mark((function t(){var a,i,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=He({grant_type:"refresh_token",refresh_token:r}).slice(1),i=n.config,o=i.tokenApiHost,s=i.apiKey,u=ri(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Ga.fetch()(u,{method:"POST",headers:l,body:a}));case 8:case"end":return e.stop()}}),t)}))));case 2:return a=t.sent,t.abrupt("return",{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var Si=function(){"use strict";function t(){e(W)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(K)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){La(e.idToken,"internal-error"),La(void 0!==e.idToken,"internal-error"),La(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,La(n=pi(t),"internal-error"),La(void 0!==n.exp,"internal-error"),La(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(u)(e(c).mark((function a(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(La(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),a)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(u)(e(c).mark((function a(){var i,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_i(t,n);case 2:i=e.sent,o=i.accessToken,s=i.refreshToken,u=i.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),a)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Ma("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,a=n.accessToken,i=n.expirationTime,o=new t;return r&&(La("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),a&&(La("string"==typeof a,"internal-error",{appName:e}),o.accessToken=a),i&&(La("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}}]),t}();
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
 */function Ei(e,t){La("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Oi=function(){"use strict";function t(n){e(W)(this,t);var r=n.uid,a=n.auth,i=n.stsTokenManager,o=Ta(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=a,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(J)(o.providerData):[],this.metadata=new yi(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(K)(t,[{key:"getIdToken",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,hi(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(La(a=e.sent,n.auth,"internal-error"),n.accessToken===a){e.next=9;break}return n.accessToken=a,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return fi.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return wi.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(La(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){La(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(u)(e(c).mark((function a(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),i=!0),!n){e.next=5;break}return e.next=5,ki(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:i&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),a)})))()}},{key:"delete",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,hi(t,oi(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,a,i,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(a=n.email)&&void 0!==a?a:void 0,p=null!==(i=n.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,w=n.isAnonymous,x=n.providerData,I=n.stsTokenManager;La(k&&I,e,"internal-error");var _=Si.fromJSON(this.name,I);La("string"==typeof k,e,"internal-error"),Ei(f,e.name),Ei(d,e.name),La("boolean"==typeof b,e,"internal-error"),La("boolean"==typeof w,e,"internal-error"),Ei(p,e.name),Ei(h,e.name),Ei(v,e.name),Ei(m,e.name),Ei(g,e.name),Ei(y,e.name);var T=new t({uid:k,auth:e,email:d,emailVerified:b,displayName:f,isAnonymous:w,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:_,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(T.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(n,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(u)(e(c).mark((function i(){var o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Si).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:a}),e.next=5,ki(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),i)})))()}}]),t}(),Ci=function(){"use strict";function t(){e(W)(this,t),this.type="NONE",this.storage={}}return e(K)(t,[{key:"_isAvailable",value:function(){return e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(u)(e(c).mark((function a(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.storage[t],e.abrupt("return",void 0===a?null:a);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */Ci.type="NONE";var Ai=Ci;
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
 */function Ri(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ni=function(){"use strict";function t(n,r,a){e(W)(this,t),this.persistence=n,this.auth=r,this.userKey=a;var i=this.auth,o=i.config,s=i.name;this.fullUserKey=Ri(this.userKey,o.apiKey,s),this.fullPersistenceKey=Ri("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(K)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Oi._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return a=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!a){e.next=10;break}return e.abrupt("return",n.setCurrentUser(a));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(u)(e(c).mark((function i(){var o,s,l,f,d,p,h,v,m,g,y,k,b;return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r.length){i.next=2;break}return i.abrupt("return",new t(Fa(Ai),n,a));case 2:return i.next=4,Promise.all(r.map(function(){var t=e(u)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=i.sent.filter((function(e){return e})),s=o[0]||Fa(Ai),l=Ri(a,n.config.apiKey,n.name),f=null,d=!0,p=!1,h=void 0,i.prev=9,v=r[Symbol.iterator]();case 11:if(d=(m=v.next()).done){i.next=29;break}return g=m.value,i.prev=13,i.next=16,g._get(l);case 16:if(!(y=i.sent)){i.next=22;break}return k=Oi._fromJSON(n,y),g!==s&&(f=k),s=g,i.abrupt("break",29);case 22:i.next=26;break;case 24:i.prev=24,i.t0=i.catch(13);case 26:d=!0,i.next=11;break;case 29:i.next=35;break;case 31:i.prev=31,i.t1=i.catch(9),p=!0,h=i.t1;case 35:i.prev=35,i.prev=36,d||null==v.return||v.return();case 38:if(i.prev=38,!p){i.next=41;break}throw h;case 41:return i.finish(38);case 42:return i.finish(35);case 43:if(b=o.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&b.length){i.next=46;break}return i.abrupt("return",new t(s,n,a));case 46:if(s=b[0],!f){i.next=50;break}return i.next=50,s._set(l,f.toJSON());case 50:return i.next=52,Promise.all(r.map(function(){var t=e(u)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===s){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return i.abrupt("return",new t(s,n,a));case 53:case"end":return i.stop()}}),i,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function Di(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ji(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fi(t))return"Blackberry";if(Bi(t))return"Webos";if(Li(t))return"Safari";if((t.includes("chrome/")||Mi(t))&&!t.includes("edge/"))return"Chrome";if(Ui(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Pi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return/firefox\//i.test(e)}function Li(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return/crios\//i.test(e)}function ji(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return/iemobile/i.test(e)}function Ui(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return/android/i.test(e)}function Fi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return/blackberry/i.test(e)}function Bi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return/webos/i.test(e)}function Vi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function zi(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return Vi(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Hi(){return((e=Re()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function qi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re();return Vi(e)||Ui(e)||Bi(e)||Fi(e)||/windows phone/i.test(e)||ji(e)}
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
function Wi(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Di(Re());break;case"Worker":t="".concat(Di(Re()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Kt,"/").concat(r)}
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
 */var Ki=function(){"use strict";function t(n){e(W)(this,t),this.auth=n,this.queue=[]}return e(K)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var a=this.queue.length-1;return function(){n.queue[a]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i,o,s,u,l,f,d,p,h,v,m,g;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:a=[],e.prev=3,i=!0,o=!1,s=void 0,e.prev=5,u=n.queue[Symbol.iterator]();case 7:if(i=(l=u.next()).done){e.next=15;break}return f=l.value,e.next=11,f(t);case 11:f.onAbort&&a.push(f.onAbort);case 12:i=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,i||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),a.reverse(),d=!0,p=!1,h=void 0,e.prev=35,v=a[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){g=m.value;try{g()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),p=!0,h=e.t2;case 43:e.prev=43,e.prev=44,d||null==v.return||v.return();case 46:if(e.prev=46,!p){e.next=49;break}throw h;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),Gi=function(){"use strict";function t(n,r,a){e(W)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xi(this),this.idTokenSubscription=new Xi(this),this.beforeStateQueue=new Ki(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(K)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=Fa(n));var r=this;return this._initializationPromise=this.queue(e(u)(e(c).mark((function a(){var i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Ni.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(i=r._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),a,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i,o,s,u,l,f;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(i=e.sent,o=i,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId,l=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:f=e.sent,u&&u!==l||!(null==f?void 0:f.user)||(o=f.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=i,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return La(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ki(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t?$e(t):null)&&La(a.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(a&&a._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(u)(e(c).mark((function a(){return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!r._deleted){a.next=2;break}return a.abrupt("return");case 2:if(t&&La(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){a.next=6;break}return a.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return a.abrupt("return",r.queue(e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return a.stop()}}),a)})))()}},{key:"signOut",value:function(){var t=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(Fa(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new je("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(u)(e(c).mark((function a(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return i=e.sent,e.abrupt("return",null===t?i.removeCurrentUser():i.setCurrentUser(t));case 4:case"end":return e.stop()}}),a)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return La(a=t&&Fa(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Ni.create(n,[Fa(a._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(a=n._currentUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var a=this;if(this._deleted)return function(){};var i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return La(o,this,"internal-error"),o.then((function(){return i(a.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return La(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wi(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r,a,i;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e(G)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(a["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(i=n.sent)&&(a["X-Firebase-Client"]=i),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function Ji(e){return $e(e)}var Xi=function(){"use strict";function t(n){var r,a,i=this;e(W)(this,t),this.auth=n,this.observer=null,this.addObserver=(a=new Ke((function(e){return i.observer=e}),r)).subscribe.bind(a)}return e(K)(t,[{key:"next",get:function(){return La(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function $i(t,n,r){var a=Ji(t);La(a._canInitEmulator,a,"emulator-config-failed"),La(/^https?:\/\//.test(n),a,"invalid-emulator-scheme");var i=!!(null==r?void 0:r.disableWarnings),o=Yi(n),s=function(t){var n=Yi(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var a=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(a);if(i){var o=i[1];return{host:o,port:Zi(a.substr(o.length+1))}}var s=e(X)(a.split(":"),2);return{host:s[0],port:Zi(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);a.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Yi(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Zi(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Qi=function(){"use strict";function t(n,r){e(W)(this,t),this.providerId=n,this.signInMethod=r}return e(K)(t,[{key:"toJSON",value:function(){return Ma("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Ma("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Ma("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Ma("not implemented")}}]),t}();function eo(e,t){return to.apply(this,arguments)}function to(){return(to=e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ya(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function no(e,t){return ro.apply(this,arguments)}function ro(){return(ro=
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
e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ti(n,"POST","/v1/accounts:signInWithPassword",$a(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ao(e,t){return io.apply(this,arguments)}function io(){return(io=
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
e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ti(n,"POST","/v1/accounts:signInWithEmailLink",$a(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function oo(e,t){return so.apply(this,arguments)}function so(){return(so=e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ti(n,"POST","/v1/accounts:signInWithEmailLink",$a(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var uo=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(t,a,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(W)(this,r),(o=n.call(this,"password",i))._email=t,o._password=a,o._tenantId=s,o}return e(K)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",no(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",ao(t,{email:n._email,oobCode:n._password}));case 5:Ra(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(u)(e(c).mark((function a(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",eo(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",oo(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Ra(t,"internal-error");case 6:case"end":return e.stop()}}),a)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Qi);function co(e,t){return lo.apply(this,arguments)}function lo(){return(lo=
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
e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ti(n,"POST","/v1/accounts:signInWithIdp",$a(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var fo=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(){var t;return e(W)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(K)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return co(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,co(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,co(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=He(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ra("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,a=t.signInMethod,i=Ta(t,["providerId","signInMethod"]);if(!n||!a)return null;var o=new r(n,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}}]),r}(Qi);function po(e,t){return ho.apply(this,arguments)}function ho(){return(ho=
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
e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ya(n,"POST","/v1/accounts:sendVerificationCode",$a(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vo(){return(vo=e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ti(n,"POST","/v1/accounts:signInWithPhoneNumber",$a(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function mo(){return(mo=e(u)(e(c).mark((function t(n,r){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ti(n,"POST","/v1/accounts:signInWithPhoneNumber",$a(n,r));case 2:if(!(a=e.sent).temporaryProof){e.next=5;break}throw ii(n,"account-exists-with-different-credential",a);case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var go=e(G)({},"USER_NOT_FOUND","user-not-found");function yo(){return(yo=e(u)(e(c).mark((function t(n,r){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",ti(n,"POST","/v1/accounts:signInWithPhoneNumber",$a(n,a),go));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var ko=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(t){var a;return e(W)(this,r),(a=n.call(this,"phone","phone")).params=t,a}return e(K)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return vo.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return mo.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return yo.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,a=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:a}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,a=e.phoneNumber,i=e.temporaryProof;return n||t||a||i?new r({verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:i}):null}}]),r}(Qi);
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
 */var bo=function(){"use strict";function t(n){var r,a,i,o,s,u;e(W)(this,t);var c=qe(We(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,f=null!==(a=c.oobCode)&&void 0!==a?a:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);La(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(K)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=qe(We(e)).link,n=t?qe(We(t)).deep_link_id:null,r=qe(We(e)).deep_link_id;return(r?qe(We(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var wo=function(){"use strict";function t(){e(W)(this,t),this.providerId=t.PROVIDER_ID}return e(K)(t,null,[{key:"credential",value:function(e,t){return uo._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=bo.parseLink(t);return La(n,"argument-error"),uo._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();wo.PROVIDER_ID="password",wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var xo=function(){"use strict";function t(n){e(W)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(K)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Io=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(){var t;return e(W)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(K)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(J)(this.scopes)}}]),r}(xo),_o=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(){return e(W)(this,r),n.call(this,"facebook.com")}return e(K)(r,null,[{key:"credential",value:function(e){return fo._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Io);
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
 */_o.FACEBOOK_SIGN_IN_METHOD="facebook.com",_o.PROVIDER_ID="facebook.com";
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
var To=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(){var t;return e(W)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(K)(r,null,[{key:"credential",value:function(e,t){return fo._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,a=t.oauthAccessToken;if(!n&&!a)return null;try{return r.credential(n,a)}catch(e){return null}}}]),r}(Io);To.GOOGLE_SIGN_IN_METHOD="google.com",To.PROVIDER_ID="google.com";
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
var So=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(){return e(W)(this,r),n.call(this,"github.com")}return e(K)(r,null,[{key:"credential",value:function(e){return fo._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Io);So.GITHUB_SIGN_IN_METHOD="github.com",So.PROVIDER_ID="github.com";
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
var Eo=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(){return e(W)(this,r),n.call(this,"twitter.com")}return e(K)(r,null,[{key:"credential",value:function(e,t){return fo._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,a=t.oauthTokenSecret;if(!n||!a)return null;try{return r.credential(n,a)}catch(e){return null}}}]),r}(Io);function Oo(e,t){return Co.apply(this,arguments)}function Co(){return(Co=
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
e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ti(n,"POST","/v1/accounts:signUp",$a(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */Eo.TWITTER_SIGN_IN_METHOD="twitter.com",Eo.PROVIDER_ID="twitter.com";var Ao=function(){"use strict";function t(n){e(W)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(K)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,a){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(u)(e(c).mark((function o(){var s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oi._fromIdTokenResponse(n,a,i);case 2:return s=e.sent,u=Ro(a),l=new t({user:s,providerId:u,_tokenResponse:a,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,a){return e(u)(e(c).mark((function i(){var o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(a,!0);case 2:return o=Ro(a),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:a,operationType:r}));case 4:case"end":return e.stop()}}),i)})))()}}]),t}();function Ro(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var No=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(t,a,i,o){var s,u;return e(W)(this,r),(s=n.call(this,a.code,a.message)).operationType=i,s.user=o,Object.setPrototypeOf(e($)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:a.customData._serverResponse,operationType:i},s}return e(K)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,a){return new r(e,t,n,a)}}]),r}(Me);function Do(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw No._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Po(e,t){return Lo.apply(this,arguments)}function Lo(){return Lo=e(u)(e(c).mark((function t(n,r){var a,i,o=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]&&o[2],e.t0=hi,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=a,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return i=e.sent,e.abrupt("return",Ao._forOperation(n,"link",i));case 14:case"end":return e.stop()}}),t)}))),Lo.apply(this,arguments)}function Mo(e,t){return jo.apply(this,arguments)}function jo(){return jo=
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
e(u)(e(c).mark((function t(n,r){var a,i,o,s,u,l,f=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>2&&void 0!==f[2]&&f[2],i=n.auth,o="reauthenticate",e.prev=3,e.next=6,hi(n,Do(i,o,r,n),a);case 6:return La((s=e.sent).idToken,i,"internal-error"),La(u=pi(s.idToken),i,"internal-error"),l=u.sub,La(n.uid===l,i,"user-mismatch"),e.abrupt("return",Ao._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Ra(i,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),jo.apply(this,arguments)}function Uo(e,t){return Fo.apply(this,arguments)}function Fo(){return Fo=
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
e(u)(e(c).mark((function t(n,r){var a,i,o,s,u=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>2&&void 0!==u[2]&&u[2],i="signIn",e.next=4,Do(n,i,r);case 4:return o=e.sent,e.next=7,Ao._fromIdTokenResponse(n,i,o);case 7:if(s=e.sent,a){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Fo.apply(this,arguments)}function Bo(e,t){return Vo.apply(this,arguments)}function Vo(){return(Vo=e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Uo(Ji(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zo(e,t,n){return Ho.apply(this,arguments)}function Ho(){return(Ho=e(u)(e(c).mark((function t(n,r,a){var i,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ji(n),e.next=3,Oo(i,{returnSecureToken:!0,email:r,password:a});case 3:return o=e.sent,e.next=6,Ao._fromIdTokenResponse(i,"signIn",o);case 6:return s=e.sent,e.next=9,i._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qo(e,t,n){return Bo($e(e),wo.credential(t,n))}function Wo(e,t,n,r){return $e(e).onIdTokenChanged(t,n,r)}function Ko(e,t,n){return $e(e).beforeAuthStateChanged(t,n)}function Go(e){return $e(e).signOut()}
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
function Jo(e,t){return Ya(e,"POST","/v2/accounts/mfaEnrollment:start",$a(e,t))}new WeakMap;var Xo="__sak",$o=function(){"use strict";function t(n,r){e(W)(this,t),this.storageRetriever=n,this.type=r}return e(K)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var Yo=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(){var t,a;return e(W)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Li(a=Re())||Vi(a))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=qi(),t._shouldAllowMigration=!0,t}return e(K)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var a,i=Object.keys(this.listeners)[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var a=this.storage.getItem(r);if(e.newValue!==a)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var i=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Hi()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,a=!1,i=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var a=this,i=this;return e(u)(e(c).mark((function o(){return e(c).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(wa)(e(_a)(r.prototype),"_set",a).call(i,t,n);case 2:i.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,a=this;return e(u)(e(c).mark((function i(){var o;return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(wa)(e(_a)(r.prototype),"_get",n).call(a,t);case 2:return o=i.sent,a.localCache[t]=JSON.stringify(o),i.abrupt("return",o);case 5:case"end":return i.stop()}}),i)})))()}},{key:"_remove",value:function(t){var n=this,a=this;return e(u)(e(c).mark((function i(){return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(wa)(e(_a)(r.prototype),"_remove",n).call(a,t);case 2:delete a.localCache[t];case 3:case"end":return i.stop()}}),i)})))()}}]),r}($o);Yo.type="LOCAL";var Zo=Yo,Qo=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(){return e(W)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(K)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}($o);
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
 */Qo.type="SESSION";var es=Qo;
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
 */function ts(t){return Promise.all(t.map((n=e(u)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var ns=function(){"use strict";function t(n){e(W)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(K)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i,o,s,l,f,d,p;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=(a=t).data,o=i.eventId,s=i.eventType,l=i.data,null==(f=n.handlersMap[s])?void 0:f.size){r.next=5;break}return r.abrupt("return");case 5:return a.ports[0].postMessage({status:"ack",eventId:o,eventType:s}),d=Array.from(f).map(function(){var t=e(u)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(a.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,ts(d);case 9:p=r.sent,a.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:p});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function rs(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */ns.receivers=[];var as=function(){"use strict";function t(n){e(W)(this,t),this.target=n,this.handlers=new Set}return e(K)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,a=this;return e(u)(e(c).mark((function i(){var o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,i){var c=rs("",20);o.port1.start();var l=setTimeout((function(){i(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){i(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),i(new Error("invalid_response"))}}},a.handlers.add(u),o.port1.addEventListener("message",u.onMessage),a.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&a.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),i)})))()}}]),t}();
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
 */function is(){return window}
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
function os(){return void 0!==is().WorkerGlobalScope&&"function"==typeof is().importScripts}function ss(){return us.apply(this,arguments)}function us(){return(us=e(u)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var cs="firebaseLocalStorageDb",ls="firebaseLocalStorage",fs="fbase_key",ds=function(){"use strict";function t(n){e(W)(this,t),this.request=n}return e(K)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function ps(e,t){return e.transaction([ls],t?"readwrite":"readonly").objectStore(ls)}function hs(){var e=indexedDB.deleteDatabase(cs);return new ds(e).toPromise()}function vs(){var t=indexedDB.open(cs,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(ls,{keyPath:fs})}catch(e){r(e)}})),t.addEventListener("success",e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t.result).objectStoreNames.contains(ls)){e.next=12;break}return a.close(),e.next=5,hs();case 5:return e.t0=n,e.next=8,vs();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(a);case 13:case"end":return e.stop()}}),r)}))))}))}function ms(e,t,n){return gs.apply(this,arguments)}function gs(){return(gs=e(u)(e(c).mark((function t(n,r,a){var i,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=ps(n,!0).put((i={},e(G)(i,fs,r),e(G)(i,"value",a),i)),t.abrupt("return",new ds(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ys(e,t){return ks.apply(this,arguments)}function ks(){return(ks=e(u)(e(c).mark((function t(n,r){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ps(n,!1).get(r),e.next=3,new ds(a).toPromise();case 3:return i=e.sent,e.abrupt("return",void 0===i?null:i.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bs(e,t){var n=ps(e,!0).delete(t);return new ds(n).toPromise()}var ws=function(){"use strict";function t(){e(W)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(K)(t,[{key:"_openDb",value:function(){var t=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,vs();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return i=e.sent,e.next=8,t(i);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(a++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",os()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=ns._getInstance(os()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(u)(e(c).mark((function n(r,a){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return i=e.sent,e.abrupt("return",{keyProcessed:i.includes(a.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(u)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r,a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,ss();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new as(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(i=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=i[0])||void 0===r?void 0:r.fulfilled)&&(null===(a=i[0])||void 0===a?void 0:a.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(u)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,vs();case 5:return n=e.sent,e.next=8,ms(n,Xo,"1");case 8:return e.next=10,bs(n,Xo);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(u)(e(c).mark((function a(){return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",r._withPendingWrite(e(u)(e(c).mark((function a(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return ms(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),a)})))));case 1:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return ys(e,t)}));case 2:return a=e.sent,n.localCache[t]=a,e.abrupt("return",a);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return bs(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r,a,i,o,s,u,l,f,d,p,h,v,m,g,y,k,b;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=ps(e,!1).getAll();return new ds(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(a=[],i=new Set,o=!0,s=!1,u=void 0,e.prev=10,l=r[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)d=f.value,p=d.fbase_key,h=d.value,i.add(p),JSON.stringify(t.localCache[p])!==JSON.stringify(h)&&(t.notifyListeners(p,h),a.push(p));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==l.return||l.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,t.localCache[b]&&!i.has(b)&&(t.notifyListeners(b,null),a.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",a);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,a=!1,i=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();ws.type="LOCAL";var xs=ws;
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
 */function Is(e,t){return Ya(e,"POST","/v2/accounts/mfaSignIn:start",$a(e,t))}function _s(e){return new Promise((function(t,n){var r,a,i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=function(e){var t=Na("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(a=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==a?a:document).appendChild(i)}))}function Ts(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Ts("rcb"),new qa(3e4,6e4);var Ss="recaptcha";
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
 */function Es(e,t,n){return Os.apply(this,arguments)}function Os(){return(Os=e(u)(e(c).mark((function t(n,r,a){var i,o,s,u,l,f,d,p;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a.verify();case 3:if(o=e.sent,e.prev=4,La("string"==typeof o,n,"argument-error"),La(a.type===Ss,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return La("enroll"===u.type,n,"internal-error"),e.next=15,Jo(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return La("signin"===u.type,n,"internal-error"),La(f=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Is(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,po(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,a._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Cs=function(){"use strict";function t(n){e(W)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Ji(n)}return e(K)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Es(this.auth,e,$e(t))}}],[{key:"credential",value:function(e,t){return ko._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?ko._fromTokenResponse(n,r):null}}]),t}();
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
function As(e,t){return t?Fa(t):(La(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Cs.PROVIDER_ID="phone",Cs.PHONE_SIGN_IN_METHOD="phone";var Rs=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(t){var a;return e(W)(this,r),(a=n.call(this,"custom","custom")).params=t,a}return e(K)(r,[{key:"_getIdTokenResponse",value:function(e){return co(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return co(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return co(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Qi);function Ns(e){return Uo(e.auth,new Rs(e),e.bypassAuthState)}function Ds(e){var t=e.auth,n=e.user;return La(n,t,"internal-error"),Mo(n,new Rs(e),e.bypassAuthState)}function Ps(e){return Ls.apply(this,arguments)}function Ls(){return(Ls=e(u)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,La(a=n.user,r,"internal-error"),e.abrupt("return",Po(a,new Rs(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Ms=function(){"use strict";function t(n,r,a,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(W)(this,t),this.auth=n,this.resolver=a,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(K)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(u)(e(c).mark((function t(r,a){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:a},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i,o,s,u,l,f;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.urlResponse,i=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,l=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return f={auth:n.auth,requestUri:a,sessionId:i,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ns;case"linkViaPopup":case"linkViaRedirect":return Ps;case"reauthViaPopup":case"reauthViaRedirect":return Ds;default:Ra(this.auth,"internal-error")}}},{key:"resolve",value:function(e){ja(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){ja(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),js=new qa(2e3,1e4);
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
 */var Us=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(t,a,i,o,s){var u;return e(W)(this,r),(u=n.call(this,t,a,o,s)).provider=i,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e($)(u),u}return e(K)(r,[{key:"executeNotNull",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return La(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(u)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ja(1===t.filter.length,"Popup operations only handle one event"),r=rs(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Na(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Na(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var a=e;e.pollId=window.setTimeout((function(){a.pollId=null,a.reject(Na(a.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,js.get())};t()}}]),r}(Ms);Us.currentPopupAction=null;
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
var Fs=new Map,Bs=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(t,a){var i,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(W)(this,r),(i=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,o)).eventId=null,i}return e(K)(r,[{key:"execute",value:function(){var t=this,n=this;return e(u)(e(c).mark((function a(){var i,o;return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=Fs.get(n.auth._key())){a.next=21;break}return a.prev=2,a.next=5,Vs(n.resolver,n.auth);case 5:if(!a.sent){a.next=12;break}return a.next=9,e(wa)(e(_a)(r.prototype),"execute",t).call(n);case 9:a.t0=a.sent,a.next=13;break;case 12:a.t0=null;case 13:o=a.t0,i=function(){return Promise.resolve(o)},a.next=20;break;case 17:a.prev=17,a.t1=a.catch(2),i=function(){return Promise.reject(a.t1)};case 20:Fs.set(n.auth._key(),i);case 21:return n.bypassAuthState||Fs.set(n.auth._key(),(function(){return Promise.resolve(null)})),a.abrupt("return",i());case 23:case"end":return a.stop()}}),a,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,a=this,i=function(){return e(wa)(e(_a)(r.prototype),"onAuthEvent",n)};return e(u)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",i().call(a,t));case 4:if("unknown"!==t.type){e.next=7;break}return a.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,a.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return a.user=r,e.abrupt("return",i().call(a,t));case 16:a.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Ms);function Vs(e,t){return zs.apply(this,arguments)}function zs(){return(zs=e(u)(e(c).mark((function t(n,r){var a,i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ws(r),i=qs(n),e.next=4,i._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,i._get(a);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,i._remove(a);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Hs(e,t){Fs.set(e._key(),t)}function qs(e){return Fa(e._redirectPersistence)}function Ws(e){return Ri("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Ks(e,t){return Gs.apply(this,arguments)}function Gs(){return Gs=e(u)(e(c).mark((function t(n,r){var a,i,o,s,u,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>2&&void 0!==l[2]&&l[2],i=Ji(n),o=As(i,r),s=new Bs(i,o,a),e.next=6,s.execute();case 6:if(!(u=e.sent)||a){e.next=13;break}return delete u.user._redirectEventId,e.next=11,i._persistUserIfCurrent(u.user);case 11:return e.next=13,i._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),Gs.apply(this,arguments)}
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
var Js=function(){"use strict";function t(n){e(W)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(K)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $s(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!$s(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Na(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xs(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Xs(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Xs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function $s(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Ys(e){return Zs.apply(this,arguments)}function Zs(){return Zs=
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
e(u)(e(c).mark((function t(n){var r,a=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",Ya(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),Zs.apply(this,arguments)}
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
 */var Qs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eu=/^https?/;function tu(){return(tu=e(u)(e(c).mark((function t(n){var r,a,i,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ys(n);case 4:r=e.sent.authorizedDomains,a=!0,i=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(a=(u=s.next()).done){e.next=20;break}if(l=u.value,e.prev=10,!nu(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:a=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),i=!0,o=e.t1;case 26:e.prev=26,e.prev=27,a||null==s.return||s.return();case 29:if(e.prev=29,!i){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Ra(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function nu(e){var t=Va(),n=new URL(t),r=n.protocol,a=n.hostname;if(e.startsWith("chrome-extension://")){var i=new URL(e);return""===i.hostname&&""===a?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===a}if(!eu.test(r))return!1;if(Qs.test(e))return a===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}
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
 */var ru=new qa(3e4,6e4);function au(){var t=is().___jsl,n=!0,r=!1,a=void 0;if(null==t?void 0:t.H)try{for(var i,o=Object.keys(t.H)[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(J)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}var iu=null;function ou(e){return iu=iu||function(e){return new Promise((function(t,n){var r,a,i;function o(){au(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){au(),n(Na(e,"network-request-failed"))},timeout:ru.get()})}if(null===(a=null===(r=is().gapi)||void 0===r?void 0:r.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=is().gapi)||void 0===i?void 0:i.load)){var s=Ts("iframefcb");return is()[s]=function(){gapi.load?o():n(Na(e,"network-request-failed"))},_s("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw iu=null,e}))}(e),iu}
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
 */var su=new qa(5e3,15e3),uu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lu(e){var t=e.config;La(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Wa(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Kt},a=cu.get(e.config.apiHost);a&&(r.eid=a);var i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),"".concat(n,"?").concat(He(r).slice(1))}function fu(e){return du.apply(this,arguments)}function du(){return du=e(u)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ou(n);case 2:return r=t.sent,La(a=is().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:lu(n),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uu,dontclear:!0},(function(t){return new Promise((r=e(u)(e(c).mark((function r(a,i){var o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){is().clearTimeout(s),a(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=Na(n,"network-request-failed"),s=is().setTimeout((function(){i(o)}),su.get()),t.ping(u).then(u,(function(){i(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),du.apply(this,arguments)}
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
 */var pu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hu="_blank",vu="http://localhost",mu=function(){"use strict";function t(n){e(W)(this,t),this.window=n,this.associatedEvent=null}return e(K)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function gu(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString(),u="",c=Object.assign(Object.assign({},pu),{width:a.toString(),height:i.toString(),top:o,left:s}),l=Re().toLowerCase();r&&(u=Mi(l)?hu:r),Pi(l)&&(n=n||vu,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,n){var r=e(X)(n,2),a=r[0],i=r[1];return"".concat(t).concat(a,"=").concat(i,",")}),"");if(zi(l)&&"_self"!==u)return yu(n||"",u),new mu(null);var d=window.open(n||"",u,f);La(d,t,"popup-blocked");try{d.focus()}catch(e){}return new mu(d)}function yu(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var ku="__/auth/handler",bu="emulator/auth/handler";function wu(t,n,r,a,i,o){La(t.config.authDomain,t,"auth-domain-config-required"),La(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:a,v:Kt,eventId:i};if(n instanceof xo){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",Be(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=e(X)(f.value,2),h=p[0],v=p[1];s[h]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(n instanceof Io){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,y,k=s,b=!0,w=!1,x=void 0;try{for(var I,_=Object.keys(k)[Symbol.iterator]();!(b=(I=_.next()).done);b=!0){var T=I.value;void 0===k[T]&&delete k[T]}}catch(e){w=!0,x=e}finally{try{b||null==_.return||_.return()}finally{if(w)throw x}}return"".concat((g=t,y=g.config,y.emulator?Wa(y,bu):"https://".concat(y.authDomain,"/").concat(ku)),"?").concat(He(k).slice(1))}
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
var xu="webStorageSupport",Iu=function(){"use strict";function t(){e(W)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=es,this._completeRedirectFn=Ks,this._overrideRedirectResult=Hs}return e(K)(t,[{key:"_openPopup",value:function(t,n,r,a){var i=this;return e(u)(e(c).mark((function o(){var s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ja(null===(s=i.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=wu(t,n,r,Va(),a),e.abrupt("return",gu(t,u,rs()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,a){var i=this;return e(u)(e(c).mark((function o(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i._originValidation(t);case 2:return o=wu(t,n,r,Va(),a),is().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],a=r.manager,i=r.promise;return a?Promise.resolve(a):(ja(i,"If manager is not set, promise should be"),i)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fu(t);case 2:return a=e.sent,i=new Js(t),a.register("authEvent",(function(e){return La(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:i},n.iframes[t._key()]=a,e.abrupt("return",i);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(xu,{type:xu},(function(n){var r,a=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==a&&t(!!a),Ra(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return tu.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return qi()||Li()||Vi()}}]),t}(),_u=Iu,Tu=function(t){"use strict";e(Y)(r,t);var n=e(ue)(r);function r(t){var a;return e(W)(this,r),(a=n.call(this,"phone")).credential=t,a}return e(K)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Ya(e,"POST","/v2/accounts/mfaEnrollment:finalize",$a(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Ya(e,"POST","/v2/accounts/mfaSignIn:finalize",$a(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(W)(this,t),this.factorId=n}return e(K)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ma("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(W)(this,t)}return e(K)(t,null,[{key:"assertion",value:function(e){return Tu._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Su="@firebase/auth",Eu="0.21.3",Ou=function(){"use strict";function t(n){e(W)(this,t),this.auth=n,this.internalListeners=new Map}return e(K)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(u)(e(c).mark((function r(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return a=e.sent,e.abrupt("return",{accessToken:a});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){La(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
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
var Cu,Au=Ce("authIdTokenMaxAge")||300,Ru=null,Nu=function(t){return n=e(u)(e(c).mark((function n(r){var a,i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(a=e.t0,!((i=a&&((new Date).getTime()-Date.parse(a.issuedAtTime))/1e3)&&i>Au)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==a?void 0:a.token,Ru!==o){e.next=12;break}return e.abrupt("return");case 12:return Ru=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function Du(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jt(),t=zt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Ba(e,{popupRedirectResolver:_u,persistence:[xs,Zo,es]}),r=Ce("authTokenSyncURL");if(r){var a=Nu(r);Ko(n,a,(function(){return a(n.currentUser)})),Wo(n,(function(e){return a(e)}))}var i=Ee("auth");return i&&$i(n,"http://".concat(i)),n}Cu="Browser",Vt(new Ye("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),i=r.options,o=i.apiKey,s=i.authDomain;return function(e,t){La(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),La(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Cu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wi(Cu)},a=new Gi(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fa);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,n),a}(r,a)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),Vt(new Ye("auth-internal",(function(e){var t=Ji(e.getProvider("auth").getImmediate());return new Ou(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Su,Eu,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Cu)),Xt(Su,Eu,"esm2017");f=a("6JpON"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jt(),t=zt(e=$e(e),Sr);t.isInitialized()?t.getImmediate():ga(e)}(Gt({apiKey:"AIzaSyAkwUo6DbQZ45SKLYmVN-WMfwtEZwlR7sE",authDomain:"codeforge-eb6aa.firebaseapp.com",projectId:"codeforge-eb6aa",storageBucket:"codeforge-eb6aa.appspot.com",messagingSenderId:"735290516280",appId:"1:735290516280:web:72a30be1acfb9b6d32d7cd",measurementId:"G-QX1ZX7WVT2"}));var Pu,Lu,Mu={formOfSignUp:document.querySelector(".form-sign-up"),formOfSignIn:document.querySelector(".form-sign-in"),btnOfSignOut:document.querySelector(".auth__btn-sign-out")},ju="",Uu="";Mu.formOfSignUp.addEventListener("submit",(function(e){e.preventDefault(),ju=e.currentTarget.elements[0].value,Uu=e.currentTarget.elements[1].value,console.log("Email: ",ju),console.log("Password: ",Uu),zo(Du(),ju,Uu).then((function(e){var t=e.user;console.log(t)})).catch((function(e){e.code;var t=e.message;f.Notify.failure(t)})),e.currentTarget.reset()})),Mu.formOfSignIn.addEventListener("submit",(function(e){e.preventDefault(),ju=e.currentTarget.elements[0].value,Uu=e.currentTarget.elements[1].value,console.log("Email: ",ju),console.log("Password: ",Uu),qo(Du(),ju,Uu).then((function(e){var t=e.user;console.log(t)})).catch((function(e){e.code;var t=e.message;f.Notify.failure(t)})),e.currentTarget.reset()})),Mu.btnOfSignOut.addEventListener("click",(function(e){Go(Du()).then((function(){f.Notify.success("Sign Out Success!")})).catch((function(e){f.Notify.failure(errorMessage)}))})),v(),(0,s.default)(1),(0,i.default)(),(0,o.default)(),Pu=document.querySelector(".js-list-new"),Lu=new(0,q.default),Pu.addEventListener("click",(function(e){e.target.classList.contains("js-to-fav")?(function(e){e.target.firstElementChild.textContent="Remove from favorites",e.target.lastElementChild.firstElementChild.setAttribute("fill","#4b48da"),e.target.lastElementChild.firstElementChild.setAttribute("style","fill: var(--color1, #4b48da)"),e.target.classList.remove("js-to-fav"),e.target.classList.add("js-from-fav")}(e),Lu.addToFav(e.target.parentNode.parentNode.id,e.target.parentNode.parentNode.parentNode)):e.target.classList.contains("js-from-fav")&&(function(e){e.target.firstElementChild.textContent="Add to favorites",e.target.lastElementChild.firstElementChild.setAttribute("fill","none"),e.target.lastElementChild.firstElementChild.setAttribute("style","stroke: var(--color1, #4440f7)"),e.target.classList.remove("js-from-fav"),e.target.classList.add("js-to-fav")}(e),Lu.removeFromFav(e.target.parentNode.parentNode.id))}))}();
//# sourceMappingURL=index.c932c516.js.map
