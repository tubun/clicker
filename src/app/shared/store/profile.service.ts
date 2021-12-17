import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable()

export class ProfileService{

    private $userProfile = new BehaviorSubject<any>({});
    userProfile = this.$userProfile.asObservable();

    constructor(){}

    // Set profile data
    setProfile(user:any){
        this.$userProfile.next(user)
    }

    getProfile():Observable<any>{
        return this.userProfile
    }

    resetProfile(){
        this.$userProfile.next({})
    }
}