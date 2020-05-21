/**
 * Type of diferent accounting chart node
 */
export class AccountingChartNodeType {
    static ACCOUNT_FAMILY = 'ACCOUNTFAMILY'; // type for account family
    static ACCOUNT = 'ACCOUNT'; // type for all simple account
}

/**
 * This interface represent a node in the accounting chart
 * A node can be an accountingFamily or simply an account
 */
export interface IAccountingChartNode {

    /**
     * The db id of the node
     */
    id: string;

    /**
     * The code/unique number identifier of the node
     */
    code: string;

    /**
     * The name of the node
     */
    name: string;

    /**
     * The description
     */
    description?: string;

    /**
     * Type of the node
     */
    type: string; // AccountingChartNodeType value

    /**
     * indicator to know if the node has children or not
     */
    hasChildren: boolean;

    /**
     * List of node children
     */
    children?: IAccountingChartNode[];

    /**
     * The id of the parent node
     * it isn't mandatory
     */
    parentId?: string;

    /**
     * The type of the parent node
     * it isn't mandatory
     */
    parentType?: string; // AccountingChartNodeType value

}
