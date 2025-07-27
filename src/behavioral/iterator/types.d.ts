export interface Iterator<T> {
  getNext(): T
  hasMore(): boolean
  reset(): void
}
