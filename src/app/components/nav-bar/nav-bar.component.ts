import { Component, OnInit } from '@angular/core';
import { Agent } from '../../../models';
import { AgentsService } from '../../agents.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  agents: Agent[];
  constructor(private agentsService: AgentsService) {}

  ngOnInit(): void {
    this.agents = this.agentsService.getAgents();
  }
}
