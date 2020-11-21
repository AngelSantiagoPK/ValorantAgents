import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentsService } from './agents.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    AgentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [
    AgentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
