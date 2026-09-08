import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentFormError } from '../../interfaces';
import * as i0 from "@angular/core";
export declare abstract class CustomInputBase {
    class: string;
    labelClass: string;
    label: string;
    placeholder: string;
    name: string;
    type: 'text' | 'email' | 'password' | 'number';
    controlName: string;
    parentForm: FormGroup;
    validation: IComponentFormError[];
    pattern: string;
    height: string;
    disabled: boolean;
    borderRadius: string;
    containerClass: string;
    valueChange: EventEmitter<string>;
    containRequiredError(): boolean;
    ngOnInit(): void;
    /** IVR-only: emits the raw input value on every keystroke. */
    emitValue(event: Event): void;
    getMaxLength(): number | null;
    getMinLength(): number | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomInputBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomInputBase, never, never, { "class": { "alias": "class"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "name": { "alias": "name"; "required": true; }; "type": { "alias": "type"; "required": false; }; "controlName": { "alias": "controlName"; "required": true; }; "parentForm": { "alias": "parentForm"; "required": true; }; "validation": { "alias": "validation"; "required": true; }; "pattern": { "alias": "pattern"; "required": false; }; "height": { "alias": "height"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "containerClass": { "alias": "containerClass"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
