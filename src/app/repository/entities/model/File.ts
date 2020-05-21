/**
 * File
 *
 * @author  KPS - Nkap Team
 * @date 27 mars 2016
 * @version
 *
 */
import { IPersistent } from '@entity/model/IPersistent';

export interface IFile extends IPersistent {
    /**
     * File data
     */
   file?: string[] ;
    /**
     * File data
     */
    document?: string[] ;
    /**
     * number identifier of the file
     */
    number?: string;
    /**
     * Name
     */
    name?: string ;
    /**
     * Description
     */
    description?: string ;
}

