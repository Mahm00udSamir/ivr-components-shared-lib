import { SafeUrl } from "@angular/platform-browser";
export interface IAttachment {
    fileName: string;
    mimeType: string;
    base64Content: string;
}
export interface ISmpAttachment {
    base64: string;
    contentType: string;
    fileName: string;
}
export interface ISmpAttachmentFromServer {
    id: string;
    imagePath: string;
}
export interface ISmpAttachmentAfterResolving {
    id: string;
    imagePath: SafeUrl;
}
