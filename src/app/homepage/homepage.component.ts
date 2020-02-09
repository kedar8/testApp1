import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { CommonSharedService } from '../service/commonShared.service';
// import { RoutingService } from './routing-service';

@Component({
  selector: 'home-demo',
  templateUrl: './homepage.component.html',

})
export class HomeComponent implements OnInit {
  sideNavList: any;
  pageMenu: any;
  dashboardMenu: any;
  isRouteLoading: boolean = false;
  constructor(private router: Router, public commonService: CommonSharedService) {
    this.dashboardMenu = [

      {
        "text": "10th",
        "icon": "fa fa-th-large",
        "mdaIcon": "link",

      },
      {
        "text": "9th",
        "icon": "fa fa-th-list",
        "mdaIcon": "link",

      },
      {
        "text": "8th",
        "icon": "fa fa-table",
        "mdaIcon": "link",

      }

    ];

  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRouteLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRouteLoading = false;
      }
    });
  }

  onClassClick(data: any) {

  }
  onLogoutClick() {
    this.router.navigate(['/login']);
    this.commonService.clearModelData();
  }
}
