import { Notifier } from '../types'

export class NotifierDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): void {
    this.notifier.send(message)
  }
}
