import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { DataComponentComponent } from './data-component/data-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AgGridModule } from 'ag-grid-angular';
// import{  }from '@angular/material';
import { GridComponent } from './grid/grid.component'
@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    DataComponentComponent,
    FormComponentComponent,
    GridComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
