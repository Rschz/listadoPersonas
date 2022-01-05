import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { FormPersonaComponent } from './personas/form-persona/form-persona.component';
import { LoggingService } from './LoggingService.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonaService } from './services/persona.service';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    FormPersonaComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [LoggingService, PersonaService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
