export const baseUrl = "https://jsonplaceholder.typicode.com";

export const deliveryRegions = ["Baku", "Sumgayit", "Ganja"];

export function sum(a, b) {
  return a + b;
}

export function elementGenerator(element) {
  let newElem = document.createElement(element);

  newElem.innerText = "New elem;";

  return newElem;
}
