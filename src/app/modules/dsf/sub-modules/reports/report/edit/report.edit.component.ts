import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'report-edit',
  templateUrl: './report.edit.component.html',
  styleUrls: ['./report.edit.component.css']
})
export class ReportEditComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

}
