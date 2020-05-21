import { IPersistent } from '@entity/model/IPersistent';
import { IPartner, PartnerUtils } from '@entity/model/organisation/IPartner';
import { ClassNameMap } from '@entity/ApplicationMaps';

export interface IUser extends IPersistent {
    login: string ;
    password?: string;
    oldpassword?: string;
    owner?: IPartner;
    partnerOid?: string;
    name?: string;
}
export class UserUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewUser(): IUser {
        let newUser: IUser;
        newUser = {
            id: null,
            oid: null,
            login: null,
            owner: PartnerUtils.getNewPartner(),
            classe: ClassNameMap.User
        };
        return newUser;
    }

    /**
     * Return a new JSON instance of the class up, for connection purpose
     */
    public static getUserWithCredentials(login: string, password: string): IUser {
        let newUser: IUser;
        newUser = {
            id: null,
            oid: null,
            login: login,
            password: password,
            classe: ClassNameMap.User
        };
        return newUser;
    }
}
