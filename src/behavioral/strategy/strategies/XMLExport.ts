import { ExportStrategy } from '../types'

export class XMLExport implements ExportStrategy {
  async export(file: File): Promise<void> {
    const content = await file.text()
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <file>
      <metadata>
        <filename>${this.escapeXml(file.name)}</filename>
        <size>${file.size}</size>
        <lastModified>${file.lastModified}</lastModified>
        <exportedAt>${new Date().toISOString()}</exportedAt>
        <format>XML</format>
      </metadata>
      <content><![CDATA[${content}]]></content>
    </file>`

    console.log(xml)
  }

  private escapeXml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }
}
