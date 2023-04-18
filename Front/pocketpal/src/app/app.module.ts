import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { PreloaderComponent } from './partials/preloader/preloader.component';
import { HeaderComponent } from './partials/header/header.component';
import { Chart01Component } from './partials/chart01/chart01.component';
import { Chart02Component } from './partials/chart02/chart02.component';
import { Chart03Component } from './partials/chart03/chart03.component';
import { Map03Component } from './partials/map03/map03.component';
import { Map01Component } from './partials/map01/map01.component';
import { Table01Component } from './partials/table01/table01.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PreloaderComponent,
    HeaderComponent,
    Chart01Component,
    Chart02Component,
    Chart03Component,
    Map03Component,
    Map01Component,
    Table01Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
