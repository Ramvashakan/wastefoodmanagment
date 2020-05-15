import { AsramamPage } from './../pages/asramam/asramam';
import { HotelPage } from './../pages/hotel/hotel';
import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { firebaseConfig } from './config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,SignupPage,HotelPage,AsramamPage
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
    HomePage,SignupPage,HotelPage,AsramamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,AngularFireAuth,AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
