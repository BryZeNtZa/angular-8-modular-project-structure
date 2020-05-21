import { IPersistent } from '@entity/model/IPersistent';
import { INameable } from '@entity/model/INameable';
import { IAdress, AdressUtils } from '@entity/model/location/IAdress';
import { Utils } from '@entity/Utils';
import { ClassNameMap } from '@entity/ApplicationMaps';

export interface IParty extends IPersistent {
    /**
     * Type of party:
     * A person or an company?
     * see possible value in PartyUtils class
     */
    partyType?: string;
    /**
     * Business number
     */
    number?: string;
    /**
     * Legal form (civility/ category)
     */
    legalForm?: INameable;
    /**
     * Civility of the person
     */
    civility?: INameable;
    /**
     * Legal form of a company for Belgium and Cameroun we have
     * the following possibilities:
     * SPRL or SARL, SA, SPRLU, ETBS
     */
    category?: INameable;
    /**
     * Name of the party
     */
    name: string;
    /**
     * Person surname
     */
    surname?: string;
    /**
     * Short name of the party
     */
    shortName?: string;
    /**
     * Slogan of the party
     */
    slogan?: string;
    /**
     * birthdate of the person
     */
    birthdate?: Date;
    /**
     *  creation date of the company
     */
    creationdate?: Date;
    /**
     * C.C number
     * Tax payer
     */
    vatNumber?: string;
    /**
     * R.C number
     */
    registrarOffice?: string;
    /**
     * cache for the email address
     */
    emailAddressImpl?: string;
    // emailAddress?: string;
    /**
     * mobile Phone
     */
     mobilePhone?: string;
    /**
     * Voip (skype, messenger ...) address
     */
    voipAddress?: string;
    /**
     * Fax number
     */
    fax?: string;
    /**
     * Fixed phone number
     */
    fixedPhone?: string;

    /**
     * Web site address
     */
    webSiteAddress?: string;

    /**
     * address
     */
    address?: IAdress;
    /**
     * National identity
     * For a person, this is the national identity card number
     * for a company this is the registration  number
     */
    nationalIdentity?: string;

    /**
     * Is the company subject to VAT
     * In which case it has to charge additional VAT to its customers.
     * The VAT number if not null mean that the company is subject to VAT.
     * However in Cameroon there is no VAT numbers even for companies that
     * are subject to VAT so we keep two attributes Vat number and this one.
     */
     subjectToVat?: boolean;

     image?: string;

     bank1?: string;

     bank2?: string;
     /**
      * The prefered language of the party
      */
     preferredLanguage?: string;
}

export class PartyUtils {
    /**
     * Diferent type of party
     */
    public static PERSON = 'PERSON';
    public static COMPANY = 'COMPANY';
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewParty(): IParty {
        let newParty: IParty;
        newParty = {
            id: null,
            oid: null,
            partyType: null,
            address: AdressUtils.getNewAdress(),
            bank1: null,
            bank2: null,
            birthdate: null,
            creationdate: null,
            emailAddressImpl: null,
            // emailAddress: null,
            fax: null,
            fixedPhone: null,
            image: null,
            legalForm: {oid: null, name: null, classe: null},
            category: {oid: null, name: null, classe: null},
            civility: {oid: null, name: null, classe: null},
            mobilePhone: null,
            name: null,
            surname: null,
            shortName: null,
            nationalIdentity: null,
            number: null,
            webSiteAddress: null,
            voipAddress: null,
            vatNumber: null,
            subjectToVat: null,
            slogan: null,
            registrarOffice: null,
            preferredLanguage: null,
            classe: ClassNameMap.Company,
        };
        return newParty;
    }
    // Validate that emailValue is a valid email address
    public static getLocalisation(party: IParty): string {
        let localisation = '';
        if (party != null && party.address != null ) {
            let postBox = '';
            if (party.address.postBox != null && party.address.postBox.trim() !== '') {
                postBox = '' + party.address.postBox ;
                if (party.address.correspondant) {
                   postBox +=  ':' + party.address.correspondant ;
                }
                localisation = postBox ;
            }
            let city = '';
            if (party.address.city != null ) {
                city = '' + party.address.city.name + ' - ' + party.address.city.country.name ;
                localisation +=  city;
            }
        }
        console.log(' getLocalisation ' + localisation );
        return localisation;
    }
    // Validate that emailValue is a valid email address
    public static isValidEmail(emailValue): boolean {
        // tslint:disable-next-line: max-line-length
        // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // return re.test(email);
        if (emailValue == null) { return false ; }
        const  isValid = (emailValue.trim().match(Utils.emailPattern) !== null);
        return isValid;
    }
    // Validate that phoneNumberValue is a valid phone number
    public static isValidPhoneNumber(phoneNumberValue): boolean {
        if (phoneNumberValue == null) { return false ; }
        const isValid = (phoneNumberValue.trim().match(Utils.phonePattern) !== null);
        return isValid;
    }
}

export class PartyType {
  public static COMPANY = 'COMPANY';
  public static PERSON = 'PERSON';
  public static ALL = 'ALL';
}
