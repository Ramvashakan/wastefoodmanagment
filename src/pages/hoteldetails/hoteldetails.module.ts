import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoteldetailsPage } from './hoteldetails';

@NgModule({
  declarations: [
    HoteldetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HoteldetailsPage),
  ],
})
export class HoteldetailsPageModule {}
