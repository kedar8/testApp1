import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { CommonSharedService } from '../service/commonShared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  radioGroupData: any;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, public commonService: CommonSharedService) {
    this.radioGroupData = {
      response: {
        data: [{
          gender: 'Male',
          genderId: 'male'
        }, {
          gender: 'Female',
          genderId: 'female',
        },
        ]
      }
    };
  }

  ngOnInit() {
    this.customValidation();
  }


  customValidation() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSaveClick(data: any) {
    console.log('aaa', data);

  }
  onLoginBtnClick() {
    this.router.navigate(['/login']);
  }
}

