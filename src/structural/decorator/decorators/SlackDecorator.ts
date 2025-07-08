import { NotifierDecorator } from "./NotifierDecorator";

export class SlackDecorator extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    this.sendSlack(message);
  }

  private sendSlack(message: string): void {
    console.log(`[Slack]: ${message}`);
  }
}
