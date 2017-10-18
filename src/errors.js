// @flow
import Path from './Path';

export function buildCodeFrame(path: Path, message: string): string {
  // ...
  return '';
}

export class CompilerError extends Error {
  path: Path | null;

  constructor(
    message: string,
    path: Path | null = null,
  ) {
    if (path) {
      message = buildCodeFrame(path, message);
    }
    super(message);
    this.path = path;
  }
}

export class CompilerSyntaxError extends CompilerError {}
export class CompilerTypeError extends CompilerError {}
