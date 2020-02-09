/**
 *  Created by kedar on 2/2/20
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonSharedService } from '../service/commonShared.service';
@Component({
  selector: 'login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, public commonService: CommonSharedService) {
  }
  ngOnInit() {
    
  }
  onLoginBtnClick() {
    
    this.router.navigate(['/home']);
  }
  onRegisterClick() {
    this.router.navigate(['/registration']);
  }
}


