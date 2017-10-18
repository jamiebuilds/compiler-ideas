// @flow
import Path from './Path';

export function buildCodeFrame(path: Path, message: string): string {
  // ...
  return '';
}

export class BabelError extends Error {
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

export class BabelSyntaxError extends BabelError {}
export class BabelTypeError extends BabelError {}
