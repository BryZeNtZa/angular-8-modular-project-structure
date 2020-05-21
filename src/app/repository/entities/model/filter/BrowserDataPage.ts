import { IBrowserData } from '@entity/model/browserData/IBrowserData';
/**
 * A list of objects display in one browser page.
 *
 * @author KPS - Nkap Team
 * @date 25 oct. 2015
 * @version
 *
 */
export class BrowserDataPage<B> {
    /**
     * Number of this page
     */
    public page: number;
    /**
     * Total pages for a filter
     */
    public pageCount: number;
    /**
     * The number of the first item of this page
     */
    public pageFirstItem: number;
    /**
     * The number of the last item of this page
     */
    public pageLastItem: number;
    /**
     * Total number of items for the filter
     */
    public totalItemCount: number;
    /**
     * The number of elements in datas
     */
    public pageSize: number;
    /**
     * The list of result of the page
     */
    public datas: IBrowserData[];

    public BrowserDataPage() {
        this.datas = [];
    }

    public toString(): string {
        return 'Page: ' + this.page + '/' + this.pageCount + '\nItem Count : ' + this.datas.length + '/' + this.totalItemCount;
    }
}
