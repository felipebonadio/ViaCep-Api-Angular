import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepDetailsComponent } from './cep-details/cep-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path:"",
  component:HomeComponent
  },
  {
  path: "cep/:cep",
  component : CepDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
