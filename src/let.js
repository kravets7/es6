const myArray = ['January', 'February', 'March'];

for (var i = 0; i < myArray.length; i++) {
    setTimeout(() => {
        console.log(i);
    }, 2000);
}