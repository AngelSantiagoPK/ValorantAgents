import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AgentsDataService } from 'src/app/services/agents.data.service';

@Component({
  selector: 'app-agent-select',
  templateUrl: './agent-select.component.html',
  styleUrls: ['./agent-select.component.scss'],
})
export class AgentSelectComponent implements OnInit {
  @Input()
  agents: any;

  constructor(private agentsDataService: AgentsDataService) {}

  ngOnInit(): void {
    this.agentsDataService
      .get()
      .pipe(
        tap((records) => {
          this.agents = records;
          console.log(this.agents);
        })
      )
      .subscribe();
  }
}
