import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { UserRegistration } from '../model/registration.model';

@Injectable()
export class CommonSharedService {

    loginModel: LoginModel
    userRegistration: UserRegistration;
    constructor() {
        this.loginModel = new LoginModel();
        this.userRegistration = new UserRegistration();
    }

    clearModelData() {
        this.loginModel = new LoginModel();
        this.userRegistration = new UserRegistration();
    }
}