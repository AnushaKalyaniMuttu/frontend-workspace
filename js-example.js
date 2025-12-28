// array-methods-example.js

// ---------- Number Array ----------
const numList = [1, 2, 3, 4, 5, 6];

// filter → returns all matching elements
const filteredNums = numList.filter(num => num > 3);
console.log("filter:", filteredNums); // [4, 5, 6]

// find → returns first matching element
const foundNum = numList.find(num => num > 3);
console.log("find:", foundNum); // 4

// findIndex → returns index of first match
const foundIndex = numList.findIndex(num => num > 3);
console.log("findIndex:", foundIndex); // 3

// map → transforms each element
const squaredNums = numList.map(num => num * num);
console.log("map:", squaredNums); // [1,4,9,16,25,36]

// reduce → accumulates to single value
const sum = numList.reduce((acc, num) => acc + num, 0);
console.log("reduce:", sum); // 21


// ---------- String Array ----------
const empList = ["Ravi", "Santosh", "Amit", "Santosh"];

// find → first occurrence only
const emp = empList.find(emp => emp === "Santosh");
console.log("find employee:", emp); // Santosh

// filter → all occurrences
const allSantosh = empList.filter(emp => emp === "Santosh");
console.log("filter employees:", allSantosh); // ["Santosh", "Santosh"]


// ---------- Object Array (Real-world Example) ----------
const employees = [
  { id: 1, name: "Ravi", salary: 50000 },
  { id: 2, name: "Santosh", salary: 70000 },
  { id: 3, name: "Amit", salary: 60000 }
];

// find employee by name
const empObj = employees.find(e => e.name === "Santosh");
console.log("find object:", empObj);

// filter employees with salary > 55000
const highSalary = employees.filter(e => e.salary > 55000);
console.log("filter objects:", highSalary);

// map employee names
const empNames = employees.map(e => e.name);
console.log("map objects:", empNames);

// reduce total salary
const totalSalary = employees.reduce((acc, e) => acc + e.salary, 0);
console.log("reduce objects:", totalSalary);
