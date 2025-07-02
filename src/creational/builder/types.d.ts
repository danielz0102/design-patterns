export interface UIBuilder {
  reset(): void;
  setTheme(theme: string): UIBuilder;
  setWidgets(widgets: string[]): UIBuilder;
  setSettings(settings: Record<string, any>): UIBuilder;
  setLayout(layout: string): UIBuilder;
}

export type UI = {
  theme?: string;
  widgets?: string[];
  settings?: Record<string, any>;
  layout?: string;
};

type SpecsSection = {
  title: string;
  content: string | string[];
};

export type AppSpecs = SpecsSection[];
