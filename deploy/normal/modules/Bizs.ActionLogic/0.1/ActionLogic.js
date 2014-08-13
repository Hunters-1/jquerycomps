(function(define,_win){define(["JC.BaseMVC","JC.Panel"],function(){function ActionLogic(e){e&&(e=$(e));if(ActionLogic.getInstance(e))return ActionLogic.getInstance(e);ActionLogic.getInstance(e,this),this._model=new ActionLogic.Model(e),this._view=new ActionLogic.View(this._model),this._init()}return window.Bizs.ActionLogic=ActionLogic,!define.amd&&JC.use&&!JC.Panel&&JC.use("Panel"),ActionLogic.getInstance=function(e,t){typeof e=="string"&&!/</.test(e)&&(e=$(e));if(!e||!e.length||typeof e=="string")return;return typeof t!="undefined"&&e.data("ActionLogicIns",t),e.data("ActionLogicIns")},ActionLogic.isActionLogic=function(e){var t;return e&&(e=$(e)).length&&(t=e.is("[baltype]")),t},ActionLogic.disableButton=function(e,t){e&&(e=$(e));if(!e||!e.length)return;t=t||1e3,e.attr("disabled",!0),JC.f.safeTimeout(function(){e.attr("disabled",!1)},e,"DISABLE_BUTTON",t)},ActionLogic.init=function(e){e&&$(e).find(["a.js_bizsActionLogic","span.js_bizsActionLogic","input.js_bizsActionLogic","button.js_bizsActionLogic"].join()).on("click",function(e){var t=$(this);ActionLogic.process(t)&&t.prop("nodeName").toLowerCase()=="a"&&e.preventDefault()})},ActionLogic.process=function(e){e=$(e);if(!e||!e.length)return null;if(!ActionLogic.isActionLogic(e))return;var t=ActionLogic.getInstance(e);return!t&&(t=new ActionLogic(e)),t&&t.process(),t},ActionLogic.random=!0,ActionLogic.prototype={_beforeInit:function(){},_initHanlderEvent:function(){var e=this;e.on("StaticPanel",function(t,n){e.trigger("ShowPanel",[JC.f.scriptContent(n)])}),e.on(ActionLogic.Model.SHOW_PANEL,function(t,n){n=e._model.unHtmlEntity(n);var r=JC.Dialog(n);r.on("confirm",function(){return e._model.balCallback()&&e._model.balCallback().call(e._model.selector(),r,e)?!0:!1})}),e.on("AjaxPanel",function(t,n,r){if(!n||!r)return;e._model.balRandom()&&(r=JC.f.addUrlParams(r,{rnd:(new Date).getTime()})),$.get(r).done(function(t){switch(n){case ActionLogic.Model.SHOW_PANEL:e.trigger("ShowPanel",[t]);break;case ActionLogic.Model.DATA_PANEL:try{t=$.parseJSON(t)}catch(r){}t&&(t.errorno?e.trigger("ShowError",[t.errmsg||"操作失败, 请重试!",1]):e.trigger("ShowPanel",[t.data]))}})}),e.on("Go",function(t,n){if(!n)return;e._model.balRandom()&&(n=JC.f.addUrlParams(n,{rnd:(new Date).getTime()})),JC.f.reloadPage(n)}),e.on("AjaxAction",function(t,n,r,i){function s(t){e.trigger("AjaxActionDone",[t,n])}if(!n)return;e._model.balRandom()&&(n=JC.f.addUrlParams(n,{rnd:(new Date).getTime()})),i=e._model.balAjaxType()||i,r=r||e._model.balRequestData(),e._model.balRequestData()?$[i](n,r).done(s):$[i](n).done(s)}),e.on("AjaxActionDone",function(t,n,r){try{n=$.parseJSON(n)}catch(i){}if(e._model.balCallback())e._model.balCallback().call(e.selector(),n,e);else if(n&&typeof n!="string"&&"errorno"in n)n.errorno?e.trigger("ShowError",[n.errmsg||"操作失败, 请重试!",1]):n.data&&n.data.balAction&&n.data.balAction.url&&n.data.balAction.msg&&n.data.balAction.type&&n.data.balAction.type.toLowerCase()=="ajaxaction"?e.trigger("AjaxAction_Custom_Confirm",[n]):e.trigger("ShowSuccess",[n.errmsg||"操作完成",function(){e._model.balDoneRemoveSelector()&&e._model.balDoneRemoveSelector().remove(),e._model.balDoneUrl()&&JC.f.reloadPage(e._model.balDoneUrl()||location.href)}]);else{var s=JC.f.printf('服务端错误, 无法解析返回数据: <p class="auExtErr" style="color:red">{0}</p>',n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));JC.Dialog.alert(s,1)}}),e.on("AjaxAction_Custom_Confirm",function(t,n){if(!n)return;e.trigger("ShowConfirm",[n.data.balAction.msg,2,function(){e.trigger("AjaxAction",[n.data.balAction.url,n.data.balAction.ajaxData,n.data.balAction.ajaxMethod])},function(){var t=e._model.balDoneUrl();t=n.data.balAction.returnurl||t,t&&(location.href=t)},function(e){n.data.balAction.btnText&&$.each(n.data.balAction.btnText,function(t,n){e.find(JC.f.printf("button[eventtype={0}]",t)).html(n)})}])}),e.on("RemoveElementAction",function(t){var n=e._model.balDoneRemoveSelector();if(e.selector().is("[balDoneRemoveSelector]")){e._model.balDoneBeforeRemoveCallback()&&n&&n.length&&e._model.balDoneBeforeRemoveCallback().call(e.selector(),n,e);try{n.remove()}catch(r){}}else e.selector().remove()}),e.on("ShowError",function(t,n,r,i){var s;switch(e._model.balErrorPopupType()){case"alert":s=JC.alert(n,e._model.selector(),r||1),i&&s.on("confirm",function(){i()});break;case"msgbox":s=JC.msgbox(n,e._model.selector(),r||1),i&&s.on("close",function(){i()});break;case"dialog.msgbox":s=JC.Dialog.msgbox(n,r||1),i&&s.on("close",function(){i()});break;default:s=JC.Dialog.alert(n,r||1),i&&s.on("confirm",function(){i()})}}),e.on("ShowConfirm",function(t,n,r,i,s,o){var u;switch(e._model.balConfirmPopupType()){case"dialog.confirm":u=JC.Dialog.confirm(n,r||1),i&&u.on("confirm",function(){i()}),s&&u.on("cancel",function(){s()}),o&&o(u);break;default:u=JC.confirm(n,e._model.selector(),r||1),i&&u.on("confirm",function(){i()}),s&&u.on("cancel",function(){s()}),o&&o(u)}}),e.on("ShowSuccess",function(t,n,r){var i;if(e._model.balIgnoreSuccess()){r&&r();return}switch(e._model.balSuccessPopupType()){case"alert":i=JC.alert(n,e._model.selector()),r&&i.on("confirm",function(){r()});break;case"dialog.alert":i=JC.Dialog.alert(n),r&&i.on("confirm",function(){r()});break;case"dialog.msgbox":i=JC.Dialog.msgbox(n),r&&i.on("close",function(){r()});break;default:i=JC.msgbox(n,e.selector()),r&&i.on("close",function(){r()})}})},process:function(){var e=this;JC.hideAllPopup(1);switch(e._model.baltype()){case"panel":e._model.is("[balPanelTpl]")?e.trigger("StaticPanel",[e._model.balPanelTpl()]):e._model.is("[balAjaxHtml]")?e.trigger("AjaxPanel",[ActionLogic.Model.SHOW_PANEL,e._model.balAjaxHtml()]):e._model.is("[balAjaxData]")&&e.trigger("AjaxPanel",[ActionLogic.Model.DATA_PANEL,e._model.balAjaxData()]);break;case"link":e._model.is("[balConfirmMsg]")?e.trigger("ShowConfirm",[e._model.balConfirmMsg(),2,function(){e.trigger("Go",e._model.balUrl())}]):e.trigger("Go",e._model.balUrl());break;case"ajaxaction":if(e._model.is("[balConfirmMsg]")){var t=JC.confirm(e._model.balConfirmMsg(),e.selector(),2);t.on("confirm",function(){e.trigger("AjaxAction",e._model.balUrl())})}else e.trigger("AjaxAction",e._model.balUrl());break;case"remove_element":if(e._model.is("[balConfirmMsg]")){var t=JC.confirm(e._model.balConfirmMsg(),e.selector(),2);t.on("confirm",function(){e.trigger("RemoveElementAction")})}else e.trigger("RemoveElementAction");break;case"ec":var n=e._model.balTarget();if(!n)return;n.is(":visible")?(n.hide(),e.selector().html(e._model.balExpandWord()).addClass(e._model.balExpandClass()).removeClass(e._model.balContractClass())):(n.show(),e.selector().html(e._model.balContractWord()).addClass(e._model.balContractClass()).removeClass(e._model.balExpandClass()));case"hit_value":var n=e._model.balTarget();if(!n)return;n.val(e._model.balValue())}return this}},JC.BaseMVC.buildModel(ActionLogic),ActionLogic.Model.SHOW_PANEL="ShowPanel",ActionLogic.Model.DATA_PANEL="DataPanel",ActionLogic.Model.prototype={init:function(){},balTarget:function(){var e;return this.is("[balTarget]")&&(e=this.selectorProp("balTarget")),e},balValue:function(){return this.attrProp("balValue")||""},balExpandWord:function(){return this.attrProp("balExpandWord")||"展开"},balExpandClass:function(){return this.attrProp("balExpandClass")||"js_ecExpand"},balContractWord:function(){return this.attrProp("balContractWord")||"收起"},balContractClass:function(){return this.attrProp("balContractClass")||"js_ecContract"},unHtmlEntity:function(e){var t=this.boolProp("balUnHtmlEntity");return t&&e&&$.isArray(e)&&(e=e.join(""))&&(e=e.replace(/\&gt;/g,">").replace(/\&amp;/g,"&").replace(/\&lt;/g,"<").replace(/\&quot;/g,'"').replace(/\&nbsp;/g," ")),e},baltype:function(){return this.stringProp("baltype")},balPanelTpl:function(){var e,t=this;return e=t.selectorProp("balPanelTpl")||e,e},balCallback:function(){var e,t=this;return e=t.callbackProp("balCallback")||e,e},balAjaxHtml:function(){return this.selector().attr("balAjaxHtml")},balAjaxData:function(){return this.selector().attr("balAjaxData")},balRandom:function(){var e=ActionLogic.random,t=this;return t.is("[balRandom]")&&(e=JC.f.parseBool(t.stringProp("balRandom"))),e},balRequestData:function(){var _r;if(this.attrProp("balRequestData")){_r=eval("("+this.attrProp("balRequestData")+")");try{}catch(ex){}}return _r},balAjaxType:function(){var e="get";return this.balRequestData()&&(e="post"),e=this.attrProp("balAjaxType")||e,e},balUrl:function(){var e="?",t=this;return t.selector().prop("nodeName").toLowerCase()=="a"&&(e=t.selector().attr("href")),t.is("[balUrl]")&&(e=t.selector().attr("balUrl")),JC.f.urlDetect(e)},balDoneUrl:function(){var e=this.attrProp("balDoneUrl");return JC.f.urlDetect(e)},balDoneRemoveSelector:function(){return this.selectorProp("balDoneRemoveSelector")},balDoneBeforeRemoveCallback:function(){return this.callbackProp("balDoneBeforeRemoveCallback")},balConfirmMsg:function(){var e="确定要执行吗?";return e=this.selector().attr("balConfirmMsg")||e,e},balErrorPopupType:function(){var e=this.stringProp("balErrorPopupType")||"dialog";return e},balSuccessPopupType:function(){var e=this.stringProp("balSuccessPopupType")||"msgbox";return e},balConfirmPopupType:function(){var e=this.stringProp("balConfirmPopupType")||"confirm";return e},balIgnoreSuccess:function(){return this.boolProp("balIgnoreSuccess")}},JC.BaseMVC.buildView(ActionLogic),ActionLogic.View.prototype={init:function(){}},JC.BaseMVC.build(ActionLogic),$(document).ready(function(){$(document).delegate(["a.js_bizsActionLogic","span.js_bizsActionLogic","input.js_bizsActionLogic","button.js_bizsActionLogic"].join(),"click",function(e){var t=$(this);ActionLogic.process(t)&&t.prop("nodeName").toLowerCase()=="a"&&e.preventDefault()})}),Bizs.ActionLogic})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);