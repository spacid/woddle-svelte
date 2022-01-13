var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function i(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let v;function g(t){v=t}function m(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(t)}const x=[],k=[],q=[],$=[],y=Promise.resolve();let C=!1;function w(t){q.push(t)}const _=new Set;let A=0;function E(){const t=v;do{for(;A<x.length;){const t=x[A];A++,g(t),L(t.$$)}for(g(null),x.length=0,A=0;k.length;)k.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];_.has(n)||(_.add(n),n())}q.length=0}while(x.length);for(;$.length;)$.pop()();C=!1,_.clear(),g(t)}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const O=new Set;function W(t,n){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(r,l,s,i,u,f,d,h=[-1]){const b=v;g(r);const p=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(b?b.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:l.target||b.$$.root};d&&d(p.root);let m=!1;if(p.ctx=s?s(r,l.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&W(r,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();l.intro&&((x=r.$$.fragment)&&x.i&&(O.delete(x),x.i(k))),function(t,e,r,l){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(e,r),l||w((()=>{const e=a.map(n).filter(c);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(w)}(r,l.target,l.anchor,l.customElement),E()}var x,k;g(b)}function M(t,n,e){const o=t.slice();return o[41]=n[e],o}function N(t,n,e){const o=t.slice();return o[44]=n[e],o}function P(t){let n,e,o,c=t[44].character+"";return{c(){n=u("div"),e=f(c),b(n,"class",o="square "+t[44].match+" svelte-roq6f7")},m(t,o){s(t,n,o),l(n,e)},p(t,r){1&r[0]&&c!==(c=t[44].character+"")&&p(e,c),1&r[0]&&o!==(o="square "+t[44].match+" svelte-roq6f7")&&b(n,"class",o)},d(t){t&&a(n)}}}function T(t){let n,e,o=t[41],c=[];for(let n=0;n<o.length;n+=1)c[n]=P(N(t,o,n));return{c(){n=u("div");for(let t=0;t<c.length;t+=1)c[t].c();e=d()},m(t,o){s(t,n,o);for(let t=0;t<c.length;t+=1)c[t].m(n,null);l(n,e)},p(t,r){if(1&r[0]){let l;for(o=t[41],l=0;l<o.length;l+=1){const s=N(t,o,l);c[l]?c[l].p(s,r):(c[l]=P(s),c[l].c(),c[l].m(n,e))}for(;l<c.length;l+=1)c[l].d(1);c.length=o.length}},d(t){t&&a(n),i(c,t)}}}function H(n){let e;return{c(){e=u("p")},m(t,n){s(t,e,n)},p:t,d(t){t&&a(e)}}}function z(t){let n,e,o;return{c(){n=u("p"),e=f("Verloren, jammer! Het woord is: "),o=f(t[1])},m(t,c){s(t,n,c),l(n,e),l(n,o)},p(t,n){2&n[0]&&p(o,t[1])},d(t){t&&a(n)}}}function F(n){let e;return{c(){e=u("p"),e.textContent="Joepie gewonnen!"},m(t,n){s(t,e,n)},p:t,d(t){t&&a(e)}}}function S(n){let e,c,r,f,p,v,g,m,x,k,q,$,y,C,w,_,A,E,L,O,W,j,N,P,S,B,J,V,D,G,I,K,Q,R,U,X,Y,Z,tt,nt,et,ot,ct,rt,lt,st,at,it,ut,ft,dt,ht,bt,pt,vt,gt,mt,xt,kt,qt,$t,yt,Ct,wt,_t,At,Et,Lt,Ot,Wt,jt,Mt,Nt=n[0],Pt=[];for(let t=0;t<Nt.length;t+=1)Pt[t]=T(M(n,Nt,t));function Tt(t,n){return t[3]==t[2].Won?F:t[3]==t[2].Lost?z:H}let Ht=Tt(n),zt=Ht(n);return{c(){e=u("main"),c=u("div"),r=u("div"),f=u("div"),p=u("a"),p.textContent="Woddle",v=d(),g=u("button"),g.innerHTML='<span class="bi bi-arrow-clockwise"></span>',m=d(),x=u("div");for(let t=0;t<Pt.length;t+=1)Pt[t].c();k=d(),q=u("div"),$=u("div"),y=u("button"),y.textContent="a",C=d(),w=u("button"),w.textContent="z",_=d(),A=u("button"),A.textContent="e",E=d(),L=u("button"),L.textContent="r",O=d(),W=u("button"),W.textContent="t",j=d(),N=u("button"),N.textContent="y",P=d(),S=u("button"),S.textContent="u",B=d(),J=u("button"),J.textContent="i",V=d(),D=u("button"),D.textContent="o",G=d(),I=u("button"),I.textContent="p",K=d(),Q=u("div"),R=u("button"),R.textContent="q",U=d(),X=u("button"),X.textContent="s",Y=d(),Z=u("button"),Z.textContent="d",tt=d(),nt=u("button"),nt.textContent="f",et=d(),ot=u("button"),ot.textContent="g",ct=d(),rt=u("button"),rt.textContent="h",lt=d(),st=u("button"),st.textContent="j",at=d(),it=u("button"),it.textContent="k",ut=d(),ft=u("button"),ft.textContent="l",dt=d(),ht=u("button"),ht.textContent="m",bt=d(),pt=u("div"),vt=u("button"),vt.innerHTML='<span class="bi bi-arrow-return-left"></span>',gt=d(),mt=u("button"),mt.textContent="w",xt=d(),kt=u("button"),kt.textContent="x",qt=d(),$t=u("button"),$t.textContent="c",yt=d(),Ct=u("button"),Ct.textContent="v",wt=d(),_t=u("button"),_t.textContent="b",At=d(),Et=u("button"),Et.textContent="n",Lt=d(),Ot=u("button"),Ot.innerHTML='<span class="bi bi-backspace"></span>',Wt=d(),zt.c(),b(p,"class","navbar-brand svelte-roq6f7"),b(p,"href",""),b(g,"title","New word"),b(g,"class","btn button-icon-reload my-2 my-sm-0 svelte-roq6f7"),b(f,"class","container-fluid"),b(r,"class","navbar navbar-light bg-light svelte-roq6f7"),b(x,"class","game-grid svelte-roq6f7"),b(y,"class","svelte-roq6f7"),b(w,"class","svelte-roq6f7"),b(A,"class","svelte-roq6f7"),b(L,"class","svelte-roq6f7"),b(W,"class","svelte-roq6f7"),b(N,"class","svelte-roq6f7"),b(S,"class","svelte-roq6f7"),b(J,"class","svelte-roq6f7"),b(D,"class","svelte-roq6f7"),b(I,"class","svelte-roq6f7"),b($,"class","keyboard-row svelte-roq6f7"),b(R,"class","svelte-roq6f7"),b(X,"class","svelte-roq6f7"),b(Z,"class","svelte-roq6f7"),b(nt,"class","svelte-roq6f7"),b(ot,"class","svelte-roq6f7"),b(rt,"class","svelte-roq6f7"),b(st,"class","svelte-roq6f7"),b(it,"class","svelte-roq6f7"),b(ft,"class","svelte-roq6f7"),b(ht,"class","svelte-roq6f7"),b(Q,"class","keyboard-row svelte-roq6f7"),b(vt,"class","svelte-roq6f7"),b(mt,"class","svelte-roq6f7"),b(kt,"class","svelte-roq6f7"),b($t,"class","svelte-roq6f7"),b(Ct,"class","svelte-roq6f7"),b(_t,"class","svelte-roq6f7"),b(Et,"class","svelte-roq6f7"),b(Ot,"class","svelte-roq6f7"),b(pt,"class","keyboard-row svelte-roq6f7"),b(q,"id","keyboard"),b(q,"class","svelte-roq6f7"),b(c,"id","container"),b(c,"class","svelte-roq6f7"),b(e,"class","svelte-roq6f7")},m(t,o){s(t,e,o),l(e,c),l(c,r),l(r,f),l(f,p),l(f,v),l(f,g),l(c,m),l(c,x);for(let t=0;t<Pt.length;t+=1)Pt[t].m(x,null);l(c,k),l(c,q),l(q,$),l($,y),l($,C),l($,w),l($,_),l($,A),l($,E),l($,L),l($,O),l($,W),l($,j),l($,N),l($,P),l($,S),l($,B),l($,J),l($,V),l($,D),l($,G),l($,I),l(q,K),l(q,Q),l(Q,R),l(Q,U),l(Q,X),l(Q,Y),l(Q,Z),l(Q,tt),l(Q,nt),l(Q,et),l(Q,ot),l(Q,ct),l(Q,rt),l(Q,lt),l(Q,st),l(Q,at),l(Q,it),l(Q,ut),l(Q,ft),l(Q,dt),l(Q,ht),l(q,bt),l(q,pt),l(pt,vt),l(pt,gt),l(pt,mt),l(pt,xt),l(pt,kt),l(pt,qt),l(pt,$t),l(pt,yt),l(pt,Ct),l(pt,wt),l(pt,_t),l(pt,At),l(pt,Et),l(pt,Lt),l(pt,Ot),l(c,Wt),zt.m(c,null),jt||(Mt=[h(g,"click",n[7]),h(y,"click",n[8]),h(w,"click",n[9]),h(A,"click",n[10]),h(L,"click",n[11]),h(W,"click",n[12]),h(N,"click",n[13]),h(S,"click",n[14]),h(J,"click",n[15]),h(D,"click",n[16]),h(I,"click",n[17]),h(R,"click",n[18]),h(X,"click",n[19]),h(Z,"click",n[20]),h(nt,"click",n[21]),h(ot,"click",n[22]),h(rt,"click",n[23]),h(st,"click",n[24]),h(it,"click",n[25]),h(ft,"click",n[26]),h(ht,"click",n[27]),h(vt,"click",n[6]),h(mt,"click",n[28]),h(kt,"click",n[29]),h($t,"click",n[30]),h(Ct,"click",n[31]),h(_t,"click",n[32]),h(Et,"click",n[33]),h(Ot,"click",n[5])],jt=!0)},p(t,n){if(1&n[0]){let e;for(Nt=t[0],e=0;e<Nt.length;e+=1){const o=M(t,Nt,e);Pt[e]?Pt[e].p(o,n):(Pt[e]=T(o),Pt[e].c(),Pt[e].m(x,null))}for(;e<Pt.length;e+=1)Pt[e].d(1);Pt.length=Nt.length}Ht===(Ht=Tt(t))&&zt?zt.p(t,n):(zt.d(1),zt=Ht(t),zt&&(zt.c(),zt.m(c,null)))},i:t,o:t,d(t){t&&a(e),i(Pt,t),zt.d(),jt=!1,o(Mt)}}}function B(t,n,e){let o,c=0,r=0,l=new Array(5),s=[];var a;!function(t){t[t.Ongoing=0]="Ongoing",t[t.Won=1]="Won",t[t.Lost=2]="Lost"}(a||(a={}));let i=a.Ongoing;var u;!function(t){t.CorrectPlace="correctplace",t.WrongPlace="wrongplace",t.NotFound="notused",t.Absent="absent"}(u||(u={}));class f{constructor(){this.character="",this.match=u.Absent}}function d(){for(var t=0;t<5;t++){e(0,l[t]=new Array(5),l);for(var n=0;n<5;n++)e(0,l[t][n]=new f,l)}}function h(t){r<5&&(e(0,l[c][r].character=t,l),r++)}function b(){return s[Math.floor(Math.random()*s.length)]}d(),m((async()=>{const t=await fetch("../words.txt");s=(await t.text()).split(/\r?\n/).map((t=>t.trim())),e(1,o=b())}));return[l,o,a,i,h,function(){r>0&&(r--,e(0,l[c][r].character="",l))},function(){if(i==a.Ongoing&&c<5&&5===r){let n=new Array,s=new Array;for(var t=0;t<5;t++)o.charAt(t)===l[c][t].character?e(0,l[c][t].match=u.CorrectPlace,l):(s.push(t),n.push(o.charAt(t)));s.forEach((function(t){var o=l[c][t].character;n.includes(o)?(e(0,l[c][t].match=u.WrongPlace,l),n.splice(n.indexOf(o),1)):e(0,l[c][t].match=u.NotFound,l)})),c++,r=0,0==s.length?e(3,i=a.Won):5==c&&e(3,i=a.Lost)}},function(){e(1,o=b()),e(3,i=a.Ongoing),c=0,r=0,d()},()=>h("a"),()=>h("z"),()=>h("e"),()=>h("r"),()=>h("t"),()=>h("y"),()=>h("u"),()=>h("i"),()=>h("o"),()=>h("p"),()=>h("q"),()=>h("s"),()=>h("d"),()=>h("f"),()=>h("g"),()=>h("h"),()=>h("j"),()=>h("k"),()=>h("l"),()=>h("m"),()=>h("w"),()=>h("x"),()=>h("c"),()=>h("v"),()=>h("b"),()=>h("n")]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,B,S,r,{},null,[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map