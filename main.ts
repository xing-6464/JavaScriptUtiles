import useArray from "./src/Array/useArray";

const {
  createValues,
  createRandomValues,
  createRange,
  uniqueArray,
  intersection,
  removeFalsyValues,
  max,
  min,
} = useArray();

const arr3 = [1, "", 0, null, undefined, "test", NaN, true];
const values = createRandomValues(10);
const values2 = createRandomValues(10);
const arr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 1 }];
const arr2 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];
console.log(uniqueArray(arr, "a"));

console.log(values);
console.log(values2);
console.log(uniqueArray(values));
console.log(intersection(arr, arr2, "a"));
console.log(intersection(values, values2));
console.log(removeFalsyValues(arr3));
console.log(max(values));
console.log(min(values));
