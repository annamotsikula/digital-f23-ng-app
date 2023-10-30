import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, catchError, of, switchMap, tap, throwError } from "rxjs";
import { LocalStorageSevice } from "./storage.service";
import { BASE_URL, authToken } from "../constants/constants";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
@Injectable({
    providedIn: 'root'
})
export class ServerInterceptor extends LocalStorageSevice implements HttpInterceptor  {
    constructor(private _authService: AuthService, private _router: Router ) {
        super();
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newRequest = req
        console.log('Request incoming', req.url)
        if(this.itemExist(authToken)) {
            const token = this.getLocalItem(authToken).slice(1,-1)
            newRequest = req.clone({
                setHeaders: { 'Authorization' : `Bearer ${token}`}
            })
        } 
        return next.handle(newRequest).pipe(
            switchMap(req => {
                const currentTime = Date.now();
                const expirationTime = Number(this.getLocalItem('exp'))
                const outDate = expirationTime - currentTime;
                if(outDate < 0) {
                    console.log('Out dated timestamp')
                    return this._authService.request401()
                } else {
                    return of(req)
                }
            }),
            catchError((err) => {
                const unAuthError = new Error('Unathorized')
                if(err instanceof HttpErrorResponse) {
                    if(err.status === 401) {
                        this.removeItem('exp');
                        this.removeItem(authToken)
                        this._router.navigate(['/'])
                        return throwError(() => unAuthError)
                    }
                }
                return throwError(() => new Error(err.error.message)) 
            
            }),
        )
        
        
    }
}