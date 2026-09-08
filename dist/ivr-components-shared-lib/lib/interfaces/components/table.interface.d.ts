/** Cell alignment. `flex-start` / `flex-end` are kept as deprecated aliases of `start` / `end`. */
export type TableAlign = 'start' | 'center' | 'end' | 'flex-start' | 'flex-end';
export interface ITableHeader<T> {
    header: string;
    body?: keyof T;
    clickFn?: (value: T) => void;
    htmlRef?: string;
    sort: boolean;
    type?: 'Status' | 'Actions' | undefined;
    headerAlign?: TableAlign;
    /** Body-cell alignment. Defaults to `start`; the action column defaults to `end`. */
    align?: TableAlign;
    /**
     * Show this column in the collapsed mobile row. At most two columns render
     * there; when none is flagged, the first column and the status column are
     * used (the pair the Figma mobile header shows).
     */
    mobileView?: boolean;
    inputTransform?: (item: any) => any;
}
export interface ITableCategory<T> {
    category: string;
    rows: T[];
    isCollapsed?: boolean;
}
export interface IPageChangeEvent {
    page: number;
    pageSize: number;
}
export interface IStatusCol<T> {
    header: keyof T;
    trueValue: string | boolean;
    trueText: string;
    falseText: string;
    sort?: boolean;
    headerAlign?: TableAlign;
    align?: TableAlign;
}
