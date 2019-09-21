import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor() { }
catdetails : any;

cats = [
  {
    name:'Kitty',
    image:`https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg`,
    behaviour:'Pet cat'

  },

  {
    name:'Dexter',
    image:`https://cdn.pixabay.com/photo/2016/11/29/10/07/animal-1868911_960_720.jpg`,
    behaviour:'Wild cat'
  }
]

sendcat(cat){
  console.log(cat);
}


  ngOnInit() {
  }

}
