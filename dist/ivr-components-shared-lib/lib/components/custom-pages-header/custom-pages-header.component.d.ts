import { EventEmitter } from '@angular/core';
import { ITabDropdownOption } from '../../interfaces';
import { PERMISSIONS } from '../../enums';
import { AuthService } from '../../services';
import * as i0 from "@angular/core";
export declare class CustomPagesHeaderComponent {
    authService: AuthService;
    headerTitle: import("@angular/core").InputSignal<string>;
    addPermission: import("@angular/core").InputSignal<PERMISSIONS>;
    btnTitle: import("@angular/core").InputSignal<string>;
    hasTabs: import("@angular/core").InputSignal<boolean>;
    hideBtn: import("@angular/core").InputSignal<boolean>;
    listCounter: import("@angular/core").InputSignal<number>;
    pageTabs: import("@angular/core").InputSignal<ITabDropdownOption[]>;
    selectedTab: import("@angular/core").WritableSignal<ITabDropdownOption>;
    selectedTabInput: import("@angular/core").InputSignal<ITabDropdownOption>;
    tabSelected: EventEmitter<ITabDropdownOption>;
    addAction: EventEmitter<any>;
    constructor(authService: AuthService);
    selectTab(tab: ITabDropdownOption): void;
    onAddClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPagesHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomPagesHeaderComponent, "custom-pages-header", never, { "headerTitle": { "alias": "headerTitle"; "required": false; "isSignal": true; }; "addPermission": { "alias": "addPermission"; "required": false; "isSignal": true; }; "btnTitle": { "alias": "btnTitle"; "required": false; "isSignal": true; }; "hasTabs": { "alias": "hasTabs"; "required": false; "isSignal": true; }; "hideBtn": { "alias": "hideBtn"; "required": false; "isSignal": true; }; "listCounter": { "alias": "listCounter"; "required": false; "isSignal": true; }; "pageTabs": { "alias": "pageTabs"; "required": false; "isSignal": true; }; "selectedTabInput": { "alias": "selectedTabInput"; "required": false; "isSignal": true; }; }, { "tabSelected": "tabSelected"; "addAction": "addAction"; }, never, never, true, never>;
}
