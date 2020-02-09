
export class UserRegistration {
    firstName: string;
    lastName: string;
    agree: boolean;
    address: string;
    gender: string;
    country: string;
    stateName: string;
    city: string;
    age: number;
    dateOfBirth = new Date();
    email: string;
    password: string;
    constructor() {

        this.firstName = '';
        this.gender = '';
        this.country = '';
        this.stateName = '';
        this.city = '';
        this.age = null;
        this.email = '';
        this.password = '';
    }
}