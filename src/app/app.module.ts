
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule } from "amexio-ng-extensions";


import { RouterModule } from "@angular/router";
import { CREATIVE_DEMO_ROUTE } from "./app.routes";

import { LoginPageComponent } from './loginpage/loginpage.component';
import { RoutingService } from './routing-service';
import { HttpClientModule } from '@angular/common/http';
import { CommonSharedService } from './service/commonShared.service';
import { RegistrationComponent } from './registration/registration.component';

/**
 * Created by kedar on 2/2/20.
 */
@NgModule({
  declarations: [AppComponent, LoginPageComponent, RegistrationComponent
  ],
  imports: [BrowserAnimationsModule,
    FormsModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule,
    HttpClientModule,
    RouterModule.forRoot(CREATIVE_DEMO_ROUTE, {useHash: true})],

  bootstrap: [AppComponent],
  providers: [RoutingService,CommonSharedService],

})
export class AppModule { }
