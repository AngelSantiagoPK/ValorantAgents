import { Component, OnInit } from '@angular/core';
import { Video } from '../../../models/video';
import { VIDEOS } from '../../../models/videos';

@Component({
  selector: 'components-valorant-theater',
  templateUrl: './valorant-theater.component.html',
  styleUrls: ['./valorant-theater.component.scss'],
})
export class ValorantTheaterComponent implements OnInit {
  //variables
  movies = VIDEOS;

  selectedMovie: Video = {
    videoId: 'e_E9W2vsRbQ',
  };

  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  onClick(event) {
    this.selectedMovie = event;
  }
}
