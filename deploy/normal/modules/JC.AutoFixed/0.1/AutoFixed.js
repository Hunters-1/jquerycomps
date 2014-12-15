(function(e,t){e(["JC.BaseMVC"],function(){function n(e){e&&(e=$(e));if(JC.BaseMVC.getInstance(e,n))return JC.BaseMVC.getInstance(e,n);JC.BaseMVC.getInstance(e,n,this),this._model=new n.Model(e),this._view=new n.View(this._model),this._init()}var e=$(document),t=$(window);return JC.AutoFixed=n,n.init=function(e){var t=[];return e=$(e||document),e.length&&(e.hasClass("js_compAutoFixed")?t.push(new n(e)):e.find("div.js_compAutoFixed").each(function(){t.push(new n(this))})),t},n.INIT_DELAY=0,JC.BaseMVC.build(n),JC.f.extendObject(n.prototype,{_beforeInit:function(){},_initHanlderEvent:function(){var e=this;e.on("inited",function(){var t=JDOC.scrollTop(),n=e._model.defaultStyle().top;JDOC.scrollTop()>0&&(JC.dir(e._model.defaultStyle()),e.trigger("UPDATE_POSITION",[t,n]))}),e._model.saveDefault(),JWIN.on("scroll",function(t){var n=JDOC.scrollTop(),r=e._model.defaultStyle().gtop;e.trigger("UPDATE_POSITION",[n,r])}),JWIN.on("resize",function(t){var n=e._model.cloneItem(),r,i,s,o;if(!n)e._model.normalClass()&&e.selector().removeClass(e._model.normalClass())&&e.selector().addClass(e._model.normalClass()),r=e.selector().width();else{s=e._model.defaultStyle(),o=JC.f.winSize(),i=s.height,i+e._model.fixedTopPx()>o.height&&(i=o.height-e._model.fixedTopPx());if(e._model.defaultStyle().right!="auto"){e.selector().css({right:JC.f.winSize().width-(n.offset().left+n.width()),height:i});return}r=n.width(),e.selector().css({width:r,height:i})}e._model.defaultStyle().width=r}),e.on("UPDATE_POSITION",function(t,n,r){n>r-e._model.fixedTopPx()?e.trigger("FIXED",[n,r]):e.trigger("UN_FIXED",[n,r])}),e.on("FIXED",function(t,n,r){var i=e._model.defaultStyle(),s=0,o,u=JC.f.winSize(),a,f;if(e._model.cloneItem())return;if(e._model.fixedLock())return;e._model.fixedLock(!0),e._model.unfixedLock(!1),JC.log("FIXED",n,r),i.left!=i.gleft?s=i.gleft:s=i.left,a=i.height,a+e._model.fixedTopPx()>u.height&&(a=u.height-e._model.fixedTopPx()),e.trigger("CLONE_ITEM"),f=e._model.cloneItem(),o={position:"fixed",top:e._model.fixedTopPx(),height:a,width:i.width},i.right!="auto"?o.right=u.width-(f.offset().left+f.width()):o.left=s,e.selector().css(o),e._model.normalClass()&&e.selector().removeClass(e._model.normalClass()),e._model.fixedClass()&&e.selector().addClass(e._model.fixedClass())}),e.on("UN_FIXED",function(t,n,r){if(e._model.unfixedLock())return;e._model.unfixedLock(!0),e._model.fixedLock(!1);var i=e._model.defaultStyle(),s;JC.log("UN_FIXED",n,r),e.trigger("UN_CLONE_ITEM"),s={position:i.position,top:i.top,height:i.height},i.right!="auto"?s.right=i.right:s.left=i.left,e.selector().css(s),e._model.fixedClass()&&e.selector().removeClass(e._model.fixedClass()),e._model.normalClass()&&e.selector().addClass(e._model.normalClass())}),e.on("CLONE_ITEM",function(){if(e._model.cloneItem())return;var t=$("<div />"),n=e._model.defaultStyle();t.css({visibility:"hidden",height:n.height,overflow:"hidden",position:n.position,right:n.right,width:n.width}),e._model.cloneItemClass()&&t.addClass(e._model.cloneItemClass()),t.html(""),e._model.cloneItem(t),e.selector().after(t)}),e.on("UN_CLONE_ITEM",function(){e._model.cloneItem(null)})},_inited:function(){this.trigger("inited")}}),n.Model._instanceName="JCAutoFixed",JC.f.extendObject(n.Model.prototype,{init:function(){},defaultStyle:function(){var e={position:"static",left:0,top:0,right:0,bottom:0,width:0,height:0,gleft:0,gtop:0,winSize:JC.f.winSize()};return this._defaultStyle||e},fixedLock:function(e){return typeof e!="undefined"&&(this._fixedLock=e),this._fixedLock},unfixedLock:function(e){return typeof e!="undefined"&&(this._unfixedLock=e),this._unfixedLock},saveDefault:function(){var e=this,t=e.defaultStyle(),n=e.selector().position(),r=e.selector().offset();t.owidth=e.selector().css("width"),t.gleft=r.left,t.gtop=r.top,t.position=e.selector().css("position"),t.left=n.left,t.top=n.top,t.width=e.selector().width(),t.height=e.selector().height(),t.right=e.selector().css("right"),t.bottom=e.selector().css("bottom"),e._defaultStyle=t},fixedTopPx:function(){return typeof this._fixedTopPx=="undefined"&&(this._fixedTopPx=this.floatProp("data-fixedTopPx")),this._fixedTopPx},fixedClass:function(){return this.attrProp("data-fixedClass")},normalClass:function(){return this.attrProp("data-normalClass")},cloneItemClass:function(){return this.attrProp("data-cloneItemClass")},cloneItem:function(e){return typeof e!="undefined"&&(!e&&this._cloneItem&&this._cloneItem.remove(),this._cloneItem=e),this._cloneItem}}),JC.f.extendObject(n.View.prototype,{init:function(){}}),e.ready(function(){JC.f.safeTimeout(function(){JC.AutoFixed.INIT_DELAY?JC.f.safeTimeout(function(){n.autoInit&&n.init()},null,"AutoFixedasdfasefasedf",JC.AutoFixed.INIT_DELAY):n.autoInit&&n.init()},null,"AutoFixed23asdfa",1)}),JC.AutoFixed})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);