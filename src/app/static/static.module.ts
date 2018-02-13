import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';

import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  imports: [
    CommonModule,
    StaticRoutingModule,
  ],
  declarations: [AboutComponent, FeatureComponent]
})
export class StaticModule { }
