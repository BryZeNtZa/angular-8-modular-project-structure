import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DsfModule } from './dsf/dsf.module';

@NgModule({
  imports: [
    CommonModule,
    DsfModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    TranslateModule,
    DsfModule,
  ]
})
export class AppModules {}
