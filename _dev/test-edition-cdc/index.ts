import { WidgetEditionZoid } from "./components";

export function test() {
  console.log("test");
}

export function sayHello() {
  console.log("hello");
}

export function getWidgetEdition() {
  return WidgetEditionZoid;
}

console.log("Bundle zoid-edition-test loaded");

export { WidgetEditionZoid };
