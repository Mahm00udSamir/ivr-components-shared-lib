import { ConfirmOptions, ConfirmResult } from '../../components';
import * as i0 from "@angular/core";
export declare class ConfirmDialogService {
    private readonly applicationRef;
    private readonly environmentInjector;
    confirm(options: ConfirmOptions): Promise<ConfirmResult>;
    private createHostElement;
    private mountComponent;
    private destroyComponent;
    private setComponentInputs;
    private waitForUserDecision;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmDialogService>;
}
