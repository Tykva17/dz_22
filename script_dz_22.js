let userNumber = +(prompt('Enter your number, please'));
let userdegree = +(prompt('Enter value of degree, please'));


function getNumber(num , degree){
    if(degree === 1){
       return num;
    }
    return num * getNumber(num,degree-1);
}

let result = getNumber(userNumber , userdegree)
console.log('Your number = ' , result);