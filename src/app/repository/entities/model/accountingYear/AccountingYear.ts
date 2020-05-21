/**
 * General properties of objects that have a name.
 *
 * @author  KPS - Nkap Team
 * @date 09 june 2016
 * @version
 *
 */
import { IPersistent } from '@entity/model/IPersistent';
import { IPeriod, PeriodUtils } from '@entity/model/Period';
import { IObjectParams } from '@entity/model/account/ObjectParams';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IDossier } from '@entity/model/organisation/IDossier';

export interface IAccountingYear extends IPersistent {
    [x: string]: any;
    /**
     * The identifier
     */
    code?: string;
    period?: IPeriod;
    openDate?: Date;
    closeDate?: Date;
    chart?: IObjectParams;
    dossier?: IDossier;
    open?: boolean;
}

export class AccountingYearUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getAccountingYear(): IAccountingYear {
        let newAccountingYear: IAccountingYear;
        newAccountingYear = {
            id: null,
            chart: {id: null, classe: ClassNameMap.AccountingChart},
            period: PeriodUtils.getNewPeriod(),
            dossier: {id: null, classe: ClassNameMap.Dossier},
            classe: ClassNameMap.AccountingYear
        };
        return newAccountingYear;
    }
}
