import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Report } from '@entity/Report';
import { ReportService } from '@service/reports/report.service';

@Injectable({
  providedIn: 'root'
})
export class DsfReportResolver implements Resolve<Report> {
  constructor(
    private reportService: ReportService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.reportService.getSingle(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}