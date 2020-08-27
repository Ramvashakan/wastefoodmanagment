import { AsramamPage } from './../pages/asramam/asramam';
import { HotelPage } from './../pages/hotel/hotel';

import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform, AlertController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  
  constructor(platform: Platform, statusBar: StatusBar, 

    public net:Network,
    public Loading:LoadingController,
    private ionicPlatform:Platform,
    public aler: AlertController,
    public AD:AngularFireDatabase,
    public AF: AngularFireAuth,
    splashScreen: SplashScreen,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
       
    let load =this.Loading.create({

      spinner:'ios',
      content:'Logout',
        
    });

    load.present();

      this.ionicPlatform.ready().then((res)=>{

          load.dismiss();

      });


    this.net.onDisconnect().subscribe(()=>{
      let alrt = this.aler.create({
 
       title:'Network Error',
       subTitle:'Check the Internet connection',
       buttons:['Ok']
      });
      alrt.present();
   })
 
   this.AF.authState.subscribe(res =>{
     if(res && res.uid){
 
         var userId = AF.auth.currentUser.uid;
           this.AD.database.ref('/users/' + userId).once('value').then( snapshot => {
            let use = (snapshot.val() && snapshot.val().user)
          
             console.log('user:' + use);
 
           if(use == 'hotel'){
 
             this.rootPage = HotelPage;
           }
           else if(use == 'asramam'){
             
             this.rootPage= AsramamPage;
 
           }
           else if(use == null){
             this.rootPage = HomePage;
           }
     });
   }
   else{
       this.rootPage = HomePage;
   }
     });
   
 }
 }
 