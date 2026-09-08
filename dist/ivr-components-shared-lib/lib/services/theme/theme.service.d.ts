import * as i0 from "@angular/core";
export declare enum Theme {
    light = "light",
    dark = "dark"
}
/**
 * Light / dark theme for the whole shell.
 *
 * The palette is already split across `ivr-root-config/src/styles/variables_light.css`
 * (on bare `:root`) and `variables_dark.css` (on `[data-theme="dark"]`), and the shell
 * loads both. Every micro-frontend therefore inherits its colours from one place, so
 * writing the attribute onto `<html>` rethemes sidenav, agent, chat and registration at
 * once -- unlike the language switch, there is nothing to broadcast.
 *
 * Boot is not this service's job: `index.ejs` resolves stored -> OS -> light and writes
 * the attribute before first paint, so waiting for Angular here would flash a white page
 * on every reload in dark mode. This only reads what is already on screen and owns the
 * theme from the first user click onwards.
 */
export declare class ThemeService {
    private readonly _theme;
    readonly theme: import("@angular/core").Signal<Theme>;
    readonly isDark: import("@angular/core").Signal<boolean>;
    setTheme(theme: Theme): void;
    toggleTheme(): void;
    /**
     * The attribute on `<html>` is the source of truth, since it is what the CSS is
     * already painting. Absent -- an app served standalone in dev, outside the shell --
     * means light, which is also what bare `:root` renders.
     */
    private themeOnDocument;
    private store;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
