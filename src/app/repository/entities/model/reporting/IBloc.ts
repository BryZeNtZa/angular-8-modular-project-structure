import { ClassNameMap } from '@entity/ApplicationMaps';
import { IReport } from '@entity/model/reporting/IReport';
import { IBloc } from '@entity/model/reporting/IBloc';
import { IReportEntity } from '@entity/model/reporting/IReportEntity';
import { IRubric } from '@entity/model/reporting/IRubric';

/**
 * A bloc of informations in a report
 * @author kps07
 *
 */
export interface IBloc extends IReportEntity {

    /**
     * The Report container
     */
    report?: IReport;
    /**
     *  List of brubics
     */
    rubrics?: IRubric[];
}

export class BlocUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getObject(): IBloc {
        let newObject: IBloc;
        newObject = {
            id: null,
            oid: null,
            rubrics: [],
            classe: ClassNameMap.Bloc,
        };
        return newObject;
    }

    /**
     * get a Rubric in list of bloc rubric according to his code
     */
    public static getRubricByCode(bloc: IBloc, codeRubric: string): IRubric {
        return bloc.rubrics.find(rubric =>
            (rubric.code == null && codeRubric == null)
            || (rubric.code != null && rubric.code === codeRubric)
        );
    }

    /**
     * get a Rubric in list of bloc rubric according to his order
     */
    public static getRubricByOrder(bloc: IBloc, rubricOrder: number | string): IRubric {
        return bloc.rubrics.find(rubric =>
            (rubric.order == null && rubricOrder == null)
            || (rubric.order != null && rubric.order === rubricOrder)
        );
    }

    /**
     * remove a Rubric in list of bloc rubric according to his code
     */
    public static removeRubricByCode(bloc: IBloc, codeRubric: string): boolean {
        const index = bloc.rubrics.findIndex(rubric =>
            (rubric.code == null && codeRubric == null)
            || (rubric.code != null && rubric.code === codeRubric)
        );
        if (index == null || index < 0) { return false; }
        bloc.rubrics.splice(index, 1);
        return true;
   }

    /**
     * remove a Rubric in list of bloc rubric according to his order
     */
    public static removeRubricByOrder(bloc: IBloc, rubricOrder: number | string): boolean {
        const index = bloc.rubrics.findIndex(rubric =>
            (rubric.order == null && rubricOrder == null)
            || (rubric.order != null && rubric.order === rubricOrder)
        );
        if (index == null || index < 0) { return false; }
        bloc.rubrics.splice(index, 1);
        return true;
    }
}
