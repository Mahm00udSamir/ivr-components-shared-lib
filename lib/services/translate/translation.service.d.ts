import * as i0 from "@angular/core";
export declare enum Lang {
    ar = "ar",
    en = "en"
}
export declare class TranslationService {
    rtl: boolean;
    currentLang: import("@angular/core").WritableSignal<"en" | "ar">;
    private translate;
    constructor();
    setDefaultLang(defaultLang?: string): void;
    changeLang(lang: Lang): void;
    switchLanguage(): void;
    private get localStorageLang();
    private set localStorageLang(value);
    private onChangeLang;
    private setDirection;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslationService>;
}
