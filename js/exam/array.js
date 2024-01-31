const arr2 = [1, 2, 3, 4, 5];

// ex1
console.log(arr2.slice(1, 3));

// ex2
console.log(arr2.slice(2));

// ex3
arr2.splice(1, 3);
console.log(arr2);

// ex4
arr2.splice(1, 0, 1, 2, 3, 4, 5);
console.log(arr2);

// ex5
arr2.splice(2);
console.log(arr2);

// ex6
arr2.splice(0, 2, 1, 2, 3, 4, 5);
console.log(arr2);

// ex7
arr2.splice(2, 1, "X", "Y", "Z");
console.log(arr2);

// ex8
arr3 = [...arr2.slice(0, 2), "X", "Y", "Z", ...arr2.slice(-2)];
console.log(arr3);
