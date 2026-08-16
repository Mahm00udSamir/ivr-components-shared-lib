export declare enum AuthConstant {
    TOKEN = "accessToken",
    REFRESH_TOKEN = "refreshToken",
    USER_DATA = "user",
    USER_PERMISSIONS = "permissions",
    USER_ROLES = "roles",
    USER_ROLES_DETAILS = "rolesDetails",
    EXPIRES_AT = "expiresIn"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}
export declare enum Roles {
    ROLE_USER = "user",
    ROLE_ADMIN = "admin",
    ROLE_AGENT = "agent"
}
/**
 * Where each role is sent when it opens a route it may not see, and what an
 * app's catch-all route resolves to. Read through
 * `AuthService.getRoleLandingRoute()`, never indexed directly.
 *
 * Mirrors ivr-root-config's `getDefaultHashRoute()` (layout.services.ts) and the
 * first item of each role's menu in ivr-sidenav's `nav-items.service.ts` -- a
 * role lands on the page its own sidebar highlights, so the three must change
 * together.
 */
export declare const ROLE_LANDING_ROUTE: Record<Roles, string>;
export declare enum PERMISSIONS {
    all = "all",
    PERMISSION_READ = "PERMISSION_READ",
    PERMISSION_WRITE = "PERMISSION_WRITE"
}
