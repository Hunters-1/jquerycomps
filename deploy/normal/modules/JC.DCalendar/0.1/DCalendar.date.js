(function(e,t){e(["JC.BaseMVC"],function(){function e(t){t&&(t=$(t));if(e.getInstance(t))return e.getInstance(t);e.getInstance(t,this),this._model=new e.Model(t),this._view=new e.View(this._model),this._init()}JC.DCalendar=e,e.getInstance=function(t,n){var r=e._type(t);typeof t=="string"&&!/</.test(t)&&(t=$(t));if(!t||!t.length||typeof t=="string")return;return typeof n!="undefined"&&(e.ins[r]=n),e.ins[r]},e.ins={},e.init=function(t,n){var r=[];typeof t=="boolean"&&(n=t,t=document),t=$(t||document);if(t.length){var i=t.length===1?t.prop("nodeName").toLowerCase():"";!i||i!=="input"&&i!=="button"?t.find(["input[datatype=ddate]","input[datatype=drange]","button[datatype=ddate]","input[multidate=ddate]","button[multidate=ddate]"].join()).each(function(){e._initStatus($(this))}):e._initStatus(t)}return r},e._initStatus=function(e){var t;e&&(e=$(e));if(!e||!e.length)return;e.val()&&(t=JC.f.dateDetect(e.val()))&&e.val(JC.f.formatISODate(t)),e.attr("minValue")&&(t=JC.f.dateDetect(e.attr("minValue")))&&e.attr("minValue",JC.f.formatISODate(t)),e.attr("maxValue")&&(t=JC.f.dateDetect(e.attr("maxValue")))&&e.attr("maxValue",JC.f.formatISODate(t)),e.addClass("CDCalendar_icon")},e._type=function(e){return"_ddate"},e.update=function(){var t=$(JC.f.printf("#{0}>div",e.Model._boxId));if(!t.length)return;t.each(function(){var e=$(this),t=e.data("CDCalendarIns");if(!t)return;t._model.layout().is(":visible")&&t.update()})},e.pickDate=function(t){var t=$(t),n,r=t.is("[ignoreprocess]");if(!t||!t.length)return;$(e.lastSrc)[0]===t[0]&&e.visible?t.attr("cdc_ignore",!0):t.attr("cdc_ignore",!1);if(JC.f.parseBool(t.attr("cdc_ignore")))return;return e.lastSrc=t,e.visible=!1,t.attr("ignoreprocess",!0).addClass("js_compDCalendar").blur(),!r&&t.removeAttr("ignoreprocess"),n=e.getInstance(t),!n&&(n=new e(t)),n.trigger(e.Model.SHOW),this},e.lastSrc=null,BaseMVC.build(e),JC.f.extendObject(e.prototype,{_beforeInit:function(){},_initHanlderEvent:function(){var t=this;t.on("CDC_INITED",function(){t._model.selector().addClass("CDCalendar_icon")}),t._model.selector().on("keydown",function(e){e.preventDefault()}),t.on(e.Model.SHOW,function(){t._model.selector(e.lastSrc),t._view.show(),e.visible=!0,t._model.calendarshow()&&t._model.calendarshow().call(t,t.selector())}),t.on(e.Model.HIDDEN,function(){t._model.selector().addClass("cdc_ignore",!1),t._view.hide(),e.visible=!1,t.selector().blur(),t._model.calendarhide()&&t._model.calendarhide().call(t,t.selector())}),t.on(e.Model.CHANGE,function(e,n){t._view.change(n)}),t.on(e.Model.SETDATE,function(e,n){t._model.setSelected(n),t._model.updatedate()&&t._model.updatedate().call(t,t.selector())}),t.on(e.Model.CLEAR,function(){t._model.clear(),t._model.calendarclear()&&t._model.calendarclear().call(t,t.selector())}),t.on(e.Model.DATEVIEW,function(e,n){t._view.dateView(n),t._model.updatemonth()&&t._model.updatemonth().call(t,t.selector())}),t.on(e.Model.MONTHVIEW,function(e,n){t._view.monthView(n),$(n).attr("data-year")?t._model.updateyear()&&t._model.updateyear().call(t,t.selector()):t._model.beforeupdatemonth()&&t._model.beforeupdatemonth().call(t,t.selector())}),t.on(e.Model.YEARVIEW,function(e,n){t._view.yearView(n),t._model.beforeupdateyear()&&t._model.beforeupdateyear().call(t,t.selector())}),t.on(e.Model.UPDATENEXTPAGEYEAR,function(){t._model.updatenextpageyear()&&t._model.updatenextpageyear().call(t,t.selector())}),t.on(e.Model.UPDATEPREVPAGEYEAR,function(){t._model.updateprevpageyear()&&t._model.updateprevpageyear().call(t,t.selector())}),t.on(e.Model.UPDATEPREVMONTH,function(){t._model.updateprevmonth()&&t._model.updateprevmonth().call(t,t.selector())}),t.on(e.Model.UPDATENEXTMONTH,function(){t._model.updatenextmonth()&&t._model.updatenextmonth().call(t,t.selector())}),t.on(e.Model.UPDATEPREVYEAR,function(){t._model.updateprevyear()&&t._model.updateprevyear().call(t,t.selector())}),t.on(e.Model.UPDATENEXTYEAR,function(){t._model.updatenextyear()&&t._model.updatenextyear().call(t,t.selector())})},_inited:function(){}}),e.Model._instanceName="DCalendar",e.Model.CDC_INITED="CDC_INITED",e.Model._boxId="CompDCalendar",e.Model.SHOW="CDC_SHOW",e.Model.HIDDEN="CDC_HIDDEN",e.Model.CHANGE="CDC_CHANGE",e.Model.SETDATE="CDC_SETDATE",e.Model.DATEVIEW="CDC_DATEVIEW",e.Model.MONTHVIEW="CDC_MONTHVIEW",e.Model.YEARVIEW="CDC_YEARVIEW",e.Model.CLEAR="CDC_CLEAR",e.Model.UPDATENEXTPAGEYEAR="CDC_UPDATENEXTPAGEYEAR",e.Model.UPDATEPREVPAGEYEAR="CDC_UPDATEPREVPAGEYEAR",e.Model.UPDATEPREVMONTH="CDC_UPDATEPREVMONTH",e.Model.UPDATENEXTMONTH="CDC_UPDATENEXTMONTH",e.Model.UPDATEPREVYEAR="CDC_UPDATEPREVYEAR",e.Model.UPDATENEXTYEAR="CDC_UPDATENEXTYEAR",JC.f.extendObject(e.Model.prototype,{init:function(){var e=this},isDCalendar:function(e){var e=$(e),t=0;return e.length&&(e.prop("nodeName")&&e.attr("datatype")&&(e.prop("nodeName").toLowerCase()==="input"||e.prop("nodeName").toLowerCase()==="button")&&((e.attr("datatype")||"").toLowerCase()==="ddate"||(e.attr("multidate")||"").toLowerCase()==="ddate")&&(t=1),e.hasClass("js_compDCalendar")&&(t=1)),t},curSelectedDate:function(){var e=this,t=e.selector().val().trim();return t=JC.f.dateDetect(t)||new Date,t},curYear:function(){return this.curSelectedDate().getFullYear()},curMonth:function(){return this.curSelectedDate().getMonth()},minValue:function(){var e=this.attrProp("minValue")||"";return e&&(e=JC.f.dateDetect(e)),e},maxValue:function(){var e=this.attrProp("maxValue")||"";return e&&(e=JC.f.dateDetect(e)),e},minYear:function(){var e=this,t;return e.minValue()&&(t=e.minValue().getFullYear()),t},maxYear:function(){var e=this,t;return e.maxValue()&&(t=e.maxValue().getFullYear()),t},currentCanSelect:function(){var e=this.boolProp("currentCanSelect");return typeof e=="undefined"&&(e=!0),e},weekendCanSelect:function(){var e=this.boolProp("weekendCanSelect");return typeof e=="undefined"&&(e=!0),e},monthNum:function(){var e=this.intProp("monthNum");return(!e||e<2||e>12)&&(e=2),e},showtype:function(){var e=this.attrProp("showtype");return e==="block"?e="block":e="float",e},allYearsTpl:function(e,t){var n=this,r="<tr>",i,s;for(i=e,s=1;i<=t;i++){r+='<td><a href="javascript:;" class="js_compDCYear" data-year="'+i+'">'+i+"</a></td>";if(s%7===0){if(s===28)return r+="</tr><tr>",r;r+="</tr>"}s++}return r},datesOfMonthTpl:function(e){var t=this,n="<tr>",r,i,s=new Date,o,u,a=JC.f.maxDayOfMonth(e),f="",l,c,h,p;for(l=1;l<=a;l++){i=new Date(e.getFullYear(),e.getMonth(),l),o=JC.f.formatISODate(i),u=(i.getDay()+6)%7,h="",p="",JC.f.isSameDay(s,i)&&(h="today"),(u===5||u===6)&&(p="weekend"),r='<td><a href="javascript:;" title="'+o+'" data-date="'+o+'" class="'+h+p+'" >'+l+"</a></td>";if(l===1&&u>0){c=u;while(c--)f+='<td ><a href="javascript:;" class="disabled"></a></td>';n+=f,f=""}n+=r;if(l===a&&u<6){c=6-u;while(c--)f+='<td><a href="javascript:;" class="disabled"></a></td>';n+=f,f=""}u===6&&(l===a?n+="</tr>":n+="</tr><tr>")}return n},monthTpl:'<div class="CDC_inner"><div class="CDC_header"><div class="CDC_header_tools"><a href="javascript:;" data-date="{2}" class="CDC_Date">返回今天</a><a href="javascript:;" data-date="{3}" class="CDC_Date">返回选中日期</a></div><h4><a href="javascript:;" data-date="{1}" class="CDC_Year">{0}</a></h4></div><div class="CDC_body"><table class="CDC_month_body"><tbody><tr><td><a href="javascript:;" class="js_compDCMonth" data-month="0">一月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="1">二月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="2">三月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="3">四月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="4">五月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="5">六月</a></td></tr><tr><td><a href="javascript:;" class="js_compDCMonth" data-month="6">七月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="7">八月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="8">九月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="9">十月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="10">十一月</a></td><td><a href="javascript:;" class="js_compDCMonth" data-month="11">十二月</a></td></tr></tbody></table></div></div>',yearTpl:'<div class="CDC_inner"><div class="CDC_header"><div class="CDC_header_tools"><a href="javascript:;" data-date="{0}" class="CDC_Date">返回今天</a><a href="javascript:;" data-date="{3}" class="CDC_Date">返回选中日期</a></div><h4><span>{2}</span></h4></div><div class="CDC_body"><table class="CDC_year_body"><tbody>{1}</tbody></table></div></div>',dateTpl:'<div class="CDC_inner" style="width: 182px;" ><div class="CDC_header"><h4><a href="javascript:;" title="更改年份" data-date="{0}" class="CDC_Year">{1}</a><a href="javascript:;" title="更改月份" data-date="{0}" class="CDC_Month">{2}</a></h4></div><div class="CDC_body"><table class="CDC_date_body CDC_date_body_left"><thead ><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></thead><tbody>{3}</tbody></table></div></div>',baseTpl:'<div class="CDCalendar_bounding_box" style="display:none;"><div class="CDC_container" ><div class="CDC_content_box" ><div class="CDC_arrow" ><a  href="javascript:;" class="CDC_close_btn" title="关闭">close</a><a  href="javascript:;" class="CDC_prev_btn" data-action="prev">prev</a><a  href="javascript:;" class="CDC_next_btn" data-action="next">next</a><a  href="javascript:;" class="CDC_clear" title="清除">clear</a></div><div class="CDC_date_box" >{0}</div></div></div></div>',buildYearTpl:function(e,t,n){var r=this,i=r.yearTpl;r.layoutBox().find(".CDC_date_box").html(JC.f.printf(i,JC.f.formatISODate(e),r.allYearsTpl(t,n),t+" ~ "+n,JC.f.formatISODate(r.curSelectedDate()))).find(".CDC_year_body>tbody>tr>td>a").each(function(){var e=$(this),t=e.data("year"),n=new Date(t,0,1);t===(new Date).getFullYear()&&e.addClass("today"),t===r.curYear()&&e.parent("td").addClass("selected_date"),(r.maxYear()&&t>r.maxYear()||r.minYear()&&t<r.minYear())&&e.addClass("disabled"),e.attr("data-date",JC.f.formatISODate(n))}),r.layoutBox().find(".CDC_prev_btn").attr("data-type","year").attr("data-date",JC.f.formatISODate(new Date(t-1,0,1))).end().find(".CDC_next_btn").attr("data-type","year").attr("data-date",JC.f.formatISODate(new Date(n+1,0,1))),r.layoutBox().css("width",466),r.disablePageBtn(),r.position()},buildMonthTpl:function(e){var t=this,n=t.monthTpl,r=new Date(e.getFullYear()-1,11,1);t.layoutBox().find(".CDC_date_box").html(JC.f.printf(n,e.getFullYear()+"年",JC.f.formatISODate(e),JC.f.formatISODate(new Date),JC.f.formatISODate(t.curSelectedDate()))).find(".CDC_month_body>tbody>tr>td>a").each(function(n){var r=$(this),i=r.data("month"),s=new Date(e.getFullYear(),i,1),o=new Date(s.getFullYear(),i,JC.f.maxDayOfMonth(s));JC.f.isSameMonth(s,new Date)&&r.addClass("today"),JC.f.isSameMonth(t.curSelectedDate(),s)&&r.parent("td").addClass("selected_date"),(t.minValue()&&t.minValue().getTime()>o.getTime()||t.maxValue()&&t.maxValue().getTime()<s.getTime())&&r.addClass("disabled"),r.attr("data-date",JC.f.formatISODate(s))}).end().end().find(".CDC_prev_btn").attr("data-date",JC.f.formatISODate(new Date(e.getFullYear()-1,11,JC.f.maxDayOfMonth(r)))).attr("data-type","month").end().find(".CDC_next_btn").attr("data-date",JC.f.formatISODate(new Date(e.getFullYear()+1,0,1))).attr("data-type","month"),t.disablePageBtn(),t.position(),t.layoutBox().css("width",466)},buildDateTpl:function(e){var t=this,n="",r=e||t.curSelectedDate(),i=r.getFullYear(),s=r.getMonth(),o=t.monthNum(),u=new Date(i,s,1),a,f;while(o--)n+=JC.f.printf(t.dateTpl,JC.f.formatISODate(r),i+"年",s+1+"月",t.datesOfMonthTpl(r)),r=new Date(i,s+1,1),i=r.getFullYear(),s=r.getMonth();f=new Date(i,s-1,1),a=new Date(i,s-1,JC.f.maxDayOfMonth(f)),t.layoutBox().find(".CDC_date_box").html(n).find(".CDC_date_body>tbody>tr>td>a[data-date]").each(function(e){var n=$(this),r=JC.f.dateDetect(n.data("date"));JC.f.isSameDay(r,t.curSelectedDate())&&n.parent("td").addClass("selected_date"),t.minValue()&&r.getTime()<t.minValue().getTime()&&n.addClass("disabled"),t.maxValue()&&r.getTime()>t.maxValue().getTime()&&n.addClass("disabled"),!t.currentCanSelect()&&JC.f.isSameDay(r,new Date)&&n.addClass("disabled")}).end().end().find(".CDC_next_btn").attr("data-date",JC.f.formatISODate(a)).attr("data-type","date").end().find(".CDC_prev_btn").attr("data-date",JC.f.formatISODate(u)).attr("data-type","date"),t.disablePageBtn(),t.fixTable()},disablePageBtn:function(){var e=this,t=e.layoutBox().find(".CDC_prev_btn"),n=e.layoutBox().find(".CDC_next_btn"),r=JC.f.dateDetect(t.attr("data-date")),i=JC.f.dateDetect(n.attr("data-date"));e.minValue()&&e.minValue().getTime()>r.getTime()?t.addClass("CDC_prev_btn_disabled").prop("disabled",!0):t.removeClass("CDC_prev_btn_disabled").prop("disabled",!1),e.maxValue()&&e.maxValue().getTime()<i.getTime()?n.addClass("CDC_next_btn_disabled").prop("disabled",!0):n.removeClass("CDC_next_btn_disabled").prop("disabled",!1)},layout:function(){var e=this;return!this._layout&&(this._layout=e.layoutBox().find("div.CDCalendar_bounding_box")),this._layout},layoutBox:function(){var t=this,n=$("#"+e.Model._boxId);if(!n||!n.length)n=$(JC.f.printf('<div id="{0}" style="width:466px;position:absolute;">'+t.baseTpl+"</div>",e.Model._boxId)).appendTo(document.body);return n},position:function(){var e=this,t=e.selector().offset().left,n=e.selector().offset().top+e.selector().prop("offsetHeight"),r,i,s=$(window);s.outerHeight()+s.scrollTop()<n+e.layout().height()?(i=e.selector().offset().top-e.layout().height(),i>=0&&(n=i)):n=e.selector().offset().top+e.selector().prop("offsetHeight"),s.outerWidth()+s.scrollLeft()<t+e.layoutBox().outerWidth(!0)?(r=e.selector().offset().left+e.selector().outerWidth()-e.layoutBox().outerWidth(!0),r>=0&&(t=r)):t=e.selector().offset().left,e.layoutBox().css({left:t,top:n})},setSelected:function(e){var t=this,n=$(e),r=JC.f.getJqParent(n,"td"),i=n.data("date");t.layoutBox().find(".CDC_date_body>tbody>tr>td").removeClass("selected_date"),r.addClass("selected_date").data("date"),t.selector().val(i)},clear:function(){var e=this;e.layoutBox().find(".CDC_date_body>tbody>tr>td").removeClass("selected_date"),e.selector().val("")},fixTable:function(){var e=this,t=e.layoutBox().find(".CDC_date_body"),n='<tr><td><a href="javascript:;" class="disabled">&nbsp;</a></td><td><a href="javascript:;" class="disabled">&nbsp;</a></td><td><a href="javascript:;" class="disabled">&nbsp;</a></td><td><a href="javascript:;" class="disabled">&nbsp;</a></td><td><a href="javascript:;" class="disabled">&nbsp;</a></td><td><a href="javascript:;" class="disabled">&nbsp;</a></td><td><a href="javascript:;" class="disabled">&nbsp;</a></td></tr>',r=0;t.each(function(e){var t=$(this),n=t.find("tbody>tr").length;n>r&&(r=n)}),t.each(function(){var e=$(this),t=e.find("tbody>tr").length;t<r&&e.find("tbody").append(n)}),e.showtype()==="float"?e.monthNum()===2||e.monthNum()===4?e.layoutBox().css("width",466):e.layoutBox().css("width",678):e.layoutBox().css("width",267)},calendarshow:function(){var e=this,t=e.selector(),n="calendarshow";return e.callbackProp(t,n)},calendarhide:function(){var e=this,t=e.selector(),n="calendarhide";return e.callbackProp(t,n)},calendarclear:function(){var e=this,t=e.selector(),n="calendarclear";return e.callbackProp(t,n)},updatedate:function(){var e=this,t=e.selector(),n="updatedate";return e.callbackProp(t,n)},beforeupdatemonth:function(){var e=this,t=e.selector(),n="beforeupdatemonth";return e.callbackProp(t,n)},updatemonth:function(){var e=this,t=e.selector(),n="updatemonth";return e.callbackProp(t,n)},beforeupdateyear:function(){var e=this,t=e.selector(),n="beforeupdateyear";return e.callbackProp(t,n)},updateyear:function(){var e=this,t=e.selector(),n="updateyear";return e.callbackProp(t,n)},updatenextmonth:function(){var e=this,t=e.selector(),n="updatenextmonth";return e.callbackProp(t,n)},updateprevmonth:function(){var e=this,t=e.selector(),n="updateprevmonth";return e.callbackProp(t,n)},updatenextyear:function(){var e=this,t=e.selector(),n="updatenextyear";return e.callbackProp(t,n)},updateprevyear:function(){var e=this,t=e.selector(),n="updateprevyear";return e.callbackProp(t,n)},updatenextpageyear:function(){var e=this,t=e.selector(),n="updatenextpageyear";return e.callbackProp(t,n)},updateprevpageyear:function(){var e=this,t=e.selector(),n="updateprevpageyear";return e.callbackProp(t,n)}}),JC.f.extendObject(e.View.prototype,{init:function(){var e=this},update:function(){var e=this;e._model.position(),e._model.layout().data("CDCalendarIns",e)},yearView:function(e){var t=this,n=$(e),r=new Date,i=r.getFullYear()-14,s=r.getFullYear()+13;t._model.buildYearTpl(r,i,s)},monthView:function(e){var t=this,n=$(e),r=JC.f.dateDetect(n.data("date"));t._model.buildMonthTpl(r)},dateView:function(e){var t=this,n=$(e),r=JC.f.dateDetect(n.data("date"));t._model.buildDateTpl(r)},change:function(t){var n=this,r=$(t),i=r.data("action"),s=r.attr("data-type"),o,u,a,f,l;switch(s){case"year":o=JC.f.dateDetect(r.attr("data-date")),i=="prev"?(l=o.getFullYear(),f=l-27,n.trigger(e.Model.UPDATEPREVPAGEYEAR)):(f=o.getFullYear(),l=f+27,n.trigger(e.Model.UPDATENEXTPAGEYEAR)),n._model.buildYearTpl(new Date,f,l);break;case"month":o=JC.f.dateDetect(r.attr("data-date")),i==="prev"?n.trigger(e.Model.UPDATEPREVYEAR):n.trigger(e.Model.UPDATENEXTYEAR),n._model.buildMonthTpl(o);break;case"date":default:i==="prev"?(u=JC.f.dateDetect(r.attr("data-date")),o=new Date(u.getFullYear(),u.getMonth()-n._model.monthNum()+1,1),n.trigger(e.Model.UPDATEPREVMONTH)):(o=JC.f.dateDetect(r.attr("data-date")),n.trigger(e.Model.UPDATENEXTMONTH)),n._model.buildDateTpl(o),n._model.position()}},show:function(){var e=this;e._model.buildDateTpl(),e.update(),e._model.layout().show(),e._model.layout().data("CDCalendarShow",e)},hide:function(){var e=this;e._model.layout().hide()}});var t=$(document),n="input[datatype=ddate], button[datatype=ddate], input[datatype=drange]";return t.delegate(n,"focus",function(t){$(this).addClass("cdc_ignore",!0),JC.f.safeTimeout(function(){e.pickDate(t.target||t.srcElement)},null,"DCalendarClick",50)}),t.delegate(n,"click",function(t){$(this).addClass("cdc_ignore",!0),JC.f.safeTimeout(function(){e.pickDate(t.target||t.srcElement)},null,"DCalendarClick",50)}),t.on("click",function(t){var n=e.getInstance(e.lastSrc),r=t.target||t.srcElement;if(n&&n._model.isDCalendar(r))return;n&&n.trigger(e.Model.HIDDEN)}),t.delegate("#CompDCalendar .CDC_close_btn","click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.HIDDEN)}),t.delegate("#CompDCalendar .CDC_next_btn, #CompDCalendar .CDC_prev_btn","click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.CHANGE,[$(this)])}),t.delegate("#CompDCalendar .CDC_Month","click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.MONTHVIEW,[$(this)])}),t.delegate("#CompDCalendar .CDC_Year","click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.YEARVIEW,[$(this)])}),t.delegate("#CompDCalendar .CDC_Date","click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.DATEVIEW,[$(this)])}),t.delegate("#CompDCalendar","click",function(e){e.stopPropagation()}),t.delegate('#CompDCalendar .CDC_date_body>tbody>tr>td>a:not(".disabled")',"click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.SETDATE,[$(this)]),n&&n.trigger(e.Model.HIDDEN)}),t.delegate('#CompDCalendar .CDC_month_body>tbody>tr>td>a:not(".disabled")',"click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.DATEVIEW,[$(this)])}),t.delegate('#CompDCalendar .CDC_year_body>tbody>tr>td>a:not(".disabled")',"click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.MONTHVIEW,[$(this)])}),t.delegate("#CompDCalendar .CDC_clear","click",function(t){var n=e.getInstance(e.lastSrc);n&&n.trigger(e.Model.CLEAR,[$(this)])}),$(window).on("resize scroll",function(){JC.f.safeTimeout(function(){e.update()},null,"DCalendarResize",20)}),t.ready(function(){e.init(!0)}),JC.DCalendar})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);