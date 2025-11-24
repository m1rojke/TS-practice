// Задача 1
function sum(a: number, b: number): number {
  return a + b;
}

// Задача 2
function hello(name: string): string {
  return `Hello ${name}`;
}

// Задача 3
function joinStrings(arr: string[]): string {
  return arr.join(", ");
}

// Задача 4
function showMessage(text: string, author?: string): void {
  console.log(`${text} - ${author || "nameless"}`);
}

// Задача 5
let isEven: (n: number) => boolean;
isEven = (n) => n % 2 === 0;

console.log(
  sum(3, 2),
  hello("Maksim"),
  joinStrings(["Яблоко", "Груша", "Арбуз"]),
  showMessage("Я вернусь!"),
  isEven(2)
);
