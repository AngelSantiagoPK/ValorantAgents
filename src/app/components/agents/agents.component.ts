import { Component, OnInit } from '@angular/core';
import { Agent } from '../../../models';
import { AgentsService } from '../../agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent implements OnInit {
  agents: Agent[];
  constructor(private agentsService: AgentsService) {}

  ngOnInit(): void {
    this.agents = this.agentsService.getAgents();
  }
}
