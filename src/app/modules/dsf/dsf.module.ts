import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from '@shared/vendors/angular-material.module';

import { DsfModuleRoutes } from './dsf.module.routes';

// Import DSF sub modules
import { ReportsModule } from './sub-modules/reports/reports.module';

// DSF module entry component (that defines module utilities/configurations: menus, etc)
import { DsfIndexComponent } from './index/dsf.index.component';

import { DsfImportComponent } from './import/dsf.import.component';
import { DsfBuildComponent } from './build/dsf.build.component';
import { DsfEditComponent } from './build/dsf.edit.component';
import { DsfParamComponent } from './param/dsf.param.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
      {prefix: '../../../assets/i18n/shared/', suffix: '.json'},
      {prefix: '../../../assets/i18n/modules/dsf/', suffix: '.json'},
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularMaterialModule,
    DsfModuleRoutes,
    ReportsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [
    DsfIndexComponent,
    DsfImportComponent,
    DsfBuildComponent,
    DsfParamComponent,
    DsfEditComponent
  ],
  exports: [
    CommonModule,
    DsfIndexComponent,
    DsfImportComponent,
    DsfBuildComponent,
    DsfParamComponent,
    DsfEditComponent,
    DsfModuleRoutes
  ],
  entryComponents: [ DsfEditComponent ],
})
export class DsfModule {}
