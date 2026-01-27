import { ToastService } from '../../services/ui/toast.service';
import * as i0 from "@angular/core";
export declare class CustomToastComponent {
    toastService: ToastService;
    positionClass: string;
    colorClass: string;
    constructor(toastService: ToastService);
    private updatePositionClass;
    private updateColorClass;
    hideToast(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomToastComponent, "custom-toast", never, {}, {}, never, never, true, never>;
}
