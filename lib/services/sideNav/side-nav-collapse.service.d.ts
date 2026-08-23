import * as i0 from "@angular/core";
/** At or below this width the sidenav becomes an off-canvas drawer. */
export declare const SIDENAV_MOBILE_MAX = 639;
/** At or below this width the sidenav auto-collapses to an icon rail. */
export declare const SIDENAV_RAIL_MAX = 1024;
/**
 * Responsive collapse / drawer state for the application sidenav.
 *
 * Three bands:
 *   wide   (> 1024)      expanded, always visible
 *   rail   (640 .. 1024) collapsed to icons, always visible
 *   mobile (<= 639)      full-width off-canvas drawer, hidden by default
 *
 * Within a band the user's own choice wins: the band default is applied on the
 * first measurement and then only when the band changes. (An earlier version
 * re-applied it on every resize event, which discarded manual collapses as soon
 * as the window was nudged.)
 */
export declare class SidenavService {
    private readonly _isCollapsed;
    private readonly _hidden;
    private readonly _isMobileView;
    /** Last measured band; `null` until the first measurement. */
    private band;
    /** True when the sidenav is showing icons only. */
    readonly isCollapsed: import("@angular/core").Signal<boolean>;
    /** True when the mobile drawer is closed. Meaningless outside the mobile band. */
    readonly hidden: import("@angular/core").Signal<boolean>;
    /** True when the sidenav is a drawer rather than an in-flow column. */
    readonly isMobileView: import("@angular/core").Signal<boolean>;
    constructor();
    toggleCollapsed(): void;
    setCollapsed(collapsed: boolean): void;
    toggleHidden(): void;
    hide(): void;
    show(): void;
    private listenToWindowResize;
    private bandFor;
    private applyBand;
    /** `null` when nothing was stored, so a fresh session falls back to the band default. */
    private restoreCollapsed;
    private persistCollapsed;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidenavService>;
}
