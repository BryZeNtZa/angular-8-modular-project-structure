import { INameable } from '@entity/model/INameable';
import { ICountry, ICountrySubdivision } from '@entity/model/location/ICountry';

export interface ICountry extends ICountrySubdivision {
    /**
     * Iso code of the country
     */
    isoCode?: string;
}

export interface ICountrySubdivision extends INameable {
    /**
     * Parent subdivision
     */
    parent?: ICountrySubdivision;

    /**
     * Country
     */
    country?: ICountry;
}


export class CountrySubdivisionUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewCountrySubdivision(): ICountrySubdivision {
        let newCountrySubdivision: ICountrySubdivision;
        newCountrySubdivision = {
            id: null,
            oid: null,
            code: null,
            country: null,
            parent: null,
            classe: 'Country',
        };
        return newCountrySubdivision;
    }
}
