import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css'],
  
})
export class TwoWayComponent implements OnInit {

  constructor() { }
  backgroundColor = 'red' ;
buttonEvent(data) {
  
  console.log(data);
}
changeColor(data){
  this.backgroundColor = data;
}
  ngOnInit() : void {
    console.log('oninit implemented');
  }

}
