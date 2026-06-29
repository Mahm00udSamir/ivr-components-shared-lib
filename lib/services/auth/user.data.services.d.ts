import { IUserData } from '../../interfaces';
import { StorageService } from './storage.services';
import * as i0 from "@angular/core";
export declare class UserDataService {
    private storageService;
    private userDataSignal;
    readonly userData: import("@angular/core").Signal<IUserData | null>;
    readonly isAuthenticated: import("@angular/core").Signal<boolean>;
    constructor(storageService: StorageService);
    /**
     * Get current user data (synchronous)
     */
    get currentUser(): IUserData | null;
    /**
     * Load user data from cookies via StorageService
     */
    private loadUserData;
    /**
     * Update user data
     * @param data New user data
     */
    updateUserData(data: IUserData): void;
    /**
     * Clear user data
     */
    clearUserData(): void;
    /**
     * Create a computed signal for specific user properties
     * @param selector Function to select the property
     */
    select<T>(selector: (user: IUserData | null) => T): import("@angular/core").Signal<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserDataService>;
}
