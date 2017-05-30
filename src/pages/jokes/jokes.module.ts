import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JokesPage } from './jokes';

@NgModule({
  declarations: [
    JokesPage,
  ],
  imports: [
    IonicPageModule.forChild(JokesPage),
  ],
  exports: [
    JokesPage
  ]
})
export class JokesPageModule {}
