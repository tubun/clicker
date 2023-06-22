import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from "./wall.component";
import { PostComponent } from "./post/post.component";
import { InteractionsComponent } from './post/interactions/interactions.component';
import { SharedModule } from "../shared/shared.module";
import { SharedComponent } from './post/interactions/share/share.component';
import { CommentComponent } from './post/interactions/comment/comment.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
    SharedComponent,
    CommentComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    InfiniteScrollModule
  ],
  exports:[
    RouterModule
  ]

})

export class WallModule{}
