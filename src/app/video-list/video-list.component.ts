import { Component, OnInit, EventEmitter } from '@angular/core';
import {Video} from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['selectVideo']
})
export class VideoListComponent implements OnInit {
    public selectVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onselect(vid: Video) {
    this.selectVideo.emit(vid);
  }
}
