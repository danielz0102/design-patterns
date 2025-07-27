import { ExportStrategy } from '../types'

export class CSVExport implements ExportStrategy {
  async export(file: File): Promise<void> {
    const content = await file.text()
    const csv = [
      'Field,Value',
      `Filename,"${this.escapeCsv(file.name)}"`,
      `Size,${file.size}`,
      `Last Modified,${file.lastModified}`,
      `Exported At,"${new Date().toISOString()}"`,
      `Format,CSV`,
      `Content,"${this.escapeCsv(content)}"`
    ].join('\n')

    console.log(csv)
  }

  private escapeCsv(text: string): string {
    return text.replace(/"/g, '""')
  }
}
