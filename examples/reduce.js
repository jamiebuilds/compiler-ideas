// @flow
import { reduce, match, type ASTNode, BabelTypeError, Path } from '../src/index';

const reducer = (path, context, reduce) => match(path.node.type, {
  Program() {
    let results = [];

    for (let item of path.getArray('body')) {
      if (path.type === 'ExportNamedDeclaration' || path.type === 'ExportDefaultDeclaration') {
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

export default function getExports(ast: ASTNode) {
  return reduce(ast, reducer, { ast });
}
