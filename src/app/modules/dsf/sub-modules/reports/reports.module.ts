import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';

import { ReportsModuleRoutes } from './reports.module.routes';

import { ReportsListComponent } from './list/reports.list.component';
import { ReportDetailsComponent } from './report/details/report.details.component';
import { ReportEditComponent } from './report/edit/report.edit.component';

import { DsfReportResolver } from '@resolver/reports/dsf-report.service.resolver';

@NgModule({
  imports: [
    CommonModule,
    ReportsModuleRoutes
  ],
  declarations: [
    ReportsListComponent,
    ReportDetailsComponent,
    ReportEditComponent,
  ],
  providers: [DsfReportResolver],
  exports: [
    CommonModule,
    ReportsModuleRoutes,
    ReportsListComponent,
    ReportDetailsComponent,
    ReportEditComponent,
  ]
})
export class ReportsModule {}
