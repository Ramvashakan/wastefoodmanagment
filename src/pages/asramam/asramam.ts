import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, Platform } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { CallNumber } from '@ionic-native/call-number';

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

  asramam_name:any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public Loading:LoadingController,
    public AF:AngularFireAuth,
    public AD:AngularFireDatabase,
    public callnumber:CallNumber,
    private ionicPlatform:Platform
     
    ) 
    {

     
    let load =this.Loading.create({

      spinner:'ios',
      content:'Logout',
      
      
    });

    load.present();

      this.ionicPlatform.ready().then((res)=>{

          load.dismiss();

      })


      this.types = "food";

      let UserId = AF.auth.currentUser.uid;

      this.AD.database.ref('/users/' + UserId).once('value').then( snapshot => {   
       this.asramam_name = (snapshot.val() && snapshot.val().asramamName);

      });



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

    let load =this.Loading.create({

      spinner:'ios',
      content:'Logout',
      dismissOnPageChange:true
      
    });

    load.present();

   
    this.AF.auth.signOut().then( res =>{
     
      this.navCtrl.setRoot(HomePage);
       
    });
    

  }

  call(number){

    this.callnumber.callNumber(number,true).then(res => {

      console.log(number);

    }).catch(err =>{

      console.log(err);

    });
  }
}
