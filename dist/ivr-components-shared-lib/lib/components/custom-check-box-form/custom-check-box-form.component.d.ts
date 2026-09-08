import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentFormError } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class CustomCheckBoxFormComponent {
    checkboxClass: string;
    componentClass: string;
    labelClass: string;
    label: string;
    name: string;
    controlName: string;
    parentForm: FormGroup;
    validation: IComponentFormError[];
    disabled: boolean;
    valueChange: EventEmitter<boolean>;
    uniqueId: string;
    setUniqueId(): string;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCheckBoxFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCheckBoxFormComponent, "custom-check-box-form", never, { "checkboxClass": { "alias": "checkboxClass"; "required": false; }; "componentClass": { "alias": "componentClass"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": true; }; "controlName": { "alias": "controlName"; "required": true; }; "parentForm": { "alias": "parentForm"; "required": true; }; "validation": { "alias": "validation"; "required": true; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
