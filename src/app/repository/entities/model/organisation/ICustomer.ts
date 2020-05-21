import { IPartner, PartnerUtils } from '@entity/model/organisation/IPartner';
import { ClassNameMap } from '@entity/ApplicationMaps';

// tslint:disable-next-line: no-empty-interface
export interface ICustomer extends IPartner{

}

export class CustomerUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewCustomer(): ICustomer {
        let newPartner: ICustomer;
        newPartner = PartnerUtils.getNewPartner();
        newPartner.classe = ClassNameMap.Supplier;
        return newPartner;
    }

}
