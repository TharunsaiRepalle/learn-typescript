function isLegal(age: number) {
    if(age > 18) {
        return true;
    } else {
        return false;
    }
}

const x = isLegal(90)
console.log(x);