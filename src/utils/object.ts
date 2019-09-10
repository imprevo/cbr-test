export function omit<T, K extends keyof T>(o: T, key: K): Omit<T, K> {
  const { [key]: ignored, ...rest } = o;
  return rest;
}
