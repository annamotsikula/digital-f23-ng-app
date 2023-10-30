import { HttpBackend, HttpClient, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BASE_URL, authToken, expirationTime, isAdmin, rememberMe } from "../core/constants/constants";
import { AuthSuccess, SignIn, UserData } from "../core/interfaces/auth.interface";
import { LocalStorageSevice } from "../core/services/storage.service";
import { Observable, catchError, map, of, tap, throwError } from "rxjs";

interface UnAuthResponse {
    status: string,
    title: string,
    type: string,
    detail: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService extends LocalStorageSevice{
    constructor(
        private _http: HttpClient, 
        @Inject(BASE_URL) private _apiUrl: string, 
        private _cancelHttp: HttpBackend) {
        super();
    }

    authUser(data: SignIn): Observable<UserData> {
        const { rememberUser, ...rest} = data
        return this._http.post<AuthSuccess>(`${this._apiUrl}/auth/login` , rest).pipe(
            tap(result => {
                this.setItem(authToken, result.token);
                this.setItem(rememberMe, rememberUser);
                const currentTimestamp = Date.now();
                const exp = currentTimestamp + expirationTime;
                this.setItem('exp', exp)
                const isUserAdmin = result.email === 'atuny0@sohu.com';
                this.setItem(isAdmin, isUserAdmin);
            }),
            map(result => {
               return result.email === 'atuny0@sohu.com' ?  {isAdmin: true, ...result} : result
            }),
            map(({token, isAdmin, ...rest}) => ({...rest, isAdmin: !!isAdmin}))
        )

    }

    isAuthorized(): boolean {
        return this.itemExist(authToken)
    }

    userAuthAlreadyDone() {
        return this.itemExist(authToken) && this.itemExist(rememberMe)
    }

    request401() {
        const newReq = new HttpRequest('GET',`${this._apiUrl}/http/401`)
        return this._cancelHttp.handle(newReq)
    }

}