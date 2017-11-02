import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user: any = { username: String, password: String }
  formsIsVisible:boolean;
  msgIsVisible:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.formsIsVisible = true;
    this.msgIsVisible = false;
    
    this.user.username = "";
    this.user.password = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  registerUser(event){
    this.formsIsVisible = false;
    this.msgIsVisible = true;
    }

}
