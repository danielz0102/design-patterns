import { Request } from '../types'
import { BaseMiddleware } from './BaseMiddleware'

const posts = [
  {
    id: 1,
    title: 'How to authenticate with JWT',
    content: 'JWT authentication is a popular method for securing APIs...'
  },
  {
    id: 2,
    title: 'Understanding TypeScript Generics',
    content:
      'TypeScript generics provide a way to create reusable components...'
  },
  {
    id: 3,
    title: 'A Guide to Node.js Middleware',
    content:
      "Node.js middleware functions are functions that have access to the request object, the response object, and the next middleware function in the application's request-response cycle."
  }
]

export class GetPosts extends BaseMiddleware {
  handle(req: Request): void {
    console.log(posts)
    super.handle(req)
  }
}
