type greetArg  = number | string

function greetType (id: (number | string)) {
    console.log("heelo")
}

function greetType1 (id: greetArg) {
    console.log("heelo")
}

greetType(1);
greetType1("1")