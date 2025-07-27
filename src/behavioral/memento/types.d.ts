export interface Memento {
  restore(): void
}

export interface Originator {
  save(): Memento
}

export type User = {
  id: number
  name: string
  email: string
}

export type Book = {
  id: number
  title: string
  owner: User
  publishedYear: number
}
