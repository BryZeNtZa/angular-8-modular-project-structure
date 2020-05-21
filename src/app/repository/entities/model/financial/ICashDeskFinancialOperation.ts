import { IPartner } from '@entity/model/organisation/IPartner';
import { IAccount } from '@entity/model/accounting/IAccount';
import { IFinancialOperation } from '@entity/model/financial/IFinancialOperation';
import { IBusinessUnit } from '@entity/model/organisation/IBusinessUnit';

export interface ICashDeskFinancialOperation extends IFinancialOperation {
    /**
     * The cashDesk point where the operation is made
     */
    cashDesk?: {
          id: string;
          classe?: string,
          number: string ,
          description?: string,
          pointOfSales?: IBusinessUnit,
          cashier: IPartner,
          cashierName: string,
          cashdeskBalance?: number,
          account: IAccount
    };
    /**
     * The current balance of cashDesk
     */
    cashdeskBalance?: number;

}
