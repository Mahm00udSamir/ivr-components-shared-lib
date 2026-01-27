import { ToastItem, ToastPosition } from '../../services';
import * as i0 from "@angular/core";
export declare class CustomToastViewportComponent {
    private toast;
    positions: ToastPosition[];
    toastsBy(pos: ToastPosition): ReadonlyArray<ToastItem>;
    posClass(pos: ToastPosition): "toast-top-right" | "toast-top-left" | "toast-bottom-right" | "toast-bottom-left" | "toast-top-center" | "toast-bottom-center";
    close(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomToastViewportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomToastViewportComponent, "custom-toast-viewport", never, {}, {}, never, never, true, never>;
}
