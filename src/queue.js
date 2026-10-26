export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = { value: value, next: null };
    
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }
    
    const value = this.head.value;
    this.head = this.head.next;
    
    // Если очередь опустела, обнуляем и хвост
    if (this.head === null) {
      this.tail = null;
    }
    
    return value;
  }

  getUnderlyingList() {
    return this.head;
  }
}