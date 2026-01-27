import * as i0 from "@angular/core";
type StatusKey = 'paid' | 'not_paid' | 'active' | 'inactive' | 'canceled' | 'deleted' | 'open' | 'inprogress' | 'closed' | 'running' | 'upcoming' | 'default' | 'past';
interface StyleDef {
    color: string;
    bg?: string;
    border?: string;
    label: string;
}
export declare class CustomStatusLabelComponent {
    status: string;
    uppercase: boolean;
    extraText: string;
    private normalize;
    get key(): StatusKey;
    get s(): StyleDef;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomStatusLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomStatusLabelComponent, "custom-status-label", never, { "status": { "alias": "status"; "required": true; }; "uppercase": { "alias": "uppercase"; "required": false; }; "extraText": { "alias": "extraText"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
