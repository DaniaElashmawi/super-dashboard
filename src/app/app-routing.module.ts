import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SuperDashboardComponent } from './_components/super-dashboard/super-dashboard.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { CustomersComponent } from './_components/customers/customers.component';
import { ServicesComponent } from './_components/services/services.component';
import { SuperDashLayoutComponent } from './layouts/super-dash-layout/super-dash-layout.component';
import { StatisticsComponent } from './_components/statistics/statistics.component';

import { AuthenticationGuard } from './_guard/authentication.guard';

const routes: Routes = [
  {
    path: 'login' ,
    component: LoginComponent
  },
  {
    path: 'superDashBoard' ,
    component: SuperDashLayoutComponent , canActivate : [AuthenticationGuard] ,
    children: [
      {
        path: '' ,
        component: SuperDashboardComponent ,
        children: [
          {
            path: 'home', component: HomeComponent
          } ,
          {
            path: 'customers' , component: CustomersComponent
          } ,
          {
            path: 'services' , component: ServicesComponent
          } ,
          {
            path: 'statistics' , component: StatisticsComponent
          }
        ]
      }
    ]
  },
  { path: '**' , component: LoginComponent }

] ;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
