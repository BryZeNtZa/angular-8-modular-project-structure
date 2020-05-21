/**
 * General properties of objects that have a name.
 *
 * @author  KPS - Nkap Team
 * @date 16 june 2016
 * @version
 *
 */

export interface ICountry {
    /**
     * The identifier
     */
    oid?: number;
    isoCode: string;
    name: string;
    description?: string;
}
