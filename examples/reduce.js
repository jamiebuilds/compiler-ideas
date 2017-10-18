// @flow
import { reduce, match, BabelTypeError, Path } from '../src/index';

const reducer = (path, context, reduce) => match(path.node.type, {
  Program() {
    let results = [];

    for (let item of path.getArray('body')) {
      if (path.node.type === 'ExportNamedDeclaration' || path.node.type === 'ExportDefaultDeclaration') {
        results = results.concat(reduce(item, context));
      }
    }

    results;
  },

  ExportNamedDeclaration() {
    // ...
  },

  ExportDefaultDeclaration() {
    // ...
  },
});

export default function getExports(path: Path, context: {}) {
  return reduce(path, reducer, context);
}
