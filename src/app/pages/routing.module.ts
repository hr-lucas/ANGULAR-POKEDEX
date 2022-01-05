import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component's
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'deatails/:id',
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
