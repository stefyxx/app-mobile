
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor() { }

  public async getMyLocation(){

    const myPosition = await Geolocation.getCurrentPosition();

    const myLocation ={
      mylatitude: myPosition.coords.latitude,
      mylongitude: myPosition.coords.longitude
    };
    return myLocation;
  }
}
