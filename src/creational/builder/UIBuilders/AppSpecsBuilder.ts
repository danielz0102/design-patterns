import { UIBuilder, AppSpecs } from "../types";

export class AppSpecsBuilder implements UIBuilder {
  private appSpecs: AppSpecs;

  constructor() {
    this.reset();
  }

  setTheme(theme: string) {
    this.appSpecs.push({
      title: "Theme",
      content: theme,
    });

    return this;
  }

  setWidgets(widgets: string[]) {
    this.appSpecs.push({
      title: "Widgets",
      content: widgets,
    });

    return this;
  }

  setSettings(settings: Record<string, any>) {
    this.appSpecs.push({
      title: "Settings",
      content: Object.entries(settings).map(
        ([key, value]) => `${key}: ${value}`
      ),
    });

    return this;
  }

  setLayout(layout: string) {
    this.appSpecs.push({
      title: "Layout",
      content: layout,
    });

    return this;
  }

  get(): AppSpecs {
    const specs = this.appSpecs;
    this.reset();
    return specs;
  }

  reset() {
    this.appSpecs = [];
  }
}
