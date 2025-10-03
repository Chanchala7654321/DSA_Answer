let input = require('readline-sync');
let N = input.question("Enter your number: ");
// Chanchala 
for (let i = 1; i <= N; i++) {
    let st = " ";
    for (let j = 0; j < N - i; j++) {
        st += " "
    }
    for (let k = 0; k < i; k++) {
        st += "*"
    }
    console.log(st);
}
