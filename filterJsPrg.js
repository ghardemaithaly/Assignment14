/*
1. Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000
Sample Input:
let employees = [
{
"id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},
{
"id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},
{
"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}]
Output:
[
{
"id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},
{

"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}
]
[
{
"id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},
{
"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}
]

*/

let employees = [
  {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
  },
  {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
  },
  {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
  }
];

// Filter employees according to department = IT
let filteredByDept = employees.filter(function(employee) {
  return employee.department === "IT";
});

console.log(filteredByDept);

// Filter employees who earn a salary < 65000
let filteredBySalary = employees.filter(function(employee) {
  return employee.Salary < 65000;
});

console.log(filteredBySalary);
