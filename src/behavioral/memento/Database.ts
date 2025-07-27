import { DBBackup } from './DBBackup'
import { Book, Memento, Originator, User } from './types'

export class Database implements Originator {
  private users: User[] = []
  private books: Book[] = []

  setUsers(users: User[]): void {
    this.users = users
  }

  setBooks(books: Book[]): void {
    this.books = books
  }

  getUsers(): User[] {
    return this.users
  }

  getBooks(): Book[] {
    return this.books
  }

  save(): Memento {
    return new DBBackup(this, this.users, this.books)
  }
}
