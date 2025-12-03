# Домашние задания по TypeScript

## Описание

Этот репозиторий содержит мои практические работы по изучению TypeScript и Vue.

## Список работ

## TypeScript

### День 1: Типы данных и переменные

- базовые типы
- функции
- основы синтаксиса TS

### День 2: Функции и их типизация

- продвинутые типы
- тернарный оператор
- функции с необязательными параметрами

### День 3: Интерфейсы и типы

- создание интерфейсов(interface) и типов(type)
- Опциональные свойства (?)
- методы в интерфейсе
- Union типы
- расширение интерфейсов через extends

### День 4: Классы и ООП

- создание классов и конструкторы
- модификаторы доступа (public, private, protected)
- наследование через extends
- переопределение методов
- использование super для вызова методов родителя
- геттеры и сеттеры

### День 5: Generics (Обобщения)

- функции с generic параметрами
- generic классы
- generic интерфейсы
- constraints (ограничения на типы)
- несколько generic параметров
- union и intersection с generics

### День 6: Union, Intersection, Type Guards

- union типы (|) углубление
- intersection типы (&)
- type guards через typeof
- type guards через instanceof
- discriminated union (паттерн с type switch)
- custom type guard функции value is Type
- readonly модификатор

### День 7: Utility типы и Mapped Types

- Partial<T> — все свойства необязательные (?)
- Required<T> — все свойства обязательные (убрать ?)
- Pick<T, K> — выбрать конкретные свойства
- Omit<T, K> — исключить конкретные свойства
- Record<K, T> — создать объект с определёнными ключами
- Readonly<T> — сделать все свойства readonly (только для чтения)
- keyof T — получить все ключи типа
- Mapped Types — создать свой трансформатор типов

## Запуск примеров

- tsc day1_practice.ts // Создаст day1_practice.js
- node day1_practice.js // Запустит код

# TypeScript для чайников — Полный гайд

## Что такое TypeScript?

**TypeScript — это JavaScript, но с типами.**

Представь:

- **JavaScript** — это как писать записку без правил. Ты можешь написать что угодно.
- **TypeScript** — это как писать с корректором. Он проверяет, что ты пишешь, и говорит "стоп, это ошибка!"

```javascript
// JavaScript — ошибка найдётся только когда ты запустишь код
let age = 25;
age = "двадцать пять"; // Браузер взорвётся!

// TypeScript — ошибка видна ещё до запуска
let age: number = 25;
age = "двадцать пять"; // ❌ ОШИБКА! TypeScript это видит сразу!
```

---

## Основная идея: ТИПЫ

Тип — это **обещание, какого вида данные здесь хранятся**.

```typescript
let name: string = "Максим"; // Только текст!
let age: number = 30; // Только цифры!
let isStudent: boolean = false; // Только true/false!
```

---

## День 1-2: Базовые типы и функции

### Примитивные типы (базовые блоки)

```typescript
// СТРОКА (текст)
let firstName: string = "Максим";
let city: string = "Санкт-Петербург";

// ЧИСЛО
let age: number = 30;
let price: number = 99.99;

// БУЛЕВО (истина/ложь)
let isActive: boolean = true;
let hasJob: boolean = true;

// МАССИВ (список)
let skills: string[] = ["JavaScript", "TypeScript", "React"];
let numbers: number[] = [1, 2, 3, 4, 5];

// ЛЮБОЙ (когда не знаешь что будет — избегай!)
let anything: any = 42; // Плохая практика!
```

### Функции (инструкции что-то делать)

```typescript
// Функция с типами параметров и результата
function add(a: number, b: number): number {
  return a + b;
}

add(5, 3); // ✅ 8
// add(5, "три");  // ❌ Ошибка! "три" не число

// Функция без результата (void = ничего не возвращает)
function sayHello(name: string): void {
  console.log(`Привет, ${name}!`);
}

// Опциональный параметр (может быть, а может нет)
function greet(name: string, age?: number): void {
  if (age) {
    console.log(`${name}, ${age} лет`);
  } else {
    console.log(`Привет, ${name}!`);
  }
}

greet("Максим"); // ✅ OK
greet("Максим", 30); // ✅ OK
```

---

## День 3: Интерфейсы и типы (описание структуры)

### Что такое интерфейс?

**Интерфейс — это договор, что объект должен иметь ВОТ ЭТИ свойства.**

```typescript
// Я говорю: "Объект User ДОЛЖЕН иметь name, age и email"
interface User {
  name: string;
  age: number;
  email: string;
}

// Этот объект подходит — есть все свойства
const user: User = {
  name: "Максим",
  age: 30,
  email: "maksim@example.com",
};

// Этот НЕ подходит — не хватает email
// const badUser: User = { name: "Максим", age: 30 }; // ❌ Ошибка!
```

