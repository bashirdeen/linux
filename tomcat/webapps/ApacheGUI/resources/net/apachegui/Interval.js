//>>built
var net=net||{};net.apachegui=net.apachegui||{};net.apachegui.Interval=function(){var b=[],c=function(a){if(a&&-1!=b[a]){try{clearTimeout(b[a])}catch(d){}b[a]=-1}};return{setInterval:function(a,d){var c=function(e){return function(){-1!=b[e]&&(a(),b[e]=setTimeout(c,d))}}(b.length);b.push(setTimeout(c,d));return b.length-1},clearInterval:c,clearAllIntervals:function(){for(var a=0;a<b.length;a++)c(a)}}}();