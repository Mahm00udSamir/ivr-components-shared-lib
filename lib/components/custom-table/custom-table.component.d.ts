import { EventEmitter, OnDestroy, TemplateRef } from '@angular/core';
import { IStatusCol, ITableCategory, ITableHeader, TableAlign } from '../../interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class CustomTableComponent<T> implements OnDestroy {
    private sanitizer;
    path: string;
    tableData: T[] | null;
    tableCategories: ITableCategory<T>[] | null;
    cellTemplates: {
        [key: string]: TemplateRef<any>;
    };
    tableHeader: ITableHeader<T>[];
    showStatusColumn: boolean;
    showActionColumn: boolean;
    showNumberCol: boolean;
    pagination: any;
    statusCol: IStatusCol<T>;
    rowClass: string;
    headerClass: string;
    templates: {
        [key: string]: TemplateRef<any>;
    };
    enableEdit: boolean;
    enableDelete: boolean;
    enableView: boolean;
    enableRowClick: boolean;
    /**
     * Rows for which this returns true render with the highlight fill (Figma
     * #F5F6F9). Supplied by the consumer alongside the table headers/data; omit
     * it and every row renders on the plain surface.
     */
    rowHighlight?: (item: T, index: number) => boolean;
    /**
     * Renders the two-button action bar at the bottom of an expanded mobile row.
     * The buttons are feature-specific, so the consumer owns them; without this
     * the action bar and its divider are omitted entirely.
     */
    mobileActionsTemplate?: TemplateRef<any>;
    /** Forces the mobile layout on a wide viewport, for previews and tests. */
    forceMobile: boolean;
    onEdit: EventEmitter<T>;
    onView: EventEmitter<T>;
    onDelete: EventEmitter<T>;
    onRowClick: EventEmitter<T>;
    sortColumn: EventEmitter<string | number | symbol | undefined>;
    checkedSortIcon: SafeHtml;
    checkedActionViewSvg: SafeHtml;
    checkedActionEditSvg: SafeHtml;
    checkedActionDeleteSvg: SafeHtml;
    checkedChevronSvg: SafeHtml;
    private resizingColumnIndex;
    private startX;
    private startWidth;
    private readonly minColumnWidth;
    private readonly defaultActionsColumnWidth;
    columnWidths: Record<number, number>;
    /**
     * The collapsible layout follows the shell's own mobile band rather than a
     * second breakpoint of its own: `SidenavService` already owns a root-level
     * resize listener, so the table switches at exactly the point the sidenav
     * becomes a drawer.
     */
    private readonly sidenav;
    private readonly expandedRows;
    constructor(sanitizer: DomSanitizer);
    get isMobile(): boolean;
    isRowHighlighted(item: T, index: number): boolean;
    isExpanded(index: number): boolean;
    toggleRow(index: number): void;
    /** Normalises the deprecated `flex-*` aliases onto the logical keywords. */
    private normalizeAlign;
    /** Figma centres a handful of headers; everything else reads from the start. */
    headerAlign(column: {
        headerAlign?: TableAlign;
    }): TableAlign;
    /** Body cells default to `start`; a column may opt into centre/end. */
    cellAlign(column: {
        align?: TableAlign;
        headerAlign?: TableAlign;
    }): TableAlign;
    /**
     * Columns shown on the collapsed mobile row. Figma shows exactly two -- the
     * identity column and the status column -- and a 375px row has no space for
     * a third, so the list is capped rather than trusting the consumer's flags.
     */
    mobileViewColumns(): ITableHeader<T>[];
    /** Everything not on the collapsed row becomes a label/value pair when opened. */
    mobileDetailColumns(): ITableHeader<T>[];
    ngOnInit(): void;
    ngOnDestroy(): void;
    getDataColumnIndex(headerIndex: number): number;
    getStatusColumnIndex(): number;
    getActionColumnIndex(): number;
    getColumnWidth(columnIndex: number): number | null;
    isResizingColumn(columnIndex: number): boolean;
    onResizeStart(event: MouseEvent, columnIndex: number): void;
    onDocumentMouseMove(event: MouseEvent): void;
    onDocumentMouseUp(): void;
    private isRtl;
    private clearResizeInteraction;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTableComponent<any>, "custom-table", never, { "tableData": { "alias": "tableData"; "required": false; }; "tableCategories": { "alias": "tableCategories"; "required": false; }; "cellTemplates": { "alias": "cellTemplates"; "required": false; }; "tableHeader": { "alias": "tableHeader"; "required": true; }; "showStatusColumn": { "alias": "showStatusColumn"; "required": true; }; "showActionColumn": { "alias": "showActionColumn"; "required": true; }; "showNumberCol": { "alias": "showNumberCol"; "required": false; }; "pagination": { "alias": "pagination"; "required": false; }; "statusCol": { "alias": "statusCol"; "required": false; }; "rowClass": { "alias": "rowClass"; "required": false; }; "headerClass": { "alias": "headerClass"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; "enableEdit": { "alias": "enableEdit"; "required": false; }; "enableDelete": { "alias": "enableDelete"; "required": false; }; "enableView": { "alias": "enableView"; "required": false; }; "enableRowClick": { "alias": "enableRowClick"; "required": false; }; "rowHighlight": { "alias": "rowHighlight"; "required": false; }; "mobileActionsTemplate": { "alias": "mobileActionsTemplate"; "required": false; }; "forceMobile": { "alias": "forceMobile"; "required": false; }; }, { "onEdit": "onEdit"; "onView": "onView"; "onDelete": "onDelete"; "onRowClick": "onRowClick"; "sortColumn": "sortColumn"; }, never, ["[table-footer]"], true, never>;
}
