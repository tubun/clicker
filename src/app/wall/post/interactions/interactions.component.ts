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
      data:{
        userName: this.comments.userName,
        post: this.comments.image,
      },
      height: '300px',
      width:'300px'
    })
  }

  openComment(){
    const shareModal = this._dialog.open(CommentComponent,{
      data:{
        userName: this.comments.userName,
        post: this.comments.image,
      },
      panelClass: 'dialog-style'
    })
  }

}
