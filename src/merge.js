// @flow
import type { Visitor } from './types';
import Path from './Path';

export default function merge<Context: {}>(
  ...visitors: Array<Visitor<Context>>
): Visitor<Context> {
  return function mergedVisitor(path: Path, context: Context) {
    for (let visitor of visitors) {
      let result = visitor(path, context);
      if (result !== path) return result;
    }

    return path;
  };
}
