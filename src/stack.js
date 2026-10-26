import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement simple stack using array
 */
export default class Stack {
  constructor() {
    // Создаем пустой массив для хранения элементов
    this.stack = [];
  }

  push(element) {
    // Добавляем элемент в конец массива
    this.stack.push(element);
  }

  pop() {
    // Удаляем и возвращаем последний элемент
    return this.stack.pop();
  }

  peek() {
    // Возвращаем последний элемент, не удаляя его
    // Если стек пуст, возвращаем undefined
    if (this.stack.length === 0) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }
}