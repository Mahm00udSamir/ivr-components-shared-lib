export interface ITableHeader<T> {
    header: string;
    body?: keyof T;
    clickFn?: (value: T) => void;
    htmlRef?: string;
    sort: boolean;
    type?: 'Status' | 'Actions' | undefined;
    headerAlign?: 'flex-start' | 'center' | 'flex-end';
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
    headerAlign?: 'flex-start' | 'center' | 'flex-end';
}
