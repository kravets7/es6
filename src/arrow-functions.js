/*let add = (x, y) => x + y;

let square = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log('Logging');

let multiply = (x, y) => {
};

let getPerson = () => ({ name: 'John' });

//(() => console.log('IIFE'))();


let numbers = [1, 2, 3 ,4 , 5, 6, 7 ,8 ,9 ,10];

let sum = 0;

numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n);*/



let person = {
    name: 'Bob',
    foo: {
        greet: function() {
            (() => {
                console.log('Hello, my name is ' + this.name);
                console.log('"this" is', this);
            })();
        }
    }

};

/*person.foo.greet();*/

let Task = (cb) => {
    console.log(this.name);
    console.log('Creating a task');
    if (typeof cb === 'function') {
        console.log(cb);
        cb();
    }
};

/*let task = new Task();*/
Task(() => console.log(12));
