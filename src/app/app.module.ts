import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


/**  Modules **/
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';


/** HighChart **/
import { HighchartsChartComponent } from 'highcharts-angular';


/** Components **/
import { AppComponent } from './app.component';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ServicesComponent } from './services/services.component';
import { SuperDashLayoutComponent } from './layouts/super-dash-layout/super-dash-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { StatisticsComponent } from './statistics/statistics.component';


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
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
