import { Request } from './types'

import { CheckAuth } from './middlewares/CheckAuth'
import { GetPosts } from './middlewares/GetPosts'
import { Log } from './middlewares/Log'

import { Route } from './Route'

const request: Request = {
  url: '/posts',
  user: {
    id: '123',
    name: 'John Doe',
    email: 'john.doe@gmail.com'
  }
}

const requestWithoutUser: Request = {
  url: '/posts'
}

const checkAuth = new CheckAuth()
const getPosts = new GetPosts()
const log = new Log()

const getPostsEndpoint = new Route(checkAuth, getPosts, log)

getPostsEndpoint.handle(request)
getPostsEndpoint.handle(requestWithoutUser)
