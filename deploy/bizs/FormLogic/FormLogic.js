(function(b,a){b(["JC.BaseMVC","JC.Valid","JC.Panel","JC.FormFillUrl"],function(){Bizs.FormLogic=c;JC.f.addAutoInit&&JC.f.addAutoInit(c);function c(d){d&&(d=$(d));if(JC.BaseMVC.getInstance(d,c)){return JC.BaseMVC.getInstance(d,c)}JC.BaseMVC.getInstance(d,c,this);this._model=new c.Model(d);this._view=new c.View(this._model);this._init()}c.getInstance=function(d,e){return JC.BaseMVC.getInstance(d,c,e)};if(!b.amd&&JC.use){!JC.Valid&&JC.use("JC.Valid");!JC.Panel&&JC.use("JC.Panel");!JC.FormFillUrl&&JC.use("JC.FormFillUrl")}c.init=function(d){var e=[];d&&(d=$(d));if(!(d&&d.length)){return}if(d.prop("nodeName").toLowerCase()=="form"){e.push(new c(d))}else{d.find("form.js_bizsFormLogic, form.js_autoFormLogic").each(function(){e.push(new c(this))})}return e};c.popupCloseMs=2000;c.formSubmitType="";c.submitDisable=true;c.resetAfterSubmit=true;c.processErrorCb;c.GLOBAL_AJAX_CHECK;c._currentIns;JC.BaseMVC.build(c);JC.f.extendObject(c.prototype,{_beforeInit:function(){},_initHanlderEvent:function(){var d=this,e=d._model.formType();d._view.initQueryVal();d.selector().on("submit",function(f){d._model.isSubmited(true);c._currentIns=d;var g,h=d.selector().data(c.Model.GENERIC_SUBMIT_BUTTON);h&&(h=$(h));if(h&&h.length){g=JC.f.parseBool(h.attr(c.Model.IGNORE_KEY));JC.Valid.ignore(d.selector(),!g)}else{JC.Valid.ignore(d.selector(),true)}if(d._model.formBeforeProcess()){if(d._model.formBeforeProcess().call(d.selector(),f,d)===false){return d._model.prevent(f)}}if(!g&&!JC.Valid.check(d.selector())){d._model.prevent(f);if(!d._model.checkDataValid()){d._view.dataValidError();return false}if(d._model.formProcessError()){d._model.formProcessError().call(d.selector(),f,d)}return false}if(d._model.formAfterProcess()){if(d._model.formAfterProcess().call(d.selector(),f,d)===false){return d._model.prevent(f)}}if(d.selector().data(c.Model.SUBMIT_CONFIRM_BUTTON)){d.trigger(c.Model.EVT_CONFIRM);return d._model.prevent(f)}if(d._model.formBeforeSubmit()){if(d._model.formBeforeSubmit().call(d.selector(),f,d)===false){return d._model.prevent(f)}}d.trigger(c.Model.PROCESS_DONE)});d.on(c.Model.INITED,function(f){d.trigger(c.Model.INIT_JSONP);d.trigger(c.Model.BIND_FORM)});d.on(c.Model.INIT_JSONP,function(f){if(!(e==c.Model.JSONP)){return}window[d._model.jsonpKey()]=d._model.jsonpCb()});d.on(c.Model.BIND_FORM,function(g){var i,h=d._model.formType(),f;if(!(h==c.Model.AJAX||h==c.Model.JSONP)){return}i=d._model.frame();i.on("load",function(l){if(d._model.formType()==c.Model.JSONP){return}var m=i.prop("contentWindow"),k=m.document.body,j=$("<div>"+($.trim(k.innerHTML)||"")+"</div>").text();if(!d._model.isSubmited()){return}d.trigger(c.Model.AJAX_DONE,[j])})});d.on(c.Model.AJAX_DONE,function(g,k){d.trigger("HIDE_PROMPT");c.GLOBAL_AJAX_CHECK&&c.GLOBAL_AJAX_CHECK(k);var h=d._model.selector().find("button[type=reset], input[type=reset]");d._model.formSubmitDisable()&&d.trigger(c.Model.ENABLE_SUBMIT);var f,j,m=d._model.formAjaxResultType();if(Object.prototype.toString.call(k)=="[object Object]"){f=k}else{if(m=="json"){try{f=$.parseJSON(k)}catch(i){j=true;f=k}}}if(j){var l=JC.f.printf('服务端错误, 无法解析返回数据: <p class="auExtErr" style="color:red">{0}</p>',k);JC.Dialog&&JC.Dialog.alert?JC.Dialog.alert(l,1):alert(l);return}f&&m=="json"&&"errorno" in f&&!parseInt(f.errorno,10)&&d._model.formResetAfterSubmit()&&h.length&&d.selector().trigger("reset");f=f||k||{};d._model.formAjaxDone()&&d._model.formAjaxDone().call(d._model.selector(),f,d._model.selector().data(c.Model.GENERIC_SUBMIT_BUTTON),d);d._model.formResetAfterSubmit()&&!d._model.userFormAjaxDone()&&h.length&&d.selector().trigger("reset")});d.on(c.Model.PROCESS_DONE,function(f){d.trigger(c.Model.BEFORE_SUBMIT);d._model.formSubmitDisable()&&d.selector().find("input[type=submit], button[type=submit]").each(function(){!d._model.formIgnoreStatus()&&$(this).prop("disabled",true)})});d.on(c.Model.EVT_CONFIRM,function(f){var g=d.selector().data(c.Model.SUBMIT_CONFIRM_BUTTON);g&&(g=$(g));if(!(g&&g.length)){return}var h;if(d._model.formConfirmPopupType(g)=="dialog"){h=JC.Dialog.confirm(d._model.formSubmitConfirm(g),2)}else{h=JC.confirm(d._model.formSubmitConfirm(g),g,2)}h.on("confirm",function(){d.selector().data(c.Model.SUBMIT_CONFIRM_BUTTON,null);d.selector().trigger("submit")});h.on("close",function(){d.selector().data(c.Model.SUBMIT_CONFIRM_BUTTON,null)})});d.selector().on("reset",function(f){if(d.selector().data(c.Model.RESET_CONFIRM_BUTTON)){d.trigger(c.Model.EVT_RESET,[f]);return d._model.prevent(f)}else{d._view.reset();d.trigger(c.Model.ENABLE_SUBMIT);d.trigger("FORM_RESET",[f])}});d.on(c.Model.ENABLE_SUBMIT,function(){d.selector().find("input[type=submit], button[type=submit]").each(function(){!d._model.formIgnoreStatus()&&$(this).prop("disabled",false)})});d.on(c.Model.EVT_RESET,function(g,f){var h=d.selector().data(c.Model.RESET_CONFIRM_BUTTON);h&&(h=$(h));if(!(h&&h.length)){return}var i;if(d._model.formConfirmPopupType(h)=="dialog"){i=JC.Dialog.confirm(d._model.formResetConfirm(h),2)}else{i=JC.confirm(d._model.formResetConfirm(h),h,2)}i.on("confirm",function(){d.selector().data(c.Model.RESET_CONFIRM_BUTTON,null);d.selector().trigger("reset");d._view.reset();d.trigger(c.Model.ENABLE_SUBMIT);d.trigger("FORM_RESET",[f])});i.on("close",function(){d.selector().data(c.Model.RESET_CONFIRM_BUTTON,null)})});d.on(c.Model.BEFORE_SUBMIT,function(f){d.trigger("SHOW_PROMPT");if(d._model.formType()!="ajax"){JC.f.safeTimeout(function(){d.trigger("HIDE_PROMPT")},d,"hidePromptasdfasd",2000)}});d.on("SHOW_PROMPT",function(f){var g=d._model.submitPromptSelector();if(!(g&&g.length)){return}g.html(d._model.submitPromptMsg()).show()});d.on("HIDE_PROMPT",function(f){var g=d._model.submitPromptSelector();if(!(g&&g.length)){return}g.hide()});d.on("FORM_RESET",function(g,f){JC.f.safeTimeout(function(){d._model.formResetCallback()&&d._model.formResetCallback().call(d.selector(),f,d)},d,"asdfawerasdfase_reset",100)})},_inited:function(){var d=this,e=d.selector().find("input[type=file][name]");e.length&&d.selector().attr("enctype","multipart/form-data")&&d.selector().attr("encoding","multipart/form-data");d._model.trigger(c.Model.INITED)}});c.Model._instanceName="FormLogic";c.Model.INITED="inited";c.Model.INIT_JSONP="init_jsonp";c.Model.GET="get";c.Model.POST="post";c.Model.AJAX="ajax";c.Model.JSONP="jsonp";c.Model.IFRAME="iframe";c.Model.SUBMIT_CONFIRM_BUTTON="SubmitButton";c.Model.RESET_CONFIRM_BUTTON="ResetButton";c.Model.GENERIC_SUBMIT_BUTTON="GenericSubmitButton";c.Model.GENERIC_RESET_BUTTON="GenericResetButton";c.Model.EVT_CONFIRM="ConfirmEvent";c.Model.EVT_RESET="ResetEvent";c.Model.INS_COUNT=1;c.Model.PROCESS_DONE="ProcessDone";c.Model.BEFORE_SUBMIT="FORMBEFORESUBMIT";c.Model.IGNORE_KEY="formSubmitIgnoreCheck";c.Model.BIND_FORM="BindFrame";c.Model.AJAX_DONE="AjaxDone";c.Model.ENABLE_SUBMIT="EnableSubmit";c.Model.SHOW_DATA_VALID_ERROR=true;JC.f.extendObject(c.Model.prototype,{init:function(){this.id();this.selector().addClass(c.Model._instanceName);this.selector().addClass(this.id());if(this.formType()==c.Model.JSONP){var d=this.attrProp("formAjaxAction")||this.attrProp("action")||"?";this.attrProp("action")&&(this.selector().attr("action",JC.f.addUrlParams(this.attrProp("action"),{callbackInfo:this.id()})),this.selector().attr("action",JC.f.addUrlParams(this.attrProp("action"),{callback:this.jsonpKey()})));this.attrProp("formAjaxAction")&&(this.selector().attr("formAjaxAction",JC.f.addUrlParams(this.attr("formAjaxAction"),{callbackInfo:this.id()})),this.selector().attr("formAjaxAction",JC.f.addUrlParams(this.attr("formAjaxAction"),{callback:this.jsonpKey()})))}},submitPromptSelector:function(){return this.selectorProp("formSubmitPromptSelector")},submitPromptMsg:function(d){var e="正在提交数据，请稍候...";e=this.attrProp("formSubmitPromptMsg")||e;d&&(e=this.attrProp(d,"formSubmitPromptMsg")||e);return e},showDataValidError:function(e){var d=this,f=c.Model.SHOW_DATA_VALID_ERROR;d.selector().is("[formShowDataValidError]")&&(f=JC.f.parseBool(d.attrProp("formShowDataValidError")));e&&e.is("[formShowDataValidError]")&&(f=JC.f.parseBool(e.attr("formShowDataValidError")));return f},formIgnoreStatus:function(){return this.boolProp("formIgnoreStatus")},checkDataValid:function(){var d=this,m=true,n=true,g,f;for(g=0,f=d.selector()[0].length;g<f;g++){var h=$(d.selector()[0][g]);var k=h.val().trim(),l=h.attr("datavalid"),e=h.attr("datatypestatus");if(k){if(l&&e){m&&(m=JC.f.parseBool(l))}else{if(e){n&&(n=JC.f.parseBool(e))}}}else{if(e){n&&(n=JC.f.parseBool(e));if(!n){break}}}}!n&&(m=true);return m},dataValidItems:function(){var d=[];this.selector().find("input[type=text][subdatatype]").each(function(){var e=$(this);if(!/datavalid/i.test(e.attr("subdatatype"))){return}d.push(e)});return $(d)},id:function(){if(!this._id){this._id=c.Model._instanceName+"_"+(c.Model.INS_COUNT++)}return this._id},jsonpCb:function(){var e=this._innerJsonpCb,d=this.formAjaxAction();e=this.callbackProp("formJsonpCb")||e;if(JC.f.hasUrlParam(d,"callback")){e=this.windowProp(JC.f.getUrlParam(d,"callback"))||e}return e},jsonpKey:function(){var e=this.id()+"_JsonpCb",d=this.formAjaxAction();e=this.attrProp("formJsonpCb")||e;if(JC.f.hasUrlParam(d,"callback")){e=JC.f.getUrlParam(d,"callback")||e}return e},_innerJsonpCb:function(e,f){if(!(e&&f)){return}var g=$("form."+f),d;if(!g.length){return}d=JC.BaseMVC.getInstance(g,Bizs.FormLogic);if(!d){return}d.trigger(Bizs.FormLogic.Model.AJAX_DONE,[e])},isSubmited:function(d){typeof d!="undefined"&&(this._submited=d);return this._submited},formType:function(){var d=this.stringProp("method");!d&&(d=c.Model.GET);d=this.stringProp("formType")||d;return d},frame:function(){var d=this;if(!(d._frame&&d._frame.length&&d._frame.parent())){if(d.selector().is("[target]")){d._frame=$(JC.f.printf("iframe[name={0}]",d.selector().attr("target")))}if(!(d._frame&&d._frame.length)){d.selector().prop("target",d.frameId());d._frame=$(JC.f.printf(c.frameTpl,d.frameId()));d.selector().after(d._frame)}}return d._frame},frameId:function(){return this.id()+"_iframe"},formSubmitType:function(){var d=this.stringProp("ajaxSubmitType")||this.stringProp("formSubmitType")||c.formSubmitType||"plugins";return d.toLowerCase()},formAjaxResultType:function(){var d=this.stringProp("formAjaxResultType")||"json";return d},formAjaxMethod:function(){var d=this.stringProp("formAjaxMethod")||this.stringProp("method");!d&&(d=c.Model.GET);return d.toLowerCase()},formAjaxAction:function(){var d=this.attrProp("formAjaxAction")||this.attrProp("action")||"?";return JC.f.urlDetect(d)},formSubmitDisable:function(){var d=this,f=c.submitDisable,e=d.selector().data(c.Model.GENERIC_SUBMIT_BUTTON);d.selector().is("[formSubmitDisable]")&&(f=JC.f.parseBool(d.selector().attr("formSubmitDisable")));e&&e.is("[formSubmitDisable]")&&(f=JC.f.parseBool(e.attr("formSubmitDisable")));return f},formResetAfterSubmit:function(){var d=this,e=c.resetAfterSubmit;d.selector().is("[formResetAfterSubmit]")&&(e=JC.f.parseBool(d.selector().attr("formResetAfterSubmit")));return e},formAjaxDone:function(){var d=this,f=d._innerAjaxDone,e=d.selector().data(c.Model.GENERIC_SUBMIT_BUTTON);f=d.userFormAjaxDone()||f;return f},userFormAjaxDone:function(){var d=this,f,e=d.selector().data(c.Model.GENERIC_SUBMIT_BUTTON);d.selector().is("[formAjaxDone]")&&(f=this.callbackProp("formAjaxDone")||f);e&&(e=$(e)).length&&(f=d.callbackProp(e,"formAjaxDone")||f);return f},_innerAjaxDone:function(e,h,d){var g=$(this),i,f="";e.data&&e.data.returnurl&&(f=e.data.returnurl);e.url&&(f=e.url);if(e.errorno){i=JC.Dialog.alert(e.errmsg||"操作失败, 请重新尝试!",1)}else{i=JC.Dialog.msgbox(e.errmsg||"操作成功",0,function(){f=f||d._model.formAjaxDoneAction();if(f){try{f=decodeURIComponent(f)}catch(j){}/^URL/.test(f)&&(f=JC.f.urlDetect(f));JC.f.reloadPage(f)}},d._model.formPopupCloseMs())}},formPopupCloseMs:function(e){var d=this,f=c.popupCloseMs,e=e||d.selector().data(c.Model.GENERIC_SUBMIT_BUTTON);d.selector().is("[formPopupCloseMs]")&&(f=this.intProp("formPopupCloseMs")||f);e&&(e=$(e)).length&&(f=d.intProp(e,"formPopupCloseMs")||f);return f},formAjaxDoneAction:function(){var d=this,f="",e=d.selector().data(c.Model.GENERIC_SUBMIT_BUTTON);d.selector().is("[formAjaxDoneAction]")&&(f=this.attrProp("formAjaxDoneAction")||f);e&&(e=$(e)).length&&(f=d.attrProp(e,"formAjaxDoneAction")||f);return JC.f.urlDetect(f)},formBeforeProcess:function(){return this.callbackProp("formBeforeProcess")},formAfterProcess:function(){return this.callbackProp("formAfterProcess")},formBeforeSubmit:function(){return this.callbackProp("formBeforeSubmit")},formProcessError:function(){var d=this.callbackProp("formProcessError")||c.processErrorCb;return d},formResetCallback:function(){return this.callbackProp("formResetCallback")},prevent:function(d){d&&d.preventDefault();return false},formConfirmPopupType:function(d){var e=this.stringProp("formConfirmPopupType")||"dialog";d&&(d=$(d)).length&&d.is("[formConfirmPopupType]")&&(e=d.attr("formConfirmPopupType"));return e.toLowerCase()},formResetUrl:function(){var d=this,f=d.stringProp("formResetUrl"),e=d.selector().data(c.Model.GENERIC_RESET_BUTTON);e&&(e=$(e)).length&&(f=d.attrProp(e,"formResetUrl")||f);return JC.f.urlDetect(f)},formSubmitConfirm:function(d){var e=this.stringProp("formSubmitConfirm");d&&(d=$(d)).length&&d.is("[formSubmitConfirm]")&&(e=this.stringProp(d,"formSubmitConfirm"));!e&&(e="确定要提交吗?");return e.trim()},formResetConfirm:function(d){var e=this.stringProp("formResetConfirm");d&&(d=$(d)).length&&d.is("[formResetConfirm]")&&(e=this.stringProp(d,"formResetConfirm"));!e&&(e="确定要重置吗?");return e.trim()},datavalidFormLogicMsg:function(d){var e="需要表单异步验证后才能提交, 请重试...";e=$(d).attr("datavalidFormLogicMsg")||e;return e}});JC.f.extendObject(c.View.prototype,{initQueryVal:function(){var d=this;if(d._model.formType()!=c.Model.GET){return}JC.FormFillUrl&&JC.FormFillUrl.init(d._model.selector())},reset:function(f){var d=this,e=d._model.formResetUrl();e&&JC.f.reloadPage(e);d._model.resetTimeout&&clearTimeout(d._model.resetTimeout);d._model.resetTimeout=setTimeout(function(){var g=d._model.selector();g.find("input[type=text], input[type=password], input[type=file], textarea").each(function(){if($(this).attr("ignoreResetClear")){return}$(this).val("")});g.find("select").each(function(){if($(this).attr("ignoreResetClear")){return}var j=$(this);var h=j.find("option");if(h.length>1){j.val($(h[0]).val())}var i=j.is("[ignoreprocess]");j.attr("ignoreprocess",true);j.trigger("change");setTimeout(function(){!i&&j.removeAttr("ignoreprocess")},500)});JC.Valid&&JC.Valid.clearError(g)},50);JC.hideAllPopup(1)},dataValidError:function(){var d=this;$.each(this._model.dataValidItems(),function(h,e){var g=e.val().trim(),f=e.attr("datavalid");if(!(g&&f)){return}if(JC.f.parseBool(f)){return}if(d._model.showDataValidError(e)){JC.Dialog.msgbox(d._model.datavalidFormLogicMsg(e),2);JC.f.safeTimeout(function(){e.trigger("blur")},e,"FORMLOGIC_DATAVALID",10)}return false})}});$(document).delegate("input[formSubmitConfirm], button[formSubmitConfirm]","click",function(f){var e=$(this),d=JC.f.getJqParent(e,"form"),g=c.getInstance(d),h;if(d&&d.length){if(g){d.data(c.Model.SUBMIT_CONFIRM_BUTTON,null);if(e.is("[formConfirmCheckSelector]")){h=JC.f.parentSelector(e,e.attr("formConfirmCheckSelector"));if(!(h&&h.length)){return}}else{if(e.is("[formConfirmCheckCallback]")){h=window[e.attr("formConfirmCheckCallback")];if(h){if(!h.call(d,e,f,g)){return}}}}}d.data(c.Model.SUBMIT_CONFIRM_BUTTON,e)}});$(document).delegate("input[formResetConfirm], button[formResetConfirm]","click",function(f){var e=$(this),d=JC.f.getJqParent(e,"form");d&&d.length&&d.data(c.Model.RESET_CONFIRM_BUTTON,e)});$(document).delegate("input[type=reset], button[type=reset]","click",function(f){var e=$(this),d=JC.f.getJqParent(e,"form");d&&d.length&&d.data(c.Model.GENERIC_RESET_BUTTON,e)});$(document).delegate("input[type=submit], button[type=submit]","click",function(f){var e=$(this),d=JC.f.getJqParent(e,"form");d&&d.length&&d.data(c.Model.GENERIC_SUBMIT_BUTTON,e)});$(document).delegate("input[buttonClickBindSelector], button[buttonClickBindSelector]","click",function(f){var d=$(this),e=JC.f.parentSelector(d,d.attr("buttonClickBindSelector"));if(!(e&&e.length)){return}e.val(d.val()||"")});$(document).delegate("a[buttonReturnUrl], input[buttonReturnUrl], button[buttonReturnUrl]","click",function(f){var e=$(this),g=e.attr("buttonReturnUrl").trim(),j=e.is("[returnConfirm]")?e.attr("returnConfirm"):"",d=e.is("[popuptype]")?e.attr("popuptype"):"confirm",i=parseInt(e.is("[popupstatus]")?e.attr("popupstatus"):"2",10),h;if(!g){return}g=JC.f.urlDetect(g);e.prop("nodeName").toLowerCase()=="a"&&f.preventDefault();if(j){switch(d){case"dialog.confirm":h=JC.Dialog.confirm(j,i);break;default:h=JC.confirm(j,e,i);break}h.on("confirm",function(){JC.f.reloadPage(g)})}else{JC.f.reloadPage(g)}});c.frameTpl='<iframe src="about:blank" id="{0}" name="{0}" frameborder="0" class="BFLIframe" style="display:none;"></iframe>';$(document).ready(function(){setTimeout(function(){c.autoInit&&c.init($(document))},1)});return Bizs.FormLogic})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));