import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { UsersDataService } from '../usersdata.service';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  constructor(private http:HttpClient, private usersdata: UsersDataService){}
  rowData$:any;
  colDefs: ColDef[] = [
    { field: 'id'},{ field: 'firstName'},{ field: 'lastName' },{ field: 'userName' },{ field: 'age' },{ field: 'email' },{ field: 'mobileNumber'}];

  ngOnInit(){
    this.rowData$=this.usersdata.getAllUsers()
  }
}
