export interface DatabaseService {
  query(query: string): Promise<string>;
}
