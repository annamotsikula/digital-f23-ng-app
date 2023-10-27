import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router)
  if(authService.isAuthorized()) {
    return true
  }
  return router.parseUrl('/');
};
 
export const authenticationGuard : CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router)
  if(authService.userAuthAlreadyDone()) {
    return router.parseUrl('main');
  }
  return true

}
// import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';

// @Injectable({
//
// })
// export class AuthGuard implements CanActivate {
// constructor(private _router: Router) {
  
// }
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
//       return true
//     }
// }