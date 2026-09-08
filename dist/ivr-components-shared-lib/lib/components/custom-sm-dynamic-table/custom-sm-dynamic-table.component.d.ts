import { EventEmitter, SimpleChanges, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IActions } from '../custom-actions-dropdown/custom-actions-dropdown.component';
import * as i0 from "@angular/core";
export interface ISmTableColumn {
    key: string;
    label: string;
    sort?: boolean;
    disabled?: boolean;
}
export interface ISmDynmaicTableConfig {
    columns: ISmTableColumn[];
    data: any[];
    dataStatus: 'LOADING' | 'EMPTY' | 'HAS_DATA' | 'No_Filter_Result';
}
export declare class CustomSmDynamicTableComponent {
    private sanitizer;
    config: import("@angular/core").InputSignal<ISmDynmaicTableConfig>;
    actionsList: IActions[];
    hasCheckBox: boolean;
    tableMaxHeight: string;
    colTemplates: {
        [key: string]: TemplateRef<any>;
    };
    actionTemplate?: TemplateRef<{
        $implicit: any;
    }>;
    hasActionTemplate: boolean;
    sortColumn: EventEmitter<string | number | symbol | undefined>;
    nameClick: EventEmitter<any>;
    checkedSortIcon: SafeHtml;
    checkedActionViewSvg: SafeHtml;
    checkedActionEditSvg: SafeHtml;
    checkedActionDeleteSvg: SafeHtml;
    expandSvg: SafeHtml;
    private statusKey;
    heightFactor: import("@angular/core").WritableSignal<number>;
    dynamicHeight: import("@angular/core").Signal<string>;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    onAction(row: any, handler: (row: any) => void): void;
    getNestedValue(obj: any, path: string): any;
    ngOnChanges(changes: SimpleChanges): void;
    private findStatusKey;
    isRowInactive(row: any): boolean;
    disableActions(row: any): boolean;
    private updateFactor;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSmDynamicTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSmDynamicTableComponent, "custom-sm-dynamic-table", never, { "config": { "alias": "config"; "required": false; "isSignal": true; }; "actionsList": { "alias": "actionsList"; "required": false; }; "hasCheckBox": { "alias": "hasCheckBox"; "required": false; }; "tableMaxHeight": { "alias": "tableMaxHeight"; "required": false; }; "colTemplates": { "alias": "colTemplates"; "required": false; }; "actionTemplate": { "alias": "actionTemplate"; "required": false; }; "hasActionTemplate": { "alias": "hasActionTemplate"; "required": false; }; }, { "sortColumn": "sortColumn"; "nameClick": "nameClick"; }, never, never, true, never>;
}
