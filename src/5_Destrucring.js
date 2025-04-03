// Destructuring

// 1.Basic Destructure
const sample = ["kamal", "vimal", "mani"];
// const [name1] = sample      //kamal
const [name1, name2] = sample; //kamal vimal

// 2.Skipping value / getting desired value
const [na1, , na2] = sample; // kamal mani

// 3.Setting default value if the value is undefined
const sample2 = [undefined, "vikki", "abi"];
const [nam1 = "default_name", , nam3] = sample2; // default_name  vikki  abi

// 4.using rest operator
const [name_x1 = "default_name", ...rest_names] = sample2; // 'default_name'  ['vikki','abi']

//---------------------

//////Advance 1
const [name_x2 = "default_name", ...[name]] = sample2; // 'default_name' 'vikki'

//////Advance 2
///// Assigning to declared value
let num_1;
let num_2;
[num_1, num_2] = sample2; //undefined 'vikki'

//Objects

const employee = {
  emp_name: "kamal",
  age: 23,
  gender: "male",
  bio: {
    hobbie: "cricket",
    favourite_show: "euphoria",
  },
};

//1. basic
const { emp_name } = employee;

const {
  bio: { hobbie },
} = employee;

const employees = [
  { name_of_employee: "kamal", age: 23 },
  { name_of_employee: "vimal", age: 25 },
];

[{ name_of_employee }] = employees; //kamal
