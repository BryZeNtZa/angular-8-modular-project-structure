import { FilterItemOperator } from '@entity/model/filter/FilterItemOperator';
/**
 * FilterItemType
 *
 * @author KPS - Nkap Team
 * @date 14 nov. 2015
 * @version
 *
 */
export class FilterItemType {
    public static BOOLEAN = 'BOOLEAN';
    public static DATE = 'DATE';
    public static DATE_TIME = 'DATE_TIME';
    public static DECIMAL = 'DECIMAL';
    public static ENUMERATION = 'ENUMERATION';
    public static INTEGER = 'INTEGER';
    public static STRING = 'STRING';

    public static isBoolean(filterItemType: string): boolean {
        return filterItemType === FilterItemType.BOOLEAN;
    }

    public static  isDate(filterItemType: string): boolean {
        return filterItemType === FilterItemType.DATE;
    }

    public static  isDateTime(filterItemType: string): boolean {
        return filterItemType === FilterItemType.DATE_TIME;
    }

    public static  isDecimal(filterItemType: string): boolean {
        return filterItemType === FilterItemType.DECIMAL;
    }

    public static  isEnumeration(filterItemType: string): boolean {
        return filterItemType === FilterItemType.ENUMERATION;
    }

    public static  isInteger(filterItemType: string): boolean {
        return filterItemType === FilterItemType.INTEGER;
    }

    public static  isString(filterItemType: string): boolean {
        return filterItemType === FilterItemType.STRING;
    }

    public static  getOperators(filterItemType: string): string[] /* FilterItemOperator */ {

        const operators: string[] = [];

        operators.push(FilterItemOperator.ALL);

        if (FilterItemType.isBoolean(filterItemType)) {
            operators.push(FilterItemOperator.EQUALS);
            operators.push(FilterItemOperator.NOT_EQUALS);
        } else if (FilterItemType.isDate(filterItemType) || FilterItemType.isDateTime(filterItemType)) {
            operators.push(FilterItemOperator.EQUALS);
            operators.push(FilterItemOperator.BEFORE);
            operators.push(FilterItemOperator.AFTER);
            operators.push(FilterItemOperator.BETWEEN);
        } else if (FilterItemType.isDecimal(filterItemType) || FilterItemType.isInteger(filterItemType)) {
            operators.push(FilterItemOperator.EQUALS);
            operators.push(FilterItemOperator.GREATER);
            operators.push(FilterItemOperator.GREATER_OR_EQUALS);
            operators.push(FilterItemOperator.LESS);
            operators.push(FilterItemOperator.LESS_OR_EQUALS);
            operators.push(FilterItemOperator.BETWEEN);
        } else if (FilterItemType.isEnumeration(filterItemType)) {
            operators.push(FilterItemOperator.EQUALS);
            operators.push(FilterItemOperator.NOT_EQUALS);
        } else if (FilterItemType.isString(filterItemType)) {
            operators.push(FilterItemOperator.EQUALS);
            operators.push(FilterItemOperator.NOT_EQUALS);
            operators.push(FilterItemOperator.CONTAINS);
            operators.push(FilterItemOperator.NOT_CONTAINS);
        }
        // operators.add(FilterItemOperator.NONE);
        return operators;
    }

}
