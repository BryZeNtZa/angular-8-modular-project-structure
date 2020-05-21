import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from '@resolver/users/user.service.resolver';

import { ReportDetailsComponent } from './report/details/report.details.component';
import { ReportEditComponent } from './report/edit/report.edit.component';
import { ReportsListComponent } from './list/reports.list.component';
import { DsfReportResolver } from '@resolver/reports/dsf-report.service.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'reports/list',
    pathMatch: 'full'
  },
  {
    path: 'reports/report/details/:id',
    component: ReportDetailsComponent,
    resolve: {
      report: DsfReportResolver
    }
  },
  {
    path: 'reports/report/edit/:id',
    component: ReportEditComponent,
    resolve: {
      report: DsfReportResolver
    }
  },
  {
    path: 'reports/list',
    component: ReportsListComponent,
    resolve: {
      reports: UserResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsModuleRoutes {}
