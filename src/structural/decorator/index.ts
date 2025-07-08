import { EmailNotifier } from "./EmailNotifier";

import { SlackDecorator } from "./decorators/SlackDecorator";
import { SMSDecorator } from "./decorators/SMSDecorator";
import { WhatsappDecorator } from "./decorators/WhatsappDecorator";

import { WHATSAPP_ACTIVE, SLACK_ACTIVE, SMS_ACTIVE } from "./config";
import { App } from "./App";

const notifier = (() => {
  let baseNotifier = new EmailNotifier();

  if (SLACK_ACTIVE) {
    baseNotifier = new SlackDecorator(baseNotifier);
  }

  if (SMS_ACTIVE) {
    baseNotifier = new SMSDecorator(baseNotifier);
  }

  if (WHATSAPP_ACTIVE) {
    baseNotifier = new WhatsappDecorator(baseNotifier);
  }

  return baseNotifier;
})();

const app = new App(notifier);
app.changePassword("oldPassword123", "newPassword456");
