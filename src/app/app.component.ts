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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage = LoginPage;
  pages : Array<{title: string,component: any,icon: any}>
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();




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

