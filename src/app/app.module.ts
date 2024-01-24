import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './base-tamplate/navbar/navbar.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { IndexEmployeeComponent } from './employee/index-employee/index-employee.component';
import { DetailEmployeeComponent } from './employee/detail-employee/detail-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AddEmployeeComponent,
        IndexEmployeeComponent,
        DetailEmployeeComponent,
        HomeComponent,
        LoginComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        DataTablesModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
