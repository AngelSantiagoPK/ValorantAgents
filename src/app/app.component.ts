import { Component, OnInit } from '@angular/core';
import { Agent, AGENTS } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vAlorant Agents';
  agents: Agent[] = AGENTS;

  ngOnInit() {}
}