### Тип (type) — почти то же самое, но гибче

```typescript
// type и interface похожи, но type может делать больше
type Car = {
  brand: string;
  model: string;
  year: number;
};

const myCar: Car = {
  brand: "BMW",
  model: "X5",
  year: 2020,
};
```

### Опциональные свойства (? = не обязательно)

```typescript
interface Product {
  name: string;
  price: number;
  description?: string; // Может быть, а может нет
}

const product1: Product = {
  name: "Ноутбук",
  price: 1500,
}; // ✅ OK, description не обязателен

const product2: Product = {
  name: "Мышка",
  price: 50,
  description: "Беспроводная",
}; // ✅ OK
```

### Union типы (выбор из вариантов)

```typescript
// Значение может быть ИЛИ строка, ИЛИ число
type StatusCode = string | number;

let code1: StatusCode = "success"; // ✅ OK
let code2: StatusCode = 200; // ✅ OK
// let code3: StatusCode = true;    // ❌ Ошибка! boolean не подходит

// Union для реальных объектов
type Response = SuccessResponse | ErrorResponse;

type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};
```

### Расширение интерфейсов (наследование)

```typescript
// Базовый интерфейс
interface Animal {
  name: string;
  age: number;
}

// Новый интерфейс наследует свойства Animal и добавляет свои
interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Шарик",
  age: 5,
  breed: "Лабрадор",
};
```

---

## День 4: Классы и ООП (объектно-ориентированное программирование)

### Что такое класс?

**Класс — это чертёж для создания объектов.**

```typescript
// Чертёж "Автомобиль"
class Car {
  brand: string;
  model: string;
  year: number;

  // Конструктор — функция, которая создаёт объект
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Метод — действие, которое может делать объект
  getInfo(): string {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

// Создаём конкретный автомобиль по чертежу
const myCar = new Car("BMW", "X5", 2020);
console.log(myCar.getInfo()); // "BMW X5 (2020)"
```

### Модификаторы доступа (кто может трогать?)

```typescript
class BankAccount {
  public balance: number; // Все могут видеть и менять
  private password: string; // Только класс может видеть и менять
  protected accountNumber: string; // Класс и его "дети" могут видеть

  constructor(balance: number, password: string) {
    this.balance = balance;
    this.password = password;
  }

  // Публичный метод — все могут вызвать
  public deposit(amount: number): void {
    this.balance += amount;
  }

  // Приватный метод — только класс может вызвать
  private checkPassword(pwd: string): boolean {
    return pwd === this.password;
  }
}

const account = new BankAccount(1000, "secret");
account.deposit(500); // ✅ OK
console.log(account.balance); // ✅ OK
// account.checkPassword("secret"); // ❌ Ошибка! приватный метод
```

### Наследование (один класс "копирует" другой)

```typescript
// Родительский класс
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} издаёт звук`);
  }
}

// Дочерний класс наследует Animal
class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} лает: Гав!`);
  }
}

const dog = new Dog("Шарик");
dog.speak(); // "Шарик лает: Гав!"
```

### super — вызвать метод родителя

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Вызываем конструктор родителя
    this.breed = breed;
  }
}

const dog = new Dog("Шарик", "Лабрадор");
```

---

## День 5: Generics (универсальные типы)

### Что такое Generic?

**Generic — это "тип-переменная" которая может быть любым типом.**

Представь, ты пишешь функцию, которая работает с массивом. Массив может быть из чисел, строк, объектов — неважно какой!

```typescript
// Без generic (неудобно)
function getFirst(arr: any[]): any {
  return arr[0]; // Мы потеряли информацию о типе!
}

const num = getFirst([1, 2, 3]); // num имеет тип any, TypeScript не поможет

// С generic (удобно!)
function getFirst<T>(arr: T[]): T {
  return arr[0]; // T — это "любой тип"
}

const num = getFirst<number>([1, 2, 3]); // TypeScript знает, что это number
const str = getFirst<string>(["a", "b"]); // TypeScript знает, что это string
```

### Generic классы

```typescript
// Коробка может хранить ЧТО УГОДНО
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello");
const stringValue = stringBox.getValue(); // TypeScript знает — это string!
```

### Constraints (ограничения)

```typescript
// T может быть ТОЛЬКО объект с свойством length
function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

printLength("Hello"); // ✅ OK (у строк есть length)
printLength([1, 2, 3]); // ✅ OK (у массивов есть length)
// printLength(42);          // ❌ Ошибка! У чисел нет length
```

---

## День 6: Union, Intersection, Type Guards

### Union (ИЛИ)

```typescript
// Значение может быть ИЛИ число, ИЛИ строка
let value: number | string;

