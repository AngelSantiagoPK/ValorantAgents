import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Agent } from '../../../models';
import { AgentsService } from '../../agents.service';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss'],
})
export class AgentDetailComponent implements OnInit {
  agent: Agent;
  background: ThemePalette = 'warn';

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
