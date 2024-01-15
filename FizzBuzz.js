const fs = require('fs');
const filePath = 'output.txt';
fs.writeFileSync(filePath, "Start\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        fs.appendFileSync(filePath, "FizzBuzz\n");
    } else if (i % 3 == 0) {
        console.log("Fizz");
        fs.appendFileSync(filePath, "Fizz\n");
    } else if (i % 5 == 0) {
        console.log("Buzz");
        fs.appendFileSync(filePath, "Buzz\n");
    } else {
        console.log(i);
        fs.appendFileSync(filePath, String(i) + '\n');
    }
}

fs.appendFileSync(filePath, "Finish");
console.log("Check the output in output.txt file")