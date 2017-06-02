import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { DashboardPage } from '../dashboard/dashboard';
import { DatePicker } from '@ionic-native/date-picker';
import { RegisterPage } from '../register/register';
import { FIREBASE_PROVIDERS,defaultFirebase,AngularFire,FirebaseListObservable,AuthProviders,AuthMethods } from 'angularFire2';
import { UserdetailsProvider } from '../../providers/userdetails/userdetails';
 import firebase from 'firebase';
// declare var require:any;

// var firebase = require("firebase");

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//  var config = {
//     apiKey: "AIzaSyCWIcoASInNEMM5Zq5GxHbyjb39ukawh5E",
//     authDomain: "jokesfeed-f1d48.firebaseapp.com",
//     databaseURL: "https://jokesfeed-f1d48.firebaseio.com",
//     projectId: "jokesfeed-f1d48",
//     storageBucket: "jokesfeed-f1d48.appspot.com",
//     messagingSenderId: "536997009354"
//   }; 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[Facebook,DatePicker,UserdetailsProvider]

})
export class LoginPage {
usName:string = 'admin';
//password:string = 'password'
public username:string = '';
public password:string = '';
userProfile: any = null;


oginCreds: any = {}
fbProfile: any
posts: any
_credentials:any;
_authData:any;


today
  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFire, public AlertCtrl: AlertController,
  public fb:Facebook, datePicker: DatePicker, public uddd:UserdetailsProvider) {

   
 // firebase.initializeApp(config);
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
// facebook_login(){
//   this.fb.login(['public_profile', 'user_friends', 'email'])
//   .then((res) =>{ 
//       let userId = res.authResponse.userID;
//       this.navCtrl.setRoot(HomePage);
//     console.log('Logged into Faceboogfdggfk!', userId)
//   })
//   .catch(e => console.log('Error logging into Facebook', e));

              

// }

//FB login - firebase

facebookLoginfirebase(): void
{
this.fb.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
      firebase.database().ref('/userProfile').child(success.uid)
               .set({ email: this.userProfile.email, image: this.userProfile.photoURL, Name: this.userProfile.displayName });
          //this.uddd.getdetails(success)
                    console.log("Username email address jhjijkdnjknjfkd" + this.userProfile.email)

         this.navCtrl.setRoot(HomePage);

        })
        .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
      });

    }).catch((error) => { console.log(error) });
  }
/////Stoaring details into Database

// _setUpUser(_credentials, _authData) {
//     var ref = this.af.database.object('JokesFeed/userProfile' + _authData.uid)
//     var data = {
//       "provider": _authData.providerData[0],
//       "avatar": (_credentials.imageUri || "missing"),
//       "displayName": _authData.email,
//     };

//     return ref.set(data).then(function () {
//       return data
//     }).catch(function (_error) {
//       return _error
//     })
//   }

// //Getting user profile 

// _FBUserProfile() {

//     return new Promise((resolve, reject) => {
//       this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(100).height(100).as(picture_small),picture.width(720).height(720).as(picture_large)', [])
//         .then((profileData) => {
//           console.log(JSON.stringify(profileData));
//           return resolve(profileData);
//         }, (err) => {
//           console.log(JSON.stringify(err));
//           return reject(err);
//         });
//     });
//   }




// doFacebookLogin() {
//     var _authInfo

//     this.fb.login(['email'])
//       .then((_response) => {
//         console.log(_response)

//         _authInfo = _response

//         return this._FBUserProfile();

//       }).then((success) => {
//         //let p: any = firebase.auth.FacebookAuthProvider as firebase.auth.FacebookAuthProvider_Instance
//         this.fbProfile = success;
//         let creds = (firebase.auth.FacebookAuthProvider as any).credential(_authInfo.authResponse.accessToken)
//         let providerConfig = {
//           provider: AuthProviders.Facebook,
//           method: AuthMethods.OAuthToken,
//           remember: 'default',
//           scope: ['email'],
//         };
//         this.af.auth.login(creds, providerConfig)
//           .then((success) => {
//             console.log("Firebase success: " + JSON.stringify(success));
//             alert(JSON.stringify(success))

//             return this._setUpUser(creds, success.auth)
//           })
//           .catch((error) => {
//             console.log("Firebase failure: " + JSON.stringify(error));
//             alert(JSON.stringify(error))
//           });

//       })
//       .catch((_error) => { console.log(_error) })
//   }


}
