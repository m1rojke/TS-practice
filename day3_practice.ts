// Задача 1
interface Game {
  title: string;
  releaseYear: number;
  platform: string;
  isCompleted: boolean;
}

const myGame: Game = {
  title: "Dead space",
  releaseYear: 2019,
  platform: "PlayStation5",
  isCompleted: true,
};

// Задача 2
interface Developer {
  name: string;
  experience: number;
  skills: string[];
  portfolio?: string;
}

const dev1: Developer = {
  name: "Maksim",
  experience: 2,
  skills: ["html", "css", "js", "python", "git", "sql"],
  portfolio: "https://github.com/m1rojke?tab=repositories",
};
const dev2: Developer = {
  name: "Maksim",
  experience: 2,
  skills: ["html", "css", "js", "python", "git", "sql"],
};

// Задача 3
interface Task {
  isCompleted: boolean;
  complete(): void;
  getStatus(): string;
}

const task: Task = {
  isCompleted: false,

  complete() {
    this.isCompleted = true;
    console.log("Задача выполнена!");
  },

  getStatus() {
    return this.isCompleted ? "Completed" : "In progress";
  },
};

// Задача 4
type Admin = {
  name: string;
  permissions: string[];
};
type Guest = {
  name: string;
  canView: boolean;
};
type User = Admin | Guest;

const admin: Admin = {
  name: "Maksim",
  permissions: ["View", "Delete", "Update", "Ban"],
};
const guest: Guest = {
  name: "Sanya",
  canView: false,
};

// Задача 5
interface Person {
  name: string;
  age: number;
}

interface Programmer extends Person {
  mainLanguage: string;
  yearsOfExperience: number;
}

const programmer: Programmer = {
  name: "Maksim",
  age: 30,
  mainLanguage: "JavaScript",
  yearsOfExperience: 1,
};
