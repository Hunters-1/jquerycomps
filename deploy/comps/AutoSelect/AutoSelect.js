(function(b,a){b(["JC.common"],function(){(function(e){window.JC=window.JC||{log:function(){}};JC.AutoSelect=i;JC.Form&&(JC.Form.initAutoSelect=i);function i(j){var k=[];j&&(j=e(j));if(i.isSelect(j)){k.push(new d(j))}else{if(j&&j.length){j.find("select[defaultselect]").each(function(){k.push(new d(e(this)))})}}return k}var h={isSelect:function(j){var k;j&&(j=e(j))&&j.is("select")&&j.is("[defaultselect]")&&(k=true);return k},hideEmpty:false,dataFilter:null,beforeInited:null,inited:null,change:null,allChanged:null,triggerInitChange:true,randomurl:false,processUrl:null,ignoreInitRequest:false,getInstance:function(j,k){var l;j&&(j=e(j))&&(typeof k!="undefined"&&j.data("SelectIns",k),l=j.data("SelectIns"));return l},removeItems:function(k){var l=k.find("> option:not([defaultoption])"),j=l.length;l.remove();return j}};for(var c in h){i[c]=h[c]}function d(j){if(i.getInstance(j)){return i.getInstance(j)}i.getInstance(j,this);this._model=new g(j);this._view=new f(this._model,this);this._init()}d.prototype={_init:function(){var j=this;e.each(j._model.items(),function(l,k){i.getInstance(e(k),j)});j._model.beforeInited()&&j.on("SelectBeforeInited",j._model.beforeInited());j.on("SelectInited",function(){if(j._model.isInited()){return}var k=j._model.first();while(j._model.next(k)){k.on("change",j._responeChange);k=j._model.next(k)}if(j._model.items().length){e(j._model.items()[j._model.items().length-1]).on("change",function(l){j.trigger("SelectAllChanged")})}j._model.isInited(true);j._model.inited()&&j._model.inited().call(j,j._model.items())});j.on("SelectChange",function(l,k){j._model.change(k)&&j._model.change(k).call(k,l,j)});j._model.allChanged()&&j.on("SelectAllChanged",function(k){j._model.allChanged().call(j,j._model.items())});j.trigger("SelectBeforeInited");if(j._model.selectignoreinitrequest()){j._model.triggerInitChange()&&j._model.first().trigger("change");j.trigger("SelectAllChanged");j.trigger("SelectInited")}else{j._update(j._model.first(),j._firstInitCb)}return j},on:function(j,k){e(this).on(j,k);return this},trigger:function(k,j){e(this).trigger(k,j);return this},first:function(){return this._model.first()},last:function(){return this._model.last()},items:function(){return this._model.items()},isFirst:function(j){return this._model.isFirst(j)},isLast:function(j){return this._model.isLast(j)},isInited:function(){return this._model.isInited()},data:function(j){return this._model.data(j)},update:function(l){if(!(l&&l.length)){return this}if(typeof l=="string"){var k=l.replace(/[\s]+/g,"").trim();if(!k){return this}l=k.split(",")}var j=this,m=j._model.items();if(!(m&&m.length)){return}e.each(l,function(o,n){if(!m[o]){return}e(m[o]).attr("selectvalue",(n.toString()||"").trim())});j._update(j._model.first(),j._changeCb);return this},_responeChange:function(l,n){var k=e(this),j=i.getInstance(k),m=j._model.next(k),o=k.val();if(n){return}JC.log("_responeChange:",k.attr("name"),o);if(!(m&&m.length)){j.trigger("SelectChange")}else{j._update(m,j._changeCb,o)}},_update:function(k,m,l,j){if(this._model.isStatic(k)){this._updateStatic(k,m,l)}else{if(this._model.isAjax(k)){this._updateAjax(k,m,l,j)}else{this._updateNormal(k,m,l)}}return this},_updateAjax:function(n,r,q,p){var j=this,k,l=j._model.next(n),m,o;if(j._model.isFirst(n)){typeof q=="undefined"&&(q=j._model.selectparentid(n)||"");if(typeof q!="undefined"){m=j._model.selecturl(n,q);o=j._model.token(true);if(g.ajaxCache(m)){setTimeout(function(){k=g.ajaxCache(m);j._view.update(n,k);r&&r.call(j,n,k,o)},10)}else{setTimeout(function(){e.get(m,function(s){s=e.parseJSON(s);g.ajaxCache(m,s);j._view.update(n,s);r&&r.call(j,n,s,o)})},10)}}}else{if(typeof p!="undefined"&&p!=j._model.token()){return}m=j._model.selecturl(n,q);if(g.ajaxCache(m)){j._processData(p,n,r,g.ajaxCache(m))}else{e.get(m,function(s){s=e.parseJSON(s);j._processData(p,n,r,g.ajaxCache(m,s))})}}return this},_processData:function(l,k,n,m){var j=this;setTimeout(function(){if(typeof l!="undefined"&&l!=j._model.token()){return}j._view.update(k,m);n&&n.call(j,k,m,l)},10)},_changeCb:function(l,n,k){var j=this,m=j._model.next(l),o=j._model.token();if(typeof k!="undefined"){if(k!==o){return}}j.trigger("SelectChange",[l]);l.trigger("change",[true]);if(j._model.isLast(l)){}if(m&&m.length){j._update(m,j._changeCb,l.val(),k)}return this},_firstInitCb:function(k,m){var j=this,l=j._model.next(k);if(!j._model.isInited()){j._model.triggerInitChange()&&k.trigger("change",[true])}j.trigger("SelectChange",[k]);if(l&&l.length){JC.log("_firstInitCb:",k.val(),l.attr("name"),k.attr("name"));j._update(l,j._firstInitCb,k.val())}if(j._model.isLast(k)){j.trigger("SelectAllChanged");!j._model.isInited()&&j.trigger("SelectInited")}return this},_updateStatic:function(k,n,l){var j=this,m,o=false;JC.log("static select");if(j._model.isFirst(k)){typeof l=="undefined"&&(l=j._model.selectparentid(k)||j._model.selectvalue(k)||"");if(j._model.hasVal(k,l)){k.val(l);o=true}else{if(typeof l!="undefined"){m=j._model.datacb(k)(l)}}}else{m=j._model.datacb(k)(l)}!o&&j._view.update(k,m);n&&n.call(j,k,m);return this},_updateNormal:function(k,o,m){var j=this,n;JC.log("normal select");if(j._model.isFirst(k)){var l=j._model.next(k);typeof m=="undefined"&&(m=j._model.selectvalue(k)||k.val()||"");if(j._model.hasVal(k,m)){k.val(m)}if(l&&l.length){j._update(l,o,m);return this}}else{n=j._model.datacb(k)(m)}j._view.update(k,n);o&&o.call(j,k,n);return this}};function g(j){this._selector=j;this._items=[];this._isInited=false;this._init()}g._ajaxCache={};g.ajaxCache=function(j,k){k&&(g._ajaxCache[j]=k);return g._ajaxCache[j]};g.prototype={_init:function(){this._findAllItems(this._selector);JC.log("select items.length:",this._items.length);this._initRelationship();return this},token:function(j){typeof this._token=="undefined"&&(this._token=0);j&&(this._token++);return this._token},_findAllItems:function(j){this._items.push(j);j.is("[selecttarget]")&&this._findAllItems(JC.f.parentSelector(j,j.attr("selecttarget")))},_initRelationship:function(){this._selector.data("FirstSelect",true);if(this._items.length>1){this._items[this._items.length-1].data("LastSelect",true);for(var j=0;j<this._items.length;j++){var k=this._items[j],l=this._items[j-1];if(l){k.data("PrevSelect",l);l.data("NextSelect",k);k.data("parentSelect",l)}}}},items:function(){return this._items},first:function(){return this._items[0]},last:function(){return this._items[this._items-1]},next:function(j){return j.data("NextSelect")},prev:function(j){return j.data("PrevSelect")},isFirst:function(j){return !!j.data("FirstSelect")},isLast:function(j){return !!j.data("LastSelect")},isStatic:function(j){return j.is("[selectdatacb]")},isAjax:function(j){return j.is("[selecturl]")},isInited:function(j){typeof j!="undefined"&&(this._isInited=j);return this._isInited},datacb:function(j){var k;j.attr("selectdatacb")&&(k=window[j.attr("selectdatacb")]);return k},selectparentid:function(j){var k;j.attr("selectparentid")&&(k=j.attr("selectparentid"));j.removeAttr("selectparentid");return k||""},selectvalue:function(j){var k=j.attr("selectvalue");j.removeAttr("selectvalue");return k||""},randomurl:function(j){var k=i.randomurl;j.is("[selectrandomurl]")&&(k=JC.f.parseBool(j.attr("selectrandomurl")));return k},selectignoreinitrequest:function(j){var k=i.ignoreInitRequest;this.first().is("[selectignoreinitrequest]")&&(k=JC.f.parseBool(this.first().attr("selectignoreinitrequest")));j&&j.is("[selectignoreinitrequest]")&&(k=JC.f.parseBool(j.attr("selectignoreinitrequest")));return k},triggerInitChange:function(){var k=i.triggerInitChange,j=this.first();j.attr("selecttriggerinitchange")&&(k=JC.f.parseBool(j.attr("selecttriggerinitchange")));return k},hideempty:function(j){var l=i.hideEmpty,k=this.first();k&&k.length&&k.is("[selecthideempty]")&&(l=JC.f.parseBool(k.attr("selecthideempty")));j&&j.length&&j.is("[selecthideempty]")&&(l=JC.f.parseBool(j.attr("selecthideempty")));return l},selecturl:function(j,k){var l=i.processUrl,m=j.attr("selecturl")||"";j.attr("selectprocessurl")&&window[j.attr("selectprocessurl")]&&(l=window[j.attr("selectprocessurl")]);m=JC.f.printf(m,k);this.randomurl(j)&&(m=JC.f.addUrlParams(m,{rnd:new Date().getTime()}));l&&(m=l.call(j,m,k));return m},_userdatafilter:function(j){var k;j.attr("selectdatafilter")&&(k=window[j.attr("selectdatafilter")]);return k},dataFilter:function(j,l){var k=this._userdatafilter(j)||i.dataFilter;k&&(l=k(l,j));return l},beforeInited:function(){var k=i.beforeInited,j=this.first();j.attr("selectbeforeInited")&&window[j.attr("selectbeforeInited")]&&(k=window[j.attr("selectbeforeinited")]);return k},inited:function(){var k=i.inited,j=this.first();j.attr("selectinited")&&window[j.attr("selectinited")]&&(k=window[j.attr("selectinited")]);return k},change:function(j){var k=i.change;j.attr("selectchange")&&window[j.attr("selectchange")]&&(k=window[j.attr("selectchange")]);return k},allChanged:function(){var k=i.allChanged,j=this.first();j.attr("selectallchanged")&&window[j.attr("selectallchanged")]&&(k=window[j.attr("selectallchanged")]);return k},data:function(j,k){typeof k!="undefined"&&(j.data("SelectData",k));return j.data("SelectData")},hasVal:function(j,l){var k=false,l=l.toString();j.find("option").each(function(){var m=e(this);if(m.val()==l){k=true;return false}});return k}};function f(k,j){this._model=k;this._control=j;this._init()}f.prototype={_init:function(){return this},update:function(l,q){var k=this._model.selectvalue(l);q=this._model.dataFilter(l,q);this._model.data(l,q);this._control.trigger("SelectItemBeforeUpdate",[l,q]);i.removeItems(l);if(!q.length){if(this._model.hideempty(l)){this.hideItem(l);this._control.trigger("SelectItemUpdated",[l,q]);return}}else{!l.is(":visible")&&l.show()}var m=[],p,r;for(var o=0,n=q.length;o<n;o++){p=q[o];m.push(JC.f.printf('<option value="{0}" {2}>{1}</option>',p[0],p[1],r))}e(m.join("")).appendTo(l);if(this._model.hasVal(l,k)){l.val(k)}this._control.trigger("SelectItemUpdated",[l,q])},hideItem:function(j){j.hide();while(j=this._model.next(j)){j.hide()}}};e(document).ready(function(j){setTimeout(function(){i(document.body)},200)})}(jQuery));return JC.AutoSelect})}(typeof define==="function"&&define.amd?define:function(a,b){b&&b()},this));