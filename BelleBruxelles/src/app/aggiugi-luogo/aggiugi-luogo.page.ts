
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { belleBruxelles, MyLocation, myPhoto } from '../belleBruxelles';
import { LocalizationService } from '../services/localization.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-aggiugi-luogo',
  templateUrl: './aggiugi-luogo.page.html',
  styleUrls: ['./aggiugi-luogo.page.scss'],
})
export class AggiugiLuogoPage implements OnInit {

  newLuogo : belleBruxelles;
  newPhoto : myPhoto;
  currentLocation :MyLocation;

  constructor( private router: Router,
    private photoService: PhotoService,
    private locationService: LocalizationService
    ) { }

  ngOnInit() {
  }

  public retourHome(){
    this.router.navigateByUrl('/home');
  }

  public async addPhoto(){
    this.newPhoto= await this.photoService.getNewPhoto();
  }

  public async addPosition(){
    this.currentLocation = await this.locationService.getMyLocation();
  }

  public showMap(){
    const lat = this.newLuogo.location.mylatitude;
    const long = this.newLuogo.location.mylongitude;
    const zoom = 20;
    const link = 'google.com/maps/@'+lat+ ',' +long+ ',' +zoom+ 'z';
    window.open(link);
  }

  // aggiungere una foto alla lista di Home
  public onAddLuogo(submittedForm: NgForm){
    if(submittedForm.valid){
      
    }
  }


}
