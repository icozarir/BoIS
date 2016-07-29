export interface IMember {
    firstName: string;
    surName: string;
    email: string;
    identifier: number;
    number: number;
}

export class Member implements IMember{
    
    constructor(public firstName: string, public surName: string, public email: string, public identifier: number, public number: number) {
        this.firstName = firstName;
        this.surName = surName;
        this.email = email;
        this.identifier = identifier;
        this.number = number;
    }
}