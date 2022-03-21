
import { Component } from '@angular/core';
import { belleBruxelles, listaBruxelles } from 'src/app/belleBruxelles';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //recupero la lista
  myLista: belleBruxelles[]=[];

  constructor() {
    this.myLista = listaBruxelles.slice();
  }

}
