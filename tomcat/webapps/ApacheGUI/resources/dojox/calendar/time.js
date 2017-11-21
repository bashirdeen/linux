//>>built
define("dojox/calendar/time",["dojo/_base/lang","dojo/date","dojo/cldr/supplemental","dojo/date/stamp"],function(l,g,h,k){var f={newDate:function(a,c){c=c||Date;var b;if("number"==typeof a)return new c(a);if(a.getTime)return new c(a.getTime());if(a.toGregorian)return b=a.toGregorian(),c!==Date&&(b=new c(b.getTime())),b;if("string"==typeof a){b=k.fromISOString(a);if(null===b)throw Error("Cannot parse date string ("+a+'), specify a "decodeDate" function that translates this string into a Date object');
c!==Date&&(b=new c(b.getTime()));return b}},floorToDay:function(a,c,b){b=b||Date;c||(a=f.newDate(a,b));a.setHours(0,0,0,0);return a},floorToMonth:function(a,c,b){b=b||Date;c||(a=f.newDate(a,b));a.setDate(1);a.setHours(0,0,0,0);return a},floorToWeek:function(a,c,b,d,e){c=c||Date;b=b||g;d=void 0==d||0>d?h.getFirstDayOfWeek(e):d;e=a.getDay();return e==d?a:f.floorToDay(b.add(a,"day",e>d?-e+d:-e+d-7),!0,c)},floor:function(a,c,b,d,e){d=f.floorToDay(a,d,e);switch(c){case "week":return f.floorToWeek(d,firstDayOfWeek,
dateModule,locale);case "minute":d.setHours(a.getHours());d.setMinutes(Math.floor(a.getMinutes()/b)*b);break;case "hour":d.setHours(Math.floor(a.getHours()/b)*b)}return d},isStartOfDay:function(a,c,b){b=b||g;return 0==b.compare(this.floorToDay(a,!1,c),a)},isToday:function(a,c){c=c||Date;var b=new c;return a.getFullYear()==b.getFullYear()&&a.getMonth()==b.getMonth()&&a.getDate()==b.getDate()}};return f});