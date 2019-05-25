import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { UploadComponent } from './upload/upload.component';
import { ResearchComponent } from './research/research.component';
import { DemoComponent } from './demo/demo.component'

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'research', component: ResearchComponent},
  { path: 'demo', component: DemoComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
