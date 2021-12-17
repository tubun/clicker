import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { ProfileService } from '../shared/store/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePostComponent } from './profile-post/profile-post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  showProfile:boolean =false;
  profileLoadError:boolean = false;
  userData:any;
  postPage=0;
  postLimit = 0
  postImages:any[]=[];
  
  constructor(
    private _api:ApiService,
    private _profile: ProfileService,
    private _dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.postPage = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    this.postLimit = Math.floor(Math.random() * (20 - 1 + 15) + 15);

    this.getUserData()
    this.getPosts(this.postPage,this.postLimit)
  }

  getUserData(){
    this._profile.getProfile().subscribe(profile=>{
      this.userData = profile
      this.postImages[0] = profile.image
    })

    console.log(this.userData)
  }

  getPosts(page:number,limit:number){

    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`

    this._api.get(url).subscribe(res=>{

      const parsedPost = JSON.parse(res)

      if(parsedPost && Array.isArray(parsedPost)){

        parsedPost.forEach(post=>{
          this.postImages.push(post.download_url)
        })

      }

      this.showProfile = true;
      this.profileLoadError = false;

    },error=>{
      this.showProfile = false;
      this.profileLoadError = true;
    })
  }

  openPost(index:number){
    const shareModal = this._dialog.open(ProfilePostComponent,{
      data:{
        post: this.postImages[index],
      },
      panelClass: 'dialog-style'
    })
  }

  logOut(){
    sessionStorage.clear();
    this._router.navigate(['/login'])
  }

  ngOnDestroy(){
    this._profile.resetProfile();
  }

}
