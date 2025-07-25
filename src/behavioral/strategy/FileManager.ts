import { ExportStrategy } from "./types";

export class FileManager {
  private exportStrategy: ExportStrategy;
  private file: File | null = null;

  constructor(exportStrategy: ExportStrategy) {
    this.exportStrategy = exportStrategy;
  }

  setExportStrategy(exportStrategy: ExportStrategy): void {
    this.exportStrategy = exportStrategy;
  }

  create(content: string, filename: string): void {
    const blob = new Blob([content], { type: "text/plain" });
    this.file = new File([blob], filename, { type: "text/plain" });
  }

  async export(): Promise<void> {
    if (!this.file) throw new Error("No file created");

    await this.exportStrategy.export(this.file);
  }
}
