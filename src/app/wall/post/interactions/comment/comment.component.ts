import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,Validators } from '@angular/forms';

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
    private _dialog: MatDialog,
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {

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

  addComment(){

    if(this.commentForm.status == 'VALID'){
      const commentDetails = {
        userName: 'random',
        desc: this.commentForm.value.comment
      }

      this.hasComment = true;

      this.userComments.push(commentDetails)
    }
  }

  closePrompt(){
    this._dialog.closeAll();
  }
}
