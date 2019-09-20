import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  carData:any='';
  cars=[
    {
      name:'Lion',
      img:'https://cdn.pixabay.com/photo/2014/12/22/10/04/lion-577104__340.jpg',
      description:'The lion (Panthera leo) is a large mammal of the Felidae (cat) family. Some large males weigh over 250 kg (550 lb). Today, wild lions live in sub-Saharan Africa and in Asia. ... They were found in most of Africa, across Eurasia from western Europe to India, and in the Americas from the Yukon to Peru.'


    },
    {
      name:'Tiger',
      img:'https://cdn.pixabay.com/photo/2017/01/12/21/42/amurtiger-1975790__340.jpg',
      description:'The tiger is a large mammal of the Felidae (cat) family. Some large males weigh over 250 kg (550 lb). Today, wild lions live in sub-Saharan Africa and in Asia. ... They were found in most of Africa, across Eurasia from western Europe to India, and in the Americas from the Yukon to Peru.'
    },
    {
      name:'Rabbit',
      img:'https://cdn.pixabay.com/photo/2014/06/21/08/43/rabbit-373691__340.jpg',
      description:'The rabbit is a large mammal of the Felidae (cat) family. Some large males weigh over 250 kg (550 lb). Today, wild lions live in sub-Saharan Africa and in Asia. ... They were found in most of Africa, across Eurasia from western Europe to India, and in the Americas from the Yukon to Peru.'
    },
    {
      name:'Elephant',
      img:'https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167__340.jpg',
      description:'The elephant is a large mammal of the Felidae (cat) family. Some large males weigh over 250 kg (550 lb). Today, wild lions live in sub-Saharan Africa and in Asia. ... They were found in most of Africa, across Eurasia from western Europe to India, and in the Americas from the Yukon to Peru.'

    }
  ]

  constructor() { }
  sendCar(car){
    this.carData=car;
    }
  ngOnInit() {
  }

}
