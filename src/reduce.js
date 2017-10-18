// @flow
import type { ASTNode } from './types';
import { BabelTypeError } from './errors';
import Path from './path';
import messages from './messages';

export default function reduce<Context: {}, Result>(
  ast: ASTNode,
  reducer: (
    path: Path,
    context: $Shape<Context>,
    reduce: (path: Path, context: $Shape<Context>) => Result,
  ) => Result,
  context: Context,
): Result {
  function cb(path: Path, context: $Shape<Context>) {
    if (!(path instanceof Path)) {
      throw new BabelTypeError(messages.needsPath, ast, path.node);
    }

    if (typeof context === 'undefined') {
      throw new BabelTypeError(messages.needsContext, ast, path.node);
    }

    return reducer(path, context, cb);
  }

  let path = new Path(ast, null, null)
  return cb(path, context);
}
