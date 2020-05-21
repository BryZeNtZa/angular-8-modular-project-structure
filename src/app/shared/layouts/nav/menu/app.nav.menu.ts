import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import * as fromI18n from '@app/i18n/reducers';

@Component({
  selector: 'app-nav-menu',
  templateUrl: 'app.nav.menu.html',
  styleUrls: ['app.nav.menu.css'],
})
export class AppMenuComponent {

  menu = [
    {
      module: 'dsf',
      label: 'app.menu.dsf',
      link: '/dsf',
      state: 'active',
    },

  ];

  constructor(
    private router: Router,
    readonly store: Store<fromI18n.State>,
    readonly translate: TranslateService
  ) {
    translate.setDefaultLang('fr');
  }

  navMenuItemClicked(index) {

    this.menu.forEach((item, i) => {
      if (i !== index) {
        this.menu[i].state = '';
      }
    });

    this.menu[index].state = 'active';

    this.router.navigate([this.menu[index].link], {state: {module: this.menu[index]}});
  }
}
