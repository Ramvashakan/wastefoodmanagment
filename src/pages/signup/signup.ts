import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  selector:any;
  hotel_name:any;
  email:any;
  password:any;
  mobile_phn:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    
    public AF:AngularFireAuth
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  asramam(){

    this.navCtrl.push(HomePage)
  }

  hotel(){

    
  }

  create(){

    

  }

  login(){

    this.navCtrl.pop();

  }


}
