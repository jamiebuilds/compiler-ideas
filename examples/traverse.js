// @flow
import { traverse, match, type ASTNode } from '../src/index';

const traverser = (path, context) => match(path.node.type, {
  Identifier() {
    context.ids.push(path.node);
  },
  else() {}
});

export function collectIdentifiers(ast: ASTNode) {
  return traverse(ast, traverser, { ids: [] }).ids;
}
