/*
 * System libraries imports
**/
import { Injectable } from '@angular/core';

/*
 * Services libraries imports
**/
import { AppServiceLocator } from '@app/services/app.service.locator';
import { HttpService } from '@app/http/httpService';

@Injectable({ providedIn: 'root' })
export abstract class PageService {

    protected pageURL: String = '';
    protected httpService = AppServiceLocator.getInstanceOf(HttpService);

    protected pageDatas: any = {};
    protected pageFilters: any = {};
    
    constructor() {
      this.setPageEmptyFilters();
      this.setPageEmptyDatas();
    }

    public abstract setPageDatas(): void;

    public abstract setPageEmptyFilters(): void;

    public abstract setPageEmptyDatas(): void;

    public getPageFilters(): any{
      return this.pageFilters;
    }
  
    public getPageDatas(): any{
      return this.pageDatas;
    }
  
    public updatePageFilters(filters) {
      this.pageFilters = filters;
    }
  
    public updatePageDatas(datas) {
      this.pageDatas = datas;
    }    

}
