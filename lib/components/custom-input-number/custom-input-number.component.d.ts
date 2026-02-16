import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CustomInputNumberComponent implements ControlValueAccessor {
    label: string;
    placeholder: string;
    suffix: string;
    suffixUrl: string;
    showStepper: boolean;
    step: number;
    min: number | null;
    max: number | null;
    id: string;
    value: any;
    isValid: boolean;
    disabled: boolean;
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onInputChange(event: Event): void;
    onBlur(): void;
    decrement(): void;
    increment(): void;
    private updateStepperValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomInputNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomInputNumberComponent, "custom-input-number", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "suffixUrl": { "alias": "suffixUrl"; "required": false; }; "showStepper": { "alias": "showStepper"; "required": false; }; "step": { "alias": "step"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "id": { "alias": "id"; "required": false; }; "value": { "alias": "value"; "required": false; }; "isValid": { "alias": "isValid"; "required": false; }; }, {}, never, never, true, never>;
}
