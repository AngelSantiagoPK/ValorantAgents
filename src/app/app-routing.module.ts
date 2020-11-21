import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentsComponent } from './agents/agents.component';

const routes: Routes = [
  {
    path: 'agents',
    component: AgentsComponent
  },
  {
    path: 'agent-detail',
    component: AgentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
