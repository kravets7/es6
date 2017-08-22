const myArray = ['January', 'February', 'March'];

/*const [first, second, third] = myArray;

console.log(first, second, third);*/

let user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let {firstname: first, lastname: last, age = 25, social: {facebook}, social} = user;
console.log(first, last, age, facebook);
console.log(social);
