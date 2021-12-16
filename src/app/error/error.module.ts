import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from "./error.component";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent
  }
]

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})

export class ErrorModule{}