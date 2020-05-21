import { IFinancialOperation } from '@entity/model/financial/IFinancialOperation';
import { IBankAccount } from '@entity/model/financial/IBankAccount';

export interface IBankFinancialOperation extends IFinancialOperation {
    /**
     * The account concerned by the operation
     */
    bankAccount?: IBankAccount;
}
