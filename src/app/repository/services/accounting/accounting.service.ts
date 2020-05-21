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
import { HttpService } from '@app/http/httpService';
/*
 * Model filters imports for services
**/
import { AccountingPeriodFilter } from '@entity/model/accountingYear/AccountingPeriodFilter';
import { AccountingYearFilter } from '@entity/model/accountingYear/AccountingYearFilter';


@Injectable({ providedIn: 'root' })
export class AccountingService {

    private httpService = AppServiceLocator.getInstanceOf(HttpService);

    // constructor(private httpService: HttpService) { }

    getAccountingPeriods(filter: AccountingPeriodFilter): Observable<IAccountingPeriod> {
      const resourceURL = 'accounting/accounting-period/search-criteria';
      const params = JSON.stringify(filter);
      return this.httpService.postData(resourceURL, params);
    }

    getAccountingYears(filter: AccountingYearFilter): Observable<IAccountingYear> {
      const resourceURL = 'accounting/accounting-year/search-criteria';
      const params = JSON.stringify(filter);
      return this.httpService.postData(resourceURL, params);
    }

    getAccountingPeriodsByYearID(accountingYearId: number): Observable<IAccountingPeriod>  {
      const resourceURL = 'accounting/accounting-period/by-year-oid';
      const params = {id: accountingYearId};
      return this.httpService.getData(resourceURL, params);
    }

}
