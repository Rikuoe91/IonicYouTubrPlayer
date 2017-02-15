import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PersonDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html'
})
export class PersonDetailsPage {
  person;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailsPage');
  }


}
