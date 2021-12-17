import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentData } from '../../shared/interfaces/dialog-data';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-post',
  templateUrl: './profile-post.component.html',
  styleUrls: ['./profile-post.component.scss']
})
export class ProfilePostComponent implements OnInit {

  userComments:any;
  commentForm:any;
  hasComment:boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public post: CommentData,
    private _dialog: MatDialog,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {

    console.log(this.post)

    this.commentForm = this._fb.group({
      comment: [null,Validators.required]
    })

    this.userComments = [
      {
        userName: 'random 1',
        desc: 'Minima dicta ipsa minus'
      },
      {
        userName: 'random 1',
        desc: 'corrupti accusamus'
      },
      {
        userName: 'random 1',
        desc: 'ad at repellendus'
      },
      {
        userName: 'random 1',
        desc: 'ad at repellendus'
      },
      {
        userName: 'random 1',
        desc: 'corrupti accusamus'
      },
      {
        userName: 'random 1',
        desc: 'ad at repellendus'
      },
      {
        userName: 'random 1',
        desc: 'corrupti accusamus'
      },
      {
        userName: 'random 1',
        desc: 'ad at repellendus'
      },
      {
        userName: 'random 1',
        desc: 'corrupti accusamus'
      },
      {
        userName: 'random 1',
        desc: 'Minima dicta ipsa minus'
      },
      {
        userName: 'random 1',
        desc: 'amet consectetur adipisicing elit'
      },
      {
        userName: 'random 1',
        desc: 'Lorem ipsum dolor sit, vero dolores nisi earum ea quo molestias molestiae distinctio quos odit voluptate. Tenetur.'
      },
    ]
  }

  checkComment(){

    if(this.commentForm.status == 'VALID'){
      this.hasComment = true;
    }else{
      this.hasComment = false;
    }
  }

  addComment(){

    const commentDetails = {
      userName: 'random',
      desc: this.commentForm.value.comment
    }

    this.userComments.push(commentDetails)
    
  }

  closePrompt(){
    this._dialog.closeAll();
  }
}
