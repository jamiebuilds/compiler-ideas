// @flow

/**
 * These are messages used for errors/warnings/etc.
 */
export default {
  needsPath: 'Cannot call `reduce(path, context)` without path object',
  needsContext: 'Cannot call `reduce(path, context)` without a context (even if it is `null`)',
  pathGetOnArray: 'Called path.get() to retrieve an array value, should call path.getArray()',
  calledGetArrayOnNonArray: 'Called Path#getArray to get a non-array value',
  missingMatchMethod: (nodeType: string) => `Tried to match nodeType "${nodeType}", but no ${nodeType}() or else() method provided`,
};
