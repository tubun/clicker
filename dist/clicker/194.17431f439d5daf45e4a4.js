(self.webpackChunkclicker=self.webpackChunkclicker||[]).push([[194],{7194:(t,n,e)=>{"use strict";e.r(n),e.d(n,{WallModule:()=>rt});var o=e(4655),i=e(5758),s=e(7716),c=e(3390),r=e(1095),l=e(6627),a=e(5917),m=e(2759),g=e(9773),u=e(8002),d=e(3342),p=e(5435),h=e(7393),f=e(3637);class C{constructor(t,n){this.period=t,this.scheduler=n}call(t,n){return n.subscribe(new _(t,this.period,this.scheduler))}}class _ extends h.L{constructor(t,n,e){super(t),this.period=n,this.scheduler=e,this.hasValue=!1,this.add(e.schedule(O,n,{subscriber:this,period:n}))}_next(t){this.lastValue=t,this.hasValue=!0}notifyNext(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))}}function O(t){let{subscriber:n,period:e}=t;n.notifyNext(),this.schedule(t,e)}function P(t,n,e,o){const i=window&&!!window.document&&window.document.documentElement;let s=i&&n?window:e;if(t&&(s=t&&i&&"string"==typeof t?function(t,n,e){return(e?window.document:n).querySelector(t)}(t,e.nativeElement,o):t,!s))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return s}function w(t){return t&&!t.firstChange}const M={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},v={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class y{constructor(t=!0){this.vertical=t,this.propsMap=t?M:v}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function b(t){return["Window","global"].some(n=>Object.prototype.toString.call(t).includes(n))}function Z(t,n){return t?n.document.documentElement:null}function T(t,n){const e=function({container:t,isWindow:n,axis:e}){const{offsetHeightKey:o,clientHeightKey:i}=x(e);return S(t,n,o,i)}(n);return n.isWindow?function(t,n,e){const{axis:o,container:i,isWindow:s}=e,{offsetHeightKey:c,clientHeightKey:r}=x(o),l=t+k(Z(s,i),o,s),a=S(n.nativeElement,s,c,r);return{height:t,scrolled:l,totalToScroll:function(t,n,e){const o=n.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[o]+k(t,n,e)}(n.nativeElement,o,s)+a,isWindow:s}}(e,t,n):function(t,n,e){const{axis:o,container:i}=e;return{height:t,scrolled:i[o.scrollTopKey()],totalToScroll:i[o.scrollHeightKey()],isWindow:!1}}(e,0,n)}function x(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function S(t,n,e,o){if(isNaN(t[e])){const e=Z(n,t);return e?e[o]:0}return t[e]}function k(t,n,e){const o=n.pageYOffsetKey(),i=n.scrollTopKey(),s=n.offsetTopKey();return isNaN(window.pageYOffset)?Z(e,t)[i]:t.ownerDocument?t.ownerDocument.defaultView[o]:t[s]}function q(t,n,e){let o,i;if(t.totalToScroll<=0)return!1;const s=t.isWindow?t.scrolled:t.height+t.scrolled;return e?(o=(t.totalToScroll-s)/t.totalToScroll,i=n.down/10):(o=t.scrolled/(t.scrolled+(t.totalToScroll-s)),i=n.up/10),o<=i}class A{constructor({totalToScroll:t}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=t}updateScrollPosition(t){return this.lastScrollPosition=t}updateTotalToScroll(t){this.lastTotalToScroll!==t&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=t)}updateScroll(t,n){this.updateScrollPosition(t),this.updateTotalToScroll(n)}updateTriggeredFlag(t,n){n?this.triggered.down=t:this.triggered.up=t}isTriggeredScroll(t,n){return n?this.triggered.down===t:this.triggered.up===t}}const N="[NGX_ISE] DOWN",J="[NGX_ISE] UP";function D(t){const{scrollDown:n,stats:{scrolled:e}}=t;return{type:n?N:J,payload:{currentScrollPosition:e}}}let H=(()=>{class t{constructor(t,n){this.element=t,this.zone=n,this.scrolled=new s.vpe,this.scrolledUp=new s.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:t,infiniteScrollDisabled:n,infiniteScrollDistance:e}){const o=w(t),i=w(n),s=w(e),c=!i&&!this.infiniteScrollDisabled||i&&!n.currentValue||s;(o||i||s)&&(this.destroyScroller(),c&&this.setup())}setup(){"undefined"!=typeof window&&this.zone.runOutsideAngular(()=>{this.disposeScroller=function(t){const{scrollContainer:n,scrollWindow:e,element:o,fromRoot:i}=t,s=function({windowElement:t,axis:n}){return function(t,n){const e=t.isWindow||n&&!n.nativeElement?n:n.nativeElement;return Object.assign(Object.assign({},t),{container:e})}({axis:n,isWindow:b(t)},t)}({axis:new y(!t.horizontal),windowElement:P(n,e,o,i)}),c=new A({totalToScroll:T(o,s)}),r={up:t.upDistance,down:t.downDistance};return function(t){let n=(0,m.R)(t.container,"scroll");return t.throttle&&(n=n.pipe(function(t,n=f.P){return e=>e.lift(new C(t,n))}(t.throttle))),n}({container:s.container,throttle:t.throttle}).pipe((0,g.zg)(()=>(0,a.of)(T(o,s))),(0,u.U)(t=>function(t,n,e){const{scrollDown:o,fire:i}=function(t,n,e){const o=function(t,n){return t<n.scrolled}(t,n);return{fire:q(n,e,o),scrollDown:o}}(t,n,e);return{scrollDown:o,fire:i,stats:n}}(c.lastScrollPosition,t,r)),(0,d.b)(({stats:t})=>c.updateScroll(t.scrolled,t.totalToScroll)),(0,p.h)(({fire:n,scrollDown:e,stats:{totalToScroll:o}})=>function(t,n,e){return!(!t||!n)||!(e||!n)}(t.alwaysCallback,n,c.isTriggeredScroll(o,e))),(0,d.b)(({scrollDown:t,stats:{totalToScroll:n}})=>{c.updateTriggeredFlag(n,t)}),(0,u.U)(D))}({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(t=>this.zone.run(()=>this.handleOnScroll(t)))})}handleOnScroll({type:t,payload:n}){switch(t){case N:return this.scrolled.emit(n);case J:return this.scrolledUp.emit(n);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(s.SBq),s.Y36(s.R0b))},t.\u0275dir=s.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[s.TTD]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[],imports:[[]]}),t})();var F=e(8583),Y=e(2218),I=e(5396),W=e(3679),E=e(2238);function K(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"div",3),s.NdJ("click",function(){const n=s.CHM(t).index;return s.oxw().openPlatform(n)}),s.TgZ(1,"mat-icon"),s._uU(2),s.qZA(),s.TgZ(3,"span"),s._uU(4),s.qZA(),s.qZA()}if(2&t){const t=n.$implicit;s.xp6(2),s.Oqu(t.icon),s.xp6(2),s.Oqu(t.title)}}let z=(()=>{class t{constructor(t,n){this.post=t,this._dialog=n}ngOnInit(){this.platforms=[{icon:"facebook",title:"Facebook"},{icon:"twitter",title:"Twitter"}]}openPlatform(t){0==t?window.location.href=`https://www.facebook.com/sharer/sharer.php?u=${this.post.post}`:1==t&&(window.location.href=`http://twitter.com/share?text=I am sharing in twitter&url=${this.post.post}&hashtags=clicker,photosharing-app,angular-app`)}closePrompt(){this._dialog.closeAll()}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(E.WI),s.Y36(E.uw))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-share"]],decls:4,vars:1,consts:[[1,"social-media-platforms"],[1,"close",3,"click"],["class","social-media",3,"click",4,"ngFor","ngForOf"],[1,"social-media",3,"click"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"mat-icon",1),s.NdJ("click",function(){return n.closePrompt()}),s._uU(2,"highlight_off"),s.qZA(),s.YNc(3,K,5,2,"div",2),s.qZA()),2&t&&(s.xp6(3),s.Q6J("ngForOf",n.platforms))},directives:[l.Hw,F.sg],styles:[".social-media-platforms[_ngcontent-%COMP%]{height:100%;position:relative;padding:1rem;box-sizing:border-box}.social-media-platforms[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;left:95%;top:-3%;cursor:pointer;color:var(--color3)}.social-media-platforms[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin:1rem 0;align-items:center}.social-media-platforms[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .social-media-platforms[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 .2rem;font-size:20px;cursor:pointer;line-height:1.5rem}"]}),t})();function Q(t,n){if(1&t&&(s.TgZ(0,"div",13),s.TgZ(1,"span"),s._uU(2),s.qZA(),s.TgZ(3,"small"),s._uU(4),s.qZA(),s.qZA()),2&t){const t=n.$implicit;s.xp6(2),s.hij("",t.userName,": \xa0"),s.xp6(2),s.Oqu(t.desc)}}let j=(()=>{class t{constructor(t,n,e){this.post=t,this._dialog=n,this._fb=e,this.hasComment=!1}ngOnInit(){console.log(this.post),this.commentForm=this._fb.group({comment:[null,W.kI.required]}),this.userComments=[{userName:"random 1",desc:"Minima dicta ipsa minus"},{userName:"random 1",desc:"corrupti accusamus"},{userName:"random 1",desc:"ad at repellendus"},{userName:"random 1",desc:"ad at repellendus"},{userName:"random 1",desc:"corrupti accusamus"},{userName:"random 1",desc:"ad at repellendus"},{userName:"random 1",desc:"corrupti accusamus"},{userName:"random 1",desc:"ad at repellendus"},{userName:"random 1",desc:"corrupti accusamus"},{userName:"random 1",desc:"Minima dicta ipsa minus"},{userName:"random 1",desc:"amet consectetur adipisicing elit"},{userName:"random 1",desc:"Lorem ipsum dolor sit, vero dolores nisi earum ea quo molestias molestiae distinctio quos odit voluptate. Tenetur."}]}checkComment(){this.hasComment="VALID"==this.commentForm.status}addComment(){this.userComments.push({userName:"random",desc:this.commentForm.value.comment}),this.commentForm.reset()}closePrompt(){this._dialog.closeAll()}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(E.WI),s.Y36(E.uw),s.Y36(W.qu))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-comment"]],decls:18,vars:4,consts:[[1,"comments"],[1,"close",3,"click"],[1,"comment-view"],[1,"image"],["alt","",3,"src"],[1,"caption"],[1,"comment-area"],[1,"existing-comments"],["class","user-comment",4,"ngFor","ngForOf"],[1,"new-comment"],[3,"formGroup","ngSubmit"],["type","text","placeholder","Add a comment","formControlName","comment",3,"keyup"],["mat-icon-button","","type","submit",3,"disabled"],[1,"user-comment"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"mat-icon",1),s.NdJ("click",function(){return n.closePrompt()}),s._uU(2,"highlight_off"),s.qZA(),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s._UZ(5,"img",4),s.qZA(),s.TgZ(6,"div",5),s.TgZ(7,"small"),s._uU(8,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum suscipit debitis quia maxime assumenda doloribus nisi quis natus neque ab placeat, ea vero nulla veniam voluptates animi quaerat adipisci laboriosam?"),s.qZA(),s.qZA(),s.TgZ(9,"div",6),s.TgZ(10,"div",7),s.YNc(11,Q,5,2,"div",8),s.qZA(),s.TgZ(12,"div",9),s.TgZ(13,"form",10),s.NdJ("ngSubmit",function(){return n.addComment()}),s.TgZ(14,"input",11),s.NdJ("keyup",function(){return n.checkComment()}),s.qZA(),s.TgZ(15,"button",12),s.TgZ(16,"mat-icon"),s._uU(17,"send"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(5),s.Q6J("src",n.post.post,s.LSH),s.xp6(6),s.Q6J("ngForOf",n.userComments),s.xp6(2),s.Q6J("formGroup",n.commentForm),s.xp6(2),s.Q6J("disabled",!n.hasComment))},directives:[l.Hw,F.sg,W._Y,W.JL,W.sg,W.Fj,W.JJ,W.u,r.lW],styles:[".comments[_ngcontent-%COMP%]{height:100%;position:relative;padding:1rem 0;box-sizing:border-box}.comments[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;left:99%;top:-2%;cursor:pointer;color:var(--color3)}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-evenly}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;max-height:45%}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;margin:auto}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{height:10%;overflow:hidden}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]{height:30%;width:100%;display:flex;flex-direction:column;justify-content:space-between}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px var(--color4);border-radius:10px}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--color1);border-radius:10px}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--color2)}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .existing-comments[_ngcontent-%COMP%]{height:85%;overflow-y:auto}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .existing-comments[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]{display:flex;width:100%;margin:.5rem 0;height:-moz-fit-content;height:fit-content}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .existing-comments[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:20%;color:var(--color4)}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .existing-comments[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{width:70%}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .new-comment[_ngcontent-%COMP%]{height:10%;width:100%;display:flex}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .new-comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:baseline}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .new-comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:88%;outline:none;border:none}@media screen and (max-width: 768px){.existing-comments[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:30%!important}.new-comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:80%!important}}"]}),t})();function L(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"mat-icon",4),s.NdJ("click",function(){s.CHM(t);const n=s.oxw();return n.like=!n.like}),s._uU(1," favorite_border "),s.qZA()}}const V=function(){return{color:"red"}};function R(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"mat-icon",5),s.NdJ("click",function(){s.CHM(t);const n=s.oxw();return n.like=!n.like}),s._uU(1," favorite "),s.qZA()}2&t&&s.Q6J("ngStyle",s.DdM(1,V))}let X=(()=>{class t{constructor(t){this._dialog=t,this.like=!1}ngOnInit(){}share(){this._dialog.open(z,{data:{userName:this.comments.userName,post:this.comments.image},height:"200px",width:"200px"})}openComment(){this._dialog.open(j,{data:{userName:this.comments.userName,post:this.comments.image},panelClass:"dialog-style"})}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(E.uw))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-interactions"]],inputs:{comments:"comments"},decls:7,vars:2,consts:[[1,"interactions"],["class","like",3,"click",4,"ngIf"],["class","like",3,"ngStyle","click",4,"ngIf"],[3,"click"],[1,"like",3,"click"],[1,"like",3,"ngStyle","click"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.YNc(1,L,2,0,"mat-icon",1),s.YNc(2,R,2,2,"mat-icon",2),s.TgZ(3,"mat-icon",3),s.NdJ("click",function(){return n.openComment()}),s._uU(4," chat_bubble_outline "),s.qZA(),s.TgZ(5,"mat-icon",3),s.NdJ("click",function(){return n.share()}),s._uU(6," share "),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngIf",!n.like),s.xp6(1),s.Q6J("ngIf",n.like))},directives:[F.O5,l.Hw,F.PC],styles:[".interactions[_ngcontent-%COMP%]{margin:1rem 0;display:flex;width:20%;justify-content:flex-start}.interactions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:not(.like){cursor:pointer;margin:0 1rem}.interactions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#a9a9a9}.interactions[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]{cursor:pointer;margin-right:1rem}.interactions[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%]:active{transform:scale(1.3)}"]}),t})();function $(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"div",2),s.TgZ(1,"div",3),s.TgZ(2,"div",4),s.TgZ(3,"div",5),s.NdJ("click",function(){return s.CHM(t),s.oxw().openProfile()}),s._UZ(4,"img",6),s.qZA(),s.TgZ(5,"div",7),s.NdJ("click",function(){return s.CHM(t),s.oxw().openProfile()}),s.TgZ(6,"small",8),s._uU(7),s.qZA(),s.TgZ(8,"small"),s._uU(9),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"div",9),s.TgZ(11,"mat-slide-toggle",10),s.NdJ("ngModelChange",function(n){return s.CHM(t),s.oxw().isChecked=n})("change",function(){return s.CHM(t),s.oxw().togglePostVis()}),s.qZA(),s.TgZ(12,"mat-icon"),s._uU(13,"hide_img"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"div",11),s._UZ(15,"img",6),s.qZA(),s._UZ(16,"app-interactions",12),s.TgZ(17,"div",13),s.TgZ(18,"small",8),s._uU(19),s.qZA(),s.TgZ(20,"small"),s._uU(21,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum suscipit debitis quia maxime assumenda doloribus nisi quis natus neque ab placeat, ea vero nulla veniam voluptates animi quaerat adipisci laboriosam?"),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.xp6(4),s.Q6J("src",t.post.profile,s.LSH),s.xp6(3),s.Oqu(t.post.userName),s.xp6(2),s.AsE("",t.post.city,", ",t.post.country,""),s.xp6(2),s.Q6J("ngModel",t.isChecked),s.xp6(4),s.Q6J("src",t.post.image,s.LSH),s.xp6(1),s.Q6J("comments",t.post),s.xp6(3),s.hij("",t.post.userName,": \xa0 \xa0")}}function B(t,n){1&t&&(s.TgZ(0,"p",14),s._uU(1,"This post was hidden"),s.qZA())}let G=(()=>{class t{constructor(t,n){this._router=t,this._profile=n,this.hidePost=new s.vpe,this.isChecked=!1}ngOnInit(){console.log(this.post)}openProfile(){this._profile.setProfile(this.post),this._router.navigate(["/profile"])}togglePostVis(){1==this.isChecked&&this.hidePost.emit(this.post.id)}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(o.F0),s.Y36(Y.H))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-post"]],inputs:{post:"post"},outputs:{hidePost:"hidePost"},decls:2,vars:2,consts:[["class","post",4,"ngIf"],["class","hide-post",4,"ngIf"],[1,"post"],[1,"header"],[1,"user"],[1,"profile-img",3,"click"],["alt","",3,"src"],[1,"profile-details",3,"click"],[1,"user-name"],[1,"buttons"],["title","Hide post","color","primary",3,"ngModel","ngModelChange","change"],[1,"image"],[3,"comments"],[1,"caption"],[1,"hide-post"]],template:function(t,n){1&t&&(s.YNc(0,$,22,8,"div",0),s.YNc(1,B,2,0,"p",1)),2&t&&(s.Q6J("ngIf",!n.post.hidden),s.xp6(1),s.Q6J("ngIf",n.post.hidden))},directives:[F.O5,I.Rr,W.JJ,W.On,l.Hw,X],styles:[".post[_ngcontent-%COMP%]{height:100%}.post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:5%;display:flex;justify-content:space-between}.post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{width:70%;display:flex;justify-content:flex-start}.post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{margin:.5rem;cursor:pointer}.post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{width:10%}.post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:100%;border-radius:50%}.post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]{display:flex;flex-direction:column}.post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;font-size:14px}.post[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:50%}.post[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:100%}.post[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{display:flex}.post[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{color:#a9a9a9;margin-right:1rem}.hide-post[_ngcontent-%COMP%]{text-align:center;padding:20px}@media screen and (max-width: 768px){.post[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{width:20%}}"]}),t})();var tt=e(4885);function nt(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"div",8),s.TgZ(1,"app-post",9),s.NdJ("hidePost",function(n){return s.CHM(t),s.oxw().togglePost(n)}),s.qZA(),s.qZA()}if(2&t){const t=n.$implicit;s.xp6(1),s.Q6J("post",t)}}function et(t,n){1&t&&s._UZ(0,"mat-spinner")}function ot(t,n){1&t&&(s.TgZ(0,"p",10),s._uU(1,"Something went wrong, try again"),s.qZA())}let it=(()=>{class t{constructor(t,n){this._api=t,this._router=n,this.posts=[],this.loadData=!1,this.dataLoadFailed=!1,this.infiniteCounter=1}ngOnInit(){this.fetchPosts()}onScroll(){this.fetchPosts()}fetchPosts(){const t=[this._api.get(`https://randomuser.me/api/?page=${this.infiniteCounter}&results=2&seed=feed`),this._api.get(`https://picsum.photos/v2/list?page=${this.infiniteCounter}&limit=2`)];this.loadData=!0,this.fetchData=(0,i.D)(t).subscribe(t=>{var n=[];if(t&&Array.isArray(t)){const e=JSON.parse(t[0]);if(e&&"object"==typeof e&&e.hasOwnProperty("results")){const t=e.results;Array.isArray(t)&&t.forEach((t,e)=>{n.push({id:e,profile:t.picture.large,userName:t.name.first,lastName:t.name.last,city:t.location.city,country:t.location.country,phone:t.phone})})}const o=JSON.parse(t[1]);o&&Array.isArray(o)&&o.forEach((t,e)=>{n[e].image=t.download_url}),this.posts=[...this.posts,...n],this.posts.map((t,n)=>{t.id=n,t.hidden=!1}),this.infiniteCounter++,this.loadData=!1,this.dataLoadFailed=!1}},t=>{this.loadData=!1,this.dataLoadFailed=!0})}togglePost(t){setTimeout(()=>{this.posts.splice(t,1,{hidden:!0})},5e3),console.log(this.posts)}logOut(){sessionStorage.clear(),this._router.navigate(["/login"])}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(c.s),s.Y36(o.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-wall"]],decls:11,vars:5,consts:[[1,"wall-container"],[1,"navbar"],[1,"header"],["title","Logout","mat-icon-button","",3,"click"],["infiniteScroll","",1,"container",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["class","inner-wall",4,"ngFor","ngForOf"],[4,"ngIf"],["class","no-post",4,"ngIf"],[1,"inner-wall"],[3,"post","hidePost"],[1,"no-post"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s._uU(3,"Clicker"),s.qZA(),s.TgZ(4,"button",3),s.NdJ("click",function(){return n.logOut()}),s.TgZ(5,"mat-icon"),s._uU(6,"logout"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"div",4),s.NdJ("scrolled",function(){return n.onScroll()}),s.YNc(8,nt,2,1,"div",5),s.YNc(9,et,1,0,"mat-spinner",6),s.YNc(10,ot,2,0,"p",7),s.qZA(),s.qZA()),2&t&&(s.xp6(7),s.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",1e3),s.xp6(1),s.Q6J("ngForOf",n.posts),s.xp6(1),s.Q6J("ngIf",n.loadData),s.xp6(1),s.Q6J("ngIf",n.dataLoadFailed))},directives:[r.lW,l.Hw,H,F.sg,F.O5,G,tt.$g],styles:[".wall-container{height:auto;overflow-x:hidden}.wall-container .navbar{display:flex;box-sizing:border-box;padding:1rem;height:-moz-fit-content;height:fit-content;justify-content:space-between;align-items:baseline;background-color:var(--color1);background-image:linear-gradient(315deg,var(--color1) 0,var(--color2) 74%);color:var(--color0);position:sticky;top:0;z-index:999}.wall-container .inner-wall{height:90%;margin:1rem}.wall-container .no-post{position:relative;top:30vh;text-align:center}@media screen and (max-width: 768px){.navbar{padding:.5rem}}"],encapsulation:2}),t})();var st=e(7274);const ct=[{path:"",component:it}];let rt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[st.m,o.Bz.forChild(ct),U],o.Bz]}),t})()}}]);