import { ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare abstract class CustomTimeBaseComponent implements AfterViewInit, OnDestroy {
    hourScrollRef: ElementRef<HTMLDivElement>;
    minuteScrollRef: ElementRef<HTMLDivElement>;
    periodScrollRef: ElementRef<HTMLDivElement>;
    timeInputRef: ElementRef<HTMLInputElement>;
    hours: number[];
    minutes: number[];
    periods: ('AM' | 'PM')[];
    selectedHour?: number | null;
    selectedMinute?: number | null;
    selectedPeriod: 'AM' | 'PM';
    rangeMin: string;
    rangeMax: string;
    private isDragging;
    private startY;
    private startScrollTop;
    protected itemHeight: number;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    updateItemHeight: () => void;
    get filteredHours(): number[];
    get filteredPeriods(): ('AM' | 'PM')[];
    protected goToHour(h: number): void;
    protected goToMin(m: number): void;
    protected goToPeriod(p: 'AM' | 'PM'): void;
    protected getFilteredHoursList(): number[];
    private getHoursForPeriod;
    get filteredMinutes(): number[];
    protected scrollToSelectedValues(): void;
    protected to24Hour(hour: number, period: 'AM' | 'PM'): number;
    protected getCenteredIndex(scrollTop: number): number;
    getItemOpacity(index: number, scrollElement: ElementRef<HTMLDivElement> | undefined): number;
    getItemFontWeight(index: number, scrollElement: ElementRef<HTMLDivElement> | undefined): string;
    onHourScroll(): void;
    onMinuteScroll(): void;
    onPeriodScroll(): void;
    /**
     * Reads the wheels' scroll positions straight off the DOM. The (scroll)
     * handlers can lag behind momentum/snap scrolling, so this is what makes a
     * confirm pick up the row the user is actually looking at.
     */
    protected syncSelectionFromScroll(): void;
    onMouseDown(event: MouseEvent, el: HTMLDivElement): void;
    onMouseMove(event: MouseEvent, el: HTMLDivElement): void;
    onMouseUp(el: HTMLDivElement): void;
    protected setTimeFromString(timeStr: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTimeBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomTimeBaseComponent, never, never, {}, {}, never, never, true, never>;
}
