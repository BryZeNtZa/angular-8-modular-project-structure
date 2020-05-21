/**
 * General properties of objects that have a name.
 *
 * @author  KPS - Nkap Team
 * @date 15 july 2016
 * @version
 *
 */
import { IPersistent } from '@entity/model/IPersistent';
import { IFile } from '@entity/model/File';
import { IPartner } from '@entity/model/organisation/IPartner';
import { IObjectParams } from '@entity/model/account/ObjectParams';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IAccount } from '@entity/model/accounting/IAccount';
import { OperationStatus } from '@entity/model/operation/OperationStatus';
import { OperationType } from '@entity/model/operation/OperationType';

export interface IOperation extends IPersistent {
    /**
     * The identifier
     */
    operationDate?: Date;
    accountingDate?: Date;
    family?: IObjectParams;
    partner?: IPartner;
    journal?: IObjectParams;
    description?: string;
    status?: OperationStatus;
    period?: IObjectParams;
    totalAmount?: string;
    vatAmount?: string;
    vatRate?: string;
    currency?: string;
    referenceCurrency?: string;
    conversionRate?: string;
    bill?: IFile;
    number?: string;
    entries?: IAccountEntry[];
    type?: OperationType;
    operationSource?: ISourceEntity;
}

export interface ISourceEntity {
    identifier?: string;
    className?: string;
}
export interface IAccountEntry extends IPersistent{

    /**
     * Operation date
     */
    date?: Date;

    /**
     * Account
     */
    account?: IAccount;
    accountCode?: string;

    /**
     * Amount
     */
    amount?: string;
    debitAmount?: string;
    creditAmount?: string;

    /**
     * description
     */
    description?: string;

    /**
     * Side of account which is affected by the transaction
     */
    side?: string; // AccountSide;
    fixedSide?: string; // AccountSide;

    /**
     * Transaction
     */
    operation?: IOperation;

}

export enum AccountSide {
    CREDIT,
    DEBIT
}
export class OperationUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getOperation(): IOperation {
        let newOperation: IOperation;
        newOperation = {
            id: null,
            status: OperationStatus.DRAFT,
            family: {id: null, classe: ClassNameMap.OperationFamily},
            journal: {id: null, classe: ClassNameMap.Journal},
            period: {id: null, classe: ClassNameMap.AccountingPeriod},
            partner: {id: null, classe:  ClassNameMap.Supplier},
            entries: [],
            classe: ClassNameMap.Operation
        };
        return newOperation;
    }
}
