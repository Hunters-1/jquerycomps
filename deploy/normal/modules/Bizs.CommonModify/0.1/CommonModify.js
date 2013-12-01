(function(e,t){e(["JC.BaseMVC"],function(){return function(e){function t(n){n&&(n=e(n));if(t._instance)return t._instance;t._instance||(t._instance=this),this._model=new t.Model(n),this._view=new t.View(this._model),this._init(),n&&n.length&&this.process(n)}window.Bizs=window.Bizs||{},window.Bizs.CommonModify=t,t.prototype={_beforeInit:function(){JC.log("CommonModify _beforeInit",(new Date).getTime())},_initHanlderEvent:function(){var e=this;return e.on("add",function(t,n,r){e._model.cmaddcallback()&&e._model.cmaddcallback().call(e.selector(),e,n,e._model.cmitem(),r)}),e.on("del",function(t,n,r){e._model.cmdelcallback()&&e._model.cmdelcallback().call(e.selector(),e,r)}),e.on("done",function(t,n,r){e._model.cmdonecallback()&&e._model.cmdonecallback().call(e.selector(),e,r)}),e},_inited:function(){JC.log("CommonModify _inited",(new Date).getTime())},selector:function(){return this._model.selector()},on:function(t,n){return e(this).on(t,n),this},trigger:function(t,n){return e(this).trigger(t,n),this},process:function(t){if(!t||!(t=e(t)).length)return this;this._model.selector(t);switch(this._model.action()){case"del":this._view.del();break;default:this._view.add()}},cmitem:function(){return this._model.cmitem()}},t.getInstance=function(){return!t._instance&&(t._instance=new t),t._instance},t._instance=null,t.isCommonModify=function(t){var n;return t&&(t=e(t)).length&&(n=t.is("[CommonModifylayout]")),n},t.doneCallback=null,t.tplFilterCallback=null,t.beforeAddCallback=null,t.addCallback=null,t.beforeDelCallabck=null,t.delCallback=null,BaseMVC.buildModel(t),t.Model.prototype={init:function(){return this},selector:function(t){return t&&(t=e(t))&&(this._selector=t),this._selector},layout:function(){},action:function(){var e="add",t;return(t=this.selector().attr("cmaction"))&&(e=t.toLowerCase()),e},cmtemplate:function(){var e="",t;return t=JC.f.parentSelector(this.selector(),this.selector().attr("cmtemplate")),(!t||!t.length)&&(t=JC.f.parentSelector(this.selector(),this.selector().attr("cmtpl"))),this.selector()&&t&&t.length&&(e=JC.f.scriptContent(t)),e},cmdonecallback:function(){var e=t.doneCallback,n;return this.selector()&&(n=this.selector().attr("cmdonecallback"))&&(n=window[n])&&(e=n),e},cmtplfiltercallback:function(){var e=t.tplFilterCallback,n;return this.selector()&&(n=this.selector().attr("cmtplfiltercallback"))&&(n=window[n])&&(e=n),e},cmAddedItemsSelector:function(){var e=this.selectorProp("cmAddedItemsSelector");return e},cmMaxItems:function(){var e=this.intProp("cmMaxItems");return e},cmOutRangeMsg:function(){var e=JC.f.printf(this.attrProp("cmOutRangeMsg")||"最多只能上传 {0}个文件!",this.cmMaxItems());return e},cmaddcallback:function(){var e=t.addCallback,n;return this.selector()&&(n=this.selector().attr("cmaddcallback"))&&(n=window[n])&&(e=n),e},cmdelcallback:function(){var e=t.delCallback,n;return this.selector()&&(n=this.selector().attr("cmdelcallback"))&&(n=window[n])&&(e=n),e},cmbeforeaddcallabck:function(){var e=t.beforeAddCallback,n;return this.selector()&&(n=this.selector().attr("cmbeforeaddcallabck"))&&(n=window[n])&&(e=n),e},cmbeforedelcallback:function(){var e=t.beforeDelCallabck,n;return this.selector()&&(n=this.selector().attr("cmbeforedelcallback"))&&(n=window[n])&&(e=n),e},cmitem:function(){var e,t;return this.selector()&&(t=this.selector().attr("cmitem"))&&(e=JC.f.parentSelector(this.selector(),t)),e},cmappendtype:function(){var e=this.selector().attr("cmappendtype")||"after";return e}},BaseMVC.buildView(t),t.View.prototype={init:function(){return this},add:function(){JC.log("Bizs.CommonModify view add",(new Date).getTime());var t=this,n=t._model.cmtemplate(),r=t._model.cmitem(),i=r.parent(),s,o=t._model.cmMaxItems(),u=t._model.cmAddedItemsSelector();if(o&&u&&u.length&&u.length>=o){var a=t._model.cmOutRangeMsg();JC.msgbox?JC.msgbox(a,t._model.selector(),2):alert(a);return}if(t._model.cmbeforeaddcallabck()&&t._model.cmbeforeaddcallabck().call(t._model.selector(),r,i)===!1)return;t._model.cmtplfiltercallback()&&(n=t._model.cmtplfiltercallback().call(t._model.selector(),n,r,i)),n=n.replace(/<([\d]+)>/g,"{$1}"),JC.log("_item:",r,r.length);if(!(n&&r&&r.length))return;s=e(n);switch(t._model.cmappendtype()){case"appendTo":s.appendTo(r);break;case"before":r.before(s);break;default:r.after(s)}window.JC.f.jcAutoInitComps&&JC.f.jcAutoInitComps(s),e(t).trigger("TriggerEvent",["add",s,i]),e(t).trigger("TriggerEvent",["done",s,i])},del:function(){JC.log("Bizs.CommonModify view del",(new Date).getTime());var t=this,n=t._model.cmitem(),r=n.parent();if(t._model.cmbeforedelcallback()&&t._model.cmbeforedelcallback().call(t._model.selector(),n,r)===!1)return;n&&n.length&&n.remove(),e(t).trigger("TriggerEvent",["del",n,r]),e(t).trigger("TriggerEvent",["done",n,r])}},BaseMVC.build(t),e(document).delegate("a.js_autoCommonModify, button.js_autoCommonModify, a.js_bizsCommonModify, button.js_bizsCommonModify","click",function(n){t.getInstance().process(e(this))})}(jQuery),Bizs.CommonModify})})(typeof define=="function"&&define.amd?define:function(e,t){t&&t()},this);