import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JokesPage } from './jokes';
import { AddjokesPage } from '../addjokes/addjokes';

@NgModule({
  declarations: [
    JokesPage,
    AddjokesPage
  ],
  imports: [
    IonicPageModule.forChild(JokesPage),
  ],
  exports: [
    JokesPage,
    AddjokesPage
  ]
})
export class JokesPageModule {}
