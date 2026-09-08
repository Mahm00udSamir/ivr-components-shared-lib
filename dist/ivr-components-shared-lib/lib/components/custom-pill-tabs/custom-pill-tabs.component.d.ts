import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ITabDropdownOption } from '../../interfaces';
import { TranslationService } from '../../services';
import * as i0 from "@angular/core";
/**
 * Pill-style tab strip -- the segmented-control sibling of `custom-tabs`
 * (which renders a moving underline instead).
 *
 * Styled from Figma "IVR ( Redesign )" node 64:15952: an outlined strip with
 * no fill of its own, and a white, softly shadowed pill behind the selected
 * tab. Measurements and the token mapping are documented in the stylesheet.
 *
 * Two things to know before using it:
 *
 * 1. It renders the tab *strip* only -- there is no `<ng-content>` and it does
 *    not host panels. The parent swaps the panel itself, either with `@if` or
 *    (preferred, see `AdminDashboardComponent`) by navigating to a child route.
 * 2. Labels come from `nameEn` / `nameAr` through the `localize` pipe, NOT from
 *    ngx-translate. Put the Arabic string in `nameAr`, not a `NAV.*`-style key.
 *
 * The sliding pill is a `::before` pseudo-element on `.tab-container` whose
 * offset and width are measured imperatively into `--pill-translate` /
 * `--pill-width`. It is re-measured whenever the selection changes (including
 * when the *parent* changes it -- the dashboard drives it from the router), on
 * an RTL/LTR flip, and whenever the strip is resized.
 */
export declare class CustomPillTabsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    tabsList: ITabDropdownOption[];
    /**
     * Colour overrides. Leave them unset -- the stylesheet then falls back to the
     * design tokens from node 64:15952, which is what the design calls for. They
     * exist for the odd consumer that has to deviate.
     */
    color?: string;
    colorSelected?: string;
    backgroundColor?: string;
    backgroundColorSelected?: string;
    borderColor?: string;
    tabTemplates: {
        [key: string]: TemplateRef<any>;
    };
    selectedTab: ITabDropdownOption;
    tabClass: string;
    tabSelected: EventEmitter<ITabDropdownOption>;
    tabContainer: ElementRef<HTMLDivElement>;
    translationService: TranslationService;
    private dirObserver;
    private resizeObserver;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    selectTab(tab: ITabDropdownOption): void;
    /** Measure after the selected tab has re-rendered at its bolder weight. */
    private schedulePillUpdate;
    private updatePillPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPillTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomPillTabsComponent, "custom-pill-tabs", never, { "tabsList": { "alias": "tabsList"; "required": true; }; "color": { "alias": "color"; "required": false; }; "colorSelected": { "alias": "colorSelected"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "backgroundColorSelected": { "alias": "backgroundColorSelected"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; "tabTemplates": { "alias": "tabTemplates"; "required": false; }; "selectedTab": { "alias": "selectedTab"; "required": false; }; "tabClass": { "alias": "tabClass"; "required": false; }; }, { "tabSelected": "tabSelected"; }, never, never, true, never>;
}
