import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private _authService: AuthService , private _router: Router ) {}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
              const currentUser = this._authService.currentUserValue;
              // console.log(state);
              if (currentUser) {
                // logged in so return true
                return true;
            }
// if(this._authService.isLoggedIn) {
//   return true; }

  else {
 this._router.navigate(['/login']
//  , {
//  queryParams : {
//   redirectURL : state.url
//                }
//          }
         ); } }




}
