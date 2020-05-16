import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-asramam',
  templateUrl: 'asramam.html',
})
export class AsramamPage {

  types:any;
  items = [];
  trail:any;
  itm:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    
    public AF:AngularFireAuth,
    public AD:AngularFireDatabase
    ) 
    {

       this.AD.database.ref('/HotelDonation/Food').once('value').then( snapshot => {
        
          this.trail = (snapshot.val() && snapshot.val());

        // var hotelName = (snapshot.val() && snapshot.val().HotelName);
        // var food = (snapshot.val() && snapshot.val().Food);
        // var quantity = (snapshot.val() && snapshot.val().Quantity);
        // var mobile_number = (snapshot.val() && snapshot.val().MobileNumber); 
        const myvalue = Object.value

        console.log(this.trail);

       });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsramamPage');
    
  }

 

}
