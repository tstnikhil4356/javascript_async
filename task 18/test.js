//1.Given an array of numbers, use the map function with an arrow function to square each element of the array.
// var num = [1, 2, 3, 4, 5];
// const square = num.map((number) => number * number);
// console.log(square);

//2.GRADE OF STUDENTS
// function Grade(score) {
//   return score > 90
//     ? "A"
//     : score > 80
//     ? "B"
//     : score > 70
//     ? "C"
//     : score > 60
//     ? "D"
//     : score > 50
//     ? "E"
//     : "Padhaii Karlee bhai !!";
// }

// let userScore = prompt("Enter Your Score:   ");
// let Score = parseFloat(userScore);
// if (!isNaN(Score)) {
//   let grade = Grade(Score);
//   console.log("Your grade is: " + grade);
// } else {
//   console.log("Please enter a valid number.");
// }

//3.CARS PROJECT
// const car = {
//   CompanyName: "Porsche",
//   model: "Carrera",
//   year: 1998,
// };

// function ChangeYear(newyear) {
//   car.year = newyear;
// }
// ChangeYear(2021);
// const { model, year } = car;

// console.log("Model:" + model);
// console.log("Year:" + year);

//4.Array
// function IsPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;

//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i * i < num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }
//   return true;
// }

// const numbers = [1, 22, 3, 14, 5, 16];
// const newarr = numbers.filter(IsPrime);
// console.log(newarr);

//5.State different use cases of map, filter and reduce functions.
//MAP FUCNTION
// function chekeven(num) {
//   if (num % 2 == 0) return true;
//   else return false;
// }

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const newarr1 = arr1.map(chekeven);
// console.log(newarr1);

// //FILTER FUNCTION
// function checkodd(num) {
//   if (num % 2 !== 0) return true;
//   else return false;
// }

// const arr2 = [22, 23, 24, 25, 6, 27, 28, 29];
// const newarr2 = arr2.filter(checkodd);
// console.log(newarr2);

// //REDUCE FUNCTION
// const arr3 = [25, 75, 65, 35, 95];
// const newarr3 = arr3.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// }, 0);
// console.log(newarr3);

//6.async function
// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

//fetchData();
const person1 = {
  Name: "Nikhil Singh",
  Address: {
    street: "Mira Raoad",
    city: "mumbai",
    Code: "401-102",
  },
  Contact: {
    PhoneNumber: "79123-675",
    email: "Nooffence123@gmail.com",
  },
};

const phoneNumber1 = person1.Contact?.PhoneNumber;
console.log("The Phone Number Of First Person :", phoneNumber1);

const person2 = {
  Name: "Hansika Singh",
  Address: {
    street: "Mira Road(East)",
    city: "mumbai",
    Code: "401-102",
  },
  Contact: {
    PhoneNumber: "45321-675",
    email: "yesoffence123@gmail.com",
  },
};

const StreertAddress1 = person2.Address?.street;
console.log("The Phone Number Of First Person :", StreertAddress1);
