// @flow
import type { ASTNode, Reducer } from './types';
import { BabelTypeError } from './errors';
import Path from './path';
import messages from './messages';

export default function reduce<Context: {}, Result>(
  ast: ASTNode,
  reducer: Reducer<Context, Result>,
  context: Context,
): Result {
  function cb(path, context) {
    if (!(path instanceof Path)) {
      throw new BabelTypeError(ast, path.node, messages.needsPath);
    }

    if (typeof context === 'undefined') {
      throw new BabelTypeError(ast, path.node, messages.needsContext);
    }

    return reducer(path, context, cb);
  }

  let path = new Path(ast, null, null)
  return cb(path, context);
}
