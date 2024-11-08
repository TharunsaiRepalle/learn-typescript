interface ManagerExtend {
    name: string
}

interface UserExtend {
    age: number
}

interface BigPeople extends ManagerExtend, UserExtend {
    bloodGroup: string
}