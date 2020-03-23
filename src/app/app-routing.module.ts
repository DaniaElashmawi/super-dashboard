import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ServicesComponent } from './services/services.component';
import { SuperDashLayoutComponent } from './layouts/super-dash-layout/super-dash-layout.component';


const routes: Routes = [
  {
    path: '' ,
    component: SuperDashLayoutComponent ,
    children: [
      {
        path: 'superDashBoard' ,
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
          }
        ]
      }
    ]
  } ] ;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
