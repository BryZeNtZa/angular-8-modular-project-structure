import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment as env } from '@env';
import { Base64 } from '@app/services/Base64';
import { IUser, UserUtils } from '@entity/model/security/IUser';

@Injectable({
    providedIn: 'root'
})
export class AppAuthService {

    constructor(private http: HttpClient, private router: Router) {}

    public login(username: string, password: string) {
   
        let currentUser: IUser =  UserUtils.getUserWithCredentials(username, password);
    
        let options = {
            headers: AppAuthService.getAllHeaders(currentUser)
        };

        return this.http.post<any>(`${env.apiURL}/security/user/connect`, currentUser, options)
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }

    public fakeLogin(username: string, password: string) {
        return this.http.post<any>(`${env.apiURL}/users/authenticate`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }

    public static getAllHeaders(authUser: IUser): HttpHeaders {
        return new HttpHeaders({
            'Authorization': AppAuthService.getAuthToken(authUser),
            'Content-Type': 'application/json; charset=utf-8'
        });
    }

    public static getUserToken(): string {
        let currentUser: IUser = AppAuthService.getUser();
        return AppAuthService.getAuthToken(currentUser);
    }

    public static getUser(): IUser {
        let userString = localStorage.getItem('currentUser');
        return (userString) ? JSON.parse(userString) : null;
    }

    public static getAuthToken(user: IUser): string {
        let authPattern = Base64.encode(`${user.login}:${user.password}`);
        return `Basic ${authPattern}`;
    }
 
    public logout() {

        if( AppAuthService.getUser() ) {
            this.http.post<any>(`${env.apiURL}/security/user/disconnect`, {})
            .subscribe(
                (d) => { console.log('SERVER DISCONNECTED !!!'); },
                (e) => { console.log('SERVER NOT CONNECTED !!!', e); }
            );
            localStorage.removeItem('currentUser');
            this.router.navigate(['/auth']);      
        }


    }
}
