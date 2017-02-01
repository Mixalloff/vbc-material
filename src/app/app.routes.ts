import { AgentAppComponent } from './agent-app/agent-app.component';
import { asap } from 'rxjs/scheduler/asap';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: AgentAppComponent }
]

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);