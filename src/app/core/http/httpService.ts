import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { AppAuthService } from '@service/auth/app.auth.service';
import { Base64 } from '../services/Base64';
import { environment as env } from '@env';

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor (private http: HttpClient, private authService: AppAuthService) { }

    public getData(url:String, params?:any): Observable<any> {
        console.log("Paramètres de la requete Get:", params);
        return this.http.get(`${env.apiURL}/${url}`, params);
    }

    public postData(url:String, params?:any): Observable<any> {
        console.log("Paramètres de la requete Post:", params);
        return this.http.post(`${env.apiURL}/${url}`, params);
    }

    // Function that handles responses for all requests 
    // (This has been replaced by the appErrorInterceptor)
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    getSingleData(datas, id: number): Observable<any> {
        const data = datas.find(data => data.id === id );
        return of(data);
    }
      
    getPageDatas(url, params): Observable<any> {
        return this.http.get<any>(`${env.apiURL}/${url}`);
    }
    
}
