
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { belleBruxelles, listaBruxelles, LuogoCreate } from '../belleBruxelles';
import { PhotoService } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class MyPhotoService {

  public lista: belleBruxelles[] = listaBruxelles.slice();
  private _storageKey: string = 'luoghi';
  constructor(private platform: Platform, private photoService: PhotoService) { }

  public addLuogo(newPhoto: LuogoCreate){
    const newId= this.lista.length +1;
    const newLuogo ={
      id: newId,
      titre: newPhoto.name,
      description: newPhoto.descr,
      photo: newPhoto.photo,
      location: newPhoto.loc,
      link_EN_wiki: newPhoto.link_EN_wiki
    };

    this.lista.push(newLuogo);

    Storage.set({
      key: this._storageKey,
      value: JSON.stringify(this.lista)
    });
  }

  public async loadSavedPancakes(){
    const luogoJson = await Storage.get(
      {
        key: this._storageKey
      }
    );
    //se non arriva a convertirlo, sarà una tab vuota
    this.lista = JSON.parse(luogoJson.value) || [];
    //Plateforme autre que Appareil mobile => Appli dans navigateur Web
    if(!this.platform.is("hybrid")){
      for(let myluogo of this.lista){
        if(myluogo.photo){
          const picFilePath= myluogo.photo.filePath;
          // console.log("pancakeService - photo file path: " +picFilePath);
          const fileData = await this.photoService.readPhotoDataBase64(picFilePath);
          //  console.log("found data: " + fileData);
          myluogo.photo.webViewPath = fileData;
        }
      }
    }

}
