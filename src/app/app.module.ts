import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AgentsService } from './agents.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentDetailComponent } from './components/agent-detail/agent-detail.component';
import { AgentsComponent } from './components/agents/agents.component';
import { ValorantTheaterComponent } from './components/valorant-theater/valorant-theater.component';
import { AgentPage } from './pages/agent/agent.page';
import { AgentsPage } from './pages/agents/agents.page';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    AgentDetailComponent,
    AgentsPage,
    AgentPage,
    ValorantTheaterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    YouTubePlayerModule,
  ],
  providers: [AgentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
