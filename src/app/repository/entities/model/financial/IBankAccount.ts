import { IPersistent } from '@entity/model/IPersistent';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IAccount } from '@entity/model/accounting/IAccount';

import { IBank } from '@entity/model/organisation/IBank';

export interface IBankAccount extends IPersistent {
    /**
     * The Bank where the account is located 
     */
    bank?: IBank;
    /**
     * Corespondance in accounting chart
     */
    account?: IAccount ;
    /**
     * Bank code String(5)
     */
    bankCode?: string;
    /**
     * String(5)
     */
    counterCode?: string;
    /**
     * String(11)
     */
    accountNumber?: string;
    /**
     * String(2)
     */
    rib?: string;
    /**
     * Name of the account
     */
    entitled?: string;
    /**
     * Description
     */
    description?: string;
}

export class BankAccountUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewBankAccount(): IBankAccount {
        let newBankAccount: IBankAccount;
        newBankAccount = {
            id: null,
            oid: null,
            classe: ClassNameMap.bankAccount
        };
        return newBankAccount;
    }
}
