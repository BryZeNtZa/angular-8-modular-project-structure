import { INameable } from '@entity/model/INameable';
import { IPartner, PartnerUtils } from '@entity/model/organisation/IPartner';

export interface IBusinessUnit extends INameable {
    // Enterprie code
    enterpriseCode?: string;

    owner?: IPartner;

    manager?: IPartner;

    // warehouse?: any ; // Warehouse

    parent?: IBusinessUnit;

    stockOid?: string;

    root?: boolean;
}

export class BusinessUnitUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewBusinessUnit(): IBusinessUnit {
        let newBusinessUnit: IBusinessUnit;
        newBusinessUnit = {
            id: null,
            oid: null,
            enterpriseCode: null,
            name: null,
            description: null,
            parent: null,
            owner: PartnerUtils.getNewPartner(),
            manager: null,
            classe: 'BusinessUnit',
        };
        return newBusinessUnit;
    }
}
