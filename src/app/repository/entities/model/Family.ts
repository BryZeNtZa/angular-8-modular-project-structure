import { INameable } from '@entity/model/INameable';
/**
 * General properties of objects that have a name.
 *
 * @author  KPS - Nkap Team
 * @date 25 oct. 2015
 * @version
 *
 */
export interface Family extends INameable {
    /**
     * Does this defines the main family for and entity?
     * <p>
     * There must be one and only one main family for each entity
     */
    main?: boolean ;
}

