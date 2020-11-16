import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/models/agent';
import { AGENTS } from '../models/agents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vAlorant Agents';
  agents: Agent[] = AGENTS;

  ngOnInIt() {
  }
}



