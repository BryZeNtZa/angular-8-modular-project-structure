import { ClassNameMap } from '@entity/ApplicationMaps';
import { IBloc } from '@entity/model/reporting/IBloc';
import { IReportEntity } from '@entity/model/reporting/IReportEntity';

/**
 * A rubric of a bloc report
 * Inherit AbstractNameable where the code will be the code of the rubric,
 * the name will be a standard name that can be internationalize
 * @author kps07
 *
 */
export interface IRubric extends IReportEntity {

    /**
     * Container bloc
     */
    bloc?: IBloc;

    /**
     * rubric value. //can be a simple element or an array
     */
    value?: string;
}

export class RubricUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getObject(): IRubric {
        let newObject: IRubric;
        newObject = {
            id: null,
            oid: null,
            code: null,
            classe: ClassNameMap.Rubric,
        };
        return newObject;
    }
    /**
     * To copy a rubric without his bloc
     */
    public static getACopy(rubric: IRubric): IRubric {
        const newRubric: IRubric = {
            id: null,
            code: rubric.code,
            label: rubric.label,
            order: rubric.order,
            classe: ClassNameMap.Rubric
        };

        newRubric.value = rubric.value;
        newRubric.style = rubric.style;
        return newRubric;
    }
}
