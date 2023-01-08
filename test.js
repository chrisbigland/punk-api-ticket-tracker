let arrays = [
  [
    { name: "john", age: 22 },
    { name: "sally", age: 32 },
    { name: "jeff", age: 56 },
  ],
  [
    { name: "mary", age: 53 },
    { name: "jemima", age: 52 },
    { name: "ray", age: 66 },
  ],
  [
    { name: "ron", age: 12 },
    { name: "helen", age: 92 },
    { name: "simon", age: 51 },
  ],
];


arrays = arrays.reduce((a, b) => a.concat(b), []);
console.log(arrays)


// console.log(arrays[0].concat(arrays[1], arrays[2]));

// console.log(arrays.flat())
