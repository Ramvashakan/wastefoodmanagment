import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class HotelPage {

  types:any;
  Hotelname:any;
  food:any;
  quantity:any;
  mobilenumber:any;

  list:AngularFireList<any>;
 

  Clothes:any;
  NoOfSet:any;
  C_MobileNo:any;

  B_mobilenumber:any;
  NoOFBooks:any;
  books:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public AF:AngularFireAuth,
    public AD:AngularFireDatabase,
    public AlrtCtrl: AlertController,
    public Loading: LoadingController
    ) {

       let UserId = AF.auth.currentUser.uid;

       this.AD.database.ref('/users/' + UserId).once('value').then( snapshot => {   
        this.Hotelname = (snapshot.val() && snapshot.val().hotelname);

       });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');
  }

  food_donate(){

    let a = this.AF.auth.currentUser.uid;
    
      this.AD.database.ref('HotelDonation/Food/'+a).set({

       Food: this.food,
         Quantity:this.quantity,
         MobileNumber:this.mobilenumber,
         HotelName: this.Hotelname
        
       }).then(result =>{

         let alert = this.AlrtCtrl.create({

           title:'Donation Added',
           subTitle:'User Donation has been added successfully',
        buttons:[{
            
             text:'OK',
             handler: ()=>{

               this.food = null;
               this.quantity = null;
               this.mobilenumber = null;
           }
           }]
          
         });

         alert.present();

       }).catch(err =>{

         let alert = this.AlrtCtrl.create({

           title:'Error ',
           subTitle: err,
           buttons:['OK']
        
         });
         alert.present();
       });
  }
  

  cloth_donate(){

    let a = this.AF.auth.currentUser.uid;

      this.AD.database.ref('HotelDonation/Clothes/'+ a).set({

        ClothType: this.Clothes,
        Quantity:this.NoOfSet,
        MobileNumber:this.C_MobileNo,
        HotelName: this.Hotelname
        
      }).then(result =>{

        let alert = this.AlrtCtrl.create({

          title:'Donation Added',
          subTitle:'User Donation has been added successfully',
          buttons:[{
            
            text:'OK',
            handler: ()=>{

              this.Clothes = null;
              this.NoOfSet = null;
              this.C_MobileNo = null;

            }

          }]
          
        });

        alert.present();

      }).catch(err =>{

        let alert = this.AlrtCtrl.create({

          title:'Error ',
          subTitle: err,
          buttons:['OK']
          
        });

        alert.present();

      });
  }


  books_donate(){

    let a = this.AF.auth.currentUser.uid;

      this.AD.database.ref('HotelDonation/Books/'+ a).set({

        BookType: this.books,
        Quantity:this.NoOFBooks,
        MobileNumber:this.B_mobilenumber,
        HotelName: this.Hotelname
        
      }).then(result =>{

        let alert = this.AlrtCtrl.create({

          title:'Donation Added',
          subTitle:'User Donation has been added successfully',
          buttons:[{
            
            text:'OK',
            handler: ()=>{

              this.food = null;
              this.quantity = null;
              this.mobilenumber = null;

            }

          }]
          
        });

        alert.present();

      }).catch(err =>{

        let alert = this.AlrtCtrl.create({

          title:'Error ',
          subTitle: err,
          buttons:['OK']
          
        });

        alert.present();

      });
  }

}
