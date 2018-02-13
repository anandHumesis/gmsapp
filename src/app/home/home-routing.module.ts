/*********************************************/
//
// Home routing module for Quiz List and Quiz
//
/*********************************************/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';

const homeRoutes: Routes = [
  // { path: '', redirectTo: 'quiz', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class HomeRoutingModule { }
