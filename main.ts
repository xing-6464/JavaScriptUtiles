import useArray from "./src/Array/useArray";

const { createValues, createRandomValues, createRange } = useArray();

const values = createRange(1, 100, 3);

console.log(values);
