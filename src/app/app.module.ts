import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { firebaseConfig } from './config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AsramamPage } from './../pages/asramam/asramam';
import { HotelPage } from './../pages/hotel/hotel';
import { SignupPage } from './../pages/signup/signup';
import { AsramamdetailsPage } from './../pages/asramamdetails/asramamdetails';
import { HoteldetailsPage } from './../pages/hoteldetails/hoteldetails';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    HotelPage,
    AsramamPage,
    HoteldetailsPage,
    AsramamdetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    HotelPage,
    AsramamPage,
    AsramamdetailsPage,
    HoteldetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,AngularFireAuth,AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
