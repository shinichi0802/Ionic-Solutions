import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the WeatherDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-WeatherDetail',
    templateUrl: 'WeatherDetail.html'
})
export class WeatherDetailPage {

    forecast: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        //Pull the selected forecast off of navParams
        this.forecast = this.navParams.get('forecast');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad WeatherDetailPage');
    }

}
