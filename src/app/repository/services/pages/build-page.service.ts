/*
 * System libraries imports
**/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
/*
 * Model libraries imports
**/
import { IAccountingYear } from '@entity/model/accountingYear/AccountingYear';
import { IAccountingPeriod } from '@entity/model/accountingYear/AccountingPeriod';
/*
 * Services libraries imports
**/
import { AppServiceLocator } from '@app/services/app.service.locator';
import { AccountingService } from '@service/accounting/accounting.service';
/*
 * Model filters imports for services
**/
import { Filter } from '@entity/model/filter/Filter';
import { DsfReportFilter } from '@entity/model/dsf/DsfReportFilter';
import { AccountingPeriodFilter } from '@entity/model/accountingYear/AccountingPeriodFilter';
import { AccountingYearFilter } from '@entity/model/accountingYear/AccountingYearFilter';
import { PageService } from './page.service';

@Injectable({ providedIn: 'root' })
export class BuildPageService extends PageService {

    private accountingService = AppServiceLocator.getInstanceOf(AccountingService);

    constructor() {
      super();
      this.pageURL = 'dsf/build';
    }

    setPageDatas() {

      // Get accounting years
      this.getAccountingYears(this.pageFilters.accountingYearFilter).subscribe((data) => {
        console.log("Accounting years: ", data);
        this.pageDatas.accountingYears = data;

          // Get accounting periods
          this.pageFilters.accountingPeriodFilter.accountingYearId = this.pageDatas.accountingYears.datas[0].id;
          this.getAccountingPeriods(this.pageFilters.accountingPeriodFilter).subscribe((data) => {
            console.log("Accounting periods: ", data);
            this.pageDatas.accountingPeriods = data;

            // Get dsf data
            const params = JSON.stringify(this.pageFilters.dsfReportFilter);
            this.httpService.postData(this.pageURL, params).subscribe((data) => {
              console.log("DSF datas: ", data);
              this.pageDatas.reports = data;
            });
            
          });

      });
    }

    getAccountingYears(filter: AccountingYearFilter): Observable<IAccountingYear> {
      return this.accountingService.getAccountingYears(filter);
    }
  
    getAccountingPeriods(filter: AccountingPeriodFilter): Observable<IAccountingPeriod> {
      return this.accountingService.getAccountingPeriods(filter);
    }

    getAccountingPeriodsByYearID(accountingYearId: number): Observable<IAccountingPeriod> {
      return this.accountingService.getAccountingPeriodsByYearID(accountingYearId);
    }

    setPageEmptyFilters() {
      this.pageFilters =  {
        accountingYearFilter: new AccountingYearFilter(),
        accountingPeriodFilter: new AccountingPeriodFilter(),
        dsfReportFilter: new DsfReportFilter()
      }
    }

    setPageEmptyDatas() {
      this.pageDatas =  {
        accountingYears: {},
        accountingPeriods: {},
        dsfReports: {},
      };
    }

}
