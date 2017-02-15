import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VideoPlayerPage } from '../pages/video-player/video-player';
import { PlayList } from '../components/play-list/play-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VideoPlayerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VideoPlayerPage
  ],
  providers: [{
    provide: ErrorHandler, 
    useClass: IonicErrorHandler
  }]
})
export class AppModule {}
