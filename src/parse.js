// @flow
import type { ParserOptions, ASTNode } from './types';
import { CompilerSyntaxError, CompilerTypeError } from './errors';

export default function parse(code: string, opts: ParserOptions): ASTNode {
  // ...
  return {
    type: 'File',
    code: '',
    filename: '',
    opts,
    program: {
      type: 'Program',
      body: [],
    },
  };
}
