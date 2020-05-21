
/**
 * Period
 *
 * @author  KPS - Nkap Team
 * @date 25 mars 2016
 * @version
 *
 */
export interface IPeriod {

    /**
     * start period date
     */
    start?: Date ;

    /**
     * End period date
     */
    end?: Date ;

    periodicity?: Periodicity ;

}

export enum Periodicity {

    /**
     * The object is created but not yet persist or not yet available.
     */
    FIXED,

    /**
     * The object is saved and available.
     */
    DAYLY,

    /**
     * The object is mark as dismissed. The object is not visible.
     */
    WEEKLY,

    /**
     * The object is mark as deleted.
     */
    MONTHLY,

    QUARTERLY,

    YEARLY,

    SEMIANNUALLY
}

export class PeriodUtils {
    public static getNewPeriod() {
        let newPeriod: IPeriod;
        newPeriod = {
            start: null,
            end: null
        };
        return newPeriod;
    }
    public static isValidPeriod( period: IPeriod): boolean {
        if (period == null || period.start == null) { return false; }
        console.log(' start ' + period.start.getTime());
        console.log(' end ' + period.end.getTime());
        console.log(' dif ' + (period.end.getTime() - period.start.getTime()) );
        if (period.end != null && (period.end.getTime() - period.start.getTime()) < 0 ) {
            return false;
        }
        return true;
    }
}
