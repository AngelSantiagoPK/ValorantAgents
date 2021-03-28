import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AgentsService } from './agents.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentDetailComponent } from './components/agent-detail/agent-detail.component';
import { AgentsComponent } from './components/agents/agents.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SplashComponent } from './components/splash/splash.component';
import { ValorantTheaterComponent } from './components/valorant-theater/valorant-theater.component';
import { AgentPage } from './pages/agent/agent.page';
import { AgentsPage } from './pages/agents/agents.page';
import { SplashPage } from './pages/splash/splash.page';
import { ValorantTheaterPage } from './pages/valorant-theater/valorant-theater.page';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    AgentDetailComponent,
    AgentsPage,
    AgentPage,
    ValorantTheaterComponent,
    ValorantTheaterPage,
    NavBarComponent,
    SplashComponent,
    SplashPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    YouTubePlayerModule,
    MatSelectModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [AgentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
