import { Request } from "../types";
import { BaseMiddleware } from "./BaseMiddleware";

export class CheckAuth extends BaseMiddleware {
  handle(req: Request): void {
    if (!req.user) {
      return console.error("401 Unauthorized: User not authenticated");
    }

    super.handle(req);
  }
}
