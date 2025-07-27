import { DatabaseService } from './types'

export class App {
  constructor(private dbService: DatabaseService) {}

  async getUsers() {
    const result = await this.dbService.query('SELECT * FROM users')
    console.log(result)
  }
}
