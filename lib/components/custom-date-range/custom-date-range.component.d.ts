import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomDateRangeComponent implements OnInit {
    private elementRef;
    startDate: Date | null;
    endDate: Date | null;
    label: string;
    startDateChange: EventEmitter<Date>;
    endDateChange: EventEmitter<Date>;
    isOpen: boolean;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    toggleDateRange(): void;
    onStartDateChange(date: any): void;
    onEndDateChange(date: any): void;
    closeDateRange(): void;
    onDocumentClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDateRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomDateRangeComponent, "custom-date-range", never, { "startDate": { "alias": "startDate"; "required": false; }; "endDate": { "alias": "endDate"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, { "startDateChange": "startDateChange"; "endDateChange": "endDateChange"; }, never, never, true, never>;
}
