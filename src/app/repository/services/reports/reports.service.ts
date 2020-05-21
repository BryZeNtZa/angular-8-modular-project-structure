import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@app/http/httpService';
import { environment as env } from '@env';
import { Report } from '@entity/Report';
@Injectable({ providedIn: 'root' })
export class ReportsService {

    constructor(private http: HttpService) { }

    getAll() {
        return this.http.getData(`${env.apiURL}/reports`);
    }

    getSingle(id: number): Observable<Report> {
        return this.http.getData(`${env.apiURL}/reports:${id}`);
    }

}
