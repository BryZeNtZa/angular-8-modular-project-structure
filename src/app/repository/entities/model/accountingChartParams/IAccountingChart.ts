import { IPersistent } from '@entity/model/IPersistent';
import { IAccount } from '@entity/model/accounting/IAccount';

export interface IAccountingChart extends IPersistent {
    /**
     * The name
     */
    name?: string;
    /**
     * Vat receivable account
     */
    vatReceivableAccount?: IAccount;
    /**
     * Vat payable account
     */
    vatPayableAccount?: IAccount;
    /**
     * Vat due to state
     */
    vatDueAccount?: IAccount;
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
    customerAccount?: IAccount;
    /**
     * Supplier Account Family
     */
    supplierAccount?: IAccount;
    /**
     * Customer Installment Account Family
     */
    customerInstallmentAccount?: IAccount;
    /**
     * Supplier Installment Account Family
     */
    supplierInstallmentAccount?: IAccount;
    /**
     * Employee salary Account Family
     */
    employeeSalaryAccount?: IAccount;
    /**
     * Expense Family
     */
    expenseAccount?: IAccount;
    /**
     * Main money transfer account
     */
    mainMoneyTransferAccount?: IAccount;
    /**
     * Main bank account
     */
    mainBankAccount?: IAccount;

    /**
     * Main debit pending account
     */
    mainPendingDebitAccount?: IAccount;

    /**
     * Main credit pending account
     */
    mainPendingCreditAccount?: IAccount;

    /**
     * default other lost account
     */
    defaultOtherLostAccount?: IAccount;

    /**
     * default other gain account
     */
    defaultOtherGainAccount?: IAccount;
    /**
     * create customer account at customer creation?
     */
    createCustomerAccount?: boolean;
    /**
     * create supplier account at customer creation?
     */
    createSupplierAccount?: boolean;
    /**
     * create employee account at customer creation?
     */
    createEmployeeAccount?: boolean;
}
