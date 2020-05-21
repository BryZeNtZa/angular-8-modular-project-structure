export interface IPersistent {
  /**
   * Identifier of the object
   */
    id?: string;
    /**
     * Identifier of the object
     */
    oid?: string;

    creationDate?: Date;
    /**
     * The last modification date.
     * The date when the object were updated in DB for the last time.
     */
    modificationDate?: Date;

    enterpriseCode?: string;

    classe: string;

    toAddOrUpdate?: boolean;

    toDelete?: boolean;
    /**
     * This object can define a method to return a custom toString
     */
    customToString?(): string;
}
