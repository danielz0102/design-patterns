export interface ExportStrategy {
  export(file: File): Promise<void>
}
