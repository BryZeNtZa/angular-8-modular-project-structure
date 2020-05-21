import { Injectable, Injector } from '@angular/core';
import { 
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppAuthService } from '@service/auth/app.auth.service';

@Injectable({providedIn: 'root'})
export class AppTokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Do not intercept local requested files (e.g: translations)
        if (request.url.indexOf('/assets') !== -1) return next.handle(request);

        let currentUser = AppAuthService.getUser();
        if (currentUser) {
            const headers = AppAuthService.getAllHeaders(currentUser);
            request = request.clone({ headers });
        }

        // Responses interception
        return next.handle(request);
    }

}

export let appTokenInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppTokenInterceptor,
    multi: true
};
