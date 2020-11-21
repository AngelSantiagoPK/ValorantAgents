import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AgentsService } from './agents.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AgentDetailComponent } from './components/agent-detail/agent-detail.component';
import { AgentsPage } from './pages/agents/agents.page';
import { AgentPage } from './pages/agent/agent.page';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    AgentDetailComponent,
    AgentsPage,
    AgentPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
  ],
  providers: [AgentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
