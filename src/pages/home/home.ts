import { AsramamPage } from './../asramam/asramam';
import { HotelPage } from './../hotel/hotel';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  email:any;
  password:any;
  //usertype:any;

  constructor(public navCtrl: NavController,
    
    public AF:AngularFireAuth,
    public loading:LoadingController,
    public AlrtCtrl:AlertController,
    public AD:AngularFireDatabase

    ) { }

  signup(){

    this.navCtrl.push(SignupPage);
    this.email = null;
    this.password =null;

  }

  /*.........................LOGIN PAGE....................................... */

  login(){

    if(this.email == null){

      let alert = this.AlrtCtrl.create({

        title:'Error',
        message: 'Enter an valid Email id',
        buttons: [{

          text:'OK',
          handler: ()=>{

            this.email = null;
            this.password = null;

          }
          
        }]

      });

      alert.present();

    }

    else if(this.password == null){

      let alert = this.AlrtCtrl.create({

        title:'Error',
        message: 'Enter an valid password',
        buttons: [{

          text:'OK',
          handler: ()=>{

            this.email = null;
            this.password = null;

          }
          
        }]

      });

      alert.present();

    }

    else{

    this.AF.auth.signInWithEmailAndPassword(this.email,this.password).then(result =>{

      let load = this.loading.create({

        content:'Signing In..',
        dismissOnPageChange:true,
        spinner:'ios',
        duration:2000
      
      });

      load.present();

      var UserId = this.AF.auth.currentUser.uid;
      return this.AD.database.ref('/users/' + UserId).once('value').then( snapshot => {
        
        let usertype = (snapshot.val() && snapshot.val().user);

          
      //console.log(usertype);

      if(usertype == 'hotel'){
        
      this.navCtrl.push(HotelPage)
      this.email = null;
      this.password = null;
      }
      else if(usertype == 'asramam'){
        this.navCtrl.push(AsramamPage);
        this.password = null;
        this.email =null; 
      }

      
      }).catch(err =>{

        let alrt = this.AlrtCtrl.create({

          message:err,
          buttons:['ok']
        });

        alrt.present();

      })

      
    
 
    }).catch(err => {

        let alert = this.AlrtCtrl.create({

          title:'Error',
          message: err,
          buttons: [{

            text:'OK',
            handler: ()=>{

              this.email = null;
              this.password = null;

            }
            
          }]

        });

        alert.present();

    });
  }
}
}

