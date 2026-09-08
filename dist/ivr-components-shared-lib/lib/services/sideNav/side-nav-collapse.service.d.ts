import * as i0 from "@angular/core";
/**
 * At or below this width the sidenav becomes an off-canvas drawer (with the
 * brand mobile header + hamburger). Aligned with the app content's own
 * single-column breakpoint (the chat master-detail switches at 1024 too), so a
 * narrowed window gets the full "mobile" shell in one step -- the sidebar rail
 * no longer lingers as a column squeezing the content on tablet widths, which
 * is what made panels (e.g. the chat list card) look like they vanished.
 */
export declare const SIDENAV_MOBILE_MAX = 1024;
/**
 * Kept equal to the mobile max: above it the sidenav is the desktop rail, at or
 * below it the drawer takes over, so there is no separate in-between icon-rail
 * band any more.
 */
export declare const SIDENAV_RAIL_MAX = 1024;
/**
 * Responsive collapse / drawer state for the application sidenav.
 *
 * `isCollapsed` means the same thing in both shapes: the sidenav is not showing
 * its full-width rows. Off mobile that is the icon rail; on mobile, where there
 * is no rail, it is the parked drawer -- so opening and closing the drawer
 * updates `isCollapsed` exactly the way the rail toggle does.
 *
 * It starts collapsed, and every resize at any width above the mobile
 * breakpoint collapses it again, so a manual expand never survives a resize.
 * Inside the mobile band it follows the drawer instead, so a resize cannot snap
 * an open drawer shut.
 */
export declare class SidenavService {
    readonly isCollapsed: import("@angular/core").WritableSignal<boolean>;
    readonly hidden: import("@angular/core").WritableSignal<boolean>;
    readonly isMobileView: import("@angular/core").WritableSignal<boolean>;
    /** Last measured band; `null` until the first measurement. */
    private band;
    constructor();
    /** On mobile the drawer is the only thing there is to expand or collapse. */
    toggleCollapsed(): void;
    setCollapsed(collapsed: boolean): void;
    toggleHidden(): void;
    hide(): void;
    show(): void;
    /**
     * The drawer's two states are the mobile band's expanded / collapsed states,
     * so they are written together and never drift apart.
     */
    private setHidden;
    private listenToWindowResize;
    private bandFor;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidenavService>;
}
