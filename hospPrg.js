/*
2. Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune

Sample Input:
let hospitals = [
{
"id": 1,
"name":"Hospital A",
"location":"Delhi",
"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 2,
"name":"Hospital B",

"location":"Pune",
"noOfBeds":150,
“availability”:”No”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350.
“availability”:”Yes”
}]
Output:
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",
"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",

"noOfBeds":450,
“availability”:”Yes”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
[
{
"id": 2,
"name":"Hospital B",
"location":"Pune",
"noOfBeds":150,
“availability”:”No”
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
“availability”:”Yes”
}
]
*/
let hospitals = [
  {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
  },
  {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    "availability":"No"
  },
  {
    "id": 3,
    "name":"Hospital C",
    "location":"Pune",
    "noOfBeds":350,
    "availability":"Yes"
  }
];

// Filter hospitals with noOfBeds > 200
let filteredByBeds = hospitals.filter(function(hospital) {
  return hospital.noOfBeds > 200;
});

console.log(filteredByBeds);

// Filter hospitals with availability = "Yes"
let filteredByAvailability = hospitals.filter(function(hospital) {
  return hospital.availability === "Yes";
});

console.log(filteredByAvailability);

// Filter hospitals with location = "Pune"
let filteredByLocation = hospitals.filter(function(hospital) {
  return hospital.location === "Pune";
});

console.log(filteredByLocation);
