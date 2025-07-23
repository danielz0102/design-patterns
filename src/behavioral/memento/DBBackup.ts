import { Database } from "./Database";
import { Book, Memento, User } from "./types";

export class DBBackup implements Memento {
  constructor(
    private db: Database,
    private users: User[],
    private books: Book[]
  ) {}

  restore(): void {
    this.db.setUsers(this.users);
    this.db.setBooks(this.books);
  }
}
