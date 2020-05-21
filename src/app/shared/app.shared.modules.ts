import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import our global variables and settings
import { AppGlobalSettings } from '@shared/settings/app.global.settings';
import { AppUtils } from '@shared/helpers/app.utils';

// Import vendors (third parties) modules
import { AngularMaterialModule } from '@shared/vendors/angular-material.module';

// Import widgets module
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

// Import shares modules
import { AppLayoutsModule } from '@shared/layouts/app.layouts.module';
import { AuthModule } from '@shared/modules/auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppWidgetsModule, // .forRoot(),
    NgbModule,
    AppLayoutsModule,
    AuthModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    TranslateModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule,
    AuthModule,
  ]
})
export class AppSharedModules {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppSharedModules,
      providers: [
        AppGlobalSettings,
        AppUtils
      ]
    };
  }
}
