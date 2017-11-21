//>>built
define("net/apachegui/Editor","dojo/_base/declare dojo/dom dijit/registry dojo/on dojo/request dojo/dom-class dojo/dom-construct dojo/_base/window dojo/query dojo/_base/event dojo/_base/json dojo/dom-geometry net/apachegui/EditorAutoSuggest".split(" "),function(l,g,b,c,h,d,m,n,e,p,r,k,q){l("net.apachegui.Editor",null,{editor:null,lastPos:null,lastQuery:null,saveState:!1,currTheme:null,tabsShown:!1,currMode:null,openTime:-1,refreshUpdateTimerHandler:null,reloadDialogOpen:!1,scrolledLine:-1,editorAutoSuggest:null,
modes:{plain:"text/plain",conf:"text/apache-conf",html:"text/html",css:"text/css",xml:"application/xml",javascript:"text/javascript",json:"application/json",php:"application/x-httpd-php",python:"text/x-python",perl:"text/x-perl",shell:"text/x-sh",properties:"text/x-properties"},init:function(){var a=net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.editorTheme);""==a?this.setTheme("default"):this.setTheme(a);a=net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.showTabs);
""==a||"false"==a?(this.tabsShown=!1,this.hideTabs()):(this.tabsShown=!0,this.showTabs());m.create("div",{id:"searchPane"},n.body());this.initToolbar();this.startUpdateTimer()},setOpenTime:function(a){this.openTime=a=parseInt(a)},getOpenTime:function(){return this.openTime},startUpdateTimer:function(){this.stopUpdateTimer();this.refreshUpdateTimerHandler=net.apachegui.Interval.setInterval(this.checkLastModifiedTime.bind(this),5E3)},stopUpdateTimer:function(){net.apachegui.Interval.clearInterval(this.refreshUpdateTimerHandler)},
getInitEditorOptions:function(){var a=this;return{lineNumbers:!0,tabMode:"indent",onChange:function(){a.updateEditor()},onFocus:function(){-1<a.scrolledLine&&(a.editor.setLineClass(a.scrolledLine,null,null),a.scrolledLine=-1)},onCursorActivity:function(){a.editor.matchHighlight("CodeMirror-matchhighlight")}}},setEditor:function(a,b){this.editor=CodeMirror.fromTextArea(document.getElementById(a),this.getInitEditorOptions());this.editorAutoSuggest=new q(this.editor,this);b?this.setMode(b):this.setMode("plain");
this.clearSaveState()},scrollToLine:function(a){a-=1;var b=this;this.editor.setCursor(a);setTimeout(function(){b.editor.setLineClass(a,null,"center-me");var f=e(".center-me",e(".CodeMirror-lines")[0])[0],c=e(".CodeMirror-scroll")[0];c.scrollTop=0;var f=k.position(f),d=k.position(c);c.scrollTop=f.y-d.y-Math.round(c.offsetHeight/2);b.scrolledLine=a},200)},initToolbar:function(){b.byId("editorToolbarSave").set("disabled",!0);b.byId("editorToolbarRedo").set("disabled",!0);b.byId("editorToolbarUndo").set("disabled",
!0)},setValue:function(a){this.editor.setValue(a)},getValue:function(){return this.editor.getValue()},updateEditor:function(){this.saveState=!0;this.setToolbarFades()},setToolbarFades:function(){b.byId("editorToolbarSave").set("disabled",!this.saveState);var a=this.editor.historySize();b.byId("editorToolbarUndo").set("disabled",!(0<a.undo));b.byId("editorToolbarRedo").set("disabled",!(0<a.redo))},setFileFades:function(){b.byId("editorFileSave").set("disabled",!this.saveState)},setEditFades:function(){var a=
this,c=this.editor.historySize();b.byId("editorEditUndo").set("disabled",!(0<c.undo));b.byId("editorEditRedo").set("disabled",!(0<c.redo));e("#editorEditAutoFormat, #editorEditComment, #editorEditUnComment").forEach(function(c){b.byId(c.id.toString()).set("disabled",!(0<a.editor.getSelection().length)||!a.isFormattable())})},undo:function(){this.editor.undo()},redo:function(){this.editor.redo()},clearHistory:function(){this.editor.clearHistory()},setReadOnly:function(){this.editor.setOption("readOnly",
!0);b.byId("editorToolbarSave").set("disabled",!0);b.byId("editorToolbarUndo").set("disabled",!0);b.byId("editorToolbarRedo").set("disabled",!0);b.byId("editorFileSave").set("disabled",!0);b.byId("editorEditUndo").set("disabled",!0);b.byId("editorEditRedo").set("disabled",!0)},getReadOnly:function(){return this.editor.getOption("readOnly")},clearSaveState:function(){this.saveState=!1},setTheme:function(a){this.editor.setOption("theme",a);d.toggle(a,"menu_selected");this.currTheme&&(d.toggle(this.currTheme,
"menu_selected"),net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.editorTheme,a));b.byId("editorThemeSelector").get("value")!=a&&b.byId("editorThemeSelector").set("value",a);this.currTheme=a},getMode:function(){return this.currMode},setMode:function(a){this.editor.setOption("mode",this.modes[a]);d.toggle(a,"menu_selected");this.currMode&&d.toggle(this.currMode,"menu_selected");b.byId("editorModeSelector").get("value")!=a&&b.byId("editorModeSelector").set("value",
a);"html"==a||"xml"==a||"php"==a?this.editor.setOption("extraKeys",{"'\x3e'":function(a){a.closeTag(a,"\x3e")},"'/'":function(a){a.closeTag(a,"/")}}):this.editor.setOption("extraKeys",null);if("html"==a||"xml"==a){var c=CodeMirror.newFoldFunction(CodeMirror.tagRangeFinder);this.editor.setOption("onGutterClick",c)}else"php"==a||"css"==a||"javascript"==a||"json"==a?(c=CodeMirror.newFoldFunction(CodeMirror.braceRangeFinder),this.editor.setOption("onGutterClick",c)):this.editor.setOption("onGutterClick",
null);"conf"==a?this.editorAutoSuggest.enableHover():this.editorAutoSuggest.disableHover();this.currMode=a},showTabs:function(){d.add("editorEditShowTabs","menu_selected");d.remove("editorEditHideTabs","menu_selected");e("link[title\x3dtabs_sheet]")[0].disabled=!1;!1==this.tabsShown&&net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.showTabs,"true");this.tabsShown=!0},hideTabs:function(){d.remove("editorEditShowTabs","menu_selected");d.add("editorEditHideTabs",
"menu_selected");e("link[title\x3dtabs_sheet]")[0].disabled=!0;!0==this.tabsShown&&net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.showTabs,"false");this.tabsShown=!1},toggleTabs:function(){!1==this.tabsShown?this.showTabs():this.hideTabs()},isTabsShown:function(){return this.tabsShown},getSelectedRange:function(){return{from:this.editor.getCursor(!0),to:this.editor.getCursor(!1)}},autoFormatSelection:function(){var a=this.getSelectedRange();this.editor.autoFormatRange(a.from,
a.to)},commentSelection:function(){var a=this.getSelectedRange();this.editor.commentRange(!0,a.from,a.to)},unCommentSelection:function(){var a=this.getSelectedRange();this.editor.commentRange(!1,a.from,a.to)},isFormattable:function(){return"html"==this.currMode||"xml"==this.currMode||"css"==this.currMode||"javascript"==this.currMode||"json"==this.currMode},newFile:function(){b.byId("editorNewFileDialog").show()},newFileSubmit:function(){var a=net.apachegui.Util.getQueryParam("file").substring(0,net.apachegui.Util.getQueryParam("file").lastIndexOf("/"))+
"/"+g.byId("editorNewFileFilename").value;h.post("../web/Menu",{data:{option:"newFile",filename:a,type:"file"},handleAs:"text",sync:!0}).response.then(function(c){var f=c.data;200!=c.status?net.apachegui.Util.alert("Error",f):(window.open(window.location.href.substring(0,window.location.href.indexOf("?"))+"?file\x3d"+a),net.apachegui.Menu.getInstance().refresh(),b.byId("editorNewFileDialog").hide())})},setEditorFromFile:function(a,b,c){var d=this,e=net.apachegui.Util.noCloseDialog("Loading","Loading File Please Wait...");
e.show();h.get(a,{query:{option:"getFileAsString",file:b},handleAs:"text",preventCache:!0,sync:!1}).response.then(function(a){d.setValue(a.data);d.clearHistory();d.clearSaveState();d.setToolbarFades();g.byId("filename_container").innerHTML="\x3cem\x3eFile\x3c/em\x3e: "+b;c&&c();e.remove()},function(a){e.remove();net.apachegui.Util.alert("Error",a.response.data)})},checkLastModifiedTime:function(){var a=this,b=net.apachegui.Util.getQueryParam("file");net.apachegui.Main.getInstance().getLastModifiedTime(b,
function(b){b=parseInt(b.data.time);b>a.getOpenTime()&&(a.setOpenTime(b),a.reloadDialogOpen||(a.reloadDialogOpen=!0,net.apachegui.Util.confirmDialog("Reload","This file has been modified outside of this editor. Would you like to reload?",function(b){b?window.location.reload():a.reloadDialogOpen=!1})))},function(a){net.apachegui.Util.alert("Error",a.response.data.message)})},addListeners:function(){var a=this;c(b.byId("editorFileMenu"),"open",function(){a.setFileFades()});c(b.byId("editorEditMenu"),
"open",function(){a.setEditFades()});c(b.byId("editorFileSave"),"click",function(){a.save()});c(b.byId("editorFileNew"),"click",function(){a.newFile()});c(b.byId("editorNewFileCancel"),"click",function(){b.byId("editorNewFileDialog").hide()});c(b.byId("editorNewFileForm"),"submit",function(b){p.stop(b);this.validate()?a.newFileSubmit():net.apachegui.Util.alert("Error","Please fix fields")});c(b.byId("editorEditUndo"),"click",function(){a.undo()});c(b.byId("editorEditRedo"),"click",function(){a.redo()});
c(b.byId("editorEditFind"),"click",function(){CodeMirror.commands.find(a.editor)});c(b.byId("editorEditReplace"),"click",function(){CodeMirror.commands.replace(a.editor)});c(b.byId("editorEditReplaceAll"),"click",function(){CodeMirror.commands.replaceAll(a.editor)});c(b.byId("editorToolbarSave"),"click",function(){a.save()});c(b.byId("editorToolbarUndo"),"click",function(){a.undo()});c(b.byId("editorToolbarRedo"),"click",function(){a.redo()});e(".command").forEach(function(a){a=a.id.toString();g.byId(a).innerHTML=
CodeMirror.keyMap.getCurrentKey(a,"default")});e(".editor_theme").forEach(function(d){var e=d.id.toString();c(b.byId(e),"click",function(){a.setTheme(e)})});c(b.byId("editorThemeSelector"),"change",function(){a.setTheme(this.get("value"))});c(b.byId("editorEditHideTabs"),"click",function(){a.hideTabs()});c(b.byId("editorEditShowTabs"),"click",function(){a.showTabs()});c(b.byId("editorToolbarTabs"),"click",function(){a.toggleTabs()});e(".editor_mode").forEach(function(d){var e=d.id.toString();c(b.byId(e),
"click",function(){a.setMode(e)})});c(b.byId("editorModeSelector"),"change",function(){a.setMode(this.get("value"))});c(window,"beforeunload",function(b){if(!0==a.saveState&&net.apachegui.Main.getInstance().isSessionActive())return b&&(b.returnValue="You have not saved your changes. Please confirm that you want to leave this page."),"You have not saved your changes. Please confirm that you want to leave this page."});CodeMirror.commands.autoFormat=function(){a.isFormattable()?a.autoFormatSelection():
net.apachegui.Util.alert("Unsupported","Sorry, this command is only supported for html, xml, css, json and javascript modes")};CodeMirror.commands.comment=function(){a.isFormattable()?a.commentSelection():net.apachegui.Util.alert("Unsupported","Sorry, this command is only supported for html, xml, css, json and javascript modes")};CodeMirror.commands.unComment=function(){a.isFormattable()?a.unCommentSelection():net.apachegui.Util.alert("Unsupported","Sorry, this command is only supported for html, xml, css, json and javascript modes")};
c(b.byId("editorEditAutoFormat"),"click",function(){CodeMirror.commands.autoFormat(a.editor)});c(b.byId("editorEditComment"),"click",function(){CodeMirror.commands.comment(a.editor)});c(b.byId("editorEditUnComment"),"click",function(){CodeMirror.commands.unComment(a.editor)})}})});