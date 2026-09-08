import { EventEmitter, SimpleChanges, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentFormError, IDropdownOption } from '../../interfaces';
import { TranslationService } from '../../services';
import * as i0 from "@angular/core";
export interface IPhoneCountryOption extends IDropdownOption {
    dialCode: string;
    pattern?: RegExp;
    patternMessage?: string;
    countryIcon?: string;
}
export interface IPhoneValue {
    countryCode: string;
    number: string;
}
export type PhoneRule = {
    pattern: RegExp;
    message?: string;
};
export declare class CustomPhoneFormComponent {
    parentForm: FormGroup | any;
    controlName: string;
    name: string;
    label?: string;
    labelClass: string;
    containerClass: string;
    countryHeaderClass: string;
    optionsPanelClass: string;
    numberInputClass: string;
    placeholderNumber: string;
    enableFilter: boolean;
    /** Country list is required. Each option should provide id, nameEn, dialCode, and (optionally) rules. */
    countries: IPhoneCountryOption[];
    /** Your existing error system (same as dropdown) */
    validation: IComponentFormError[];
    disabled: boolean;
    height: string;
    /** Optional country-specific rules override: { '+966': {min:9,max:9,pattern:/^5\d{8}$/} } */
    phoneRules?: Record<string, {
        pattern?: RegExp;
        message?: string;
    }>;
    valueChange: EventEmitter<IPhoneValue | null>;
    isOpen: boolean;
    filterText: string;
    filteredCountries: IPhoneCountryOption[];
    selectedCountry: IPhoneCountryOption | null;
    phoneText: string;
    numberInputRef: ElementRef<HTMLInputElement>;
    translationService: TranslationService;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private parentControl;
    private setupFormControlBinding;
    /** Pull current control value and mirror into local UI state */
    private syncFromControl;
    toggleDropdown(): void;
    closeDropdown(): void;
    applyFilter(): void;
    selectCountry(option: IPhoneCountryOption): void;
    clearCountry(e: Event): void;
    onNumberKeydown(e: KeyboardEvent): void;
    private isSystemKey;
    onNumberPaste(e: ClipboardEvent): void;
    private insertAtCursor;
    onNumberInput(raw: string): void;
    onNumberBlur(): void;
    private normalizePhoneText;
    private onlyDigits;
    private pushToForm;
    private composeValue;
    private applyValidation;
    private resolveRules;
    private buildDefaultPatternMessage;
    private buildPatternMessage;
    private getDigits;
    private markTouched;
    private findCountryByDial;
    containRequiredError(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPhoneFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomPhoneFormComponent, "custom-phone-form", never, { "parentForm": { "alias": "parentForm"; "required": true; }; "controlName": { "alias": "controlName"; "required": true; }; "name": { "alias": "name"; "required": true; }; "label": { "alias": "label"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "containerClass": { "alias": "containerClass"; "required": false; }; "countryHeaderClass": { "alias": "countryHeaderClass"; "required": false; }; "optionsPanelClass": { "alias": "optionsPanelClass"; "required": false; }; "numberInputClass": { "alias": "numberInputClass"; "required": false; }; "placeholderNumber": { "alias": "placeholderNumber"; "required": false; }; "enableFilter": { "alias": "enableFilter"; "required": false; }; "countries": { "alias": "countries"; "required": true; }; "validation": { "alias": "validation"; "required": true; }; "disabled": { "alias": "disabled"; "required": false; }; "height": { "alias": "height"; "required": false; }; "phoneRules": { "alias": "phoneRules"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
