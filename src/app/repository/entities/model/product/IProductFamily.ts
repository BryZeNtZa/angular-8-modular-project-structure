import { IPersistent } from '@entity/model/IPersistent';
import { INameable } from '@entity/model/INameable';
import { IVatType } from '@entity/model/location/IVatType';
import { ClassNameMap } from '@entity/ApplicationMaps';
import { ICustomProductFamily } from '@entity/model/product/IProductFamily';
import { IAccountFamily } from '@entity/model/accounting/IAccountFamily';
import { IAccount } from '@entity/model/accounting/IAccount';

export interface IProductFamily extends INameable {
    /**
     * The parent product family
     */
    parent?: IProductFamily;

    parentId?: string; // the oid of the parent object
    /**
     * string value/ name
     */
    stringValue: string;

    /**
     * long text/ description
     */
    longTextValue: string;
}

export interface ICustomProductFamily extends IPersistent {

    /**
     * The parent product family
     */
    parent?: IProductFamily;

    parentId?: string; // the oid of the parent object

    /**
     * string code
     */
    code: string;

    /**
     * string name
     */
    name?: string;

    /**
     * long description
     */
    description?: string;
    /**
     * Photograph
     */
    image?: string;

    /**
     * Default vat
     */
    vatType?: IVatType;

    /**
     * Other taxes applied to the product family
     */
    otherTaxes?: IVatType[];
    /**
     * Percent of deduction on VAT
     */
    deductionRate?: number;
    /**
     * Cost Account class
     * <p>
     * Class of accounts to be debited when a product of this family is purchased
     */
    costAccountFamily?: IAccountFamily;

    /**
     * Cost Account
     * <p>
     * Account to be debited when a product of this family is purchased
     */
    costAccount?: IAccount;

    /**
     * Income Account class
     * <p>
     * Class of accounts to be credited when a product of this family is sold
     */
    incomeAccountFamily?: IAccountFamily;

    /**
     * Income Account
     * <p>
     * Account to be credited when a product of this family is sold
     */
    incomeAccount?: IAccount;

    vatRubric?: any;
}

export interface IProductFamilyCriteria {
    /**
     * The parent product family
     */
    parentOid?: string;
    /**
     * string value for LIKE search
     */
    value: string;
}

export interface IProductFamilyTreeNode {
    /**
     * Oid
     */
    id?: string;
     /**
      * Oid
      */
    oid?: string;
    /**
     * Oid of the parent
     */
    parentId?: string;
    /**
     * string value/ name
     */
    stringValue?: string;
    /**
     * long text/ description
     */
    longTextValue?: string;
    /**
     * Indicator to know if the node has children
     */
    hasChildren?: boolean;
    /**
     * Indicator to know if the children node has already been retrieved from server
     */
    childsRetrieved?: boolean;
    /**
     * Is the node expanded
     */
    expanded?: boolean;
    /**
     * children
     */
    children?: IProductFamilyTreeNode[];
}

export class ProductFamilyUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static getNewProductFamily(): IProductFamily {
        let newProductFamily: IProductFamily;
        newProductFamily = {
            id: null,
            oid: null,
            stringValue: null,
            longTextValue: null,
            parent: null,
            classe: ClassNameMap.ProductFamily
        };
        return newProductFamily;
    }
    public static getNewCustomProductFamily(): ICustomProductFamily {
        let newProductFamily: ICustomProductFamily;
        newProductFamily = {
            id: null,
            oid: null,
            code: null,
            name: null,
            description: null,
            parent: null,
            classe: ClassNameMap.CustomProductFamily
        };
        return newProductFamily;
    }
}

export enum ProductFamilyCategory {
    SERVICES_AND_MISCELLANEOUS_GOODS,
    MERCHANDISES,
    RAW_MATERIALS,
    SERVICES_WORKS_AND_STUDIES,
    SUPPLIES,
    SUBCONTRACTING,
    INVESTMENTS
}
