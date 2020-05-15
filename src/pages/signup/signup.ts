import { AsramamdetailsPage } from './../asramamdetails/asramamdetails';
import { HoteldetailsPage } from './../hoteldetails/hoteldetails';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';

import{ AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  selector:any;
  as_mobile:any;
  as_name:any;
  as_email:any;
  as_password:any;
  mobile_phn:any;
  password:any;
  email:any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    
    public AF:AngularFireAuth,
    public AlrtCtrl:AlertController,
    public Loading:LoadingController,
    public AD: AngularFireDatabase
    ){
      
      
      

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  login(){

    this.navCtrl.pop();

  }

  asramam(){

    this.navCtrl.push(HomePage)
  }

/*.................................SIGNUP HOTEL...............................*/


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

   
    else{

    this.AF.auth.createUserWithEmailAndPassword(this.email,this.password).then(result =>{

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
            this.navCtrl.push(HoteldetailsPage);
            
          }
        }]
      });

      this.email = null;
      this.password = null;

      alert.present();
    }).catch(err =>{

      let alert = this.AlrtCtrl.create({

        title: 'Error',
        message:err,
        buttons:['OK']
      });

      alert.present();  
      this.email = null;
      this.password = null;
    });
  }
}

/*....................................SIGNUP ASRAMAM.......................................*/

asramam_create(){

  if(this.as_email == null ){

    let alert = this.AlrtCtrl.create({

      title: 'Error',
      message:'Enter the valid email',
      buttons:['OK']
    });

    alert.present();  
  }

  else if(this.as_password == null){

    let alert = this.AlrtCtrl.create({

      title: 'Error',
      message:'Enter the valid Password',
      buttons:['OK']
    });

    alert.present();  
  }

  else if( this.as_name == null){
    let alert = this.AlrtCtrl.create({

      title: 'Error',
      message:'Enter the valid Hotel Name',
      buttons:['OK']
    });

    alert.present();  
  }

  else if(this.as_mobile ==null){

    let alert = this.AlrtCtrl.create({

      title: 'Error',
      message:'Enter the valid Mobile number',
      buttons:['OK']
    });

    alert.present();  
  }

  else{

  this.AF.auth.createUserWithEmailAndPassword(this.as_email,this.as_password).then(result =>{

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
          this.navCtrl.push(AsramamdetailsPage);
          
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

}
