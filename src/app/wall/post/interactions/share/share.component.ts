import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  platforms:any;
  constructor(
    private _dialog: MatDialog,
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {

      this.platforms = [
        {
          icon: 'facebook',
          title: 'Facebook'
        },
        {
          icon: 'whatsapp',
          title: 'Whatsapp'
        },
        {
          icon: 'twitter',
          title: 'Twitter'
        },
        {
          icon: 'tiktok',
          title: 'Tiktok'
        },
      ]
  }


  openPlatform(index:number){
    if(index == 0){
      window.location.href = "https://www.facebook.com/sharer/sharer.php?u="
    }else if(index == 1){
      window.location.href = "https://www.whatsapp.com"
    }
    else if(index == 2){
      window.location.href = "https://www.twitter.com"
    }
    else if(index == 3){
      window.location.href = "https://www.tiktok.com"
    }
  }

  
  closePrompt(){
    this._dialog.closeAll();
  }
}
