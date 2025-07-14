export interface Middleware {
  handle(req: Request): void;
  setNext(middleware: Middleware): Middleware;
}

export type Request = {
  url: string;
  user?: User;
};

export type User = {
  id: string;
  name: string;
  email: string;
};
