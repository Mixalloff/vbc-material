import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AgentAppComponent } from './agent-app/agent-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
