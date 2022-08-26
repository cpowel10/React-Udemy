//Spread operator (...) -- split up array elements OR object properties
console.log('Spread Operator:')
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5,6];

console.log(newNumbers);

const person = {
    name : 'Chris'
}

const newPerson = {
    ...person,
    gender : 'NB'
}

const newerPerson = {
    ...newPerson,
    age : 26
}

console.log(newPerson);
console.log(newerPerson);
console.log();

//Rest Operator (...) --Merge a list of function arguments into an array
console.log('Rest Operator');
const filter = (...args) =>{
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3,4));