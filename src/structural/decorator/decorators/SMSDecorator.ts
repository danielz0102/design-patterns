import { NotifierDecorator } from "./NotifierDecorator";

export class SMSDecorator extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    this.sendSMS(message);
  }

  private sendSMS(message: string): void {
    console.log(`[SMS]: ${message}`);
  }
}
