// Задача 1
function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}
const lastNumber = getLastElement<number>([1, 2, 3]);
console.log(lastNumber);

// Задача 2
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Задача 3
function filterByType<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

// Задача 4
interface Pair<T, U> {
  getPair(): [T, U];
}

class PairImpl<T, U> implements Pair<T, U> {
  private first: T;
  private second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  getPair(): [T, U] {
    return [this.first, this.second];
  }
}

// Задача 5
function merge<T extends object>(obj1: T, obj2: T): T {
  return { ...obj1, ...obj2 };
}
