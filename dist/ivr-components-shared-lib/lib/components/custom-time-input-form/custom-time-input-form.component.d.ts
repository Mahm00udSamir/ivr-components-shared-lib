import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentFormError } from '../../interfaces';
import { CustomTimeBaseComponent } from '../custom-time-input/custom-time-base';
import * as i0 from "@angular/core";
export declare class CustomTimeInputFormComponent extends CustomTimeBaseComponent implements OnInit, OnDestroy, OnChanges {
    parentForm: FormGroup;
    name: string;
    controlName: string;
    label: string;
    labelClass: string;
    inputClass: string;
    validation: IComponentFormError[];
    defaultTime: string;
    rangeMin: string;
    rangeMax: string;
    height: string;
    timeChange: EventEmitter<{
        hour: number;
        minute: number;
    }>;
    private translate;
    dropdownOpen: import("@angular/core").WritableSignal<boolean>;
    ngOnChanges(simple: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    containRequiredError(): boolean;
    toggleDropdown(): void;
    confirmTime(): void;
    setFormValue(hour24?: number, minute?: number): void;
    setExcistValue(): void;
    displayTime(): string | null;
    private isTimeInRange;
    private getTimeInHours;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTimeInputFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomTimeInputFormComponent, "custom-time-input-form", never, { "parentForm": { "alias": "parentForm"; "required": true; }; "name": { "alias": "name"; "required": true; }; "controlName": { "alias": "controlName"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelClass": { "alias": "labelClass"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; "validation": { "alias": "validation"; "required": false; }; "defaultTime": { "alias": "defaultTime"; "required": false; }; "rangeMin": { "alias": "rangeMin"; "required": false; }; "rangeMax": { "alias": "rangeMax"; "required": false; }; "height": { "alias": "height"; "required": false; }; }, { "timeChange": "timeChange"; }, never, never, true, never>;
}
