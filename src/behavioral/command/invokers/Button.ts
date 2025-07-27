import { Invoker } from './Invoker'

export class Button extends Invoker {
  constructor(command: () => void) {
    super(command)
  }

  click(): void {
    this.command()
  }
}
