export declare function toDate(input: string | Date | null | undefined): Date | null;
export declare function formatAbsolute(date: Date, locale?: string): string;
/**
 * show "ago" for < 1 month, otherwise absolute
 */
export declare function formatActivityTime(input: string | Date, lang?: string, opts?: {
    now?: Date;
    activeNowSeconds?: number;
    locale?: string;
}): string;
