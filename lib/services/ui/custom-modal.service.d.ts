import { ComponentRef, Type, InjectionToken } from '@angular/core';
import { CustomModalComponent } from '../../components';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface ModalRefApi<T = unknown> {
    close: (result?: T) => void;
}
export declare const MODAL_REF: InjectionToken<ModalRefApi<unknown>>;
export declare function injectModalRef<T = unknown>(): ModalRefApi<T>;
export interface ModalOpenOptions<TInputs = unknown> {
    title?: string;
    iconSrc?: string;
    overlayClickClose?: boolean;
    showHeader?: boolean;
}
export interface ModalRef<TChild> {
    modalComponentRef: ComponentRef<CustomModalComponent>;
    childComponentRef: ComponentRef<TChild>;
    close: () => void;
    afterClosed: Promise<void>;
}
export declare class CustomModalService {
    private translate;
    private readonly applicationRef;
    private readonly environmentInjector;
    /** Open any component inside the modal (child must be standalone or resolvable). */
    constructor(translate: TranslateService);
    openComponentInModal<TChild, TInputs = unknown>(childComponent: Type<TChild>, options?: ModalOpenOptions<TInputs>): Promise<ModalRef<TChild>>;
    private createHostElement;
    private createModal;
    private destroyModal;
    private applyModalInputs;
    private waitForClose;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomModalService>;
}
