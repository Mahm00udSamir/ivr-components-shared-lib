import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CustomInputComponent implements ControlValueAccessor {
    label: string;
    placeholder: string;
    type: 'text' | 'email' | 'password' | 'number';
    errorMessage: string;
    showError: boolean;
    id: string;
    value: string;
    disabled: boolean;
    showPassword: boolean;
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onInputChange(event: Event): void;
    onBlur(): void;
    togglePasswordVisibility(): void;
    get inputType(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomInputComponent, "custom-input", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "type": { "alias": "type"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "showError": { "alias": "showError"; "required": false; }; "id": { "alias": "id"; "required": false; }; }, {}, never, never, true, never>;
}
