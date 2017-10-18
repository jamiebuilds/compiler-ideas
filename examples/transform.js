// @flow
import { transform, match, Path } from '../src/index';

const transformer = (path, context) => match(path.node.type, {
  Identifier() {
    let name = path.node.name.split('').reverse().join('');
    // Replace
    return { ...path.node, name };
  },

  else() {
    // Don't touch
    return path;
  },
});

export default function reverseIdentifiers(path: Path, context: {}) {
  return transform(path, transformer, context);
}
