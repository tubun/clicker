import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  api ="https://picsum.photos/images#3"
  
  constructor() { }

  ngOnInit(): void {
  }

}
