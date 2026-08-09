import { EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IDropdownOption } from '../../interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface IDynamicFilterConfig {
    id: string;
    label: string;
    type: 'text' | 'date' | 'multiselect' | 'singleselect';
    placeholder?: string;
    enableFilter?: boolean;
    options?: IDropdownOption[];
    collapsed?: boolean;
    icon?: string;
    validation?: {
        required?: boolean;
        minDate?: Date;
        maxDate?: Date;
    };
}
export declare class CustomFilterDynamicFormComponent {
    private sanitizer;
    config: import("@angular/core").InputSignal<IDynamicFilterConfig[]>;
    values: import("@angular/core").InputSignal<Record<string, any> | null>;
    formChanged: EventEmitter<any>;
    formReset: EventEmitter<any>;
    arrowSvg: SafeHtml;
    collapseState: import("@angular/core").WritableSignal<Record<string, boolean>>;
    filterForm: FormGroup;
    filters: import("@angular/core").WritableSignal<IDynamicFilterConfig[]>;
    private destroy$;
    private initialized;
    resetting: import("@angular/core").WritableSignal<boolean>;
    private fb;
    update: number;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    toggleCollapse(id: string): void;
    private buildForm;
    private isSame;
    private buildEmittableValues;
    private isDateField;
    private toYyyyMmDd;
    private buildValidators;
    get form(): FormGroup;
    reset(): void;
    control(name: string): AbstractControl | null;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFilterDynamicFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomFilterDynamicFormComponent, "custom-filter-dynamic-form", never, { "config": { "alias": "config"; "required": false; "isSignal": true; }; "values": { "alias": "values"; "required": false; "isSignal": true; }; }, { "formChanged": "formChanged"; "formReset": "formReset"; }, never, never, true, never>;
}
