// Задача 1
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

type ProductPreview = Pick<Product, "id" | "name">;

const preview: ProductPreview = {
  id: 1,
  name: "Apple",
};

// Задача 2
interface User {
  id: number;
  name: string;
  email: string;
  password: number;
  role: string;
}

type UserDTO = Omit<User, "password">;

const dto: UserDTO = {
  id: 1,
  name: "Maksim",
  email: "m1rojke@yandex.ru",
  role: "developer",
};

// Задача 3
type Role = "admin" | "user" | "guest";

type Permission = Record<Role, string[]>;

const permissions: Permission = {
  admin: ["create", "read", "update", "delete"],
  user: ["read", "update"],
  guest: ["read"],
};

// Задача 4
interface Settings {
  notifications: boolean;
  darkMode: boolean;
  autoSave: boolean;
}

type ReadonlySettings = Readonly<Settings>;

const settings: ReadonlySettings = {
  notifications: true,
  darkMode: true,
  autoSave: true,
};
// settings.notifications = false; // ❌ Ошибка!

// Задача 5
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;

const nullableUser: NullableUser = {
  id: 1,
  name: "Misha",
  email: null,
  password: null,
  role: "admin",
};
