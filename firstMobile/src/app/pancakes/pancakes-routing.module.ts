import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PancakesPage } from './pancakes.page';

const routes: Routes = [
  {
    path: '',
    component: PancakesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PancakesPageRoutingModule {}
