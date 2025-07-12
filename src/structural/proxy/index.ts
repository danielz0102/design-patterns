import { SQLite } from "./SQLite";
import { DatabaseProxy } from "./DatabaseProxy";
import { App } from "./App";

const dbService = new SQLite();
const dbProxy = new DatabaseProxy(dbService);
const appWithProxy = new App(dbProxy);
const appWithoutProxy = new App(dbService);

console.log("Without Proxy:");

for (let i = 0; i < 10; i++) {
  console.log(`Query #${i + 1}`);
  await appWithoutProxy.getUsers();
  console.log("--------------------------------");
}

console.log("With Proxy:");

for (let i = 0; i < 10; i++) {
  console.log(`Query #${i + 1}`);
  await appWithProxy.getUsers();
  console.log("--------------------------------");
}
