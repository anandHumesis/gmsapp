import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', redirectTo: 'about', pathMatch: 'full'},
  { path: 'feature', redirectTo: 'feature', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
    {enableTracing: true }),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
