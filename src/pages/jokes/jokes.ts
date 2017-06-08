import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddjokesPage } from '../addjokes/addjokes';
import { FIREBASE_PROVIDERS, defaultFirebase,AngularFire,FirebaseListObservable } from 'angularFire2';
import firebase from 'firebase';
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
    TotalLikes 
  constructor(public navCtrl: NavController, public navParams: NavParams,fb:AngularFire) {

        

      this.JokeList = fb.database.list("/JokeList");
        this.JokeList.forEach(element => {
            console.log(element);
            // this.TotalLikes = this.JokeList.$ref.on
            // console.log("Totla Likes" + this.TotalLikes);

        });

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

    addLikes(Jokes , tot ){
      //console.log("ijhnjskdj" + Jokes);
      //console.log("ijhnjskdj" + tot);
      var dsd = 1;
      var sum = parseInt(tot) + dsd;
      //console.log("ijhnjskdj" + sum);
      this.JokeList.update(Jokes,{
          Likes: sum,
      }).then(newcontact => {

      });

    }

     adddisLikes(Jokes , tot ){
      //console.log("ijhnjskdj" + Jokes);
      //console.log("ijhnjskdj" + tot);
      var dsd = 1;
      var sum = parseInt(tot) + dsd;
      //console.log("ijhnjskdj" + sum);
      this.JokeList.update(Jokes,{
          unlikes: sum,
      }).then(newcontact => {

      });

    }

}
