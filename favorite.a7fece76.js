var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r("XtOFx"),r("j9ap0");var n=r("lTqjZ"),i=r("8CotJ"),a=r("lIrjz");a=r("lIrjz");r("lIrjz"),(0,n.default)(),(0,i.default)(),(()=>{const e=new(0,a.default);e.isFavListEmpty(),e.insertMarkupToUL()})(),(()=>{const e=new(0,a.default),t={favList:document.querySelector(".favorite-list")},{favList:o}=t;e.isFavListEmpty(),o.addEventListener("click",(function(t){t.target.classList.contains("js-from-fav")?(e.removeFromFavOnFavPage(t.target.parentNode.parentNode.id),e.insertMarkupToUL(o),e.isFavListEmpty()):console.log("you clicked outside the button")}))})();
//# sourceMappingURL=favorite.a7fece76.js.map
