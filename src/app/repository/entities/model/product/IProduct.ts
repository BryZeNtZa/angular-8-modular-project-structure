import { INameable } from '@entity/model/INameable';
import { IVatType } from '@entity/model/location/IVatType';

export interface IProduct extends INameable {

    family?: any;

    barcode?: string;

    vatType?: IVatType;
}


export class ProductUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewProduct(): IProduct {
        let newProduct: IProduct;
        newProduct = {
            id: null,
            oid: null,
            code: null,
            name: null,
            description: null,
            barcode: null,
            vatType: null,
            family: null,
            classe: 'Product',
        };
        return newProduct;
    }
}