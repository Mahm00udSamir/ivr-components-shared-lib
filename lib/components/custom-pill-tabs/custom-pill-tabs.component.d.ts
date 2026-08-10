import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ITabDropdownOption } from '../../interfaces';
import { TranslationService } from '../../services';
import * as i0 from "@angular/core";
/**
 * Pill-style tab strip -- the segmented-control sibling of `custom-tabs`
 * (which renders a moving underline instead).
 *
 * Ported from the VMS shared library's `custom-pill-tabs`, with `--vms-*`
 * tokens remapped onto the IVR palette in `ivr-root-config/src/styles/variables_light.css`.
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
 * `--pill-width`; a `MutationObserver` on the document's `dir` attribute
 * re-measures on an RTL/LTR flip.
 */
export declare class CustomPillTabsComponent implements OnInit, AfterViewInit, OnDestroy {
    tabsList: ITabDropdownOption[];
    color: string;
    colorSelected: string;
    backgroundColor: string;
    backgroundColorSelected: string;
    tabTemplates: {
        [key: string]: TemplateRef<any>;
    };
    selectedTab: ITabDropdownOption;
    tabClass: string;
    tabSelected: EventEmitter<ITabDropdownOption>;
    tabContainer: ElementRef<HTMLDivElement>;
    translationService: TranslationService;
    private dirObserver;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    selectTab(tab: ITabDropdownOption): void;
    private updatePillPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPillTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomPillTabsComponent, "custom-pill-tabs", never, { "tabsList": { "alias": "tabsList"; "required": true; }; "color": { "alias": "color"; "required": false; }; "colorSelected": { "alias": "colorSelected"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "backgroundColorSelected": { "alias": "backgroundColorSelected"; "required": false; }; "tabTemplates": { "alias": "tabTemplates"; "required": false; }; "selectedTab": { "alias": "selectedTab"; "required": false; }; "tabClass": { "alias": "tabClass"; "required": false; }; }, { "tabSelected": "tabSelected"; }, never, never, true, never>;
}
