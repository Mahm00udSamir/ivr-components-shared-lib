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
    valueChange: import("@angular/core").OutputEmitterRef<any[]>;
    chips: import("@angular/core").Signal<string[]>;
    multiSelect?: CustomMultiSelectComponent;
    dropdownOpen: boolean;
    onAdd(): void;
    onRemove(chip: string): void;
    onValueChange(next: any[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomChipsMultiSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomChipsMultiSelectComponent, "custom-chips-multi-select", never, { "options": { "alias": "options"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "enableFilter": { "alias": "enableFilter"; "required": false; "isSignal": true; }; "addLabel": { "alias": "addLabel"; "required": false; "isSignal": true; }; "removable": { "alias": "removable"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
