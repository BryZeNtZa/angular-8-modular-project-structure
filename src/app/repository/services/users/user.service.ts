import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '@app/http/httpService';
import { environment as env } from '@env';
import { User } from '@entity/User';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpService) { }

    getAll() {
        return this.http.getData(`${env.apiURL}/users`);
    }

    getSingle(id: number): Observable<User> {
        return this.http.getData(`${env.apiURL}/users:${id}`);
    }

}
