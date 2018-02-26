import { Component, OnInit } from '@angular/core';
import {Video} from '../video';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  Videos: Array<Video>;
  selectVideo: Video;


  constructor( private  _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(resVideoData => this.Videos = resVideoData);

  }
  onselectVideo(video: any) {
    this.selectVideo = video;
    console.log(this.selectVideo);
  }

}
