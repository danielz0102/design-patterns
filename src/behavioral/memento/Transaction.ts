import { Database } from "./Database";
import { Book, Memento, User } from "./types";

export class Transaction {
  private backup: Memento | null = null;

  constructor(private db: Database) {}

  commit(users: User[], books: Book[]): void {
    this.backup = this.db.save();
    this.db.setUsers(users);
    this.db.setBooks(books);
  }

  rollback(): void {
    if (this.backup) {
      this.backup.restore();
    }
  }
}
