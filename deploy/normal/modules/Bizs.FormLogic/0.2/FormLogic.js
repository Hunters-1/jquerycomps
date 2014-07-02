(function(e,t){e(["JC.BaseMVC","JC.Valid","JC.Panel","JC.FormFillUrl"],function(){function t(e){e&&(e=$(e));if(JC.BaseMVC.getInstance(e,t))return JC.BaseMVC.getInstance(e,t);JC.BaseMVC.getInstance(e,t,this),this._model=new t.Model(e),this._view=new t.View(this._model),this._init(),JC.log(t.Model._instanceName,"all inited",(new Date).getTime())}return Bizs.FormLogic=t,t.getInstance=function(e,n){return JC.BaseMVC.getInstance(e,t,n)},!e.amd&&JC.use&&(!JC.Valid&&JC.use("JC.Valid"),!JC.Panel&&JC.use("JC.Panel"),!JC.FormFillUrl&&JC.use("JC.FormFillUrl")),t.init=function(e){var n=[];e&&(e=$(e));if(!e||!e.length)return;return e.prop("nodeName").toLowerCase()=="form"?n.push(new t(e)):e.find("form.js_bizsFormLogic, form.js_autoFormLogic").each(function(){n.push(new t(this))}),n},t.popupCloseMs=2e3,t.formSubmitType="",t.submitDisable=!0,t.resetAfterSubmit=!0,t.processErrorCb,t.GLOBAL_AJAX_CHECK,t._currentIns,JC.BaseMVC.build(t),JC.f.extendObject(t.prototype,{_beforeInit:function(){},_initHanlderEvent:function(){var e=this,n=e._model.formType();e._view.initQueryVal(),e.selector().on("submit",function(n){e._model.isSubmited(!0),t._currentIns=e;var r,i=e.selector().data(t.Model.GENERIC_SUBMIT_BUTTON);i&&(i=$(i)),i&&i.length?(r=JC.f.parseBool(i.attr(t.Model.IGNORE_KEY)),JC.Valid.ignore(e.selector(),!r)):JC.Valid.ignore(e.selector(),!0);if(e._model.formBeforeProcess()&&e._model.formBeforeProcess().call(e.selector(),n,e)===!1)return e._model.prevent(n);if(!JC.Valid.check(e.selector()))return e._model.prevent(n),e._model.checkDataValid()?(e._model.formProcessError()&&e._model.formProcessError().call(e.selector(),n,e),!1):(e._view.dataValidError(),!1);if(e._model.formAfterProcess()&&e._model.formAfterProcess().call(e.selector(),n,e)===!1)return e._model.prevent(n);if(e.selector().data(t.Model.SUBMIT_CONFIRM_BUTTON))return e.trigger(t.Model.EVT_CONFIRM),e._model.prevent(n);e.trigger(t.Model.PROCESS_DONE)}),e.on(t.Model.INITED,function(n){e.trigger(t.Model.INIT_JSONP),e.trigger(t.Model.BIND_FORM)}),e.on(t.Model.INIT_JSONP,function(r){if(n!=t.Model.JSONP)return;window[e._model.jsonpKey()]=e._model.jsonpCb()}),e.on(t.Model.BIND_FORM,function(n){var r,i=e._model.formType(),s;if(i!=t.Model.AJAX&&i!=t.Model.JSONP)return;r=e._model.frame(),r.on("load",function(n){if(e._model.formType()==t.Model.JSONP)return;var i=r.prop("contentWindow"),s=i.document.body,o=$("<div>"+($.trim(s.innerHTML)||"")+"</div>").text();if(!e._model.isSubmited())return;JC.log("common ajax done"),e.trigger(t.Model.AJAX_DONE,[o])})}),e.on(t.Model.AJAX_DONE,function(n,r){t.GLOBAL_AJAX_CHECK&&t.GLOBAL_AJAX_CHECK(r);var i=e._model.selector().find("button[type=reset], input[type=reset]");e._model.formSubmitDisable()&&e.trigger(t.Model.ENABLE_SUBMIT);var s,o,u=e._model.formAjaxResultType();if(Object.prototype.toString.call(r)=="[object Object]")s=r;else if(u=="json")try{s=$.parseJSON(r)}catch(a){o=!0,s=r}if(o){var f=JC.f.printf('服务端错误, 无法解析返回数据: <p class="auExtErr" style="color:red">{0}</p>',r);JC.Dialog.alert(f,1);return}s&&u=="json"&&"errorno"in s&&!parseInt(s.errorno,10)&&e._model.formResetAfterSubmit()&&i.length&&e.selector().trigger("reset"),s=s||r||{},e._model.formAjaxDone()&&e._model.formAjaxDone().call(e._model.selector(),s,e._model.selector().data(t.Model.GENERIC_SUBMIT_BUTTON),e),e._model.formResetAfterSubmit()&&!e._model.userFormAjaxDone()&&i.length&&e.selector().trigger("reset")}),e.on(t.Model.PROCESS_DONE,function(){e._model.formSubmitDisable()&&e.selector().find("input[type=submit], button[type=submit]").each(function(){!e._model.formIgnoreStatus()&&$(this).prop("disabled",!0)})}),e.on(t.Model.EVT_CONFIRM,function(n){var r=e.selector().data(t.Model.SUBMIT_CONFIRM_BUTTON);r&&(r=$(r));if(!r||!r.length)return;var i;e._model.formConfirmPopupType(r)=="dialog"?i=JC.Dialog.confirm(e._model.formSubmitConfirm(r),2):i=JC.confirm(e._model.formSubmitConfirm(r),r,2),i.on("confirm",function(){e.selector().data(t.Model.SUBMIT_CONFIRM_BUTTON,null),e.selector().trigger("submit")}),i.on("close",function(){e.selector().data(t.Model.SUBMIT_CONFIRM_BUTTON,null)})}),e.selector().on("reset",function(n){if(e.selector().data(t.Model.RESET_CONFIRM_BUTTON))return e.trigger(t.Model.EVT_RESET,[n]),e._model.prevent(n);e._view.reset(),e.trigger(t.Model.ENABLE_SUBMIT),e.trigger("FORM_RESET",[n])}),e.on(t.Model.ENABLE_SUBMIT,function(){e.selector().find("input[type=submit], button[type=submit]").each(function(){!e._model.formIgnoreStatus()&&$(this).prop("disabled",!1)})}),e.on(t.Model.EVT_RESET,function(n,r){var i=e.selector().data(t.Model.RESET_CONFIRM_BUTTON);i&&(i=$(i));if(!i||!i.length)return;var s;e._model.formConfirmPopupType(i)=="dialog"?s=JC.Dialog.confirm(e._model.formResetConfirm(i),2):s=JC.confirm(e._model.formResetConfirm(i),i,2),s.on("confirm",function(){e.selector().data(t.Model.RESET_CONFIRM_BUTTON,null),e.selector().trigger("reset"),e._view.reset(),e.trigger(t.Model.ENABLE_SUBMIT),e.trigger("FORM_RESET",[r])}),s.on("close",function(){e.selector().data(t.Model.RESET_CONFIRM_BUTTON,null)})}),e.on("FORM_RESET",function(t,n){JC.f.safeTimeout(function(){e._model.formResetCallback()&&e._model.formResetCallback().call(e.selector(),n,e)},e,"asdfawerasdfase_reset",100)})},_inited:function(){JC.log("FormLogic#_inited",(new Date).getTime());var e=this,n=e.selector().find("input[type=file][name]");n.length&&e.selector().attr("enctype","multipart/form-data")&&e.selector().attr("encoding","multipart/form-data"),e._model.trigger(t.Model.INITED)}}),t.Model._instanceName="FormLogic",t.Model.INITED="inited",t.Model.INIT_JSONP="init_jsonp",t.Model.GET="get",t.Model.POST="post",t.Model.AJAX="ajax",t.Model.JSONP="jsonp",t.Model.IFRAME="iframe",t.Model.SUBMIT_CONFIRM_BUTTON="SubmitButton",t.Model.RESET_CONFIRM_BUTTON="ResetButton",t.Model.GENERIC_SUBMIT_BUTTON="GenericSubmitButton",t.Model.GENERIC_RESET_BUTTON="GenericResetButton",t.Model.EVT_CONFIRM="ConfirmEvent",t.Model.EVT_RESET="ResetEvent",t.Model.EVT_AJAX_SUBMIT="AjaxSubmit",t.Model.INS_COUNT=1,t.Model.PROCESS_DONE="ProcessDone",t.Model.IGNORE_KEY="formSubmitIgnoreCheck",t.Model.BIND_FORM="BindFrame",t.Model.AJAX_DONE="AjaxDone",t.Model.ENABLE_SUBMIT="EnableSubmit",t.Model.SHOW_DATA_VALID_ERROR=!0,JC.f.extendObject(t.Model.prototype,{init:function(){this.id(),this.selector().addClass(t.Model._instanceName),this.selector().addClass(this.id());if(this.formType()==t.Model.JSONP){var e=this.attrProp("formAjaxAction")||this.attrProp("action")||"?";this.attrProp("action")&&(this.selector().attr("action",JC.f.addUrlParams(this.attrProp("action"),{callbackInfo:this.id()})),this.selector().attr("action",JC.f.addUrlParams(this.attrProp("action"),{callback:this.jsonpKey()}))),this.attrProp("formAjaxAction")&&(this.selector().attr("formAjaxAction",JC.f.addUrlParams(this.attr("formAjaxAction"),{callbackInfo:this.id()})),this.selector().attr("formAjaxAction",JC.f.addUrlParams(this.attr("formAjaxAction"),{callback:this.jsonpKey()})))}},showDataValidError:function(e){var n=this,r=t.Model.SHOW_DATA_VALID_ERROR;return n.selector().is("[formShowDataValidError]")&&(r=JC.f.parseBool(n.attrProp("formShowDataValidError"))),e&&e.is("[formShowDataValidError]")&&(r=JC.f.parseBool(e.attr("formShowDataValidError"))),r},formIgnoreStatus:function(){return this.boolProp("formIgnoreStatus")},checkDataValid:function(){var e=!0;return $.each(this.dataValidItems(),function(t,n){var r=n.val().trim(),i=n.attr("datavalid"),s=JC.f.parseBool(n.attr("datatypestatus"));if(!r||!i)return;if(!s)return;if(!JC.f.parseBool(n.attr(i)))return e=!1}),e},dataValidItems:function(){var e=[];return this.selector().find("input[type=text][subdatatype]").each(function(){var t=$(this);if(!/datavalid/i.test(t.attr("subdatatype")))return;e.push(t)}),$(e)},id:function(){return this._id||(this._id=t.Model._instanceName+"_"+t.Model.INS_COUNT++),this._id},jsonpCb:function(){var e=this._innerJsonpCb,t=this.formAjaxAction();return e=this.callbackProp("formJsonpCb")||e,JC.f.hasUrlParam(t,"callback")&&(e=this.windowProp(JC.f.getUrlParam(t,"callback"))||e),e},jsonpKey:function(){var e=this.id()+"_JsonpCb",t=this.formAjaxAction();return e=this.attrProp("formJsonpCb")||e,JC.f.hasUrlParam(t,"callback")&&(e=JC.f.getUrlParam(t,"callback")||e),e},_innerJsonpCb:function(e,t){if(!e||!t)return;var n=$("form."+t),r;if(!n.length)return;r=JC.BaseMVC.getInstance(n,Bizs.FormLogic);if(!r)return;r.trigger(Bizs.FormLogic.Model.AJAX_DONE,[e])},isSubmited:function(e){return typeof e!="undefined"&&(this._submited=e),this._submited},formType:function(){var e=this.stringProp("method");return!e&&(e=t.Model.GET),e=this.stringProp("formType")||e,e},frame:function(){var e=this;if(!(e._frame&&e._frame.length&&e._frame.parent())){e.selector().is("[target]")&&(e._frame=$(JC.f.printf("iframe[name={0}]",e.selector().attr("target"))));if(!e._frame||!e._frame.length)e.selector().prop("target",e.frameId()),e._frame=$(JC.f.printf(t.frameTpl,e.frameId())),e.selector().after(e._frame)}return e._frame},frameId:function(){return this.id()+"_iframe"},formSubmitType:function(){var e=this.stringProp("ajaxSubmitType")||this.stringProp("formSubmitType")||t.formSubmitType||"plugins";return e.toLowerCase()},formAjaxResultType:function(){var e=this.stringProp("formAjaxResultType")||"json";return e},formAjaxMethod:function(){var e=this.stringProp("formAjaxMethod")||this.stringProp("method");return!e&&(e=t.Model.GET),e.toLowerCase()},formAjaxAction:function(){var e=this.attrProp("formAjaxAction")||this.attrProp("action")||"?";return JC.f.urlDetect(e)},formSubmitDisable:function(){var e=this,n=t.submitDisable,r=e.selector().data(t.Model.GENERIC_SUBMIT_BUTTON);return e.selector().is("[formSubmitDisable]")&&(n=JC.f.parseBool(e.selector().attr("formSubmitDisable"))),r&&r.is("[formSubmitDisable]")&&(n=JC.f.parseBool(r.attr("formSubmitDisable"))),n},formResetAfterSubmit:function(){var e=this,n=t.resetAfterSubmit;return e.selector().is("[formResetAfterSubmit]")&&(n=JC.f.parseBool(e.selector().attr("formResetAfterSubmit"))),n},formAjaxDone:function(){var e=this,n=e._innerAjaxDone,r=e.selector().data(t.Model.GENERIC_SUBMIT_BUTTON);return n=e.userFormAjaxDone()||n,n},userFormAjaxDone:function(){var e=this,n,r=e.selector().data(t.Model.GENERIC_SUBMIT_BUTTON);return e.selector().is("[formAjaxDone]")&&(n=this.callbackProp("formAjaxDone")||n),r&&(r=$(r)).length&&(n=e.callbackProp(r,"formAjaxDone")||n),n},_innerAjaxDone:function(e,t,n){var r=$(this),i,s="";e.data&&e.data.returnurl&&(s=e.data.returnurl),e.url&&(s=e.url),e.errorno?i=JC.Dialog.alert(e.errmsg||"操作失败, 请重新尝试!",1):i=JC.Dialog.msgbox(e.errmsg||"操作成功",0,function(){s=s||n._model.formAjaxDoneAction();if(s){try{s=decodeURIComponent(s)}catch(e){}/^URL/.test(s)&&(s=JC.f.urlDetect(s)),JC.f.reloadPage(s)}},n._model.formPopupCloseMs())},formPopupCloseMs:function(e){var n=this,r=t.popupCloseMs,e=e||n.selector().data(t.Model.GENERIC_SUBMIT_BUTTON);return n.selector().is("[formPopupCloseMs]")&&(r=this.intProp("formPopupCloseMs")||r),e&&(e=$(e)).length&&(r=n.intProp(e,"formPopupCloseMs")||r),r},formAjaxDoneAction:function(){var e=this,n="",r=e.selector().data(t.Model.GENERIC_SUBMIT_BUTTON);return e.selector().is("[formAjaxDoneAction]")&&(n=this.attrProp("formAjaxDoneAction")||n),r&&(r=$(r)).length&&(n=e.attrProp(r,"formAjaxDoneAction")||n),JC.f.urlDetect(n)},formBeforeProcess:function(){return this.callbackProp("formBeforeProcess")},formAfterProcess:function(){return this.callbackProp("formAfterProcess")},formProcessError:function(){var e=this.callbackProp("formProcessError")||t.processErrorCb;return e},formResetCallback:function(){return this.callbackProp("formResetCallback")},prevent:function(e){return e&&e.preventDefault(),!1},formConfirmPopupType:function(e){var t=this.stringProp("formConfirmPopupType")||"dialog";return e&&(e=$(e)).length&&e.is("[formConfirmPopupType]")&&(t=e.attr("formConfirmPopupType")),t.toLowerCase()},formResetUrl:function(){var e=this,n=e.stringProp("formResetUrl"),r=e.selector().data(t.Model.GENERIC_RESET_BUTTON);return r&&(r=$(r)).length&&(n=e.attrProp(r,"formResetUrl")||n),JC.f.urlDetect(n)},formSubmitConfirm:function(e){var t=this.stringProp("formSubmitConfirm");return e&&(e=$(e)).length&&e.is("[formSubmitConfirm]")&&(t=this.stringProp(e,"formSubmitConfirm")),!t&&(t="确定要提交吗?"),t.trim()},formResetConfirm:function(e){var t=this.stringProp("formResetConfirm");return e&&(e=$(e)).length&&e.is("[formResetConfirm]")&&(t=this.stringProp(e,"formResetConfirm")),!t&&(t="确定要重置吗?"),t.trim()},datavalidFormLogicMsg:function(e){var t="需要AJAX验证后才能提交, 请重试...";return t=$(e).attr("datavalidFormLogicMsg")||t,t}}),JC.f.extendObject(t.View.prototype,{initQueryVal:function(){var e=this;if(e._model.formType()!=t.Model.GET)return;JC.FormFillUrl&&JC.FormFillUrl.init(e._model.selector())},reset:function(e){var t=this,n=t._model.formResetUrl();n&&JC.f.reloadPage(n),t._model.resetTimeout&&clearTimeout(t._model.resetTimeout),t._model.resetTimeout=setTimeout(function(){var e=t._model.selector();e.find("input[type=text], input[type=password], input[type=file], textarea").each(function(){if($(this).attr("ignoreResetClear"))return;$(this).val("")}),e.find("select").each(function(){if($(this).attr("ignoreResetClear"))return;var e=$(this),t=e.find("option");t.length>1&&e.val($(t[0]).val());var n=e.is("[ignoreprocess]");e.attr("ignoreprocess",!0),e.trigger("change"),setTimeout(function(){!n&&e.removeAttr("ignoreprocess")},500)}),JC.Valid&&JC.Valid.clearError(e)},50),JC.hideAllPopup(1)},dataValidError:function(){var e=this;$.each(this._model.dataValidItems(),function(t,n){var r=n.val().trim(),i=n.attr("datavalid");if(!r||!i)return;if(JC.f.parseBool(i))return;return e._model.showDataValidError(n)&&(JC.Dialog.msgbox(e._model.datavalidFormLogicMsg(n),2),JC.f.safeTimeout(function(){n.trigger("blur")},n,"FORMLOGIC_DATAVALID",10)),!1})}}),$(document).delegate("input[formSubmitConfirm], button[formSubmitConfirm]","click",function(e){var n=$(this),r=JC.f.getJqParent(n,"form"),i=t.getInstance(r),s;if(r&&r.length){if(i){r.data(t.Model.SUBMIT_CONFIRM_BUTTON,null);if(n.is("[formConfirmCheckSelector]")){s=JC.f.parentSelector(n,n.attr("formConfirmCheckSelector"));if(!s||!s.length)return}else if(n.is("[formConfirmCheckCallback]")){s=window[n.attr("formConfirmCheckCallback")];if(s&&!s.call(r,n,e,i))return}}r.data(t.Model.SUBMIT_CONFIRM_BUTTON,n)}}),$(document).delegate("input[formResetConfirm], button[formResetConfirm]","click",function(e){var n=$(this),r=JC.f.getJqParent(n,"form");r&&r.length&&r.data(t.Model.RESET_CONFIRM_BUTTON,n)}),$(document).delegate("input[type=reset], button[type=reset]","click",function(e){var n=$(this),r=JC.f.getJqParent(n,"form");r&&r.length&&r.data(t.Model.GENERIC_RESET_BUTTON,n)}),$(document).delegate("input[type=submit], button[type=submit]","click",function(e){var n=$(this),r=JC.f.getJqParent(n,"form");r&&r.length&&r.data(t.Model.GENERIC_SUBMIT_BUTTON,n)}),$(document).delegate("input[buttonClickBindSelector], button[buttonClickBindSelector]","click",function(e){var t=$(this),n=JC.f.parentSelector(t,t.attr("buttonClickBindSelector"));if(!n||!n.length)return;n.val(t.val()||"")}),$(document).delegate("a[buttonReturnUrl], input[buttonReturnUrl], button[buttonReturnUrl]","click",function(e){var t=$(this),n=t.attr("buttonReturnUrl").trim(),r=t.is("[returnConfirm]")?t.attr("returnConfirm"):"",i=t.is("[popuptype]")?t.attr("popuptype"):"confirm",s=parseInt(t.is("[popupstatus]")?t.attr("popupstatus"):"2",10),o;if(!n)return;n=JC.f.urlDetect(n),t.prop("nodeName").toLowerCase()=="a"&&e.preventDefault();if(r){switch(i){case"dialog.confirm":o=JC.Dialog.confirm(r,s);break;default:o=JC.confirm(r,t,s)}o.on("confirm",function(){JC.f.reloadPage(n)})}else JC.f.reloadPage(n)}),t.frameTpl='<iframe src="about:blank" id="{0}" name="{0}" frameborder="0" class="BFLIframe" style="display:none;"></iframe>',$(document).ready(function(){setTimeout(function(){t.autoInit&&t.init($(document))},1)}),Bizs.FormLogic})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);