import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'reports-list-component',
  templateUrl: './reports.list.component.html',
  styleUrls: ['./reports.list.component.css']
})
export class ReportsListComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

}
