//>>built
define("dojo/i18n","./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "),function(n,k,q,w,C,r,z,D,E){q.add("dojo-preload-i18n-Api",1);var u=n.i18n={},F=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,G=function(a,c,b,d){var e=[b+d];c=c.split("-");for(var s="",f=0;f<c.length;f++)if(s+=(s?"-":"")+c[f],!a||a[s])e.push(b+s+"/"+d),e.specificity=s;return e},l={},A=function(a,c,b){b=b?b.toLowerCase():n.locale;a=a.replace(/\./g,"/");c=c.replace(/\./g,"/");
return/root/i.test(b)?a+"/nls/"+c:a+"/nls/"+b+"/"+c},H=n.getL10nName=function(a,c,b){return E.id+"!"+A(a,c,b)},I=function(a,c,b,d,e,s){a([c],function(f){var g=r.clone(f.root||f.ROOT),v=G(!f._v1x&&f,e,b,d);a(v,function(){for(var a=1;a<v.length;a++)g=r.mixin(r.clone(g),arguments[a]);l[c+"/"+e]=g;g.$locale=v.specificity;s()})})},J=function(a){var c=C.extraLocale||[],c=r.isArray(c)?c:[c];c.push(a);return c},y=function(a,c,b){if(q("dojo-preload-i18n-Api")){var d=a.split("*"),e="preload"==d[1];e&&(l[a]||
(l[a]=1,K(d[2],D.parse(d[3]),1,c)),b(1));if(!(d=e))t&&x.push([a,c,b]),d=t;if(d)return}a=F.exec(a);var g=a[1]+"/",f=a[5]||a[4],k=g+f,d=(a=a[5]&&a[4])||n.locale||"",v=k+"/"+d;a=a?[d]:J(d);var p=a.length,h=function(){--p||b(r.delegate(l[v]))};w.forEach(a,function(a){var b=k+"/"+a;q("dojo-preload-i18n-Api")&&m(b);l[b]?h():I(c,k,g,f,a,h)})};if(q("dojo-unit-tests"))var L=u.unitTests=[];q("dojo-preload-i18n-Api");var M=u.normalizeLocale=function(a){a=a?a.toLowerCase():n.locale;return"root"==a?"ROOT":a},
t=0,x=[],K=u._preloadLocalizations=function(a,c,b,d){function e(a,c){d.isXdUrl(k.toUrl(a+".js"))||b?d([a],c):B([a],c,d)}function g(a,c){for(var b=a.split("-");b.length;){if(c(b.join("-")))return;b.pop()}c("ROOT")}function f(){for(--t;!t&&x.length;)y.apply(null,x.shift())}function h(b){b=M(b);g(b,function(p){if(0<=w.indexOf(c,p)){var h=a.replace(/\./g,"/")+"_"+p;t++;e(h,function(a){for(var c in a){var e=a[c],h=c.match(/(.+)\/([^\/]+)$/),m;if(h){m=h[2];h=h[1]+"/";e._localized=e._localized||{};var n;
if("ROOT"===p){var q=n=e._localized;delete e._localized;q.root=e;l[k.toAbsMid(c)]=q}else n=e._localized,l[k.toAbsMid(h+m+"/"+p)]=e;p!==b&&function(a,c,e,h){var p=[],m=[];g(b,function(b){h[b]&&(p.push(k.toAbsMid(a+b+"/"+c)),m.push(k.toAbsMid(a+c+"/"+b)))});p.length?(t++,d(p,function(){for(var d=0;d<p.length;d++)e=r.mixin(r.clone(e),arguments[d]),l[m[d]]=e;l[k.toAbsMid(a+c+"/"+b)]=r.clone(e);f()})):l[k.toAbsMid(a+c+"/"+b)]=e}(h,m,e,n)}}f()});return!0}return!1})}d=d||k;h();w.forEach(n.config.extraLocale,
h)},m=function(){},g={},h=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue","var define \x3d function(mid, factory){define.called \x3d 1; __amdValue.result \x3d factory || mid;},\t   require \x3d function(){define.called \x3d 1;};try{define.called \x3d 0;eval(__bundle);if(define.called\x3d\x3d1)return __amdValue;if((__checkForLegacyModules \x3d __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),B=
function(a,c,b){var d=[];w.forEach(a,function(a){function c(b){b=h(b,m,a,g);b===g?d.push(l[f]=g.result):(b instanceof Error&&(console.error("failed to evaluate i18n bundle; url\x3d"+f,b),b={}),d.push(l[f]=/nls\/[^\/]+\/[^\/]+$/.test(f)?b:{root:b,_v1x:1}))}var f=b.toUrl(a+".js");if(l[f])d.push(l[f]);else{var k=b.syncLoadNls(a);if(k)d.push(k);else if(z)z.get({url:f,sync:!0,load:c,error:function(){d.push(l[f]={})}});else try{b.getText(f,!0,c)}catch(n){d.push(l[f]={})}}});c&&c.apply(null,d)},m=function(a){for(var c,
b=a.split("/"),d=n.global[b[0]],e=1;d&&e<b.length-1;d=d[b[e++]]);d&&((c=d[b[e]])||(c=d[b[e].replace(/-/g,"_")]),c&&(l[a]=c));return c};u.getLocalization=function(a,c,b){var d;a=A(a,c,b);y(a,!k.isXdUrl(k.toUrl(a+".js"))?function(a,b){B(a,b,k)}:k,function(a){d=a});return d};q("dojo-unit-tests")&&L.push(function(a){a.register("tests.i18n.unit",function(a){var b;b=h("{prop:1}",m,"nonsense",g);a.is({prop:1},b);a.is(void 0,b[1]);b=h("({prop:1})",m,"nonsense",g);a.is({prop:1},b);a.is(void 0,b[1]);b=h("{'prop-x':1}",
m,"nonsense",g);a.is({"prop-x":1},b);a.is(void 0,b[1]);b=h("({'prop-x':1})",m,"nonsense",g);a.is({"prop-x":1},b);a.is(void 0,b[1]);b=h("define({'prop-x':1})",m,"nonsense",g);a.is(g,b);a.is({"prop-x":1},g.result);b=h("define('some/module', {'prop-x':1})",m,"nonsense",g);a.is(g,b);a.is({"prop-x":1},g.result);b=h("this is total nonsense and should throw an error",m,"nonsense",g);a.is(b instanceof Error,!0)})});return r.mixin(u,{dynamic:!0,normalize:function(a,c){return/^\./.test(a)?c(a):a},load:y,cache:l,
getL10nName:H})});