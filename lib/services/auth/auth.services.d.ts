import { StorageService } from './storage.services';
import { IGlobalAuthResponse, ILoginData, IUserData } from '../../interfaces';
import { PERMISSIONS, Roles } from '../../enums';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthBeService } from './auth.be.services';
import { AuthContextService } from './auth-context.service';
import { ToastService } from '../ui/toast.service';
import { Observable } from 'rxjs/internal/Observable';
import * as i0 from "@angular/core";
export declare class AuthService {
    private authContextService;
    private authBeService;
    private router;
    private storageService;
    private toastService;
    Roles: typeof Roles;
    PERMISSIONS: typeof PERMISSIONS;
    constructor(authContextService: AuthContextService, authBeService: AuthBeService, router: Router, storageService: StorageService, toastService: ToastService);
    login(data: {
        username: string;
        password: string;
    }): Observable<IGlobalAuthResponse<ILoginData>>;
    logOutUser(): void;
    logout(): void;
    handleRefreshToken(): void;
    handlePermissionConfig(): void;
    isLoggedIn(): boolean;
    getToken(): string;
    getRefreshToken(): string;
    getCurrentUser(): IUserData;
    getCurrentPermissions(): any[];
    getCurrentRoles(): any[];
    getNormalizedRoleNames(): string[];
    hasAnyCurrentRoleName(targetRoles: Array<Roles | string>): boolean;
    isCurrentAdmin(): boolean;
    isCurrentHelpdeskAgent(): boolean;
    isCurrentUserOrEmployee(): boolean;
    /**
     * The single role bucket this session acts as, resolved from the roles
     * `savePermissionsAndRoles()` puts in local storage (`getCurrentRoles()` reads
     * the signal first, then local storage, then the user cookie -- so this is
     * synchronous and safe to call from a route guard on a cold refresh).
     *
     * The order matters: a session carrying both `admin` and an agent role gets
     * the wider admin access, matching `getCurrentRoleLabel()` and the sidebar.
     */
    getCurrentAppRole(): Roles;
    /** Home page of the current role -- see `ROLE_LANDING_ROUTE`. */
    getRoleLandingRoute(): string;
    /**
     * Role check behind `RoleGuard`. A route that declares no `data.roles` is open
     * to every signed-in role; otherwise the session's bucket must be listed.
     *
     * Separate from `hasCategory()` on purpose: that one answers "does this
     * session hold one of the route's PERMISSIONS", which the backend issues per
     * action. This one answers "is this route part of the role's menu at all".
     */
    hasRouteRole(route: ActivatedRouteSnapshot): boolean;
    getCurrentRoleLabel(fallback?: {
        roleName?: string;
        role?: string;
        userType?: string;
    }): string;
    private normalizeRoleName;
    getCurrentRolesDetails(): any[];
    hasAnyCurrentRole(targetRoles: Roles[]): boolean;
    hasCategory(route: ActivatedRouteSnapshot): boolean;
    canDoAction(action: string[]): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
