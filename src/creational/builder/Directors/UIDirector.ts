import { UIBuilder } from '../types'

export class UIDirector {
  constructor(private builder: UIBuilder) {}

  buildWindowsUI() {
    this.builder.reset()

    this.builder
      .setTheme('Windows 11 Dark')
      .setWidgets(['Start Menu', 'Taskbar', 'File Explorer'])
      .setSettings({ oneDrive: true, cortana: false, windowsDefender: true })
      .setLayout('Grid with Taskbar at the bottom')
  }

  buildWebUI() {
    this.builder.reset()

    this.builder
      .setTheme('Light')
      .setWidgets(['<header>', '<main>', '<footer>'])
      .setSettings({
        cookies: true,
        incognito: false,
        adBlocker: true
      })
      .setLayout('Responsive with Flexbox')
  }
}
