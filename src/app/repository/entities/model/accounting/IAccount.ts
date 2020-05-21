import { INameable } from '@entity/model/INameable';
import { IPartner } from '@entity/model/organisation/IPartner';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IAccount } from '@entity/model/accounting/IAccount';
import { IAccountFamily } from '@entity/model/accounting/IAccountFamily';


export interface IAccount extends INameable {
    /**
     * Current balance
     */
    balance?: string;

    classification?: AccountClassification ;

    /**
     * A summarizing account is supposed to have child account in which
     * transactions will be posted.
     * It cannot receive postings.
     */
    summarizing?: boolean;

    canBeUseForOperation?: boolean;
    /**
     * A standard account is an account from the OHADA accounts.
     * It cannot be deleted.
     */
    standard?: boolean;

    parent?: IAccount;

    family?: IAccountFamily;

    owner?: IPartner;

    prefix?: string;
}

export enum AccountClassification {

    ACTIVE,

    PASSIVE,

    CHARGE,

    PRODUCT
}
export class AccountUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewAccount(): IAccount {
        let newAccount: IAccount;
        newAccount = {
            id: null,
            oid: null,
            classe: ClassNameMap.Account
        };
        return newAccount;
    }
}
