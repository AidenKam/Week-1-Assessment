console.log("Welcome to Aidens password validator!")

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function containsSpecialChars(input) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(input);
}
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
                         }
                        else if (containsSpecialChars(input) === false){
                             console.log('Your password does not contain a special character')
                }else console.log('Your password was succefully saved')
            })
            


// Below text does not matter but keeping for my own notes

// let me = "Workplz!"

//             function containsSpecialChars(me) {
//                 const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//                 return specialChars.test(me);
//               }
//               if (containsSpecialChars(me) === false){
//               console.log('this is working')
//               }else console.log ('just work')