import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'loginProyect';

  
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA_m3LcyMH5oMcZlWc-zm6YY-Fq4RE44rQ",
      authDomain: "http-134a2.firebaseapp.com"
    });
  }
}