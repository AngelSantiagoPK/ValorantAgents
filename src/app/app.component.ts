import { Component, OnInit } from '@angular/core';
import { AGENTS } from '../models/agents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vAlorant Agents';
  agents = AGENTS;

  ngOnInit() {}
}
