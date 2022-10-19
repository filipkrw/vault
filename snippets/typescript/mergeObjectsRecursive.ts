export function mergeObjectsRecursive(
  a: Record<string, unknown>,
  b: Record<string, unknown>
): Record<string, unknown> {
  return Object.entries(b).reduce((acc, [k, v]) => {
    if (isObject(v)) {
      return {
        ...acc,
        [k]: isArray(v)
          ? v // Arrays are replaced
          : mergeObjectsRecursive(
              acc[k] as Record<string, unknown>,
              v as Record<string, unknown>
            ),
      };
    }
    return { ...acc, [k]: v };
  }, a);
}

function isObject(variable: unknown) {
  return typeof variable === "object" && variable !== null;
}

function isObjectEmpty(obj: Record<string, unknown>) {
  return (
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

function isArray(variable: unknown) {
  return Array.isArray(variable);
}

