import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AngularMaterialModule } from '@shared/vendors/angular-material.module';
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

import { AppLayoutComponent } from '@shared/layouts/layout/app.layout.component';

// nav-bar components
import { AppNavComponent } from '@shared/layouts/nav/app.nav.component';
import { AppLogoComponent } from '@shared/layouts/nav/logo/app.nav.logo';
import { AppMenuComponent } from '@shared/layouts/nav/menu/app.nav.menu';
import { AppUserProfileComponent } from '@shared/layouts/nav/user-profile/app.nav.user-profile';

// footer component
import { AppFooterComponent } from '@shared/layouts/footer/app.footer.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    AppWidgetsModule,
    NgbModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [
    AppLayoutComponent,
    AppNavComponent,
    AppLogoComponent,
    AppMenuComponent,
    AppUserProfileComponent,
    AppFooterComponent
  ],
  exports: [
    AppLayoutComponent,
    AppNavComponent,
    AppLogoComponent,
    AppMenuComponent,
    AppUserProfileComponent,
    AppFooterComponent
  ]
})
export class AppLayoutsModule {}
