(self.webpackChunkclicker=self.webpackChunkclicker||[]).push([[895],{895:(n,t,e)=>{"use strict";e.r(t),e.d(t,{ProfileModule:()=>Z});var o=e(4655),i=e(3679),c=e(2238),r=e(7716),s=e(6627),a=e(8583),m=e(1095);function g(n,t){if(1&n&&(r.TgZ(0,"div",13),r.TgZ(1,"span"),r._uU(2),r.qZA(),r.TgZ(3,"small"),r._uU(4),r.qZA(),r.qZA()),2&n){const n=t.$implicit;r.xp6(2),r.hij("",n.userName,": \xa0"),r.xp6(2),r.Oqu(n.desc)}}let l=(()=>{class n{constructor(n,t,e){this.post=n,this._dialog=t,this._fb=e,this.hasComment=!1}ngOnInit(){console.log(this.post),this.commentForm=this._fb.group({comment:[null,i.kI.required]}),this.userComments=[{userName:"random 1",desc:"Minima dicta ipsa minus"},{userName:"random 1",desc:"corrupti accusamus"},{userName:"random 1",desc:"ad at repellendus"},{userName:"random 1",desc:"ad at repellendus"},{userName:"random 1",desc:"corrupti accusamus"},{userName:"random 1",desc:"ad at repellendus"},{userName:"random 1",desc:"corrupti accusamus"},{userName:"random 1",desc:"ad at repellendus"},{userName:"random 1",desc:"corrupti accusamus"},{userName:"random 1",desc:"Minima dicta ipsa minus"},{userName:"random 1",desc:"amet consectetur adipisicing elit"},{userName:"random 1",desc:"Lorem ipsum dolor sit, vero dolores nisi earum ea quo molestias molestiae distinctio quos odit voluptate. Tenetur."}]}checkComment(){this.hasComment="VALID"==this.commentForm.status}addComment(){this.userComments.push({userName:"random",desc:this.commentForm.value.comment}),this.commentForm.reset()}closePrompt(){this._dialog.closeAll()}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(c.WI),r.Y36(c.uw),r.Y36(i.qu))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-profile-post"]],decls:18,vars:4,consts:[[1,"comments"],[1,"close",3,"click"],[1,"comment-view"],[1,"image"],["alt","",3,"src"],[1,"caption"],[1,"comment-area"],[1,"existing-comments"],["class","user-comment",4,"ngFor","ngForOf"],[1,"new-comment"],[3,"formGroup","ngSubmit"],["type","text","placeholder","Add a comment","formControlName","comment",3,"keyup"],["mat-icon-button","","type","submit",3,"disabled"],[1,"user-comment"]],template:function(n,t){1&n&&(r.TgZ(0,"div",0),r.TgZ(1,"mat-icon",1),r.NdJ("click",function(){return t.closePrompt()}),r._uU(2,"highlight_off"),r.qZA(),r.TgZ(3,"div",2),r.TgZ(4,"div",3),r._UZ(5,"img",4),r.qZA(),r.TgZ(6,"div",5),r.TgZ(7,"small"),r._uU(8,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum suscipit debitis quia maxime assumenda doloribus nisi quis natus neque ab placeat, ea vero nulla veniam voluptates animi quaerat adipisci laboriosam?"),r.qZA(),r.qZA(),r.TgZ(9,"div",6),r.TgZ(10,"div",7),r.YNc(11,g,5,2,"div",8),r.qZA(),r.TgZ(12,"div",9),r.TgZ(13,"form",10),r.NdJ("ngSubmit",function(){return t.addComment()}),r.TgZ(14,"input",11),r.NdJ("keyup",function(){return t.checkComment()}),r.qZA(),r.TgZ(15,"button",12),r.TgZ(16,"mat-icon"),r._uU(17,"send"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&n&&(r.xp6(5),r.Q6J("src",t.post.post,r.LSH),r.xp6(6),r.Q6J("ngForOf",t.userComments),r.xp6(2),r.Q6J("formGroup",t.commentForm),r.xp6(2),r.Q6J("disabled",!t.hasComment))},directives:[s.Hw,a.sg,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,m.lW],styles:[".comments[_ngcontent-%COMP%]{height:100%;position:relative;padding:1rem 0;box-sizing:border-box}.comments[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;left:99%;top:-2%;cursor:pointer;color:var(--color3)}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-evenly}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;max-height:45%}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;margin:auto}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;overflow:hidden}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]{height:30%;width:100%;display:flex;flex-direction:column;justify-content:space-between}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px var(--color4);border-radius:10px}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--color1);border-radius:10px}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--color2)}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .existing-comments[_ngcontent-%COMP%]{height:85%;overflow-y:auto}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .existing-comments[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]{display:flex;width:100%;margin:.5rem 0;height:-moz-fit-content;height:fit-content}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .existing-comments[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:20%;color:var(--color4)}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .existing-comments[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{width:70%}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .new-comment[_ngcontent-%COMP%]{height:10%;width:100%;display:flex}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .new-comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:baseline}.comments[_ngcontent-%COMP%]   .comment-view[_ngcontent-%COMP%]   .comment-area[_ngcontent-%COMP%]   .new-comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:88%;outline:none;border:none}@media screen and (max-width: 768px){.existing-comments[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:30%!important}.new-comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:80%!important}}"]}),n})();var p=e(3390),d=e(2218),u=e(4885);function _(n,t){if(1&n){const n=r.EpF();r.TgZ(0,"div",16),r.NdJ("click",function(){const t=r.CHM(n).index;return r.oxw(2).openPost(t)}),r._UZ(1,"img",12),r.qZA()}if(2&n){const n=t.$implicit;r.xp6(1),r.Q6J("src",n,r.LSH)}}function f(n,t){if(1&n&&(r.TgZ(0,"div",9),r.TgZ(1,"div",10),r.TgZ(2,"div",11),r._UZ(3,"img",12),r.qZA(),r.TgZ(4,"div",13),r.TgZ(5,"span"),r.TgZ(6,"mat-icon"),r._uU(7,"person"),r.qZA(),r.TgZ(8,"small"),r._uU(9),r.qZA(),r.qZA(),r.TgZ(10,"span"),r.TgZ(11,"mat-icon"),r._uU(12,"place"),r.qZA(),r.TgZ(13,"small"),r._uU(14),r.qZA(),r.qZA(),r.TgZ(15,"span"),r.TgZ(16,"mat-icon"),r._uU(17,"call"),r.qZA(),r.TgZ(18,"small"),r._uU(19),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(20,"div",14),r.YNc(21,_,2,1,"div",15),r.qZA(),r.qZA()),2&n){const n=r.oxw();r.xp6(3),r.Q6J("src",n.userData.profile,r.LSH),r.xp6(6),r.AsE("",n.userData.userName," ",n.userData.lastName,""),r.xp6(5),r.AsE("",n.userData.city,",\xa0",n.userData.country,""),r.xp6(5),r.Oqu(n.userData.phone),r.xp6(2),r.Q6J("ngForOf",n.postImages)}}function C(n,t){1&n&&r._UZ(0,"mat-spinner")}function P(n,t){1&n&&(r.TgZ(0,"p"),r._uU(1,"Something went wrong, try again"),r.qZA())}let O=(()=>{class n{constructor(n,t,e,o){this._api=n,this._profile=t,this._dialog=e,this._router=o,this.showProfile=!1,this.profileLoadError=!1,this.postPage=0,this.postLimit=0,this.postImages=[]}ngOnInit(){this.postPage=Math.floor(10*Math.random()+1),this.postLimit=Math.floor(34*Math.random()+15),this.getUserData(),this.getPosts(this.postPage,this.postLimit)}getUserData(){this._profile.getProfile().subscribe(n=>{this.userData=n,this.postImages[0]=n.image}),console.log(this.userData)}getPosts(n,t){this._api.get(`https://picsum.photos/v2/list?page=${n}&limit=${t}`).subscribe(n=>{const t=JSON.parse(n);t&&Array.isArray(t)&&t.forEach(n=>{this.postImages.push(n.download_url)}),this.showProfile=!0,this.profileLoadError=!1},n=>{this.showProfile=!1,this.profileLoadError=!0})}openPost(n){this._dialog.open(l,{data:{post:this.postImages[n]},panelClass:"dialog-style"})}goBackToWall(){this._router.navigate(["/wall"])}logOut(){sessionStorage.clear(),this._router.navigate(["/login"])}ngOnDestroy(){this._profile.resetProfile()}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(p.s),r.Y36(d.H),r.Y36(c.uw),r.Y36(o.F0))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-profile"]],decls:14,vars:3,consts:[[1,"profile-container"],[1,"navbar"],[1,"header"],["title","Go Back","mat-icon-button","",3,"click"],[1,"mat-icon"],["title","Logout","mat-icon-button","",3,"click"],[1,"container"],["class","inner-profile",4,"ngIf"],[4,"ngIf"],[1,"inner-profile"],[1,"profile"],[1,"profile-pic"],["alt","",3,"src"],[1,"profile-info"],[1,"post-grid"],["class","image",3,"click",4,"ngFor","ngForOf"],[1,"image",3,"click"]],template:function(n,t){1&n&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r._uU(3," Clicker "),r.TgZ(4,"button",3),r.NdJ("click",function(){return t.goBackToWall()}),r.TgZ(5,"mat-icon",4),r._uU(6,"arrow_back"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(7,"button",5),r.NdJ("click",function(){return t.logOut()}),r.TgZ(8,"mat-icon",4),r._uU(9,"logout"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(10,"div",6),r.YNc(11,f,22,7,"div",7),r.YNc(12,C,1,0,"mat-spinner",8),r.YNc(13,P,2,0,"p",8),r.qZA(),r.qZA()),2&n&&(r.xp6(11),r.Q6J("ngIf",t.showProfile),r.xp6(1),r.Q6J("ngIf",!t.showProfile),r.xp6(1),r.Q6J("ngIf",t.profileLoadError))},directives:[m.lW,s.Hw,a.O5,a.sg,u.$g],styles:[".profile-container[_ngcontent-%COMP%]{height:auto}.profile-container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{display:flex;box-sizing:border-box;padding:1rem;height:-moz-fit-content;height:fit-content;justify-content:space-between;align-items:baseline;background-color:var(--color1);background-image:linear-gradient(315deg,var(--color1) 0,var(--color2) 74%);color:var(--color0);position:sticky;top:0;z-index:999}.profile-container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]{width:20%;display:flex;justify-content:space-evenly}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{width:40%;height:20%;display:flex;justify-content:space-between;margin-bottom:1rem}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{width:50%}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:75%;border:1px solid var(--color2);border-radius:50%;margin:0 auto}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:flex-start;width:100%;margin:.5rem 0;height:auto}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--color4);margin-right:.5rem}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{position:relative;bottom:4px}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .post-grid[_ngcontent-%COMP%]{display:grid;margin-bottom:1rem;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-auto-rows:300px;grid-column-gap:.4rem;grid-row-gap:.4rem}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .post-grid[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%}.profile-container[_ngcontent-%COMP%]   .inner-profile[_ngcontent-%COMP%]   .post-grid[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;cursor:pointer}@media screen and (max-width: 768px){.navbar[_ngcontent-%COMP%]{padding:.5rem}.inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{width:100%;flex-direction:column;align-content:center;justify-content:center}.inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{width:100%}.inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{margin:0 auto}.inner-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{justify-content:center}.inner-profile[_ngcontent-%COMP%]   .post-grid[_ngcontent-%COMP%]{grid-row-gap:1rem}}"]}),n})();var M=e(7274);const h=[{path:"",component:O}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[M.m,o.Bz.forChild(h)],o.Bz]}),n})()}}]);