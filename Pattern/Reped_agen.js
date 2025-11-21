let input = require('readline-sync');
let N = input.questionInt("Enter your number: ");
for(let i = 1 ; i <= N ; i++){
    for(let j = 1 ; j <= i ; j++){
        if( i != j ){
            console.log(j);
            
        }
    }
}