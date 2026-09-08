import { CanActivateFn } from '@angular/router';
/**
 * Route-level role check. Pair it with `authGuard`, which answers the earlier
 * question of whether anyone is signed in at all:
 *
 *   canActivate: [authGuard, RoleGuard],
 *   data: { roles: [Roles.ROLE_ADMIN, Roles.ROLE_AGENT] }
 *
 * A route with no `data.roles` passes for every signed-in role. Roles come from
 * `AuthService.getCurrentAppRole()`, so they are read out of local storage and
 * the check is synchronous -- a deep link on a cold refresh resolves without
 * waiting on `handlePermissionConfig()`.
 *
 * Denial redirects to the role's own landing page (`ROLE_LANDING_ROUTE`) rather
 * than returning false: a blocked deep link should leave the user somewhere
 * their sidebar actually points at, not on a blank outlet.
 *
 * Use `PermissionGuard` instead when the backend issues per-action PERMISSIONS
 * for the page; the two answer different questions and can be stacked.
 */
export declare const RoleGuard: CanActivateFn;
