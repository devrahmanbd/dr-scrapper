(()=>{var e={3162:function(e,t,o){var n;void 0===(n=function(){"use strict";function t(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){i(n.response,t,o)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,o,c){var i=r.URL||r.webkitURL,s=document.createElement("a");o=o||e.name||"download",s.download=o,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):n(s.href)?t(e,o,c):a(s,s.target="_blank")):(s.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,r){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),o);else if(n(e))t(e,o,r);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){a(c)}))}}:function(e,o,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return t(e,o,n);var i="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&s||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,p=u.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});r.saveAs=i.saveAs=i,e.exports=i}.apply(t,[]))||(e.exports=n)}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(3162),t=function(e,t,o,n){return new(o||(o=Promise))((function(a,r){function c(e){try{s(n.next(e))}catch(e){r(e)}}function i(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(c,i)}s((n=n.apply(e,t||[])).next())}))};let n,a=1,r=!1;function c(e){return e.replace(/_/g," ").replace(/\w\S*/g,(e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())).replace(/\s+/g,"")}chrome.runtime.onMessage.addListener((function(o,i,s){return t(this,void 0,void 0,(function*(){switch(o.action){case"showView":const i=function(e){const t=window.location.href.match(/[?&]prospectedByCurrentTeam.*?(yes|no)/);return t&&"no"===t[1]?"netnew":t&&"yes"===t[1]?"saved":"total"}();console.log(i+"---"+window.location.href),s({scraped:i});break;case"verifyEmailStatus":const l=null!==window.location.href.match(/[?&]contactEmailStatus.*?verified/),d=null!==window.location.href.match(/[?&]contactEmailStatus.*?likely_to_engage/);s({scraped:l||d});break;case"refreshPage":location.reload(),s({scraped:"Page reloaded"});break;case"getCurrentUrl":s({scraped:window.location.href});break;case"startBlocking":a=1,r=!1,n=o.page,s({scraped:"activ"});break;case"getCurrentPage":const u=function(e){const t=/page=(\d+)/.exec(e);return t&&t[1]?parseInt(t[1],10):1}(window.location.href);s({scraped:u.toString()});break;case"goNextPage":const p=document.querySelector('button[aria-label="right-arrow"]');let f="notAppear";if(p)p.disabled?console.log("Old interface button is disabled"):(p.click(),f="appear",console.log("Old interface button clicked successfully"));else{const e=document.querySelector('button[aria-label="Next"]');e?(e.click(),f="appear",console.log("New interface button clicked successfully")):console.log("New interface button not found")}s({scraped:f});break;case"checkNextPage":if(document.querySelector('button[aria-label="right-arrow"]'))s({scraped:"oldVersion"});else{const e=document.querySelector('button[aria-label="Next"]');s({scraped:e?"appear":"notAppear"})}break;case"updateBlocking":a+=1,s({scraped:"updateBlocking"});break;case"stopScraper":s({scraped:r});break;case"exportContacts":!function(){console.log("Start CSV download"),chrome.storage.local.get(["scrapeId"],(e=>t(this,void 0,void 0,(function*(){let t=`${e.scrapeId}_data`;!function(e,t="data.csv"){if(console.log("convertArrayToCSV called",e),!e||!e.length)return;const o=Object.keys(e[0]).map(c),n=[o.join(","),...e.map((e=>o.map((t=>{const o=Object.keys(e).find((e=>c(e)===t));return o?e[o]:""})).join(",")))].join("\n"),a=new Blob([n],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a"),i=URL.createObjectURL(a);r.href=i,r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)}((yield chrome.storage.local.get([t]))[t]),yield chrome.storage.local.remove(["scrapeId",t])}))))}(),s({scraped:"finish"});break;case"exportPermutations":!function(){console.log("downloadPermutationsCSV CSV download"),chrome.storage.local.get(["scrapeId"],(o=>t(this,void 0,void 0,(function*(){let t=`${o.scrapeId}_permutations`;!function(t,o){let n="Email\n";t.forEach((e=>{n+=e+"\n"}));const a=new Blob([n],{type:"text/csv;charset=utf-8;"});(0,e.saveAs)(a,"permutations.csv")}((yield chrome.storage.local.get([t]))[t]),yield chrome.storage.local.remove(["scrapeId",t])}))))}(),s({scraped:"finish"});break;case"endBlockingExportContacts":case"endBlockingExportPermutations":case"endBlockingForGoogleSheets":(void 0).remove(),(void 0).remove(),s({scraped:"paso9"});break;default:s({success:!1,message:"Unknown request"})}return!0}))}))})()})();