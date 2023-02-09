import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  items: any[] = [
    { id: 1, name: 'number', regEx: '^[0-9]+$'},
    { id: 2, name: 'string' , regEx:'^[A-Za-z]+$'},
    { id: 3, name: 'boolean', regEx:'^(?:tru|fals)e$' },
    { id: 4, name: 'hexaDecimal', regEx:'^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{6})$' },
    { id: 5, name: 'binary', regEx:'^[0*1*]*[1*0*]*' },
  ];
  selected: unknown = 1;
  dropDownComponent = new FormGroup({
    selectedType : new FormControl(this.items[0].name.value,[Validators.required]),
    inputname: new FormControl('',[Validators.required])
  })
  constructor() {
  }
  
  ngOnInit() {
  }
 
  selectOption(reg:any)  {
    console.log(this.items[reg.target.value-1].regEx)
    //getted from event
    // console.log(regEX.target.value);
    // console.log(this.items[reg.target.value].regEx)
    //getted from binding
    console.log(this.items[reg.target.value].id)
    // if(this.items[reg.target.value].id === 2)
    // {
    //   console.log("kfh")
    //   this.dropDownComponent.controls['inputname'].setValidators(Validators.pattern(this.items[reg.target.value-1].regEx))
    // }
    // else if(this.items[reg.target.value].id === 3)
    // {
    //   console.log("second")
    //   this.dropDownComponent.controls['inputname'].setValidators(Validators.pattern(this.items[reg.target.value-1].regEx))
    // }
    // else if(this.items[reg.target.value].id === 4)
    // {
    //   console.log("third")
    //   this.dropDownComponent.controls['inputname'].setValidators(Validators.pattern(this.items[reg.target.value-1].regEx))
    // }
    // else if(this.items[reg.target.value].id === 5)
    // {
    //   this.dropDownComponent.controls['inputname'].setValidators(Validators.pattern(this.items[reg.target.value-1].regEx))
    // }
    
    
    for(let i=1; i<=this.items.length;i++){
      if(this.items[reg.target.value].id == this.items[i].id){
        console.log(this.items[reg.target.value].id )
        this.dropDownComponent.controls['inputname'].setValidators(Validators.pattern(this.items[reg.target.value-1].regEx))
        // console.log(reg.target.value-1)
      }
      
    }

    // return this.items[reg.target.value].regEx
  }
  @Output() childToParrent = new EventEmitter<string>()
  val:any = this.inputname?.value;
  AdditionalInputValue(event:any){
    // console.log(this.inputname?.['status'])
    // console.log(this.val)
    if(this.inputname?.['status'] === 'VALID'){
      this.childToParrent.emit(event.target.value); 
    }
    else{this.childToParrent.emit('');}
    // this.childToParrent.emit(this.val); 

    
  }
get selectedType(){return this.dropDownComponent.get('selectedType')}
get inputname(){return this.dropDownComponent.get('inputname')}
}