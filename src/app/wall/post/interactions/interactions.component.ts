import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareComponent } from './share/share.component';
import { CommentComponent } from './comment/comment.component';


@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.scss']
})
export class InteractionsComponent implements OnInit {
  @Input() comments:any;
  like=false;

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  share(){
    const shareModal = this._dialog.open(ShareComponent,{
      height: '300px',
      width:'300px'
    })
  }

  openComment(){
    const shareModal = this._dialog.open(CommentComponent,{
      data:{
        post: this.comments.image,
      },
      height: '500px',
      width:'500px'
    })
  }

}
