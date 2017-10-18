// @flow
import type { ASTNode } from './types';

export function buildCodeFrame(ast: ASTNode, node: ASTNode, message: string): string {
  // ...
  return '';
}

export class BabelError extends Error {
  ast: ASTNode | null;
  node: ASTNode | null;

  constructor(
    message: string,
    ast: ASTNode | null = null,
    node: ASTNode | null = null,
  ) {
    if (ast && node) {
      message = buildCodeFrame(ast, node, message);
    }
    super(message);
    this.ast = ast;
    this.node = node;
  }
}

export class BabelSyntaxError extends BabelError {}
export class BabelTypeError extends BabelError {}
