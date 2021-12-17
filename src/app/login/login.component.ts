import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin = true;
  signupForm:any;
  loginForm:any;

  constructor(
    private _fb:FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this._fb.group({
      name: [null,[Validators.required,Validators.minLength(3)]],
      email: [null,[Validators.required,Validators.pattern('([a-zA-Z0-9]+[!#$%&*+=_{|}.-]?[a-zA-Z0-9]+)@([a-zA-Z0-9]+[!#$%^&*_=.-]?)[.]+[a-zA-Z0-9]{2,3}')]],
      password: [null,[Validators.required,Validators.pattern('(?=.*[a-zA-Z])(?=.*[0-9]).{6,14}')]]
    })

    this.loginForm = this._fb.group({
      email: [null,[Validators.required,Validators.pattern('([a-zA-Z0-9]+[!#$%&*+=_{|}.-]?[a-zA-Z0-9]+)@([a-zA-Z0-9]+[!#$%^&*_=.-]?)[.]+[a-zA-Z0-9]{2,3}')]],
      password: [null,[Validators.required,Validators.pattern('(?=.*[a-zA-Z])(?=.*[0-9]).{6,14}')]]
    })
  }
  

  signUp(){
    if(this.signupForm.status == "VALID"){
      this.showLogin = true
    }else{
      this.showLogin = false;
    }
  }

  logIn(){
    if(this.loginForm.status == "VALID"){
      sessionStorage.setItem('loggedIn','true')
      this._router.navigate(['/wall'])
    }
  }

}
