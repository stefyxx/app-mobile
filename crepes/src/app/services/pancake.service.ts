
import { Injectable } from '@angular/core';
import { listeCrepes, Pancake, PancakeAddOptions } from '../pancake';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { PhotoService } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {

  //creamo una tab di crepes con le foto salvate
  //public lista : Pancake[] = [];
  // in home l'if non funziona perché lavora su una copy, non messa a giorno contemporaneamente
  // allora inizializzo qui' la lista con la fake
  public lista: Pancake[] =listeCrepes.slice();
  private STOREGE_KEY: string = "pancakes";
  //key della tab STOREGE_KEY

  constructor(private platform: Platform,
              private photoService: PhotoService) {

              }

  public addPancake(newPancake: PancakeAddOptions){
    //creare nuovo id x il nuovo pancake
    const newId= this.lista.length +1;
    //aggiungere newPancake alla lista
    const newCrepe ={
      id:newId,
      name: newPancake.name,
      description: newPancake.descr,
      photo: newPancake.photo,
      panLoc: newPancake.loc
    };
    this.lista.push(newCrepe);

    console.log(JSON.stringify(this.lista));
    Storage.set({
      key: this.STOREGE_KEY,
      value:JSON.stringify(this.lista),
    });
  }

  //cerca di convertire imgJson in
  public async loadSavedPancakes(){
    const pancakesAsJson = await Storage.get(
      {
        key: this.STOREGE_KEY
      }
    );
    //se non arriva a convertirlo, sarà una tab vuota
    this.lista = JSON.parse(pancakesAsJson.value) || [];

    //Plateforme autre que Appareil mobile => Appli dans navigateur Web
    if(!this.platform.is('hybrid')){
      for(let aPancake of this.lista){
        if(aPancake.photo){
          const picFilePath= aPancake.photo.filePath;
          // console.log("pancakeService - photo file path: " +picFilePath);
          const fileData = await this.photoService.readPhotoDataBase64(picFilePath);
          //  console.log("found data: " + fileData);
          aPancake.photo.webViewPath = fileData;
        }
      }
    }
  }
}
