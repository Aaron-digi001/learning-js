const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros).
// // 1.  concat() returns a new array, combining both arrays.
// // 2. It does not mutate the original arrays.

// console.log(allHeros);





const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);  //Also creates a new array and same result as cocat method but with clear syntax

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// flat(Infinity)     flattens all nested levels into a single array.



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
/**
1. Converts iterables (like strings) into arrays.
2. Each character becomes an array element.
*/
console.log(Array.from({name: "hitesh"})) // interesting
//Array.from() on a plain object that is not iterable and not array-like-------->. so it returns ---->  []. empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));