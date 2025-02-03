import{E as de,j as U,D as x,p as ue,e as me,k as j,f as he,n as F,o as ve,I as ge,M as Ee}from"./index-BWSv4yyN.js";const p=new de,z="start",K="end";let W=!1,b=U(),N=0;b.resolve();const C=console.log.bind(console.log,"[HEAVY-ANIMATION]:");function G(e,t){W||(b=U(),p.dispatchEvent(z),W=!0,x&&C("start")),++N,x&&C("attach promise, length:",N,t);const s=[t!==void 0?ue(t):void 0,e.finally(()=>{})].filter(Boolean),o=performance.now(),i=b;return Promise.race(s).then(()=>{b!==i||b.isFulfilled||(--N,x&&C("promise end, length:",N,performance.now()-o),N<=0&&ee())}),b}window.dispatchHeavyAnimationEvent=G;function ee(){b.isFulfilled||(W=!1,N=0,p.dispatchEvent(K),b.resolve(),x&&C("end"))}function He(){ee()}function Be(){return b}function Fe(e,t,s){W&&e();const o=s?s.add(p):p.addEventListener.bind(p),i=s?s.removeManual.bind(s,p):p.removeEventListener.bind(p);return o(z,e),o(K,t),()=>{i(K,t),i(z,e)}}function _(e,t){if(!e?.parentNode)return-1;if(t)return Array.from(e.parentNode.childNodes).indexOf(e);let s=0;for(;(e=e.previousElementSibling)!==null;)++s;return s}function k(e,t){return he.isRTL&&(e=-e),`translate3d(${e}px, ${t}px, 0)`}const ye={callback:(e,t,s)=>{const o=t.getBoundingClientRect().width,i=[e,t];return s&&i.reverse(),i[0].style.filter="brightness(80%)",i[0].style.transform=k(-o*.25,0),i[1].style.transform=k(o,0),e.classList.add("active"),e.offsetWidth,e.style.transform="",e.style.filter="",()=>{t.style.transform=t.style.filter=""}},animateFirst:!1},we={callback:(e,t,s)=>{const o=t.getBoundingClientRect().width,i=[e,t];return s&&i.reverse(),i[0].style.transform=k(-o,0),i[1].style.transform=k(o,0),e.classList.add("active"),e.offsetWidth,e.style.transform="",()=>{t.style.transform=""}},animateFirst:!1},Le={callback:(e,t,s)=>{const o=t.getBoundingClientRect().width,i=[e,t],h=["slide-right","slide-left"];return s&&(i.reverse(),h.reverse()),i[0].style.transform=k(-o,0),i[1].style.transform=k(o,0),e.classList.add("active",h[0]),t.classList.add(h[1]),e.offsetWidth,e.style.transform="",e.classList.remove(h[0]),()=>{t.style.transform="",t.classList.remove(h[1])}},animateFirst:!1},Te={navigation:ye,premiumTabs:Le,tabs:we},Se=e=>{let{content:t,type:s,transitionTime:o,onTransitionEnd:i,onTransitionStart:h,onTransitionStartAfter:v,isHeavy:L=!0,once:R=!1,withAnimationListener:A=!0,listenerSetter:w,animateFirst:I=!1}=e;const{callback:E,animateFirst:d}=Te[s]||{};t.dataset.animation=s,d!==void 0&&(I=d);const a=new Map;let y,n=null;if(A){const c=E?"transitionend":"animationend",l=m=>{me(m),!(m.target.parentElement!==t||(a.get(m.target)?.(),m.target!==n))&&(!y&&L||(y&&(y.resolve(),y=void 0),i?.(u.prevId()),t.classList.remove("animating","backwards","disable-hover"),R&&(w?w.removeManual(t,c,l):t.removeEventListener(c,l),n=y=void 0,a.clear())))};w?w.add(t)(c,l):t.addEventListener(c,l)}function u(c,l=!0,m){m&&(n=m),c instanceof HTMLElement&&(c=_(c));const T=u.prevId();if(c===T)return!1;h?.(c);const f=t.children[c];if((!j.isAvailable("animations")||T===-1&&!I)&&(l=!1),!A){const g=t.dataset.timeout;g!==void 0&&clearTimeout(+g),delete t.dataset.timeout}if(!l){n?n.classList.remove("active","to","from"):f&&a.get(f)?.(),f&&(f.classList.remove("to","from"),f.classList.add("active")),t.classList.remove("animating","backwards","disable-hover"),n=f,i?.(c);return}A||(t.dataset.timeout=""+window.setTimeout(()=>{f.classList.remove("to"),n&&n.classList.remove("from"),t.classList.remove("animating","backwards","disable-hover"),delete t.dataset.timeout},o)),n&&(n.classList.remove("to"),n.classList.add("from")),t.classList.add("animating");const D=T<c;t.classList.toggle("backwards",!D);let S;if(f&&(E?S=E(f,n,D):f.classList.add("active"),v?.(c),f.classList.remove("from"),f.classList.add("to")),f){const g=f.dataset.transitionTimeout;g&&clearTimeout(+g),a.set(f,()=>{f.classList.remove("to"),a.delete(f)})}if(n){let g;const r=n,M=()=>{clearTimeout(g),r.classList.remove("active","from"),S?.(),a.delete(r)};f?(g=window.setTimeout(M,o+100),a.set(r,M)):(g=window.setTimeout(M,o+100),a.set(r,()=>{clearTimeout(g),a.delete(r)})),r.dataset.transitionTimeout=""+g,L&&(y||(y=U()),G(y,o*2))}n=f}return u.prevId=()=>n?_(n):-1,u.getFrom=()=>n,u.setFrom=c=>n=c,u},q=new Map;function Me(e){H(e);const t={isCancelled:!1,deferred:U()};return q.set(e,t),t.deferred.then(()=>{te(e)===t&&q.delete(e)}),t}function te(e){return q.get(e)}function H(e){const t=te(e);t&&(t.isCancelled=!0,t.deferred.resolve())}function se(e,t,s){return s||(s=Me(t)),F(()=>{s.isCancelled||(e()?se(e,t,s):s.deferred.resolve())}),s.deferred}function be(e){F(()=>{e()&&be(e)})}function Ae(e){return!!e?.isConnected}const Z=250,Pe=600,ne=1500,pe=500;var ie=(e=>(e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Static=2]="Static",e))(ie||{});function We(e,t){return ae({container:e,element:e,getElementPosition:()=>-e.scrollLeft,position:"start",axis:"x"})}function ae(e){if(e.margin??(e.margin=0),e.maxDistance??(e.maxDistance=ne),e.axis??(e.axis="y"),(!j.isAvailable("animations")||e.forceDuration===0)&&(e.forceDirection=2),e.forceDirection===2)return e.forceDuration=0,V(e);const t=ve().then(()=>V(e));return e.axis==="y"?G(t):t}function V(e){const{element:t,container:s,getNormalSize:o,getElementPosition:i,transitionFunction:h,axis:v,margin:L,position:R,forceDirection:A,maxDistance:w,forceDuration:I}=e;if(!Ae(t))return H(s),Promise.resolve();const E=v==="y"?"top":"left",d=v==="y"?"bottom":"right",a=v==="y"?"height":"width",y=v==="y"?"scrollHeight":"scrollWidth",n=v==="y"?"scrollHeight":"offsetWidth",u=v==="y"?"scrollTop":"scrollLeft",c=t.getBoundingClientRect(),l=s.getBoundingClientRect?s.getBoundingClientRect():document.body.getBoundingClientRect(),m=c[E]-l[E],T=i?i({elementRect:c,containerRect:l,elementPosition:m}):m,f=t[n],D=o?o({rect:l}):l[a];let S=s[u];const g=s[y];let r;switch(R){case"start":r=T-L;break;case"end":r=c[d]-l[d]+L;break;case"nearest":case"center":if(f<D)r=T+f/2-D/2;else{if(e.fallbackToElementStartWhenCentering&&e.fallbackToElementStartWhenCentering!==t)return e.element=e.fallbackToElementStartWhenCentering,e.position="start",V(e);r=T-L}break}if(Math.abs(r-(L||0))<1)return H(s),Promise.resolve();let M;if(v==="y"&&A===void 0&&(r>w?(M=S+=r-w,r=w):r<-w&&(M=S+=r+w,r=-w)),r<0){const P=-S;r=Math.max(r,P)}else if(r>0){const P=g-(S+D);r=Math.min(r,P)}const J=S+r,X=Math.abs(r),O=I??Z+X/ne*(Pe-Z),oe=Date.now(),le=h??(X<pe?De:Ie),Q=()=>O?Math.min((Date.now()-oe)/O,1):1,Y=()=>{M!==void 0&&(s[u]=M,M=void 0);const P=Q(),ce=le(P),fe=r*(1-ce);return s[u]=Math.round(J-fe),P<1};if(!O||!r)return H(s),Y(),Promise.resolve();if(e.startCallback){const P=g-Math.round(J+s[v==="y"?"offsetHeight":"offsetWidth"]);e.startCallback({scrollSize:g,scrollPosition:S,distanceToEnd:P,path:r,duration:O,containerRect:l,elementRect:c,getProgress:Q})}return se(Y,s)}function Ie(e){return 1-(1-e)**5}function De(e){return 1-(1-e)**3.5}function Ne(e,t){if(!e)return null;if(e.parentElement===t)return e;for(;e.parentElement;)if(e=e.parentElement,e.parentElement===t)return e;return null}function ke(e,t){const s=new Event(t,{bubbles:!0,cancelable:!0});e.dispatchEvent(s)}let $;document.addEventListener("mousedown",e=>{$=e.target,$?.closest("[cancel-mouse-down]")&&e.preventDefault()});function Re(e){if(e.isTrusted&&e.type==="click"&&e.target!==$)return!0}const B=ge?"mousedown":"click";function _e(e,t,s={}){const o=s.listenerSetter?s.listenerSetter.add(e):e.addEventListener.bind(e),i=s.listenerSetter?s.listenerSetter.removeManual.bind(s.listenerSetter,e):e.removeEventListener.bind(e);if(s.touchMouseDown=!0,s.cancelMouseDown&&e.setAttribute("cancel-mouse-down",""),B==="click"&&!s.ignoreMove){const h=t;t=v=>{Re(v)||h(v)}}return o(B,t,s),()=>i(B,t,s)}function Ue(e){ke(e,B)}function Oe(e,t,s,o,i=200,h,v){const L=Se({content:t,type:e||t.dataset.animation==="tabs"?"tabs":"navigation",transitionTime:i,onTransitionEnd:o,listenerSetter:v});if(!e)return L;const R=new Proxy(L,{apply:(E,d,a)=>{const y=a[1]!==void 0?a[1]:!0;let n,u;a[0]instanceof HTMLElement?(n=_(a[0]),u=a[0]):(n=+a[0],u=e.querySelector(`[data-tab="${n}"]`)||e.children[n]),A(u,n,y)}}),A=async(E,d,a=!0)=>{const y=t.children[d];if(s){const l=s(d,y,a),m=l instanceof Promise?await l:l;if(m!==void 0&&!m)return}h&&h.scrollIntoViewNew({element:E.parentElement.children[d],position:"center",forceDirection:a?void 0:ie.Static,forceDuration:i,axis:"x"}),j.isAvailable("animations")||(a=!1);const n=L.prevId();if(E.classList.contains("active")||d===n)return!1;const u=a?F:l=>l(),c=e.querySelector(I.toLowerCase()+".active");c&&u(()=>{c.classList.remove("active")}),w&&n!==-1&&a&&u(()=>{const l=E.querySelector("i"),m=E.parentElement.children[n].querySelector("i");m.classList.remove("animate"),l.classList.remove("animate");const T=m.parentElement.parentElement.offsetLeft-l.parentElement.parentElement.offsetLeft,f=m.clientWidth/l.clientWidth;l.style.transform=`translate3d(${T}px, 0, 0) scale3d(${f}, 1, 1)`,F(()=>{l.classList.add("animate"),l.style.transform="none"})}),u(()=>{E.classList.add("active")}),L(d,a)},w=!e.classList.contains("no-stripe"),I=e.firstElementChild.tagName;return _e(e,E=>{let d=E.target;if(d=Ne(d,e),!d)return!1;let a;if(d.dataset.tab){if(a=+d.dataset.tab,a===-1)return!1}else a=_(d);A(d,a)},{listenerSetter:v}),R}class xe{constructor(){this.pageId=-1,this.pagesDiv=document.getElementById("auth-pages"),this.scrollableDiv=this.pagesDiv.querySelector(".scrollable"),this.selectTab=Oe(null,this.scrollableDiv.querySelector(".tabs-container"),null,()=>{this.page?.onShown&&this.page.onShown()})}setPage(t){if(t.isAuthPage){this.pagesDiv.style.display="";const s=_(t.pageEl);if(this.pageId===s)return;this.selectTab(s),this.pageId=s,this.scrollableDiv&&ae({container:this.scrollableDiv,element:this.scrollableDiv.firstElementChild,position:"start"})}else this.pagesDiv.style.display="none",t.pageEl.style.display="",this.pageId=-1;this.page=t}}const re=new xe;Ee.pagesManager=re;class ze{constructor(t,s,o,i,h){this.isAuthPage=s,this.onFirstMount=o,this.onMount=i,this.onShown=h,this.installed=!1,this.pageEl=document.body.querySelector("."+t)}async mount(...t){if(this.onMount){const s=this.onMount(...t);s instanceof Promise&&await s}if(!this.installed){if(this.onFirstMount)try{const s=this.onFirstMount(...t);s instanceof Promise&&await s}catch(s){console.error("PAGE MOUNT ERROR:",s)}this.installed=!0}re.setPage(this)}}export{B as C,ie as F,ze as P,Se as T,_e as a,se as b,be as c,Ue as d,We as e,Ne as f,Be as g,Re as h,Ae as i,ae as j,Oe as k,G as l,H as m,He as n,ke as s,Fe as u,_ as w};
//# sourceMappingURL=page-uJBByU88.js.map
