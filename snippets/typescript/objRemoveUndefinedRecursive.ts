export function objRemoveUndefinedRecursive(
  obj: Record<string, unknown>
): Record<string, unknown> {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (isObject(v)) {
      const vNoUndefined = objRemoveUndefinedRecursive(
        v as Record<string, unknown>
      );
      return !isObjectEmpty(vNoUndefined) //
        ? { ...acc, [k]: vNoUndefined }
        : acc;
    }
    return v !== undefined //
      ? { ...acc, [k]: v }
      : acc;
  }, {});
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
