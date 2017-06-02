import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddjokesPage } from '../addjokes/addjokes';
import { FIREBASE_PROVIDERS, defaultFirebase,AngularFire,FirebaseListObservable } from 'angularFire2';

/**
 * Generated class for the JokesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-jokes',
  templateUrl: 'jokes.html',
})
export class JokesPage {
    JokeList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,fb:AngularFire) {

            this.JokeList = fb.database.list('/JokeList');

  }
           convertoArray(val)
           {
           return Array.from(val);
           }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JokesPage');
  }
    moveaddPage()
    {
             this.navCtrl.push(AddjokesPage);
    }

    addLikes(){
      //console.log(this.JokeList.Likes);
this.JokeList.push({
        Likes: 1,
      
      }).then( newContact => {


      }, error => {
       console.log(error);
      });
    }

    adddislikes(){

    }
}
