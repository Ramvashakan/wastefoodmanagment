import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import{ AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { from } from 'rxjs/observable/from';



@IonicPage()
@Component({
  selector: 'page-asramamdetails',
  templateUrl: 'asramamdetails.html',
})
export class AsramamdetailsPage {

  as_mobile:any;
  as_name:any;
  as_email:any;
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public AF:AngularFireAuth,
    public AlrtCtrl:AlertController,
    public Loading:LoadingController,
    public AD: AngularFireDatabase
    ) {
      let a = this.AF.auth.currentUser.uid;
      this.tasksRef = AD.list('Asramam/'+a);
       this.tasks = this.tasksRef.snapshotChanges().pipe(
       map(changes => 
       changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
     ));
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsramamdetailsPage');
  }


  /*................................ASRAMAM DETAILS......................................... */

  asramam_details(){


  if(this.as_email == null ){

    let alert = this.AlrtCtrl.create({

      title: 'Error',
      message:'Enter the valid email',
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

    this.tasksRef.push(this.as_name);
      this.tasksRef.push(this.as_email);
      this.tasksRef.push(this.as_mobile);

      this.as_name = null;
      this.as_mobile = null;
      this.as_email= null; 
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
