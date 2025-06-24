export interface Transport {
  deliver(): Promise<void>;
  load(): Promise<void>;
}
