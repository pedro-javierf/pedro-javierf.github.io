var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

  toggle.addEventListener("click", () => {
    if (toggle.className === "far fa-moon") {
        setTheme("dark");
    } else if (toggle.className === "far fa-sun") {
        setTheme("light");
    }
  });

  function setTheme(mode) {
	localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "far fa-sun";
		toggle.innerHTML = " Light Mode";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "far fa-moon";
		toggle.innerHTML = " Dark Mode";
    }
  }
 
//the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

 
!function(e){function t(t){for(var n,o,i=t[0],u=t[1],a=0,c=[];a<i.length;a++)o=i[a],r[o]&&c.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);c.length;)c.shift()()}var n={},r={5:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(e){return o.p+""+({1:"comments",2:"details-polyfill",7:"sidebar",8:"twemoji"}[e]||e)+"."+{1:"57223579",2:"45606d79",7:"9ea42a6e",8:"79bd873e"}[e]+".js"}(e);var l=new Error;u=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var c=setTimeout(function(){u({type:"timeout",target:a})},12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=u;o(o.s=41)}({12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(){document.removeEventListener("DOMContentLoaded",t,!1),window.removeEventListener("load",t,!1),e()}"complete"===document.readyState?setTimeout(e):(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1))},e.exports=t.default},16:function(e,t,n){n.p=window.__assets_js_src},17:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);n(16),n(17);var r=n(12);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.n(r)()(function(){var e=document.body,t=e.querySelectorAll(".taxonomy-cloud:not(.no-shuffle)");t.length&&t.forEach(function(e){(function(e){for(var t,n,r=o(e),i=e.length;i;)n=Math.floor(Math.random()*i),t=r[--i],r[i]=r[n],r[n]=t;return r})(e.querySelectorAll("li")).forEach(function(e){return e.parentElement.appendChild(e)})});var r=e.querySelectorAll("details");if(r.length&&n.e(2).then(n.bind(null,42)).then(function(e){return(0,e.detailsPolyfill)(r)}),e.classList.contains("has-emoji")){var i=e.querySelector(".entry");n.e(8).then(n.t.bind(null,43,7)).then(function(e){return e.parse(i)})}e.classList.contains("has-sidebar")&&n.e(7).then(n.bind(null,44)).then(function(e){return(0,e.initSidebar)()}),e.querySelector("#comment-form")&&n.e(1).then(n.bind(null,45)).then(function(e){return(0,e.initComments)()})})}});