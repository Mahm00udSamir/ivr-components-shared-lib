import { EventEmitter } from '@angular/core';
import { IDropdownOption, IUserLookup } from '../../interfaces';
import { TranslationService } from '../../services';
import * as i0 from "@angular/core";
export declare class CustomDropdownComponent {
    label?: string;
    labelClass: string;
    dropdownOptionsClass: string;
    dropdownHeaderClass: string;
    selectedClass: string;
    dropdownContainerClass: string;
    placeholder: string;
    enableFilter: boolean;
    showClear: boolean;
    isRequired: boolean;
    customId?: string;
    options: IDropdownOption[];
    name?: string;
    value: any;
    valueChange: EventEmitter<IDropdownOption | IUserLookup | null>;
    clear: EventEmitter<void>;
    height: string;
    userOptions: IUserLookup[];
    isUserMode: boolean;
    /**
     * Header colour overrides, for a dropdown rendered as a solid call-to-action
     * rather than a form field (e.g. the conversation header's teal "Assign").
     *
     * Both take any CSS colour, `var(--ivr-…)` included, and are applied as
     * custom properties so the caret follows the text colour too -- its `fill` is
     * `currentColor`, which the plain `color` on `.dropdown-header` alone could
     * not reach past `.dropdown-icons`. Leave unset to keep the default field
     * look (white background, inherited text, muted caret).
     */
    headerTextColor?: string;
    headerBackgroundColor?: string;
    isOpen: boolean;
    filteredOptions: IDropdownOption[];
    filterText: string;
    filteredUserOptions: IUserLookup[];
    translationService: TranslationService;
    ngOnInit(): void;
    get selectedOption(): IDropdownOption | null;
    get selectedUser(): IUserLookup | null;
    toggleDropdown(): void;
    selectOption(option: IDropdownOption | IUserLookup): void;
    clearSelection(event: Event): void;
    filterOptions(): void;
    set reset(value: boolean);
    getUserDisplayName(user: IUserLookup): string;
    getUserInitials(user: IUserLookup): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomDropdownComponent, "custom-dropdown", never, { "label": { "alias": "label"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "dropdownOptionsClass": { "alias": "dropdownOptionsClass"; "required": false; }; "dropdownHeaderClass": { "alias": "dropdownHeaderClass"; "required": false; }; "selectedClass": { "alias": "selectedClass"; "required": false; }; "dropdownContainerClass": { "alias": "dropdownContainerClass"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "enableFilter": { "alias": "enableFilter"; "required": false; }; "showClear": { "alias": "showClear"; "required": false; }; "isRequired": { "alias": "isRequired"; "required": false; }; "customId": { "alias": "customId"; "required": false; }; "options": { "alias": "options"; "required": true; }; "name": { "alias": "name"; "required": true; }; "value": { "alias": "value"; "required": true; }; "height": { "alias": "height"; "required": false; }; "userOptions": { "alias": "userOptions"; "required": false; }; "isUserMode": { "alias": "isUserMode"; "required": false; }; "headerTextColor": { "alias": "headerTextColor"; "required": false; }; "headerBackgroundColor": { "alias": "headerBackgroundColor"; "required": false; }; "reset": { "alias": "reset"; "required": false; }; }, { "valueChange": "valueChange"; "clear": "clear"; }, never, never, true, never>;
}
