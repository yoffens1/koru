export interface ICloudStorage {
  uploadFile(path: string, data: Blob | Buffer): Promise<string>;
  downloadFile(path: string): Promise<Blob | Buffer>;
  syncDatabase(changes: any): Promise<void>;
}
