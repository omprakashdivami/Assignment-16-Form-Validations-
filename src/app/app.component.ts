import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'REgistrationform';
  info:any=''
  dataToChild:any;
  childtoParent:string=''
  register=new FormGroup( //Form Group  & Form Controlls
    {
      firstName: new FormControl("",[Validators.required,Validators.maxLength(256), Validators.minLength(3) ]),
      lastName: new FormControl("",[Validators.required,Validators.maxLength(256), Validators.minLength(3) ]),
      age: new FormControl("",[Validators.required,Validators.max(1000)]),
      email: new FormControl("",[Validators.email,Validators.required]),
      mobileNumber: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]+$")]),
      userName: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$")]),
      additionalInfo: new FormControl("",Validators.required )
    })

 

// Calling the formControllers
  get firstName(){return this.register.get('firstName');}
  get lastName(){return this.register.get('lastName');}
  get age(){return this.register.get('age');}
  get mobileNumber(){return this.register.get('mobileNumber');}
  get email(){return this.register.get('email');}
  get userName(){return this.register.get('userName');}
  get additionalInfo(){return this.register.get('userName');}
  
  val(event:any)
  {
    this.childtoParent=event;
    console.log(event)
  }

  constructor(private router: Router){}

  show(){ //on clicking the submit button this button will be triggered
    // console.log(this.formData);
    this.dataToChild = this.register.value; //sending the values of the forms which contains the data
    //routing to the other component with the data
    this.router.navigate(['display-component'],{
      state: { dataToChild : this.dataToChild, AdditionalValue : this.childtoParent }
    })
}
}
