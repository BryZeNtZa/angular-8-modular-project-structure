import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'report-details',
  templateUrl: './report.details.component.html',
  styleUrls: ['./report.details.component.css']
})
export class ReportDetailsComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

}
