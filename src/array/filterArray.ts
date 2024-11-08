interface UsersList {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUsers(users : UsersList[]) {
    return users.filter(user => user.age > 18 )
}

filterUsers([{
    firstName:"tharun", lastName: "repalle" , age: 10
}])