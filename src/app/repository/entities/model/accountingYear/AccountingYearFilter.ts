import { Filter } from '@entity/model/filter/Filter';
import { AccountingYearStatus } from '@entity/model/AccountingYear/AccountingYearStatus';
import { PeriodCriteria } from '@entity/model/PeriodCriteria';

/**
 * General properties of filer used to find objects. By default, deleted objects
 * are not retrieved.
 *
 * @author KPS - Nkap Team
 * @date may 2020
 * @version
 *
 */
export class AccountingYearFilter extends Filter {

	public period: PeriodCriteria;
	public status: AccountingYearStatus;

    constructor(
        period?: PeriodCriteria,
        status?: AccountingYearStatus
    ) {
       super();
       this.period = period || new PeriodCriteria();
       this.status = status || AccountingYearStatus.OPENED;
    }
}
