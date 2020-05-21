export class PeriodCriteria {

    public start?: Date;

    public end?: Date;

    public comparator?: String;

    constructor(
        start?: Date,
        end?: Date,
        comparator?: String
    ) {
       this.start = start || null;
       this.end = end || null;
       this.comparator = comparator || '=';
    }
}
