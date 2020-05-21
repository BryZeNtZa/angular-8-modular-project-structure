
/**
 * FilterItem
 *
 * @author KPS - Nkap Team
 * @date 14 nov. 2015
 * @version
 *
 */
export class FilterItem {

    public visible = true;

    public active: boolean;

    type: string; // FilterItemType

    operator: string; // FilterItemOperator

    public name: string;

    public column: string;

    public values: any[];

    /*@JsonIgnore
	public allValues: any[];*/

    public FilterItem(type?: string /*FilterItemType*/, name?: string , column?: string, visible?: boolean , allValues?: any[]) {
        this.type = type;
        this.name = name;
        this.column = column;
    }

    public toString(): string {
        return this.name;
    }

    public reset() {
        this.active = false;
        this.values = [];
        this.operator = null;
    }

}
