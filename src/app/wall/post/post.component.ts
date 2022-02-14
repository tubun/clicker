import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../shared/store/profile.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  @Output() hidePost = new EventEmitter<string>();
  isChecked:boolean = false;

  constructor(
    private _router:Router,
    private _profile: ProfileService
  ) { }

  ngOnInit(): void {
    console.log(this.post)
  }
  

  openProfile(){

    this._profile.setProfile(this.post)
    this._router.navigate(['/profile'])
  }

  togglePostVis(){
    if(this.isChecked == true)
    this.hidePost.emit(this.post.id)
  }

}
