
import { Injectable } from '@angular/core';
import { CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { Camera } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private platform: Platform) { }

  public async readPhotoDataBase64(aPath: string){
    const readFile = await Filesystem.readFile({
      path: aPath,
      directory: Directory.Data
    });
    return `data:image/jpeg;base64,${readFile.data}`;
  }

  public async getNewPhoto(){
    const photoPrise = await Camera.getPhoto(
      {
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri,
        quality: 100,
      }
      );

      const savedImage= await this.savePicture(photoPrise);

      return{
        filePath: savedImage.filePath,
        webViewPath : savedImage.webViewPath,
      };
  };

  private async savePicture(aPhoto: Photo){
    //convert photo to base64 format, required by Filesystem API
    const base64Data = await this.readAsBase64(aPhoto);
    //diamo un nome alla foto: Write file to data directory
    const fileName='WAD21_' + new Date().getTime() + '.jpeg';

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data //salvato nell'apparecchio dove ti trovi, PC o cell
      }
    );
    if(this.platform.is('hybrid')){
        // Will later Display the new image by rewriting the 'file://' path to HTTP
        // Details: https://ionicframework.com/docs/building/webview#file-protocol
        console.log('saving file (native)- webViewPath:' + Capacitor.convertFileSrc(savedFile.uri));
        console.log('saving file (native)- path: ' + savedFile.uri);
        return {
          filePath: savedFile.uri,
          webViewPath: Capacitor.convertFileSrc(savedFile.uri)
        } ;
    }else {
      return {
        filePath: fileName,
        webViewPath: aPhoto.webPath
      } ;
    }
  }

  //method x leggere il formato della foto, in bit , poi in base  64 (cosi' come l'abbbiamo salvata) e lo converte in string
  private async readAsBase64(myphoto: Photo){
    //'hibrid'will detect capacitor / cordova - native runtimes
    if(this.platform.is('hybrid')){
      const file = await Filesystem.readFile({
        path: myphoto.path
      });
      return file.data;
    }
    else{
      //fetch a photo, read as a blob and convert to base64
      const response = await fetch(myphoto.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
  }

  private convertBlobToBase64 = (blob: Blob) =>  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);

  }
  );

}
