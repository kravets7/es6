/*let name = 'Vasya';

console.log(`Hello ${name.toUpperCase()} sdgfg ${false ? 'Misha' : "Grisha"}`);*/



/*function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');*/



let name = 'Bill';
let age = 17;
console.log(upperName`Hello ${name} ${age}`);

function upperName(literals, ...values) {
    return literals[0] + values[0].toUpperCase();
}
