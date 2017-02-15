import { Component } from '@angular/core';

/*
  Generated class for the PlayList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
let instance = null;

export class PlayList {
  private videos =  [
        {     
          "id": "1",
          "name": "Az Samad and Cheryl Tan",
          "url": "https://www.youtube.com/embed/Lu585Uh-aLg",
          "thumbnail" : "t1.png",
          "fav": true
        },
        {     
          "id": "2",
          "name": "A Malaysian's Guide to Life Hack",
          "url": "https://www.youtube.com/embed/ej7QpVprsXg",
          "thumbnail" : "t2.png",
          "fav": false
        },
        {     
          "id": "3",
          "name": "BeatBox Brilliance",
          "url": "https://www.youtube.com/embed/GNZBSZD16cY",
          "thumbnail" : "t3.png",
          "fav": false
        },
        {     
          "id": "4",
          "name": "12 year Old App Developer",
          "url": "https://www.youtube.com/embed/Fkd9TWUtFm0",
          "thumbnail" : "t4.png",
          "fav": false
        }
        
      ];
 
  text: string;

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  getFavoriteVideos() {
    let list: any = [];
    for (let i = 0; i < this.videos.length; i++) {
        if (this.videos[i].fav) {
          list.push(this.videos[i]);
        }
    }
    return list;
  }

  getOtherVideos() {
    let list: any = [];
    for (let i = 0; i < this.videos.length; i++) {
        if (!this.videos[i].fav) {
          list.push(this.videos[i]);
        }
    }
    return list;
  }

  updateList(id: String, is_fav: boolean) {
    let index = this.videos.findIndex(item => item.id === id);
    this.videos[index].fav = is_fav;
  }

}
