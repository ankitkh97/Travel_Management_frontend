import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateTravelComponent } from './update-travel/update-travel.component';

const routes: Routes = [
   {path:'', component:LoginComponent},
   {path: 'home' , component : HomeComponent, canActivate :[AuthGuard]},  
  { path: 'add-travel', component: AddTravelComponent, canActivate :[AuthGuard] },  
  { path : 'view-travel' , component : UpdateTravelComponent, canActivate :[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
