import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  carData:any='';
  cars=[
    {
      name:'TV9',
      img:'https://i.ytimg.com/vi/kpfV38Hcnds/maxresdefault.jpg',
      description:'tv9 originated with three other manufacturing companies, Rapp Motorenwerke and Bayerische Flugzeugwerke (BFw) in Bavaria, and Fahrzeugfabrik Eisenach in Thuringia. The company is now known as BMW or Bayerische Motoren Werke. Aircraft engine manufacturer Rapp Motorenwerke became Bayerische Motorenwerke in 1916. The engine manufacturer, which built proprietary industrial engines after World War I, was then bought by the owner of BFw who then merged BFw into BMW and moved the engine works onto BFws premises. BFws motorcycle sideline was improved upon by BMW and became an integral part of their business.'


    },
    {
      name:'PUBLIC TV',
      img:'https://yt3.ggpht.com/a/AGF-l786EplyyOpsELcO47EpIBAu0LxJaCbDz1l5qw=s900-c-k-c0xffffffff-no-rj-mo',
      description:'The origins of the  public tv company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz.[10] After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present day form of the company.'
    },
    {
      name:'NEWS9',
      img:'https://image3.mouthshut.com/images/imagesp/925599222s.jpg',
      description:'news9 originated with three other manufacturing companies, Rapp Motorenwerke and Bayerische Flugzeugwerke (BFw) in Bavaria, and Fahrzeugfabrik Eisenach in Thuringia. The company is now known as BMW or Bayerische Motoren Werke. Aircraft engine manufacturer Rapp Motorenwerke became Bayerische Motorenwerke in 1916. The engine manufacturer, which built proprietary industrial engines after World War I, was then bought by the owner of BFw who then merged BFw into BMW and moved the engine works onto BFws premises. BFws motorcycle sideline was improved upon by BMW and became an integral part of their business.'


    },
    {
      name:'CNN IBN',
      img:'https://images.news18.com/ibnlive/uploads/2015/12/cnn-ibn.jpg',
      description:'cnn-ibn with three other manufacturing companies, Rapp Motorenwerke and Bayerische Flugzeugwerke (BFw) in Bavaria, and Fahrzeugfabrik Eisenach in Thuringia. The company is now known as BMW or Bayerische Motoren Werke. Aircraft engine manufacturer Rapp Motorenwerke became Bayerische Motorenwerke in 1916. The engine manufacturer, which built proprietary industrial engines after World War I, was then bought by the owner of BFw who then merged BFw into BMW and moved the engine works onto BFws premises. BFws motorcycle sideline was improved upon by BMW and became an integral part of their business.'


    }
  ]

  constructor() { }
  sendCar(car){
    this.carData=car;
    }

  ngOnInit() {
  }

}
