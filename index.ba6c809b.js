function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("j9ap0"),r("XtOFx");var o=r("lTqjZ"),s=r("8CotJ"),i=r("6oEVj"),c=r("aYoNo"),l=r("7Y9D8"),d=r("50Kfe");const u=new(0,c.default),g={categories:document.querySelector(".js-category"),categoriesOthers:document.querySelector(".js-category-others"),othersTextInBtn:document.querySelector(".js-text-btn")};async function f(){try{const e=await u.getNewsCategoryList();t=e.results,window.matchMedia("(min-width: 1280px)").matches?(m(),function(e){let t="";for(let n=0;n<6;n++)t+=`\n            <li class="category__item"><button class="category__btn" type="button">${e[n].display_name}</button></li>\n            `;g.categories.insertAdjacentHTML("beforeend",t)}(t),function(e){g.othersTextInBtn.textContent="Others";let t="";for(let n=6;n<50;n++)t+=`\n          <li class="others__item">\n            <button class="others__item-button">${e[n].display_name}</button>\n          </li>\n            `;g.categoriesOthers.insertAdjacentHTML("beforeend",t)}(t)):window.matchMedia("(min-width: 768px)").matches?(m(),function(e){let t="";for(let n=0;n<4;n++)t+=`\n            <li class="category__item"><button class="category__btn" type="button">${e[n].display_name}</button></li>\n            `;g.categories.insertAdjacentHTML("beforeend",t)}(t),function(e){g.othersTextInBtn.textContent="Others";let t="";for(let n=4;n<50;n++)t+=`\n          <li class="others__item">\n            <button class="others__item-button">${e[n].display_name}</button>\n          </li>\n            `;g.categoriesOthers.insertAdjacentHTML("beforeend",t)}(t)):(m(),function(e){g.othersTextInBtn.textContent="Categories";let t="";for(let n=0;n<50;n++)t+=`\n          <li class="others__item">\n            <button class="others__item-button">${e[n].display_name}</button>\n          </li>\n            `;g.categoriesOthers.insertAdjacentHTML("beforeend",t)}(t))}catch(t){e(l).Notify.warning("No response category list from server. Please, try again later."),console.log(t)}var t}function m(){g.categories.innerHTML="",g.categoriesOthers.innerHTML=""}window.addEventListener("resize",e(d)((function(e){f()}),300));var p=r("j9ap0"),y=r("eSloa"),h=r("FTwSv"),v=r("cd6II");const L={calendarInput:document.querySelector(".js-calendar-input"),modal:document.querySelector("[data-calendar-modal]"),iconCalendar:document.querySelector(".calendar__icon-calendar"),iconCalendarOpen:document.querySelector(".calendar__icon-opened"),iconCalendarClose:document.querySelector(".calendar__icon-closed"),clickToBackdrop:document.querySelector(".backdrop")};function b(){L.modal.classList.toggle("is-hidden"),L.calendarInput.classList.toggle("is-active"),L.iconCalendar.classList.toggle("change-color-icon"),L.iconCalendarOpen.classList.toggle("display-none"),L.iconCalendarClose.classList.toggle("display-active"),L.clickToBackdrop.classList.toggle("display-none")}L.calendarInput.addEventListener("click",b),L.clickToBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&b()}));function w(e){return String(e).padStart(2,"0")}document.querySelector("[data-calendar-days]").addEventListener("click",(function(e){if("LI"!==e.target.nodeName||e.target.classList.contains("inactive"))return;const t=e.target,n=e.currentTarget.children,a=t.textContent;L.calendarInput.value=`${w(a)}/${w(j+1)}/${E}`,b();const r=`${E}${w(j+1)}${w(a)}`;t.classList.add("selected-date"),Array.from(n).map((e=>{e.classList.contains("selected-date")&&(e.classList.remove("selected-date"),t.classList.add("selected-date"))})),(0,p.getCalendarDateForSearch)(r),(0,v.getCalendarDatePopular)(`${a}/${j+1}/${E}`),(0,h.getCalendarDateByCategory)(`${a}/${j+1}/${E}`),(0,y.getCalendarDateBySearch)(`${a}/${j+1}/${E}`)}));const _=document.querySelector(".days"),C=document.querySelector(".current-month"),S=document.querySelectorAll(".calendar__btn-wrapper button");let $=new Date,E=$.getFullYear(),j=$.getMonth();const T=["January","February","March","April","May","June","July","August","September","October","November","December"],q=()=>{let e=new Date(E,j,0).getDay(),t=new Date(E,j+1,0).getDate(),n=new Date(E,j,t).getDay(),a=new Date(E,j,0).getDate(),r="";for(let t=e;t>0;t--)r+=`<li class="inactive">${a-t+1}</li>`;for(let e=1;e<=t;e++){r+=`<li class="active ${e===$.getDate()&&j===(new Date).getMonth()&&E===(new Date).getFullYear()?"current":""}">${e}</li>`}for(let e=n;e<7;e++)r+=`<li class="inactive">${e-n+1}</li>`;C.innerText=`${T[j]} ${E}`,_.innerHTML=r};q(),S.forEach((e=>{e.addEventListener("click",(()=>{j="prev"===e.id?j-1:j+1,j<0||j>11?($=new Date(E,j,(new Date).getDate()),E=$.getFullYear(),j=$.getMonth()):$=new Date,q(),D()}))}));function D(){let e=L.calendarInput.value;const t=Number.parseInt(e);typeof e!==Number&&Array.from(_.children).map((n=>{+n.textContent===t&&n.classList.contains("active")&&(n.classList.add("selected-date"),e="",L.calendarInput.value=`${w(t)}/${w(j+1)}/${E}`)}))}document.querySelector(".icon-month-forward").addEventListener("click",(function(){E-=1,q(),D()})),r("eSloa"),r("9d6Kw"),r("2vcVf");i=r("6oEVj");const x={openOthersBtn:document.querySelector(".js-others-btn"),othersWrapper:document.querySelector(".js-others-wrapper")};x.openOthersBtn.addEventListener("click",(function(e){x.othersWrapper.classList.toggle("is-open")}));const N={categories:document.querySelector(".js-category"),otherCategories:document.querySelector(".js-category-others"),othersWrapper:document.querySelector(".js-others-wrapper"),searchFormInHeader:document.querySelector("#form-field")};let M=null;function k(e){if("BUTTON"===e.nodeName){if(null!==M&&M.contains("category-active"))return M.remove("category-active"),e.classList.add("category-active"),void(M=e.classList);M=e.classList,M.add("category-active")}}N.categories.addEventListener("click",(function(e){N.othersWrapper.classList.remove("is-open"),k(e.target)})),N.otherCategories.addEventListener("click",(function(e){N.othersWrapper.classList.remove("is-open"),k(e.target)})),N.searchFormInHeader.addEventListener("submit",(function(e){N.othersWrapper.classList.remove("is-open"),null!==M&&M.remove("category-active")}));var I=r("5oMi3");function O(){const e=new Date;return`${t(e.getDate())}/${t(e.getMonth()+1)}/${t(e.getFullYear())}`;function t(e){return String(e).padStart(2,"0")}}const A=document.querySelector(".js-list-new");A.addEventListener("click",(function(e){if(e.target.classList.contains("news-card__news-link")){let t=e.target.parentNode.parentNode;t.firstElementChild.firstElementChild.classList.remove("visually-hidden"),t.style.opacity=.7,function(e){void 0===(0,I.load)("read")&&(0,I.save)("read",[]);const t=e.firstElementChild.getAttribute("id"),n={dataRead:O(),dataString:`<li class="list-news__item">${e.innerHTML}</li>`,id:t},a=(0,I.load)("read");a.push(n),(0,I.save)("read",a)}(t)}})),r("778qg");var F=r("lIrjz");r("5xPHP"),f(),(0,i.default)(1),(0,o.default)(),(0,s.default)(),(()=>{const e={favoriteList:document.querySelector(".js-list-new")},{favoriteList:t}=e,n=new(0,F.default);t.addEventListener("click",(function(e){e.target.classList.contains("js-to-fav")?(!function(e){e.target.firstElementChild.textContent="Remove from favorites",e.target.lastElementChild.firstElementChild.setAttribute("fill","#4b48da"),e.target.lastElementChild.firstElementChild.setAttribute("style","fill: var(--color1, #4b48da)"),e.target.classList.remove("js-to-fav"),e.target.classList.add("js-from-fav")}(e),n.addToFav(e.target.parentNode.parentNode.id,e.target.parentNode.parentNode.parentNode)):e.target.classList.contains("js-from-fav")&&(!function(e){e.target.firstElementChild.textContent="Add to favorites",e.target.lastElementChild.firstElementChild.setAttribute("fill","none"),e.target.lastElementChild.firstElementChild.setAttribute("style","stroke: var(--color1, #4440f7)"),e.target.classList.remove("js-from-fav"),e.target.classList.add("js-to-fav")}(e),n.removeFromFav(e.target.parentNode.parentNode.id))}))})();
//# sourceMappingURL=index.ba6c809b.js.map