
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PancakesPageRoutingModule } from './pancakes-routing.module';
import { PancakesPage } from './pancakes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PancakesPageRoutingModule
  ],
  declarations: [PancakesPage]
})
export class PancakesPageModule {}
