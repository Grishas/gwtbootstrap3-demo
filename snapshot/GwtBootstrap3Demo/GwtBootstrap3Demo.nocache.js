function GwtBootstrap3Demo(){var Q='bootstrap',R='begin',S='gwt.codesvr.GwtBootstrap3Demo=',T='gwt.codesvr=',U='GwtBootstrap3Demo',V='startup',W='DUMMY',X=0,Y=1,Z='iframe',$='javascript:""',_='position:absolute; width:0; height:0; border:none; left: -1000px;',ab=' top: -1000px;',bb='CSS1Compat',cb='<!doctype html>',db='',eb='<html><head><\/head><body><\/body><\/html>',fb='undefined',gb='DOMContentLoaded',hb=50,ib='Chrome',jb='eval("',kb='");',lb='script',mb='javascript',nb='moduleStartup',ob='moduleRequested',pb='Failed to load ',qb='head',rb='meta',sb='name',tb='GwtBootstrap3Demo::',ub='::',vb='gwt:property',wb='content',xb='=',yb='gwt:onPropertyErrorFn',zb='Bad handler "',Ab='" for "gwt:onPropertyErrorFn"',Bb='gwt:onLoadErrorFn',Cb='" for "gwt:onLoadErrorFn"',Db='#',Eb='?',Fb='/',Gb='img',Hb='clear.cache.gif',Ib='baseUrl',Jb='GwtBootstrap3Demo.nocache.js',Kb='base',Lb='//',Mb='locale',Nb='en',Ob='locale=',Pb=7,Qb='&',Rb='__gwt_Locale',Sb='_',Tb='Unexpected exception in locale detection, using default: ',Ub=2,Vb='user.agent',Wb='webkit',Xb='safari',Yb='msie',Zb=10,$b=11,_b='ie10',ac=9,bc='ie9',cc=8,dc='ie8',ec='gecko',fc='gecko1_8',gc=3,hc=4,ic='selectingPermutation',jc='GwtBootstrap3Demo.devmode.js',kc='02F1B1E351802D79A795ED8633CDBDD6',lc='fr',mc='3309306C7D5C9856DE3E1D5D91809908',nc='default',oc='34BE923B4E3926586DE1042EBE7DA5F3',pc='52D66B5D1264E6CA76F29C8AD4BE00FE',qc='6857E0586D1E87AE31333B285717BDBD',rc='6B7760D804F714A779FC1EBADC470931',sc='71FBD472104C034C5DD7659A89C42E17',tc='742C8BA5D583ABA8203D8E206EC8683D',uc='8EDC87D75155862B4C36FC8E7822FD38',vc='8F7E55677AFCB63718754E62CDA7F6D1',wc='9611C9FDAE7757772C3387611CC9A54B',xc='B6C48A7909C6C982C186B6640EC58646',yc='CA089ADA9961BA53EC1E4C4FCB3262D5',zc='E12A5F67B000DABC0323AD0C863F9DF0',Ac='FEB33B747FC6E52298DBF13441B95AD5',Bc=':',Cc='.cache.js',Dc='link',Ec='rel',Fc='stylesheet',Gc='href',Hc='loadExternalRefs',Ic='css/bootstrap-3.3.6.min.cache.css',Jc='css/font-awesome-4.5.0.min.cache.css',Kc='css/bootstrap-datetimepicker-2.3.5.min.cache.css',Lc='css/bootstrap-datepicker3-1.4.0.min.cache.css',Mc='css/card-1.0.1.cache.css',Nc='css/bootstrap-slider-5.2.6.min.cache.css',Oc='css/bootstrap-switch-3.3.2.min.cache.css',Pc='css/summernote-0.6.16.min.cache.css',Qc='css/bootstrap-select-1.7.4.min.cache.css',Rc='css/typeahead-0.10.5.min.cache.css',Sc='css/positioned-tabs-1.0.0.min.cache.css',Tc='css/animate-3.5.0.min.cache.css',Uc='css/bootstrap-notify-custom.min.cache.css',Vc='css/blueimp-gallery-fix.cache.css',Wc='css/blueimp-gallery-2.16.0.min.cache.css',Xc='css/bootstrap-image-gallery-3.1.3.min.cache.css',Yc='css/demo.css',Zc='css/prettify.css',$c='end',_c='http:',ad='file:',bd='_gwt_dummy_',cd='__gwtDevModeHook:GwtBootstrap3Demo',dd='Ignoring non-whitelisted Dev Mode URL: ',ed=':moduleBase';var q=window;var r=document;t(Q,R);function s(){var a=q.location.search;return a.indexOf(S)!=-1||a.indexOf(T)!=-1}
function t(a,b){if(q.__gwtStatsEvent){q.__gwtStatsEvent({moduleName:U,sessionId:q.__gwtStatsSessionId,subSystem:V,evtGroup:a,millis:(new Date).getTime(),type:b})}}
GwtBootstrap3Demo.__sendStats=t;GwtBootstrap3Demo.__moduleName=U;GwtBootstrap3Demo.__errFn=null;GwtBootstrap3Demo.__moduleBase=W;GwtBootstrap3Demo.__softPermutationId=X;GwtBootstrap3Demo.__computePropValue=null;GwtBootstrap3Demo.__getPropMap=null;GwtBootstrap3Demo.__installRunAsyncCode=function(){};GwtBootstrap3Demo.__gwtStartLoadingFragment=function(){return null};GwtBootstrap3Demo.__gwt_isKnownPropertyValue=function(){return false};GwtBootstrap3Demo.__gwt_getMetaProperty=function(){return null};var u=null;var v=q.__gwt_activeModules=q.__gwt_activeModules||{};v[U]={moduleName:U};GwtBootstrap3Demo.__moduleStartupDone=function(e){var f=v[U].bindings;v[U].bindings=function(){var a=f?f():{};var b=e[GwtBootstrap3Demo.__softPermutationId];for(var c=X;c<b.length;c++){var d=b[c];a[d[X]]=d[Y]}return a}};var w;function A(){B();return w}
function B(){if(w){return}var a=r.createElement(Z);a.src=$;a.id=U;a.style.cssText=_+ab;a.tabIndex=-1;r.body.appendChild(a);w=a.contentDocument;if(!w){w=a.contentWindow.document}w.open();var b=document.compatMode==bb?cb:db;w.write(b+eb);w.close()}
function C(k){function l(a){function b(){if(typeof r.readyState==fb){return typeof r.body!=fb&&r.body!=null}return /loaded|complete/.test(r.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(r.removeEventListener){r.removeEventListener(gb,d,false)}if(e){clearInterval(e)}}}
if(r.addEventListener){r.addEventListener(gb,d,false)}var e=setInterval(function(){if(b()){d()}},hb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=A();var f=e.body;var g;if(navigator.userAgent.indexOf(ib)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(jb));for(var i=X;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(Y,j.length-Y)))}h.appendChild(e.createTextNode(kb));g=e.createElement(lb);g.language=mb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=X;i<c.length;i++){g=e.createElement(lb);g.language=mb;g.text=c[i];f.appendChild(g);d(f,g)}}}
GwtBootstrap3Demo.onScriptDownloaded=function(a){l(function(){m(a)})};t(nb,ob);var n=r.createElement(lb);n.src=k;if(GwtBootstrap3Demo.__errFn){n.onerror=function(){GwtBootstrap3Demo.__errFn(U,new Error(pb+code))}}r.getElementsByTagName(qb)[X].appendChild(n)}
GwtBootstrap3Demo.__startLoadingFragment=function(a){return G(a)};GwtBootstrap3Demo.__installRunAsyncCode=function(a){var b=A();var c=b.body;var d=b.createElement(lb);d.language=mb;d.text=a;c.appendChild(d);c.removeChild(d)};function D(){var c={};var d;var e;var f=r.getElementsByTagName(rb);for(var g=X,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(sb),k;if(j){j=j.replace(tb,db);if(j.indexOf(ub)>=X){continue}if(j==vb){k=i.getAttribute(wb);if(k){var l,m=k.indexOf(xb);if(m>=X){j=k.substring(X,m);l=k.substring(m+Y)}else{j=k;l=db}c[j]=l}}else if(j==yb){k=i.getAttribute(wb);if(k){try{d=eval(k)}catch(a){alert(zb+k+Ab)}}}else if(j==Bb){k=i.getAttribute(wb);if(k){try{e=eval(k)}catch(a){alert(zb+k+Cb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};u=d;GwtBootstrap3Demo.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(Db);if(b==-1){b=a.length}var c=a.indexOf(Eb);if(c==-1){c=a.length}var d=a.lastIndexOf(Fb,Math.min(c,b));return d>=X?a.substring(X,d+Y):db}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=r.createElement(Gb);b.src=a+Hb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Ib);if(a!=null){return a}return db}
function h(){var a=r.getElementsByTagName(lb);for(var b=X;b<a.length;++b){if(a[b].src.indexOf(Jb)!=-1){return e(a[b].src)}}return db}
function i(){var a=r.getElementsByTagName(Kb);if(a.length>X){return a[a.length-Y].href}return db}
function j(){var a=r.location;return a.href==a.protocol+Lb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==db){k=h()}if(k==db){k=i()}if(k==db&&j()){k=e(r.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return GwtBootstrap3Demo.__moduleBase+a}
function H(){var i=[];var j=X;function k(a,b){var c=i;for(var d=X,e=a.length-Y;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var l=[];var m=[];function n(a){var b=m[a](),c=l[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(u){u(a,d,b)}throw null}
m[Mb]=function(){var b=null;var c=Nb;try{if(!b){var d=location.search;var e=d.indexOf(Ob);if(e>=X){var f=d.substring(e+Pb);var g=d.indexOf(Qb,e);if(g<X){g=d.length}b=d.substring(e+Pb,g)}}if(!b){b=__gwt_getMetaProperty(Mb)}if(!b){b=q[Rb]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Mb,b)){var h=b.lastIndexOf(Sb);if(h<X){b=null;break}b=b.substring(X,h)}}catch(a){alert(Tb+a)}q[Rb]=c;return b||Nb};l[Mb]={'default':X,en:Y,fr:Ub};m[Vb]=function(){var a=navigator.userAgent.toLowerCase();var b=r.documentMode;if(function(){return a.indexOf(Wb)!=-1}())return Xb;if(function(){return a.indexOf(Yb)!=-1&&(b>=Zb&&b<$b)}())return _b;if(function(){return a.indexOf(Yb)!=-1&&(b>=ac&&b<$b)}())return bc;if(function(){return a.indexOf(Yb)!=-1&&(b>=cc&&b<$b)}())return dc;if(function(){return a.indexOf(ec)!=-1||b>=$b}())return fc;return db};l[Vb]={gecko1_8:X,ie10:Y,ie8:Ub,ie9:gc,safari:hc};__gwt_isKnownPropertyValue=function(a,b){return b in l[a]};GwtBootstrap3Demo.__getPropMap=function(){var a={};for(var b in l){if(l.hasOwnProperty(b)){a[b]=n(b)}}return a};GwtBootstrap3Demo.__computePropValue=n;q.__gwt_activeModules[U].bindings=GwtBootstrap3Demo.__getPropMap;t(Q,ic);if(s()){return G(jc)}var o;try{k([Nb,fc],kc);k([lc,fc],mc);k([nc,fc],oc);k([lc,Xb],pc);k([Nb,dc],qc);k([nc,dc],rc);k([lc,dc],sc);k([Nb,Xb],tc);k([Nb,_b],uc);k([nc,Xb],vc);k([lc,_b],wc);k([lc,bc],xc);k([nc,bc],yc);k([nc,_b],zc);k([Nb,bc],Ac);o=i[n(Mb)][n(Vb)];var p=o.indexOf(Bc);if(p!=-1){j=parseInt(o.substring(p+Y),Zb);o=o.substring(X,p)}}catch(a){}GwtBootstrap3Demo.__softPermutationId=j;return G(o+Cc)}
function I(){if(!q.__gwt_stylesLoaded){q.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=r.createElement(Dc);b.setAttribute(Ec,Fc);b.setAttribute(Gc,G(a));r.getElementsByTagName(qb)[X].appendChild(b);__gwt_stylesLoaded[a]=true}}
t(Hc,R);c(Ic);c(Jc);c(Kc);c(Lc);c(Mc);c(Nc);c(Oc);c(Pc);c(Qc);c(Rc);c(Sc);c(Tc);c(Uc);c(Vc);c(Wc);c(Xc);c(Yc);c(Zc);t(Hc,$c)}
D();GwtBootstrap3Demo.__moduleBase=F();v[U].moduleBase=GwtBootstrap3Demo.__moduleBase;var J=H();if(q){var K=!!(q.location.protocol==_c||q.location.protocol==ad);q.__gwt_activeModules[U].canRedirect=K;function L(){var b=bd;try{q.sessionStorage.setItem(b,b);q.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(K&&L()){var M=cd;var N=q.sessionStorage[M];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(N)){if(N&&(window.console&&console.log)){console.log(dd+N)}N=db}if(N&&!q[M]){q[M]=true;q[M+ed]=F();var O=r.createElement(lb);O.src=N;var P=r.getElementsByTagName(qb)[X];P.insertBefore(O,P.firstElementChild||P.children[X]);return false}}}I();t(Q,$c);C(J);return true}
GwtBootstrap3Demo.succeeded=GwtBootstrap3Demo();