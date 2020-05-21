export interface IBrowserData {

    /**
     * Identifier of the object
     */
    id?: string;

    /**
     * Identifier of the object
     */
    oid?: string;

    /**
     * The creation date.
     * The date when the object were created in DB.
     */
    creationDate?: Date;

    /**
     * The last modification date.
     * The date when the object were updated in DB for the last time.
     */
    modificationDate?: Date;
}
