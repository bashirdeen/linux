//>>built
define("net/apachegui/History","dojo/_base/declare dojo/dom dijit/registry dojo/on dojo/request dojo/_base/json dojo/data/ItemFileWriteStore dojox/grid/DataGrid dijit/Tooltip dijit/form/Button dojo/_base/array dojo/dom-style dojo/query dojo/dom-attr dojo/_base/xhr net/apachegui/Control dojo/io-query".split(" "),function(x,b,d,c,h,B,y,z,n,s,t,q,u,v,A,C,w){x("net.apachegui.History",null,{initialized:!1,gridCount:0,hosts:{enabled:[],disabled:[]},type:{ENABLE:"Enable",DISABLE:"Disable"},searchEditor:null,
graphEditor:null,init:function(){if(!1==this.initialized){var a=this.getHistoryRetention();b.byId("historyRetention").value=a;a=this.getHistoryBuffer();b.byId("historyBuffer").value=a;var g=new Date,a=(g.getMonth()+1).toString();1==a.length&&(a="0"+a);var k=g.getDate().toString();1==k.length&&(k="0"+k);var l=g.getFullYear().toString(),f=g.getHours().toString();1==f.length&&(f="0"+f);var e=g.getMinutes().toString();1==e.length&&(e="0"+e);g=g.getSeconds().toString();1==g.length&&(g="0"+g);b.byId("startDate").value=
k+"/"+a+"/"+l;b.byId("startTime").value="00:00:00";b.byId("endDate").value=k+"/"+a+"/"+l;b.byId("endTime").value=f+":"+e+":"+g;b.byId("graphDate").value=k+"/"+a+"/"+l;this.populateEnabled();this.populateDisabled();this.addListeners();this.searchEditor=CodeMirror.fromTextArea(b.byId("search_database_textarea"),{mode:"text/x-mysql"});this.updateSearchQuery();this.deleteEditor=CodeMirror.fromTextArea(b.byId("delete_database_textarea"),{mode:"text/x-mysql"});this.updateDeleteUpdate();this.graphEditor=
CodeMirror.fromTextArea(b.byId("graph_database_textarea"),{mode:"text/x-mysql"});this.updateGraphQuery();this.initialized=!0}},updateSearchQuery:function(){var a=this;h.get("../web/History",{query:{option:"getSearchQuery",startDate:b.byId("startDate").value,startTime:b.byId("startTime").value,endDate:b.byId("endDate").value,endTime:b.byId("endTime").value,host:b.byId("host").value,userAgent:b.byId("userAgent").value,requestString:b.byId("requestString").value,status:b.byId("status").value,contentSize:b.byId("contentSize").value,
maxResults:b.byId("maxResults").value},handleAs:"json",sync:!1,preventCache:!0}).response.then(function(b){a.searchEditor.setValue(b.data.query)},function(a){net.apachegui.Util.alert("Error",a.response.data.message)})},updateDeleteUpdate:function(){var a=this;h.get("../web/History",{query:{option:"getDeleteUpdate",startDate:b.byId("startDate").value,startTime:b.byId("startTime").value,endDate:b.byId("endDate").value,endTime:b.byId("endTime").value,host:b.byId("host").value,userAgent:b.byId("userAgent").value,
requestString:b.byId("requestString").value,status:b.byId("status").value,contentSize:b.byId("contentSize").value},handleAs:"json",sync:!1,preventCache:!0}).response.then(function(b){a.deleteEditor.setValue(b.data.update)},function(a){net.apachegui.Util.alert("Error",a.response.data.message)})},updateGraphQuery:function(){var a=this;h.get("../web/History",{query:{option:"getGraphQuery",date:b.byId("graphDate").value,type:d.byId("graphType").value,host:b.byId("graphHost").value,userAgent:b.byId("graphUserAgent").value,
requestString:b.byId("graphRequestString").value,status:b.byId("graphStatus").value,contentSize:b.byId("graphContentSize").value},handleAs:"json",sync:!1,preventCache:!0}).response.then(function(b){a.graphEditor.setValue(b.data.query)},function(a){net.apachegui.Util.alert("Error",a.response.data.message)})},buildGraph:function(a,b,k,l){for(var f=[],e=0;e<a.length;e++){var d={};d.id=e;for(var c=a[e].NetworkInfo,m="",h,p,n=0;n<c.length;n++)h=c[n].port,p=c[n].address,m=-1==h?-1<p.indexOf(":")?m+("["+
p+"]"):m+p:-1<p.indexOf(":")?m+("["+p+"]:"+h):m+(p+":"+h),m+=" ";m=m.trim();d.networkinfo=m;d.servername=a[e].ServerName;l&&(d.toggle='\x3cinput class\x3d"host_checkbox" data-index\x3d"'+e+'" name\x3d"'+k.toLowerCase()+"_"+e+'" type\x3d"checkbox"/\x3e');f.push(d)}a=new y({data:{identifier:"id",label:"name",items:f}});f=[];f.push({name:"Network Info",field:"networkinfo",width:"auto"});f.push({name:"ServerName",field:"servername",width:"auto"});l&&f.push({name:k,field:"toggle",width:"60px"});(new z({id:"grid-"+
this.gridCount,store:a,structure:[f],selectable:!0,style:"width:100%;",autoHeight:!0,escapeHTMLInData:!1,rowSelector:"20px"})).placeAt(b);this.gridCount++},populateEnabled:function(){b.byId("history_enable_loading_container").style.display="block";var a=b.byId("history_enabled_hosts_container");t.forEach(d.findWidgets(a),function(a){a.destroyRecursive()});a.innerHTML="";var g=this;h.get("../web/History",{query:{option:"getEnabled"},handleAs:"json",sync:!1,preventCache:!0}).response.then(function(k){b.byId("history_enable_loading_container").style.display=
"none";var l=k.data.global,f=k.data.enabled;k=k.data.globalEnable;g.hosts.enabled=f;var e;if(k){e=document.createElement("div");var c=document.createElement("h4");c.innerHTML="Global ";e.appendChild(c);var h=document.createElement("span");h.className="warningTooltip";c.appendChild(h);h=new s({label:"Disable",onClick:function(){g.updateGlobal(g.type.DISABLE)}});c.appendChild(h.domNode);a.appendChild(e);new n({connectId:[e.getElementsByClassName("warningTooltip")[0]],label:"By disabling history Globally you will be doing the following:\x3cbr/\x3e\x3cbr/\x3e1. Disable history for any requests that do not belong to a VirtualHost.\x3cbr/\x3e2. Disable history for any VirtualHosts that do not implement their own CustomLog.\x3cbr/\x3e\x3cbr/\x3eAny hosts shown below do no implement their own CustomLog."});
g.buildGraph(l,"history_enabled_hosts_container",g.type.DISABLE)}l=d.byId("saveDisableButton");0==f.length?(q.set(l.domNode,"display","none"),k||(f=document.createElement("p"),f.style.textAlign="center",f.innerHTML="There are no enabled hosts for tracking.",a.appendChild(f))):(e=document.createElement("div"),e.innerHTML='\x3ch4\x3eNon-Global \x3cspan class\x3d"warningTooltip"\x3e\x3c/span\x3e\x3c/h4\x3e',a.appendChild(e),new n({connectId:[e.getElementsByClassName("warningTooltip")[0]],label:"The following hosts implement their own CustomLog. They must be disabled individually."}),
g.buildGraph(f,"history_enabled_hosts_container",g.type.DISABLE,!0),q.set(l.domNode,"display","inline"))},function(a){net.apachegui.Util.alert("Error",a.response.data.message)})},populateDisabled:function(){b.byId("history_disable_loading_container").style.display="block";var a=b.byId("history_disabled_hosts_container");t.forEach(d.findWidgets(a),function(a){a.destroyRecursive()});a.innerHTML="";var g=this;h.get("../web/History",{query:{option:"getDisabled"},handleAs:"json",sync:!1,preventCache:!0}).response.then(function(k){b.byId("history_disable_loading_container").style.display=
"none";var c=k.data.global,f=k.data.disabled;k=k.data.globalEnable;g.hosts.disabled=f;var e;if(!k){e=document.createElement("div");var h=document.createElement("h4");h.innerHTML="Global ";e.appendChild(h);var r=document.createElement("span");r.className="warningTooltip";h.appendChild(r);r=new s({label:"Enable",onClick:function(){g.updateGlobal(g.type.ENABLE)}});h.appendChild(r.domNode);a.appendChild(e);new n({connectId:[e.getElementsByClassName("warningTooltip")[0]],label:"By enabling history Globally you will be doing the following:\x3cbr/\x3e\x3cbr/\x3e1. Enable history for any requests that do not belong to a VirtualHost.\x3cbr/\x3e2. Enable history for any VirtualHosts that do not implement their own CustomLog.\x3cbr/\x3e\x3cbr/\x3eAny hosts shown below do no implement their own CustomLog."});
g.buildGraph(c,"history_disabled_hosts_container",g.type.ENABLE)}c=d.byId("saveEnableButton");0==f.length?(q.set(c.domNode,"display","none"),k&&(f=document.createElement("p"),f.style.textAlign="center",f.innerHTML="All hosts are currently tracking history.",a.appendChild(f))):(e=document.createElement("div"),e.innerHTML='\x3ch4\x3eNon-Global \x3cspan class\x3d"warningTooltip"\x3e\x3c/span\x3e\x3c/h4\x3e',a.appendChild(e),new n({connectId:[e.getElementsByClassName("warningTooltip")[0]],label:"The following hosts implement their own CustomLog. They must be enabled individually."}),
g.buildGraph(f,"history_disabled_hosts_container",g.type.ENABLE,!0),q.set(c.domNode,"display","inline"))},function(a){net.apachegui.Util.alert("Error",a.response.data.message)})},refreshHosts:function(){this.populateDisabled();this.populateEnabled()},checkIfEnabled:function(){isEnabled=!1;h.get("../web/History",{query:{option:"getEnabled"},handleAs:"json",sync:!0,preventCache:!0}).response.then(function(a){var b=a.data.globalEnable;if(0<a.data.enabled.length||b)isEnabled=!0},function(a){net.apachegui.Util.alert("Error",
a.response.data.message)});return isEnabled},updateGlobal:function(a){var b=this,c=function(){var c=net.apachegui.Util.noCloseDialog("Updating","Updating Please Wait...");c.show();h.post("../web/History",{data:{option:"updateGlobal",type:a.toLowerCase()},handleAs:"json",sync:!1}).response.then(function(a){b.refreshHosts();c.remove()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})};net.apachegui.Control.getInstance().isServerRunning(function(){net.apachegui.Util.confirmDialog("Please Confirm",
"Are you sure you want to "+a.toLowerCase()+" global history?\x3cbr/\x3eThe server will be restarted to apply these changes!",function(a){a&&c()})},function(){c()})},updateNonGlobal:function(a){var b=this,c=[];a==this.type.DISABLE&&u("#history_enabled_hosts_container .host_checkbox").forEach(function(a,d,h){a.checked&&c.push(b.hosts.enabled[v.get(a,"data-index")])});a==this.type.ENABLE&&u("#history_disabled_hosts_container .host_checkbox").forEach(function(a,d,h){a.checked&&c.push(b.hosts.disabled[v.get(a,
"data-index")])});if(0==c.length)net.apachegui.Util.alert("Error","Please select a host(s)");else{var d=function(){var d=net.apachegui.Util.noCloseDialog("Updating","Updating Please Wait...");d.show();A.post({url:"../web/History/update",postData:JSON.stringify({option:a.toLowerCase(),hosts:c}),headers:{"Content-Type":"application/json"},load:function(a,c){b.refreshHosts();d.remove()},error:function(a,b){net.apachegui.Util.alert("Error",JSON.parse(a.response.data).message);d.remove()}})};net.apachegui.Control.getInstance().isServerRunning(function(){net.apachegui.Util.confirmDialog("Please Confirm",
"Are you sure you want to "+a.toLowerCase()+" history for these hosts?\x3cbr/\x3eThe server will be restarted to apply these changes!",function(a){a&&d()})},function(){d()})}},search:function(){if(""==b.byId("startDate").value||""==b.byId("startTime").value||""==b.byId("endDate").value||""==b.byId("endTime").value)net.apachegui.Util.alert("Error","Please fill in all required fields");else if(!d.byId("startDate").validate()||!d.byId("startTime").validate()||!d.byId("endDate").validate()||!d.byId("endTime").validate())net.apachegui.Util.alert("Error",
"Please fix required field formats");else{var a={query:this.searchEditor.getValue()},a=w.objectToQuery(a);window.open("SearchResults.jsp?"+a)}},csv:function(){if(""==b.byId("startDate").value||""==b.byId("startTime").value||""==b.byId("endDate").value||""==b.byId("endTime").value)net.apachegui.Util.alert("Error","Please fill in all required fields");else if(!d.byId("startDate").validate()||!d.byId("startTime").validate()||!d.byId("endDate").validate()||!d.byId("endTime").validate())net.apachegui.Util.alert("Error",
"Please fix required field formats");else{var a=net.apachegui.Util.noCloseDialog("Generating","Please wait...");a.show();h.get("../web/SearchResults",{query:{option:"csv",query:this.searchEditor.getValue()},handleAs:"json",sync:!1,preventCache:!0}).response.then(function(b){a.remove();document.location="../HistoryFiles/ApacheGUIHistory.csv"},function(b){a.remove();net.apachegui.Util.alert("Error",b.response.data.message)})}},deleteHistory:function(){var a=this;net.apachegui.Util.confirmDialog("Please Confirm",
"Are you sure you want to delete this History?",function(b){if(b){var c=net.apachegui.Util.noCloseDialog("Deleting ","Please wait...");c.show();h.get("../web/SearchResults",{query:{option:"delete",update:a.deleteEditor.getValue()},handleAs:"json",sync:!1,preventCache:!0}).response.then(function(a){window.location.reload()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}})},graph:function(){""==b.byId("graphDate").value&&net.apachegui.Util.alert("Error","Please fill in all required fields");
if(d.byId("graphDate").validate()){var a={query:this.graphEditor.getValue(),date:b.byId("graphDate").value,type:d.byId("graphType").value},a=w.objectToQuery(a);window.open("GenerateGraph.jsp?"+a)}else net.apachegui.Util.alert("Error","Please fix required field formats")},getHistoryRetention:function(){return net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.historyRetention)},updateHistoryRetention:function(){!0===net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.historyRetention,
b.byId("historyRetention").value)&&net.apachegui.Util.alert("Success","The days to keep history was successfully updated")},getHistoryBuffer:function(){return net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.historyBuffer)},updateHistoryBuffer:function(){!0===net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.historyBuffer,b.byId("historyBuffer").value)&&net.apachegui.Util.alert("Success","The insert buffer size was successfully updated")},
addListeners:function(){var a=this;c(d.byId("historySearchButton"),"click",function(){a.search()});c(d.byId("historyCSVButton"),"click",function(){a.csv()});c(d.byId("historyDeleteButton"),"click",function(){a.deleteHistory()});c(d.byId("historyGraphButton"),"click",function(){a.graph()});c(d.byId("historyRetentionButton"),"click",function(){a.updateHistoryRetention()});c(d.byId("historyBufferButton"),"click",function(){a.updateHistoryBuffer()});c(d.byId("saveEnableButton"),"click",function(){a.updateNonGlobal(a.type.ENABLE)});
c(d.byId("saveDisableButton"),"click",function(){a.updateNonGlobal(a.type.DISABLE)});d.byId("search_database_query").watch("open",function(b,c,d){d&&a.searchEditor.setValue(a.searchEditor.getValue())});d.byId("delete_database_update").watch("open",function(b,c,d){d&&a.deleteEditor.setValue(a.deleteEditor.getValue())});d.byId("graph_database_query").watch("open",function(b,c,d){d&&a.graphEditor.setValue(a.graphEditor.getValue())});c(dijit.byId("startDate"),"change",function(){a.updateSearchQuery();
a.updateDeleteUpdate()});c(dijit.byId("startTime"),"change",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(dijit.byId("endDate"),"change",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(dijit.byId("endTime"),"change",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(b.byId("host"),"change,keyup",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(b.byId("userAgent"),"change,keyup",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(b.byId("requestString"),
"change,keyup",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(b.byId("status"),"change,keyup",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(b.byId("contentSize"),"change,keyup",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(b.byId("maxResults"),"change,keyup",function(){a.updateSearchQuery();a.updateDeleteUpdate()});c(dijit.byId("graphDate"),"change",function(){a.updateGraphQuery()});c(dijit.byId("graphType"),"change",function(){a.updateGraphQuery()});c(b.byId("graphHost"),
"change,keyup",function(){a.updateGraphQuery()});c(b.byId("graphUserAgent"),"change,keyup",function(){a.updateGraphQuery()});c(b.byId("graphRequestString"),"change,keyup",function(){a.updateGraphQuery()});c(b.byId("graphStatus"),"change,keyup",function(){a.updateGraphQuery()});c(b.byId("graphContentSize"),"change,keyup",function(){a.updateGraphQuery()})}});net.apachegui.Util.setupSingletonInstance(net.apachegui.History)});