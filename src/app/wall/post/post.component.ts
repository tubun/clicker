import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../shared/store/profile.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;

  constructor(
    private _router:Router,
    private _profile: ProfileService
  ) { }

  ngOnInit(): void {
  }

  openProfile(){

    this._profile.setProfile(this.post)
    this._router.navigate(['/profile'])
  }

}
