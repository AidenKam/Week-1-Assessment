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
function toLowerCase(input){
    return input == input.toLowerCase() && input != input.toUpperCase();
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
                        }else if (toLowerCase(input)){
                            console.log('Your password needs a capital letter')
                        }else console.log('Your password was succesfully saved')
            reader.close()
        })
            


// Below text does not matter but keeping for my own notes

// let me = "wokr!"

//             function containsSpecialChars(me) {
//                 const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//                 return specialChars.test(me);
//               }
//               if (containsSpecialChars(me) === false){
//               console.log('this is working')
//               }else console.log ('just work')

// function toLowerCase(me){
//     return me == me.toLowerCase() && me != me.toUpperCase();
// }
// if (toLowerCase(me)){
//     console.log(' the string needs a capital letter')
// }else console.log('the string contains a capital letter')