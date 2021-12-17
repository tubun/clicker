import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate{

        studentId:any;
        constructor(
            private _router:Router,
        ){}

        canActivate():Observable<boolean> | Promise<boolean> | boolean{
            
            let validate = sessionStorage.getItem('loggedIn')

            if(validate){
                return true;
            }else{
                this._router.navigate(['/login'])
                return false
            }
        }
}

