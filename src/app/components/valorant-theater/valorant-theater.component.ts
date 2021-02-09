import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valorant-theater',
  templateUrl: './valorant-theater.component.html',
  styleUrls: ['./valorant-theater.component.scss'],
})
export class ValorantTheaterComponent implements OnInit {
  //variables

  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
