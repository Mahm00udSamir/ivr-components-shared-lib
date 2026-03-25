import { EventEmitter } from '@angular/core';
import { CustomFileUploadComponent } from '../custom-file-upload/custom-file-upload.component';
import { ISmpAttachmentAfterResolving } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class CustomSmpFileUploadComponent extends CustomFileUploadComponent {
    editMode: boolean;
    existingItems: ISmpAttachmentAfterResolving[];
    removedExistingIds: EventEmitter<string[]>;
    private removedExisting;
    isEditMode(): boolean;
    existingPreviewSrc(item: ISmpAttachmentAfterResolving): any;
    removeExistingAt(index: number): void;
    private emitRemovedExisting;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSmpFileUploadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSmpFileUploadComponent, "custom-smp-file-upload", never, { "editMode": { "alias": "editMode"; "required": false; }; "existingItems": { "alias": "existingItems"; "required": false; }; }, { "removedExistingIds": "removedExistingIds"; }, never, never, true, never>;
}
