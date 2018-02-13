/*********************************************/
//
// Static module with static page routes
//
/*********************************************/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';


import { CommonModule } from '@angular/common';

const staticRoutes: Routes = [
    { path: 'about', component: AboutComponent, data: { title: 'About'}},
    { path: 'feature', component: FeatureComponent, data: { title: 'Feature'}},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(staticRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class StaticRoutingModule { }
