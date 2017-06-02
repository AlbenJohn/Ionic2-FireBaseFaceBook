import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { HomePage } from '../home/home';
import { Facebook } from '@ionic-native/facebook';
import { DatePicker } from '@ionic-native/date-picker';
import { RegisterPage } from '../register/register';
import { UserdetailsProvider } from '../../providers/userdetails/userdetails';

@NgModule({
  declarations: [
    LoginPage,
    Facebook,
    HomePage,
    DatePicker,
    RegisterPage,
    UserdetailsProvider,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage,
    Facebook,
    HomePage,
    DatePicker,
    RegisterPage,
    UserdetailsProvider,
  ]
})
export class LoginPageModule {}
