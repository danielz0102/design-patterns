import "dotenv/config";

export const WHATSAPP_ACTIVE = process.env.WHATSAPP_ACTIVE === "true";
export const SLACK_ACTIVE = process.env.SLACK_ACTIVE === "true";
export const SMS_ACTIVE = process.env.SMS_ACTIVE === "true";
