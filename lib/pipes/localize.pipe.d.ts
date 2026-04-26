import { PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class LocalizePipe implements PipeTransform {
    private translate;
    constructor(translate: TranslateService);
    transform(value: any, field: string, lang: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LocalizePipe, "localize", true>;
}
