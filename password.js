console.log("Welcome to Aidens password validator!")

const readline = require('readline');

const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
//     function containsSpecialChars(input) {
//         const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//         return specialChars.test(input);
// }
    
    reader.question("What is your password?", function(input){
    if(input.length < 10){
        console.log("Your password is not long enough")
    }
        else if(input.length > 20){
                console.log("Your password must not exceed 20 characters!")
            }
            else if(!/\d/.test(input)){
                 console.log("Your password does not have a number.")
                 console.log('false')
                        //  }
                        // else if (constainsSpecialChars.test(input) = false){
                        //      console.log('Your password does not contain a special character')
                }else console.log('Your password was succefully saved')
            })
            