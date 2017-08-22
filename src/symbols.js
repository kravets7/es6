let name = Symbol.for('name');
let name2 = Symbol.for('username');

console.log(Symbol.keyFor(name));
console.log(Symbol.keyFor(name2));


let object = {
    iterator: 0
};

console.log(object.name);