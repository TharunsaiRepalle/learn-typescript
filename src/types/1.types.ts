type Users = {
    firstName : string;
    lastName : string;
    age: number
}

function isLegalTypesUsage(user: User) {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}

isLegalTypesUsage({
    firstName : "tharun",
    lastName: "repalle",
    age: 24
})