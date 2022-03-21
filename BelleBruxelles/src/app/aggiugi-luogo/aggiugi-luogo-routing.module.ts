import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggiugiLuogoPage } from './aggiugi-luogo.page';

const routes: Routes = [
  {
    path: '',
    component: AggiugiLuogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggiugiLuogoPageRoutingModule {}
