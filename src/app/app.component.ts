import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/models/agent';
import { AGENTS } from '../models/agents';
import { AgentsService } from './agents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vAlorant Agents';
  agents = AGENTS;
  selectedAgent: Agent;

  constructor(private agentService: AgentsService) {}

  ngOnInIt() {}

  selectAgent(agent: Agent) {
    this.selectedAgent = agent;
    this.agentService.selectAgent(this.selectedAgent);
  }
}
