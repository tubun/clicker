import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from "./wall.component";
import { PostComponent } from "./post/post.component";
import { InteractionsComponent } from './post/interactions/interactions.component';
import { SharedModule } from "../shared/shared.module";
import { ShareComponent } from './post/interactions/share/share.component';
import { CommentComponent } from './post/interactions/comment/comment.component';


const routes: Routes = [
  {
    path: '',
    component: WallComponent
  }
]

@NgModule({
  declarations: [
    WallComponent,
    PostComponent,
    InteractionsComponent,
    ShareComponent,
    CommentComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})

export class WallModule{}