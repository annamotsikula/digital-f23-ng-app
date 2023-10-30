import { InjectionToken } from "@angular/core"

export const BASE_URL: InjectionToken<string> = new InjectionToken('')
export const authToken: string = 'TOKEN';
export const rememberMe: string = 'rememberUser';
export const isAdmin: string = 'ADMIN_ROLE';
export const expirationTime = 2000000;
