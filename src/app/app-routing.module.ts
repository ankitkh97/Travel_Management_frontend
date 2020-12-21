import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { CountryComponent } from './country/country.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateTravelComponent } from './update-travel/update-travel.component';
import { ViewTravelComponent } from './view-travel/view-travel.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'',component:WelcomePageComponent},
  { path: 'login', component: LoginComponent,  canActivate :[AuthGuard] },
  {path:'signup',component:SignupComponent, canActivate :[AuthGuard]},
  {path : 'navbar', component : NavbarComponent,  canActivate :[AuthGuard]},
   {path: 'home' , component : HomeComponent, canActivate :[AuthGuard]},  
  { path: 'addTravel', component: AddTravelComponent, canActivate :[AuthGuard] },
  {path:'viewTravel',component:ViewTravelComponent, canActivate :[AuthGuard]},  
  { path : 'update/:id' , component : UpdateTravelComponent, canActivate :[AuthGuard]},
  {path:'country/:cname',component:CountryComponent, canActivate :[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
