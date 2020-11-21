import { Component, Input, OnInit } from '@angular/core';
import { Agent } from '../../models/agent';
import { AgentsService } from '../agents.service';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {

  agent: Agent;

  constructor(private agentsService: AgentsService) { }

  ngOnInit(): void {
    this.agent = this.agentsService.getSelectedAgent();
  }

}
