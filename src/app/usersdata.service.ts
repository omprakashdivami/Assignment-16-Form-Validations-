import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormComponentComponent } from './form-component/form-component.component';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  dataUrl:string;
  formGroupData:any[]=[];

  constructor(private http:HttpClient) {
    this.dataUrl='http://localhost:3000/usersdata'
   }
   addUser(user:object):Observable<FormComponentComponent>{
    return this.http.post<FormComponentComponent>(this.dataUrl,user)

   }
   getAllUsers():Observable<FormComponentComponent[]>{
    return this.http.get<FormComponentComponent[]>(this.dataUrl)

   }
   getformGroupData(data:any){
      this.formGroupData.push(data)
   }
   

}
