import { RefreshComponent } from './refresh/refresh.component';
import { HomeComponent } from './home/home.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'Create', component: CreateFormComponent},
  {path: '', component: HomeComponent},
  {path: 'Refresh', component: RefreshComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
