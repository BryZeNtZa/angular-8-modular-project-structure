import { IPersistent } from '@entity/model/IPersistent';
import { IVatType } from '@entity/model/location/IVatType';
import { ICountry, CountrySubdivisionUtils } from '@entity/model/location/ICountry';

export interface IVatType extends IPersistent {

    code?: string;

    rate?: number;

    country?: ICountry;

    description?: string;
}

export class VatTypeUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewVat(): IVatType {
        let newVatType: IVatType;
        newVatType = {
            id: null,
            code: null,
            rate: null,
            country: CountrySubdivisionUtils.getNewCountrySubdivision(),
            classe: 'VatType',
        };
        return newVatType;
    }
}
