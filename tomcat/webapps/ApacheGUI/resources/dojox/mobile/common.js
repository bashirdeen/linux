//>>built
define("dojox/mobile/common","dojo/_base/array dojo/_base/config dojo/_base/connect dojo/_base/lang dojo/_base/window dojo/_base/kernel dojo/dom-class dojo/dom-construct dojo/domReady dojo/ready dojo/touch dijit/registry ./sniff ./uacss".split(" "),function(n,g,k,m,b,r,l,p,s,t,v,u,c){var a=m.getObject("dojox.mobile",!0);b.doc.dojoClick=!0;c("touch")&&(c.add("clicks-prevented",!(4.1<=c("android")||10===c("ie")||!c("ie")&&6<c("trident"))),c("clicks-prevented")&&(a._sendClick=function(a,d){for(var f=
a;f;f=f.parentNode)if(f.dojoClick)return;f=b.doc.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,b.global,1,d.screenX,d.screenY,d.clientX,d.clientY);a.dispatchEvent(f)}));a.getScreenSize=function(){return{h:b.global.innerHeight||b.doc.documentElement.clientHeight,w:b.global.innerWidth||b.doc.documentElement.clientWidth}};a.updateOrient=function(){var e=a.getScreenSize();l.replace(b.doc.documentElement,e.h>e.w?"dj_portrait":"dj_landscape",e.h>e.w?"dj_landscape":"dj_portrait")};a.updateOrient();
a.tabletSize=500;a.detectScreenSize=function(e){var d=a.getScreenSize(),f=Math.min(d.w,d.h),c,h;if(f>=a.tabletSize&&(e||!this._sz||this._sz<a.tabletSize))c="phone",h="tablet";else if(f<a.tabletSize&&(e||!this._sz||this._sz>=a.tabletSize))c="tablet",h="phone";h&&(l.replace(b.doc.documentElement,"dj_"+h,"dj_"+c),k.publish("/dojox/mobile/screenSize/"+h,[d]));this._sz=f};a.detectScreenSize();a.hideAddressBarWait="number"===typeof g.mblHideAddressBarWait?g.mblHideAddressBarWait:1500;a.hide_1=function(){scrollTo(0,
1);a._hidingTimer=0==a._hidingTimer?200:2*a._hidingTimer;setTimeout(function(){a.isAddressBarHidden()||a._hidingTimer>a.hideAddressBarWait?(a.resizeAll(),a._hiding=!1):setTimeout(a.hide_1,a._hidingTimer)},50)};a.hideAddressBar=function(e){!a.disableHideAddressBar&&!a._hiding&&(a._hiding=!0,a._hidingTimer=c("ios")?200:0,e=screen.availHeight,c("android")&&(e=outerHeight/devicePixelRatio,0==e&&(a._hiding=!1,setTimeout(function(){a.hideAddressBar()},200)),e<=innerHeight&&(e=outerHeight),3>c("android")&&
(b.doc.documentElement.style.overflow=b.body().style.overflow="visible")),b.body().offsetHeight<e&&(b.body().style.minHeight=e+"px",a._resetMinHeight=!0),setTimeout(a.hide_1,a._hidingTimer))};a.isAddressBarHidden=function(){return 1===pageYOffset};a.resizeAll=function(e,d){if(!a.disableResizeAll){k.publish("/dojox/mobile/resizeAll",[e,d]);k.publish("/dojox/mobile/beforeResizeAll",[e,d]);a._resetMinHeight&&(b.body().style.minHeight=a.getScreenSize().h+"px");a.updateOrient();a.detectScreenSize();var c=
function(a){var b=a.getParent&&a.getParent();return!(b&&b.resize||!a.resize)},g=function(a){n.forEach(a.getChildren(),function(a){c(a)&&a.resize();g(a)})};d?(d.resize&&d.resize(),g(d)):n.forEach(n.filter(u.toArray(),c),function(a){a.resize()});k.publish("/dojox/mobile/afterResizeAll",[e,d])}};a.openWindow=function(a,d){b.global.open(a,d||"_blank")};a._detectWindowsTheme=function(){navigator.userAgent.match(/IEMobile\/10\.0/)&&p.create("style",{innerHTML:"@-ms-viewport {width: auto !important}"},b.doc.head);
var a=function(){l.add(b.doc.documentElement,"windows_theme");r.experimental("Dojo Mobile Windows theme","Behavior and appearance of the Windows theme are experimental.")},d=c("windows-theme");if(void 0!==d)d&&a();else{for(var f,g=function(b){return b&&-1!==b.indexOf("/windows/")?(c.add("windows-theme",!0),a(),!0):!1},h=b.doc.styleSheets,d=0;d<h.length;d++)if(!h[d].href){var k=h[d].cssRules||h[d].imports;if(k)for(f=0;f<k.length;f++)if(g(k[f].href))return}f=b.doc.getElementsByTagName("link");for(d=
0;d<f.length&&!g(f[d].href);d++);}};!1!==g.mblApplyPageStyles&&l.add(b.doc.documentElement,"mobile");c("chrome")&&l.add(b.doc.documentElement,"dj_chrome");if(b.global._no_dojo_dm){m=b.global._no_dojo_dm;for(var q in m)a[q]=m[q];a.deviceTheme.setDm(a)}c.add("mblAndroidWorkaround",!1!==g.mblAndroidWorkaround&&3>c("android"),void 0,!0);c.add("mblAndroid3Workaround",!1!==g.mblAndroid3Workaround&&3<=c("android"),void 0,!0);a._detectWindowsTheme();s(function(){l.add(b.body(),"mblBackground")});t(function(){a.detectScreenSize(!0);
!1!==g.mblAndroidWorkaroundButtonStyle&&c("android")&&p.create("style",{innerHTML:"BUTTON,INPUT[type\x3d'button'],INPUT[type\x3d'submit'],INPUT[type\x3d'reset'],INPUT[type\x3d'file']::-webkit-file-upload-button{-webkit-appearance:none;} audio::-webkit-media-controls-play-button,video::-webkit-media-controls-play-button{-webkit-appearance:media-play-button;} video::-webkit-media-controls-fullscreen-button{-webkit-appearance:media-fullscreen-button;}"},b.doc.head,"first");c("mblAndroidWorkaround")&&
p.create("style",{innerHTML:".mblView.mblAndroidWorkaround{position:absolute;top:-9999px !important;left:-9999px !important;}"},b.doc.head,"last");var e=a.resizeAll,d=-1!=navigator.appVersion.indexOf("Mobile")&&!(7<=c("ios"));if(!1!==g.mblHideAddressBar&&d||!0===g.mblForceHideAddressBar)a.hideAddressBar(),!0===g.mblAlwaysHideAddressBar&&(e=a.hideAddressBar);var f=6<=c("ios");if((c("android")||f)&&void 0!==b.global.onorientationchange){var l=e,h,m,n;f?(m=b.doc.documentElement.clientWidth,n=b.doc.documentElement.clientHeight):
(e=function(a){var b=k.connect(null,"onresize",null,function(a){k.disconnect(b);l(a)})},h=a.getScreenSize());k.connect(null,"onresize",null,function(d){if(f){var c=b.doc.documentElement.clientWidth,e=b.doc.documentElement.clientHeight;c==m&&e!=n&&l(d);m=c;n=e}else c=a.getScreenSize(),c.w==h.w&&100<=Math.abs(c.h-h.h)&&l(d),h=c})}k.connect(null,void 0!==b.global.onorientationchange?"onorientationchange":"onresize",null,e);b.body().style.visibility="visible"});return a});