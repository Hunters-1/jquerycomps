(function(b,a){b(["JC.common","JC.AutoSelect","JC.AutoChecked"],function(){(function(c){window.JC=window.JC||{log:function(){}};window.JCForm=JC.Form={disableButton:function(e,d){if(!e){return}e=c(e);d=d||1000;e.attr("disabled",true);setTimeout(function(){e.attr("disabled",false)},d)}};JC.AutoSelect&&(JC.Form.initAutoSelect=JC.AutoSelect);JC.AutoChecked&&(JC.Form.initCheckAll=JC.AutoChecked)}(jQuery));(function(e){JC.Form.initAutoFill=function(h,j){h=e(h||document);if(!(h&&h.length)){h=e(document)}j=j||location.href;JC.log("JC.Form.initAutoFill");if(h.prop("nodeName").toLowerCase()=="form"){c(h,j)}else{var i=h.find("form.js_autoFillUrlForm");i.each(function(){c(this,j)});if(!i.length){g(h,j)}}};function g(h,j){h=e(h);j=f(j);h.find("input[type=text][name],input[type=password][name],textarea[name]").each(function(){var k=e(this);if(JC.f.hasUrlParam(j,k.attr("name"))){k.val(f(JC.f.getUrlParam(j,k.attr("name")).replace(/[\+]/g," ")))}});h.find("select[name]").each(function(){var k=e(this),l=f(JC.f.getUrlParam(j,k.attr("name")).replace(/[\+]/g," "));if(JC.f.hasUrlParam(j,k.attr("name"))){if(d(k,l)){k.removeAttr("selectignoreinitrequest");k.val(JC.f.getUrlParam(j,k.attr("name")))}else{k.attr("selectvalue",l)}}});var i={};h.find("input[type=checkbox][name], input[type=radio][name]").each(function(){var k=e(this),n=k.attr("name").trim(),l,m=k.val();if(!(n in i)){l=JC.f.getUrlParams(j,n);i[n]=l}else{l=i[n]}if(l&&l.length){e.each(l,function(p,o){if(o==m){k.prop("checked",true);k.trigger("change")}})}});window.JC.f.jcAutoInitComps&&JC.f.jcAutoInitComps(h)}function c(h,i){g(h,i)}JC.Form.initAutoFill.decodeFunc;function f(i){try{i=(JC.Form.initAutoFill.decodeFunc||decodeURIComponent)(i)}catch(h){}return i}function d(h,j){var i=false,j=j.toString();h.find("option").each(function(){var k=e(this);if(k.val()==j){i=true;return false}});return i}e(document).ready(function(h){setTimeout(function(){JC.Form.initAutoFill()},50)})}(jQuery));(function(c){JC.Form.initNumericStepper=function(e){e&&(e=c(e));e.delegate(".js_NStepperPlus, .js_NStepperMinus","click",function(j){var f=c(this),i=d.target(f);if(!(i&&i.length)){return}var h=parseInt(d.fixed(i),10)||0;var m=c.trim(i.val()),k=d.step(i);m=(h?parseFloat(m):parseInt(m,10))||0;var l=d.minvalue(i),g=d.maxvalue(i);f.hasClass("js_NStepperPlus")&&(m+=k);f.hasClass("js_NStepperMinus")&&(m-=k);m<l&&(m=l);m>g&&(m=g);JC.log(l,g,m,h,k);i.val(m.toFixed(h));d.callback(i)&&d.callback(i).call(i,f)})};JC.Form.initNumericStepper.onchange;var d={target:function(f){var e;if(f.attr("nstarget")){if(/^\~/.test(f.attr("nstarget"))){e=f.parent().find(f.attr("nstarget").replace(/^\~[\s]*/g,""));!(e&&e.length)&&(e=c(f.attr("nstarget")))}else{e=c(f.attr("nstarget"))}}return e},fixed:function(e){return e.attr("nsfixed")},step:function(e){return parseFloat(e.attr("nsstep"))||1},minvalue:function(e){return parseFloat(e.attr("nsminvalue")||e.attr("minvalue"))||0},maxvalue:function(e){return parseFloat(e.attr("nsmaxvalue")||e.attr("maxvalue"))||100},callback:function(e){var g=JC.Form.initNumericStepper.onchange,f;e.attr("nschangecallback")&&(f=window[e.attr("nschangecallback")])&&(g=f);return g}};c(document).ready(function(e){JC.Form.initNumericStepper(c(document))})}(jQuery));return JC.Form})}(typeof define==="function"&&define.amd?define:function(a,b){b&&b()},this));