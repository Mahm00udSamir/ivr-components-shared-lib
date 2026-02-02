export interface IGlobalAuthResponse<T> {
    success: boolean;
    status: string;
    message: string;
    messageAr: string;
    data: T;
}
export interface IPaginatedGlobalAuthResponse<T> {
    success: boolean;
    status: string;
    message: string;
    messageAr: string;
    data: {
        content: T;
        totalElements: number;
        number: number;
        size: number;
        last: boolean;
    };
}
export interface IGlobalAppsResponse<T> {
    timestamp: string;
    httpStatus: string;
    code: string;
    status: 'SUCCESS' | 'ERROR' | string;
    messageEn: string;
    messageAr: string;
    data: T;
    count: number;
}
export interface IPaginatedGlobalAppsResponse<T> {
    page: number;
    limit: number;
    totalElements: number;
    totalPages: number;
    data: T[];
}
