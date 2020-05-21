/**
 * FilterItemOperator
 *
 * @author KPS - Nkap Team
 * @date 14 nov. 2015
 * @version
 *
 */
export class FilterItemOperator {

    public static ALL = 'ALL';
    public static EQUALS = 'EQUALS';
    public static NOT_EQUALS = 'NOT_EQUALS';
    public static CONTAINS = 'CONTAINS';
    public static NOT_CONTAINS = 'NOT_CONTAINS';
    public static NONE = 'NONE';
    public static GREATER = 'GREATER';
    public static LESS = 'LESS';
    public static GREATER_OR_EQUALS = 'GREATER_OR_EQUALS';
    public static LESS_OR_EQUALS = 'LESS_OR_EQUALS';
    public static BETWEEN = 'BETWEEN';
    public static AFTER = 'AFTER';
    public static BEFORE = 'BEFORE';

    public static  isAll(filterItemOperator: string /* FilterItemOperator */): boolean {
        return filterItemOperator === FilterItemOperator.ALL;
    }

    public static  isEqual(filterItemOperator: string /* FilterItemOperator */): boolean {
        return filterItemOperator === FilterItemOperator.EQUALS;
    }

}
