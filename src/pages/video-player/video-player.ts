import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
import { PlayList } from '../../components/play-list/play-list';


/*
  Generated class for the VideoPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
  providers: [PlayList]
})
export class VideoPlayerPage {
  video: any;
  url: any;
  id: String;
  isFavorite: boolean = false;
  playList: PlayList = new PlayList();

  private playerSrc : SafeResourceUrl|String = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.video = navParams.data;
    this.isFavorite = (this.video.fav == 1);
    this.id = this.video.id;
    this.playerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPlayerPage');
  }
  
  playVideo(videoId) {
    //YoutubeVideoPlayer.openVideo(videoId);
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.playList.updateList(this.id, this.isFavorite);
  }  
}
