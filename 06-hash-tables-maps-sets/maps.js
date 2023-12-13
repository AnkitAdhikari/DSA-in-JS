const myMap = new Map([[1, 'one'], [true, 'really true'], [null, 'its empty'], ['name', 'Ankit']]);
// key can also be an object or a function

// set method 'greet' => 'Hello Beautiful'
myMap.set('greet', 'Hello Beautiful');
myMap.set(1, 'Hello Beautiful'); // can overwrite previous key's value

// has method
myMap.has('greet') // true

// get method
myMap.get(null); // 'it's empty'

myMap.delete(null); // removes null key/value pair form the set

// iteration on maps

// using for of loop
for (let [key, value] of myMap) {
  console.log(key, ":", value);
}

// using forEach higher order function
myMap.forEach((value, key) => {
  console.log(key, ":", value);
});
