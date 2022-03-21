
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Directory, Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private platform: Platform) { }

  public async readPhotoDataBase64(myPhoto: string){
    const readFile = await Filesystem.readFile({

      path: myPhoto,
      directory: Directory.Data
    })
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

  private async savePicture(myphoto: Photo){
    //converto la foto in base 64 perché cosi' é richiesto da Fylesistem
    const base64Data = await this.readAsBase64(myphoto);
    //do un nome alla mia foto
    const fileName='BelBx' + new Date().getMilliseconds() + '.jpeg';

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data //salvato nell'apparecchio dove ti trovi, PC o cell
      }
    );
    if(this.platform.is('hybrid')){
        console.log('saving file (native)- webViewPath:' + Capacitor.convertFileSrc(savedFile.uri));
        console.log('saving file (native)- path: ' + savedFile.uri);
        return {
          filePath: savedFile.uri,
          webViewPath: Capacitor.convertFileSrc(savedFile.uri)
        } ;
    }else {
      return {
        filePath: fileName,
        webViewPath: myphoto.webPath
      }
    }
  }

  private async readAsBase64(aPhoto: Photo) {
    //"hybrid" will detect capacitor / cordova - native runtimes
    if(this.platform.is('hybrid')){
          const file = await Filesystem.readFile(
            {
              path: aPhoto.path
            }
          );

          return file.data;
    }else {
          // Fetch a photo ,read as a blob and convert to base64
          const response = await fetch(aPhoto.webPath);
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
