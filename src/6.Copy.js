// Two types of copy
//  1. Deep copy
//  2. Shallow copy

//1.Deep Copy
// Primitive types always copy as Deep Copy
let num1 = 10;
let num2 = 20;

num1 = 30;
console.log(num2); //20

const employee = { name: "Alex", department: { id: 101 } };
const employeeDeepCopy = JSON.parse(JSON.stringify(employee));

employeeDeepCopy.department.id = 102; // Only modifies copy
console.log(employee.department.id); // 101 (original unchanged)

//Best Way
const gadget = { name: "Phone", specs: { ram: "8GB" } };
const gadgetDeepCopy = structuredClone(gadget);

gadgetDeepCopy.specs.ram = "16GB"; // Doesn't affect original
console.log(gadget.specs.ram); // "8GB" (no side effect)

//external package
const book = { title: "JS Guide", meta: { pages: 300 } };
const bookDeepCopy = _.cloneDeep(book);

bookDeepCopy.meta.pages = 350; // Original remains intact
console.log(book.meta.pages); // 300 (no change)

//2. Shallow Copy

//Array
const fruits = ["apple", "banana", { type: "citrus" }];
const fruitsCopy = [...fruits]; // Shallow copy using spread

fruitsCopy[2].type = "berry"; // Modifies nested object in both!
console.log(fruits[2].type); // "berry" (original changed)

//Object
const car = { brand: "Toyota", details: { year: 2020 } };
const carCopy = Object.assign({}, car); // Shallow copy

carCopy.details.year = 2023; // Affects original
console.log(car.details.year); // 2023 (unintended change)
