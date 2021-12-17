import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/guards/authGuard.service';

const routes: Routes = [
  {path:'',pathMatch: 'full',redirectTo: 'login'},
  {path:'login',loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},
  {path:'profile',loadChildren:()=> import('./profile/profile.module').then(m=>m.ProfileModule),canActivate: [AuthGuardService]},
  {path:'wall',loadChildren:()=> import('./wall/wall.module').then(m=>m.WallModule),canActivate: [AuthGuardService]},
  {path:'**',loadChildren:()=>import('./error/error.module').then(m=>m.ErrorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
