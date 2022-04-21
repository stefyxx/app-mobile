
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyLocation, Pancake, UserPhoto } from '../pancake';
import { LocationService } from '../services/localization.service';
import { PancakeService } from '../services/pancake.service';
//NN MOLTO BBENE COME E' SCRITTO: nome della class
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {

  newCrepe: Pancake;
  newPhoto: UserPhoto; // in pancake.ts alla radice
  currentLocation: MyLocation;

  constructor(private router: Router,
    private photoService: PhotoService,
    private pancakeService: PancakeService,
    private locationService: LocationService
    ) { }

  ngOnInit() {
  }

  public retourHome(){
  }
  public async addPhoto(){
    //alert('photo'); // il bottone funziona
    this.newPhoto= await this.photoService.getNewPhoto();
  }

  public async addPosition(){
    //ora posso recuperare la locazione anche
    this.currentLocation = await this.locationService.getMyLocation();
  }

  public onAddPancake(submittedForm: NgForm){
    if(submittedForm.valid){
      this.pancakeService.addPancake({
        name: submittedForm.value.leNom,
        descr: submittedForm.value.descr,
        photo: this.newPhoto,
        //location: this.currentLocation,
      });
      //quando creo, ritorno a home
      this.router.navigateByUrl('/home');
    }
    else{
      alert('non buona creazione');
    }
  }

    public showMap(){
      const latitude= this.newCrepe.location.lati;
      const longitude = this.newCrepe.location.longi;
      const zoom = 20;
      const link ='google.com/maps/@'+latitude+','+longitude+','+zoom+'z';
      window.open(link);
    }

}


