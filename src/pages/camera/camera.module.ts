import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import { Camera } from '@ionic-native/camera';
import { MediaCapture} from '@ionic-native/media-capture';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage)
  ],
  providers:[
    Camera,
    MediaCapture,
    LocalNotifications
  ]
})
export class CameraPageModule {}
