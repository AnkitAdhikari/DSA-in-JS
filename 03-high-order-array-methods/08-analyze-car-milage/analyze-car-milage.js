// # Challenge: Car Mileage Analysis

// ## Instructions

// You are given an array of car objects, each containing information about a car's make, model, year, and mileage. Your goal is to perform some analysis on the car mileage data using high order array methods.

// Implement a function called `analyzeCarMileage` which takes in an array of car objects and performs the following tasks:

// 1. Calculate the average mileage of all cars.
// 2. Find the car with the highest mileage.
// 3. Find the car with the lowest mileage.
// 4. Calculate the total mileage of all cars combined.

// The function should return an object containing the calculated values as properties.

function analyzeCarMileage(arr) {
  const length = arr.length;
  const totalmileage = arr.reduce((acc, cur) => {
    return acc + cur.mileage;
  }, 0)
  const avgMileage = totalmileage / length;
  return {
    highestMileageCar: arr.reduce((acc, cur) => {
      if (acc.mileage > cur.mileage) return acc;
      return cur;
    }),
    lowestMileageCar: arr.reduce((acc, cur) => {
      if (acc.mileage < cur.mileage) return acc;
      return cur;
    }),
    averageMileage: parseFloat(avgMileage.toFixed(2)),
    totalMileage: totalmileage,
  };
}

module.exports = analyzeCarMileage;
