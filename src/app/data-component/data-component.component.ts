import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.scss']
})
export class DataComponentComponent {
data:any;
AdditionalValue:string='';
//storing the values from APP, to display in data-component
  constructor(private router: Router, private route:ActivatedRoute){
    this.data = this.router.getCurrentNavigation()?.extras.state?.['dataToChild'];
    this.AdditionalValue = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
  }

}

