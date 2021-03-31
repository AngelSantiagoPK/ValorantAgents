import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AgentsDataService } from '../../services/agents.data.service';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss'],
})
export class AgentDetailComponent implements OnInit {
  agent: Agent;
  background: ThemePalette = 'primary';

  constructor(
    private route: ActivatedRoute,
    private agentsDataService: AgentsDataService
  ) {}

  ngOnInit(): void {
    this.agentsDataService
      .get()
      .pipe(
        tap((records) => {
          const agentName = this.route.snapshot.params.agentName;
          this.agent = records.find(
            (record) => record.fields.Name === agentName
          );
        })
      )
      .subscribe();
  }
}
