import { IPersistent } from '@entity/model/IPersistent';
import { IObjectParams } from '@entity/model/account/ObjectParams';
import { AccountingStandard } from '@entity/model/accounting/AccountingStandard';
import { IParty } from '@entity/model/organisation/IParty';
import { IPeriod, PeriodUtils } from '@entity/model/Period';
import { ClassNameMap } from '@entity/ApplicationMaps';

export interface IDossier extends IPersistent {
    /**
     * Dossier owner
     */
    owner?: IParty;

    /**
     * Accounting Chart
     */
   chart?: IObjectParams;

   standard?: string; // AccountingStandard;

   accountingYearPeriod?: IPeriod;

   currency?: string;
}

export class DossierUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewDossier(): IDossier {
        let newDossier: IDossier;
        newDossier = {
            oid: null,
            id: null,
            classe: ClassNameMap.Dossier,
            owner: null,
            chart: { id: null, classe: ClassNameMap.AccountingChart, oid: null },
            standard: AccountingStandard[AccountingStandard.OHADA],
            accountingYearPeriod: PeriodUtils.getNewPeriod(),
            currency: null
        };
        newDossier.accountingYearPeriod.start =  new Date(new Date().getFullYear(), 0, 1);
        newDossier.accountingYearPeriod.end =  new Date(new Date().getFullYear(), 11, 31);

        return newDossier;
    }
}

/**
 * Type of different Accounting Standard
 */
/*export class AccountingStandard {
    static OHADA: string = 'OHADA'; // type for OHADA Standard
}*/
