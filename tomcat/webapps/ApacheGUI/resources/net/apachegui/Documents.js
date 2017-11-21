//>>built
define("net/apachegui/Documents","dojo/_base/declare dojo/request dijit/registry dojo/on net/apachegui/Editor dojo/_base/json".split(" "),function(f,e,g,h,k,l){f("net.apachegui.Documents",[net.apachegui.Editor],{initialized:!1,isText:!1,init:function(){!1===this.initialized&&(this.inherited(arguments),this.addListeners(),this.initialized=!0)},getIsText:function(){return this.isText},setIsText:function(a){this.isText=a},save:function(){var a=net.apachegui.Documents.getInstance();if(!0!=a.getReadOnly()){var b=
net.apachegui.Util.getQueryParam("file"),c=net.apachegui.Util.noCloseDialog("Saving","Saving Please Wait...");c.show();a.stopUpdateTimer();e.post("../web/Documents",{data:{option:"save",path:b,content:a.editor.getValue()},handleAs:"json",sync:!1}).response.then(function(d){d=d.data;a.clearSaveState();a.setToolbarFades();-1!=d.time&&a.setOpenTime(d.time);c.remove();a.startUpdateTimer()},function(a){c.remove();net.apachegui.Util.alert("Info",a.response.data.message)})}},getDocumentsList:function(){var a=
net.apachegui.Util.noCloseDialog("Loading","Loading ...");a.show();e.get("../web/Documents",{query:{option:"documentsList"},handleAs:"json",preventCache:!0,sync:!1}).response.then(function(b){b=b.data;var c="",d;for(d in b.files)c=c+b.files[d]+"\x3cbr/\x3e";net.apachegui.Util.alert("Documents List",c);a.remove()},function(b){a.remove();net.apachegui.Util.alert("Info",b.response.data.message)})},addListeners:function(){this.inherited(arguments);CodeMirror.commands.save=this.save;var a=this;h(g.byId("editorDocumentsList"),
"click",function(){a.getDocumentsList()})}});net.apachegui.Util.setupSingletonInstance(net.apachegui.Documents)});