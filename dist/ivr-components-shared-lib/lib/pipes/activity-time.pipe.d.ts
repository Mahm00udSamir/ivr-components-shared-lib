import { PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ActivityTimePipe implements PipeTransform {
    private translate;
    constructor(translate: TranslateService);
    transform(value: string | Date, lang?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActivityTimePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ActivityTimePipe, "activityTime", true>;
}
