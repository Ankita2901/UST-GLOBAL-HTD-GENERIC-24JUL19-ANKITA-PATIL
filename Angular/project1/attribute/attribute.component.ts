import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  isSuccess=true;
  classArray = ["text-danger","bg-dark", "mt-5"];
  constructor() { }
  
 

  ngOnInit() {
    setTimeout(()=> {
      this.isSuccess = false;

    
  },10000);
  setInterval(() => {
    this.isSuccess = !this.isSuccess;

  },1000)


  }
}