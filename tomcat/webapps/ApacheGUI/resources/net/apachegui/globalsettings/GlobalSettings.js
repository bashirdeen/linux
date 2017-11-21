//>>built
define("net/apachegui/globalsettings/GlobalSettings","dojo/_base/declare dijit/registry dojo/on ../GlobalTree net/apachegui/globalsettings/Networking net/apachegui/globalsettings/Modules net/apachegui/globalsettings/Mime".split(" "),function(e,d,f,g,h,k){e("net.apachegui.globalsettings.GlobalSettings",null,{initialized:!1,loadedTabs:[],TABS:{NETWORKING:"networkingTab",MIME:"mimeTab",MODULES:"modulesTab"},init:function(){!1===this.initialized&&(this.addListeners(),this.loadTab(this.TABS.NETWORKING),
this.initialized=!0)},loadTab:function(a){if(-1==this.loadedTabs.indexOf(a)){this.loadedTabs.push(a);var c="",b;a==this.TABS.NETWORKING&&(c="Networking.jsp",b=function(){net.apachegui.globalsettings.Networking.getInstance().init()});a==this.TABS.MIME&&(c="Mime.jsp",b=function(){net.apachegui.globalsettings.Mime.getInstance().init()});a==this.TABS.MODULES&&(c="Modules.jsp",b=function(){net.apachegui.globalsettings.Modules.getInstance().init()});a=d.byId(a);a.attr("onDownloadEnd",function(){b&&b()});
a.attr("href","../jsp/global_settings/"+c)}},addListeners:function(){var a=this;d.byId("globalSettingsTabs").watch("selectedChildWidget",function(c,b,d){a.loadTab(d.id)})}});net.apachegui.Util.setupSingletonInstance(net.apachegui.globalsettings.GlobalSettings)});