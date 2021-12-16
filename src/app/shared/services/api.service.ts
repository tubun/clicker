import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError,timeout,map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable()

export class ApiService{

    timeCount = 30000;

    constructor(
        private http: HttpClient,
        private _router:Router,
    ){}

    get(...args:any[]):Observable<any>{

        const url = args[0]? `${args[0]}`: ''

        return this.http.get(url,{
            observe: 'body',
            responseType: 'text'
        }).pipe(
                map(res=>res),
                timeout(this.timeCount),
                catchError(err=>this.handleError(err))
                
    )}


    post(...args:any[]):Observable<any>{

        const url = args[0]? `${args[0]}`: '';
        const payload = args[1];
        return this.http.post(url,payload,{
            observe: 'body',
            responseType: 'text',
            reportProgress: true,
            headers: new HttpHeaders({
                'Content-Type': 'text/plain;charset=Utf-8',
                'Accept': 'text/plain;charset=Utf-8',
            })
        }).pipe(
                map(res=>res),
                timeout(this.timeCount),
                catchError(err=>this.handleError(err))        
        )}


    private handleError(error:HttpErrorResponse){
        if(error.status == 0){
            let errMsg = {
                data: '',
                code: 5,
                msg: 'Server connection error'
            }
            return throwError(errMsg)
        }else{
            if(error.error){
                let errMsg = error.error
                return throwError(errMsg) 
            }else if(error.message){
                let err ={
                    msg: error.message
                } 
                return throwError(err)
            }else{
                return throwError('Server error')
            }
        }
    }

}