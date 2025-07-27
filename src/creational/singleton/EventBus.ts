type Callback = (...args: unknown[]) => void

export class EventBus {
  private static instance: EventBus
  private listeners: Map<string, Callback[]> = new Map()

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new EventBus()
    }
    return this.instance
  }

  on(event: string, callback: Callback) {
    if (!this.listeners.has(event)) this.listeners.set(event, [])

    this.listeners.get(event)?.push(callback)
  }

  emit(event: string, ...args: unknown[]) {
    this.listeners.get(event)?.forEach((cb) => cb(...args))
  }
}
