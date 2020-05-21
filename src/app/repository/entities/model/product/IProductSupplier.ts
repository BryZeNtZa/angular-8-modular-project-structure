import { IPersistent } from '@entity/model/IPersistent';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { IProduct } from '@entity/model/product/IProduct';
import { ISupplier } from '@entity/model/organisation/ISupplier';

export interface IProductSupplier extends IPersistent {

    reduction?: number;

    price?: number;

    delay?: number;

    specialCondition?: string;

    supplier?: ISupplier;
    supplierOid?: string;
    supplierId?: string;

    product?: IProduct;
    productOid?: string;
    productId?: string;
    productName?: string;
}
export class ProductSupplierUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewProductSupplier(supplier?: ISupplier, product?: IProduct): IProductSupplier {
        let newObject: IProductSupplier;
        newObject = {
            classe: ClassNameMap.ProductSupplier,
            reduction: null,
            price: null,
            delay: null,
            specialCondition: null,
            supplier,
            product
        };
        if (!newObject.product) {
            newObject.product = {
                id: null,
                oid: null,
                classe: ClassNameMap.Product,
            };
        }
        if (!newObject.supplier) {
            newObject.supplier = {
                id: null,
                oid: null,
                classe: ClassNameMap.Supplier,
            };
        }
        newObject.productOid = newObject.product.oid;
        newObject.supplierOid = newObject.supplier.oid;
        newObject.productId = newObject.product.id;
        newObject.supplierId = newObject.supplier.id;
        return newObject;
    }

    public static productName(productSupplier: IProductSupplier) {
        if (productSupplier == null || productSupplier.product == null) { return ''; }
        let productName = '';
        let separator = '';
        if (productSupplier.product != null && productSupplier.product.code ) {
            productName += productSupplier.product.code;
            separator = ' - ';
        }
        if (productSupplier.product != null && productSupplier.product.name ) {
             productName += separator + productSupplier.product.name;
        }
        return productName;
    }
}
