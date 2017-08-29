
let promise = Promise.resolve(15);


async function asyncFunc() {
    try {
        let res = await promise;
        console.log(res);
        return Promise.resolve(17);
    } catch (e) {
        console.log("Error", e);
        throw e;
    }

}

async function async2() {
    try {
        let result = await asyncFunc();
        console.log(result, 19);
    } catch (e) {
        console.log(22, e);
    }
}

console.log(async2());