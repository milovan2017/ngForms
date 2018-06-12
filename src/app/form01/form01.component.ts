import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css']
})
export class Form01Component implements OnInit {
   model= {
      firstname:"",
      lastname: ""
   }
  constructor() { }
  onSubmit (){
     alert(`Firstname: ${this.model.firstname} Lastname: ${this.model.lastname}`)
 }
  ngOnInit() {
  }

}
