import { IPersistent } from '@entity/model/IPersistent';

export interface IReportEntity extends IPersistent {

    parent?: IReportEntity;
    /**
     * The code
     */
    code?: string;

    /** Label in the statement language */
    label?: string;

    description?: string;

    /**
     * The internationalizable code of the report
     */
    i18Code?: string;

    /**
     * order
     */
    order?: string | number;

    /**
     * the style / how to render rubric
     */
    style?: string ; // RubricStyle[RubricStyle.NORMAL]; //RubricStyle;

    /**
     * how can this rubric be editable
     */
    editionMode?: string; // EditionMode[EditionMode.EDITABLE_CLEAR];

    children?: IReportEntity[];
}

export enum EditionMode {
    NOT_EDITABLE, // This value must never change
    EDITABLE_CLEAR, // If it is changed, the old value is not viewable
    EDITABLE_CLONE, // If it is changed, the old value is still viewable
}

export enum RubricStyle {
    NORMAL,
    CAPITAL_LETTER,
    FAT_CAPITAL_LETTER,
    FAT,
    FAT_SIMPLE,
    WITH_BORDER,
    SHIFT_WITH_BORDER,
    GREY,
    FAT_GREY,
    RIGHT,
    FAT_CENTER,
    CLEAR,
    TABLE
}
