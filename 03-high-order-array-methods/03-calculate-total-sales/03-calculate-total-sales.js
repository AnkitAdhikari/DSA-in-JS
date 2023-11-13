// # Challenge: Calculate Total Sales

// ## Instructions

// Use the given array of product objects below, each with their name, price, and quantity sold. Additionally, you are given a tax rate as a percentage. Write a function called `calculateTotalSalesWithTax` that takes in an array of product objects, along with the tax rate, and returns the total sales amount including tax.

// const products = [
//   { name: 'Apple', price: 0.5, quantity: 10 },
//   { name: 'Banana', price: 0.3, quantity: 20 },
//   { name: 'Orange', price: 0.6, quantity: 15 },
// ];


// ### Constraints

// - The input array will contain at least one product object.
// - The price and quantity values will be positive numbers.
// - The tax rate will be a positive number less than 100.
// - Round to 2 decimal places.

function calculateTotalSalesWithTax(arr, tax) {
  const totalWithoutTax = arr.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
  return Number((totalWithoutTax + totalWithoutTax * tax / 100).toFixed(2));
}