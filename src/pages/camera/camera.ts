import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions } from '@ionic-native/media-capture';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})

export class CameraPage {

    imgView:String ;
    VideoView:string;

    optionsVideo: CaptureVideoOptions = { limit: 1, duration : 30 };
    options: CameraOptions = {
  
        quality: 100,
  
        destinationType: this.camera.DestinationType.DATA_URL,
  
        encodingType: this.camera.EncodingType.JPEG,
  
        mediaType: this.camera.MediaType.PICTURE,
  
        saveToPhotoAlbum : true
      }
  
      base64ToGallery:Base64ToGallery;
  
    
      constructor(private camera: Camera, private mediaCapture:MediaCapture) {
    }
  
  
  
    btnCameraTapped(event) {
      // That's right, we're pushing to ourselves!
      this.camera.getPicture(this.options).then((imageData) => {
  
       // imageData is either a base64 encoded string or a file URI
  
       // If it's base64:
  
       this.imgView= 'data:image/jpeg;base64,' + imageData;
       this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(
  
          res => console.log('Saved image to gallery ', res),
  
          err => console.log('Error saving image to gallery ', err)
  
      );
  
      }, (err) => {
  
       // Handle error
      });
  
    }


    btnTakeVideoTapped(event) {

      this.mediaCapture.captureVideo(this.optionsVideo)
        .then(
          (data: MediaFile[]) => console.log(data),
          (err: CaptureError) => console.error(err)
        );
      
        }
  
  }
