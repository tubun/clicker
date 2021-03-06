import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile.component";
import { SharedModule } from "../shared/shared.module";
import { ProfilePostComponent } from './profile-post/profile-post.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePostComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})

export class ProfileModule{}