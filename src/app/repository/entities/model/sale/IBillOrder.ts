import { ClassNameMap } from '@entity/ApplicationMaps';
import { IProductOrder } from '@entity/model/sale/IProductOrder';
import { PaymentModeType } from '@entity/model/sale/IProductOrder';

export interface IBillOrder extends IProductOrder {

    name?: string;

    settlementDate?: Date;

    installments?: string;

    amount?: string;

    baseAmount?: string;

    discountCondition?: string;

    penaltyRate?: string;

    billDocument?: any;

    status?: string; // StatusType

}

export class StatusType {
    public static OK = 'OK';
    public static NOT_OK = 'NOT_OK';
}

export class BillOrderUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getBillOrder(): IBillOrder {
        let newBillOrder: IBillOrder;
        newBillOrder = {
            id: null,
            oid: null,
            date: new Date(Date.now()),
            dateAndTime: new Date(Date.now()),
            seller: {id: null, classe: ClassNameMap.Supplier},
            partner: {id: null, classe: ClassNameMap.Customer},
            paymentMode: PaymentModeType[PaymentModeType.CASH],
            classe: ClassNameMap.ProductOrder
        };
        return newBillOrder;
    }
}
