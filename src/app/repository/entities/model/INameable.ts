import { IPersistent } from '@entity/model/IPersistent';

export interface INameable extends IPersistent {
    /**
     * Code
     */
    code?: string;
    /**
     * Name of the subdivision
     */
    name?: string;
    /**
     * Description
     */
    description?: string;
    codeAndName?: string;
}
