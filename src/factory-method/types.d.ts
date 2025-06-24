export interface Transport {
  deliver(): void;
  load(): void;
}
