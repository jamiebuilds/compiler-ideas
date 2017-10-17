// @flow
import { traverse, match, type ASTNode } from '../src/index';

const traverser = (path, context) => match(path.node, {
  Identifier() {
    context.ids.push(path.node);
  },
});

export function collectIdentifiers(ast: ASTNode) {
  return traverse(ast, traverser, { ids: [] }).ids;
}
