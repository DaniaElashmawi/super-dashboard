import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {User} from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private currentUserSubject: BehaviorSubject<User>;

// public currentUser: Observable<User>;

// isLoggedIn = false ;
// redirectURL = null;



constructor(private _httpClient: HttpClient , private _router: Router) {

  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  // this.currentUser = this.currentUserSubject.asObservable();

 }

 public get currentUserValue(): User {
  return this.currentUserSubject.value;
}





login(username: string, password: string) {
   // console.log(this._httpClient.post(`${environment.apiUrl}/api/login`, { username, password }));

  return this._httpClient.post<any>(`${environment.apiUrl}/api/login`,
  { username, password }).pipe(map(user => {

     // console.log(user)

// store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              // console.log("user =",JSON.stringify(user));
              this.currentUserSubject.next(user);
             // console.log("currentUserSubject = ",this.currentUserSubject);
              // console.log(user['Error_Message'])
              this._router.navigate(['/superDashBoard']);
              return user;
          }));

                                          }



logout() {
// remove user from local storage to log user out
localStorage.removeItem('currentUser');
this.currentUserSubject.next(null);
}


}

