import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContadorService } from 'src/app/services/contador.service';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // ContadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
