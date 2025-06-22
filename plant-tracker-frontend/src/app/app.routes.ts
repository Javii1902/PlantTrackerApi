import { Routes } from '@angular/router';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { RegisterComponent } from './components/register/register.component';
import { MyPlantsComponent } from './components/my-plants/my-plants.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'plants', pathMatch: 'full' },
  { path: 'plants', component: PlantListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-plants', component: MyPlantsComponent },
  { path: '**', redirectTo: 'plants' }
];
