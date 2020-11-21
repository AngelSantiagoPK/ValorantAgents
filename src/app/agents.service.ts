import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../models/agent';
import { AGENTS } from 'src/models/agents';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  private selectedAgent: Agent = AGENTS[0];

  constructor() { }

  getAgents() {
    return AGENTS;
  }

  selectAgent(agent: Agent) {
    this.selectedAgent = agent;
    console.log("Agent Selected: " + this.selectedAgent.name);
  }

  getSelectedAgent(): Agent {
    return this.selectedAgent;
  }
}
