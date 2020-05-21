import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthIndexComponent } from '@shared/modules/auth/auth.index.component';
import { AppLayoutComponent } from '@shared/layouts/layout/app.layout.component';

import { DsfIndexComponent } from '@modules/dsf/index/dsf.index.component';

import { AppAuthGuard } from '../guards/app.auth.guard';

const routes: Routes = [
 {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AppAuthGuard],
    children: [
      {
        path: 'dsf',
        loadChildren: () => import('@modules/dsf/dsf.module').then(m => m.DsfModule)
      },
    ]
  },
  {
    path: 'auth',
    component: AuthIndexComponent,
    loadChildren: () => import('@shared/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
