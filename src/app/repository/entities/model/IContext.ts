import { IPersistent } from '@entity/model/IPersistent';

export interface IContext extends IPersistent {
    /**
     * Number
     */
    number?: string;
    /**
     * Name of the subdivision
     */
    name?: string;
    /**
     * Description
     */
    description?: string;
}
