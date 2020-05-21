import { FilterItem } from '@entity/model/filter/FilterItem';

/**
 * General properties of filer used to find objects. By default, deleted objects
 * are not retrieved.
 *
 * @author KPS - Nkap Team
 * @date 25 oct. 2015
 * @version
 *
 */
export class Filter {

    public isDefault: boolean;
    public page: number;
    public maxPageSize: number;
    public criteria: string;
    public value: string; // same as criteria
    public showDeleteObjects = false;

    public items: FilterItem[];

	constructor(criteria?: string, page?: number , isDefault?: boolean) {
		this.criteria = criteria || null;
		this.value = criteria || null;
        this.page = page || 1;
        this.maxPageSize = 20;
        this.isDefault = isDefault || true;
        this.showDeleteObjects = false;
		this.items = [];
	}

}
