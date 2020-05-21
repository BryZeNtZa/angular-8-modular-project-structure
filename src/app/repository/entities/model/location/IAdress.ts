import { IPersistent } from '@entity/model/IPersistent';
import { ICity, CityUtils } from '@entity/model/location/ICity';

export interface IAdress extends IPersistent {

    postBox?: string;

    number?: string;

    street?: string;

    /**
     * Name of a person or a company who really owns the address.
     * This field is often used with a post box and starts as
     * c/o (or s/c) Mrs Nyanga Albertine
     */
    correspondant?: string;

    /**
     *  <p style="margin-top: 0">
     *   Type of address: postal as in most countries in Africa or street address.
     *  </p>
     */
    type?: string;

    city: ICity;
}

/**
 * Type of adress
 */
export class AddressType {
    public static STREET_ADDRESS = 'STREET_ADDRESS';
    public static POST_ADDRESS = 'POST_ADDRESS';
}

export class AdressUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewAdress(): IAdress {
        let newAddress: IAdress;
        newAddress = {
            id: null,
            oid: null,
            postBox: null,
            number: null,
            street: null,
            correspondant: null,
            type: AddressType.POST_ADDRESS,
            city: CityUtils.getNewCity(),
            classe: 'Address',
        };
        return newAddress;
    }

    public static formatAddress(address: IAdress, lang?: string) {
        const strMap = {
            en: {sc: 'S/C', poBox: 'PoBox'},
            fr: {sc: 'S/C', poBox: 'B.P'}
        };
        const language: string = lang || 'fr';
        let addressStr1 = '';
        let addressStr2 = '';
        const addressStr: string[] = [];
        if (!address) { return null; }
        if (address.type === AddressType.POST_ADDRESS) {
            if (address.correspondant != null ) {
                addressStr1 = strMap[language].sc;
                addressStr1 += ' ' + address.correspondant;
            }
            if (address.postBox != null ) {
                addressStr2 = strMap[language].poBox;
                addressStr2 += ' ' + address.postBox;
            }
        } else if (address.type === AddressType.STREET_ADDRESS) {
            if (address.number != null ) {
                addressStr1 = ' ' + address.number;
            }
            if (address.street != null ) {
                addressStr1 += ' ' + address.street;
            }
        }
        if (address.city) {
            if (address.city.name) {
                addressStr2 += ' ' + address.city.name;
            }
            if (address.city.country && address.city.country.name) {
                addressStr2 += ' - ' + address.city.country.name;
            }
        }
        addressStr.push(addressStr1.trim());
        addressStr.push(addressStr2.trim());
        return addressStr;
    }

    public static formatAddressOneLine(address: IAdress, lang?: string) {
        const addressStr = AdressUtils.formatAddress(address, lang);
        if (addressStr == null || addressStr.length < 2) { return ''; }
        let addressString = addressStr[0];
        if (addressString.trim() !== '') {
            addressString += ', ' + addressStr[1];
        } else {
            addressString = addressStr[1];
        }
        return addressString;
    }
}
