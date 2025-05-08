"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Problem 1: String formatting function
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
// Problem 2: Filter objects by rating
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
// Problem 3: Generic array concatenation with rest parameters
function concatenateArrays(...arrays) {
    return arrays.reduce((result, arr) => [...result, ...arr], []);
}
// Problem 4: Vehicle and Car classes
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
// Problem 5: Union type processing
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    return products.reduce((mostExpensive, current) => {
        return current.price > mostExpensive.price ? current : mostExpensive;
    }, products[0]);
}
// Problem 7: Day enum and day type function
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
// Problem 8: Async function with delay
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            }
        });
    });
}
// Test cases
console.log("Problem 1:");
console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"
console.log("\nProblem 2:");
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
console.log("\nProblem 3:");
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log("\nProblem 4:");
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
console.log("\nProblem 5:");
console.log(processValue("hello"));
console.log(processValue(10));
console.log("\nProblem 6:");
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
console.log(getMostExpensiveProduct(products));
console.log(getMostExpensiveProduct([]));
console.log("\nProblem 7:");
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));
console.log("\nProblem 8:");
squareAsync(4).then((result) => console.log(result));
squareAsync(-3).catch((error) => console.error(error.message));
