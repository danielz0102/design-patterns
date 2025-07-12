import { DatabaseService } from "./types";

export class SQLite implements DatabaseService {
  async query(query: string): Promise<string> {
    console.log(`Executing query: ${query}`);

    await new Promise((resolve) => {
      console.log("The database is busy, please wait...");
      setTimeout(resolve, 2500);
    });

    return "Query successful";
  }
}
