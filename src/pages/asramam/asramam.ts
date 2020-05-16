import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { c, b } from '@angular/core/src/render3';

@IonicPage()
@Component({
  selector: 'page-asramam',
  templateUrl: 'asramam.html',
})
export class AsramamPage {

  types:any;
  items = [];
  keys:any;

  c_keys:any;
  c_items = [];

  b_items = [];
  b_keys:any;
  


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    
    public AF:AngularFireAuth,
    public AD:AngularFireDatabase
    ) 
    {

      this.types = "food";

      console.log(this.types);
       this.AD.database.ref('/HotelDonation/Food').once('value').then( snapshot => {
        
          this.keys = (snapshot.val() && snapshot.val());
          this.items = Object.values(this.keys);
       });
     
    
       this.AD.database.ref('/HotelDonation/Clothes').once('value').then( snapshot => {
        
        this.c_keys = (snapshot.val() && snapshot.val());
        this.c_items = Object.values(this.c_keys);
     });


     this.AD.database.ref('/HotelDonation/Books').once('value').then( snapshot => {
        
      this.b_keys = (snapshot.val() && snapshot.val() || "No Donations");
      this.b_items = Object.values(this.b_keys);
      
    });
    
    
    
    
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsramamPage');
    
  }

  signout(){

    this.AF.auth.signOut(); 

  }

 

}
