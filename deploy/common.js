(function(b,a){b([],function(){window.JWIN=window.JWIN||$(window);window.JDOC=window.JDOC||$(document);!window.console&&(window.console={log:function(){window.status=U(arguments).join(" ")}});!console.dir&&(console.dir=function(){});window.JC=window.JC||{};JC.log=function(){JC.debug&&console.log(U(arguments).join(" "))};JC.dir=function(){JC.debug&&$.each(U(arguments),function(ad,ac){console.dir(ac)})};JC.PATH=JC.PATH||aa();window.Bizs=window.Bizs||{};JC.common=JC.f={addUrlParams:J,cloneDate:R,dateDetect:u,delUrlParam:s,delUrlParams:w,easyEffect:Z,filterXSS:T,formatISODate:v,funcName:l,getJqParent:p,getUrlParam:ab,getUrlParams:I,hasUrlParam:o,urlHostName:A,httpRequire:L,isSameDay:V,isSameWeek:k,isSameMonth:Y,isSameSeason:B,isSameYear:n,weekOfYear:N,seasonOfYear:c,jcAutoInitComps:f,maxDayOfMonth:K,mousewheelEvent:x,padChar:H,parentSelector:m,parseBool:q,parseFinance:r,parseISODate:z,parseDate:j,printf:h,printKey:W,cloneObject:g,pureDate:d,reloadPage:i,removeUrlSharp:M,relativePath:G,scriptContent:E,scriptPath:aa,sliceArgs:U,urlDetect:X,moneyFormat:Q,dateFormat:D,extendObject:e,safeTimeout:F,encoder:P,fixPath:t,arrayId:S,docSize:C,winSize:y,gid:O,backward:function(ad){if(window.JC_BACKWARD||ad){for(var ac in JC.common){if(ac=="backward"){continue}window[ac]=window[ac]||JC.common[ac]}}},has_url_param:o,add_url_params:J,get_url_param:ab,del_url_param:s,reload_page:i,parse_finance_num:r,pad_char_f:H,script_path_f:aa,ts:function(){return new Date().getTime()}};JC.f.backward();!String.prototype.trim&&(String.prototype.trim=function(){return $.trim(this)});!Array.prototype.indexOf&&(Array.prototype.indexOf=function(ac){var ad=-1;$.each(this,function(af,ae){if(ae==ac){ad=af;return false}});return ad});!Array.prototype.first&&(Array.prototype.first=function(){var ac;this.length&&(ac=this[0]);return ac});!Array.prototype.last&&(Array.prototype.last=function(){var ac;this.length&&(ac=this[this.length-1]);return ac});window.ZINDEX_COUNT=window.ZINDEX_COUNT||50001;function t(ac){if(/\\/.test(ac)){ac=ac.replace(/[\\]+/g,"\\")}else{ac=ac.replace(/[\/]+/g,"/")}return ac}function S(af){var ag=[],ae={};for(var ad=0,ac=af.length;ad<ac;ad++){if(!(af[ad] in ae)){ag.push(af[ad]);ae[af[ad]]=af[ad]}}return ag}function O(){return"jc_gid_"+JC.f.ts()+"_"+(JC.GID_COUNT++)}JC.GID_COUNT=1;function U(ad){var af=[],ae,ac;for(ae=0,ac=ad.length;ae<ac;ae++){af.push(ad[ae])}return af}function A(ac){var ad="",ac=ac||location.href;if(/\:\/\//.test(ac)){ac.replace(/^.*?\:\/\/([^\/]+)/,function(af,ae){ad=ae})}return ad}function G(ae,ad){ad=ad||document.URL;ad=ad.replace(/^.*?\:\/\/[^\/]+/,"").replace(/[^\/]+$/,"");if(!ae){return ad}if(!/\/$/.test(ad)){ad+="/"}if(/(^\.\.\/|^\.\/)/.test(ae)){var af=new RegExp("^\\.\\.\\/"),ag=0;while(af.exec(ae)!=null){ae=ae.replace(af,"");ag++}for(var ac=0;ac<ag;ac++){ad=ad.replace(/[^\/]+\/$/,"")}if(ad==""){return"/"}ae=ae.replace(/^\.\//,"");ae.replace(/\/\/$/,"/");return ad+ae}return ae}function h(ae){for(var ad=1,ac=arguments.length;ad<ac;ad++){ae=ae.replace(new RegExp("\\{"+(ad-1)+"\\}","g"),arguments[ad])}return ae}function W(ae,ad){for(var ac in ad){ae=ae.replace(new RegExp("\\{"+(ac)+"\\}","g"),ad[ac])}return ae}function o(ae,af){var ag=false;if(!af){af=ae;ae=location.href}if(/\?/.test(ae)){ae=ae.split("?");ae=ae[ae.length-1];ae=ae.split("&");for(var ad=0,ac=ae.length;ad<ac;ad++){if(ae[ad].split("=")[0].toLowerCase()==af.toLowerCase()){ag=true;break}}}return ag}function J(ae,ad){var af="";!ad&&(ad=ae,ae=location.href);ae.indexOf("#")>-1&&(af=ae.split("#")[1],ae=ae.split("#")[0]);for(var ac in ad){ae=s(ae,ac);ae.indexOf("?")>-1?ae+="&"+ac+"="+ad[ac]:ae+="?"+ac+"="+ad[ac]}af&&(ae+="#"+af);ae=T(ae.replace(/\?\&/g,"?"));return ae}function T(ac){ac&&(ac=ac.replace(/</g,"&lt;").replace(/>/g,"&gt;"));return ac}function ab(ad,ae){var ah="",af,ac,ag;!ae&&(ae=ad,ad=location.href);ad.indexOf("#")>-1&&(ad=ad.split("#")[0]);if(ad.indexOf("?")>-1){af=ad.split("?")[1].split("&");for(ac=0;ac<af.length;ac++){ag=af[ac].split("=");ag[0]=decodeURIComponent(ag[0]||"").replace(/^\s+|\s+$/g,"");if(ag[0].toLowerCase()==ae.toLowerCase()){ah=T(ag[1]||"");break}}}return ah}function I(af,ag){var ai=[],ac,ae,ad,ah;!ag&&(ag=af,af=location.href);af=af.replace(/[\?]+/g,"?").split("?");if(af.length>1){af=af[1];ac=af.split("&");if(ac.length){for(ae=0,ad=ac.length;ae<ad;ae++){ah=ac[ae].split("=");ah[0]=decodeURIComponent(ah[0])||"";if(ah[0].trim()==ag){ai.push(T(ah[1]||""))}}}}return ai}function s(ae,af){var ai="",aj,ah=[],ad,ag;!af&&(af=ae,ae=location.href);ae.indexOf("#")>-1&&(ai=ae.split("#")[1],ae=ae.split("#")[0]);if(ae.indexOf("?")>-1){aj=ae.split("?")[1].split("&");ae=ae.split("?")[0];for(ad=0;ad<aj.length;ad++){var ac=aj[ad].split("=");ac[0]=ac[0].replace(/^\s+|\s+$/g,"");if(ac[0].toLowerCase()==af.toLowerCase()){continue}ah.push(ac.join("="))}ae+="?"+ah.join("&")}ai&&(ae+="#"+ai);ae=T(ae);return ae}function w(ae,ad){!ad&&(ad=ae,ae=location.href);for(var ac in ad){ae=s(ae,ad[ac])}return ae}function L(ac){ac=ac||"本示例需要HTTP环境";if(/file\:|\\/.test(location.href)){alert(ac);return false}return true}function M(ac,ae,af){!ac&&(ac=location.href);ac=ac.replace(/\#[\s\S]*/,"");af=af||"rnd";var ad;!ae&&(ad={},ad[af]=new Date().getTime(),ac=J(ac,ad));ac=T(ac);return ac}function i(ad,ae,ac){ac=ac||0;ad=M(ad||location.href,ae);!ae&&(ad=J(ad,{rnd:new Date().getTime()}));ad=T(ad);setTimeout(function(){location.href=ad},ac);return ad}function r(ad,ac){ad=parseFloat(ad)||0;typeof ac=="undefined"&&(ac=2);ad&&(ad=parseFloat(ad.toFixed(ac)));return ad}function H(ae,ac,ad){ac=ac||2;ad=ad||"0";ae+="";if(ae.length>ae){return ae}ae=new Array(ac+1).join(ad)+ae;return ae.slice(ae.length-ac)}function v(ac,ad){ac=ac||new Date();typeof ad=="undefined"&&(ad="-");return[ac.getFullYear(),H(ac.getMonth()+1),H(ac.getDate())].join(ad)}function z(ac){if(!ac){return}ac=ac.replace(/[^\d]+/g,"");var ad;if(ac.length===8){ad=new Date(ac.slice(0,4),parseInt(ac.slice(4,6),10)-1,parseInt(ac.slice(6),10))}else{if(ac.length===6){ad=new Date(ac.slice(0,4),parseInt(ac.slice(4,6),10)-1,1)}}return ad}function j(ad,ac,af){if(!ad){return null}var ae=z;ac&&!af&&(ac=$(ac)).length&&ac.attr("dateParse")&&(ae=window[ac.attr("dateParse")]||ae);ad=ae(ad);ad&&ad.start&&(ad=ad.start);return ad}function d(ac){var ad;ac=ac||new Date();ad=new Date(ac.getFullYear(),ac.getMonth(),ac.getDate());return ad}function R(ac){var ad=new Date();ad.setTime(ac.getTime());return ad}function V(ad,ac){return[ad.getFullYear(),ad.getMonth(),ad.getDate()].join()===[ac.getFullYear(),ac.getMonth(),ac.getDate()].join()}function Y(ad,ac){return[ad.getFullYear(),ad.getMonth()].join()===[ac.getFullYear(),ac.getMonth()].join()}function k(af,ac){var ae=[],ah=false,ag=0,ad;ae=N(af.getFullYear());af=af.getTime();ac=ac.getTime();for(ag=0,ad=ae.length;ag<ad;ag++){if((af>=ae[ag].start&&af<=ae[ag].end)&&(ac>=ae[ag].start&&ac<=ae[ag].end)){console.log(ag,af,ae[ag]);return true}}return ah}function B(af,ad){var ac=[],ah=false,ag=0,ae;if(!n(af,ad)){return false}ac=c(af.getFullYear());af=af.getTime();ad=ad.getTime();for(ag=0,ae=ac.length;ag<ae;ag++){if((af>=ac[ag].start&&af<=ac[ag].end)&&(ad>=ac[ag].start&&ad<=ac[ag].end)){return true}}return ah}function n(ad,ac){return ad.getFullYear()===ac.getFullYear()}function N(af,ae){var ah=[],ag,ad=1,ae=ae||0,af=parseInt(af,10),ac=new Date(af,0,1);ac.getDay()>1&&ac.setDate(ac.getDate()-ac.getDay()+7);ac.getDay()===0&&ac.setDate(ac.getDate()+1);ae>0&&(ae=(new Date(2000,1,2)-new Date(2000,1,1))*ae);while(ac.getFullYear()<=af){ag={week:ad++,start:null,end:null};ag.start=ac.getTime()+ae;ac.setDate(ac.getDate()+6);ag.end=ac.getTime()+ae;ac.setDate(ac.getDate()+1);if(ac.getFullYear()>af){ac=new Date(ac.getFullYear(),0,1);if(ac.getDay()<2){break}}ah.push(ag)}return ah}function c(ac){var ad=[],ac=parseInt(ac,10);ad.push({start:d(new Date(ac,0,1)),end:d(new Date(ac,2,31)),season:1},{start:d(new Date(ac,3,1)),end:d(new Date(ac,5,30)),season:2},{start:d(new Date(ac,6,1)),end:d(new Date(ac,8,30)),season:3},{start:d(new Date(ac,9,1)),end:d(new Date(ac,11,31)),season:4});return ad}function K(ad){var ae,ac=new Date(ad.getFullYear(),ad.getMonth()+1);ac.setDate(ac.getDate()-1);ae=ac.getDate();return ae}function aa(){var ac=document.getElementsByTagName("script"),ac=ac[ac.length-1],ad=ac.getAttribute("src");if(/\//.test(ad)){ad=ad.split("/");ad.pop();ad=ad.join("/")+"/"}else{if(/\\/.test(ad)){ad=ad.split("\\");ad.pop();ad=ad.join("\\")+"/"}}return ad}function Z(al,ah,ad,ag,aj){var af=new Date(),ak,ah=ah||200,ad=ad||0,ah=ah-ad,ai=0,ac,ag=ag||200,aj=aj||2;var ae=setInterval(function(){ak=new Date()-af;ai=ak/ag*ah;ai;if(ai>=ah){ai=ah;ac=true;clearInterval(ae)}al&&al(ai+ad,ac)},aj);return ae}function q(ac){if(typeof ac=="string"){ac=ac.replace(/[\s]/g,"").toLowerCase();if(ac&&(ac=="false"||ac=="0"||ac=="null"||ac=="undefined")){ac=false}else{if(ac){ac=true}}}return !!ac}function x(af,ad,ac){ac=ac||document;var ae=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";ac.attachEvent&&(ae="on"+ae);if(ad){ac.detachEvent&&document.detachEvent(ae,af);ac.removeEventListener&&document.removeEventListener(ae,af)}else{ac.attachEvent&&document.attachEvent(ae,af);ac.addEventListener&&document.addEventListener(ae,af)}}function p(ac,ae){ac=$(ac);var ad;if(ae){while((ac=ac.parent()).length){if(ac.is(ae)){ad=ac;break}}}else{ad=ac.parent()}return ad}function m(aj,af,ah){aj&&(aj=$(aj));if(/\,/.test(af)){var ad=[],ai;af=af.split(",");$.each(af,function(am,al){al=al.trim();ai=m(aj,al,ah);ai&&ai.length&&((ai.each(function(){ad.push($(this))})))});return $(ad)}var ag=/^([\/]+)/,ae=/^([\|]+)/,ac=/^([<\(]+)/;if(ag.test(af)){af=af.replace(ag,function(am,al){for(var ao=0,an=al.length;ao<an;ao++){aj=aj.parent()}ah=aj;return""});af=af.trim();return af?ah.find(af):ah}else{if(ae.test(af)){af=af.replace(ae,function(am,al){for(var ao=1,an=al.length;ao<an;ao++){aj=aj.parent()}ah=aj;return""});af=af.trim();return af?ah.find(af):ah}else{if(ac.test(af)){af=af.replace(ac,"").trim();if(af){if(/[\s]/.test(af)){var ak;af.replace(/^([^\s]+)([\s\S]+)/,function(am,al,an){ak=p(aj,al).find(an.trim())});return ak||af}else{return p(aj,af)}}else{return aj.parent()}}else{return ah?ah.find(af):jQuery(af)}}}}function E(ac){var ad="";ac&&(ac=$(ac)).length&&(ad=ac.html().trim().replace(/[\r\n]/g,""));return ad}function l(ac){var af=/^function\s+([^()]+)[\s\S]*/,ae="",ad=ac.toString();af.test(ad)&&(ae=ad.replace(af,"$1"));return ae.trim()}function f(ac){ac=$(ac||document);if(!(ac&&ac.length&&window.JC)){return}JC.AutoSelect&&JC.AutoSelect(ac);JC.Calendar&&JC.Calendar.initTrigger(ac);JC.DCalendar&&JC.DCalendar.init&&JC.DCalendar.init(ac);JC.AutoChecked&&JC.AutoChecked(ac);JC.AjaxUpload&&JC.AjaxUpload.init(ac);JC.Placeholder&&JC.Placeholder.init(ac);JC.TableFreeze&&JC.TableFreeze.init(ac);JC.Drag&&JC.Drag.init(ac);JC.ImageCutter&&JC.ImageCutter.init(ac);JC.Tab&&JC.Tab.init&&JC.Tab.init(ac);if(!window.Bizs){return}Bizs.DisableLogic&&Bizs.DisableLogic.init(ac);Bizs.FormLogic&&Bizs.FormLogic.init(ac);Bizs.MoneyTips&&Bizs.MoneyTips.init(ac);Bizs.AutoSelectComplete&&Bizs.AutoSelectComplete.init(ac);Bizs.TaskViewer&&Bizs.TaskViewer.init(ac)}function X(ag){ag=ag||"";var aj=ag,ah,af,ae,ai;if(/^URL/.test(ag)){ah=ag.replace(/^URL/,"").replace(/[\s]*,[\s]*/g,",").trim().split(",");ag=location.href;var ad={},ac=[];if(ah.length){for(af=0,ae=ah.length;af<ae;af++){/\&/.test(ah[af])?(ac=ac.concat(ah[af].split("&"))):(ac=ac.concat(ah[af]))}ah=ac}for(af=0,ae=ah.length;af<ae;af++){ai=ah[af].replace(/[\s]+/g,"").split("=");if(!ai[0]){continue}ad[ai[0]]=ai[1]||""}ag=J(ag,ad);aj=ag}aj=T(ag);return aj}function u(ad){var ao=null,aj=/^now/i,ag=/^nowfirst/,ak,an,am;if(ad&&typeof ad=="string"){if(aj.test(ad)||ag.test(ad)){ak=new Date();if(ag.test(ad)){ak.setDate(1)}ad=ad.replace(aj,"").replace(/[\s]+/g,"");an=ad.split(",");var ah=/d$/i,al=/w$/i,ac=/m$/i,ai=/y$/i;for(var af=0,ae=an.length;af<ae;af++){am=an[af]||"";if(!am){continue}am=am.replace(/[^\-\ddwmy]+/gi,"");if(ah.test(am)){am=parseInt(am.replace(ah,""),10);am&&ak.setDate(ak.getDate()+am)}else{if(al.test(am)){am=parseInt(am.replace(al,""),10);am&&ak.setDate(ak.getDate()+am*7)}else{if(ac.test(am)){am=parseInt(am.replace(ac,""),10);am&&ak.setMonth(ak.getMonth()+am)}else{if(ai.test(am)){am=parseInt(am.replace(ai,""),10);am&&ak.setFullYear(ak.getFullYear()+am)}}}}}ao=ak}else{ao=z(ad)}}return ao}(function(){if(!window.jQuery){return}var ac=$.fn.val;$.fn.val=function(){var ae=ac.apply(this,arguments),ad=this;if(arguments.length&&(this.prop("nodeName")||"").toLowerCase()=="input"&&(this.attr("type")||"").toLowerCase()=="hidden"){setTimeout(function(){ad.trigger("change")},1)}return ae}}());function Q(ak,aj,ae,af){var ag="0.00";!aj&&(aj=3);typeof ae=="undefined"&&(ae=2);!af&&(af=",");var ac=false,al;typeof ak=="number"&&(ak=r(ak,ae));if(typeof ak=="string"){ak=ak.replace(/[,]/g,"");if(!/^[\d\.]+$/.test(ak)){return ag}if(ak.split(".").length>2){return ag}}ak=ak||0;ak+="";/^\-/.test(ak)&&(ac=true);ak=ak.replace(/[^\d\.]/g,"");var ah=ak.split("."),ad=[];while(ah[0].length>aj){var ai=ah[0].slice(ah[0].length-aj,ah[0].length);ad.push(ai);ah[0]=ah[0].slice(0,ah[0].length-aj)}ad.push(ah[0]);ah[0]=ad.reverse().join(af);if(ae){!ah[1]&&(ah[1]="");ah[1]+=new Array(ae+1).join("0");ah[1]=ah[1].slice(0,ae)}else{ah.length>1&&ah.pop()}al=ah.join(".");ac&&(al="-"+al);return al}function D(af,ae){typeof af=="string"&&(ae=af,af=new Date());!af&&(af=new Date());!ae&&(ae="YY-MM-DD");var ah=ae,ag,ad=["january","february","march","april","may","june","july","august","september","october","november","december"],ac=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];ah=ah.replace(/YY/g,af.getFullYear()).replace(/WK/g,function(){var ak=1,aj=0,ai;JC.Calendar&&(aj=JC.Calendar.weekDayOffset);ai=N(af.getFullYear(),JC.Calendar.weekDayOffset);$(ai).each(function(am,al){if(af.getTime()>=al.start&&af.getTime()<=al.end){ak=al.week;return false}});return ak}).replace(/YQ/g,function(){var ak=1,aj=0,ai;ai=c(af.getFullYear());$(ai).each(function(am,al){if(af.getTime()>=al.start&&af.getTime()<=al.end){ak=al.season;return false}});return ak}).replace(/MM/g,H(af.getMonth()+1)).replace(/DD/g,H(af.getDate())).replace(/yy/g,function(ai){ag=H(af.getYear());return ag.slice(ag.length-2)}).replace(/mm/g,af.getMonth()+1).replace(/dd/g,af.getDate()).replace(/d/g,af.getDate()).replace(/y/g,af.getFullYear()).replace(/m/g,function(ai){return ad[af.getMonth()]}).replace(/M/g,function(ai){return ac[af.getMonth()]}).replace(/HH/g,H(af.getHours())).replace(/h/g,af.getHours()).replace(/NN/g,H(af.getMinutes())).replace(/n/g,af.getMinutes()).replace(/SS/g,H(af.getSeconds())).replace(/s/g,af.getSeconds());return ah}function e(ac,af,ae){typeof ae=="undefined"&&(ae=true);if(ac&&af){for(var ad in af){if(ae){ac[ad]=af[ad]}else{if(!(ad in ac)){ac[ad]=af[ad]}}}}return ac}function F(ad,af,ac,ae){if(typeof ad=="undefined"){return}af=$(af||(window.TIMEOUT_HOST=window.TIMEOUT_HOST||{}));ac=ac||"NORMAL";typeof ad=="function"&&(ad=setTimeout(ad,ae||50));af.data(ac)&&clearTimeout(af.data(ac));af.data(ac,ad)}function P(ac){ac&&(ac=$(ac));var ad;if(ac&&ac.length){ad=ac.attr("validEncoder")||"encodeURIComponent";ad=window[ad]||encodeURIComponent}else{ad=encodeURIComponent}return ad}function g(ae,ac){ac=ac||{};var ad,ag,af;for(ad in ae){ac[ad]=ae[ad];switch(Object.prototype.toString.call(ac[ad])){case"[object Object]":ac[ad]=ac[ad].constructor===Object?g(ac[ad]):ac[ad];break;case"[object Array]":ac[ad]=ae[ad].slice();for(ag=0,af=ac[ad].length;ag<af;ag++){if(Object.prototype.toString.call(ac[ad][ag])=="[object Object]"){ac[ad][ag]=g(ac[ad][ag])}}break;case"[object Date]":ac[ad]=new Date();ac[ad].setTime(ae[ad].getTime());break;default:ac[ad]=ae[ad]}}return ac}function C(ad){ad=ad||document;var ac={width:0,height:0,docWidth:0,docHeight:0,bodyWidth:0,bodyHeight:0,scrollWidth:0,scrollHeight:0};ac.docWidth=ad.documentElement.offsetWidth;ac.docHeight=ad.documentElement.offsetHeight;ad.body&&(ac.bodyWidth=ad.body.offsetWidth,ac.bodyHeight=ad.body.offsetHeight);ac.scrollWidth=ad.documentElement.scrollWidth;ac.scrollHeight=ad.documentElement.scrollHeight;ac.width=Math.max(ac.docWidth,ac.bodyWidth,ac.scrollHeight);ac.height=Math.max(ac.docHeight,ac.bodyHeight,ac.scrollHeight);return ac}function y(ad){ad=$(ad||window);var ac={width:ad.width(),height:ad.height(),scrollLeft:ad.scrollLeft(),scrollTop:ad.scrollTop()};ac.viewportX=ac.scrollLeft;ac.maxViewportX=ac.scrollLeft+ac.width;ac.viewportY=ac.scrollTop;ac.maxViewportY=ac.scrollTop+ac.height;return ac}return JC.f})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));