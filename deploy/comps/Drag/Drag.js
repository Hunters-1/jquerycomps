(function(b,a){b(["JC.BaseMVC"],function(){JC.Drag=d;JC.f.addAutoInit&&JC.f.addAutoInit(d);var i=$(document),h=$(window);function d(j){j&&(j=$(j));if(JC.BaseMVC.getInstance(j,d)){return JC.BaseMVC.getInstance(j,d)}JC.BaseMVC.getInstance(j,d,this);this._model=new d.Model(j);this._view=new d.View(this._model);this._init()}JC.BaseMVC.build(d);JC.f.extendObject(d.prototype,{_beforeInit:function(){},_initHanlderEvent:function(){var j=this;j.on(d.Model.DRAG_INITED,function(k){j._model.defaultCSSPosition(j._model.dragTarget().css("position"));j._model.defaultCSSZIndex(j._model.dragTarget().css("z-index"));j._model.defaultCSSCursor(j._model.dragTarget().css("cursor"));j._model.selector().css({cursor:"move"});j._model.dragInitedCb()&&j._model.dragInitedCb().call(j,j.selector(),j.dragTarget());j.notification("DRAG_INITED",[j,j.selector(),j.dragTarget()])});j.on("INIT_INDEX",function(){if(!j._model.dropPush()){return}var k=j._model.dropFor(true);if(!(k&&k.length)){return}JC.log(k.length);k.each(function(m,l){$(l).data("dragIndex",m)})});j.selector().on("mousedown",function(l,k){l=k||l;j._model._selectedDropBox=null;if(j._model.boolProp(d.Model.DISABLE_DRAG)){return}if(j._model.boolProp(d.Model.IGNORE_DRAG)){return}if(j._model.dropPush()){}d.cleanDragData();if(j._model.dragBeforeCb()&&j._model.dragBeforeCb().call(j,j._model.dragTarget(),j.selector())===false){return}if(j.notificationHandler("DRAG_BEFORE",[j,j.selector(),j._model.dragTarget(),j._model.dragMovingTarget()])===false){return}j.notification("DRAG_DOWN");j.trigger(d.Model.DRAG_BEFORE);j._model.relativeParent(true);j._model.isDropFor()&&(j._model.dragMovingTarget(true),j._model.dropFor(true));d.dragInfo(j,l);j.trigger(d.Model.DRAG_BEGIN,[l,d.dragInfo()]);i.off("mouseup",d.defaultMouseUp);i.off("mousemove",d.defaultMouseMove);h.off("scroll",d.defaultScroll);i.on("mouseup",d.defaultMouseUp);i.on("mousemove",d.defaultMouseMove);h.on("scroll",d.defaultScroll);return false});j.selector()[0].onselectstart=function(){return false};j.on(d.Model.DRAG_BEFORE,function(k){});j.on(d.Model.DRAG_BEGIN,function(k,l){j._model.dragTarget().css("z-index",window.ZINDEX_COUNT++);d.draggingItem(j._model.dragTarget());j._model.dragBeginCb()&&j._model.dragBeginCb().call(j,j.selector(),j._model.dragTarget(),j._model.dragMovingTarget());j.notification("DRAG_BEGIN",[j,j.selector(),j._model.dragTarget(),j._model.dragMovingTarget()])});j.on(d.Model.DRAG_DONE,function(k,l){j._view.dropDone(l);j._view.clean(l);j._model.clean(l);d.draggingItem(null);j._model.dragDoneCb()&&j._model.dragDoneCb().call(j,j.selector(),j._model.dragTarget());j.notification("DRAG_DONE",[j,j.selector(),j._model.dragTarget()]);j._model.dragTarget().removeClass(d.Model.CLASS_CURRENT_DRAG_ITEM);j.trigger(d.Model.DRAG_AFTER);d.cleanDragData()});j.on(d.Model.DRAGGING_MOVING,function(n,o,m,k,l){j._model.dragMovingCb()&&j._model.dragMovingCb().call(j,j.selector(),j.dragTarget(),j.dragMovingTarget(),o,m,k);j.notification("DRAG_MOVING",[j,j.selector(),j.dragTarget(),j.dragMovingTarget(),o,m,k])});j.on(d.Model.DRAG_AFTER,function(k){j._model.dragAfterCb()&&j._model.dragAfterCb().call(j,j._model.dragTarget(),j.selector());j.notification("DRAG_AFTER",[j,j._model.dragTarget(),j.selector()])});j.on(d.Model.TRIGGER_DRAG,function(l,k){j.selector().trigger("mousedown",[k||l])})},_inited:function(){this.trigger(d.Model.DRAG_INITED)},dragTarget:function(){return this._model.dragTarget()},dragMovingTarget:function(){return this._model.dragMovingTarget()},dragIn:function(){return this._model.dragIn()},_updatePosition:function(){this._view.updatePosition.apply(this._view,JC.f.sliceArgs(arguments));return this}});d.init=function(j){var k=[];j=$(j||document);if(j&&j.length){if(j.hasClass("js_compDrag")){!j.is("["+d.Model.IGNORE_DRAG+"]")&&k.push(new d(j))}else{j.find("div.js_compDrag, button.js_compDrag").each(function(){!j.is("["+d.Model.IGNORE_DRAG+"]")&&k.push(new d(this))})}}return k};d.dragInfo=function(k,j){if(k&&j){d._dragInfo={ins:k,evt:j,offset:k._model.position(j)}}return d._dragInfo};d.draggingItem=function(j){if(typeof j!="undefined"){d._draggingItem&&d._draggingItem.data(d.Model.DRAGGING_ITEM,false);j&&j.data(d.Model.DRAGGING_ITEM,true);d._draggingItem=j}return d._draggingItem};d.cleanDragData=function(){i.off("mousemove",d.defaultMouseMove);i.off("mouseup",d.defaultMouseUp);h.off("scroll",d.defaultScroll);d._dragInfo=null;d.draggingItem(null)};d.defaultMouseMove=function(m){if(!d.dragInfo()){return}var k=d.dragInfo(),j=k.ins,l=k.offset,o,n;if(!j){return}o=m.pageX-l.x;n=m.pageY-l.y;o<=l.minX&&(o=l.minX);n<=l.minY&&(n=l.minY);o>=l.maxX&&(o=l.maxX);n>=l.maxY&&(n=l.maxY);o-=k.offset.relativeFixX;n-=k.offset.relativeFixY;j._updatePosition(o,n,l);j.trigger(d.Model.DRAGGING_MOVING,[o,n,m,l])};d.defaultMouseUp=function(k){var j=d.dragInfo();if(j&&j.ins){j.ins.notification("DRAG_UP");j.ins.trigger(d.Model.DRAG_DONE,j)}d.cleanDragData()};d.defaultScroll=function(j){var k=d.dragInfo();if(!(k&&k.ins)){return}var q=k.ins.dragIn().scrollLeft(),o=k.ins.dragIn().scrollTop(),r=k.ins.dragMovingTarget().position(),p,n,m=q-k.offset.scrollX,l=o-k.offset.scrollY;p=r.left+m;n=r.top+l;p-=k.offset.relativeFixX;n-=k.offset.relativeFixY;k.ins._updatePosition(p,n,r);k.offset.scrollX=q;k.offset.scrollY=o;k.offset.maxX+=m;k.offset.maxY+=l};d.Model._instanceName="JCDragIns";d.Model.DRAG_INITED="JCDragInited";d.Model.DRAG_BEFORE="JCDragBefore";d.Model.DRAG_BEGIN="JCDragBegin";d.Model.DRAG_DONE="JCDragDone";d.Model.DRAG_AFTER="JCDragAfter";d.Model.DRAGGING_ITEM="JCDraggingItem";d.Model.DRAGGING_MOVING="JCDraggingMoving";d.Model.DROP_DONE="JCDropDone";d.Model.DROP_DONE_AFTER="JCDropDoneAfter";d.Model.DISABLE_DRAG="disableDrag";d.Model.DISABLE_DROP="disableDrop";d.Model.IGNORE_DRAG="ignoreDrog";d.Model.TRIGGER_DRAG="JCTriggerDrag";d.Model.CLASS_CURRENT="JCCurrentDropBox";d.Model.CLASS_MOVING="JCMovingDropBox";d.Model.CLASS_CURRENT_DRAG_ITEM="JCCurrentDragItem";JC.f.extendObject(d.Model.prototype,{init:function(){},defaultCSSPosition:function(j){typeof j!="undefined"&&(this._defaultCSSPosition=j);return this._defaultCSSPosition},defaultCSSZIndex:function(j){typeof j!="undefined"&&(this._defaultCSSZIndex=j);return this._defaultCSSZIndex},defaultCSSCursor:function(j){typeof j!="undefined"&&(this._defaultCSSCursor=j);return this._defaultCSSCursor},dragTarget:function(){var j=this;if(!j._dragTarget){j._dragTarget=j.selectorProp("dragTarget");!(j._dragTarget&&j._dragTarget.length)&&(j._dragTarget=j.selector())}return j._dragTarget},dragMovingTarget:function(n){var j=this,k=j.isDropFor();if(k&&n){j._dragMovingTarget&&j._dragMovingTarget.remove();j._dragMovingTarget=null}if(!j._dragMovingTarget){j._dragMovingTarget=j.dragTarget();if(k){var l=j.dragTarget().position(),m=JC.f.gid();j._dragMovingTarget=j.dragTarget().clone();j._dragMovingTarget.css({position:"absolute",left:l.left+"px",top:l.top+"px","z-index":window.ZINDEX_COUNT++});j.dragTarget().data("gid",m);j._dragMovingTarget.data("gid",m);j.dragTarget().addClass(d.Model.CLASS_CURRENT_DRAG_ITEM);j._dragMovingTarget.attr(d.Model.DISABLE_DROP,true).attr(d.Model.IGNORE_DRAG,true).addClass(d.Model.CLASS_MOVING)}}k&&n&&j.dragTarget().after(j._dragMovingTarget);return j._dragMovingTarget},isDropFor:function(){typeof this._isDropFor=="undefined"&&(this._isDropFor=this.is("[dropFor]")&&JC.f.parseBool(this.attrProp("dropFor")));return this._isDropFor},dropFor:function(j){(!this._dropFor=="undefined"||j)&&(this._dropFor=this.selectorProp("dropFor"));return this._dropFor},relativeParent:function(k){if(!this._relativeParent=="undefined"||k){this._relativeParent=null;var j=this.dragTarget();while((j=$(j.parent())).length){if(/body|html/i.test(j.prop("nodeName"))){break}if((j.css("position")||"").toLowerCase()=="relative"){this._relativeParent=j;break}}}return this._relativeParent},dropSwap:function(){return this.boolProp("dropSwap")},dropPush:function(){return this.boolProp("dropPush")},selectedDropBox:function(m,l){var k=this,o=k.dropFor(),j=d.dragInfo();if(!j){return null}if(typeof m!="undefined"&&typeof l!="undefined"&&o&&o.length){k._selectedDropBox=null;if(o&&o.length){var q=[],n=e(m,l,j.offset.width,j.offset.height);o.each(function(){var r=$(this);if(r.is("["+d.Model.DISABLE_DROP+"]")){return}var s=r.position(),t=e(s.left,s.top,r.prop("offsetWidth"),r.prop("offsetHeight"));if(g(n,t)){t.selector=r;q.push(t)}});if(q.length){var p;$.each(q,function(s,r){r.dist=f(c(n),c(r));if(!s){p=r;return}r.dist<p.dist&&(p=r)});this._selectedDropBox=p.selector}else{this._selectedDropBox=null}}}return this._selectedDropBox},dragIn:function(){if(!(this._dragIn&&this._dragIn.length)){this._dragIn=this.selectorProp("dragIn");!(this._dragIn&&this._dragIn.length)&&(this._dragIn=$(document.documentElement))}return this._dragIn},position:function(k){var j=this,l=j.dragTarget().position(),m=j.dragIn().position(),o=j.relativeParent()?j.relativeParent().position():{left:0,top:0},n={mouseX:k.pageX,mouseY:k.pageY,targetX:l.left,targetY:l.top,scrollX:j.dragIn().scrollLeft(),scrollY:j.dragIn().scrollTop(),maxXFix:-1,maxYFix:-1,width:j.dragTarget().prop("offsetWidth"),height:j.dragTarget().prop("offsetHeight"),relativeFixX:o.left,relativeFixY:o.top};n.x=n.mouseX-n.targetX;n.y=n.mouseY-n.targetY;!m&&(m={left:0,top:0},n.maxXFix=0,n.maxYFix=0);n.minX=m.left;n.minY=m.top;n.maxX=n.minX+j.dragIn().scrollLeft()+j.dragIn().width()-n.width-n.maxXFix;n.maxY=n.minY+j.dragIn().scrollTop()+j.dragIn().height()-n.height-n.maxYFix;return n},dragInitedCb:function(){return this.callbackProp("dragInitedCb")||d.dragInitedCb},dragBeforeCb:function(){return this.callbackProp("dragBeforeCb")||d.dragBeforeCb},dragAfterCb:function(){return this.callbackProp("dragAfterCb")||d.dragAfterCb},dragBeginCb:function(){return this.callbackProp("dragBeginCb")||d.dragBeginCb},dragMovingCb:function(){return this.callbackProp("dragMovingCb")||d.dragMovingCb},dragDoneCb:function(){return this.callbackProp("dragDoneCb")||d.dragDoneCb},dropDoneCb:function(){return this.callbackProp("dropDoneCb")||d.dropDoneCb},dropDoneAfterCb:function(){return this.callbackProp("dropDoneAfterCb")||d.dropDoneAfterCb},clean:function(k){var j=this}});JC.f.extendObject(d.View.prototype,{init:function(){},updatePosition:function(m,l){var k=this,j=k._model.dragMovingTarget(),n;j.css({left:m+"px",top:l+"px"});if(k._model.isDropFor()){n=k._model.selectedDropBox();n&&n.removeClass(d.Model.CLASS_CURRENT);n=k._model.selectedDropBox(m,l);if(n){if(j.data("gid")==n.data("gid")&&k._model.dropSwap()){}else{if(j.data("gid")==n.data("gid")&&k._model.dropSwap()){}else{n.addClass(d.Model.CLASS_CURRENT)}}}}},dropDone:function(n){var j=this;if(j._model.isDropFor()){var m=j._model.selectedDropBox();if(!(m&&m.length)){return}if(m.data(d.Model.DRAGGING_ITEM)){return}if(j._model.dropDoneCb()&&j._model.dropDoneCb().call(j._model.selector(),j._model.dragTarget(),m)===false){return}if(j.notificationHandler("DROP_DONE",[j._model.selector(),j._model.dragTarget(),m])===false){return}j.trigger(d.Model.DROP_DONE);if(j._model.dropSwap()){var l=$('<input type="hidden" />'),k=l.clone();j._model.dragTarget().after(l);m.after(k);k.after(j._model.dragTarget());l.after(m);l.remove();k.remove()}else{if(j._model.dropPush){j.trigger("INIT_INDEX");var l=$('<input type="hidden" />'),k=l.clone();if(j._model.dragTarget().data("dragIndex")>m.data("dragIndex")){m.before(j._model.dragTarget())}else{m.after(j._model.dragTarget())}}else{j._model.dragTarget().appendTo(m)}}j._model.dropDoneAfterCb()&&j._model.dropDoneAfterCb().call(j._model.selector(),j._model.dragTarget(),m);j.notification("DROP_DONE_AFTER",[j._model.selector(),j._model.dragTarget(),m]);j.trigger(d.Model.DROP_DONE_AFTER)}},clean:function(k){var j=this;if(j._model.isDropFor()){j._model.dragMovingTarget()&&j._model.dragMovingTarget().remove();j._model.selectedDropBox()&&j._model.selectedDropBox().removeClass(d.Model.CLASS_CURRENT)}}});function g(k,j){return !(j.left>k.right||j.right<k.left||j.top>k.bottom||j.bottom<k.top)}function e(m,l,j,n){var k,o={left:m,top:l,right:m+j,bottom:l+n};return o}function c(j){var k={x:j.left+(j.right-j.left)/2,y:j.top+(j.bottom-j.top)/2};return k}function f(k,j){var n=j.x-k.x,l=j.y-k.y,m=Math.sqrt(n*n+l*l);return m}i.delegate("div.js_compDrag, button.js_compDrag","mouseenter",function(k){var j=$(this),l=JC.BaseMVC.getInstance($(this),JC.Drag);if(j.is("["+d.Model.IGNORE_DRAG+"]")){return}!l&&(l=new JC.Drag(j))&&JC.BaseMVC.getInstance(j,JC.Drag,l)});i.delegate("div.js_compDrag, button.js_compDrag","mousedown",function(k){var j=$(this),l=JC.BaseMVC.getInstance(j,d);if(j.is("["+d.Model.IGNORE_DRAG+"]")){return}!l&&(l=new d(j))&&l.trigger(d.Model.TRIGGER_DRAG,[k]);return false});h.on("resize",function(j){d.cleanDragData()});return JC.Drag})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));