import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private firebaseService:FirebaseService) { }
 
 postUser(form:NgForm)
 {
   this.firebaseService.postData(form.value).subscribe((data) =>{
     console.log(data);
   },err =>{
    console.log(err);
   })
   form.reset();
 }

  ngOnInit() {
  }

}
