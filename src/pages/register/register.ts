import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import firebase from 'firebase';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// declare var require:any;

// var firebase = require("firebase");
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
public username:string = '';
public password:string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
//  var config = {
//     apiKey: "AIzaSyCWIcoASInNEMM5Zq5GxHbyjb39ukawh5E",
//     authDomain: "jokesfeed-f1d48.firebaseapp.com",
//     databaseURL: "https://jokesfeed-f1d48.firebaseio.com",
//     projectId: "jokesfeed-f1d48",
//     storageBucket: "jokesfeed-f1d48.appspot.com",
//     messagingSenderId: "536997009354"
//   }; 
    //   firebase.initializeApp(config);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

signupUser(email: string, password: string): firebase.Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {

      console.log(email,password);
        firebase.database().ref('/userProfile').child(newUser.uid)
        .set({ email: email });
  });
}
CancelBtnClick(){
  this.navCtrl.pop();
}
}
