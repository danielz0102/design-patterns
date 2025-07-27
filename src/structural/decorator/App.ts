import { Notifier } from './types'

export class App {
  constructor(private notifier: Notifier) {}

  changePassword(oldPassword: string, newPassword: string): void {
    console.log(`Password changed from ${oldPassword} to ${newPassword}`)
    this.notifier.send('Your password has been changed successfully.')
  }
}
