var double = (value: number) => value * 2;

console.log(double(10));

var greet = (name = 'Max') => {
    console.log("Hello, " + name);
};

greet();
greet("Anna");

var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

var newArray = [55, 20];
newArray.push(...numbers);
//var newArray = [55,20, ...numbers];

console.log(newArray);

var testResults = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;
//var [result1, result2, result3] = [3.89, 2.99, 1.38];
console.log(result1, result2, result3);

var scientist = {firstName: "Will", experience: 12};
var {firstName, experience} = scientist;

console.log(firstName, experience);

var {firstName:monkey, experience:money} = scientist;

console.log(monkey, money);