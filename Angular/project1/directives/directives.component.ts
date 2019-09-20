import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  condition = true;
  constructor() { }


removeUser(p){
let index = this.users.indexOf(p);
this.users.splice(index, 1);
this.condition = true;
}

  users = [
    {
      id: 34,
      name: 'scooby',
      city: 'belgaum'
    },
    {
      id: 45,
      name: 'meaow',
      city: 'pune'
    },
    {
      id: 55,
      name: 'stuart',
      city: 'bangalore'
    },
    {
      id: 77,
      name: 'rockey',
      city: 'sikkim'
    },
    {
      id: 66,
      name: 'fifi',
      city: 'bhopal'
    }
  ]
  cut(){
    this.condition= false;
  }

  ngOnInit() {
  }

}
