$wnd.GwtBootstrap3Demo.runAsyncCallback40("function pRc(){}\nfunction tRc(){}\nfunction vRc(){}\nfunction wRc(){wRc=Ogb;sRc=new vRc}\nfunction wvc(a){hyb.call(this,a);vvc(this)}\nfunction oRc(){sJb.call(this);qJb(this,qRc(new rRc))}\nfunction iRc(a,b,c){EIb();aJb.call(this,a,b,c,(Svc(),Rvc))}\nfunction rRc(){this.a=(new tRc,wRc(),sRc);uRc(this.a)}\nfunction UVc(a){var b;if(!a.M){b=new oRc(new pRc);a.M=b}return a.M}\nfunction TVc(a){var b;if(!a.L){b=new iRc(dIb(HJb(a.a)),UVc(a),SVc(a));wIb((KJb(a.a),b),WJb(KJb(a.a)));a.L=b}return a.L}\nfunction uRc(a){if(!a.a){a.a=true;bx((eD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction qRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new g5b;z$b(a,(b=new U0b(jKd),z$b(b,(c=new M3b,c.a='Offline',L3b(c),c)),z$b(b,(d=new H_b,z$b(d,(e=new G1b((Hdc(),Edc)),Skb((msb(),e.eb),'GPBYFDEFM',true),Kvc(e.b,oQd),A$b(e,e.b,0),e)),z$b(d,new Evc((j=new MPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Iib(j.a)).a)),z$b(d,(f=new W_c,X4b(f,(k=new MPb,k.a+=pQd,new Iib(k.a)).a),Skb(f.eb,oKd,true),f)),z$b(d,new Evc((l=new MPb,l.a+=qQd,new Iib(l.a)).a)),z$b(d,(g=new W_c,X4b(g,(m=new MPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Iib(m.a)).a),Skb(g.eb,oKd,true),g)),Skb(d.eb,'GPBYFDEEM',true),d)),z$b(b,(h=new Z3b,z$b(h,(n=new m4b,z$b(n,(o=new G1b(Ddc),Kvc(o.b,'What is Offline?'),A$b(o,o.b,0),o)),n)),z$b(h,(p=new _3b,z$b(p,new wvc((q=new MPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Iib(q.a)).a)),p)),z$b(h,new j4b),h)),z$b(b,(i=new Z3b,z$b(i,(r=new m4b,z$b(r,(s=new G1b(Ddc),Kvc(s.b,'How to configure?'),A$b(s,s.b,0),s)),r)),z$b(i,(t=new _3b,z$b(t,new Evc((u=new MPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Iib(u.a)).a)),z$b(t,(v=new W_c,X4b(v,(w=new MPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Iib(w.a)).a),Skb(v.eb,oKd,true),v)),z$b(t,new Evc((A=new MPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Iib(A.a)).a)),z$b(t,(B=new W_c,X4b(B,(C=new MPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Iib(C.a)).a),Skb(B.eb,oKd,true),B)),z$b(t,new Evc((D=new MPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Iib(D.a)).a)),z$b(t,(F=new W_c,X4b(F,(G=new MPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Iib(G.a)).a),Skb(F.eb,oKd,true),F)),t)),z$b(i,new j4b),i)),b));return a}\nNgb(404,228,ZGd,wvc);Ngb(1002,44,kHd,iRc);var C5=aOb($Jd,'OfflinePresenter',1002);Ngb(1237,48,lHd,oRc);var H5=aOb($Jd,'OfflineView',1237);Ngb(1507,1,{},pRc);var G5=aOb($Jd,'OfflineView_BinderImpl',1507);Ngb(1508,1,{},rRc);var D5=aOb($Jd,'OfflineView_BinderImpl/Widgets',1508);Ngb(1850,1,{},tRc);var sRc;var F5=aOb($Jd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1850);Ngb(1851,1,{},vRc);_.a=false;var E5=aOb($Jd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1851);Ngb(926,1,wJd);_.Sb=function qWc(){nLb(this.b,TVc(this.a.a))};IEd(Mo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
