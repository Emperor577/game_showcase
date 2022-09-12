export interface ResponseDataModel<T> {
  count: number,
  next: string | null,
  previous: string | null,
  results: T[],
}

