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
  private hidenNewVideo = true;

  constructor( private  _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(resVideoData => this.Videos = resVideoData);

  }
  onselectVideo(video: any) {
    this.selectVideo = video;
    this.hidenNewVideo = true;
    console.log(this.selectVideo);
  }

  onSubmitAddVideo(video: Video) {
    console.log(video);
    this._videoService.addVideo(video)
        .subscribe(resNewVideo => {
          this.Videos.push(resNewVideo);
          this.hidenNewVideo = true;
          this.selectVideo = resNewVideo;

        });
  }

  onupdateVideoEvent(video: any) {
    this._videoService.updateVideo(video).subscribe(resUpdatedVideo => video = resUpdatedVideo);
    this.selectVideo = null;
  }

  ondeleteVideoEvent(video: any) {
    const videoArray = this.Videos;
    this._videoService.deleteVideo(video).subscribe(resDeletedVideo => {

      for (let i = 0; i < videoArray.length; i++) {
        if (videoArray[i]._id === video._id) {
          videoArray.splice(i, 1);
        }
      }
    });
    this.selectVideo = null;
  }




  newVideo() {
    this.hidenNewVideo = false;
  }
}
