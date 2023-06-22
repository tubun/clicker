import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentData } from '../../../../shared/interfaces/dialog-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class SharedComponent implements OnInit {

  platforms:any;
  userData:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public post: CommentData,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {

      this.platforms = [
        {
          icon: 'facebook',
          title: 'Facebook'
        },
        // {
        //   icon: 'whatsapp',
        //   title: 'Whatsapp'
        // },
        {
          icon: 'twitter',
          title: 'Twitter'
        },
        // {
        //   icon: 'tiktok',
        //   title: 'Tiktok'
        // },
      ]
  }


  openPlatform(index:number){
    if(index == 0){
      window.location.href = `https://www.facebook.com/sharer/sharer.php?u=${this.post.post}`
    }else if(index == 1){
      window.location.href = `http://twitter.com/share?text=I am sharing in twitter&url=${this.post.post}&hashtags=clicker,photosharing-app,angular-app`
    }
  }

  
  closePrompt(){
    this._dialog.closeAll();
  }
}
