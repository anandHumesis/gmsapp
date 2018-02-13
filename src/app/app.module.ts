
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { SharedModule,
         HeaderComponent,
         FooterComponent,
         SidenavComponent,
         MainComponent,
      } from './shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import the core, home, static and feature modules
import { HomeModule } from './home/home.module';
import { StaticModule } from './static/static.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MainComponent,
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // shared module for the whole application
    SharedModule.forRoot(),

    // core, home, static and feature modules
    CoreModule,
    HomeModule,
    StaticModule,

    // app routing module
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
