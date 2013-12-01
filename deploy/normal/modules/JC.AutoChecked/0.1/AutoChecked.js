(function(e,t){e(["JC.common"],function(){return function(e){function t(i){i=e(i);if(!i||!i.length)return;if(i.prop("nodeName").toLowerCase()!="input")return t.init(i);if(t.getInstance(i))return t.getInstance(i);t.getInstance(i,this),JC.log("AutoChecked init",(new Date).getTime()),this._model=new n(i),this._view=new r(this._model),this._init()}function n(e){this._selector=e}function r(e){this._model=e}window.JC=window.JC||{log:function(){}},JC.Form&&(JC.Form.initCheckAll=t),JC.AutoChecked=t,t.init=function(n){n=e(n);if(!n||!n.length)return;var r=n.find("input[type=checkbox][checktype][checkfor]"),i;r.each(function(){i=e(this);if(!t.isAutoChecked(i))return;if(t.getInstance(i)){t.getInstance(i).update();return}new t(i)})},t.prototype={_init:function(){var t=this;return t._initHandlerEvent(),e([t._view,t._model]).on("BindEvent",function(e,n,r){t.on(n,r)}),e([t._view,t._model]).on("TriggerEvent",function(e,n){var r=JC.f.sliceArgs(arguments);r.shift(),r.shift(),t.trigger(n,r)}),t._model.init(),t._view.init(),t._view.itemChange(),t},_initHandlerEvent:function(){var n=this;n.selector().on("change",function(){n.trigger(n._model.checktype())}),n.on("all",function(){JC.log("AutoChecked all",(new Date).getTime()),n._view.allChange()}),n.on("inverse",function(){JC.log("AutoChecked inverse",(new Date).getTime()),n._view.inverseChange()}),(n._model.checktype()!="inverse"||!n._model.hasCheckAll())&&e(n._model.delegateElement()).delegate(n._model.delegateSelector(),"click",function(r){if(t.isAutoChecked(e(this)))return;JC.log("AutoChecked change",(new Date).getTime()),n._view.itemChange()})},update:function(){return this._view.itemChange(),this},selector:function(){return this._model.selector()},on:function(t,n){return e(this).on(t,n),this},trigger:function(t,n){return e(this).trigger(t,n),this}},t.getInstance=function(t,n){typeof t=="string"&&!/</.test(t)&&(t=e(t));if(!t||!t.length||typeof t=="string")return;return typeof n!="undefined"&&t.data("AutoCheckedIns",n),t.data("AutoCheckedIns")},t.isAutoChecked=function(t){var n;return t&&(t=e(t)).length&&(n=t.is("[checkfor]")&&t.is("[checktype]")),n},n.isParentSelectorRe=/^[\/\|<\(]/,n.parentSelectorRe=/[^\/\|<\(]/g,n.childSelectorRe=/[\/\|<\(]/g,n.parentNodeRe=/^[<\(]/,n.prototype={init:function(){return this},checktype:function(){return(this.selector().attr("checktype")||"").toLowerCase()},checkfor:function(){return this.selector().attr("checkfor")||""},checkall:function(){return this.selector().attr("checkall")||""},checktrigger:function(){return this.selector().attr("checktrigger")||""},hasCheckAll:function(){return this.selector().is("[checkall]")&&this.selector().attr("checkall")},selector:function(){return this._selector},isParentSelector:function(){return n.isParentSelectorRe.test(this.selector().attr("checkfor"))},delegateSelector:function(){var e=this.selector().attr("checkfor"),t;return this.isParentSelector()&&(n.parentNodeRe.test(this.checkfor())?this.checkfor().replace(/[\s]([\s\S]+)/,function(t,n){e=n}):e=this.checkfor().replace(n.childSelectorRe,"")),e},delegateElement:function(){var t=this,r=e(document),i;return this.isParentSelector()&&(n.parentNodeRe.test(this.checkfor())?this.checkfor().replace(/^([^\s]+)/,function(e,n){r=JC.f.parentSelector(t.selector(),n)}):(i=this.checkfor().replace(n.parentSelectorRe,""),r=JC.f.parentSelector(t.selector(),i))),r},items:function(){return this.delegateElement().find(this.delegateSelector())},checkedAll:function(){return this.selector().prop("checked")},checkedInverse:function(){return this.selector().prop("checked")},allSelector:function(){var e;return this.checktype()=="inverse"?this.checkall()&&(e=JC.f.parentSelector(this.selector(),this.checkall())):e=this.selector(),e}},r.prototype={init:function(){return this},itemChange:function(){switch(this._model.checktype()){case"all":this._fixAll()}},allChange:function(){var n=this,r=n._model.checkedAll();n._model.items().each(function(){var i=e(this);if(t.isAutoChecked(i))return;if(i.is("[disabled]"))return;i.prop("checked",r),n.triggerEvent(i)})},inverseChange:function(){var n=this;n._model.items().each(function(){var r=e(this);if(t.isAutoChecked(r))return;if(r.is("[disabled]"))return;r.prop("checked",!r.prop("checked")),n.triggerEvent(r)}),this._fixAll()},_fixAll:function(){var n=this,r=!0,i=0;if(n._model.allSelector().prop("disabled"))return;n._model.items().each(function(){if(t.isAutoChecked(e(this)))return;if(e(this).is("[disabled]"))return;i++;if(!e(this).prop("checked"))return r=!1}),JC.log("_fixAll:",r),i||(r=!1),n._model.allSelector().prop("checked",r)},triggerEvent:function(t){var n=this,r=n._model.checktrigger();r&&e(t).trigger(r)}},e(document).ready(function(n){t.init(e(document))})}(jQuery),JC.AutoChecked})})(typeof define=="function"&&define.amd?define:function(e,t){t&&t()},this);