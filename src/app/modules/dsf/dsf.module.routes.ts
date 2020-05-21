import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DsfIndexComponent } from './index/dsf.index.component';
import { DsfImportComponent } from './import/dsf.import.component';
import { DsfBuildComponent } from './build/dsf.build.component';
import { DsfParamComponent } from './param/dsf.param.component';

export const routes: Routes = [
  {
    path: '',
    component: DsfIndexComponent,
    children: [
      {
        path: 'reports',
        loadChildren: () => import('./sub-modules/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'build',
        component: DsfBuildComponent,
      },
      {
        path: 'param',
        component: DsfParamComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsfModuleRoutes {}
