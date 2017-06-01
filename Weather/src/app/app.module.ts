import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {WeatherDetailPage} from '../pages/WeatherDetail/WeatherDetail'
import { WeatherProvider } from '../providers/Weather'

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        WeatherDetailPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        WeatherDetailPage
    ],
    providers: [WeatherProvider, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }