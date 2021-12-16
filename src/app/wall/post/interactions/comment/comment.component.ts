import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentData } from '../../../../shared/interfaces/dialog-data';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

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
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Fantastic'
      },
      {
        userName: 'random 1',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dicta ipsa minus corrupti accusamus, ad at repellendus vero dolores nisi earum ea quo molestias molestiae distinctio quos odit voluptate. Tenetur.'
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
