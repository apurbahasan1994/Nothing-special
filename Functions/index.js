
// pure function
function add(num1,num2){
    return num1+num2;
}
// impure function

function addRandom(num1,num2){
    return num1+Math.random();
}

// impure functions also changes values outside of it
 let x=0;
 function addRandomMore(num1,num2){
    // side effect 
    x=num1+num2;
    return x;
}

// factory fuctions 
// function that produces another function 


//every function in js is a closure
