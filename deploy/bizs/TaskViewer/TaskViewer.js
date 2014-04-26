(function(b,a){b(["JC.BaseMVC"],function(){window.Bizs.TaskViewer=c;function c(d){d&&(d=$(d));if(c.getInstance(d)){return c.getInstance(d)}c.getInstance(d,this);this._model=new c.Model(d);this._view=new c.View(this._model);this._init()}c.getInstance=function(d,e){if(typeof d=="string"&&!/</.test(d)){d=$(d)}if(!(d&&d.length)||(typeof d=="string")){return}typeof e!="undefined"&&d.data(c.Model._instanceName,e);return d.data(c.Model._instanceName)};c.init=function(d){var e=[];d=$(d||document);if(d.length){if(d.hasClass("js_COMPTaskViewer")){e.push(new c(d))}else{d.find(".js_COMPTaskViewer").each(function(){e.push(new c(this))})}}return e};BaseMVC.build(c,"Bizs");JC.f.extendObject(c.prototype,{_beforeInit:function(){this._model.allMonths={};this._model.allDays={}},_initHanlderEvent:function(){JC.log("TaskViewer _initHanlderEvent",new Date().getTime());var d=this;d._model.getAllDates();d._view.layout()},_inited:function(){}});c.Model._instanceName="TaskViewer";JC.f.extendObject(c.Model.prototype,{init:function(){},selectedDates:function(){var f=this,d=f.attrProp("taskselecteddates"),e;e=f.selector().find(d);e.length&&f.dates(e,"selected")},delDates:function(){var f=this,d=f.attrProp("taskdeleteddates"),e;e=f.selector().find(d);e.length&&f.dates(e,"deleted")},newAddDates:function(){var f=this,d=f.attrProp("tasknewaddeddates"),e;e=f.selector().find(d);e.length&&f.dates(e,"added")},dates:function(g,e){var f=this,d=[];g.each(function(){d.push($(this).text().replace(/[^\d\-,]/g,""))});$.each(d,function(h,j){var i,l={},k=[];j=j.replace(/[^\d]/g,"");i=j.slice(0,6);if(j.length===8){l={start:j,end:j,type:e}}if(j.length===16){l={start:j.slice(0,8),end:j.slice(8),type:e}}if(!(i in f.allMonths)){f.allMonths[i]=l.start;f.allDays[i]=[]}k.push(l);f.allDays[i]=f.allDays[i].concat(k)})},getAllDates:function(){var d=this;d.selectedDates();d.delDates();d.newAddDates()},buildHeaderTpl:function(d){var f="一二三四五六日",g=0,e='<tr><th class="COMP_task_view_counter">已选天数</th><th style="width:80px; height:30px; padding:0!important;"><div class="COMP_task_view_slash"><b>星期</b><em>日期</em></div></th>',h="";for(g=0;g<d;g++){if(g%7===5||g%7===6){h="weekend"}else{h=""}e+='<th class="'+h+'">'+f.charAt(g%7)+"</th>"}e+="</tr>";return e},buildMonthTpl:function(){var e=this,q,l,g,k,m,f,h,n,o="",j="";for(q in e.allMonths){l=JC.f.dateDetect(e.allMonths[q]);m=l.getFullYear();k=l.getMonth();h=JC.f.maxDayOfMonth(l);o="";n=new Date(m,k,1).getDay()-1;while(n--){o+="<td>&nbsp;</td>"}j+='<tr class="'+q+'"><td class="COMP_task_view_counter">&nbsp;</td><td class="COMP_task_view_date">'+m+"年"+(k+1)+"月</td>"+o;for(g=1;g<=h;g++){f=new Date(m,k,g);j+='<td class="date" data-date="'+JC.f.formatISODate(f)+'" title="'+JC.f.formatISODate(f)+'">'+g+"</td>"}j+="</tr>"}return"<tbody>"+j+"</tbody>"},allDays:{},allMonths:{}});JC.f.extendObject(c.View.prototype,{init:function(){return this},layout:function(){var f=this,e='<table class="COMP_task_view"><thead></thead>',d;e=e+f._model.buildMonthTpl();f._model.selector().append(e);d=f.fixLayout();f._model.selector().find(".COMP_task_view>thead").append(f._model.buildHeaderTpl(d));f.setSelected()},fixLayout:function(){var g=this,f=g.selector().find(".COMP_task_view>tbody>tr"),e=0,d=[];f.each(function(){d.push($(this).find("td").length)});e=Math.max.apply(Math,d);f.each(function(j){var m=$(this),h=m.find("td").length,k=0,n="";if(e>h){k=e-h;while(k--){n+="<td>&nbsp;</td>"}m.append(n)}});return e-2},setSelected:function(){var i=this,j=i._model.allDays,e=i._model.selector(),h=e.find(".COMP_task_view>tbody"),g=h.find(".date"),d=h.find("tr"),f;$.each(j,function(l,s){var n=0,q=0,k=0,m=0,p=0,r="",o=h.find("tr."+l);$.each(s,function(v,u){var x=JC.f.dateDetect(u.start).getTime(),t=JC.f.dateDetect(u.end).getTime(),w=u.type;o.find(".date").each(function(){var y=$(this),z=JC.f.dateDetect(y.data("date")).getTime();if(z>=x&&z<=t){y.addClass(w)}});n=o.find(".selected").length;q=o.find(".added").length;k=o.find(".deleted").length;p=n+k;m=p+q-k;if(q||k){r='<span class="updatedDays">'+m+'天</span><span class="defaultDays">'+p+"天</span>"}else{r="<span>"+n+"天</span>"}o.find("td").eq(0).html(r)})})}});$(document).ready(function(){var d=0;c.autoInit&&(d=c.init())});return Bizs.TaskViewer})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));