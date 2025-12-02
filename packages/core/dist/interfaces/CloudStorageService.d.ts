export interface CloudStorageService {
    /**
     * Authenticate the user with the cloud provider.
     */
    authenticate(): Promise<void>;
    /**
     * Upload a file or data blob to the cloud.
     */
    upload(path: string, data: Blob | string): Promise<string>;
    /**
     * Download a file from the cloud.
     */
    download(path: string): Promise<Blob>;
    /**
     * List files in a directory.
     */
    listFiles(path: string): Promise<string[]>;
    /**
     * Sync local database changes to the cloud (if not using RxDB native sync).
     */
    syncDatabase(localChanges: any): Promise<void>;
}
//# sourceMappingURL=CloudStorageService.d.ts.map