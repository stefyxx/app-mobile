
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { listeCrepes, Pancake} from '../pancake';
import { PancakeService } from '../services/pancake.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //avevo fatto una fakeList in Pancake,
  mesCrepes: Pancake[];

  //ma ora voglio la vera, e vado a chiamare il PancakeService
  constructor(private router: Router,
    private pancakeServices: PancakeService) {
      this.mesCrepes = this.pancakeServices.lista;
    /*if(this.pancakeServices.lista.length == 0){
      this.mesCrepes = listeCrepes.slice();
    }
    this.mesCrepes = this.pancakeServices.lista;*/

    //this.mesCrepes = listeCrepes.slice();
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){
    this.loadPancakes();
  }

  public async loadPancakes(){
    await this.pancakeServices.loadSavedPancakes();
    this.mesCrepes = this.pancakeServices.lista;
  }

  public createNew(){
    this.router.navigateByUrl('/creation');
  }
}
