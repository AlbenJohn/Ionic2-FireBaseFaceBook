import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { DashboardPage } from '../dashboard/dashboard';
import { DatePicker } from '@ionic-native/date-picker';
import { RegisterPage } from '../register/register';
import { FIREBASE_PROVIDERS, defaultFirebase,AngularFire,FirebaseListObservable } from 'angularFire2';

 import firebase from 'firebase';
// declare var require:any;

// var firebase = require("firebase");

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 var config = {
    apiKey: "AIzaSyCWIcoASInNEMM5Zq5GxHbyjb39ukawh5E",
    authDomain: "jokesfeed-f1d48.firebaseapp.com",
    databaseURL: "https://jokesfeed-f1d48.firebaseio.com",
    projectId: "jokesfeed-f1d48",
    storageBucket: "jokesfeed-f1d48.appspot.com",
    messagingSenderId: "536997009354"
  }; 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[Facebook,DatePicker]

})
export class LoginPage {
usName:string = 'admin';
//password:string = 'password'
public username:string = '';
public password:string = '';

today
  constructor(public navCtrl: NavController, public navParams: NavParams, public AlertCtrl: AlertController,public fb:Facebook, datePicker: DatePicker) {

   
  firebase.initializeApp(config);
 this.today = new Date().toISOString();


  }
loginUser(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((auth)  =>{
          this.navCtrl.setRoot(HomePage);
    })
      .catch(err => {console.log('Error logging into Facebook', err)
                    this.ShowAlert();

      });

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  //Register navigation
    registerNav(){
          this.navCtrl.push(RegisterPage);
    }
    


   //testing login 
    login(username , emailid){
      console.log(this.usName,this.password);
      console.log(username,emailid);
     if(username == this.usName && emailid == this.password){
          this.navCtrl.setRoot(HomePage);
      }else
      {
        console.log("Login Error");
        this.ShowAlert();
      }


    }
    
    ShowAlert(){
      let Alert = this.AlertCtrl.create({
     title:"Login Error",
     subTitle:"Please enter the correct username and password",
     buttons:['OK'] 

      });
      Alert.present();
    }


//FB login
facebook_login(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res) =>{ 
      let userId = res.authResponse.userID;
      this.navCtrl.setRoot(HomePage);
    console.log('Logged into Faceboogfdggfk!', userId)
  })
  .catch(e => console.log('Error logging into Facebook', e));

              

}


}
