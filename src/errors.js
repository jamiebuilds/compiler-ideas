// @flow
import type { ASTNode } from './types';

export function buildCodeFrame(ast: ASTNode, node: ASTNode, message: string) {
  // ...
}

export class BabelError extends Error {
  ast: ASTNode;
  node: ASTNode;
  constructor(ast: ASTNode, node: ASTNode, message: string) {
    super(buildCodeFrame(ast, node, message));
    this.ast = ast;
    this.node = node;
  }
}

export class BabelSyntaxError extends BabelError {}
export class BabelTypeError extends BabelError {}
