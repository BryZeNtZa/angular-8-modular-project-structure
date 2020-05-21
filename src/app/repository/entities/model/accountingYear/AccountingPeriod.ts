/**
 * General properties of objects that have a name.
 *
 * @author  KPS - Nkap Team
 * @date 09 june 2016
 * @version
 *
 */
import { IPersistent } from '@entity/model/IPersistent';
import { IPeriod } from '@entity/model/Period';
import { IAccountingYear } from '@entity/model/accountingYear/AccountingYear';

export interface IAccountingPeriod extends IPersistent {
    code: string;
    period?: IPeriod;
    openDate: Date;
    closeDate: Date;
    exercise: IAccountingYear;
    special?: boolean;
    totalOperationCount?: number;
    valideOperationCount?: number;
}
