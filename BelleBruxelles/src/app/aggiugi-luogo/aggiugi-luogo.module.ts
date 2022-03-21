import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiugiLuogoPageRoutingModule } from './aggiugi-luogo-routing.module';

import { AggiugiLuogoPage } from './aggiugi-luogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggiugiLuogoPageRoutingModule
  ],
  declarations: [AggiugiLuogoPage]
})
export class AggiugiLuogoPageModule {}
