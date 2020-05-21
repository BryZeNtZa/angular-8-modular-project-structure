import { IPersistent } from '@entity/model/IPersistent';
import { ClassNameMap } from '@entity/ApplicationMaps';

export interface IVatRubric extends IPersistent {

    /**
     * The code
     */
    code?: string;
    /**
     * The code of the parent rubric
     */
    parentCode?: string;

    /** Label in the statement language */
    label?: string;

    /**
     * The internationalizable code of the report
     */
    i18Code?: string;

    /**
     * order
     */
    order?: string | number;

    /**
     * stringValue
     */
    stringValue?: string;

    /**
     * integerValue
     */
    integerValue?: string;

    /**
     * doubleValue
     */
    doubleValue?: string;

    /**
     * integerValue
     */
    decimalValue?: string;

}


export class IVatRubricUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getObject(): IVatRubric {
        let newObject: IVatRubric;
        newObject = {
            id: null,
            oid: null,
            classe: ClassNameMap.VatRubric,
        };
        return newObject;
    }

}
