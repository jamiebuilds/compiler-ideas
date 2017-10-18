// @flow
import type { ASTNode } from './types';
import Path from './path';

export default async function transform<Context: {}>(
  ast: ASTNode,
  transformer: (
    path: Path,
    context: Context,
  ) => Path | ASTNode | null,
  context: Context,
) {
  let transformed = ast;

  // ...

  return transformed;
}
