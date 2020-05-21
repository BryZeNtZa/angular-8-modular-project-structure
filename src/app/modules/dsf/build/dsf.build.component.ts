import {
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
  OnChanges,
} from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import * as fromI18n from '@app/i18n/reducers';
import { DsfEditComponent } from './dsf.edit.component';
import { BuildPageService } from '@service/pages/build-page.service';
/*
 * Model libraries imports
**/
import { IAccountingYear } from '@entity/model/accountingYear/AccountingYear';
import { IAccountingPeriod } from '@entity/model/accountingYear/AccountingPeriod';
import { DsfReportFilter } from '@entity/model/dsf/DsfReportFilter';

@Component({
  selector: 'app-module-view',
  templateUrl: './dsf.build.component.html',
  styleUrls: ['./dsf.build.component.css']
})
export class DsfBuildComponent implements OnInit, OnChanges {

  private pageDatas: any = {};
  private pageFilters: any = {};

  displayedColumns = ['position', 'name', 'fiscalPeriod', 'creationDate'];
  dataSource =  [
    {position: 1, name: 'Rapport DSF 001', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 2, name: 'Rapport DSF 002', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 3, name: 'Rapport DSF 003', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 4, name: 'Rapport DSF 004', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 5, name: 'Rapport DSF 005', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 6, name: 'Rapport DSF 006', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 7, name: 'Rapport DSF 007', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
  ];

  // @ViewChild('dsfEditor', {read: '', static: false})
  dsfEditor: DsfEditComponent;

  periodMode = 'year';
  constructor(
    private router: Router,
    private el: ElementRef,
    readonly store: Store<fromI18n.State>,
    readonly translate: TranslateService,
    private ref: ChangeDetectorRef,
    private modalService: NgbModal,
    private page: BuildPageService
  ) {
    translate.setDefaultLang('fr');
  }

  ngOnChanges() {
    this.page.updatePageFilters(this.pageFilters);
    this.page.updatePageDatas(this.pageDatas);
  }

  ngOnInit() {
    this.page.setPageDatas();
    this.pageDatas = this.page.getPageDatas();
  }

  openPrimary(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-primary-title'});
  }

  openDsfEditor() {
    const modalRef = this.modalService.open(DsfEditComponent, {size: 'xl', ariaLabelledBy: 'modal-primary-title'});
    // modalRef.componentInstance.datas = this.dsfDatas;
  }

  choosePeriodMode(mode: string) {
    this.periodMode = mode;
  }
}
