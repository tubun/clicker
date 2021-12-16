import { Component,OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'clicker';

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
  ){}

  ngOnInit(){
    this._matIconRegistry.addSvgIcon(
      'facebook',
      this._domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons8-facebook.svg')
    )

    this._matIconRegistry.addSvgIcon(
      'whatsapp',
      this._domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons8-whatsapp.svg')
    )

    this._matIconRegistry.addSvgIcon(
      'twitter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('./assets/twitter.svg')
    )

    this._matIconRegistry.addSvgIcon(
      'tiktok',
      this._domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons8-tiktok.svg')
    )
  }
}
