import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
public Name :string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public AlertCtrl:AlertController) {
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

signupUser(name :string, email: string, password: string): firebase.Promise<any>{

console.log(name,email,password);

  if((email == '') || password == '' || name == '') 
      {
      this.ShowAlert("Please fill all the fields");
 }else{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {

      console.log(email,password);
        firebase.database().ref('/userProfile').child(newUser.uid)
        .set({ Name: name, email: email , password:password });

        this.navCtrl.pop();
  });
}
}

ShowAlert(Message: string){
      let Alert = this.AlertCtrl.create({
     title:"Error",
     subTitle:Message,
     buttons:['OK'] 

      });
      Alert.present();
    }

CancelBtnClick(){
  this.navCtrl.pop();
}
}
