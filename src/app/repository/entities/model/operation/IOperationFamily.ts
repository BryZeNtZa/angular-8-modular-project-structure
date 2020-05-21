import { Family } from '@entity/model/Family';
import { IPartner } from '@entity/model/organisation/IPartner';
import { IAccount } from '@entity/model/accounting/IAccount';
import { IAccountFamily } from '@entity/model/accounting/IAccountFamily';
import { IJournal } from '@entity/model/journal/Journal';
import { IJournalFamily } from '@entity/model/journal/JournalFamily';

export interface IOperationFamily extends Family {
    /**
     * List of account that can be credited during this operation
     */
    creditAccounts?: IAccount[];
    /**
     * List of account that can be dedited during this operation
     */
    debitAccounts?: IAccount[];
    /**
     * List of account families that can be credited during this operation
     */
    creditAccountsFamilies?: IAccountFamily[];
    /**
     * List of account families that can be dedited during this operation
     */
    debitAccountsFamilies?: IAccountFamily[];
    /**
     * Partner concerned by this operation
     */
    partner?: IPartner;
    /**
     * Journal where to write the operation
     */
    journal?: IJournal;
    /**
     * Operation family
     */
    family?: IJournalFamily;
    /**
     * Vat account
     */
    vatAccount?: IAccount;
    /**
     * Families of product buy or sale in this operation
     */
    productsFamilies?: Family[];
}
