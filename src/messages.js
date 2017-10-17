// @flow
export default {
  needsPath: 'Cannot call `reduce(path, context)` without path object',
  needsContext: 'Cannot call `reduce(path, context)` without a context (even if it is `null`)',
  missingReducer: (type: string) => `Missing \`reducers.${type}\``,
};
