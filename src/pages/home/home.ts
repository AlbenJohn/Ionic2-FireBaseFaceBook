import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserdetailsProvider } from '../../providers/userdetails/userdetails';
import { FIREBASE_PROVIDERS,defaultFirebase,AngularFire,FirebaseListObservable,AuthProviders,AuthMethods } from 'angularFire2';

 import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[UserdetailsProvider]

})
export class HomePage {

userdetailslogin :any = null;
username:string;
profileimage
emailid:string;
user
  constructor(public navCtrl: NavController,public uddd:UserdetailsProvider,public fb: AngularFire) {

    this.user = firebase.auth().currentUser.uid;

  this.userdetailslogin =   fb.database.object(`/userProfile/${this.user}`)
  .subscribe(userdetails => {
  this.username = userdetails.Name;
  this.profileimage = userdetails.image;
  this.emailid = userdetails.email;

  console.log(userdetails) 
});


    console.log("Home Page entered details" +  this.profileimage);
  }

   
}
