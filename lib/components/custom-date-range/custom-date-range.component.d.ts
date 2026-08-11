import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Date range picker.
 *
 * Panel implements "IVR ( Redesign )" node 278-94678: titled header with a
 * close control, a Start Date and an End Date field (both rendered by
 * <custom-calendar [dateRange]="true">), a divider, and an Add button.
 *
 * startDateChange / endDateChange still fire on every pick, so existing
 * consumers keep working unchanged. Add commits the pair through `apply`.
 */
export declare class CustomDateRangeComponent {
    startDate: Date | null;
    endDate: Date | null;
    label: string;
    startDateChange: EventEmitter<Date | null>;
    endDateChange: EventEmitter<Date | null>;
    /** Emitted when Add is pressed. The panel closes straight after. */
    apply: EventEmitter<{
        start: Date | null;
        end: Date | null;
    }>;
    private overlayPanel?;
    onStartDateChange(date: Date | null): void;
    onEndDateChange(date: Date | null): void;
    onApply(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDateRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomDateRangeComponent, "custom-date-range", never, { "startDate": { "alias": "startDate"; "required": false; }; "endDate": { "alias": "endDate"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, { "startDateChange": "startDateChange"; "endDateChange": "endDateChange"; "apply": "apply"; }, never, never, true, never>;
}
