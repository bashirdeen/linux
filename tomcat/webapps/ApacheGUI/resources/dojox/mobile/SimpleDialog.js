//>>built
define("dojox/mobile/SimpleDialog","dojo/_base/declare dojo/_base/window dojo/dom-class dojo/dom-attr dojo/dom-construct dojo/on dojo/touch dijit/registry ./Pane ./iconUtils ./sniff".split(" "),function(g,c,h,d,e,k,l,f,m,n,p){return g("dojox.mobile.SimpleDialog",m,{top:"auto",left:"auto",modal:!0,closeButton:!1,closeButtonClass:"mblDomButtonSilverCircleRedCross",tabIndex:"0",_setTabIndexAttr:"",baseClass:"mblSimpleDialog",_cover:[],buildRendering:function(){this.containerNode=e.create("div",{className:"mblSimpleDialogContainer"});
if(this.srcNodeRef)for(var a=0,b=this.srcNodeRef.childNodes.length;a<b;a++)this.containerNode.appendChild(this.srcNodeRef.removeChild(this.srcNodeRef.firstChild));this.inherited(arguments);d.set(this.domNode,"role","dialog");if(this.containerNode.getElementsByClassName){if(a=this.containerNode.getElementsByClassName("mblSimpleDialogTitle")[0])a.id=a.id||f.getUniqueId("dojo_mobile_mblSimpleDialogTitle"),d.set(this.domNode,"aria-labelledby",a.id);if(a=this.containerNode.getElementsByClassName("mblSimpleDialogText")[0])a.id=
a.id||f.getUniqueId("dojo_mobile_mblSimpleDialogText"),d.set(this.domNode,"aria-describedby",a.id)}h.add(this.domNode,"mblSimpleDialogDecoration");this.domNode.style.display="none";this.domNode.appendChild(this.containerNode);this.closeButton&&(this.closeButtonNode=e.create("div",{className:"mblSimpleDialogCloseBtn "+this.closeButtonClass},this.domNode),n.createDomButton(this.closeButtonNode),this.connect(this.closeButtonNode,"onclick","_onCloseButtonClick"));this.connect(this.domNode,"onkeydown",
"_onKeyDown")},startup:function(){this._started||(this.inherited(arguments),c.body().appendChild(this.domNode))},addCover:function(){this._cover[0]?this._cover[0].style.display="":this._cover[0]=e.create("div",{className:"mblSimpleDialogCover"},c.body());p("windows-theme")&&this.own(k(this._cover[0],l.press,function(){}))},removeCover:function(){this._cover[0].style.display="none"},_onCloseButtonClick:function(a){!1!==this.onCloseButtonClick(a)&&this.hide()},onCloseButtonClick:function(){},_onKeyDown:function(a){27==
a.keyCode&&this.hide()},refresh:function(){var a=this.domNode,b;if(this.closeButton){b=this.closeButtonNode;var d=Math.round(b.offsetHeight/2);b.style.top=-d+"px";b.style.left=a.offsetWidth-d+"px"}"auto"===this.top?(b=c.global.innerHeight||c.doc.documentElement.clientHeight,a.style.top=Math.round((b-a.offsetHeight)/2)+"px"):a.style.top=this.top;"auto"===this.left?(b=c.global.innerWidth||c.doc.documentElement.clientWidth,a.style.left=Math.round((b-a.offsetWidth)/2)+"px"):a.style.left=this.left},show:function(){if(""!==
this.domNode.style.display){this.modal&&this.addCover();this.domNode.style.display="";this.resize();this.refresh();var a;this.domNode.getElementsByClassName&&(a=this.domNode.getElementsByClassName("mblSimpleDialogButton")[0]);var b=a||this.closeButtonNode||this.domNode;this.defer(function(){b.focus()},1E3)}},hide:function(){"none"!==this.domNode.style.display&&(this.domNode.style.display="none",this.modal&&this.removeCover())}})});