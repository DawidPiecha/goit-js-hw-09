!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("6JpON"),a=document.querySelector(".form"),u=document.querySelector('.form button[type="submit"]'),l=document.querySelector(".reset");function c(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}a.addEventListener("submit",(function(t){t.preventDefault();var n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),r=Number(t.target.elements.amount.value);u.disabled=!0;for(var a=0,l=0;l<r;l++)c(l+1,n+o*l).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})).finally((function(){++a===r&&(u.disabled=!1)}))})),l.addEventListener("click",(function(){location.reload()}))}();
//# sourceMappingURL=03-promises.e2a5ec80.js.map
