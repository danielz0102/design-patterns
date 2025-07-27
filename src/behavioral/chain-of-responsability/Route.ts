import { Middleware, Request } from './types'

export class Route {
  private middlewares: Middleware[]

  constructor(...middlewares: Middleware[]) {
    this.middlewares = middlewares

    this.middlewares.forEach((middleware, index) => {
      if (index >= this.middlewares.length - 1) {
        return
      }

      middleware.setNext(this.middlewares[index + 1])
    })
  }

  handle(req: Request): void {
    this.middlewares[0].handle(req)
  }
}
