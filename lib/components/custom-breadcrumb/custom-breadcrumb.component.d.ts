import { EventEmitter, TemplateRef } from '@angular/core';
import { IBreadcrumb } from '../../interfaces/components/breadcrumb.interface';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class CustomBreadcrumbComponent {
    private router;
    actionsTemplate?: TemplateRef<unknown>;
    breadcrumbItems: Array<IBreadcrumb>;
    saveBtnLabel: string;
    cancelBtnLabel: string;
    saveBtnDisabled: boolean;
    saveBtnClicked: EventEmitter<void>;
    cancelBtnClicked: EventEmitter<void>;
    breadcrumbItemClicked: (item: IBreadcrumb) => void;
    constructor(router: Router);
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomBreadcrumbComponent, "custom-breadcrumb", never, { "actionsTemplate": { "alias": "actionsTemplate"; "required": false; }; "breadcrumbItems": { "alias": "breadcrumbItems"; "required": true; }; "saveBtnLabel": { "alias": "saveBtnLabel"; "required": false; }; "cancelBtnLabel": { "alias": "cancelBtnLabel"; "required": false; }; "saveBtnDisabled": { "alias": "saveBtnDisabled"; "required": false; }; }, { "saveBtnClicked": "saveBtnClicked"; "cancelBtnClicked": "cancelBtnClicked"; "breadcrumbItemClicked": "breadcrumbItemClicked"; }, never, never, true, never>;
}
