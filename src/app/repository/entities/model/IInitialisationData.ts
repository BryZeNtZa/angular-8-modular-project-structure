import { IPartner } from '@entity/model/organisation/IPartner';
import { IDossier } from '@entity/model/organisation/IDossier';

export interface IInitialisationData {
    /**
     * Business owner
     */
    businessOwner?: IPartner;
    /**
     * Accounting folder of the company
     */
    accountingFolder?: IDossier;
    /**
     * First user
     */
    user?: {
          classe?: string,
          login: string ,
          password: string,
          owner: IPartner
    };
}
