import { IPersistent } from '@entity/model/IPersistent';
import { IPartner } from '@entity/model/organisation/IPartner';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IAccount } from '@entity/model/accounting/IAccount';
import { Utils } from '@entity/Utils';

export interface IFinancialOperation extends IPersistent {
    /**
     * The identifier number of the operation
     */
    number?: string;
    /**
     * The date the operation where performed
     */
    date?: Date;
    /**
     * The amount of the operation
     */
    amount?: string;
    /**
     * Amount received
     */
    receiveAmount?: string;
    /**
     * The person who initiate/made the operation
     */
    initiator?: IPartner;
    /**
     * A partner also concern by the operation
     */
    partner?: IPartner;
    /**
     * The account to debit due to this operation
     */
    debitAccount?: IAccount;
    /**
     * The account to credit due to this operation
     */
    creditAccount?: IAccount;
    /**
     * Description
     */
    comment?: string;

    status?: string; // FinancialOperationStatus;

    type?: IFinancialTransferType; // FinancialTransferType;

    parent?: IFinancialOperation;

    document?: any; // IFile;
    documentList?: any; // JSON serialisation of documents
    accountingTransactionOid?: string;

    currentWorkflowItem?: IFinancialTransferWorkflowItem;
}

export class FinancialOperationType {
    public static TRANSFER = 'TRANSFER';
    public static RECEPTION = 'RECEPTION';
}

export class FinancialOperationCategory {

    public static TRANSFER = 'TRANSFER';
    public static TO_BANK = 'TO_BANK';
    public static FROM_BANK = 'FROM_BANK';
    public static TO_CASHDESK = 'TO_CASHDESK';
    public static FROM_CASHDESK = 'FROM_CASHDESK';

    public static getFinancialOperationCategoryList() {
        return [
            FinancialOperationCategory.TRANSFER,
            FinancialOperationCategory.TO_CASHDESK,
            FinancialOperationCategory.FROM_CASHDESK,
            FinancialOperationCategory.TO_BANK,
            FinancialOperationCategory.FROM_BANK];
    }
}

export class FinancialOperationUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewFinancialOperation(): IFinancialOperation {
        let newFinancialOperation: IFinancialOperation;
        newFinancialOperation = {
            id: null,
            oid: null,
            number: Utils.generateNumberWithDateTime(new Date(Date.now())),
            date: new Date(Date.now()),
            initiator: {id: null, classe:  ClassNameMap.Employee},
            partner: {id: null, classe:  ClassNameMap.Employee},
            currentWorkflowItem: FinancialTransferWorkflowItemUtils.getNewFinancialTransferWorkflowItem(),
            type: {id: null, classe: ClassNameMap.FinancialTransferType},
            classe: ClassNameMap.FinancialOperation
        };
        return newFinancialOperation;
    }
}
export interface IFinancialTransferType extends IPersistent{
    name?: string;
    type?: string;
}
export interface IFinancialTransferWorkflowItem extends IPersistent {
    /**
     * The financial operation
     */
    financialOperation: IFinancialOperation | any;
    /**
     * The date the operation where performed
     */
    date?: Date;
    /**
     * The amount of the operation
     */
    amount?: string;
    /**
     * The person who initiate/made the operation
     */
    user?: IPartner;
    /**
     * Description
     */
    comments?: string;

    status?: string; // FinancialOperationStatus;

    step?: string; // FinancialOperationStatus;

    documents?: IDocument[]; // IFile;

    accountingTransactionOid?: string;
/**
 * Boolean to manage what to do with missing amount in cash desk operation
 */
    missingAmountToEmployee?: boolean;

    missingAmountToEnterprise?: boolean;
}

export interface IDocument extends IPersistent {
    /**
     * base64 representation of document
     */
    document: string;
    /**
     * Reference number of the document
     */
     number?: string;
    /**
     * Document name
     */
     name?: string;

     description?: string;

     financialTransferWorkflowItem?: IFinancialTransferWorkflowItem;
}

export class FinancialOperationStatus {
    public static DRAFT = 'DRAFT';
    public static VALIDATE = 'VALIDATE';
    public static SENDED = 'SENDED';
    public static REJECTED = 'REJECTED';
    public static RECEIVED = 'RECEIVED';
}

export class FinancialTransferWorkflowItemUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewFinancialTransferWorkflowItem(): IFinancialTransferWorkflowItem {
        let newObj: IFinancialTransferWorkflowItem;
        newObj = {
            id: null,
            oid: null,
            date: new Date(),
            user: {id: null, classe: ClassNameMap.Employee},
            financialOperation: null,
            classe: ClassNameMap.FinancialTransferWorkflowItem
        };
        return newObj;
    }
}

export class DefaultFinancialTransferTypeCode {
    public static TO_BANK = 'TO_BANK';
    public static TO_CASH_DESK = 'TO_CASH_DESK';
    public static FROM_BANK = 'FROM_BANK';
    public static FROM_CASH_DESK = 'FROM_CASH_DESK';
    public static TO_EMPLOYEE = 'TO_EMPLOYEE';
    public static FROM_EMPLOYEE = 'FROM_EMPLOYEE';
    public static TO_SECRETARY = 'TO_SECRETARY';
    public static FROM_SECRETARY = 'FROM_SECRETARY';
}
