function getFirstElement <T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["Tharun"])
console.log(el.toLowerCase())

const el1 = getFirstElement([1,2])
console.log(el1.toString())


interface UserLists {
    name : string;
    age : number;
}

const el2 = getFirstElement<UserLists>([{ name: "tharun", age: 25}])