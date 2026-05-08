import { IDropdownOption, IUserLookup } from '../../interfaces';
import * as i0 from "@angular/core";
export interface FilterChange {
    searchText: string;
    selectedIds: any[];
    selections?: Record<string, any[]>;
}
export interface FilterConfigItem {
    key: string;
    placeholder?: string;
    options: IDropdownOption[];
    selected?: any[];
    height?: string;
    enableFilter?: boolean;
    multiSelect?: boolean;
    showClear?: boolean;
    dropdownContainerClass?: string;
    dropdownOptionsClass?: string;
    isUserMode?: boolean;
    userOptions?: IUserLookup[];
}
interface FilterState {
    searchText: string;
    selectedIdsLegacy: any[];
    selectionsMap: Record<string, any>;
}
export declare class CustomMainPagesFilterComponent {
    dropdownOptions: import("@angular/core").InputSignal<IDropdownOption[]>;
    dropdownSelectedValues: import("@angular/core").InputSignal<any[]>;
    dropdownPlaceholder: import("@angular/core").InputSignal<string>;
    searchInputPlaceholder: import("@angular/core").InputSignal<string>;
    defaultBehaviorFlag: import("@angular/core").InputSignal<boolean>;
    configs: import("@angular/core").InputSignal<FilterConfigItem[]>;
    moreConfigs: import("@angular/core").InputSignal<FilterConfigItem[]>;
    showMore: import("@angular/core").InputSignal<boolean>;
    validateNumber: import("@angular/core").InputSignal<boolean>;
    externalFiltersHasValue: import("@angular/core").InputSignal<boolean>;
    hasFiltered: import("@angular/core").InputSignal<boolean>;
    filterChange: import("@angular/core").OutputEmitterRef<FilterChange>;
    filterReset: import("@angular/core").OutputEmitterRef<boolean>;
    searchText: import("@angular/core").WritableSignal<string>;
    private selectedIdsLegacy;
    selectionsMap: import("@angular/core").WritableSignal<Record<string, any>>;
    private dropdownChange$;
    private searchChange$;
    initialState: import("@angular/core").WritableSignal<FilterState>;
    hasAnyFilterValue: import("@angular/core").Signal<boolean>;
    hasChangedFromInitial: import("@angular/core").Signal<boolean>;
    shouldDisableApply: import("@angular/core").Signal<boolean>;
    shouldDisableReset: import("@angular/core").Signal<boolean>;
    constructor();
    ngOnInit(): void;
    onSearch(value: string): void;
    onLegacySelectionChange(ids: any[]): void;
    onConfigSelectionChange(key: string, ids: any[]): void;
    onConfigOneSelectionChange(key: string, obj: any): void;
    private initializeSelectionsFromConfigs;
    private setSelectionForKey;
    private buildLegacyPayload;
    private buildConfigPayload;
    emitChange(): void;
    resetFilters(): void;
    private captureInitialState;
    private hasValue;
    private valuesEqual;
    private arraysEqual;
    private deepClone;
    getPlaceholder(c: FilterConfigItem): string;
    /** Normalize UI flags */
    getEnableFilter(c: FilterConfigItem): boolean;
    getShowClear(c: FilterConfigItem): boolean;
    getHeight(c: FilterConfigItem): string;
    getContainerClass(c: FilterConfigItem): string;
    getOptionsClass(c: FilterConfigItem): string;
    getSelectedForKey(key: string): any[];
    onDropdownCleared(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMainPagesFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMainPagesFilterComponent, "custom-main-pages-filter", never, { "dropdownOptions": { "alias": "dropdownOptions"; "required": false; "isSignal": true; }; "dropdownSelectedValues": { "alias": "dropdownSelectedValues"; "required": false; "isSignal": true; }; "dropdownPlaceholder": { "alias": "dropdownPlaceholder"; "required": false; "isSignal": true; }; "searchInputPlaceholder": { "alias": "searchInputPlaceholder"; "required": false; "isSignal": true; }; "defaultBehaviorFlag": { "alias": "defaultBehaviorFlag"; "required": false; "isSignal": true; }; "configs": { "alias": "configs"; "required": false; "isSignal": true; }; "moreConfigs": { "alias": "moreConfigs"; "required": false; "isSignal": true; }; "showMore": { "alias": "showMore"; "required": false; "isSignal": true; }; "validateNumber": { "alias": "validateNumber"; "required": false; "isSignal": true; }; "externalFiltersHasValue": { "alias": "externalFiltersHasValue"; "required": false; "isSignal": true; }; "hasFiltered": { "alias": "hasFiltered"; "required": false; "isSignal": true; }; }, { "filterChange": "filterChange"; "filterReset": "filterReset"; }, never, ["[extraFilters]", "[extraFiltersMore]"], true, never>;
}
export {};
