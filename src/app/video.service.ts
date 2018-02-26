import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Video} from './video';
@Injectable()
export class VideoService {


  private _getUrl = '/api/videos';
  private _postUrl = '/api//videos';
  private _putUrl ="/api/videos/";
  private _deleteUrl ="/api/videos/";

    constructor(private  _http: Http) { }

  getVideos() {

    return this._http.get(this._getUrl)
        .map((response: Response) => response.json());
  }


  addVideo(video: Video) {
      console.log(video);
   const headers = new Headers({'Content-Type': 'application/json'});
   const options = new RequestOptions({headers: headers});
   return this._http.post(this._postUrl, JSON.stringify(video),options)
       .map((response: Response) => response.json());
  }

    updateVideo(video: Video) {
        console.log(video);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this._http.put(this._putUrl + video._id, JSON.stringify(video),options)
            .map((response: Response) => response.json());
    }
    deleteVideo(video: Video) {
        console.log(video);
        return this._http.delete(this._deleteUrl + video._id)
            .map((response: Response) => response.json());
    }


}

