import { ClassNameMap } from '@entity/ApplicationMaps';
import { IReport } from '@entity/model/reporting/IReport';
import { IReportEntity } from '@entity/model/reporting/IReportEntity';

/**
 * Report object
 *
 */
export interface IReport extends IReportEntity {

    status?: string; // =  ReportStatus[ReportStatus.DRAFT];

    /*
     * The language in witch the report has been generated
     * The language in witch label of blocs and rubrics are
     */
    locale?: string;

    date?: any;
}


export class ReportUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getObject(): IReport {
        let newObject: IReport;
        newObject = {
            id: null,
            oid: null,
            status: ReportStatus[ReportStatus.DRAFT],
            classe: ClassNameMap.Report,
        };
        return newObject;
    }

    /**
     * get a Bloc in list of report according to his code
     */
    /*public static getBlocByCode(report:IReport,codeBloc: string): IRubric {
		return report.blocs.find(bloc =>
			(bloc.code == null && codeBloc == null)
			|| (bloc.code != null && bloc.code == codeBloc)
		);
	};*/

    /**
     * get a Bloc in list of report according to his order
     */
    /*public static getBlocByOrder(report:IReport,order: string | number): IRubric {
		return report.blocs.find(bloc =>
			(bloc.order == null && order == null)
			|| (bloc.order != null && bloc.order == order)
		);
	};*/

    /**
     * remove a Bloc in list of report blocs according to his code
     */
   /* public static removeBlocByCode(report:IReport, codeBloc : string): Boolean{
    	let index = report.blocs.findIndex(bloc =>
			(bloc.code == null && codeBloc == null)
			|| (bloc.code != null && bloc.code == codeBloc)
		);
        if(index == null || index < 0) return false;
		report.blocs.splice(index,1);
		return true;
	}*/

    /**
     * remove a Bloc in list of report blocs according to his order
     */
   /* public static removeBlocByOrder(report:IReport, order : string | number): Boolean{
    	let index = report.blocs.findIndex(bloc =>
			(bloc.order == null && order == null)
			|| (bloc.order != null && bloc.order == order)
		);
        if(index == null || index < 0) return false;
		report.blocs.splice(index,1);
		return true;
	}*/

    /**
     * Remove a rubric in the report according to the code of his bloc and his own code
     */
    /*public removeRubricOfBlocByCode(report:IReport, codeBloc: string, codeRubrique: string): Boolean{
		let rubricBloc: IBloc = ReportUtils.getBlocByCode(report,codeBloc);
		return rubricBloc != null ? BlocUtils.removeRubricByCode(rubricBloc,codeRubrique) : false;
	}*/

    /**
     * Remove a rubric in the report according to the code of his bloc and his order
     */
    /*public removeRubricOfBlocByOrder(report:IReport, codeBloc: string, orderRubrique: string | number): Boolean{
		let rubricBloc: IBloc = ReportUtils.getBlocByCode(report,codeBloc);
		return rubricBloc != null ? BlocUtils.removeRubricByOrder(rubricBloc,orderRubrique) : false;
	}*/
}

export enum ReportStatus {
    DRAFT,
    FINAL
}
