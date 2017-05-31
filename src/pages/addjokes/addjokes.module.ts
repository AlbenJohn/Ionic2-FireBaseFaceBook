import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddjokesPage } from './addjokes';

@NgModule({
  declarations: [
    AddjokesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddjokesPage),
  ],
  exports: [
    AddjokesPage
  ]
})
export class AddjokesPageModule {}
