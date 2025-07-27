import { Book, User } from './types'
import { Database } from './Database'
import { Transaction } from './Transaction'

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
]
const books: Book[] = [
  { id: 1, title: '1984', owner: users[0], publishedYear: 1949 },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    owner: users[1],
    publishedYear: 1960
  },
  { id: 3, title: 'The Great Gatsby', owner: users[2], publishedYear: 1925 }
]

const db = new Database()
const transaction = new Transaction(db)

transaction.commit(users, books)
console.log('Initial State:')
console.log('Users:', db.getUsers())
console.log('Books:', db.getBooks())

transaction.rollback()
console.log('After Rollback:')
console.log('Users:', db.getUsers())
console.log('Books:', db.getBooks())
