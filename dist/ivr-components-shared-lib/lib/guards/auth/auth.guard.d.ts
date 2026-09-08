import { CanActivateFn } from '@angular/router';
/**
 * Is anyone signed in? Put it first in `canActivate`, ahead of `RoleGuard` --
 * asking which role a session has is only meaningful once there is a session.
 */
export declare const authGuard: CanActivateFn;
