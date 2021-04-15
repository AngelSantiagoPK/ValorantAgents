import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentSelectPage } from './pages/agent-select/agent-select.page';
import { AgentPage } from './pages/agent/agent.page';
import { AgentsPage } from './pages/agents/agents.page';
import { SplashPage } from './pages/splash/splash.page';
import { ValorantTheaterPage } from './pages/valorant-theater/valorant-theater.page';

const routes: Routes = [
  {
    path: '',
    component: SplashPage,
  },
  {
    path: 'agents',
    component: AgentsPage,
  },
  {
    path: 'agent-detail/:agentName',
    component: AgentPage,
  },
  {
    path: 'valorant-theater',
    component: ValorantTheaterPage,
  },
  {
    path: 'agent-select',
    component: AgentSelectPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
