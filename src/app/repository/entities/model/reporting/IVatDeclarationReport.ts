import { IPersistent } from '@entity/model/IPersistent';
import { IPeriod } from '@entity/model/Period';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IAccountingPeriod } from '@entity/model/accountingYear/AccountingPeriod';
import { IVatRubric } from '@entity/model/reporting/IVatRubric';


export interface IVatDeclarationReport extends IPersistent {

    year?: IAccountingPeriod;
    period?: IPeriod;
    vatRubrics?: IVatRubric[];
    status?: string;
}
export enum TaxationRegimeType {
    REAL,
    SIMPLIFIED,
}


export class VatDeclarationReportUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getObject(): IVatDeclarationReport {
        let newObject: IVatDeclarationReport;
        newObject = {
            id: null,
            oid: null,
            vatRubrics: [],
            classe: ClassNameMap.VatDeclarationReport,
        };
        return newObject;
    }

    public static getRubricByCode(code: string, report: IVatDeclarationReport): IVatRubric {
       // console.log("getRubricByCode ", code, (!report || !report.vatRubrics || report.vatRubrics.length < 0));
        if (!report || !report.vatRubrics || report.vatRubrics.length < 0) { return null; }
        return report.vatRubrics.find( (rub) => rub.code === code);
    }

    public static getRubricsByParentCode(parentCode: string, report: IVatDeclarationReport): IVatRubric[] {
       // console.log("getRubricsByParentCode ", parentCode, (!report || !report.vatRubrics || report.vatRubrics.length < 0));
        if (!report || !report.vatRubrics || report.vatRubrics.length < 0) { return null; }
        return report.vatRubrics.filter( rub => rub.parentCode === parentCode);
    }

}
