import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  openProfile(){
    this._router.navigate(['/profile'])
  }

}
