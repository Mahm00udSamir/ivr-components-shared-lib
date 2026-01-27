import { PERMISSIONS, Roles, UserStatus } from '../../enums/auth/auth.constant';
export interface ILoginData {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    expiresIn: number;
    user: IUserData;
    roles: Roles[];
    permissions: PERMISSIONS[];
}
export interface IValidationData {
    valid: boolean;
    username: string;
    user: IUserData;
    roles: Roles[];
    permissions: PERMISSIONS[];
    rolesDetails: {
        id: number;
        name: Roles;
        nameAr: string;
        description: string;
        descriptionAr: string;
        type: string;
        isActive: boolean;
        createdAt: string;
        updatedAt: string;
    }[];
}
export interface IUserData {
    id: number;
    wso2UserId: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    fullName: string;
    department: string;
    position: string;
    status: UserStatus;
    directReports: string[];
    teams: string[];
    permissions: PERMISSIONS[];
}
export interface ISessionData {
    roles: Roles[];
    permissions: PERMISSIONS[];
    rolesDetails: {
        id: number;
        name: Roles;
        nameAr: string;
        description: string;
        descriptionAr: string;
        type: string;
        isActive: boolean;
        createdAt: string;
        updatedAt: string;
    }[];
}
export interface ILocalData {
    accessToken: string;
    refreshToken: string;
    user: IUserData;
}
