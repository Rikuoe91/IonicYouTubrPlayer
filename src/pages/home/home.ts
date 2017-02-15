import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlayList } from '../../components/play-list/play-list';
import { VideoPlayerPage } from '../video-player/video-player';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PlayList]
})
export class HomePage {
  videos: any = [];
  fav_videos: any = [];
  playList: PlayList  = new PlayList();

  constructor(public navCtrl: NavController) {
    
  }

  ionViewWillEnter() {
    this.loadList();
  }

  loadList() {
    /*
    this.youtubeService.load()
    .then(data => {
      this.videos = data;
    });
    */
    this.videos = this.playList.getOtherVideos();
    this.fav_videos = this.playList.getFavoriteVideos();
  }

  goToDetails(video) {
    console.log(video);
    this.navCtrl.push(VideoPlayerPage, video);
  }

  noFavVideos() {
    return (this.fav_videos.length > 0) ? false : true;
  }
}
