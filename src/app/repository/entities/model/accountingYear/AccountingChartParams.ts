/**
 * General properties of objects that have a name.
 *
 * @author  KPS - Nkap Team
 * @date 09 june 2016
 * @version
 *
 */

import { Family } from '@entity/model/Family';
import { IAccount } from '@entity/model/accounting/IAccount';

/**
 * This interface represent an accounting chart parameter
 */
export interface IAccountingChartParams {

    /**
     * The oid
     */
    id: string;

    /**
     * The name
     */
    name: string;

    /**
     * Vat receivable account
     */
    vatReceivableAccount?: IAccount;

    /**
     * Vat payable account
     */
    vatPayableAccount?: IAccount;

    /**
     * Default cash account
     */
    defaultCashAccount?: IAccount;

    /**
     * Bank account
     */
    defaultBankAccount?: IAccount;

    /**
     * SMS Account
     */
    defaultSmsAccount?: IAccount;

    /**
     * Sales Account
     */
    defaultProductsSalesAccount?: IAccount;

    /**
     * Service Account
     */
    defaultServicesSalesAccount?: IAccount;

    /**
     * Customer Account Family
     */
    customerAccountFamily?: Family;

    /**
     * Supplier Account Family
     */
    supplierAccountFamily?: Family;

   /**
    * Employee salary Account Family
    */
    employeeSalaryAccountFamily?: Family;

    /**
     * Expense Family
     */
    expenseAccountFamily?: Family;

    /**
     * last Customer Account Number
     */
    lastCustomerAccountNumber?: number;

    /**
     * last Supplier Account Number
     */
    lastSupplierAccountNumber?: number;

    /**
     * last Supplier Account Number
     */
    lastEmployeeAccountNumber?: number;

    /**
     * last Consultant Account Number
     */
    lastConsultantAccountNumber?: number;

    /**
     * last Expense Account Number
     */
    lastExpenseAccountNumber?: number;

}
