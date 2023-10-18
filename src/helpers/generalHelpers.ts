export function isNotEmptyProperty<T>(
  value: number | string | boolean | T
): boolean {
  if (
    value !== undefined &&
    ((typeof value === 'number' && value !== 0) ||
      (typeof value === 'string' && value !== '') ||
      (Array.isArray(value) && value.length !== 0) ||
      typeof value === 'boolean')
  ) {
    return true;
  }
  return false;
}