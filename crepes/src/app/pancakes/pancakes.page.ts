import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pancake, listeCrepes } from '../pancake';
import { PancakeService } from '../services/pancake.service';

@Component({
  selector: 'app-pancakes',
  templateUrl: './pancakes.page.html',
  styleUrls: ['./pancakes.page.scss'],
})
export class PancakesPage implements OnInit {

  maCrepe : Pancake;
  
  constructor(private router : Router,
              private activatedRoute : ActivatedRoute,
              private pancakeService: PancakeService) { }
  
  ngOnInit() {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    const idPancake = Number(paramMap.get("id"));
    //this.maCrepe = listeCrepes.find(crepe => crepe.id == idPancake);
    this.maCrepe = this.pancakeService.lista.find(crepe=>crepe.id == idPancake);
  }
  //Router -> per navigare con url, dove path l'ho chiamato /home
  public retourHome(){
    this.router.navigateByUrl('/home');
  }

  public showMap(){
    const latitude= this.maCrepe.location.lati;
    const longitude = this.maCrepe.location.longi;
    const zoom = 20;
    const link ='google.com/maps/@'+latitude+','+longitude+','+zoom+'z';
    window.open(link);
  }

}
