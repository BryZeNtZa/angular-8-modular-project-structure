import { IPersistent} from '@entity/model/IPersistent';
import { IPartner } from '@entity/model/organisation/IPartner';
import { ClassNameMap } from '@entity/ApplicationMaps';


export interface IProductOrder extends IPersistent {
    /**
     * The identifier number of the operation
     */
    number?: string;
    /**
     * The date the operation where performed
     */
    date?: Date;
    /**
     * The date of the operation
     */
     dateAndTime?: Date;
    /**
     * Amount received
     */
    vatAmount?: string;
    /**
     * The person who initiate/made the operation
     */
    seller?: IPartner;
    /**
     * A partner also concern by the operation
     */
    partner?: IPartner;
    /**
     * Description
     */
    comment?: string;

    paymentMode?: string; // PaymentModeType

    items?: IProductOrderItem[];

    bills?: IBill[];

    discount?: any;

    credit?: any;

    processingStatus?: string;
}

export class PaymentModeType {
    public static CASH = 'CASH';
    public static SMS = 'SMS';
    public static CREDIT_CARD = 'CREDIT_CARD';
    public static DEBIT_CARD = 'DEBIT_CARD';
    public static BANK_WIRE = 'BANK_WIRE';
    public static CREDIT = 'CREDIT';
}
export class ProcessingStatus {
    public static RECEIVED = 'RECEIVED'; // Order is still winting a decision should it be further processes or rejected or closed
    public static ACCEPTED = 'ACCEPTED';
    public static CANCELED = 'CANCELED';
    public static REJECTED = 'REJECTED';
    public static IN_PROCESSING = 'IN_PROCESSING'; // Order is being prepared
    public static READY = 'READY'; // Prepartion if finised, order can be shipped or picked by customer
    public static SHIPPED = 'SHIPPED';
    public static DELIVERED = 'DELIVERED';
    public static RETURNED = 'RETURNED'; // Customer has returned the products
    public static CLOSED = 'CLOSED';
    public static CURRENT_DELIVERY = 'CURRENT_DELIVERY';
    public static WAIT_DELIVERY = 'WAIT_DELIVERY';
    public static RECEIVED_PARTIAL = 'RECEIVED_PARTIAL';

    public static getDraftStatus(): string[] {
        return [ProcessingStatus.RECEIVED, ProcessingStatus.ACCEPTED,
                ProcessingStatus.REJECTED, ProcessingStatus.IN_PROCESSING,
                ProcessingStatus.RECEIVED_PARTIAL];
    }

    public static getValidateStatus(): string[] {
        return [ProcessingStatus.READY, ProcessingStatus.SHIPPED,
                ProcessingStatus.DELIVERED, ProcessingStatus.CURRENT_DELIVERY,
                ProcessingStatus.CLOSED, ProcessingStatus.WAIT_DELIVERY];
    }

    public static getCancelledStatus(): string[]{
        return [ProcessingStatus.RETURNED, ProcessingStatus.CANCELED];
    }
}
export class ProductOrderUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getProductOrder(): IProductOrder {
        let newProductOrder: IProductOrder;
        newProductOrder = {
            id: null,
            oid: null,
            date: new Date(Date.now()),
            dateAndTime: new Date(Date.now()),
            seller: {id: null, classe: ClassNameMap.Supplier},
            partner: {id: null, classe: ClassNameMap.Customer},
            paymentMode: PaymentModeType[PaymentModeType.CASH],
            classe: ClassNameMap.ProductOrder
        };
        return newProductOrder;
    }
}

export interface IProductOrderItem extends IPersistent {
    /**
     * The product Order
     */
    productOrder?: IProductOrder | any;

    family?: any;

    productCode?: string;

    productName?: string;
    /**
     * Description
     */
    comment?: string;

    quantity?: string;

    number?: string;
    /**
     * The customer price is the negociated price
     */
    customerPrice?: string;

    vatRate?: string;
    /**
     * The unit price is the official price without any discount
     */
    defaultUnitPrice?: string;

    totalAmount?: string;

    vatFreeAmount?: string;

    vatAmount?: string;

    vatType?: any;

    parentItem?: IProductOrderItem;

    realizedUnitPrice?: string;

    taxes?: IProductOrderItem[];
}

export interface IBill extends IPersistent {
    /**
     * Reference number of the bill
     */
     number?: string;

     date?: Date;

     paymentMode?: PaymentModeType;

     productOrder?: IProductOrder | any;

     buyer?: IPartner;
}

export class ProductOrderItemUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewProductOrderItem(): IProductOrderItem {
        let newObj: IProductOrderItem;
        newObj = {
            id: null,
            oid: null,
            // productOrder: {id: null, classe: ClassNameMap.ProductOrder},
            family: {id: null, code: null, classe: ClassNameMap.ProductFamily},
            classe: ClassNameMap.ProductOrderItem
        };
        return newObj;
    }
}
