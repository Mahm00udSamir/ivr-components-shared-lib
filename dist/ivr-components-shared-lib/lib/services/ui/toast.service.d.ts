import * as i0 from "@angular/core";
export type ToastType = 'success' | 'warning' | 'black' | 'error' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
export interface ToastItem {
    id: string;
    message: string;
    position: ToastPosition;
    type: ToastType;
    duration: number;
    state: 'entering' | 'shown' | 'leaving';
    createdAt: number;
}
export declare class ToastService {
    message: import("@angular/core").WritableSignal<string>;
    type: import("@angular/core").WritableSignal<ToastType>;
    position: import("@angular/core").WritableSignal<ToastPosition>;
    show: import("@angular/core").WritableSignal<boolean>;
    readonly visibleToasts: import("@angular/core").WritableSignal<ToastItem[]>;
    private readonly maxStackPerPosition;
    private readonly leaveMs;
    toast(message: string, position: ToastPosition, ToastType?: ToastType, duration?: number): void;
    close(id: string): void;
    private normalizeDuration;
    private pushIntoStack;
    private animateEnter;
    private setState;
    private remove;
    showToast(): void;
    hideToast(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
