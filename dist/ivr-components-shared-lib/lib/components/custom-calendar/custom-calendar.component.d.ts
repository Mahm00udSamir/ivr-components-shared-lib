import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomCalendarComponent {
    private elementRef;
    label: string;
    placeholder: string;
    labelClass: string;
    calendarPopUpClass: string;
    calendarInputClass: string;
    calendarContainerClass: string;
    minDate: Date | null;
    maxDate: Date | null;
    value: Date | null;
    valueChange: EventEmitter<Date | null>;
    height: string;
    disabled: boolean;
    /**
     * Opts the field into the date-range styling of the redesign
     * ("IVR ( Redesign )" node 278-94678): the calendar icon moves out of the
     * field and up beside the label, the field takes the 4rem / .4rem-radius
     * treatment, and the value reads d-M-yyyy. Off by default, so a plain
     * <custom-calendar> renders exactly as it always has.
     */
    dateRange: boolean;
    /** Start of the span to highlight in the grid. Only used when dateRange is true. */
    rangeStart: Date | null;
    /** End of the span to highlight in the grid. Only used when dateRange is true. */
    rangeEnd: Date | null;
    showCalendar: boolean;
    currentMonth: Date;
    days: Date[];
    weekdays: string[];
    constructor(elementRef: ElementRef);
    toggleCalendar(): void;
    selectDate(date: Date): void;
    prevMonth(): void;
    nextMonth(): void;
    /** False once the grid has reached the month that holds maxDate. */
    canGoNext(): boolean;
    generateCalendar(): void;
    isSelected(date: Date): boolean;
    isCurrentMonth(date: Date): boolean;
    isInRange(date: Date): boolean;
    isDisabled(date: Date): boolean;
    /** Midnight-of-day timestamp, so comparisons ignore any wall-clock time. */
    private toDayStart;
    getMonthName(): string;
    getYear(): number;
    formatDisplayDate(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCalendarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCalendarComponent, "custom-calendar", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "calendarPopUpClass": { "alias": "calendarPopUpClass"; "required": false; }; "calendarInputClass": { "alias": "calendarInputClass"; "required": false; }; "calendarContainerClass": { "alias": "calendarContainerClass"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "value": { "alias": "value"; "required": true; }; "height": { "alias": "height"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "dateRange": { "alias": "dateRange"; "required": false; }; "rangeStart": { "alias": "rangeStart"; "required": false; }; "rangeEnd": { "alias": "rangeEnd"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
