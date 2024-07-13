//function = a section of reusable code

//      declare code once,use it whenever you want
//      call the function to execute the code


//declaring function
/*function whoami(){
    console.log("do you know who am I");
    console.log("do you know who am I");
    console.log("do you know who am I");
    console.log("do you know who am I");
}


//calling the function

// we can repeat it so many times as it is a section of reusable code
whoami();
*/

//declaring arguments and parameters
// the arguments and parameters should be declare in match in an correct order
/*function Aboutme(name,age){
    console.log("do you know who am I!");
    console.log(`well my name is ${name} and my age is ${age} years`);
}

Aboutme("sabir",19);
*/

//return function

/*function add(x,y){
    //let result = x + y;
    return x+y;
    //return result;
}

//let answer = add(2,3);

console.log(add(2,3));

*/

/*function isEven(x){
    if(x%2===0){
        console.log("it is even");
    }
    else{
        console.log("it is odd");
    }
}

isEven(100);
*/

function isValidEmail(email){
    if(email.includes("9")){
        return true;

    }
    else{
        return false;
    }

}

console.log(isValidEmail("chotugymson786@gmail.com"));