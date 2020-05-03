import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


// Modules
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


// HighChart
import { HighchartsChartComponent } from 'highcharts-angular';


// Components
import { AppComponent } from './app.component';
import { SuperDashboardComponent } from './_components/super-dashboard/super-dashboard.component';
import { HomeComponent } from './_components/home/home.component';
import { CustomersComponent } from './_components/customers/customers.component';
import { ServicesComponent } from './_components/services/services.component';
import { SuperDashLayoutComponent } from './layouts/super-dash-layout/super-dash-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { StatisticsComponent } from './_components/statistics/statistics.component';
import { LoginComponent } from './_components/login/login.component';


// services
// import { AuthService} from './_services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    SuperDashboardComponent,
    HomeComponent,
    CustomersComponent,
    ServicesComponent,
    SuperDashLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    StatisticsComponent,
    HighchartsChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
