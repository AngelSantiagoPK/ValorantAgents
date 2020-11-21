import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agent } from '../../../models/agent';
import { AgentsService } from '../../agents.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss'],
})
export class AgentDetailComponent implements OnInit {
  agent: Agent;

  constructor(
    private agentsService: AgentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.agent = this.agentsService.getSelectedAgent();
    this.route.params
      .pipe(
        tap((params) => {
          this.agentsService.selectAgentByName(params.agentName);
          this.agent = this.agentsService.getSelectedAgent();
        })
      )
      .subscribe();
  }
}
