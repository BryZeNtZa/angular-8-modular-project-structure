import { IPersistent} from '@entity/model/IPersistent';
import { IParty, PartyUtils } from '@entity/model/organisation/IParty';
import { IAccount } from '@entity/model/accounting/IAccount';
import { ClassNameMap } from '@entity/ApplicationMaps';

export interface IPartner extends IPersistent {
    /**
     * Party who plays the role
     * <p>
     * @inv party != null
     */
    party?: IParty;
    person?: IParty;
    company?: IParty;
    // the partner name
    name?: string;
    /**
     * Unique business identifier for the role
     * By default this is the same as party.identifier
     */
   number?: string;
   active?: boolean;
   family?: any;
}

export interface IAccountingPartner {
    partner?: IPartner;
    accounts?: IAccount[];
}
export class PartnerUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewPartner(): IPartner {
        let newPartner: IPartner;
        newPartner = {
            id: null,
            oid: null,
            party: PartyUtils.getNewParty(),
            person: null,
            company: null,
            number: null,
            active: true,
            classe: ClassNameMap.Employee,
        };
        return newPartner;
    }

    public static setParty(partner: IPartner): IPartner {
        if (partner == null ) { return partner; }
        if (partner.party != null) {
            if (partner.party.classe === ClassNameMap.Person) {
                partner.party.partyType = PartyUtils.PERSON;
                partner.party.civility = partner.party.legalForm;
            } else if (partner.party.classe === ClassNameMap.Company) {
                partner.party.partyType = PartyUtils.COMPANY;
                partner.party.category = partner.party.legalForm;
            }
        }
        return partner;
    }

    public static getParty(partyType: string , partner: IPartner): IPartner{
        if (partyType == null || partner == null) { return partner; }
        if (partyType === PartyUtils.COMPANY) {
            // partner.company = partner.party;
            partner.party.classe = 'Company';
        }
        if (partyType === PartyUtils.PERSON) {
            // partner.person = partner.party;
            partner.party.classe = 'Person';
        }
        return partner;
    }
     public static partnerName(partner) {
        let name = '';
        if (partner == null || partner.party == null) { return name; }
        if (partner.party.legalForm != null && partner.party.legalForm.code != null ) {
            name += ' ' + partner.party.legalForm.code ;
        }
        if (partner.party.name != null) {
            name += ' ' + partner.party.name ;
        }
        if (partner.party.classe === ClassNameMap.Person && partner.party.surname != null) {
            name += ' ' + partner.party.surname ;
        }
        return name.trim();
    }

}
export class PartnerType {
  public static BUSINESS_OWNER = 'BUSINESS_OWNER';
  public static BANK = 'BANK';
  public static CUSTOMER = 'CUSTOMER';
  public static EMPLOYEE = 'EMPLOYEE';
  public static PARTNER = 'PARTNER';
  public static PROSPECT = 'PROSPECT';
  public static SUPPLIER = 'SUPPLIER';
}

export class EmployeeJobCode {
    public static JOB_CASH = 'JOB_CASH';
    public static JOB_ACCO = 'JOB_ACCO';
    public static JOB_DIRE = 'JOB_DIRE';
    public static JOB_COMP = 'JOB_COMP';
    public static JOB_WARE = 'JOB_WARE';
    public static JOB_RECE = 'JOB_RECE';
    public static JOB_SELL = 'JOB_SELL';
    public static JOB_WATC = 'JOB_WATC';
    public static JOB_TREA = 'JOB_TREA';
    public static JOB_SECR = 'JOB_SECR';
}
