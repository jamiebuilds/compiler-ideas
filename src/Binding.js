// @flow
import Path from './path';

export default class Binding {
  path: Path;
  references: Array<Path>;
  constructor(path: Path) {
    this.path = path;
    this.references = [];
  }
}
