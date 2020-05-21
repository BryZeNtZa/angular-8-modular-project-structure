import { IPersistent } from '@entity/model/IPersistent';
import { IPartner } from '@entity/model/organisation/IPartner';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IUser } from '@entity/model/security/IUser';

export interface ICashDeskAttribution extends IPersistent {

    initiator?: IUser;

    cashier?: IPartner ;

    startDate?: Date;

    endDate?: Date;

    amount?: string;

    cashdesk?: any;

}

export class CashDeskAttributionUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewCashDeskAttribution(): ICashDeskAttribution {
        let newCashDeskAttribution: ICashDeskAttribution;
        newCashDeskAttribution = {
            id: null,
            oid: null,
            cashdesk: {id: null, classe: ClassNameMap.CashDesk},
            classe: ClassNameMap.CashDeskAttribution
        };
        return newCashDeskAttribution;
    }
}
