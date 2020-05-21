import { IPartner } from '@entity/model/organisation/IPartner';
import { PartyUtils } from '@entity/model/organisation/IParty';
import { ClassNameMap } from '@entity/ApplicationMaps';

// tslint:disable-next-line: no-empty-interface
export interface IEmployee extends IPartner {

}


export class EmployeeUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewObject(): IEmployee {
        let newObject: IEmployee;
        newObject = {
            id: null,
            classe: ClassNameMap.Supplier,
            party: PartyUtils.getNewParty()
        };
        return newObject;
    }
}
