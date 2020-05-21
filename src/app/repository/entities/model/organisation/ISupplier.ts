import { IPartner, PartnerUtils } from '@entity/model/organisation/IPartner';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { ISupplier } from '@entity/model/organisation/ISupplier';

// tslint:disable-next-line: no-empty-interface
export interface ISupplier extends IPartner {

}

export class SupplierUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewSupplier(): ISupplier {
        let newPartner: ISupplier;
        newPartner = PartnerUtils.getNewPartner();
        newPartner.classe = ClassNameMap.Supplier;
        return newPartner;
    }

}
