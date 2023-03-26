export function pickObjectKeys<T extends object, K extends keyof T>({
  obj,
  keys,
}: {
  obj: T;
  keys: K[];
}) {
  let result: Pick<T, K> = {} as any;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
