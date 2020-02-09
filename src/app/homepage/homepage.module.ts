
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './homepage.component';
import {
  AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule,
  AmexioMapModule
} from 'amexio-ng-extensions';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

/**
 *  Created by kedar on 2/2/20
 */

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,
    FormsModule, AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule,
    AmexioWidgetModule, HttpClientModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [HomeComponent],
  providers: [],
})
export class HomeModule { }
