export const weakMap = new WeakMap();

export function queryAPI(arg) {
  if (weakMap.get(arg) === undefined) {
    weakMap.set(arg, 1);
    return;
  }
  if (weakMap.get(arg) >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(arg, weakMap.get(arg) + 1);
}
