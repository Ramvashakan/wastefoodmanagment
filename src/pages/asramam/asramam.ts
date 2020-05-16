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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    
    public AF:AngularFireAuth,
    public AD:AngularFireDatabase
    ) 
    {

       this.AD.database.ref('/HotelDonation/Food/' ).once('value').then( snapshot => {
        var food = (snapshot.val() && snapshot.val()) ;
        //var quantity = (snapshot.val() && snapshot.val().Quantity) || 'Anonymous';
        //var mobile_number = (snapshot.val() && snapshot.val().MobileNumber) || 'Anonymous';

        console.log(food);

        this.items.push(food);

       });

      

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsramamPage');
  }

  itemSelected(item: string) {
    console.log("Selected Item:", item);
  }

}
