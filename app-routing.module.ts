import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputComponent } from './input/input.component';
import { InputsComponent } from './inputs/inputs.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', redirectTo: "/inputs", pathMatch: "full" },
  { path: 'inputs', component: InputsComponent },
  { path: 'input', component:InputComponent },
  { path: 'home', component:HomeComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
