import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserdetailsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserdetailsProvider {
        userProfile:any = null;
  constructor() {

    console.log('Hello UserdetailsProvider Provider');


  }
 getdetails(userdetails: any){
  console.log('User details ' + JSON.stringify(userdetails));
  this.userProfile = userdetails;

  console.log('after User details ' + JSON.stringify(this.userProfile));
 }

//  GetDed():any{
//    return this.userProfile.GetDed().then(function(data){

//     console.log(data);

//    });
//  }

}
