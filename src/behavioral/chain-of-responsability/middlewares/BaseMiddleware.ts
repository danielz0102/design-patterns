import { Middleware, Request } from '../types'

export abstract class BaseMiddleware implements Middleware {
  private nextMiddleware: Middleware | null = null

  handle(req: Request): void {
    if (this.nextMiddleware) {
      this.nextMiddleware.handle(req)
    }
  }

  setNext(middleware: Middleware): Middleware {
    this.nextMiddleware = middleware

    return this.nextMiddleware
  }
}
