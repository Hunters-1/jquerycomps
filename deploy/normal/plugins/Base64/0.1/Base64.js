(function(e){if(e.Base64)return e.Base64;var t="2.1.1",n;typeof module!="undefined"&&module.exports&&(n=require("buffer").Buffer);var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=function(e){var t={};for(var n=0,r=e.length;n<r;n++)t[e.charAt(n)]=n;return t}(r),s=String.fromCharCode,o=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?s(192|t>>>6)+s(128|t&63):s(224|t>>>12&15)+s(128|t>>>6&63)+s(128|t&63)}var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return s(240|t>>>18&7)+s(128|t>>>12&63)+s(128|t>>>6&63)+s(128|t&63)},u=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,a=function(e){return e.replace(u,o)},f=function(e){var t=[0,2,1][e.length%3],n=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0),i=[r.charAt(n>>>18),r.charAt(n>>>12&63),t>=2?"=":r.charAt(n>>>6&63),t>=1?"=":r.charAt(n&63)];return i.join("")},l=e.btoa||function(e){return e.replace(/[\s\S]{1,3}/g,f)},c=n?function(e){return(new n(e)).toString("base64")}:function(e){return l(a(e))},h=function(e,t){return t?c(e).replace(/[+\/]/g,function(e){return e=="+"?"-":"_"}).replace(/=/g,""):c(e)},p=function(e){return h(e,!0)},d=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),v=function(e){switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),n=t-65536;return s((n>>>10)+55296)+s((n&1023)+56320);case 3:return s((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return s((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},m=function(e){return e.replace(d,v)},g=function(e){var t=e.length,n=t%4,r=(t>0?i[e.charAt(0)]<<18:0)|(t>1?i[e.charAt(1)]<<12:0)|(t>2?i[e.charAt(2)]<<6:0)|(t>3?i[e.charAt(3)]:0),o=[s(r>>>16),s(r>>>8&255),s(r&255)];return o.length-=[0,0,2,1][n],o.join("")},y=e.atob||function(e){return e.replace(/[\s\S]{1,4}/g,g)},b=n?function(e){return(new n(e,"base64")).toString()}:function(e){return m(y(e))},w=function(e){return b(e.replace(/[-_]/g,function(e){return e=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};e.Base64={VERSION:t,atob:y,btoa:l,fromBase64:w,toBase64:h,utob:a,encode:h,encodeURI:p,btou:m,decode:w};if(typeof Object.defineProperty=="function"){var E=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};e.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",E(function(){return w(this)})),Object.defineProperty(String.prototype,"toBase64",E(function(e){return h(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",E(function(){return h(this,!0)}))}}typeof define=="function"&&define.amd?define("plugins.Base64",[],function(){return e.Base64}):e.Base64=Base64,e.Base64=Base64})(this);