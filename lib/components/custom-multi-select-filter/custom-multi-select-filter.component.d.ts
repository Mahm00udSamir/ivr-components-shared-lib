import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomMultiSelectFilterComponent implements OnInit {
    private elementRef;
    label: string;
    options: any[];
    selectedValues: any[];
    mode: 'single' | 'multi';
    valueChange: EventEmitter<any[]>;
    cancel: EventEmitter<void>;
    tempSelectedValues: any[];
    isOpen: boolean;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    toggleDropdown(): void;
    toggleOption(option: any): void;
    isSelected(option: any): boolean;
    onApply(): void;
    onCancel(): void;
    onDocumentClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMultiSelectFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMultiSelectFilterComponent, "custom-multi-select-filter", never, { "label": { "alias": "label"; "required": false; }; "options": { "alias": "options"; "required": false; }; "selectedValues": { "alias": "selectedValues"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "valueChange": "valueChange"; "cancel": "cancel"; }, never, never, true, never>;
}
