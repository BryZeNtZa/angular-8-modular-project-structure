import { Family } from '@entity/model/Family';
import { ClassNameMap } from '@entity/ApplicationMaps';

export interface IAccountFamily extends Family {
    /**
     * Parent
     */
    parent?: IAccountFamily ;
}

export class AccountFamilyUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewAccountFamily(): IAccountFamily {
        let newAccount: IAccountFamily;
        newAccount = {
            id: null,
            oid: null,
            parent: null,
            classe: ClassNameMap.AccountFamily
        };
        return newAccount;
    }
}
