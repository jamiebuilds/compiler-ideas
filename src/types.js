// @flow
import Path from './Path';

export type ASTNode = Object;

export type ParserOptions = {
  // ...
};

export type GeneratorOptions = {
  // ...
};

export type Visitor<Context: {}> = (
  path: Path,
  context: Context,
) => Path | ASTNode | null;
