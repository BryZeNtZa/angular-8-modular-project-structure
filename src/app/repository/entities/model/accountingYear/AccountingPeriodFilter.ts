import { Filter } from '@entity/model/filter/Filter';
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
export class AccountingPeriodFilter extends Filter {

	public period: PeriodCriteria;
	
	public accountingYearId: Number;
	
	public startNumber: Number;
	
	public endNumber: Number;
	
	public comparator: String;

	public opened: Boolean;

	public closed: Boolean;

	public specialPeriodInclude: Boolean;

    constructor() {
		super();
		this.period = new PeriodCriteria();
		this.accountingYearId = 0;
		this.startNumber = 0;
		this.endNumber = 0;
		this.comparator = '=';
		this.opened = true;
		this.closed = false;
		this.specialPeriodInclude = false;
    }
}
