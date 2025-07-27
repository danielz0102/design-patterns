export interface UIBuilder {
  reset(): void
  setTheme(theme: string): UIBuilder
  setWidgets(widgets: string[]): UIBuilder
  setSettings(settings: Record<string, unknown>): UIBuilder
  setLayout(layout: string): UIBuilder
}

export type UI = {
  theme?: string
  widgets?: string[]
  settings?: Record<string, unknown>
  layout?: string
}

type SpecsSection = {
  title: string
  content: string | string[]
}

export type AppSpecs = SpecsSection[]
