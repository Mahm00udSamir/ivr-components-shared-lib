import { ToastService } from '../../services/ui/toast.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class CustomToastComponent {
    toastService: ToastService;
    private sanitizer;
    positionClass: string;
    colorClass: string;
    infoSvg: SafeHtml;
    successSvg: SafeHtml;
    warningSvg: SafeHtml;
    errorSvg: SafeHtml;
    closeSvg: SafeHtml;
    constructor(toastService: ToastService, sanitizer: DomSanitizer);
    private updatePositionClass;
    private updateColorClass;
    hideToast(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomToastComponent, "custom-toast", never, {}, {}, never, never, true, never>;
}
