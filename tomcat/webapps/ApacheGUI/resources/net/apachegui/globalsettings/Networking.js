//>>built
define("net/apachegui/globalsettings/Networking","dojo/_base/declare dojo/dom dijit/registry dojo/on dojo/request dojo/_base/array dojo/data/ItemFileWriteStore dojo/query dojo/dom-class net/apachegui/Main".split(" "),function(r,e,a,b,g,k,q,n,s,t){r("net.apachegui.globalsettings.Networking",null,{initialized:!1,currentListenMenuId:null,currentNameVirtualHost:null,init:function(){!1===this.initialized&&(this.addListeners(),this.bindRemoveListenMenu(),this.bindRemoveNameVirtualHostMenu(),a.byId("serverSignatureSelector").onChange(),
a.byId("serverSignatureButton").set("disabled",!0),this.initialized=!0)},setCurrentListenMenuId:function(a){this.currentListenMenuId=a.toString()},setCurrentNameVirtualHostMenuId:function(a){this.currentNameVirtualHostMenuId=a.toString()},bindRemoveListenMenu:function(){a.byId("remove_listen_menu").bindDomNode(globalListeningGrid.domNode)},bindRemoveNameVirtualHostMenu:function(){a.byId("remove_name_virtual_host_menu").bindDomNode(globalNameVirtualHostGrid.domNode)},addListenSubmit:function(){var b=
e.byId("addAllListenIp").checked,h=a.byId("addListenIp").get("value").trim(),c=a.byId("addListenPort").get("value").trim(),d=a.byId("addListenProtocol").get("value").trim();if(!1==b&&""==h)net.apachegui.Util.alert("Error","You must specify either All IP Addresses or a specific IP Address.");else if(""==c)net.apachegui.Util.alert("Error","You must specify a Port");else if(isNaN(c))net.apachegui.Util.alert("Error","The Port must be numeric");else{var m=function(a){if(/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a))return!0;
a=a.split(".");var c=!0,d;for(d in a)c=!a[d].match(/^\d{1,3}$/)||255<Number(a[d])?!1:c;c=4!=a.length?!1:c;return!c?!1:!0}(h);if(!1==b&&!m)net.apachegui.Util.alert("Error","The IP Address you entered is not valid.");else{var l=this,p=net.apachegui.Util.noCloseDialog("Adding","Please Wait...");p.show();g.post("../web/Networking",{data:{option:"addListen",allIp:b,ip:h,port:c,protocol:d},handleAs:"json",sync:!1}).response.then(function(c){e.byId("addAllListenIp").checked=!1;a.byId("addListenIp").set("disabled",
!1);a.byId("addListenIp").reset();a.byId("addListenPort").reset();a.byId("addListenProtocol").reset();a.byId("addListenDialog").hide();l.resetListenGrid();p.remove()},function(a){p.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}}},resetListenGrid:function(){globalListeningStore=new q({url:"../web/Networking?option\x3dlistening",urlPreventCache:!0});globalListeningGrid.setStore(globalListeningStore)},addNameVirtualHostSubmit:function(){var b=a.byId("addNameVirtualHostAddress").get("value").trim(),
h=a.byId("addNameVirtualHostPort").get("value").trim();if(""==b)net.apachegui.Util.alert("Error","You must specify an address");else{var c=this,d=net.apachegui.Util.noCloseDialog("Adding","Please Wait...");d.show();g.post("../web/Networking",{data:{option:"addNameVirtualHost",address:b,port:h},handleAs:"json",sync:!1}).response.then(function(h){a.byId("addNameVirtualHostAddress").reset();a.byId("addNameVirtualHostPort").reset();a.byId("addNameVirtualHostDialog").hide();c.resetNameVirtualHostGrid();
d.remove()},function(a){d.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}},resetNameVirtualHostGrid:function(){globalNameVirtualHostStore=new q({url:"../web/Networking?option\x3dnameVirtualHost",urlPreventCache:!0});globalNameVirtualHostGrid.setStore(globalNameVirtualHostStore)},showSuccessfullSave:function(){net.apachegui.Util.alert("Success","The changes were successfully saved")},setServerSignature:function(){var b=a.byId("serverSignatureSelector").get("value"),h=a.byId("serverTokensSelector").get("value"),
c=e.byId("serverSignaturePreview"),d="Email"==b?' Server at \x3ca href\x3d"mailto:webmaster@localhost"\x3elocalhost\x3c/a\x3e Port 80':" Server at localhost Port 80";if("On"==b||"Email"==b)switch(h){case "Major":c.innerHTML="Apache/2"+d;break;case "Minor":c.innerHTML="Apache/2.4"+d;break;case "Min":c.innerHTML="Apache/2.4.2"+d;break;case "Prod":c.innerHTML="Apache"+d;break;case "OS":c.innerHTML="Apache/2.4.2 (Unix)"+d;break;case "Full":c.innerHTML="Apache/2.4.2 (Unix) PHP/4.2.2 MyMod/1.2"+d}else c.innerHTML=
""},addListeners:function(){var f=this;b(a.byId("addListenButton"),"click",function(){a.byId("addListenDialog").show()});b(e.byId("addAllListenIp"),"click",function(){!0==this.checked?(a.byId("addListenIp").set("value",""),a.byId("addListenIp").set("disabled",!0)):a.byId("addListenIp").set("disabled",!1)});b(a.byId("addListenIp"),"change",function(){""!=this.value.trim()?e.byId("addAllListenIp").disabled=!0:e.byId("addAllListenIp").disabled=!1});b(a.byId("addListenSubmitButton"),"click",function(){f.addListenSubmit()});
b(a.byId("addListenCloseButton"),"click",function(){a.byId("addListenDialog").hide()});globalListeningGrid.onRowContextMenu=function(a){var c=globalListeningGrid.getItem(a.rowIndex);k.forEach(globalListeningGrid.store.getAttributes(c),function(a){var h=globalListeningGrid.store.getValues(c,a);"id"==a&&f.setCurrentListenMenuId(h)})};b(a.byId("removeListenMenuItem"),"click",function(){var a="",c="",d="",b=globalListeningGrid.getItem(f.currentListenMenuId);k.forEach(globalListeningGrid.store.getAttributes(b),
function(l){var e=globalListeningGrid.store.getValues(b,l);"ip"==l&&(a=e);"port"==l&&(c=e);"protocol"==l&&(d=e)});net.apachegui.Util.confirmDialog("Please Confirm","Are you sure you want to delete the Listener with the following properties?\x3cbr/\x3e\x3cstrong\x3eIP\x3c/strong\x3e: "+a+"\x3cbr/\x3e\x3cstrong\x3ePort\x3c/strong\x3e: "+c+"\x3cbr/\x3e\x3cstrong\x3eProtocol\x3c/strong\x3e: "+d,function(b){if(b){var e=net.apachegui.Util.noCloseDialog("Deleting","Please Wait...");e.show();g.post("../web/Networking",
{data:{option:"deleteListen",ip:a,port:c,protocol:d},handleAs:"json",sync:!1}).response.then(function(a){f.resetListenGrid();e.remove()},function(a){e.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}})});b(a.byId("addNameVirtualHostButton"),"click",function(){a.byId("addNameVirtualHostDialog").show()});b(a.byId("addNameVirtualHostSubmitButton"),"click",function(){f.addNameVirtualHostSubmit()});b(a.byId("addNameVirtualHostCloseButton"),"click",function(){a.byId("addNameVirtualHostDialog").hide()});
globalNameVirtualHostGrid.onRowContextMenu=function(a){var c=globalNameVirtualHostGrid.getItem(a.rowIndex);k.forEach(globalNameVirtualHostGrid.store.getAttributes(c),function(a){var b=globalNameVirtualHostGrid.store.getValues(c,a);"id"==a&&f.setCurrentNameVirtualHostMenuId(b)})};b(a.byId("removeNameVirtualHostMenuItem"),"click",function(){var a="",c="",d=globalNameVirtualHostGrid.getItem(f.currentNameVirtualHostMenuId);k.forEach(globalNameVirtualHostGrid.store.getAttributes(d),function(b){var e=globalNameVirtualHostGrid.store.getValues(d,
b);"address"==b&&(a=e);"port"==b&&(c=e)});net.apachegui.Util.confirmDialog("Please Confirm","Are you sure you want to delete the Name Based Virtual Host with the following properties?\x3cbr/\x3e\x3cstrong\x3eAddress\x3c/strong\x3e: "+a+"\x3cbr/\x3e\x3cstrong\x3ePort\x3c/strong\x3e: "+c+"\x3cbr/\x3e",function(b){if(b){var d=net.apachegui.Util.noCloseDialog("Deleting","Please Wait...");d.show();g.post("../web/Networking",{data:{option:"deleteNameVirtualHost",address:a,port:c},handleAs:"json",sync:!1}).response.then(function(a){f.resetNameVirtualHostGrid();
d.remove()},function(a){d.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}})});b(e.byId("keepAliveStatusOn"),"change",function(){a.byId("keepAliveStatusButton").set("disabled",!1)});b(e.byId("keepAliveStatusOff"),"change",function(){a.byId("keepAliveStatusButton").set("disabled",!1)});b(a.byId("keepAliveStatusButton"),"click",function(){var b="",c=n("#keepAliveStatusContainer input:checked");k.forEach(c,function(a){b=a.value});var d=net.apachegui.Util.noCloseDialog("Updating",
"Please Wait...");d.show();g.post("../web/Networking",{data:{option:"modifyKeepAliveStatus",status:b},handleAs:"json",sync:!1}).response.then(function(c){f.showSuccessfullSave();"on"==b?e.byId("keepAliveOptionsContainer").style.display="block":e.byId("keepAliveOptionsContainer").style.display="none";a.byId("keepAliveStatusButton").set("disabled",!0);d.remove()},function(a){d.remove();net.apachegui.Util.alert("Error",a.response.data.message)})});b(a.byId("keepAliveTimeoutSeconds"),"keyup",function(){a.byId("saveKeepAliveTimeoutButton").set("disabled",
!1)});b(a.byId("saveKeepAliveTimeoutButton"),"click",function(){var b=e.byId("keepAliveTimeoutSeconds").value;if(""==b)net.apachegui.Util.alert("Error","You must specify a value for seconds");else if(isNaN(b))net.apachegui.Util.alert("Error","The specified seconds must be numeric");else{var c=net.apachegui.Util.noCloseDialog("Updating","Please Wait...");c.show();g.post("../web/Networking",{data:{option:"modifyKeepAliveTimeout",seconds:b},handleAs:"json",sync:!1}).response.then(function(b){f.showSuccessfullSave();
a.byId("saveKeepAliveTimeoutButton").set("disabled",!0);c.remove()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}});b(e.byId("requestsPerConnectionUnlimited"),"change",function(){a.byId("requestsPerConnectionButton").set("disabled",!1)});b(e.byId("requestsPerConnectionNumber"),"change",function(){a.byId("requestsPerConnectionButton").set("disabled",!1)});b(a.byId("requestsPerConnectionNum"),"keyup",function(){a.byId("requestsPerConnectionButton").set("disabled",
!1)});b(a.byId("requestsPerConnectionButton"),"click",function(){var b="",c="0",d=n("#requestsPerConnectionContainer input:checked");k.forEach(d,function(a){b=a.value});"number"==b&&(c=e.byId("requestsPerConnectionNum").value);if(""==c)net.apachegui.Util.alert("Error","You must specify a value for Requests per Connection");else if(isNaN(c))net.apachegui.Util.alert("Error","The specified Requests per Connection must be numeric");else{var m=net.apachegui.Util.noCloseDialog("Updating","Please Wait...");
m.show();g.post("../web/Networking",{data:{option:"modifyMaxKeepAliveRequests",numberOfRequests:c},handleAs:"json",sync:!1}).response.then(function(b){"0"==c&&(e.byId("requestsPerConnectionNum").value="",b=n("#requestsPerConnectionContainer input"),k.forEach(b,function(a){a.checked="unlimited"==a.value?!0:!1}));f.showSuccessfullSave();a.byId("requestsPerConnectionButton").set("disabled",!0);m.remove()},function(a){m.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}});b(a.byId("requestTimeoutSeconds"),
"keyup",function(){a.byId("requestTimeoutButton").set("disabled",!1)});b(a.byId("requestTimeoutButton"),"click",function(){var b=e.byId("requestTimeoutSeconds").value;if(""==b)net.apachegui.Util.alert("Error","You must specify a value for seconds");else if(isNaN(b))net.apachegui.Util.alert("Error","The specified seconds must be numeric");else{var c=net.apachegui.Util.noCloseDialog("Updating","Please Wait...");c.show();g.post("../web/Networking",{data:{option:"modifyRequestTimeout",seconds:b},handleAs:"json",
sync:!1}).response.then(function(b){f.showSuccessfullSave();a.byId("requestTimeoutButton").set("disabled",!0);c.remove()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}});b(a.byId("listenBackLogLength"),"keyup",function(){a.byId("listenBackLogButton").set("disabled",!1)});b(a.byId("listenBackLogButton"),"click",function(){var b=e.byId("listenBackLogLength").value;if(""==b)net.apachegui.Util.alert("Error","You must specify a value for the Queue Length");else if(isNaN(b))net.apachegui.Util.alert("Error",
"The specified Queue Length must be numeric");else{var c=net.apachegui.Util.noCloseDialog("Updating","Please Wait...");c.show();g.post("../web/Networking",{data:{option:"modifyListenBackLog",backLogLength:b},handleAs:"json",sync:!1}).response.then(function(b){f.showSuccessfullSave();a.byId("listenBackLogButton").set("disabled",!0);c.remove()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}});b(a.byId("serverTokensSelector"),"change",function(){a.byId("serverTokensButton").set("disabled",
!1);var b=a.byId("serverTokensSelector").get("value");n("#serverTokenPreviewContainer .serverTokenPreview").removeClass("selected");s.add("serverTokens_"+b+"_preview","selected");f.setServerSignature()});b(a.byId("serverTokensButton"),"click",function(){var b=a.byId("serverTokensSelector").get("value"),c=net.apachegui.Util.noCloseDialog("Updating","Please Wait...");c.show();g.post("../web/Networking",{data:{option:"modifyServerTokens",serverTokens:b},handleAs:"json",sync:!1}).response.then(function(b){f.showSuccessfullSave();
a.byId("serverTokensButton").set("disabled",!0);c.remove()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})});b(a.byId("serverSignatureSelector"),"change",function(){a.byId("serverSignatureButton").set("disabled",!1);f.setServerSignature()});b(a.byId("serverSignatureButton"),"click",function(){var b=a.byId("serverSignatureSelector").get("value"),c=net.apachegui.Util.noCloseDialog("Updating","Please Wait...");c.show();g.post("../web/Networking",{data:{option:"modifyServerSignature",
serverSignature:b},handleAs:"json",sync:!1}).response.then(function(b){f.showSuccessfullSave();a.byId("serverSignatureButton").set("disabled",!0);c.remove()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})});net.apachegui.Main.getInstance().isWindows()||(b(a.byId("apacheUser"),"keyup",function(){a.byId("apacheUserButton").set("disabled",!1)}),b(a.byId("apacheUserButton"),"click",function(){var b=e.byId("apacheUser").value;if(""==b)net.apachegui.Util.alert("Error",
"You must specify a value for user");else{var c=net.apachegui.Util.noCloseDialog("Updating","Please Wait...");c.show();g.post("../web/Networking",{data:{option:"modifyUser",user:b},handleAs:"json",sync:!1}).response.then(function(b){f.showSuccessfullSave();a.byId("apacheUserButton").set("disabled",!0);c.remove()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}}),b(a.byId("apacheGroup"),"keyup",function(){a.byId("apacheGroupButton").set("disabled",!1)}),b(a.byId("apacheGroupButton"),
"click",function(){var b=e.byId("apacheGroup").value;if(""==b)net.apachegui.Util.alert("Error","You must specify a value for group");else{var c=net.apachegui.Util.noCloseDialog("Updating","Please Wait...");c.show();g.post("../web/Networking",{data:{option:"modifyGroup",group:b},handleAs:"json",sync:!1}).response.then(function(b){f.showSuccessfullSave();a.byId("apacheGroupButton").set("disabled",!0);c.remove()},function(a){c.remove();net.apachegui.Util.alert("Error",a.response.data.message)})}}))}});
net.apachegui.Util.setupSingletonInstance(net.apachegui.globalsettings.Networking)});