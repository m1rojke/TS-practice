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
- tsc day1_practice.ts      // Создаст day1_practice.js
- node day1_practice.js     // Запустит код

## Автор
Maksim Miroshnikov
