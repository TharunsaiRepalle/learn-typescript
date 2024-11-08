type EmployeeType = {
    name: string;
    startDate : Date;
}

type ManagerType = {
    name: string;
    department : string;
}

type TechLead = EmployeeType & ManagerType

const teamLead : TechLead = {
    name:"tharun",
    startDate:  new Date(),
    department:"Software Developer"
}