value = 42; // ✅ OK
value = "hello"; // ✅ OK
// value = true;    // ❌ Ошибка!
```

### Intersection (И)

```typescript
// Объект ДОЛЖЕН быть И Name, И Age одновременно
type Name = { firstName: string; lastName: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = {
  firstName: "Максим",
  lastName: "Миров",
  age: 30,
};
// Все три свойства обязательны!
```

### Type Guard (проверка типа)

```typescript
function process(value: string | number): void {
  // Проверяем какой тип перед использованием
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // value — точно string
  } else {
    console.log(value * 2); // value — точно number
  }
}

// Custom type guard
function isString(value: any): value is string {
  return typeof value === "string";
}

if (isString(someValue)) {
  console.log(someValue.toUpperCase()); // TypeScript знает, что это string
}
```

### Discriminated Union (умный выбор)

```typescript
type Circle = { type: "circle"; radius: number };
type Square = { type: "square"; side: number };

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2; // TypeScript знает, что это Circle
    case "square":
      return shape.side ** 2; // TypeScript знает, что это Square
  }
}
```

---

## День 7: Utility типы (готовые трансформации)

### `Partial<T>` — все свойства необязательные

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Все свойства становятся с ?
type PartialUser = Partial<User>;

// Можно создать объект с одним свойством
const user: PartialUser = { name: "Максим" };
```

### `Required<T>` — все свойства обязательные

```typescript
interface Post {
  id?: number;
  title?: string;
}

// Все ? убираются, свойства обязательны
type RequiredPost = Required<Post>;

const post: RequiredPost = { id: 1, title: "Hello" }; // Оба поля обязательны!
```

### `Pick<T, K>` — выбрать конкретные свойства

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Берём только id и name
type SafeUser = Pick<User, "id" | "name">;

const user: SafeUser = { id: 1, name: "Максим" }; // Пароля нет!
```

### `Omit<T, K>` — убрать конкретные свойства

```typescript
// Все кроме password
type PublicUser = Omit<User, "password">;

const user: PublicUser = {
  id: 1,
  name: "Максим",
  email: "m@example.com",
}; // Пароля нет!
```

### `Record<K, T>` — объект с определёнными ключами

```typescript
type Role = "admin" | "user" | "guest";

// Создаём объект с ключами: admin, user, guest
type Permissions = Record<Role, string[]>;

const perms: Permissions = {
  admin: ["create", "delete"],
  user: ["read", "update"],
  guest: ["read"],
};
```

### `Readonly<T>` — нельзя менять

```typescript
interface Settings {
  theme: string;
  language: string;
}

type ImmutableSettings = Readonly<Settings>;

const settings: ImmutableSettings = { theme: "dark", language: "ru" };
// settings.theme = "light"; // ❌ Ошибка! Readonly!
```

### `keyof T` — получить все ключи

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// UserKeys = "id" | "name" | "email"
type UserKeys = keyof User;

function getProperty(user: User, key: UserKeys): any {
  return user[key];
}
```

### Mapped Types — создай свой трансформатор

```typescript
// Трансформируем каждое свойство: значение становится функцией
type Getters<T> = {
  [K in keyof T]: () => T[K];
};

interface User {
  id: number;
  name: string;
}

type UserGetters = Getters<User>;
// Эквивалентно:
// {
//   id: () => number;
//   name: () => string;
// }

const getters: UserGetters = {
  id: () => 1,
  name: () => "Максим",
};
```

---

## Главное правило TypeScript

> **TypeScript ловит ошибки ДО того, как ты запустишь код.**

Вместо того, чтобы приложение упало в 2 часа ночи на продакшене, TypeScript скажет тебе об ошибке прямо в редакторе, пока ты пишешь код.

---

## Резюме: Как работает TypeScript

1. **Ты пишешь код** с указанием типов
2. **TypeScript проверяет** всё ли правильно
3. **TypeScript выдаёт ошибки**, если что-то не так
4. **TypeScript компилирует** в обычный JavaScript
5. **JavaScript работает** в браузере

```
TypeScript код → Компиляция → JavaScript код → Браузер
                  (проверка типов)
```

---

## Зачем это нужно?

- ✅ Меньше ошибок в коде
- ✅ Лучшая автодополнение в редакторе
- ✅ Легче читать чужой код
- ✅ Легче поддерживать большие проекты
- ✅ Работодатели любят TypeScript

**TypeScript — это супер-сила для JavaScript разработчиков!** 🚀

## Автор

Maksim Miroshnikov
