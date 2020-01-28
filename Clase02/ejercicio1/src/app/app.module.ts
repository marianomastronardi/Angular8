import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { DrivenComponent } from './driven/driven.component';
import { ValidarDrivenComponent } from './validar-driven/validar-driven.component';

/* 1. ReactiveFormModele -> AppComponent.ts */
/* 2. en component -> via constructor -> FormBuilder */

@NgModule({
  declarations: [
    AppComponent,
    DrivenComponent,
    ValidarDrivenComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
