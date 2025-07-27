import { ExportStrategy } from '../types'

export class JSONExport implements ExportStrategy {
  async export(file: File): Promise<void> {
    const content = await file.text()
    const json = {
      filename: file.name,
      size: file.size,
      lastModified: file.lastModified,
      content: content,
      exportedAt: new Date().toISOString(),
      format: 'JSON'
    }

    console.log(JSON.stringify(json, null, 2))
  }
}
