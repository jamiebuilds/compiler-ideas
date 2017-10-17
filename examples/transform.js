// @flow
import { transform, match, type ASTNode } from '../src/index';

const transformer = (path, context) => match(path.node, {
  Identifier() {
    let name = path.node.name.split('').reverse().join('');
    return { ...path.node, name };
  },

  else() {
    return path;
  },
});

export default function reverseIdentifiers(ast: ASTNode) {
  return transform(ast, transformer, {});
}
