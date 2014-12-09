(function(b,a){b(["JC.BaseMVC"],function(){Bizs.MoneyTips=c;JC.f.addAutoInit&&JC.f.addAutoInit(c);function c(d){d&&(d=$(d));if(c.getInstance(d)){return c.getInstance(d)}c.getInstance(d,this);this._model=new c.Model(d);this._view=new c.View(this._model);this._init();JC.log("MoneyTips inited",new Date().getTime())}c.getInstance=function(d,e){if(typeof d=="string"&&!/</.test(d)){d=$(d)}if(!(d&&d.length)||(typeof d=="string")){return}typeof e!="undefined"&&d.data(c.Model._instanceName,e);return d.data(c.Model._instanceName)};c.init=function(d){var e=[];d=$(d||document);if(d&&d.length){if(d.hasClass(".js_bizMoneyTips")){e.push(new c(d))}else{d.find("input.js_bizMoneyTips").each(function(){e.push(new c($(this)))})}}return e};c.format=function(d,e){d&&(d=$(d));e&&(e=$(e));if(!(d&&d.length)){return}d.each(function(){var g=$(this),i,h=JC.f.parentSelector(g,g.attr("bmtFormatOutput")),f=2;g.is("[floatLen]")&&(f=parseInt(g.attr("floatLen"))||0);!(h&&h.length)&&(h=g);e&&e.length&&(h=e);!(h&&h.length)&&(h=g);if("value" in this){i=g.val().trim()}else{i=g.html().trim()}i=i||0;if("value" in h[0]){h.val(JC.f.moneyFormat(i,3,f))}else{h.html(JC.f.moneyFormat(i,3,f))}});return d};c.getFloatLen=function(d){var e=0;d&&(d=$(d));d&&d.length&&d.is("[floatLen]")&&(e=parseInt(d.attr("floatLen"))||0);return e};c.prototype={_beforeInit:function(){},_initHanlderEvent:function(){var d=this;d._model.selector().on("focus blur ",function(e){JC.log("focus or blur",new Date().getTime());d.trigger("BMTUpdate",[d._model.selector().val().trim()])});d._model.selector().bind("input propertychange",function(e){JC.log("input or propertychange",new Date().getTime());d.trigger("BMTUpdate",[d._model.selector().val().trim()])});d.on("BMTUpdate",function(g,j){var i=j,j=JC.f.parseFinance(i),f,h=2,e=d.selector().attr("datatype");e.replace(/n\-[\d]+\.([\d]+)/,function(l,k){h=parseInt(k)||h});if(d.selector().is("[floatLen]")){h=c.getFloatLen(d.selector())}if(isNaN(j)||!j){d._view.update();return}!j&&(j=0);f=JC.f.moneyFormat(i,3,h);d._view.update(f)})},_inited:function(){var d=this;d.trigger("BMTUpdate",[d._model.selector().val().trim()])},update:function(d){this.trigger("BMTUpdate",[d||""]);return this}};BaseMVC.buildModel(c);c.Model._instanceName="MoneyTips";c.Model.prototype={init:function(){},bmtDisplayLabel:function(){this._bmtDisplayLabel=this._bmtDisplayLabel||this.selectorProp("bmtDisplayLabel");if(!(this._bmtDisplayLabel&&this._bmtDisplayLabel.length)){this._bmtDisplayLabel=$('<span class="js_bmtSpan"></span>');this.selector().after(this._bmtDisplayLabel)}return this._bmtDisplayLabel},bmtPattern:function(){var d=this.attrProp("bmtPattern")||"{0}";return d}};BaseMVC.buildView(c);c.View.prototype={init:function(){},show:function(){this._model.bmtDisplayLabel().show()},hide:function(){this._model.bmtDisplayLabel().hide()},update:function(e){var d=this;if(!e){d.hide()}else{d._model.bmtDisplayLabel().html(JC.f.printf(d._model.bmtPattern(),e));d.show()}}};BaseMVC.build(c,"Bizs");$(document).ready(function(){var d=0;c.autoInit&&(d=c.init())&&c.format($("span.js_bmtLabel, label.js_bmtLabel"))});$(document).delegate("input.js_bizMoneyTips","focus click",function(d){!c.getInstance($(this))&&new c($(this))});return Bizs.MoneyTips})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));