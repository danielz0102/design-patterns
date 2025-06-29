import { UIBuilder, UI } from "../types";

export class GenericUIBuilder implements UIBuilder {
  private ui: UI;

  constructor() {
    this.reset();
  }

  setTheme(theme: string) {
    this.ui.theme = theme;
    return this;
  }

  setWidgets(widgets: string[]) {
    this.ui.widgets = widgets;
    return this;
  }

  setSettings(settings: Record<string, any>) {
    this.ui.settings = settings;
    return this;
  }

  setLayout(layout: string) {
    this.ui.layout = layout;
    return this;
  }

  get() {
    const ui = this.ui;
    this.reset();
    return ui;
  }

  reset() {
    this.ui = {};
  }
}
