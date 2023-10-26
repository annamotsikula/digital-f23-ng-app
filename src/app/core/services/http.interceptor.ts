import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { LocalStorageSevice } from "./storage.service";
import { authToken } from "../constants/constants";

export class ServerInterceptor extends LocalStorageSevice implements HttpInterceptor  {
    constructor() {
        super();
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Request In Interceptor',req)
        let token = (<string>this.getLocalItem(authToken))
        if(token) {
            token = token.slice(1,-1)
        }
            console.log('Token is stored in LocalStorage')
            const newReq = req.clone({
                setHeaders: { 'Authorization' : `Bearer ${token}`}
            })
            return next.handle(newReq).pipe(
                catchError((err: HttpErrorResponse) => throwError(() => new Error(err.message)) ),
                tap(console.log)
            )

        
    }
}