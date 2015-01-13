(function(b,a){b(["JC.BaseMVC","JC.Calendar"],function(){window.Bizs.DMultiDate=c;function c(d){if(c.getInstance(d)){return c.getInstance(d)}c.getInstance(d,this);this._model=new c.Model(d);this._view=new c.View(this._model);this._init()}c.prototype={_beforeInit:function(){this._model.mddateEl().attr("ignoreInitCalendarDate","true").data("ignoreInitCalendarDate",true);c.Model._defaultMaxvalue=this._model.mddateEl().eq(0).attr("maxvalue")||"";c.Model._defaultMinvalue=this._model.mddateEl().eq(1).attr("minvalue")||""},_initHanlderEvent:function(){var d=this,m=c.Model._inscount++,k="Bizs.DMultiDate_update_start"+m,p="Bizs.DMultiDate_update_end"+m,o="Bizs.DMultiDate_show_start"+m,h="Bizs.DMultiDate_show_end"+m,g="Bizs.DMultiDate_hide_start"+m,r="Bizs.DMultiDate_hide_end"+m,j="Bizs.DMultiDate_layoutchange_start"+m,q="Bizs.DMultiDate_layoutchange_end"+m,n="Bizs.DMultiDate_clear_start"+m,l="Bizs.DMultiDate_clear_end"+m,f="parsedateweek",i="parsedatemonth",s="parsedateseason",e="parsedateyear";d._initDefaultData();d._model.calendarTypeEl().on("change",function(u,w){var t=$(this),v=t.val();if(v==="day"){v="date"}d._model.updatemddateElProp(v);if(v=="custom"||v=="customized"){d._model.lastIptBox().show()}else{d._model.lastIptBox().hide()}if(w){return}setTimeout(function(){d._model.setmddate("");d._model.setHiddenStartdate("");d._model.setHiddenEnddate("");Calendar.pickDate(d._model.mddateEl().eq(0)[0])},10)});d._model.mddateEl().eq(0).attr("calendarupdate",k).attr("calendarshow",o).attr("calendarhide",g).attr("calendarlayoutchange",j).attr("calendarclear",n);d._model.mddateEl().eq(1).attr("calendarupdate",p).attr("calendarshow",h).attr("calendarhide",r).attr("calendarlayoutchange",q).attr("calendarclear",l);window[k]=function(x,B,z){console.log("_updatestartcb",JC.f.formatISODate(x),JC.f.formatISODate(B));var t=d._model.mddateEl(),v=d._model.calendarType(),u=JC.f.cloneDate(x),w=c.Model._defaultMaxvalue,y;x=JC.f.formatISODate(x);w&&(w=JC.f.dateDetect(w));switch(v){case"week":y=d._model.weekrange();y&&u.setDate(u.getDate()+(y-1)*7+6);break;case"month":y=d._model.monthrange();if(y){u.setMonth(u.getMonth()+(y-1));u.setDate(JC.f.maxDayOfMonth(u))}break;case"season":y=d._model.seasonrange();if(y){u.setMonth(u.getMonth()+(y-1)*3+2);u.setDate(JC.f.maxDayOfMonth(u))}break;case"year":y=d._model.yearrange();y&&u.setYear(u.getFullYear()+y-1);break;case"custom":case"customized":y=d._model.dayrange();y&&u.setDate(u.getDate()+y-1);break;case"date":default:y=d._model.dayrange();y&&u.setDate(u.getDate()+y-1)}if(y){if(w&&(w.getTime()<=u.getTime())){u=w}t.eq(1).attr("maxvalue",JC.f.formatISODate(u)).attr("minvalue",x).attr("defaultdate",x)}d._model.setHiddenStartdate(x);var A=0;$.each(d._model.mddateEl(),function(D,C){if(!$(C).is(":hidden")){A++}});if(A==1){d._model.setHiddenEnddate(JC.f.formatISODate(B))}else{if(!d._model.mddateEl().eq(1).is("reqmsg")&&!d._model.hiddenEnddateEl().val()){d._model.setHiddenEnddate(JC.f.formatISODate(B))}}};window[p]=function(v,B,y){var t=d._model.mddateEl(),u=d._model.calendarType(),A=new Date(v.getFullYear(),v.getMonth(),v.getDate()),z=c.Model._defaultMinvalue,x,w=new Date(v.getFullYear(),v.getMonth(),v.getDate());z&&(z=JC.f.dateDetect(z));switch(u){case"week":x=d._model.weekrange();x&&A.setDate(A.getDate()-(x-1)*7);break;case"month":x=d._model.monthrange();x&&(A.setMonth(A.getMonth()-(x-1))&&w.setDate(JC.f.maxDayOfMonth(v)));break;case"season":x=d._model.seasonrange();x&&(A.setMonth(A.getMonth()-(x-1)*3));break;case"year":x=d._model.yearrange();x&&(A.setYear(A.getFullYear()-x+1));break;case"custom":case"customized":x=d._model.dayrange();x&&A.setDate(A.getDate()-x+1);break;case"date":default:x=d._model.dayrange();x&&A.setDate(A.getDate()-x+1)}if(x){if(z&&z.getTime()>A.getTime()){A=z}A=JC.f.formatISODate(A);t.eq(0).attr("maxvalue",JC.f.formatISODate(w)).attr("minvalue",A).attr("defaultdate",A)}d._model.setHiddenEnddate(JC.f.formatISODate(B));if(!d._model.mddateEl().eq(0).is("reqmsg")&&!d._model.hiddenStartdateEl().val()){d._model.setHiddenStartdate(JC.f.formatISODate(v))}};window[o]=function(){var t=$("body > div.UXCCalendar:visible");t.length&&JC.Tips&&JC.Tips.init(t.find("[title]"))};window[h]=function(){var t=$("body > div.UXCCalendar:visible");t.length&&JC.Tips&&JC.Tips.init(t.find("[title]"))};window[g]=function(){JC.Tips&&JC.Tips.hide();if(!d._model.hiddendateiso()){d._model.updateHiddenStartdate()}};window[r]=function(){JC.Tips&&JC.Tips.hide();if(!d._model.hiddendateiso()){d._model.updateHiddenEnddate()}};window[j]=function(){JC.Tips&&JC.Tips.hide();var t=$("body > div.UXCCalendar:visible");t.length&&JC.Tips&&JC.Tips.init(t.find("[title]"))};window[q]=function(){JC.Tips&&JC.Tips.hide();var t=$("body > div.UXCCalendar:visible");t.length&&JC.Tips&&JC.Tips.init(t.find("[title]"))};window[n]=function(u,v){var t=d._model.mddateEl().eq(1),x=c.Model._defaultMaxvalue,w=c.Model._defaultMinvalue;if(x){t.attr("maxvalue",x).attr("defaultdate",x)}else{t.removeAttr("maxvalue").removeAttr("defaultdate")}if(w){t.attr("minvalue",w)}else{t.removeAttr("minvalue")}};window[l]=function(){var t=d._model.mddateEl().eq(0),v=c.Model._defaultMaxvalue,u=c.Model._defaultMinvalue;if(v){t.attr("maxvalue",v)}else{t.removeAttr("maxvalue")}if(u){t.attr("minvalue",u).attr("defaultdate",u)}else{t.removeAttr("minvalue").removeAttr("defaultdate")}};window[f]=function(t){t=$.trim(t||"");var B={start:null,end:null},y;if(t){y=t.replace(/[^\d]+/g,"");t=t.split("W");if(y.length===8){B.start=JC.f.parseISODate(y);B.end=B.start;return B}else{if(y.length===16){B.start=JC.f.parseISODate(y.slice(0,8));B.end=JC.f.parseISODate(y.slice(8,16));return B}}var w,z,v,x,u,A;w=parseInt(t[0],10);z=parseInt(t[1],10);v=JC.f.pureDate(new Date(t[0]),0,1);x=JC.f.pureDate(new Date(t[1]),0,1);u=u||JC.f.weekOfYear(t[0],JC.Calendar.weekDayOffset);$(u).each(function(D,C){if(C.week===z){B.start=new Date();B.end=new Date();B.start.setTime(C.start);B.end.setTime(C.end);return false}})}return B};window[i]=function(x){x=$.trim(x||"");var w={start:null,end:null},v;if(x){v=x.replace(/[^\d]+/g,"");x=x.replace(/[^\d]+/g,"");if(v.length===8){w.start=JC.f.parseISODate(v);w.end=w.start;return w}else{if(v.length===16){w.start=JC.f.parseISODate(v.slice(0,8));w.end=JC.f.parseISODate(v.slice(8,16));return w}}var u=x.slice(0,4),t=parseInt(x.slice(4,6),10)-1;w.start=new Date(u,t,1);w.end=JC.f.cloneDate(w.start);w.end.setDate(JC.f.maxDayOfMonth(w.start))}return w};window[s]=function(A){A=$.trim(A||"");var y={start:null,end:null},w;if(A){w=A.replace(/[^\d]+/g,"");A=A.split("Q");if(w.length===8){y.start=JC.f.parseISODate(w);y.end=y.start;return y}else{if(w.length===16){y.start=JC.f.parseISODate(w.slice(0,8));y.end=JC.f.parseISODate(w.slice(8,16));return y}}var v=parseInt(A[0],10),u=parseInt(A[1],10),x=JC.f.pureDate(new Date(A[0]),0,1),z=JC.f.pureDate(new Date(A[1]),0,1),t=JC.f.seasonOfYear(A[0]);$(t).each(function(C,B){if(B.season===u){y.start=new Date();y.end=new Date();y.start.setTime(B.start);y.end.setTime(B.end);return false}})}return y};window[e]=function(v){v=$.trim(v||"");var u={start:null,end:null},t;if(v){v=v.replace(/[^\d]+/g,"");t=v.slice(0,4);u.start=new Date(t,0,1)}if(!u.start){u.start=new Date();u.end=new Date()}return u};d._model.calendarTypeEl().trigger("change",[true])},_initDefaultData:function(){if(this._model.mcIgnoreUrlFill()){return}var d=this,f=d._model.urlStartdate()||d._model.mddateEl().eq(0).val(),g=d._model.urlEnddate()||d._model.mddateEl().eq(1).val(),e=d._model.urlCalendarType()||d._model.calendarType();d._model.calendarTypeEl().val(e);d._model.updatemddateElProp(e);setTimeout(function(){d._model.setmddate(f,g);d._model.setHiddenStartdate(f);d._model.setHiddenEnddate(g)},200)},_inited:function(){}};c.getInstance=function(d,e){if(typeof d=="string"&&!/</.test(d)){d=$(d)}if(!(d&&d.length)||(typeof d=="string")){return}typeof e!="undefined"&&d.data(c.Model._instanceName,e);return d.data(c.Model._instanceName)};c.isDMultiDate=function(d){var e;d&&(d=$(d)).length&&(e=d.is("[DMultiDatelayout]"));return e};BaseMVC.buildModel(c);c.Model._instanceName="DMultiDate";c.Model._inscount=1;c.Model._defaultMaxvalue="";c.Model._defaultMinvalue="";c.Model.prototype={init:function(){},disableDateLimit:function(){return this.boolProp("disabledatelimit")},lastIptBox:function(){if(!this._lastIptBox){this._lastIptBox=JC.f.parentSelector(this.selector(),this.selector().attr("lastIptBox"));!this._lastIptBox&&(this._lastIptBox=$("sdfasefasdfasfsadfasdfsdf"))}return this._lastIptBox},calendarTypeEl:function(){return this.selector().find(">select")},mcIgnoreUrlFill:function(){return this.boolProp("mdIgnoreUrlFill")},calendarType:function(){return this.calendarTypeEl().val()},mddateEl:function(){var d=this,e=d.attrProp("mddateEl")||".js_multidate";return d.selector().find(e)},setmddate:function(e,d){var f=this.mddateEl();e&&(e=JC.f.dateFormat(JC.f.dateDetect(e),f.eq(0).attr("dateformat")));d&&(d=JC.f.dateFormat(JC.f.dateDetect(d),f.eq(1).attr("dateformat")));f.eq(0).val(e);f.eq(1).val(d)},updatemddateElProp:function(e){var d=this,f=d.mddateEl();f.attr("multidate",e);if(e==="date"){f.removeAttr("dateparse").removeAttr("dateformat").removeAttr("fulldateformat")}else{f.eq(0).attr("fulldateformat","{0}");f.eq(1).attr("fulldateformat","{0}");f.attr("dateformat",d.dateformartType(e)).attr("dateparse","parsedate"+e)}if(c.Model._defaultMinvalue){f.attr("minvalue",c.Model._defaultMinvalue)}else{f.removeAttr("minvalue")}if(c.Model._defaultMaxvalue){f.attr("maxvalue",c.Model._defaultMaxvalue).attr("defaultdate",c.Model._defaultMaxvalue)}else{f.removeAttr("maxvalue").removeAttr("defaultdate")}},dateformartType:function(d){var e;switch(d){case"week":e="YYWWK";break;case"month":e="YY-MM";break;case"season":e="YYQYQ";break;case"year":e="YY";break;case"date":default:e=""}return e},hiddenStartdateEl:function(){var d=this,e=d.attrProp("mdstartdate")||".js_startdate";return d.selector().find(e)},hiddenEnddateEl:function(){var d=this,e=d.attrProp("mdenddate")||".js_enddate";return d.selector().find(e)},setHiddenStartdate:function(e){var d=this,f=e;if(e){e=JC.f.parseDate(e,d.mddateEl().first());e&&(e=JC.f.dateFormat(e,d.hiddendateiso()?"":d.mddateEl().first().attr("dateformat")));!e&&(e=f)}d.hiddenStartdateEl().val(e)},setHiddenEnddate:function(e){var d=this,f=e;if(e){e=JC.f.parseDate(e,d.mddateEl().first());e&&(e=JC.f.dateFormat(e,d.hiddendateiso()?"":d.mddateEl().first().attr("dateformat")));!e&&(e=f)}d.hiddenEnddateEl().val(e)},updateHiddenStartdate:function(){var d=this,e=d.mddateEl().eq(0).val();if(!e){d.setHiddenStartdate("");return}d.setHiddenStartdate(e)},updateHiddenEnddate:function(){var d=this,e=d.mddateEl().eq(1).val();if(!e){d.setHiddenEnddate("");return}d.setHiddenEnddate(e)},urlCalendarType:function(){var d=this;return d.decodedata(JC.f.getUrlParam(d.calendarTypeEl().attr("name")||"")||"").toLowerCase()},urlStartdate:function(){var d=this;return d.decodedata(JC.f.getUrlParam(d.hiddenStartdateEl().attr("name")||"")||"")},urlEnddate:function(){var d=this;return d.decodedata(JC.f.getUrlParam(d.hiddenEnddateEl().attr("name")||"")||"")},decodedata:function(d){d=d.replace(/[\+]/g," ");try{d=decodeURIComponent(d)}catch(e){}return d},dayrange:function(){return this.intProp("mddayrange")},weekrange:function(){return this.intProp("mdweekrange")},monthrange:function(){return this.intProp("mdmonthrange")},seasonrange:function(){return this.intProp("mdseasonrange")},yearrange:function(){return this.intProp("mdyearrange")},hiddendateiso:function(){return this.boolProp("hiddendateiso")}};BaseMVC.buildView(c);c.View.prototype={init:function(){return this}};BaseMVC.build(c,"Bizs");$(document).ready(function(){JC.f.safeTimeout(function(){$(".js_autoDMultiDate").each(function(){new c($(this))})},null,"DMultiDatesdfasd",50)});return Bizs.DMultiDate})}(typeof define==="function"&&define.amd?define:function(b,a,c){typeof b=="function"&&(c=b);typeof a=="function"&&(c=a);c&&c()},window));