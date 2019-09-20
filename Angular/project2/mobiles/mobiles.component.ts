import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  carData:any='';
  cars=[
    {
      name:'iPhone',
      img:'https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617__340.jpg',
      description:'iphone manufacturing companies, Rapp Motorenwerke and Bayerische Flugzeugwerke (BFw) in Bavaria, and Fahrzeugfabrik Eisenach in Thuringia. The company is now known as BMW or Bayerische Motoren Werke. Aircraft engine manufacturer Rapp Motorenwerke became Bayerische Motorenwerke in 1916. The engine manufacturer, which built proprietary industrial engines after World War I, was then bought by the owner of BFw who then merged BFw into BMW and moved the engine works onto BFws premises. BFws motorcycle sideline was improved upon by BMW and became an integral part of their business.'


    },
    {
      name:'Samsung',
      img:'https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928__340.jpg',
      description:'The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz.[10] After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present day form of the company.'
    },
    {
      name:'Honor',
      img:'https://cdn.pixabay.com/photo/2017/07/31/13/13/huawei-2557932__340.jpg',
      description:'The honor company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz.[10] After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present day form of the company.'
  
    },
    {
      name:'Nokia',
      img:'https://cdn.pixabay.com/photo/2013/07/12/19/00/slider-154174__340.png',
      description:' going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz.[10] After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present day form of the company.'
  
    }
  ]

  constructor() { }
  sendCar(car){
    this.carData=car;
    }
  ngOnInit() {
  }

}
