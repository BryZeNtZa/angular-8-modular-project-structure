import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AppAuthService } from '@service/auth/app.auth.service';

@Injectable({
    providedIn: 'root'
})
export class AppAuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let currentUser = AppAuthService.getUser();

        if (currentUser) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['auth/'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
