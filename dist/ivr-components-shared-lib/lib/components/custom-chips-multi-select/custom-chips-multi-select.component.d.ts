import { IDropdownOption } from '../../interfaces';
import { CustomMultiSelectComponent } from '../custom-multi-select/custom-multi-select.component';
import * as i0 from "@angular/core";
export declare class CustomChipsMultiSelectComponent {
    options: import("@angular/core").InputSignal<IDropdownOption[]>;
    value: import("@angular/core").InputSignal<any[]>;
    placeholder: import("@angular/core").InputSignal<string>;
    enableFilter: import("@angular/core").InputSignal<boolean>;
    addLabel: import("@angular/core").InputSignal<string>;
    removable: import("@angular/core").InputSignal<boolean>;
    /**
     * Opt-in to the redrawn Role Management layout (Figma 1262:69703 /
     * dark 1262:70534): a search field + raised "Add" button, a 1px rule, then
     * the wrapped badge row. Left `false`, the component renders exactly as
     * before (text-link "add" + inline `custom-multi-select` dropdown).
     */
    searchable: import("@angular/core").InputSignal<boolean>;
    searchPlaceholder: import("@angular/core").InputSignal<string>;
    valueChange: import("@angular/core").OutputEmitterRef<any[]>;
    chips: import("@angular/core").Signal<string[]>;
    /** Selected options as full records — the searchable template needs the id to remove. */
    selectedOptions: import("@angular/core").Signal<IDropdownOption[]>;
    /** Unselected options, narrowed by the current search term. */
    availableOptions: import("@angular/core").Signal<IDropdownOption[]>;
    multiSelect?: CustomMultiSelectComponent;
    dropdownOpen: boolean;
    readonly overlayOpen: import("@angular/core").WritableSignal<boolean>;
    readonly searchTerm: import("@angular/core").WritableSignal<string>;
    onAdd(): void;
    onRemove(chip: string): void;
    onValueChange(next: any[]): void;
    openOverlay(): void;
    closeOverlay(): void;
    onSearch(term: string): void;
    addOption(id: IDropdownOption['id']): void;
    removeOption(id: IDropdownOption['id']): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomChipsMultiSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomChipsMultiSelectComponent, "custom-chips-multi-select", never, { "options": { "alias": "options"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "enableFilter": { "alias": "enableFilter"; "required": false; "isSignal": true; }; "addLabel": { "alias": "addLabel"; "required": false; "isSignal": true; }; "removable": { "alias": "removable"; "required": false; "isSignal": true; }; "searchable": { "alias": "searchable"; "required": false; "isSignal": true; }; "searchPlaceholder": { "alias": "searchPlaceholder"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
