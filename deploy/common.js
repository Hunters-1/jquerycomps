(function(b,a){b([],function(){window.JWIN=window.JWIN||$(window);window.JDOC=window.JDOC||$(document);!window.console&&(window.console={log:function(){window.status=Y(arguments).join(" ")}});!console.dir&&(console.dir=function(){});!console.error&&(console.error=function(){});window.JC=window.JC||{};JC.log=function(){JC.debug&&console.log(Y(arguments).join(" "))};JC.dir=function(){JC.debug&&$.each(Y(arguments),function(ah,ag){console.dir(ag)})};JC.error=function(){JC.debug&&$.each(Y(arguments),function(ah,ag){console.error(ag)})};JC.clear=function(){console.clear&&console.clear()};JC.PATH=JC.PATH||ae();window.Bizs=window.Bizs||{};JC.common=JC.f={addUrlParams:N,cloneDate:V,dateDetect:w,delUrlParam:u,delUrlParams:z,easyEffect:ad,filterXSS:X,formatISODate:y,funcName:l,getJqParent:r,getUrlParam:af,getUrlParams:M,hasUrlParam:q,urlHostName:E,httpRequire:P,isSameDay:Z,isSameWeek:k,isSameMonth:ac,isSameSeason:F,isSameYear:p,weekOfYear:R,seasonOfYear:c,dayOfWeek:x,dayOfSeason:o,jcAutoInitComps:n,autoInit:n,addAutoInit:A,_AUTO_INIT_DATA:{},maxDayOfMonth:O,mousewheelEvent:B,padChar:L,parentSelector:m,parseBool:s,parseFinance:t,parseISODate:D,parseDate:j,printf:h,printKey:aa,cloneObject:g,pureDate:d,reloadPage:i,removeUrlSharp:Q,relativePath:K,scriptContent:I,scriptPath:ae,sliceArgs:Y,urlDetect:ab,moneyFormat:U,dateFormat:H,extendObject:e,safeTimeout:J,encoder:T,fixPath:v,arrayId:W,docSize:G,winSize:C,gid:S,backward:function(ah){if(window.JC_BACKWARD||ah){for(var ag in JC.common){if(ag=="backward"){continue}window[ag]=window[ag]||JC.common[ag]}}},has_url_param:q,add_url_params:N,get_url_param:af,del_url_param:u,reload_page:i,parse_finance_num:t,pad_char_f:L,script_path_f:ae,ts:function(){return new Date().getTime()},jhjkhjkhkjhjk:""};JC.f.backward();!String.prototype.trim&&(String.prototype.trim=function(){return $.trim(this)});!Array.prototype.indexOf&&(Array.prototype.indexOf=function(ag){var ah=-1;$.each(this,function(aj,ai){if(ai==ag){ah=aj;return false}});return ah});!Array.prototype.first&&(Array.prototype.first=function(){var ag;this.length&&(ag=this[0]);return ag});!Array.prototype.last&&(Array.prototype.last=function(){var ag;this.length&&(ag=this[this.length-1]);return ag});window.ZINDEX_COUNT=window.ZINDEX_COUNT||50001;function v(ag){if(/\\/.test(ag)){ag=ag.replace(/[\\]+/g,"\\")}else{ag=ag.replace(/[\/]+/g,"/")}return ag}function W(aj){var ak=[],ai={};for(var ah=0,ag=aj.length;ah<ag;ah++){if(!(aj[ah] in ai)){ak.push(aj[ah]);ai[aj[ah]]=aj[ah]}}return ak}function S(){return"jc_gid_"+JC.f.ts()+"_"+(JC.GID_COUNT++)}JC.GID_COUNT=1;function Y(ah){var aj=[],ai,ag;for(ai=0,ag=ah.length;ai<ag;ai++){aj.push(ah[ai])}return aj}function E(ag){var ah="",ag=ag||location.href;if(/\:\/\//.test(ag)){ag.replace(/^.*?\:\/\/([^\/]+)/,function(aj,ai){ah=ai})}return ah}function K(ai,ah){ah=ah||document.URL;ah=ah.replace(/^.*?\:\/\/[^\/]+/,"").replace(/[^\/]+$/,"");if(!ai){return ah}if(!/\/$/.test(ah)){ah+="/"}if(/(^\.\.\/|^\.\/)/.test(ai)){var aj=new RegExp("^\\.\\.\\/"),ak=0;while(aj.exec(ai)!=null){ai=ai.replace(aj,"");ak++}for(var ag=0;ag<ak;ag++){ah=ah.replace(/[^\/]+\/$/,"")}if(ah==""){return"/"}ai=ai.replace(/^\.\//,"");ai.replace(/\/\/$/,"/");return ah+ai}return ai}function h(ai){for(var ah=1,ag=arguments.length;ah<ag;ah++){ai=ai.replace(new RegExp("\\{"+(ah-1)+"\\}","g"),arguments[ah])}return ai}function aa(ai,ah){for(var ag in ah){ai=ai.replace(new RegExp("\\{"+(ag)+"\\}","g"),ah[ag])}return ai}function q(ai,aj){var ak=false;if(!aj){aj=ai;ai=location.href}if(/\?/.test(ai)){ai=ai.split("?");ai=ai[ai.length-1];ai=ai.split("&");for(var ah=0,ag=ai.length;ah<ag;ah++){if(ai[ah].split("=")[0].toLowerCase()==aj.toLowerCase()){ak=true;break}}}return ak}function N(ai,ah){var aj="";!ah&&(ah=ai,ai=location.href);ai.indexOf("#")>-1&&(aj=ai.split("#")[1],ai=ai.split("#")[0]);for(var ag in ah){ai=u(ai,ag);ai.indexOf("?")>-1?ai+="&"+ag+"="+ah[ag]:ai+="?"+ag+"="+ah[ag]}aj&&(ai+="#"+aj);ai=X(ai.replace(/\?\&/g,"?"));return ai}function X(ag){ag&&(ag=ag.replace(/</g,"&lt;").replace(/>/g,"&gt;"));return ag}function af(ah,ai){var al="",aj,ag,ak;!ai&&(ai=ah,ah=location.href);ah.indexOf("#")>-1&&(ah=ah.split("#")[0]);if(ah.indexOf("?")>-1){aj=ah.split("?")[1].split("&");for(ag=0;ag<aj.length;ag++){ak=aj[ag].split("=");ak[0]=decodeURIComponent(ak[0]||"").replace(/^\s+|\s+$/g,"");if(ak[0].toLowerCase()==ai.toLowerCase()){al=X(ak[1]||"");break}}}return al}function M(aj,ak){var am=[],ag,ai,ah,al;!ak&&(ak=aj,aj=location.href);aj=aj.replace(/[\?]+/g,"?").split("?");if(aj.length>1){aj=aj[1];ag=aj.split("&");if(ag.length){for(ai=0,ah=ag.length;ai<ah;ai++){al=ag[ai].split("=");al[0]=decodeURIComponent(al[0])||"";if(al[0].trim()==ak){am.push(X(al[1]||""))}}}}return am}function u(ai,aj){var am="",an,al=[],ah,ak;!aj&&(aj=ai,ai=location.href);ai.indexOf("#")>-1&&(am=ai.split("#")[1],ai=ai.split("#")[0]);if(ai.indexOf("?")>-1){an=ai.split("?")[1].split("&");ai=ai.split("?")[0];for(ah=0;ah<an.length;ah++){var ag=an[ah].split("=");ag[0]=ag[0].replace(/^\s+|\s+$/g,"");if(ag[0].toLowerCase()==aj.toLowerCase()){continue}al.push(ag.join("="))}ai+="?"+al.join("&")}am&&(ai+="#"+am);ai=X(ai);return ai}function z(ai,ah){!ah&&(ah=ai,ai=location.href);for(var ag in ah){ai=u(ai,ah[ag])}return ai}function P(ag){ag=ag||"本示例需要HTTP环境";if(/file\:|\\/.test(location.href)){alert(ag);return false}return true}function Q(ag,ai,aj){!ag&&(ag=location.href);ag=ag.replace(/\#[\s\S]*/,"");aj=aj||"rnd";var ah;!ai&&(ah={},ah[aj]=new Date().getTime(),ag=N(ag,ah));ag=X(ag);return ag}function i(ah,ai,ag){ag=ag||0;ah=Q(ah||location.href,ai);!ai&&(ah=N(ah,{rnd:new Date().getTime()}));ah=X(ah);setTimeout(function(){location.href=ah},ag);return ah}function t(ah,ag){ah=parseFloat(ah)||0;typeof ag=="undefined"&&(ag=2);ah&&(ah=parseFloat(ah.toFixed(ag)));return ah}function L(ai,ag,ah){ag=ag||2;ah=ah||"0";ai+="";if(ai.length>ai){return ai}ai=new Array(ag+1).join(ah)+ai;return ai.slice(ai.length-ag)}function y(ag,ah){ag=ag||new Date();typeof ah=="undefined"&&(ah="-");return[ag.getFullYear(),L(ag.getMonth()+1),L(ag.getDate())].join(ah)}function D(ag){if(!ag){return}ag=ag.replace(/[^\d]+/g,"");var ah;if(ag.length===8){ah=new Date(ag.slice(0,4),parseInt(ag.slice(4,6),10)-1,parseInt(ag.slice(6),10))}else{if(ag.length===6){ah=new Date(ag.slice(0,4),parseInt(ag.slice(4,6),10)-1,1)}}return ah}function j(ah,ag,aj){if(!ah){return null}var ai=D;ag&&!aj&&(ag=$(ag)).length&&ag.attr("dateParse")&&(ai=window[ag.attr("dateParse")]||ai);ah=ai(ah);ah&&ah.start&&(ah=ah.start);return ah}function d(ag){var ah;ag=ag||new Date();ah=new Date(ag.getFullYear(),ag.getMonth(),ag.getDate());return ah}function V(ag){var ah=new Date();ah.setTime(ag.getTime());return ah}function Z(ah,ag){return[ah.getFullYear(),ah.getMonth(),ah.getDate()].join()===[ag.getFullYear(),ag.getMonth(),ag.getDate()].join()}function ac(ah,ag){return[ah.getFullYear(),ah.getMonth()].join()===[ag.getFullYear(),ag.getMonth()].join()}function k(aj,ag){var ai=[],al=false,ak=0,ah;ai=R(aj.getFullYear());aj=aj.getTime();ag=ag.getTime();for(ak=0,ah=ai.length;ak<ah;ak++){if((aj>=ai[ak].start&&aj<=ai[ak].end)&&(ag>=ai[ak].start&&ag<=ai[ak].end)){console.log(ak,aj,ai[ak]);return true}}return al}function F(aj,ah){var ag=[],al=false,ak=0,ai;if(!p(aj,ah)){return false}ag=c(aj.getFullYear());aj=aj.getTime();ah=ah.getTime();for(ak=0,ai=ag.length;ak<ai;ak++){if((aj>=ag[ak].start&&aj<=ag[ak].end)&&(ah>=ag[ak].start&&ah<=ag[ak].end)){return true}}return al}function p(ah,ag){return ah.getFullYear()===ag.getFullYear()}function R(aj,ai){var al=[],ak,ah=1,ai=ai||0,aj=parseInt(aj,10),ag=new Date(aj,0,1);ag.getDay()>1&&ag.setDate(ag.getDate()-ag.getDay()+7);ag.getDay()===0&&ag.setDate(ag.getDate()+1);ai>0&&(ai=(new Date(2000,1,2)-new Date(2000,1,1))*ai);while(ag.getFullYear()<=aj){ak={week:ah++,start:null,end:null};ak.start=ag.getTime()+ai;ag.setDate(ag.getDate()+6);ak.end=ag.getTime()+ai;ag.setDate(ag.getDate()+1);if(ag.getFullYear()>aj){ag=new Date(ag.getFullYear(),0,1);if(ag.getDay()<2){break}}al.push(ak)}return al}function c(ag){var ah=[],ag=parseInt(ag,10);ah.push({start:d(new Date(ag,0,1)),end:d(new Date(ag,2,31)),season:1},{start:d(new Date(ag,3,1)),end:d(new Date(ag,5,30)),season:2},{start:d(new Date(ag,6,1)),end:d(new Date(ag,8,30)),season:3},{start:d(new Date(ag,9,1)),end:d(new Date(ag,11,31)),season:4});return ah}function x(ao,an){var ag={},ah=JC.f.weekOfYear(ao.getFullYear(),an),al=0,aj=ah.length,am=ao.getTime(),ai=JC.f.pureDate(new Date()),ak=JC.f.pureDate(new Date());for(al;al<aj;al++){if(am>=ah[al].start&&am<=ah[al].end){ai.setTime(ah[al].start);ak.setTime(ah[al].end);ag.start=ai;ag.end=ak;ag.w=al+1;return ag}}}function o(ag){var aj=ag.getFullYear(),al=JC.f.seasonOfYear(aj),ai,ak={},ah,am=ag.getTime();for(ai=0;ai<4;ai++){if(am>=al[ai].start.getTime()&&am<=al[ai].end.getTime()){ak.start=al[ai].start;ak.end=al[ai].end;ak.q=ai+1;return ak}}}function O(ah){var ai,ag=new Date(ah.getFullYear(),ah.getMonth()+1);ag.setDate(ag.getDate()-1);ai=ag.getDate();return ai}function ae(){var ag=document.getElementsByTagName("script"),ag=ag[ag.length-1],ah=ag.getAttribute("src");if(/\//.test(ah)){ah=ah.split("/");ah.pop();ah=ah.join("/")+"/"}else{if(/\\/.test(ah)){ah=ah.split("\\");ah.pop();ah=ah.join("\\")+"/"}}return ah}function ad(ap,al,ah,ak,an){var aj=new Date(),ao,al=al||200,ah=ah||0,al=al-ah,am=0,ag,ak=ak||200,an=an||2;var ai=setInterval(function(){ao=new Date()-aj;am=ao/ak*al;am;if(am>=al){am=al;ag=true;clearInterval(ai)}ap&&ap(am+ah,ag,ao,ak,an,ah,al)},an);return ai}function s(ag){if(typeof ag=="string"){ag=ag.replace(/[\s]/g,"").toLowerCase();if(ag&&(ag=="false"||ag=="0"||ag=="null"||ag=="undefined")){ag=false}else{if(ag){ag=true}}}return !!ag}function B(aj,ah,ag){ag=ag||document;var ai=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";ag.attachEvent&&(ai="on"+ai);if(ah){ag.detachEvent&&document.detachEvent(ai,aj);ag.removeEventListener&&document.removeEventListener(ai,aj)}else{ag.attachEvent&&document.attachEvent(ai,aj);ag.addEventListener&&document.addEventListener(ai,aj)}}function r(ag,ai){ag=$(ag);var ah;if(ai){while((ag=ag.parent()).length){if(ag.is(ai)){ah=ag;break}}}else{ah=ag.parent()}return ah}function m(an,aj,al){an&&(an=$(an));if(/\,/.test(aj)){var ah=[],am;aj=aj.split(",");$.each(aj,function(aq,ap){ap=ap.trim();am=m(an,ap,al);am&&am.length&&((am.each(function(){ah.push($(this))})))});return $(ah)}var ak=/^([\/]+)/,ai=/^([\|]+)/,ag=/^([<\(]+)/;if(ak.test(aj)){aj=aj.replace(ak,function(aq,ap){for(var at=0,ar=ap.length;at<ar;at++){an=an.parent()}al=an;return""});aj=aj.trim();return aj?al.find(aj):al}else{if(ai.test(aj)){aj=aj.replace(ai,function(aq,ap){for(var at=1,ar=ap.length;at<ar;at++){an=an.parent()}al=an;return""});aj=aj.trim();return aj?al.find(aj):al}else{if(ag.test(aj)){aj=aj.replace(ag,"").trim();if(aj){if(/[\s]/.test(aj)){var ao;aj.replace(/^([^\s]+)([\s\S]+)/,function(aq,ap,ar){ao=r(an,ap).find(ar.trim())});return ao||aj}else{return r(an,aj)}}else{return an.parent()}}else{return al?al.find(aj):jQuery(aj)}}}}function I(ag){var ah="";ag&&(ag=$(ag)).length&&(ah=ag.html().trim().replace(/[\r\n]/g,""));return ah}function l(ag){var aj=/^function\s+([^()]+)[\s\S]*/,ai="",ah=ag.toString();aj.test(ah)&&(ai=ah.replace(aj,"$1"));return ai.trim()}function n(ag){ag=$(ag||document);if(!(ag&&ag.length&&window.JC)){return}if(!(JC.f&&JC.f._AUTO_INIT_DATA)){return}$.each(JC.f._AUTO_INIT_DATA,function(ai,ah){if(!ah){return}ah.init?ah.init(ag):ah(ag)});return JC.f}function A(ag){ag&&JC.f._AUTO_INIT_DATA&&(JC.f._AUTO_INIT_DATA[ag&&ag.Model&&ag.Model._instanceName?ag.Model._instanceName:ag.toString()]=ag);return JC.f}function f(ag){ag=$(ag||document);if(!(ag&&ag.length&&window.JC)){return}JC.AutoSelect&&JC.AutoSelect(ag);JC.Calendar&&JC.Calendar.initTrigger(ag);JC.DCalendar&&JC.DCalendar.init&&JC.DCalendar.init(ag);JC.AutoChecked&&JC.AutoChecked(ag);JC.AjaxUpload&&JC.AjaxUpload.init(ag);JC.Placeholder&&JC.Placeholder.init(ag);JC.TableFreeze&&JC.TableFreeze.init(ag);JC.Drag&&JC.Drag.init(ag);JC.ImageCutter&&JC.ImageCutter.init(ag);JC.Tab&&JC.Tab.init&&JC.Tab.init(ag);if(!window.Bizs){return}Bizs.DisableLogic&&Bizs.DisableLogic.init(ag);Bizs.FormLogic&&Bizs.FormLogic.init(ag);Bizs.MoneyTips&&Bizs.MoneyTips.init(ag);Bizs.AutoSelectComplete&&Bizs.AutoSelectComplete.init(ag);Bizs.InputSelect&&Bizs.InputSelect.init(ag);Bizs.TaskViewer&&Bizs.TaskViewer.init(ag)}function ab(ak){ak=ak||"";var an=ak,al,aj,ai,am;if(/^URL/.test(ak)){al=ak.replace(/^URL/,"").replace(/[\s]*,[\s]*/g,",").trim().split(",");ak=location.href;var ah={},ag=[];if(al.length){for(aj=0,ai=al.length;aj<ai;aj++){/\&/.test(al[aj])?(ag=ag.concat(al[aj].split("&"))):(ag=ag.concat(al[aj]))}al=ag}for(aj=0,ai=al.length;aj<ai;aj++){am=al[aj].replace(/[\s]+/g,"").split("=");if(!am[0]){continue}ah[am[0]]=am[1]||""}ak=N(ak,ah);an=ak}an=X(ak);return an}function w(ah){var au=null,ao=/^now/i,ak=/^nowfirst/,am=/^([\d]{8}|[\d]{4}.[\d]{2}.[\d]{2})/,ap,at,ar;if(ah&&typeof ah=="string"){if(ao.test(ah)||ak.test(ah)||am.test(ah)){ap=new Date();if(ak.test(ah)){ap.setDate(1)}if(am.test(ah)){ap=JC.f.parseISODate(ah.replace(/[^\d]/g,"").slice(0,8));ah=ah.replace(am,"")}ah=ah.replace(ao,"").replace(/[\s]+/g,"");at=ah.split(",");var al=/d$/i,aq=/w$/i,ag=/m$/i,an=/y$/i;for(var aj=0,ai=at.length;aj<ai;aj++){ar=at[aj]||"";if(!ar){continue}ar=ar.replace(/[^\-\ddwmy]+/gi,"");if(al.test(ar)){ar=parseInt(ar.replace(al,""),10);ar&&ap.setDate(ap.getDate()+ar)}else{if(aq.test(ar)){ar=parseInt(ar.replace(aq,""),10);ar&&ap.setDate(ap.getDate()+ar*7)}else{if(ag.test(ar)){ar=parseInt(ar.replace(ag,""),10);ar&&ap.setMonth(ap.getMonth()+ar)}else{if(an.test(ar)){ar=parseInt(ar.replace(an,""),10);ar&&ap.setFullYear(ap.getFullYear()+ar)}}}}}au=ap}else{au=D(ah)}}return au}(function(){if(!window.jQuery){return}var ag=$.fn.val;$.fn.val=function(){var ai=ag.apply(this,arguments),ah=this;if(arguments.length&&(this.prop("nodeName")||"").toLowerCase()=="input"&&(this.attr("type")||"").toLowerCase()=="hidden"){setTimeout(function(){ah.trigger("change")},1)}return ai}}());function U(ao,an,ai,aj){var ak="0.00";!an&&(an=3);typeof ai=="undefined"&&(ai=2);!aj&&(aj=",");var ag=false,ap;typeof ao=="number"&&(ao=t(ao,ai));if(typeof ao=="string"){ao=ao.replace(/[,]/g,"");if(!/^[\d\.]+$/.test(ao)){return ak}if(ao.split(".").length>2){return ak}}ao=ao||0;ao+="";/^\-/.test(ao)&&(ag=true);ao=ao.replace(/[^\d\.]/g,"");var al=ao.split("."),ah=[];while(al[0].length>an){var am=al[0].slice(al[0].length-an,al[0].length);ah.push(am);al[0]=al[0].slice(0,al[0].length-an)}ah.push(al[0]);al[0]=ah.reverse().join(aj);if(ai){!al[1]&&(al[1]="");al[1]+=new Array(ai+1).join("0");al[1]=al[1].slice(0,ai)}else{al.length>1&&al.pop()}ap=al.join(".");ag&&(ap="-"+ap);return ap}function H(aj,ai){typeof aj=="string"&&(ai=aj,aj=new Date());!aj&&(aj=new Date());!ai&&(ai="YY-MM-DD");var al=ai,ak,ah=["january","february","march","april","may","june","july","august","september","october","november","december"],ag=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];al=al.replace(/YY/g,aj.getFullYear()).replace(/WK/g,function(){var ao=1,an=0,am;JC.Calendar&&(an=JC.Calendar.weekDayOffset);am=R(aj.getFullYear(),JC.Calendar.weekDayOffset);$(am).each(function(aq,ap){if(aj.getTime()>=ap.start&&aj.getTime()<=ap.end){ao=ap.week;return false}});return ao}).replace(/YQ/g,function(){var ao=1,an=0,am;am=c(aj.getFullYear());$(am).each(function(aq,ap){if(aj.getTime()>=ap.start&&aj.getTime()<=ap.end){ao=ap.season;return false}});return ao}).replace(/MM/g,L(aj.getMonth()+1)).replace(/DD/g,L(aj.getDate())).replace(/yy/g,function(am){ak=L(aj.getYear());return ak.slice(ak.length-2)}).replace(/mm/g,aj.getMonth()+1).replace(/dd/g,aj.getDate()).replace(/d/g,aj.getDate()).replace(/y/g,aj.getFullYear()).replace(/m/g,function(am){return ah[aj.getMonth()]}).replace(/M/g,function(am){return ag[aj.getMonth()]}).replace(/HH/g,L(aj.getHours())).replace(/h/g,aj.getHours()).replace(/NN/g,L(aj.getMinutes())).replace(/n/g,aj.getMinutes()).replace(/SS/g,L(aj.getSeconds())).replace(/s/g,aj.getSeconds());return al}function e(ag,aj,ai){typeof ai=="undefined"&&(ai=true);if(ag&&aj){for(var ah in aj){if(ai){ag[ah]=aj[ah]}else{if(!(ah in ag)){ag[ah]=aj[ah]}}}}return ag}function J(ah,aj,ag,ai){if(typeof ah=="undefined"){return}aj=$(aj||(window.TIMEOUT_HOST=window.TIMEOUT_HOST||{}));ag=ag||"NORMAL";typeof ah=="function"&&(ah=setTimeout(ah,ai||50));aj.data(ag)&&clearTimeout(aj.data(ag));aj.data(ag,ah)}function T(ag){ag&&(ag=$(ag));var ah;if(ag&&ag.length){ah=ag.attr("validEncoder")||"encodeURIComponent";ah=window[ah]||encodeURIComponent}else{ah=encodeURIComponent}return ah}function g(ai,ag){ag=ag||{};var ah,ak,aj;for(ah in ai){ag[ah]=ai[ah];switch(Object.prototype.toString.call(ag[ah])){case"[object Object]":ag[ah]=ag[ah].constructor===Object?g(ag[ah]):ag[ah];break;case"[object Array]":ag[ah]=ai[ah].slice();for(ak=0,aj=ag[ah].length;ak<aj;ak++){if(Object.prototype.toString.call(ag[ah][ak])=="[object Object]"){ag[ah][ak]=g(ag[ah][ak])}}break;case"[object Date]":ag[ah]=new Date();ag[ah].setTime(ai[ah].getTime());break;default:ag[ah]=ai[ah]}}return ag}function G(ah){ah=ah||document;var ag={width:0,height:0,docWidth:0,docHeight:0,bodyWidth:0,bodyHeight:0,scrollWidth:0,scrollHeight:0};ag.docWidth=ah.documentElement.offsetWidth;ag.docHeight=ah.documentElement.offsetHeight;ah.body&&(ag.bodyWidth=ah.body.offsetWidth,ag.bodyHeight=ah.body.offsetHeight);ag.scrollWidth=ah.documentElement.scrollWidth;ag.scrollHeight=ah.documentElement.scrollHeight;ag.width=Math.max(ag.docWidth,ag.bodyWidth,ag.scrollHeight);ag.height=Math.max(ag.docHeight,ag.bodyHeight,ag.scrollHeight);return ag}function C(ah){ah=$(ah||window);var ag={width:ah.width(),height:ah.height(),scrollLeft:ah.scrollLeft(),scrollTop:ah.scrollTop()};ag.viewportX=ag.scrollLeft;ag.maxViewportX=ag.scrollLeft+ag.width;ag.viewportY=ag.scrollTop;ag.maxViewportY=ag.scrollTop+ag.height;return ag}return JC.f})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));