import { AsramamdetailsPage } from './../asramamdetails/asramamdetails';
import { HoteldetailsPage } from './../hoteldetails/hoteldetails';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController, Platform } from 'ionic-angular';

import{ AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  selector:any;
  
  as_email:any;
  as_password:any;
  
  password:any;
  email:any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    
    public AF:AngularFireAuth,
    public AlrtCtrl:AlertController,
    public Loading:LoadingController,
    public AD: AngularFireDatabase,
    private ionicPlatform: Platform
    
    ){
         
    let load =this.Loading.create({

      spinner:'ios',
      content:'Logout',
        
    });

    load.present();

      this.ionicPlatform.ready().then((res)=>{

          load.dismiss();

      });
      
      this.selector = "asramam";

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  login(){

    this.navCtrl.pop();

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

     let load = this.Loading.create({

      content:'Creating Account...',
      spinner:'ios',
      duration:3000
      
     });
     
     load.present();

     load.onDidDismiss(() =>{

      let alert = this.AlrtCtrl.create({

        title: 'Success',
        message:'Account created Successfull',
        buttons:[{
          text:'OK',
          handler: () =>{
            this.navCtrl.push(HoteldetailsPage);
          }
        }]
      });

      this.email = null;
      this.password = null;

      alert.present();


     });

    
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


  else{

  this.AF.auth.createUserWithEmailAndPassword(this.as_email,this.as_password).then(result =>{

    //console.log(result);

    let load = this.Loading.create({

      content:'Creating Account...',
      spinner:'ios',
      duration:3000
      
     });
     
     load.present();

     load.onDidDismiss(() =>{

    let alert = this.AlrtCtrl.create({

      title: 'Success',
      message:'Account created Successfull',
      buttons:[{
        text:'OK',
        handler: () =>{

          this.navCtrl.push(AsramamdetailsPage);
          
        }
      }]
    });
    alert.present();
    this.as_email = null;
    this.as_password = null;  
  });
    
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
