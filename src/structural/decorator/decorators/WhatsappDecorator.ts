import { NotifierDecorator } from "./NotifierDecorator";

export class WhatsappDecorator extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    this.sendWhatsapp(message);
  }

  private sendWhatsapp(message: string): void {
    console.log(`[WhatsApp]: ${message}`);
  }
}
