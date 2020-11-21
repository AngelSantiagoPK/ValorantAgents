import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentPage } from './pages/agent/agent.page';
import { AgentsPage } from './pages/agents/agents.page';

const routes: Routes = [
  {
    path: 'agents',
    component: AgentsPage,
  },
  {
    path: 'agent-detail/:agentName',
    component: AgentPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
