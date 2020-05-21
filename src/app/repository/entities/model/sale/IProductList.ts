import { IPersistent } from '@entity/model/IPersistent';
import { IProductFamily } from '@entity/model/product/IProductFamily';

export interface IProductList extends IPersistent {
    /**
     * The identifier number of the operation
     */
    number?: string;
    /**
     * The date the operation where performed
     */
    date?: Date;
    /**
     * Total amount of the product list
     */
    totalAmount?: string;
    /**
     * Amount received
     */
    taxAmount?: string;

    /**
     * Currency of amount in product list
     */
    currency?: string;
    /**
     * Items
     */
    items?: IOrderItem[];
    /**
     * Description
     */
    description?: string;
}

export interface IOrderItem extends IPersistent {
    /**
     * The product Order
     */
    productOrder?: IProductList | any;

    product?: any;

    family?: IProductFamily;

    productCode?: string;

    productName?: string;
    /**
     * Description
     */
    description?: string;

    quantity?: string;

    number?: string;

    taxRate?: string;
    /**
     * The unit price is the official price without any discount
     */
    defaultUnitPrice?: string;

    taxAmount?: string;

    totalAmount?: string;

    taxFreeAmount?: string;
}
