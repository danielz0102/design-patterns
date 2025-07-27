import { Notifier } from './types'

export class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`[EMAIL]: ${message}`)
  }
}
