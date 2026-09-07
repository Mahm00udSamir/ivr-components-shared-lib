import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface IActions {
    label: string;
    icon?: string;
    color?: string;
    active?: boolean;
    callback: (ctx: any) => void;
}
export declare class CustomActionsDropdownComponent {
    private sanitizer;
    private renderer;
    private elRef;
    private translate;
    actions: IActions[];
    context: any;
    horizontalDots: boolean;
    hasActionTemplate: boolean;
    injectedTrigger: boolean;
    expandSide: 'RIGHT' | 'LEFT';
    expandDirection: 'TOP' | 'BOTTOM';
    /**
     * Extra class applied to the popup panel. Needed because openDropdown()
     * portals the panel to document.body, detaching it from the host
     * component's DOM subtree -- so a *consumer's* `:host ::ng-deep
     * .dropdown-menu` rule stops matching the moment the dropdown opens
     * (Angular's emulated encapsulation for ::ng-deep relies on actual DOM
     * ancestry, not template ancestry). Consumers that need to style the
     * popup should pass a globally-scoped class here and put the matching
     * rules in a global stylesheet instead.
     */
    popupClass: string;
    /**
     * Size the popup to exactly match the trigger's rendered width instead of
     * shrink-wrapping its own content (the default -- right for something like
     * a row's small action-icon menu, wrong for a dropdown meant to read as
     * "opens out of this same-width control", e.g. the conversation status
     * dropdown).
     */
    matchTriggerWidth: boolean;
    actionsPopup?: ElementRef<HTMLDivElement>;
    triggerWrapper?: ElementRef<HTMLDivElement>;
    actionDropdownContainer?: ElementRef<HTMLDivElement>;
    triggerTemplate: TemplateRef<any> | null;
    private isAppendedToBody;
    isOpen: import("@angular/core").WritableSignal<boolean>;
    showAnimation: import("@angular/core").WritableSignal<boolean>;
    private readonly repositionHandler;
    constructor(sanitizer: DomSanitizer, renderer: Renderer2, elRef: ElementRef, translate: TranslateService);
    sanitizeSvg(svg: string): SafeHtml;
    isInlineSvg(icon?: string): boolean;
    openDropdown(): void;
    closeDropdown(): void;
    private portalToBody;
    private updatePosition;
    private detachFromBody;
    onClickAction(action: {
        callback: (ctx: any) => void;
    }, event: MouseEvent): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomActionsDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomActionsDropdownComponent, "custom-actions-dropdown", never, { "actions": { "alias": "actions"; "required": false; }; "context": { "alias": "context"; "required": false; }; "horizontalDots": { "alias": "horizontalDots"; "required": false; }; "hasActionTemplate": { "alias": "hasActionTemplate"; "required": false; }; "injectedTrigger": { "alias": "injectedTrigger"; "required": false; }; "expandSide": { "alias": "expandSide"; "required": false; }; "expandDirection": { "alias": "expandDirection"; "required": false; }; "popupClass": { "alias": "popupClass"; "required": false; }; "matchTriggerWidth": { "alias": "matchTriggerWidth"; "required": false; }; }, {}, ["triggerTemplate"], ["*"], true, never>;
}
