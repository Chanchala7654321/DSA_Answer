
let input = require('readline-sync');
let N = input.question("Enter your number: ");

for (let i = 1; i <= N; i++) {
    let st = " ";
    for (let j = 0; j < i; j++) {
        st += "*"
    }
    console.log(st);
}