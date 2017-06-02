import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FIREBASE_PROVIDERS, defaultFirebase,AngularFire,FirebaseListObservable } from 'angularFire2';

/**
 * Generated class for the AddjokesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addjokes',
  templateUrl: 'addjokes.html',
})
export class AddjokesPage {
    JokeList: FirebaseListObservable<any>;
      public Jokes:string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb:AngularFire,public AlertCtrl: AlertController) {

        this.JokeList = fb.database.list('/JokeList');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddjokesPage');
  }
AddJokesFirebase(name){
  if(!name){
  this.ShowAlert();
  }else
  {

    this.JokeList.push({
        Jokes: name,
        Likes: 0,
        unlikes: 0
      
      }).then( newContact => {
       this.navCtrl.pop();
      }, error => {
       console.log(error);
      });
   }
}


ShowAlert(){
      let Alert = this.AlertCtrl.create({
     title:"Input error",
     subTitle:"Please enter the Jokes",
     buttons:['OK'] 

      });
      Alert.present();
    }


}
