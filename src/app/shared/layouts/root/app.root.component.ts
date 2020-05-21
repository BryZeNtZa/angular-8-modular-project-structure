import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import * as fromI18n from '@app/i18n/reducers';

@Component({
  selector: 'app-root-layout',
  templateUrl: './app.root.component.html',
})
export class AppRootComponent {

  title = 'nkap-acajou-dsf-client';

  constructor(
    readonly store: Store<fromI18n.State>,
    readonly translate: TranslateService
  ) {
    translate.setDefaultLang('fr');
  }


}
