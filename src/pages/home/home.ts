import { HotelPage } from './../hotel/hotel';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  email:any;
  password:any;

  constructor(public navCtrl: NavController,
    
    public AF:AngularFireAuth,
    public loading:LoadingController,
    public AlrtCtrl:AlertController

    ) { }

  signup(){

    this.navCtrl.push(SignupPage);

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
        spinner:'ios'
      });

      load.present();

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

