import { Filter } from '@entity/model/filter/Filter';
import { DsfReportStatus } from '@entity/model/dsf/DsfReportStatus';
import { IAccountingYear } from '@entity/model/AccountingYear/AccountingYear';
import { IPeriod } from '@entity/model/Period';

/**
 * General properties of filer used to find objects. By default, deleted objects
 * are not retrieved.
 *
 * @author KPS - Nkap Team
 * @date may 2020
 * @version
 *
 */
export class DsfReportFilter extends Filter {

	public statusList: DsfReportStatus[];

	public accountingYear: IAccountingYear;

    public period: IPeriod;

    constructor(
        statusList?: DsfReportStatus[],
        accountingYear?: IAccountingYear,
        period?: IPeriod
    ) {
       super();
       this.statusList = statusList || [DsfReportStatus.VALIDATE, DsfReportStatus.VALIDATE];
       this.accountingYear = accountingYear || null;
       this.period = period || null;
    }
}
