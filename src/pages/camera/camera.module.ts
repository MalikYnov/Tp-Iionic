import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
    Camera
  ],
  providers:[
    Camera
  ]
})
export class CameraPageModule {}
