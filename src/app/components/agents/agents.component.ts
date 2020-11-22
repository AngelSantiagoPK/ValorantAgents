import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgentsService } from '../../agents.service';
import { Agent } from '../../../models';

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
