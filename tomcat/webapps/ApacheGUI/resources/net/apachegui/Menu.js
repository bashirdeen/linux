//>>built
define("net/apachegui/Menu","dojo/_base/declare dojo/dom dijit/registry dojo/on dojo/request dojo/_base/json dojo/_base/event dojo/dom-geometry dojo/query dojo/dom-style".split(" "),function(n,k,b,h,l,s,m,p,q,r){n("net.apachegui.Menu",null,{currentMenuId:null,fileBuffer:null,initialized:!1,menuConnection:null,currWidth:0,searchInterval:null,constructor:function(){this.currentMenuId=new String("");this.fileBuffer={}},init:function(){!1===this.initialized&&(this.addListeners(),this.bindMenu(),this.initialized=
!0)},bindMenu:function(){var a=b.byId("tree_menu");a.selector=".dijitTreeNode";a.bindDomNode(b.byId("menuTree").domNode)},setCurrentMenuId:function(a){this.currentMenuId=a.toString()},getCurrentMenuId:function(){return this.currentMenuId},setMenuFades:function(a){b.byId("renameMenuItem").set("disabled",!1);b.byId("newMenuItem").set("disabled",!1);b.byId("cutMenuItem").set("disabled",!1);b.byId("copyMenuItem").set("disabled",!1);b.byId("pasteMenuItem").set("disabled",!1);b.byId("deleteMenuItem").set("disabled",
!1);b.byId("uploadMenuItem").set("disabled",!1);b.byId("downloadMenuItem").set("disabled",a.item.children);b.byId("searchMenuItem").set("disabled",!a.item.children);b.byId("newTabMenuItem").set("disabled",a.item.children);"Configuration-"==this.currentMenuId.substring(0,14)?(b.byId("newMenuItem").set("disabled",!a.item.children),b.byId("pasteMenuItem").set("disabled",!a.item.children),(!this.fileBuffer.type||!this.fileBuffer.file)&&b.byId("pasteMenuItem").set("disabled",!0),b.byId("uploadMenuItem").set("disabled",
!a.item.children)):"Documents-"==this.currentMenuId.substring(0,10)?(b.byId("newMenuItem").set("disabled",!a.item.children),b.byId("pasteMenuItem").set("disabled",!a.item.children),(!this.fileBuffer.type||!this.fileBuffer.file)&&b.byId("pasteMenuItem").set("disabled",!0),b.byId("uploadMenuItem").set("disabled",!a.item.children)):"Logs-"==this.currentMenuId.substring(0,5)?(b.byId("renameMenuItem").set("disabled",!0),b.byId("newMenuItem").set("disabled",!0),b.byId("cutMenuItem").set("disabled",!0),
b.byId("copyMenuItem").set("disabled",!0),b.byId("pasteMenuItem").set("disabled",!0),b.byId("uploadMenuItem").set("disabled",!0),b.byId("deleteMenuItem").set("disabled",a.item.children)):(b.byId("renameMenuItem").set("disabled",!0),b.byId("newMenuItem").set("disabled",!0),b.byId("cutMenuItem").set("disabled",!0),b.byId("copyMenuItem").set("disabled",!0),b.byId("pasteMenuItem").set("disabled",!0),b.byId("uploadMenuItem").set("disabled",!0),b.byId("downloadMenuItem").set("disabled",!0),b.byId("searchMenuItem").set("disabled",
!0),b.byId("deleteMenuItem").set("disabled",!0))},rename:function(){this.currentMenuId==net.apachegui.Main.getInstance().getCurrentOption()?net.apachegui.Util.alert("Error","You can not rename a file that you are focused on"):(k.byId("renameFileOldFile").innerHTML=this.currentMenuId.substring(this.currentMenuId.lastIndexOf("/")+1),b.byId("renameFileFilename").set("value",""),b.byId("renameFileDialog").show())},renameFileSubmit:function(){var a=this,e=net.apachegui.Util.noCloseDialog("Renaming","Renaming Please Wait...");
e.show();l.post("../web/Menu",{data:{option:"renameFile",oldFile:this.currentMenuId.substring(this.currentMenuId.indexOf("-")+1),newFile:this.currentMenuId.substring(this.currentMenuId.indexOf("-")+1,this.currentMenuId.lastIndexOf("/")+1)+k.byId("renameFileFilename").value},handleAs:"json",sync:!1}).response.then(function(c){b.byId("renameFileDialog").hide();a.refresh();e.remove()},function(a){net.apachegui.Util.alert("Info",a.response.data.message);e.remove()})},newFile:function(){b.byId("newFileDialog").show()},
newFileSubmit:function(){var a=this,e="file";k.byId("newFileFileTypeDirectory").checked&&(e="directory");var c=net.apachegui.Util.noCloseDialog("New File","Creating New File Please Wait...");c.show();l.post("../web/Menu",{data:{option:"newFile",filename:this.currentMenuId.substring(this.currentMenuId.indexOf("-")+1)+"/"+k.byId("newFileFilename").value,type:e},handleAs:"json",sync:!1}).response.then(function(d){b.byId("newFileDialog").hide();a.refresh();c.remove()},function(a){net.apachegui.Util.alert("Info",
a.response.data.message);c.remove()})},cut:function(){this.fileBuffer.type="cut";this.fileBuffer.file=this.currentMenuId.substring(this.currentMenuId.indexOf("-")+1)},copy:function(){this.fileBuffer.type="copy";this.fileBuffer.file=this.currentMenuId.substring(this.currentMenuId.indexOf("-")+1)},paste:function(){var a=this;if(this.fileBuffer.type&&this.fileBuffer.file){var b=this.fileBuffer.type,c=net.apachegui.Util.noCloseDialog("Pasting","Pasting Please Wait...");c.show();l.post("../web/Menu",{data:{option:b,
oldFile:this.fileBuffer.file,directory:this.currentMenuId.substring(this.currentMenuId.indexOf("-")+1)},handleAs:"json",sync:!1}).response.then(function(b){a.fileBuffer={};a.refresh();c.remove()},function(a){net.apachegui.Util.alert("Info",a.response.data.message);c.remove()})}},deleteFile:function(){var a=this;net.apachegui.Util.confirmDialog("Confirm","Are you sure that you would like to delete "+this.currentMenuId.substring(this.currentMenuId.indexOf("-")+1)+"?",function(b){if(b){var c=net.apachegui.Util.noCloseDialog("Deleting",
"Deleting Please Wait...");c.show();l.post("../web/Menu",{data:{option:"deleteFile",filename:a.currentMenuId.substring(a.currentMenuId.indexOf("-")+1)},handleAs:"json",sync:!1}).response.then(function(b){a.refresh();c.remove()},function(a){net.apachegui.Util.alert("Info",a.response.data.message);c.remove()})}})},hideNewFile:function(){b.byId("newFileDialog").hide()},hideRenameFile:function(){b.byId("renameFileDialog").hide()},newTab:function(){this.isGUISettings(this.getCurrentMenuId())&&window.open("GUISettings.jsp");
this.isHistory(this.getCurrentMenuId())&&window.open("History.jsp");this.isControl(this.getCurrentMenuId())&&window.open("Control.jsp");this.isGlobalSettings(this.getCurrentMenuId())&&window.open("GlobalSettings.jsp");this.isVirtualHosts(this.getCurrentMenuId())&&window.open("VirtualHosts.jsp");this.isGlobalTree(this.getCurrentMenuId())&&window.open("GlobalTree.jsp");this.isLogs(this.getCurrentMenuId())&&window.open("Logs.jsp?file\x3d"+this.extractLogFile(this.getCurrentMenuId()));this.isDocuments(this.getCurrentMenuId())&&
window.open("Documents.jsp?file\x3d"+this.extractDocumentFile(this.getCurrentMenuId()));this.isConfiguration(this.getCurrentMenuId())&&window.open("Configuration.jsp?file\x3d"+this.extractConfigurationFile(this.getCurrentMenuId()))},upload:function(){this.isDocuments(this.getCurrentMenuId())&&(k.byId("uploadDirectoryName").value=this.extractDocumentFile(this.getCurrentMenuId()));this.isConfiguration(this.getCurrentMenuId())&&(k.byId("uploadDirectoryName").value=this.extractConfigurationFile(this.getCurrentMenuId()));
b.byId("uploadFileDialog").show()},download:function(){this.isLogs(this.getCurrentMenuId())&&window.open("../web/DownloadFile?file\x3d"+this.extractLogFile(this.getCurrentMenuId()));this.isDocuments(this.getCurrentMenuId())&&window.open("../web/DownloadFile?file\x3d"+this.extractDocumentFile(this.getCurrentMenuId()));this.isConfiguration(this.getCurrentMenuId())&&window.open("../web/DownloadFile?file\x3d"+this.extractConfigurationFile(this.getCurrentMenuId()))},search:function(){this.isConfiguration(this.getCurrentMenuId())?
b.byId("searchConfigurationDialog").show():(this.isDocuments(this.getCurrentMenuId())&&(k.byId("searchDirectoryDisplay").innerHTML=this.extractDocumentFile(this.getCurrentMenuId())),this.isLogs(this.getCurrentMenuId())&&(k.byId("searchDirectoryDisplay").innerHTML=this.extractLogFile(this.getCurrentMenuId())),b.byId("searchDialog").show())},clearSearchInterval:function(){this.searchInterval&&net.apachegui.Interval.clearInterval(this.searchInterval)},processSearchResultContent:function(a){return a.replace(/searchstartborder/g,
'\x3cspan class\x3d"search_result"\x3e').replace(/searchendborder/g,"\x3c/span\x3e")},submitSearch:function(){var a=this,e=k.byId("searchFileFilter").value.trim();if(""==e)net.apachegui.Util.alert("Info","Filter is required.");else{var c=k.byId("searchFileList").value.trim();if(""==c)net.apachegui.Util.alert("Info","File extension list is required.");else{var d=k.byId("searchRecursively").checked,f=k.byId("searchDirectoryDisplay").innerHTML.trim();l.post("../web/Menu",{data:{option:"submitSearch",
searchFilter:e,searchFileList:c,searchRecursively:d,searchDirectory:f},handleAs:"json",sync:!1}).response.then(function(c){var e="",e=c.data.started?"Grabbing the list of files to search...":"There appears to be a search already in progress";k.byId("searchProgressMessage").innerHTML=e;b.byId("searchProgressDialog").show();a.clearSearchInterval();a.searchInterval=net.apachegui.Interval.setInterval(function(){a.searchCheck()},2E3)},function(a){net.apachegui.Util.alert("Info",a.response.data.message)})}}},
searchCheck:function(){var a=this;l.get("../web/Menu",{query:{option:"searchCheck"},handleAs:"json",sync:!1,preventCache:!0}).response.then(function(e){var c=e.data;e=c.status;"running"==e&&(k.byId("searchProgressMessage").innerHTML=c.output);if("done"==e){var d='\x3cdiv id\x3d"searchResults"\x3e',f=c.results;if(0==f.length)d+="Search string not found";else{var d=d+("Returning a maximum of "+c.maxResults+" results\x3cbr/\x3e"),c=1,g;for(g in f){var h="Documents.jsp";f[g].path.startsWith(net.apachegui.Main.getInstance().getLogDirectoryPath())&&
(h="Logs.jsp");d+="\x3cstrong\x3e"+c+'\x3c/strong\x3e: \x3ca href\x3d"'+h+"?file\x3d"+f[g].path+"\x26lineNum\x3d"+f[g].line+'" target\x3d"_blank"\x3e'+f[g].path+"\x3c/a\x3e Line: "+f[g].line;d+="\x3cbr/\x3e";d+="\x3cp\x3e"+a.processSearchResultContent(f[g].content)+"\x3c/p\x3e";c++}}net.apachegui.Util.alert("Search Results",d+"\x3c/div\x3e");b.byId("searchProgressDialog").hide();a.clearSearchInterval()}"cancelled"==e&&(a.clearSearchInterval(),b.byId("searchProgressDialog").hide())},function(a){net.apachegui.Util.alert("Info",
a.response.data.message)})},searchCancel:function(){this.clearSearchInterval();var a=net.apachegui.Util.noCloseDialog("Cancelling","Cancelling Please Wait...");a.show();l.post("../web/Menu",{data:{option:"searchCancel"},handleAs:"json",sync:!1}).response.then(function(e){b.byId("searchProgressDialog").hide();a.remove()},function(b){net.apachegui.Util.alert("Info",b.response.data.message);a.remove()})},submitConfigurationSearch:function(){var a=this,b=k.byId("searchConfigurationFilter").value.trim();
if(""==b)net.apachegui.Util.alert("Info","Filter is required.");else{var c=k.byId("searchConfigurationActiveFilesFilter").checked,d=k.byId("searchConfigurationCommentsFilter").checked,f=net.apachegui.Util.noCloseDialog("Generating","Searching Files Please Wait...");f.show();l.get("../web/Configuration",{query:{option:"search",filter:b,activeFilesFilter:c,commentsFilter:d},handleAs:"json",preventCache:!0,sync:!1}).response.then(function(b){var c=b.data;b='\x3cdiv id\x3d"searchResults"\x3e';var d=c.results;
if(0==d.length)b+="Search string not found";else{b+="Returning a maximum of "+c.maxResults+" results\x3cbr/\x3e";var c=1,e;for(e in d)b+="\x3cstrong\x3e"+c+'\x3c/strong\x3e: \x3ca href\x3d"Configuration.jsp?file\x3d'+d[e].path+"\x26lineNum\x3d"+d[e].line+'" target\x3d"_blank"\x3e'+d[e].path+"\x3c/a\x3e Line: "+d[e].line,b+="\x3cbr/\x3e",b+="\x3cp\x3e"+a.processSearchResultContent(d[e].content)+"\x3c/p\x3e",c++}net.apachegui.Util.alert("Search Results",b+"\x3c/div\x3e");f.remove()},function(a){f.remove();
net.apachegui.Util.alert("Info",a.response.data.message)})}},refresh:function(){b.byId("menuTree").reload();this.focusMenuOption(net.apachegui.Main.getInstance().getCurrentOption())},focusMenuOption:function(a){this.setCurrentMenuId(a);var e=net.apachegui.Main.getInstance(),c=b.byId("menuTree");this.isGUISettings(a)&&c.set("path",["apacheRoot","GUISettings"]);this.isHistory(a)&&c.set("path",["apacheRoot","History"]);this.isControl(a)&&c.set("path",["apacheRoot","Control"]);this.isGlobalSettings(a)&&
c.set("path",["apacheRoot","Global_Settings"]);this.isVirtualHosts(a)&&c.set("path",["apacheRoot","Virtual_Hosts"]);this.isGlobalTree(a)&&c.set("path",["apacheRoot","Global_Tree"]);var d,f,g;if(this.isLogs(a)){d=[];g=e.getLogDirectoryPath();f=a.substring(5);d.push("apacheRoot");d.push("Logs-"+g);for(g=g.length+1;g<=f.length;g++)g==f.length?d.push("Logs-"+f):"/"==f.charAt(g)&&d.push("Logs-"+f.substring(0,g));c.set("path",d)}if(this.isDocuments(a)&&(d=[],g=e.isWindows()?e.getDocDirectoryPath():"/",
f=a.substring(10),e.validateFileExists(f))){d.push("apacheRoot");d.push("Documents-"+g);for(g=g.length+1;g<=f.length;g++)g==f.length?d.push("Documents-"+f):"/"==f.charAt(g)&&d.push("Documents-"+f.substring(0,g));c.set("path",d)}if(this.isConfiguration(a)&&(d=[],g=e.getConfDirectoryPath(),f=a.substring(14),e.validateFileExists(f))){d.push("apacheRoot");d.push("Configuration-"+g);for(g=g.length+1;g<=f.length;g++)g==f.length?d.push("Configuration-"+f):"/"==f.charAt(g)&&d.push("Configuration-"+f.substring(0,
g));c.set("path",d)}},menuClick:function(a,b){var c=a.toString();this.isGUISettings(c)&&(window.location.href="GUISettings.jsp");this.isHistory(c)&&(window.location.href="History.jsp");this.isControl(c)&&(window.location.href="Control.jsp");this.isGlobalSettings(c)&&(window.location.href="GlobalSettings.jsp");this.isVirtualHosts(c)&&(window.location.href="VirtualHosts.jsp");this.isGlobalTree(c)&&(window.location.href="GlobalTree.jsp");this.isLogs(c)&&(window.location.href="Logs.jsp?file\x3d"+this.extractLogFile(c));
this.isDocuments(c)&&(window.location.href="Documents.jsp?file\x3d"+this.extractDocumentFile(c));this.isConfiguration(c)&&(window.location.href="Configuration.jsp?file\x3d"+this.extractConfigurationFile(c))},getItemByIdentity:function(a){var b;apacheStore.fetchItemByIdentity({identity:a,onItem:function(a){b=a}});return b},isConfiguration:function(a){return a.startsWith("Configuration-")},extractConfigurationFile:function(a){return this.isConfiguration?a.substring(14):null},isDocuments:function(a){return a.startsWith("Documents-")},
extractDocumentFile:function(a){return this.isDocuments?a.substring(10):null},isLogs:function(a){return a.startsWith("Logs-")},extractLogFile:function(a){return this.isLogs?a.substring(5):null},isControl:function(a){return"Control"==a},isGlobalSettings:function(a){return"Global_Settings"==a},isHistory:function(a){return"History"==a},isGUISettings:function(a){return"GUISettings"==a},isVirtualHosts:function(a){return"Virtual_Hosts"==a},isGlobalTree:function(a){return"Global_Tree"==a},addListeners:function(){var a=
this;h(b.byId("renameMenuItem"),"click",function(){a.rename()});h(b.byId("newMenuItem"),"click",function(){a.newFile()});h(b.byId("cutMenuItem"),"click",function(){a.cut()});h(b.byId("copyMenuItem"),"click",function(){a.copy()});h(b.byId("pasteMenuItem"),"click",function(){a.paste()});h(b.byId("deleteMenuItem"),"click",function(){a.deleteFile()});h(b.byId("refreshMenuItem"),"click",function(){a.refresh()});h(b.byId("uploadMenuItem"),"click",function(){a.upload()});h(b.byId("downloadMenuItem"),"click",
function(){a.download()});h(b.byId("searchMenuItem"),"click",function(){a.search()});h(b.byId("newTabMenuItem"),"click",function(){a.newTab()});h(b.byId("menuTree"),"click",function(b){a.menuClick(b.id,b.type)});h(b.byId("tree_menu"),"focus",function(c){c=b.getEnclosingWidget(this.currentTarget);a.setCurrentMenuId(c.item.id);a.setMenuFades(c)});h(b.byId("newFileCancel"),"click",function(){a.hideNewFile()});h(b.byId("renameFileCancel"),"click",function(){a.hideRenameFile()});h(b.byId("uploadFileCancel"),
"click",function(){b.byId("uploadFileDialog").hide()});h(b.byId("newFileForm"),"submit",function(b){m.stop(b);this.validate()?a.newFileSubmit():net.apachegui.Util.alert("Error","Please fix fields")});h(b.byId("renameFileForm"),"submit",function(b){m.stop(b);this.validate()?a.renameFileSubmit():net.apachegui.Util.alert("Error","Please fix fields")});h(b.byId("uploadFile"),"complete",function(){a.refresh()});h(b.byId("submitSearchConfigurationButton"),"click",function(){a.submitConfigurationSearch()});
h(b.byId("hideSearchConfigurationButton"),"click",function(){b.byId("searchConfigurationDialog").hide()});h(b.byId("submitSearchButton"),"click",function(){a.submitSearch()});h(b.byId("hideSearchButton"),"click",function(){b.byId("searchDialog").hide()});h(b.byId("searchProgressCancel"),"click",function(){a.searchCancel()});var e=q(".dijitTreeContainer",k.byId("menuTree"))[0];net.apachegui.Interval.setInterval(function(){var c=p.position(e).w,c=c+20;a.currWidth!=c&&20<c&&(a.currWidth=c,r.set("leftCol",
"width",c+"px"),b.byId("appLayout").resize(),b.byId("leftCol")._afterResize())},150)}});net.apachegui.Util.setupSingletonInstance(net.apachegui.Menu)});