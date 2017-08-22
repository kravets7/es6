const myArray = ['January', 'February', 'March'];

/*let status = true;

if (status){
    let foo = 'foo';
}

console.log(foo);*/

let foo = 5;


for (var i = 0; i < myArray.length; i++) {
    setTimeout(() => {
        console.log(i);
    }, 2000);
}
