import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  //funzione x prendere una foto, ma ancora non a salva
  openCamera() {
    const maPhoto = Camera.getPhoto(
      {
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri,
        quality: 100, // da 0 a 100
      }
    );
  }

}
