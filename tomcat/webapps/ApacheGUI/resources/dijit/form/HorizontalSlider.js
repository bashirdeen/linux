//>>built
require({cache:{"url:dijit/form/templates/HorizontalSlider.html":'\x3ctable class\x3d"dijit dijitReset dijitSlider dijitSliderH" cellspacing\x3d"0" cellpadding\x3d"0" border\x3d"0" rules\x3d"none" data-dojo-attach-event\x3d"onkeydown:_onKeyDown, onkeyup:_onKeyUp"\n\trole\x3d"presentation"\n\t\x3e\x3ctr class\x3d"dijitReset"\n\t\t\x3e\x3ctd class\x3d"dijitReset" colspan\x3d"2"\x3e\x3c/td\n\t\t\x3e\x3ctd data-dojo-attach-point\x3d"topDecoration" class\x3d"dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH"\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset" colspan\x3d"2"\x3e\x3c/td\n\t\x3e\x3c/tr\n\t\x3e\x3ctr class\x3d"dijitReset"\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t\x3e\x3cdiv class\x3d"dijitSliderDecrementIconH" style\x3d"display:none" data-dojo-attach-point\x3d"decrementButton"\x3e\x3cspan class\x3d"dijitSliderButtonInner"\x3e-\x3c/span\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset"\n\t\t\t\x3e\x3cdiv class\x3d"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper" data-dojo-attach-event\x3d"press:_onClkDecBumper"\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset"\n\t\t\t\x3e\x3cinput data-dojo-attach-point\x3d"valueNode" type\x3d"hidden" ${!nameAttrSetting}\n\t\t\t/\x3e\x3cdiv class\x3d"dijitReset dijitSliderBarContainerH" role\x3d"presentation" data-dojo-attach-point\x3d"sliderBarContainer"\n\t\t\t\t\x3e\x3cdiv role\x3d"presentation" data-dojo-attach-point\x3d"progressBar" class\x3d"dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH" data-dojo-attach-event\x3d"press:_onBarClick"\n\t\t\t\t\t\x3e\x3cdiv class\x3d"dijitSliderMoveable dijitSliderMoveableH"\n\t\t\t\t\t\t\x3e\x3cdiv data-dojo-attach-point\x3d"sliderHandle,focusNode" class\x3d"dijitSliderImageHandle dijitSliderImageHandleH" data-dojo-attach-event\x3d"press:_onHandleClick" role\x3d"slider"\x3e\x3c/div\n\t\t\t\t\t\x3e\x3c/div\n\t\t\t\t\x3e\x3c/div\n\t\t\t\t\x3e\x3cdiv role\x3d"presentation" data-dojo-attach-point\x3d"remainingBar" class\x3d"dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH" data-dojo-attach-event\x3d"press:_onBarClick"\x3e\x3c/div\n\t\t\t\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset"\n\t\t\t\x3e\x3cdiv class\x3d"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper" data-dojo-attach-event\x3d"press:_onClkIncBumper"\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t\x3e\x3cdiv class\x3d"dijitSliderIncrementIconH" style\x3d"display:none" data-dojo-attach-point\x3d"incrementButton"\x3e\x3cspan class\x3d"dijitSliderButtonInner"\x3e+\x3c/span\x3e\x3c/div\n\t\t\x3e\x3c/td\n\t\x3e\x3c/tr\n\t\x3e\x3ctr class\x3d"dijitReset"\n\t\t\x3e\x3ctd class\x3d"dijitReset" colspan\x3d"2"\x3e\x3c/td\n\t\t\x3e\x3ctd data-dojo-attach-point\x3d"containerNode,bottomDecoration" class\x3d"dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH"\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset" colspan\x3d"2"\x3e\x3c/td\n\t\x3e\x3c/tr\n\x3e\x3c/table\x3e\n'}});
define("dijit/form/HorizontalSlider","dojo/_base/array dojo/_base/declare dojo/dnd/move dojo/_base/fx dojo/dom-geometry dojo/dom-style dojo/keys dojo/_base/lang dojo/sniff dojo/dnd/Moveable dojo/dnd/Mover dojo/query dojo/mouse dojo/on ../_base/manager ../focus ../typematic ./Button ./_FormValueWidget ../_Container dojo/text!./templates/HorizontalSlider.html".split(" "),function(r,f,g,s,h,t,e,l,u,v,m,w,x,y,z,n,p,D,A,B,C){var q=f("dijit.form._SliderMover",m,{onMouseMove:function(a){var b=this.widget,
c=b._abspos;c||(c=b._abspos=h.position(b.sliderBarContainer,!0),b._setPixelValue_=l.hitch(b,"_setPixelValue"),b._isReversed_=b._isReversed());a=a[b._mousePixelCoord]-c[b._startingPixelCoord];b._setPixelValue_(b._isReversed_?c[b._pixelCount]-a:a,c[b._pixelCount],!1)},destroy:function(a){m.prototype.destroy.apply(this,arguments);var b=this.widget;b._abspos=null;b._setValueAttr(b.value,!0)}});g=f("dijit.form.HorizontalSlider",[A,B],{templateString:C,value:0,showButtons:!0,minimum:0,maximum:100,discreteValues:Infinity,
pageIncrement:2,clickSelect:!0,slideDuration:z.defaultDuration,_setIdAttr:"",_setNameAttr:"valueNode",baseClass:"dijitSlider",cssStateNodes:{incrementButton:"dijitSliderIncrementButton",decrementButton:"dijitSliderDecrementButton",focusNode:"dijitSliderThumb"},_mousePixelCoord:"pageX",_pixelCount:"w",_startingPixelCoord:"x",_handleOffsetCoord:"left",_progressPixelSize:"width",_onKeyUp:function(a){!this.disabled&&(!this.readOnly&&!a.altKey&&!a.ctrlKey&&!a.metaKey)&&this._setValueAttr(this.value,!0)},
_onKeyDown:function(a){if(!this.disabled&&!this.readOnly&&!a.altKey&&!a.ctrlKey&&!a.metaKey){switch(a.keyCode){case e.HOME:this._setValueAttr(this.minimum,!1);break;case e.END:this._setValueAttr(this.maximum,!1);break;case this._descending||this.isLeftToRight()?e.RIGHT_ARROW:e.LEFT_ARROW:case !1===this._descending?e.DOWN_ARROW:e.UP_ARROW:case !1===this._descending?e.PAGE_DOWN:e.PAGE_UP:this.increment(a);break;case this._descending||this.isLeftToRight()?e.LEFT_ARROW:e.RIGHT_ARROW:case !1===this._descending?
e.UP_ARROW:e.DOWN_ARROW:case !1===this._descending?e.PAGE_UP:e.PAGE_DOWN:this.decrement(a);break;default:return}a.stopPropagation();a.preventDefault()}},_onHandleClick:function(a){!this.disabled&&!this.readOnly&&(u("ie")||n.focus(this.sliderHandle),a.stopPropagation(),a.preventDefault())},_isReversed:function(){return!this.isLeftToRight()},_onBarClick:function(a){if(!this.disabled&&!this.readOnly&&this.clickSelect){n.focus(this.sliderHandle);a.stopPropagation();a.preventDefault();var b=h.position(this.sliderBarContainer,
!0),c=a[this._mousePixelCoord]-b[this._startingPixelCoord];this._setPixelValue(this._isReversed()?b[this._pixelCount]-c:c,b[this._pixelCount],!0);this._movable.onMouseDown(a)}},_setPixelValue:function(a,b,c){if(!this.disabled&&!this.readOnly){var d=this.discreteValues;if(1>=d||Infinity==d)d=b;d--;a=Math.round(a/(b/d));this._setValueAttr(Math.max(Math.min((this.maximum-this.minimum)*a/d+this.minimum,this.maximum),this.minimum),c)}},_setValueAttr:function(a,b){this._set("value",a);this.valueNode.value=
a;this.focusNode.setAttribute("aria-valuenow",a);this.inherited(arguments);var c=(a-this.minimum)/(this.maximum-this.minimum),d=!1===this._descending?this.remainingBar:this.progressBar,e=!1===this._descending?this.progressBar:this.remainingBar;this._inProgressAnim&&"stopped"!=this._inProgressAnim.status&&this._inProgressAnim.stop(!0);if(b&&0<this.slideDuration&&d.style[this._progressPixelSize]){var f=this,g={},h=parseFloat(d.style[this._progressPixelSize]),k=this.slideDuration*(c-h/100);0!=k&&(0>
k&&(k=0-k),g[this._progressPixelSize]={start:h,end:100*c,units:"%"},this._inProgressAnim=s.animateProperty({node:d,duration:k,onAnimate:function(a){e.style[f._progressPixelSize]=100-parseFloat(a[f._progressPixelSize])+"%"},onEnd:function(){delete f._inProgressAnim},properties:g}),this._inProgressAnim.play())}else d.style[this._progressPixelSize]=100*c+"%",e.style[this._progressPixelSize]=100*(1-c)+"%"},_bumpValue:function(a,b){if(!this.disabled&&!this.readOnly){var c=t.getComputedStyle(this.sliderBarContainer),
d=h.getContentBox(this.sliderBarContainer,c),c=this.discreteValues;if(1>=c||Infinity==c)c=d[this._pixelCount];c--;d=(this.value-this.minimum)*c/(this.maximum-this.minimum)+a;0>d&&(d=0);d>c&&(d=c);d=d*(this.maximum-this.minimum)/c+this.minimum;this._setValueAttr(d,b)}},_onClkBumper:function(a){!this.disabled&&(!this.readOnly&&this.clickSelect)&&this._setValueAttr(a,!0)},_onClkIncBumper:function(){this._onClkBumper(!1===this._descending?this.minimum:this.maximum)},_onClkDecBumper:function(){this._onClkBumper(!1===
this._descending?this.maximum:this.minimum)},decrement:function(a){this._bumpValue(a.keyCode==e.PAGE_DOWN?-this.pageIncrement:-1)},increment:function(a){this._bumpValue(a.keyCode==e.PAGE_UP?this.pageIncrement:1)},_mouseWheeled:function(a){a.stopPropagation();a.preventDefault();this._bumpValue(0>a.wheelDelta?-1:1,!0)},startup:function(){this._started||(r.forEach(this.getChildren(),function(a){this[a.container]!=this.containerNode&&this[a.container].appendChild(a.domNode)},this),this.inherited(arguments))},
_typematicCallback:function(a,b,c){if(-1==a)this._setValueAttr(this.value,!0);else this[b==(this._descending?this.incrementButton:this.decrementButton)?"decrement":"increment"](c)},buildRendering:function(){this.inherited(arguments);this.showButtons&&(this.incrementButton.style.display="",this.decrementButton.style.display="");var a=w('label[for\x3d"'+this.id+'"]');a.length&&(a[0].id||(a[0].id=this.id+"_label"),this.focusNode.setAttribute("aria-labelledby",a[0].id));this.focusNode.setAttribute("aria-valuemin",
this.minimum);this.focusNode.setAttribute("aria-valuemax",this.maximum)},postCreate:function(){this.inherited(arguments);this.showButtons&&this.own(p.addMouseListener(this.decrementButton,this,"_typematicCallback",25,500),p.addMouseListener(this.incrementButton,this,"_typematicCallback",25,500));this.own(y(this.domNode,x.wheel,l.hitch(this,"_mouseWheeled")));var a=f(q,{widget:this});this._movable=new v(this.sliderHandle,{mover:a});this._layoutHackIE7()},destroy:function(){this._movable.destroy();
this._inProgressAnim&&"stopped"!=this._inProgressAnim.status&&this._inProgressAnim.stop(!0);this.inherited(arguments)}});g._Mover=q;return g});