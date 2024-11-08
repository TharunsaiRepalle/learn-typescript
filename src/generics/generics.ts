function identity<T>(arg: T): T {
    return arg;
}

let out1 = identity<string>("myString");
let out2 = identity<number>(100);

console.log(out1.toLocaleLowerCase())
console.log(out2)