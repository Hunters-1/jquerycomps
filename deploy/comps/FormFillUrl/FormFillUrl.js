(function(b,a){b(["JC.BaseMVC"],function(){var d=$(document);JC.FormFillUrl=c;function c(e,f){e&&(e=$(e));f=f||location.href;if(JC.BaseMVC.getInstance(e,c)){return JC.BaseMVC.getInstance(e,c)}JC.BaseMVC.getInstance(e,c,this);this._model=new c.Model(e);this._model.url(f);this._init();JC.log(c.Model._instanceName,"all inited",new Date().getTime())}c.init=function(e,f){var h=[];e=$(e||document);f=f||location.href;if(e.length){if(e.prop("nodeName").toLowerCase()=="form"){h.push(new c(e,f))}else{var g=e.find("form.js_compFormFillUrl, form.js_autoFillUrlForm");g.each(function(){h.push(new c(this,f))});if(!g.length){h.push(new c(e,f))}}}return h};JC.Form&&(JC.Form.initAutoFill=c.init);c.decoder=decodeURIComponent;c.encoder=encodeURIComponent;c.selectHasVal=function(e,g){e=$(e);var f=false,g=g.toString();e.find("option").each(function(){var h=$(this);if(h.val()==g){f=true;return false}});return f};JC.BaseMVC.build(c);JC.f.extendObject(c.prototype,{_beforeInit:function(){},_initHanlderEvent:function(){var e=this;e.on(c.Model.INITED,function(f){e.trigger(c.Model.PROCESS)});e.on(c.Model.PROCESS,function(g,f,h){f&&e._model.selector(f);h&&e._model.url(h);if(!e._model.formtoken()){return}e._model.selector().prop("nodeName").toLowerCase()=="form"?e._model.fillForm():e._model.fillItems()})},_inited:function(){this.trigger(c.Model.INITED)},fill:function(e,f){e&&(e=$(e));if(!(e&&e.length&&f)){return this}_p.trigger(c.Model.PROCESS,[e,f]);return this}});c.Model._instanceName="JCFormFillUrl";c.Model.INITED="inited";c.Model.PROCESS="process";JC.f.extendObject(c.Model.prototype,{init:function(){},url:function(e){typeof e!="undefined"&&(this._url=e);return this._url},formtoken:function(){var e=this,g=true;if(JC.f.hasUrlParam(e.url(),"formtoken")){var f=e.selector().find("[name=formtoken]");if(!f.length){return false}if(f.val()!=JC.f.getUrlParam(e.url(),"formtoken")){return false}}return g},fillForm:function(e,f){this.fillItems(e,f)},fillItems:function(f,i){f=$(f||this.selector());var e=this,h=[],g;i=i||e.url();g=e.urlParams(i,e.decoder());f.find("[name]").each(function(k,j){j=$(j);switch((j.prop("nodeName")||"").toLowerCase()){case"input":case"select":case"textarea":if(JC.f.parseBool(j.attr("ignoreUrlFill")||"")){return}h.push(j);break}});$.each(g,function(m,l){var k=[],j;$.each(h,function(o,n){n.attr("name")==m&&(k.push(n))});if(!k.length){return}$.each(k,function(p,o){var q=(o.prop("nodeName")).toLowerCase(),n=(o.attr("type")||"text").toLowerCase();if(n=="file"){return}if(JC.f.parseBool(o.attr("ignoreUrlFill")||"")){return}if(/input/i.test(q)){switch(n){case"radio":case"checkbox":j=true;break;default:if(k.length!=l.length){return}e._updateInputVal(o,l,p);break}}else{if(/textarea/i.test(q)){e._updateInputVal(o,l,p)}else{if(/select/i.test(q)){e._updateSelect(o,l,p)}}}});if(j){e._updateInputChecked(k,l)}});window.JC.f.jcAutoInitComps&&JC.f.jcAutoInitComps(f)},_updateSelect:function(e,f,g){var h=f[g]||"";if(c.selectHasVal(e,h)){e.removeAttr("selectIgnoreInitRequest");e.val(h)}else{e.attr("selectvalue",h)}},_updateInputVal:function(e,f,g){e.val(f[g]||"")},_updateInputChecked:function(e,f){$.each(e,function(i,h){var g=(h.attr("type")||"text").toLowerCase(),j;if(!(g=="checkbox"||g=="radio")){return}$.each(f,function(k,l){h.val()==l&&(j=true)});j?h.prop("checked",true):h.prop("checked",false)})},urlParams:function(e,f){var g={},h=/[\+]/g;f=f||decodeURIComponent;if(e){e=e.split(/[?]+/);e.shift();if(!e.length){return g}e=e[0];e=e.split("&");$.each(e,function(k,j){if(!j){return}var l=j.split("=");if(!l[0]){return}l[0]=(l[0]||"").replace(h," ");try{l[0]=f(l[0])}catch(i){}!(l[0] in g)&&(g[l[0]]=[]);g[l[0]].push(f((l[1]||"").replace(h," ")))})}return g},decoder:function(){return this.callbackProp("decoder")||c.decoder},encoder:function(){return this.callbackProp("encoder")||c.encoder}});d.ready(function(){c.autoInit&&JC.f.safeTimeout(function(){c.init()},null,"JCFormFillUrl",50)});return JC.FormFillUrl})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));