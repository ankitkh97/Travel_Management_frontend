import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import "@angular/compiler"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { UpdateTravelComponent } from './update-travel/update-travel.component';  
import {DataTablesModule} from 'angular-datatables';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewTravelComponent } from './view-travel/view-travel.component';
import { CountryComponent } from './country/country.component';
import { NavbarComponent } from './navbar/navbar.component';  
import { UserService } from './service/user.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
@NgModule({
  declarations: [
    AppComponent,
    AddTravelComponent,
    UpdateTravelComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ViewTravelComponent,
    CountryComponent,
    NavbarComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    DataTablesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
