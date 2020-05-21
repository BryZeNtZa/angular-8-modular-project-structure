import { IPeriod } from '@entity/model/Period';
import { IParty } from '@entity/model/organisation/IParty';
import { IAccountingYear } from '@entity/model/accountingYear/AccountingYear';
import { IReport } from '@entity/model/reporting/IReport';

export interface IStatement extends IReport {
    // full or simple statement?
    full?: boolean;
    // company concerned by the statement
    company?: IParty;
    // Accounting year of the statement
    year?: IAccountingYear;
    // period of the statement
    period?: IPeriod;
}
