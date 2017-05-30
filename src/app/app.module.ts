import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { JokesPage } from '../pages/jokes/jokes';
import { ProfilePage } from '../pages/profile/profile';
import { LogoutPage } from '../pages/logout/logout';
import { RegisterPage } from '../pages/register/register';

import { AngularFireModule } from 'angularFire2';

 var config = {
    apiKey: "AIzaSyCWIcoASInNEMM5Zq5GxHbyjb39ukawh5E",
    authDomain: "jokesfeed-f1d48.firebaseapp.com",
    databaseURL: "https://jokesfeed-f1d48.firebaseio.com",
    projectId: "jokesfeed-f1d48",
    storageBucket: "jokesfeed-f1d48.appspot.com",
    messagingSenderId: "536997009354"
  };  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    JokesPage,
    ProfilePage,
    LogoutPage,
    RegisterPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(config),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    JokesPage,
    ProfilePage,
    LogoutPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
