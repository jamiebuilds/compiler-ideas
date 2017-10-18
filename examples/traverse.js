// @flow
import { traverse, match, Path } from '../src/index';

const traverser = (path, context) => match(path.node.type, {
  Identifier() {
    context.ids.push(path.node);
    return path;
  },
  else() {
    return path;
  }
});

export function collectIdentifiers(path: Path) {
  return traverse(path, traverser, { ids: [] }).ids;
}
