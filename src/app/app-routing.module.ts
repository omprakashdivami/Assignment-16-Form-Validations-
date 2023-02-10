import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponentComponent } from './data-component/data-component.component';
import { FormComponentComponent } from './form-component/form-component.component';

const routes: Routes = [
  { path: 'display-component', component:  DataComponentComponent },
  {path:'',component: FormComponentComponent},
  { path:'**' ,component:FormComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
