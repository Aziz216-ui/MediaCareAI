import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './patient/pages/dashboard/dashboard.component';
import { SidebarComponent } from './patient/components/sidebar/sidebar.component';
import { TopbarComponent } from './patient/components/topbar/topbar.component';


@NgModule({
  declarations: [
    FrontLayoutComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule
  ]
})
export class FrontOfficeModule { }
