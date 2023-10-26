import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL, authToken, rememberMe } from "../core/constants/constants";
import { AuthSuccess, SignIn, UserData } from "../core/interfaces/auth.interface";
import { LocalStorageSevice } from "../core/services/storage.service";
import { Observable, catchError, map, of, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService extends LocalStorageSevice{
    constructor(private _http: HttpClient) {
        super();
    }

    authUser(data: SignIn): Observable<UserData> {
        const { rememberUser, ...rest} = data
        return this._http.post<AuthSuccess>(`${BASE_URL}/auth/login` , rest).pipe(
            tap(result => this.setItem(authToken, result.token)),
            tap(_ => this.setItem(rememberMe, rememberUser)),
            map(({token, ...rest}) => ({...rest})),
        )

    }

    isAuthorized(): boolean {
        return this.itemExist(authToken)
    }

    userAuthAlreadyDone() {
        return this.itemExist(authToken) && this.itemExist(rememberMe)
    }

}