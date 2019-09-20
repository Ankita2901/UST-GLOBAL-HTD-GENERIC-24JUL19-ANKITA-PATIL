import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  indianNews:any[]=[];
  constructor(private http: HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=2dcf581361cb451cabb67d4a7ca34b52')
    .subscribe(resData => {
      this.indianNews=resData.articles;
      console.log(this.indianNews);
    })
   }

  ngOnInit() {
  }

}
