import { Component,ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { JokesPage } from '../pages/jokes/jokes';
import { ProfilePage } from '../pages/profile/profile';
import { LogoutPage } from '../pages/logout/logout';
import { AdMob, AdMobOptions } from '@ionic-native/admob';

interface AdMobType {
  banner: string,
  interstitial: string
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage = LoginPage;
    //rootPage = JokesPage;
  pages : Array<{title: string,component: any,icon: any}>
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private admob: AdMob) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

var admobid: AdMobType;
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
          banner: 'ca-app-pub-9059696239576012/2649118342',
          interstitial: 'ca-app-pub-9059696239576012/2649118342'
        };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
          banner: 'ca-app-pub-9059696239576012/2649118342',
          interstitial: 'ca-app-pub-9059696239576012/2649118342'
        };
      } else {
        admobid = { // for Windows Phone
          banner: 'ca-app-pub-9059696239576012/2649118342',
          interstitial: 'ca-app-pub-9059696239576012/2649118342'
        };
      }

      this.admob.createBanner({
        adId: admobid.banner,
        position:admob.AD_POSITION.BOTTOM_CENTER,
        isTesting: true,//comment this out before publishing the app
        autoShow: true
      })
      


    });

    this.pages =[{title:"Home",component:HomePage,icon:"home"},
           {title:"Dashboard",component:DashboardPage,icon:"folder"},
           {title:"Jokes",component:JokesPage,icon:"heart"},
           {title:"Profile",component:ProfilePage,icon:"contact"},
            {title:"Logout",component:LogoutPage,icon:"power"}];
  }

  openPage(page){
      this.nav.setRoot(page.component);
  }
}

