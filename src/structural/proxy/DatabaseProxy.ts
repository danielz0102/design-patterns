import { DatabaseService } from "./types";

export class DatabaseProxy implements DatabaseService {
  private queryCache: Map<string, string> = new Map();

  constructor(private dbService: DatabaseService) {}

  async query(query: string): Promise<string> {
    if (this.queryCache.has(query)) {
      return this.queryCache.get(query);
    }

    const result = await this.dbService.query(query);

    this.queryCache.set(query, result);

    return result;
  }
}
