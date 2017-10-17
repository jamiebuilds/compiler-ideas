// @flow
import typeof Path from './Path';

export type ASTNode = Object;

export type Reducer<Context: {}, Result> = (
  path: Path,
  context: Context,
  reduce: (path: Path, context: {}) => Result
) => Result;

export type Reducers<Context: {}, Result> = {
  [type: string]: Reducer<Context, Result>,
};

export type Transformation = Path | ASTNode | null;

export type Transformer<Context: {}> = (
  path: Path,
  context: Context,
) => Transformation;

export type Visitor<Context: {}> = {
  [key: string]: (path: Path, context: Context) => void,
};

export type ParserOptions = {
  // ...
};

export type GeneratorOptions = {
  // ...
};
