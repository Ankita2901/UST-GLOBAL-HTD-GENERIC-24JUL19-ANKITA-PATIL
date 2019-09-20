import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  bikeData: any='';


  bikes = [
    {
      brand : 'KTM',
      img:'https://pixabay.com/photos/motorbike-garage-repairs-hobby-407186/',
      description:'its a sports bike'
    },
    {
      brand : 'Royal Enfield',
      img:'https://pixabay.com/photos/motorbike-garage-repairs-hobby-407186/',
      description:'its a bullet'
    },
    {
      brand : 'TVS Apache 180',
      img:'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg',
      description:'commercial bike'
    },
    {
      brand : 'Ninja',
      img:'https://cdn.pixabay.com/photo/2016/09/23/21/08/motorcycle-1690452__340.jpg',
      description:'its a highly demanded bike'
    },
    {
      brand : 'Pulsar',
      img:'https://pixabay.com/photos/motorbike-garage-repairs-hobby-407186/',
      description:'rough bike '
    }
  ];
  
  constructor() { }
  sendBike(bike){
this.bikeData=bike;
  }

  ngOnInit() {
  }

}
