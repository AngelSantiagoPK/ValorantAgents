import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AGENTS, Agent } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private selectedAgent: Agent = AGENTS[0];

  constructor() {}

  getAgents() {
    return AGENTS;
  }

  getSelectedAgent(): Agent {
    return this.selectedAgent;
  }

  selectAgentByName(name: string) {
    this.selectedAgent = AGENTS.find((agent) => agent.name === name);
  }
}
