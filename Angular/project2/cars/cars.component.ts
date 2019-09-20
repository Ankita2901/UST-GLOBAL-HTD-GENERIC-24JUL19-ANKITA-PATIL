import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit { 

  carData:any='';
  cars=[
    {
      name:'BMW',
      img:'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
      description:'BMW AG originated with three other manufacturing companies, Rapp Motorenwerke and Bayerische Flugzeugwerke (BFw) in Bavaria, and Fahrzeugfabrik Eisenach in Thuringia. The company is now known as BMW or Bayerische Motoren Werke. Aircraft engine manufacturer Rapp Motorenwerke became Bayerische Motorenwerke in 1916. The engine manufacturer, which built proprietary industrial engines after World War I, was then bought by the owner of BFw who then merged BFw into BMW and moved the engine works onto BFws premises. BFws motorcycle sideline was improved upon by BMW and became an integral part of their business.'


    },
    {
      name:'AUDI',
      img:'https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897__340.jpg',
      description:'The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz.[10] After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present day form of the company.'
    },
    {
      name:'NANO',
      img:'https://cdn.pixabay.com/photo/2017/10/18/19/54/tata-nano-2865322__340.jpg',
      description:'AG originated with three other manufacturing companies, Rapp Motorenwerke and Bayerische Flugzeugwerke (BFw) in Bavaria, and Fahrzeugfabrik Eisenach in Thuringia. The company is now known as BMW or Bayerische Motoren Werke.'
    },
    {
      name:'JEEP',
      img:'https://cdn.pixabay.com/photo/2017/05/15/23/54/safari-2316475__340.png',
      description:'AG originated with three other manufacturing companies, Rapp Motorenwerke and Bayerische Flugzeugwerke (BFw) in Bavaria, and Fahrzeugfabrik Eisenach in Thuringia. The company is now known as BMW or Bayerische Motoren Werke.'
    }

  ]

  constructor() { }
  sendCar(car){
    this.carData=car;
    }
  ngOnInit() {
   
  }

}
