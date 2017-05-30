import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { LoginPage } from '../login/login';

@NgModule({
  declarations: [
    RegisterPage,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
  exports: [
    RegisterPage,
    LoginPage
  ]
})
export class RegisterPageModule {}
