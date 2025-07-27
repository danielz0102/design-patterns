export abstract class Invoker {
  constructor(protected command: () => void) {}

  setCommand(command: () => void): void {
    this.command = command
  }
}
