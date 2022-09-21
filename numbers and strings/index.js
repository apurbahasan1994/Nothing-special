// every number in js is actually a float
// js does not know special int type
// numbers are stored as 64 bit floating point in js

// the biggest int number in js
Number.MAX_SAFE_INTEGER;

// larget number including decimal value
Number.MAX_VALUE;


// Number of decomal place to show

0.4545454.toFixed(2);

// Big int --> its a primitive value like other primitive types
999830530590353n
// or 
BigInt(4)
// big int to number
parseInt(10n)

function customRandom(min,max){ //RANDOM NUM WITH GIVEN BOUNDARY
    return Math.floor(Math.random()* (max-min) + min);
}



//tagged templates
//  a function that works with the template literals

function productDescription(strins,productName,prductPrice){
    return `${strins} ${productName} ${prodPrice}`
}
const productName="js newbies";
const prodPrice="29.99";
const productOutput=productDescription`this product (${productName}) is (${prodPrice})`;
console.log(productOutput);