import { Request } from '../types'
import { BaseMiddleware } from './BaseMiddleware'

export class Log extends BaseMiddleware {
  handle(req: Request): void {
    if (req.user) {
      console.log(`User ${req.user.id} accessed ${req.url}`)
    }

    super.handle(req)
  }
}
