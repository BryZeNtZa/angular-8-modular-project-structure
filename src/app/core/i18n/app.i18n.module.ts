import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLanguageSelectorComponent } from './container/language-selector/app-language-selector.component';
import { StoreModule } from '@ngrx/store';

import * as fromI18n from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromI18n.i18nFeatureKey, fromI18n.reducers)
  ],
  declarations: [AppLanguageSelectorComponent],
  exports: [AppLanguageSelectorComponent]
})
export class AppI18nModule {}
