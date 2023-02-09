import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponentComponent } from './data-component/data-component.component';

const routes: Routes = [
  { path: 'display-component', component:  DataComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
