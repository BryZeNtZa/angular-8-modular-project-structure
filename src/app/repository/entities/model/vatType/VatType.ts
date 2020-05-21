/**
 * General properties of objects that have a name.
 *
 * @author  KPS - Nkap Team
 * @date 16 june 2016
 * @version
 *
 */
import { IPersistent } from '@entity/model/IPersistent';

export interface IPersistent {
    /**
     * The code
     */
    code: string;
    /**
     * The rate
     */
    rate: number;
    country?: any;
    description?: string;
}
