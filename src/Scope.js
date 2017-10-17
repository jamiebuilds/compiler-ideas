// @flow
import Path from './Path';
import Binding from './Binding';
import traverse from './traverse';

export default class Scope {
  bindings: Array<Binding>;
  constructor(path: Path) {
    this.bindings = [];
  }
}
