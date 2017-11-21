//>>built
define("net/apachegui/GUISettings","dojo/_base/declare dojo/dom dijit/registry dojo/on dojo/request dojo/dom-class dojo/dom-construct dojo/_base/array dojo/query dojo/_base/json dojo/data/ItemFileWriteStore dijit/form/Button net/apachegui/History".split(" "),function(g,e,a,d,f,n,p,h,k,l,m,q,r){g("net.apachegui.GUISettings",null,{currentMenuId:null,initialized:!1,init:function(){!1===this.initialized&&(this.addListeners(),this.bindSettingsMenu(),this.initialized=!0)},bindSettingsMenu:function(){a.byId("settings_menu").bindDomNode(settingsGrid.domNode)},
setCurrentMenuId:function(a){this.currentMenuId=a.toString()},newServer:function(){if(net.apachegui.History.getInstance().checkIfEnabled())net.apachegui.Util.alert("Disable History","You can not start a new server while history is enabled. Please disable all history and try again");else{var a=net.apachegui.Util.noCloseDialog("Loading","Configuring a new server, please wait...");a.show();f.post("../web/GUISettings",{data:{option:"newServer"},handleAs:"json",sync:!1}).response.then(function(a){window.location.reload()},
function(b){a.remove();net.apachegui.Util.alert("Error",b.response.data.message)})}},updateSetting:function(){var c=this.currentMenuId;if(c==net.apachegui.Settings.getInstance().settingsMap.serverRoot){a.byId("updateSettingServerRoot").set("value",net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.serverRoot));var b=a.byId("updateServerRootDialog");b.show()}c==net.apachegui.Settings.getInstance().settingsMap.confDirectory&&(a.byId("updateSettingConfDirectory").set("value",
net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.confDirectory)),b=a.byId("updateConfDirectoryDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.confFile&&(a.byId("updateSettingConfFile").set("value",net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.confFile)),b=a.byId("updateConfFileDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.logDirectory&&(a.byId("updateSettingLogDirectory").set("value",
net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.logDirectory)),b=a.byId("updateLogDirectoryDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.modulesDirectory&&(a.byId("updateSettingModulesDirectory").set("value",net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.modulesDirectory)),b=a.byId("updateModulesDirectoryDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.binFile&&
(a.byId("updateSettingBinFile").set("value",net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.binFile)),b=a.byId("updateBinFileDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.username&&(a.byId("updateSettingUsername").set("value",net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.username)),b=a.byId("updateUsernameDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.password&&
(b=a.byId("updatePasswordDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.theme&&(e.byId(net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.theme)).checked=!0,b=a.byId("updateThemeDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.encoding&&(b=a.byId("updateEncodingDialog"),b.show());c==net.apachegui.Settings.getInstance().settingsMap.enableAuthentication&&(a.byId("updateEnableAuthentication").set("value",net.apachegui.Settings.getInstance().getSetting(net.apachegui.Settings.getInstance().settingsMap.enableAuthentication)),
b=a.byId("updateEnableAuthenticationDialog"),b.show())},sendUpdate:function(c){if(c==net.apachegui.Settings.getInstance().settingsMap.serverRoot){if(!a.byId("updateServerRootForm").validate()){net.apachegui.Util.alert("Error","Please fix fields");return}var b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.serverRoot,e.byId("updateSettingServerRoot").value);!0===b&&(b=a.byId("updateServerRootDialog"),b.hide())}if(c==net.apachegui.Settings.getInstance().settingsMap.confDirectory){if(!a.byId("updateConfDirectoryForm").validate()){net.apachegui.Util.alert("Error",
"Please fix fields");return}b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.confDirectory,e.byId("updateSettingConfDirectory").value);!0===b&&(b=a.byId("updateConfDirectoryDialog"),b.hide())}if(c==net.apachegui.Settings.getInstance().settingsMap.confFile){if(!a.byId("updateConfFileForm").validate()){net.apachegui.Util.alert("Error","Please fix fields");return}b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.confFile,
e.byId("updateSettingConfFile").value);!0===b&&(b=a.byId("updateConfFileDialog"),b.hide())}if(c==net.apachegui.Settings.getInstance().settingsMap.logDirectory){if(!a.byId("updateLogDirectoryForm").validate()){net.apachegui.Util.alert("Error","Please fix fields");return}b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.logDirectory,e.byId("updateSettingLogDirectory").value);!0===b&&(b=a.byId("updateLogDirectoryDialog"),b.hide())}if(c==net.apachegui.Settings.getInstance().settingsMap.modulesDirectory){if(!a.byId("updateModulesDirectoryForm").validate()){net.apachegui.Util.alert("Error",
"Please fix fields");return}b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.modulesDirectory,e.byId("updateSettingModulesDirectory").value);!0===b&&(b=a.byId("updateModulesDirectoryDialog"),b.hide())}if(c==net.apachegui.Settings.getInstance().settingsMap.binFile){if(!a.byId("updateBinFileForm").validate()){net.apachegui.Util.alert("Error","Please fix fields");return}b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.binFile,
e.byId("updateSettingBinFile").value);!0===b&&(b=a.byId("updateBinFileDialog"),b.hide())}if(c==net.apachegui.Settings.getInstance().settingsMap.username){if(!a.byId("updateUsernameForm").validate()){net.apachegui.Util.alert("Error","Please fix fields");return}b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.username,e.byId("updateSettingUsername").value);!0===b&&(b=a.byId("updateUsernameDialog"),b.hide())}if(c==net.apachegui.Settings.getInstance().settingsMap.password){if(!a.byId("updatePasswordForm").validate()){net.apachegui.Util.alert("Error",
"Please fix fields");return}var b=e.byId("updateSettingPassword1").value,d=e.byId("updateSettingPassword2").value;if(b!=d){net.apachegui.Util.alert("Error","The passwords do not match");return}b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.password,e.byId("updateSettingPassword1").value);!0===b&&(b=a.byId("updatePasswordDialog"),b.hide())}c==net.apachegui.Settings.getInstance().settingsMap.theme&&(b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.theme,
k("input[name\x3dthemeType]:checked")[0].value),!0===b&&window.location.reload());c==net.apachegui.Settings.getInstance().settingsMap.enableAuthentication&&(b=net.apachegui.Settings.getInstance().setSetting(net.apachegui.Settings.getInstance().settingsMap.enableAuthentication,a.byId("updateEnableAuthentication").get("value")),!0===b&&window.location.reload());c=new m({url:"../web/GUISettings/Current",urlPreventCache:!0});settingsGrid.setStore(c)},getServerInfo:function(){var a=net.apachegui.Util.noCloseDialog("Loading",
"Please Wait...");a.show();f.get("../web/GUISettings",{query:{option:"getServerInfo"},preventCache:!0,handleAs:"text",sync:!1}).response.then(function(b){net.apachegui.Util.alert("Info",b.data);a.remove()},function(b){a.remove();b=l.fromJson(b.response.data);net.apachegui.Util.alert("Error",b.message)})},addListeners:function(){var c=this;d(a.byId("editSettingsMenuItem"),"click",function(){c.updateSetting()});d(a.byId("serverRootUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.serverRoot)});
d(a.byId("serverRootUpdateCancel"),"click",function(){a.byId("updateServerRootDialog").hide()});d(a.byId("configurationDirectoryUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.confDirectory)});d(a.byId("configurationDirectoryUpdateCancel"),"click",function(){a.byId("updateConfDirectoryDialog").hide()});d(a.byId("configurationFileUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.confFile)});d(a.byId("configurationFileUpdateCancel"),
"click",function(){a.byId("updateConfFileDialog").hide()});d(a.byId("logDirectoryUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.logDirectory)});d(a.byId("logDirectoryUpdateCancel"),"click",function(){a.byId("updateLogDirectoryDialog").hide()});d(a.byId("modulesDirectoryUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.modulesDirectory)});d(a.byId("modulesDirectoryUpdateCancel"),"click",function(){a.byId("updateModulesDirectoryDialog").hide()});
d(a.byId("binaryFileUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.binFile)});d(a.byId("binaryFileUpdateCancel"),"click",function(){a.byId("updateBinFileDialog").hide()});d(a.byId("usernameUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.username)});d(a.byId("usernameUpdateCancel"),"click",function(){a.byId("updateUsernameDialog").hide()});d(a.byId("passwordUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.password)});
d(a.byId("passwordUpdateCancel"),"click",function(){a.byId("updatePasswordDialog").hide()});d(a.byId("themeUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.theme)});d(a.byId("themeUpdateCancel"),"click",function(){a.byId("updateThemeDialog").hide()});d(a.byId("encodingUpdateCancel"),"click",function(){a.byId("updateEncodingDialog").hide()});d(a.byId("enableAuthenticationUpdate"),"click",function(){c.sendUpdate(net.apachegui.Settings.getInstance().settingsMap.enableAuthentication)});
d(a.byId("enableAuthenticationUpdateCancel"),"click",function(){a.byId("updateEnableAuthenticationDialog").hide()});settingsGrid.onRowContextMenu=function(a){var d=settingsGrid.getItem(a.rowIndex);h.forEach(settingsGrid.store.getAttributes(d),function(a){var b=settingsGrid.store.getValues(d,a);"id"==a&&c.setCurrentMenuId(b)})};d(a.byId("newServerButton"),"click",function(){net.apachegui.Util.confirmDialog("Please Confirm","Are you sure you want to delete all current settings and data?",function(a){a&&
c.newServer()})});d(a.byId("guiInfoButton"),"click",function(){a.byId("guiInfoDialog").show()});d(a.byId("guiInfoClose"),"click",function(){a.byId("guiInfoDialog").hide()});d(a.byId("serverInfoButton"),"click",function(){c.getServerInfo()})}});net.apachegui.Util.setupSingletonInstance(net.apachegui.GUISettings)});