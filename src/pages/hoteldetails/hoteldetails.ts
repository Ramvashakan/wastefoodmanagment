import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import{ AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@IonicPage()
@Component({
  selector: 'page-hoteldetails',
  templateUrl: 'hoteldetails.html',
})
export class HoteldetailsPage {

  hotel_name:any;
  email:any;
  mobile_no:any;
  password:any;
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public AF:AngularFireAuth,
    public AlrtCtrl:AlertController,
    public Loading:LoadingController,
    public AD: AngularFireDatabase
    ){
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoteldetailsPage');
  }


  hotel_info(){

    if( this.hotel_name == null){
      let alert = this.AlrtCtrl.create({

        title: 'Error',
        message:'Enter the valid Hotel Name',
        buttons:['OK']
      });

      alert.present();  
    }

    else if(this.mobile_no == null){

      let alert = this.AlrtCtrl.create({

        title: 'Error',
        message:'Enter the valid Mobile number',
        buttons:['OK']
      });

      alert.present();  
    }
    else{

      let a = this.AF.auth.currentUser.uid;

      this.AD.database.ref('users/'+ a).set({

        hotelname: this.hotel_name,
        hotel_email:this.email,
        hotel_mobile:this.mobile_no,
        user:'hotel'
      });

      this.hotel_name = null;
      this.mobile_no = null;
      this.email = null; 

      let alrt = this.AlrtCtrl.create({
        title:'Data has been added successfully',
        buttons:[{

          text:'Ok',
          handler:() => {

            this.navCtrl.push(HomePage);

          }
        }]
      });
      alrt.present();
    }
  }
}
