import { ICountrySubdivision, CountrySubdivisionUtils } from '@entity/model/location/ICountry';

export interface ICity extends ICountrySubdivision {
    postCode?: string;
}

export class CityUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewCity(): ICity {
        let newCity: ICity;
        newCity = CountrySubdivisionUtils.getNewCountrySubdivision();
        newCity.postCode = null;
        newCity.classe = 'City';
        return newCity;
    }
}
