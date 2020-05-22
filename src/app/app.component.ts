import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyBUliWnlvbI9C7xH_bnYFKFhxnmtQRn3uw",
      authDomain: "bookshelves-92d22.firebaseapp.com",
      databaseURL: "https://bookshelves-92d22.firebaseio.com",
      projectId: "bookshelves-92d22",
      storageBucket: "bookshelves-92d22.appspot.com",
      messagingSenderId: "58264172201",
      appId: "1:58264172201:web:f52f227268e821770adbb8",
      measurementId: "G-ZTCJJP369Y"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
