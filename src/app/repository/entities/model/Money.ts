/**
 * Association of curreny and bigDecimal value
 *
 * @author  KPS - Nkap Team
 * @date 26 mars 2016
 * @version
 *
 */
export let EURO_ISO_CODE = 'EUR';
export let XAF_ISO_CODE  = 'XAF';

export interface Money {

    /**
     * Value
     */
    value: number;

    /**
     * Currency
     */
    currency: string ;
}

