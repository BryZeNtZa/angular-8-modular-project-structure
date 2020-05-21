/* @author  KPS - Nkap Team
 * @date 17 june 2016
 * @version *
 */
import { IPersistent } from '@entity/model/IPersistent';
import { Family } from '@entity/model/Family';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IJournal } from '@entity/model/journal/Journal';

export interface IJournal extends IPersistent {
    /**
     * The identifier
     */
    code?: string;
    name?: string;
    description?: string;
    family: Family;
}
export class JournalUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getJournal(): IJournal {
        let newJournal: IJournal;
        newJournal = {
            id: null,
            code: null,
            family: {id: null, classe: ClassNameMap.JournalFamily},
            classe: ClassNameMap.Journal
        };
        return newJournal;
    }
}
export enum MainJournalFamily {
    PURCHASE,
    SALE,
    BANK,
    CASHDESK,
    DIVERSE,
}
