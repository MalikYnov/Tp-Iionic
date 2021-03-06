import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions } from '@ionic-native/media-capture';
import { LocalNotifications } from '@ionic-native/local-notifications';
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

    optionsVideo: CaptureVideoOptions = { limit: 1, duration : 30};
    options: CameraOptions = {
  
        quality: 100,
  
        destinationType: this.camera.DestinationType.DATA_URL,
  
        encodingType: this.camera.EncodingType.JPEG,
  
        mediaType: this.camera.MediaType.PICTURE,
  
        saveToPhotoAlbum : true
      }
  
      base64ToGallery:Base64ToGallery;
  
    
      constructor(private camera: Camera, private mediaCapture:MediaCapture,private localNotifications: LocalNotifications) {
    }
  
  
  
    btnCameraTapped(event) {
      // That's right, we're pushing to ourselves!
      this.camera.getPicture(this.options).then((imageData) => {
  
       // imageData is either a base64 encoded string or a file URI
  
       // If it's base64:
  
       this.imgView= 'data:image/jpeg;base64,' + imageData;
       this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(
  
          res => {
            console.log('Saved image to gallery ', res);
              //si la photo c'est corectement enregistrée on envoie une notification à l'user
              this.localNotifications.schedule({
                id: 1,
                text: 'La photo' + this.imgView +" est bien enregistrée"
              });
          
          },
  
          err => console.log('Error saving image to gallery ', err)
  
      );
  
      }, (err) => {
  
       // Handle error
      });
  
    }


    btnTakeVideoTapped(event) {
      
      this.mediaCapture.captureVideo(this.optionsVideo)
        .then(
          (data: MediaFile[]) => {
            console.log(data);
            //si la video c'est corectement enregistrée on envoie une notification à l'user
            this.localNotifications.schedule({
              id: 1,
              text: 'Video enregistrée'
            });

          },
          (err: CaptureError) => console.error(err)
        );
      
        }
  
  }
