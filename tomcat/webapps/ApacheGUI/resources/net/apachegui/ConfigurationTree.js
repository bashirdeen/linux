//>>built
define("net/apachegui/ConfigurationTree","dojo/_base/declare dojo/dom dijit/_WidgetBase dojo/data/ItemFileWriteStore dojo/store/Observable net/apachegui/RefreshableTree dijit/Tree dijit/tree/ForestStoreModel dojo/on dijit/registry dijit/Menu dijit/MenuItem dijit/PopupMenuItem dojo/_base/lang dojo/request dojo/dom-attr net/apachegui/InputAutoSuggest dojo/dom-geometry dojo/dom-style dojo/dom-class dijit/TooltipDialog dijit/popup".split(" "),function(r,c,w,s,x,y,z,A,g,f,t,h,B,C,n,m,D,E,u,v,F,p){return r([w],
{id:"",tree:null,menu:null,currentTreeItem:null,editable:!0,tooltipDialogs:{},treeJSON:{identifier:"id",items:[],label:"name"},autoExpand:!1,inputAutoSuggest:null,LineTypes:{ENCLOSURE:"enclosure",DIRECTIVE:"directive"},loadTreeJSON:function(a){},constructor:function(a){this.id=a.id;this.treeJSON=a.treeJSON||this.treeJSON;this.autoExpand=a.autoExpand||!1;this.rootType=a.rootType||"rootNode";this.loadTreeJSON=a.loadTreeJSON||this.loadTreeJSON;this.handleTreeLink=a.handleTreeLink||function(a,b){window.open("Configuration.jsp?file\x3d"+
a+"\x26lineNum\x3d"+b)};a=new s({data:this.treeJSON});a=new x(a);a=new A({store:a,query:{type:this.rootType},rootId:"0",childrenAttrs:["children"],id:this.id+"_model"});var b=r(z._TreeNode,{_setLabelAttr:{node:"labelNode",type:"innerHTML"}});this.tree=new y({model:a,showRoot:!1,autoExpand:this.autoExpand,openOnClick:!0,id:this.id+"_tree",getIconClass:function(a,b){return"rootNode"==a.type?"":a.children?"enclosure":"directive"},persist:!0,_createTreeNode:function(a){return new b(a)}});this._autoExpandRootNode();
this._initializeAutoSuggest();return this},buildRendering:function(){var a=this,b=document.createElement("div");b.appendChild(this.tree.domNode);this.domNode=b;this.menu=new t({selector:".dijitTreeNode"});this.menu.bindDomNode(b);this.menu.addChild(new h({id:this.id+"-menu-item-expand-all",label:"Expand All",onClick:function(){a.expandAll()}}));this.menu.addChild(new h({id:this.id+"-menu-item-collapse-all",label:"Collapse All",onClick:function(){a.collapseAll()}}));this.menu.addChild(new h({id:this.id+
"-menu-item-edit",label:"Edit",onClick:function(){a._showEditLineDialog()}}));this.menu.addChild(new h({id:this.id+"-menu-item-delete",label:"Delete",onClick:function(){a._deleteLine()}}));b=new t;b.addChild(new h({id:this.id+"-menu-item-add-enclosure",label:"New Enclosure",onClick:function(){a._showAddLineDialog(a.LineTypes.ENCLOSURE)}}));b.addChild(new h({id:this.id+"-menu-item-add-directive",label:"New Directive",onClick:function(){a._showAddLineDialog(a.LineTypes.DIRECTIVE)}}));this.menu.addChild(new B({id:this.id+
"-menu-item-add-submenu",label:"Add",popup:b}))},postCreate:function(){this._addListeners()},startup:function(){this.tree.startup();0==this.treeJSON.items.length&&this.reload()},destroy:function(){this.tree.destroy()},collapseAll:function(){this.tree.collapseAll()},expandAll:function(){this.tree.expandAll()},disableEditing:function(){this.editable=!1},enableEditing:function(){this.editable=!0},reload:function(){var a=this;this.loadTreeJSON(function(b){var d=E.getContentBox(a.domNode);u.set(a.domNode,
"height",d.h+"px");a.treeJSON=b;a.tree.model.store=new s({data:a.treeJSON});a.tree.reload();a._autoExpandRootNode();setTimeout(function(){u.set(a.domNode,"height","")},2500)})},_getItemProperty:function(a,b){var d=a[b];return C.isArray(d)?d[0]:d},_getTreeItem:function(a,b){for(var d=null,e=0;e<b.length&&!(b[e].id==a?d=b[e]:b[e].children&&(d=this._getTreeItem(a,b[e].children)),d);e++);return d},_getSelectedTreeItem:function(){var a=this._getTreeItem(this.currentTreeItem.id,this.treeJSON.items);return this.currentTreeItem.type!=
this._getItemProperty(a,"type")&&this.currentTreeItem.value!=this._getItemProperty(a,"value")?(this.onOutOfDateError(),null):a},_initializeAutoSuggest:function(){this.inputAutoSuggest=new D(c.byId("addLineType"))},_autoExpandRootNode:function(){if(!this.autoExpand)for(var a=this.tree.getNodesByItem("0"),b=0;b<a.length;b++)a[b].isExpanded||this.tree._expandNode(a[b])},_showEditLineDialog:function(){if(this.editable){var a=this._getSelectedTreeItem();if(a){var b=this._getItemProperty(a,"type"),d=this._getItemProperty(a,
"value");this.onShowEditDialog(b,d)&&(this._setCurrentWidgetId(),c.byId("editLineType").innerHTML=b,c.byId("editLineValue").value=d,c.byId("editLineLineType").value=this._getItemProperty(a,"lineType"),c.byId("editLineFile").value=this._getItemProperty(a,"file"),c.byId("editLineLineOfStart").value=this._getItemProperty(a,"lineOfStart"),c.byId("editLineLineOfEnd").value=this._getItemProperty(a,"lineOfEnd"),b=f.byId("editLineDialog"),b.set("title",this._getItemProperty(a,"lineType")==this.LineTypes.ENCLOSURE?
"Edit Enclosure":"Edit Directive"),b.show())}}else this.onEditDisabledError()},_submitEditLine:function(){var a=this,b=c.byId("editLineType").innerHTML,d=c.byId("editLineValue").value.trim(),e=c.byId("editLineLineType").value,q=c.byId("editLineFile").value,G=c.byId("editLineLineOfStart").value,k=c.byId("editLineLineOfEnd").value;if(this.onBeforeEditLine(b,d)){var l=net.apachegui.Util.noCloseDialog("Modifying","Modifying Please Wait...");l.show();n.post("../web/ConfigurationTree",{data:{option:"editLine",
type:b,value:d,lineType:e,file:q,lineOfStart:G,lineOfEnd:k},handleAs:"json",sync:!1}).response.then(function(e){l.remove();f.byId("editLineDialog").hide();a.onAfterEditLine(b,d,e);a.reload()},function(e){l.remove();e=e.response;net.apachegui.Util.alert("Error",e.data.message);a.onEditLineError(b,d,e)})}},_deleteLine:function(){var a=this;if(this.editable){var b=this._getSelectedTreeItem();if(b){var d=this._getItemProperty(b,"type"),e=this._getItemProperty(b,"value");this.onShowDeleteDialog(d,e)&&
net.apachegui.Util.confirmDialog("Please Confirm","Are you sure you want to delete the following "+this._getItemProperty(b,"lineType")+":\x3cbr/\x3e\x3cbr/\x3e"+this._getItemProperty(b,"name"),function(c){if(c&&a.onBeforeDeleteLine(d,e)){var f=net.apachegui.Util.noCloseDialog("Deleting","Deleting Please Wait...");f.show();n.post("../web/ConfigurationTree",{data:{option:"deleteLine",file:a._getItemProperty(b,"file"),lineOfStart:"enclosure"==a._getItemProperty(b,"lineType")?a._getItemProperty(b,"enclosureLineOfStart"):
a._getItemProperty(b,"lineOfStart"),lineOfEnd:"enclosure"==a._getItemProperty(b,"lineType")?a._getItemProperty(b,"enclosureLineOfEnd"):a._getItemProperty(b,"lineOfEnd")},handleAs:"json",sync:!1}).response.then(function(b){f.remove();a.onAfterDeleteLine(d,e,b);a.reload()},function(b){f.remove();b=b.response;net.apachegui.Util.alert("Error",b.data.message);a.onDeleteLineError(d,e,b)})}})}}else this.onDeleteDisabledError()},_showAddLineDialog:function(a){if(this.editable){var b=this._getSelectedTreeItem();
if(b&&this.onShowAddDialog(a)){this._setCurrentWidgetId();var d=c.byId("addLineType");d.value="";m.set(d,"data-type",a);c.byId("addLineValue").value="";c.byId("addLineBeforeLineType").value=this._getItemProperty(b,"lineType");c.byId("addLineLineType").value=a;c.byId("addLineFile").value=this._getItemProperty(b,"file");c.byId("addLineLineOfStart").value=parseInt(this._getItemProperty(b,"lineOfEnd"))+1;b=f.byId("addLineDialog");b.set("title",a==this.LineTypes.ENCLOSURE?"Add Enclosure":"Add Directive");
b.show()}}else this.onAddDisabledError()},_submitAddLine:function(){var a=this,b=c.byId("addLineFile").value.trim(),d=c.byId("addLineType").value.trim(),e=c.byId("addLineValue").value.trim(),q=c.byId("addLineBeforeLineType").value,g=c.byId("addLineLineType").value,k=c.byId("addLineLineOfStart").value;if(this.onBeforeAddLine(d,e)){var l=net.apachegui.Util.noCloseDialog("Adding","Adding Please Wait...");l.show();n.post("../web/ConfigurationTree",{data:{option:"addLine",type:d,value:e,lineType:g,beforeLineType:q,
file:b,lineOfStart:k},handleAs:"json",sync:!1}).response.then(function(b){l.remove();f.byId("addLineDialog").hide();a.onAfterAddLine(d,e,b);a.reload()},function(b){l.remove();b=b.response;net.apachegui.Util.alert("Error",b.data.message);a.onAddLineError(d,e,b)})}},_checkIfCurrentWidget:function(){return c.byId("currentConfigurationTreeId").value==this.id},_setCurrentWidgetId:function(){c.byId("currentConfigurationTreeId").value=this.id},_addListeners:function(){var a=this;g(f.byId("editLineSubmit"),
"click",function(){a._checkIfCurrentWidget()&&a._submitEditLine()});g(f.byId("editLineCancel"),"click",function(){a._checkIfCurrentWidget()&&f.byId("editLineDialog").hide()});g(f.byId("addLineSubmit"),"click",function(){a._checkIfCurrentWidget()&&a._submitAddLine()});g(f.byId("addLineCancel"),"click",function(){a._checkIfCurrentWidget()&&f.byId("addLineDialog").hide()});g(this.menu,"focus",function(b){b=f.getEnclosingWidget(this.currentTarget);a.currentTreeItem=b.item;b=a._getItemProperty(a.currentTreeItem,
"lineType");b=b==a.LineTypes.ENCLOSURE||b==a.LineTypes.DIRECTIVE;f.byId(a.id+"-menu-item-edit").set("disabled",!b);f.byId(a.id+"-menu-item-delete").set("disabled",!b);f.byId(a.id+"-menu-item-add-enclosure").set("disabled",!b);f.byId(a.id+"-menu-item-add-directive").set("disabled",!b);a.onMenuFocus()});var b;g(this.domNode,"mouseover",function(d){b&&(p.close(),clearTimeout(b),b=null);var e=d.target;if(v.contains(e,"directive_value")){var c=f.getEnclosingWidget(e).item;d=a._getItemProperty(c,"file");
var h=a._getItemProperty(c,"lineOfStart"),c="tooltipDialog-"+a.id+"-"+a._getItemProperty(c,"id"),k=a.tooltipDialogs[c]||null;null==k&&(k=new F({id:c,style:"width: auto;",content:'\x3cdiv\x3e\x3ca class\x3d"configuration_tree_link" data-id\x3d"'+a.id+'" data-file\x3d"'+d+'" data-line-number\x3d"'+h+'" href\x3d"#"\x3e'+d+"\x3c/a\x3e Line: "+h+"\x3c/div\x3e"}),a.tooltipDialogs[c]=k);var l=setTimeout(function(){p.open({popup:k,around:e})},750);g.once(e,"mouseleave",function(){clearTimeout(l);b=setTimeout(function(){p.close(k);
b=null},1250)})}});g(document,"click",function(b){var c=b.target;v.contains(c,"configuration_tree_link")&&(b.preventDefault(),m.get(c,"data-id")==a.id&&(b=m.get(c,"data-line-number"),c=m.get(c,"data-file"),a.handleTreeLink(c,b)))})},onMenuFocus:function(){return!0},onOutOfDateError:function(){return!0},onAddDisabledError:function(){return!0},onShowAddDialog:function(a){return!0},onBeforeAddLine:function(a,b){return!0},onAfterAddLine:function(a,b,c){return!0},onAddLineError:function(a,b,c){return!0},
onEditDisabledError:function(){return!0},onShowEditDialog:function(a,b){return!0},onBeforeEditLine:function(a,b){return!0},onAfterEditLine:function(a,b,c){return!0},onEditLineError:function(a,b,c){return!0},onDeleteDisabledError:function(){return!0},onShowDeleteDialog:function(a,b){return!0},onBeforeDeleteLine:function(a,b){return!0},onAfterDeleteLine:function(a,b,c){return!0},onDeleteLineError:function(a,b,c){return!0}})});