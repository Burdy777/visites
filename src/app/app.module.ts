import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import 'hammerjs';
import { DialogComponent } from './visites/shared/component/dialog/dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { VisitesComponent } from './visites/pages/visites/visites.component';
import { VisiteComponent } from './visites/component/visite/visite.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitesComponent,
    DialogComponent,
    VisiteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule
    ],
  providers: [],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
