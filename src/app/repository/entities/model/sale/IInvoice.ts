import { Family } from '@entity/model/Family';
import { IFile } from '@entity/model/File';
import { IPartner } from '@entity/model/organisation/IPartner';
import { IProductList } from '@entity/model/sale/IProductList';

export interface IInvoice extends IProductList {
    /**
     * Partner
     */
    partner?: IPartner;

    /**
     * The way the bill will be payed
     */
    paymentMode?: string;

    /**
     * The date the invoice was established
     */
    operationDate?: Date | any;

    /**
     * The date the invoice was established
     */
    billingDate?: Date | any;

    /**
     * The date deadline for settlement
     */
    settlementDate?: any;

    /**
     * File : copy of physical bill
     */
    bill?: IFile;

    status?: string;

    /**
     * reference currency
     */
    referenceCurrency?: string;
    /**
     * conversion rate
     */
    conversionRate?: string;
    /**
     * Total amount with Tax in reference currency.
     */
    referenceTotalAmount?: string;

    /**
     * Tax amount in reference currency.
     */
    referenceTaxAmount?: string;

    journal?: any;

    family?: Family; // operation family
}

export class ValidityStatus {
    static DRAFT = 'DRAFT';
    static VALIDATE = 'VALIDATE';
}
