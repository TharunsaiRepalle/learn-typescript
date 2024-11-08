interface User {
    firstName : string
    lastName : string
    age: number
    email?: string // email is an optional argument.
}

function isLegalInterfaceDemo(user: {
    firstName : string
    lastName : string
    age: number
}) {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}

function isLegalInterfaceUsage(user: User) {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}

isLegalInterfaceUsage({
    firstName : "tharun",
    lastName: "repalle",
    age: 24
})