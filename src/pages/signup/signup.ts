import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';

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
    
    public AF:AngularFireAuth,
    public AlrtCtrl:AlertController,
    public Loading:LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  asramam(){

    this.navCtrl.push(HomePage)
  }


  create_hotel(){

    if(this.email == null ){

      let alert = this.AlrtCtrl.create({

        title: 'Error',
        message:'Enter the valid email',
        buttons:['OK']
      });

      alert.present();  
    }

    else if(this.password == null){

      let alert = this.AlrtCtrl.create({

        title: 'Error',
        message:'Enter the valid Password',
        buttons:['OK']
      });

      alert.present();  
    }

    else if( this.hotel_name == null){
      let alert = this.AlrtCtrl.create({

        title: 'Error',
        message:'Enter the valid Hotel Name',
        buttons:['OK']
      });

      alert.present();  
    }

    else if(this.mobile_phn ==null){

      let alert = this.AlrtCtrl.create({

        title: 'Error',
        message:'Enter the valid Mobile number',
        buttons:['OK']
      });

      alert.present();  
    }

    else{

    this.AF.auth.createUserWithEmailAndPassword(this.email,this.password).then(result =>{

      console.log(result);

     let alert = this.AlrtCtrl.create({

        title: 'Success',
        message:'Account created Successfull',
        buttons:[{
          text:'OK',
          handler: () =>{

            let load = this.Loading.create({
              spinner:'ios',
              dismissOnPageChange:true,
              content:'loading'
            });
            load.present();
            this.navCtrl.push(HomePage);
            
          }
        }]
      });

      alert.present();
    }).catch(err =>{

      let alert = this.AlrtCtrl.create({

        title: 'Error',
        message:err,
        buttons:['OK']
      });

      alert.present();  
    });
  }

  }

  login(){

    this.navCtrl.pop();

  }


}
