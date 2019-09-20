import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url:string = 'https://angular-http-81a8b.firebaseio.com/';

  constructor(private http:HttpClient) { }
  postData(data){
  return this.http.post(` ${this.url}users.json`,data);  //API and data
  }
}
