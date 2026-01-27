export interface IDropdownOption {
    id: number | string;
    nameAr: string;
    nameEn: string;
    serialNumber?: string;
    enumValue?: string;
    iconPath?: string;
    latitude?: number;
    longitude?: number;
    status?: StatusType;
}
export interface IUserLookup {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}
export type StatusType = 'ACTIVE' | 'INACTIVE';
export interface ITabDropdownOption extends IDropdownOption {
    disabled: boolean;
}
export interface ListData {
    content: any;
    pageable: Pageable;
    last: boolean;
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    sort: SortObj;
    totalElements: number;
    totalPages: number;
    empty: boolean;
}
export interface Pageable {
    sort: SortObj;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}
export interface SortObj {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
