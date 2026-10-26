import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement simple stack using array
 */
export default class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (this.stack.length === 0) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }
}
